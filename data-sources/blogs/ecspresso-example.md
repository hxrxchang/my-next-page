---
id: 'ecspresso-example'
title: 'ecspressoで0からECS(Fargate)環境を構築する'
description: 'Classi Advent Calendar 2020 19日目: ecspressoで0からECS(Fargate)環境を構築する'
embedTypes: []
createdAt: '2020-12-19'
updatedAt: '2020-12-19'
---

## はじめに

この記事は[Classi Advent Calendar 2020](https://qiita.com/advent-calendar/2020/classi) 19 日目の記事です。  
昨日は [s_nakamura](https://qiita.com/s_nakamura) さんの、[Elasticsearch 困ったときに使ってみると良さそうな 3 つの API](https://nakaearth.hatenadiary.org/entry/2020/12/17/233947)でした。

Classi で校務チームでエンジニアをしている原です。
昨年は主にフロントエンドとたまにバックエンドもやるといった業務内容でしたが、今年はインフラを触る機会が増えて業務領域を広げることが出来ました。

今回は業務でも使っている[ecspresso](https://github.com/kayac/ecspresso)を使って、0 から ECS(Fargate) 環境を構築する手順と前提知識として必要な AWS リソースについてまとめたいと思います。

## ecspresso とは

ECS のデプロイツールです。  
詳しくは作者の fujiwara さんがおひとりでやられている[ecspresso advent calendar 2020](https://adventar.org/calendars/5916)をご覧ください。ecspresso の特徴や、ユースケースなどがまとめられていて必読です。

[ecspresso advent calendar 2020 day 3](https://zenn.dev/fujiwara/articles/f2314651691adcae5215)では、`ecspresso init`コマンドを使って、既にデプロイされている ECS サービスを取り込んでコードで管理する方法が説明されています。

では、これから新規に ECS サービスをデプロイする場合はどうすればいいのかと思い、試してみました。

## やりたいこと

[ecspresso advent calendar 2020 day 1](https://zenn.dev/fujiwara/articles/4847fb822f2820)に、

> ecspresso の開発思想は「ECS のデプロイに関わる最小限のリソースのみを管理するツール」です。ECS でコンテナを動作させるにあたっては、最低でも VPC, IAM Role 等を別途用意する必要がありますが、それらの周辺リソースの面倒は ecspresso は見ません。

とあるように、ecspresso では ECS サービス、タスク以外の AWS リソースの管理はしません。

また、[Fargate を使用して Amazon Elastic Container Service (Amazon ECS) の使用を開始](https://ap-northeast-1.console.aws.amazon.com/ecs/home?region=ap-northeast-1#/firstRun)で作成する場合、VPC やサブネット、セキュリティグループなどを AWS によしなに新規作成してもらうか、あらかじめ自分で作成しておかないといけません。  
AWS によしなに作って貰う場合、IaC で管理することができません。

なので今回は terraform で ECS サービスに必要な AWS リソースを作成し、ecspresso でデプロイするまでに必要な AWS リソースの説明をします。

GitHub にサンプルリポジトリを公開しているのでぜひご覧ください。  
https://github.com/hxrxchang/ecspresso-example

README の通りの手順を実行すると、create-next-app で作成される Next.js のスターターキットを ECS にデプロイして、ALB 経由でアクセスできるところまで構築できます。

ユーザーからの HTTP リクエストに応じて HTML や JSON を返す一般的な Web アプリケーションなので、別の言語のアプリケーションをデプロイしたい場合、Docker image を変更するだけでデプロイできます。

## どうやったか

[ecspresso advent calendar 2020 day 3](https://zenn.dev/fujiwara/articles/f2314651691adcae5215)にある、`ecspresso init`で生成された`ecs-service-def.json`と`ecs-task-def.json`を元に、必要な AWS リソースが何かを考えます。

`ecs-service-def.json`に必要な値が、

- targetGroupArn
- securityGroups
- subnets

`ecs-task-def.json`に必要な値が、

- image
- awslogs-group
- executionRoleArn

ですが、subnet を作る前に VPC が必要だったり、subnet が public になるように route table を設定しないとインターネットから subnet にアクセスできないように、上に書いてある AWS リソース以外にも、作成する必要があります。

## 必要な AWS リソース

今回作成したサンプルリポジトリでは terraform で管理されています。  
https://github.com/hxrxchang/ecspresso-example/tree/main/terraform

### VPC

- Private ネットワーク空間を作成します。

### Subnet

- VPC 内にさらに作成するネットワークの単位です。
- Availability Zone を指定するので複数の Availability Zone に subnet を作成することで可用性を高められたり、インターネットと接続できるかどうかルーティング設定をしてセキュリティを高められたりします。
- 今回は ALB 用に public subnet を２つ、ECS 用に private subnet を２つ作成します(ECS は ALB 経由でアクセスされるため internet facing である必要がないため)。

### Internet Gateway

- VPC とインターネットを接続させるコンポーネントです。
- subnet の route table にアタッチすることで、その subnet を public subnet にすることができます。

### Nat Gateway

- private subnet 内のコンピュータがインターネットに接続できるようにさせるコンポーネントです。
- subnet の route table にアタッチします。
- Nat Gateway がないと、ECS が ECR から image を pull することができません。

### Route Table

- subnet の Routing 経路を設定します。

### ALB

- ロードバランサーです。
- ユーザーからのリクエストを最初に受け付け、ECS に流します。

### Security Group

- ALB や ECS などのアプリケーションが動作するサービスに対して、そのアプリケーションがどの通信を許可するのかを設定します。
- 今回は ALB はインターネットから HTTP リクエストを受け付けるので、TCP プロトコルで 80 番ポートへの通信を許可します
- ECS では Next.js が 3000 ポートで動いているので、ALB からの 3000 番ポートへの TCP での通信を許可します。

### ECR

- AWS 上で Docker Image を管理するコンテナレジストリです。

### ECS cluster

- 複数の ECS サービスをまとめて扱う、ECS の中で一番大きな単位です。
- terraform では ECS 関連のリソースは ECR と ECS cluster のみ作成し、ECS service と task は ecspresso で作成します。

### IAM

- ECS タスクを実行するための IAM ロールを用意します。

### cloudwatch

- ECS タスクで実行しているアプリケーションのログの吐き出し先として、cloudwatch logs のロググループを作成しました。

## さいごに

JSON に環境変数や terraform の変数を書けたりして、ecspresso めちゃくちゃ便利です。  
また、terraform で管理していると検証が終わったら`terraform destory`でサクッと消せるので必要以上に課金されなくて安心して AWS を弄れました。  
今回作成したリポジトリでは、ローカルからコマンド実行してデプロイしているので、`ecspresso deploy`を CD ツールで行うようにするとより便利になると思います。

明日は [pang](https://qiita.com/pang) さんです。

## 参考

- https://zenn.dev/fujiwara/articles/f2314651691adcae5215
- https://zenn.dev/fujiwara/articles/4847fb822f2820
