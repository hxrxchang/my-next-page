---
id: 'ts-node-template'
title: 'Node.jsをTypeScriptでさくっと書けるGitHub Template Repositoryを作成した'
description: 'Node.jsをTypeScriptでさくっと書けるGitHub Template Repositoryを作成した'
embedTypes: ['twitter']
createdAt: '2021-01-27'
updatedAt: '2021-01-27'
---

先日会社で t_wada さんの TDD 研修を受講した。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">t_wadaさん研修、密度がすごかった。。実際にコード書いてレビューしてもらえたのも最高だったのと、TDDのサイクルでコード書いても、実装 -&gt; テストのパターンと掛かる時間そんなに変わらないことが分かったのでこれからどんどんTDDやっていきたいと思いました！</p>&mdash; ‘はら&#39; (@hxrxchang) <a href="https://twitter.com/hxrxchang/status/1338771326148874242?ref_src=twsrc%5Etfw">December 15, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

本当に最高の研修で、詳しい内容は会社ブログで書いた。  
https://tech.classi.jp/entry/2021/01/26/115500

## Node.js を TS で書きたかった

研修の中で TDD でコードを書いていく実習があった。  
TypeScript で書いて Node.js で実行したいが、毎回 JS にトランスパイルしてから実行しなくちゃいけないんだっけ？とか TS 用の Jest の設定ってどうするんだ？となってしまって、結局 JS で書くことになってしまった。

ファイル実行とテストができる雛形を用意しておけば TS で取り組めたなという後悔があったので、GitHub の template repository を作った。  
https://github.com/hxrxchang/ts-node-template

ts-node でトランスパイルなしでファイルを実行できるのと、Jest でテストができるようになっている。  
また Renovate で 依存している package に更新があった際に PR 作成してくれるように設定している。  
その際に、update していいかどうかの判断のため GitHub Actions で tsc でトランスパイルできるか、Jest でテストが通るかを確認している。

この template を使って TDD 研修の復習やアルゴリズムの勉強をやっていきたい。

同様の template はどの言語を勉強するにもあった方がいいと思って Go でも作成したが、依存パッケージもなく何も特筆することはなかった。  
https://github.com/hxrxchang/go-template
