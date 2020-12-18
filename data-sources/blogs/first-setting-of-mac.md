---
id: 'first-setting-of-mac'
title: 'Mac 初期設定でやったこと'
description: 'Mac 初期設定でやったこと'
embedTypes: []
createdAt: '2020-06-04'
updatedAt: '2020-08-25'
---

修理していた私用の Mac が返って来たので、設定し直した。
備忘録として初期設定方法を残しておく。

## Mac の設定

- トラックパッドとキーボードの設定
  - マウスとキーボードが一番高速で反応するように

## 開発環境

- iterm2 のインストール
  - タブを分割した時(command + D)は、同じ path を開くようにする。
    - [https://medium.com/ayuth/new-tab-iterm2-with-in-current-directory-627b0c31734a](https://medium.com/ayuth/new-tab-iterm2-with-in-current-directory-627b0c31734a)
- VSCode のインストール

- homebrew のインストール

  - [https://brew.sh/index_ja](https://brew.sh/index_ja)

- ログインシェルを bash に

  - catalina ではデフォルトのシェルが zsh になっているが使い慣れた bash を使いたい
  - Mac のデフォルトの bash のバージョンが古いので、homebrew で bash を install(参考: [https://journal.lampetty.net/entry/from-zsh-to-bash](https://journal.lampetty.net/entry/from-zsh-to-bash))

  ```bash
  # Macデフォルトのbashのバージョン
  $ bash --version
  GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin19)
  Copyright (C) 2007 Free Software Foundation, Inc.

  $ brew install bash

  # brewでinstallしたbashに変更
  $ chsh -s /usr/local/bin/bash

  # bashのバージョン確認
  $ bash --version
  GNU bash, バージョン 5.0.18(1)-release (x86_64-apple-darwin19.5.0)
  Copyright (C) 2019 Free Software Foundation, Inc.
  ```

  - bash を使ってると警告が出るので、.bash_profile に `export BASH_SILENCE_DEPRECATION_WARNING=1` を追加した。(参考: [https://qiita.com/waka424/items/bc77b6e8bd4f25760e58](https://qiita.com/waka424/items/bc77b6e8bd4f25760e58))

- git を homebrew でインストール

```bash
$ brew install git
```

- GitHub の ssh 設定

  - [https://qiita.com/shizuma/items/2b2f873a0034839e47ce](https://qiita.com/shizuma/items/2b2f873a0034839e47ce)

- dotfiles の clone

  - clone したらシンボリックリンクを貼る shell を実行

- 各言語のバージョン管理ツールと欲しい version のインストール

  - nodenv とか rbenv とか
  - dotfiles のシンボリックリンクを貼れていれば shell のログイン時にエラーが出るのでそれをインストール

- Docker for Mac のインストール
  - [https://docs.docker.com/docker-for-mac/](https://docs.docker.com/docker-for-mac/)

## 便利アプリ

- spectacle

  - 開いてる GUI アプリのリサイズや移動ができるやつ
  - [https://www.spectacleapp.com/](https://www.spectacleapp.com/)

- karabiner

  - 左右の command キーで全角半角切替
  - 設定はこれで
    - [https://dyny001.net/install-karabiner/](https://dyny001.net/install-karabiner/)

- clipy
  - clipboad の履歴を保持できたりできる (2 個前にコピーしたやつとかを paste できる)
  - [https://clipy-app.com/](https://clipy-app.com/)

これらの便利アプリと Docker for Mac は PC 起動時に立ち上がるように設定しておく。
<br>
<br>
<br>
![Macの修理代金](/blogs/first-setting-of-mac/mac_repair.png)

土曜日に修理以来をし、日曜日に集荷され、その週の火曜日にはもう修理から戻ってきてとても体験がよかった。
<br>
しかしながら、修理代金が 6 万円近くかかってしまい、Mac の修理代金とジムの解約違約金で予想外の出費がかさんで辛い。
