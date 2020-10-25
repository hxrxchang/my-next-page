---
id: 'nat-gateway-to-public-subnet'
title: 'AWSでpublic subnetに存在するEC2が特定のIPアドレスに通信する時に、NAT Gatewayで送信元のIPを固定することができるか試してみた'
description: 'private subnetにNAT Gatewayアタッチすればいいやろ。。って思いますが仕方ない事情があるんです'
embedTypes: []
createdAt: '2020-10-25'
updatedAt: '2020-10-25'
---

## 何がしたいの？
開発しているWebアプリケーションが外部のサービスのAPIに依存している場合の話。
外部APIをコールする時、外部サービスから「IP制限をしているのでIPを教えてください。」みたいなことがあると思う。  
AWSで一般的な構成だと、WebアプリケーションはインターネットからALB経由でアクセスされるため、ALBがトラフィックを流すアプリケーションサーバーはprivate subnetに立てるだろう。private subnet上で稼働しているサーバーからアウトバウンドでインターネットに通信する場合、NAT Gatewayをprivate subnetのルートテーブルにアタッチすることで可能になる。なのでNAT Gatewayに紐付けたEIPを伝えれば、外部サービスのIP制限が可能になるだろう。

しかしやんごとなき事情でpublic subnet上でサーバーを構築しているとする。public subnetなのでサーバーからインターネットへのアウトバウンドの通信は、サーバーごとに付与されたpublic IPアドレスで行われる。サーバーが一台ならそのpublic IPを外部サービスに伝えればいいが、当然1台ではない。また複数サーバーのpublic IPをすべて伝えればいいと思うが、auto scalingをしているので、その都度IPの変更を伝えるのは無理だ。そこでpublic subnetで動くサーバーが、IP制限が必要な外部サービスへアウトバウンドの通信をする際、 NAT Gateway経由で通信を行えないか試してみた。

## 再現方法
terraformで作ってみた。リポジトリはこれ([https://github.com/hxrxchang/aws-public-subnet-nat-gateway-example](https://github.com/hxrxchang/aws-public-subnet-nat-gateway-example))。  

VPCを"my_service"と"external_service"(外部サービスのネットワークを再現)の2つ作成。  

そのVPC内でそれぞれpublic subnetを作成して、そのsubnet内でHTTPとsshを受け付けるEC2インスタンスを作成。  

先程説明した通り外部サービスはIP制限をする。external_serviceのEC2はどこからでもHTTPリクエストを受け付けるのではなく、許可したIPからのみリクエストを受けられるようにする。  

で、my_serviceのVPCのpublic subnetで作ったインスタンスのpublic IPを外部サービスで許可するのだと、上で説明したスケールに対応できない問題があるので、my_serviceからexternal_serviceへの通信はNAT Gateway経由で行うようにする。  

| Route | hoge |
| - | - |
| aaaaa | aaaaa |
| aaaaaaa | aaaaaaaaaaaa |


## trash
確認したいことはmy_service内のEC2で動くアプリケーションからexternal_serviceで動くアプリケーションに対してHTTPリクエストを成功させること。extenal_serviceへの通信は、my_serviceからは成功するが、ローカル環境など許可していないネットワークからのリクエストは失敗することを確認したい。アプリケーションを作成するのが面倒なので、external_serviceにだけ、[Goで書かれた簡単なHTTPサーバーをビルドしたバイナリ](https://github.com/hxrxchang/aws-public-subnet-nat-gateway-example/tree/main/web/src)を実行することにした(実行環境のインストールも不要なため)。なので、my_service内の
