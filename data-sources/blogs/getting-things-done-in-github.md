---
id: 'getting-things-done-in-github'
title: 'GitHub Issues と GitHub Actions でいい感じにタスク管理できるツールを作った'
description: 'GitHub Issues と GitHub Actions でタスク管理する'
embedTypes: []
createdAt: '2023-12-03'
updatedAt: '2023-12-03'
---

この記事は [一休 Advent Calendar 2023](https://qiita.com/advent-calendar/2023/ikyu) の 3 日目の記事です。  
昨日行われた[隅田川.dev vol.3 LT 会](https://sumidagawa-dev.connpass.com/event/298849/) を体調不良でキャンセルしてしまったのですが、そこで発表する予定だったネタを急遽爆誕したこのアドベントカレンダーで供養したいと思います。

## GitHub Issues でタスク管理

過去、[そーだいさんのブログ](https://soudai.hatenablog.com/entry/2020/12/31/165940) を読んで、GitHub の issue で日々のタスクと日報を管理しようと試みたことが何度かありましが、長く続きませんでした。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://t.co/nzSzyUreZl">https://t.co/nzSzyUreZl</a><br>改めてこれ見返してから集中して仕事取り組めるようになった</p>&mdash; はら (@hxrxchang) <a href="https://twitter.com/hxrxchang/status/1483306833963933699?ref_src=twsrc%5Etfw">January 18, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

続かない理由は、

- Issue を手動で作成するのを忘れてしまい、一度忘れると習慣が止まってしまう
- マークダウンで書いているタスク一覧から未完了のものを翌日の Issue に移したいが、コピペと編集が面倒くさい

などがありました。

いい加減タスク管理くらいしっかりできるようになりたいと思い、上記の課題を解決する仕組みを作ってみました。

## 作ったもの

https://github.com/hxrxchang/gtd-manager

このリポジトリで実装された CLI アプリケーションを他のリポジトリで再利用できるようにカスタムアクションを定義しています

```yml
on:
  schedule:
    - cron: '0 18 * * *' # JST 03:00

jobs:
  create_issue:
    runs-on: ubuntu-latest
    steps:
      - uses: hxrxchang/gtd-manager@v0.0.10
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          GITHUB_REPOSITORY: $GITHUB_REPOSITORY
          TIME_ZONE: 'Asia/Tokyo' #オプショナル。デフォルトはUTC
```

タスク管理用のリポジトリを作成し、 ↑ のように GitHub Actions を設定することで、前日の Issue から未完了のタスクだけを抽出して新しい Issue を作成できます。
`uses`のところで https://github.com/hxrxchang/gtd-manager/blob/main/action.yml で定義したカスタムアクションを利用することを宣言しています。

入れ子構造を保つことができる他、Issue 本文中のタスクだけでなく、コメントに記載したタスクも抽出できます。  
また、見出しの下に記載されたタスクは見出し毎にまとめられます。

例えば、昨日の Issue が

本文

```txt
## private
- [ ] task1
- [ ] task2
  - [x] task2-1
  - [ ] task2-3
- [x] task3

## work
- [ ] task4
```

コメント

```txt
## private
- [ ] task5
```

となっていた場合、作成される Issue は

```txt
## private
- [ ] task1
- [ ] task2
  - [ ] task2-3
- [ ] task5

## work
- [ ] task4
```

となります。

| 最新の issue                                                                                          | 作成された issue                                                                                         |
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| ![最新のissue](https://github.com/hxrxchang/gtd-manager/blob/main/images/previous_issue.png?raw=true) | ![作成されたissue](https://github.com/hxrxchang/gtd-manager/blob/main/images/created_issue.png?raw=true) |

## Go での実装

実装は Go を選びました。  
CLI アプリケーションなので、シングルバイナリを吐ける Go にしたいというのも理由でありましたが、私の shell 力が足らず GitHub Releases にアップロードされたバイナリを GitHub Actions で使えるようにするのがうまく行かず、結局 go install しています。

やっていることは

- GitHub の API から最新の Issue を取得
- Issue の本文とコメントから未完了のタスクだけ抽出する
- GItHub の API で Issue を作成する

だけです。

GitHub API クライアントには https://github.com/shurcooL/githubv4 を使用しました。  
Go の構造体と GraphQL スキーマをマッピングしてくれてとても使い心地がよかったです。

未完了タスクかどうかは、Issue 本文とコメントを 1 行ずつ見て、先頭が `- [ ]` で始まるかどうかで判定するという素朴な実装をしています。  
先頭スペースは取り除いて判定しますが、実際に追加されるものは先頭スペースはそのままにしておくことで、入れ子構造を保つことができます。

見出しごとのタスクの管理は、`見出し: タスク一覧` となる map を作り、本文を 1 行ずつ見ていく中で先頭が`#`から始まる見出しとなる文字列が出現したらそれを key として、その key の value にタスクを追加していきます。

## GitHub Actions

### カスタムアクション

GitHub Actions ではワークフローを別のリポジトリや第三者が再利用できる仕組みがあり、それを[カスタムアクション](https://docs.github.com/ja/actions/creating-actions/about-custom-actions)と呼びます(CircleCI でいう [Orb](https://circleci.com/ja/orbs/))。  
カスタムアクションの作り方は簡単で、基本的にはリポジトリのルートディレクトリに action.yml ファイルを作成して、その中にワークフローを定義するだけです。  
https://docs.github.com/ja/actions/creating-actions/publishing-actions-in-github-marketplace#about-publishing-actions

また、アクションの種類に Docker, JavaScript, 複合アクション の 3 つがありますが、  
Docker は当然 Docker ファイルが必要ですし、JavaScript は当然実装言語が制限されるので、複合アクションを使うのがいつも通りの書き味で書けて、一番簡単かなと思いました。　　
https://docs.github.com/ja/actions/creating-actions/creating-a-composite-action にあるチュートリアルをやることで流れを掴むことができました。

## まとめ

カスタムアクションを公開するのは始めてでしたが、とても簡単であること分かりました。  
GitHub Actions に少し詳しくなれた気がします。  
GitHub Issue でのタスク管理に興味がある人はぜひ使ってフィードバックを頂けると嬉しいです。
