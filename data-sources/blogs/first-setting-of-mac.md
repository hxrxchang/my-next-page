---
id: 'first-setting-of-mac'
title: 'Mac 初期設定でやったこと'
description: 'Mac 初期設定でやったこと'
embedTypes: []
createdAt: '2020-06-04'
updatedAt: '2020-08-25'
---

修理していた私用のMacが返って来たので、設定し直した。
備忘録として初期設定方法を残しておく。

## Macの設定
- トラックパッドとキーボードの設定
  - マウスとキーボードが一番高速で反応するように

## 開発環境
- iterm2のインストール
  - タブを分割した時(command + D)は、同じpathを開くようにする。
    - https://medium.com/ayuth/new-tab-iterm2-with-in-current-directory-627b0c31734a
-  VSCodeのインストール

- ログインシェルをbashに
  - catalina ではデフォルトのシェルがzsh になっているが使い慣れたbashを使いたい
  - Macのデフォルトのbashのバージョンが古いので、homebrewでbashをinstall(参考: https://journal.lampetty.net/entry/from-zsh-to-bash)
  ```
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

  - bashを使ってると警告が出るので、.bash_profileに `export BASH_SILENCE_DEPRECATION_WARNING=1` を追加した。(参考: https://qiita.com/waka424/items/bc77b6e8bd4f25760e58)

- homebrewのインストール
  - https://brew.sh/index_ja

-  gitのインストール、設定
```
$ brew install git
$ git config --global user.name "<GitHub ID>"
$ git config --global user.email "<email>"

# 設定を確認
$ git config --list 
```

- GitHubのssh設定
  - https://qiita.com/shizuma/items/2b2f873a0034839e47ce

- dotfilesのclone
  - cloneしたらシンボリックリンクを貼るshellを実行

- 各言語のバージョン管理ツールと欲しいversionのインストール
  - nodenv とか rbenv とか
  - dotfilesのシンボリックリンクを貼れていれば shellのログイン時にエラーが出るのでそれをインストール

- Docker for Mac のインストール
  - https://docs.docker.com/docker-for-mac/

## 便利アプリ
- spectacle
  - 開いてるGUIアプリのリサイズや移動ができるやつ
  - https://www.spectacleapp.com/

- karabiner
  - 左右のcommandキーで全角半角切替
  - 設定はこれで
    - https://dyny001.net/install-karabiner/

- clipy
  - clipboadの履歴を保持できたりできる (2個前にコピーしたやつとかをpasteできる)
  - https://clipy-app.com/

これらの便利アプリとDocker for Mac はPC起動時に立ち上がるように設定しておく。
<br>
<br>
<br>
![Macの修理代金](/blogs/first-setting-of-mac/mac_repair.png)

土曜日に修理以来をし、日曜日に集荷され、その週の火曜日にはもう修理から戻ってきてとても体験がよかった。
<br>
しかしながら、修理代金が6万円近くかかってしまい、Macの修理代金とジムの解約違約金で予想外の出費がかさんで辛い。  
