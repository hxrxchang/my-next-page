---
id: 'atcoder-tui-viewer'
title: 'AtCoderの問題をterminalで表示するCLIを(Codexが)作った'
description: 'AtCoderの問題をterminalで表示するCLIを(Codexが)作った'
embedTypes: ['twitter']
createdAt: '2026-03-11'
updatedAt: '2026-03-11'
---

## 作ったもの

https://github.com/hxrxchang/atcoder-tui-viewer

以下の gif のように、AtCoder の問題ページの URL を渡すと問題文が terminal で表示される。

!['demo'](/blogs/atcoder-tui-viewer/demo.gif)

実装は Rust を選んだが、Codex が全て書いてくれたので何もわかっていない。  
やりたいことを伝えてリポジトリ名とコマンド名を一緒に考えたのと、Rust を使うことを指示したらあとは全部書いてくれた。途中修正依頼をしたのは TeX の表示が崩れていたことくらい。

## なぜ作ったか

皆さんは仕事中にどうしても AtCoder の問題が解きたくなって、むずむずしてしまうことがないだろうか？私はある。  
ただ、オフィスで仕事と全く関係ない AtCoder のページを堂々と開くのは気が引けるだろう。  
そこで terminal で開ければ Claude や Codex で仕事しながら横でしれっと問題が見れるだろう、というのがモチベーション。  
昨今は AI の待ち時間でスキマ時間が発生しますからね...それを自己研鑽の時間に当てて有効活用しているということです。  
(仕事中はちゃんと仕事をしましょう。)

## 感想

t_wada さんの言う通りに、自分専用のツールをサクッと作れるのは AI の恩恵だなと改めて感じた。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Vibe Coding は「自分だけが使う、自分がいちばん欲しいソフトウェアをだれでも作れるようになった」ことが革命的かつ真骨頂なのであって、他の人が使うソフトウェアを作ることには（少なくともまだ）向いてないと思います</p>&mdash; Takuto Wada (@t_wada) <a href="https://twitter.com/t_wada/status/1948590698762305714?ref_src=twsrc%5Etfw">July 25, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
