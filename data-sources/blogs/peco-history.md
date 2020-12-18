---
id: 'peco-history'
title: 'pecoでbashの履歴検索を最高にした'
description: 'pecoでbashの履歴検索を最高にした'
embedTypes: []
createdAt: '2020-08-30'
updatedAt: '2020-08-30'
---

最近仕事でファイルを指定して Rspec を実行する、みたいなことが多い。
<br><br>
spec/~ の中にあるファイル path をその都度コピーしたり、十字キーの ↑ でひたすら探すのが面倒だったため、peco でいい感じに検索 + コマンド実行できるように .bash_profile をいじった。

## peco

[peco](https://github.com/peco/peco) は、渡された入力を incremental search して、出力できる。

`ls | peco` をすると、こんな感じで選択された行を出力できる。

!['peco'](/blogs/peco-history/peco.gif)

## peco で bash の履歴検索

やりたいことは、

- .bash_history の出力を peco に渡す。(新しいものから上に表示されると嬉しい)
- peco で選択したコマンドを実行
- 実行したコマンドを history に積む

以下の関数を.bash_profile に追加した。

```bash
peco_search_history() {
    SELECTED_COMMAND=$(tail -r ~/.bash_history | peco)
    if [ "$SELECTED_COMMAND" != "" ]; then
        echo "exec: ${SELECTED_COMMAND}"
        eval $SELECTED_COMMAND
        history -s $SELECTED_COMMAND
    fi
}
```

関数名が長いので alias を設定。

```
alias his="peco_search_history"
```

<img src="/blogs/peco-history/peco-history.gif" alt="pecoで履歴検索">

とても捗るようになった。
