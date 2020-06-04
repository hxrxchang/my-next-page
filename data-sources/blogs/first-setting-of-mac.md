---
id: 'first-setting-of-mac'
title: 'mac 初期設定でやったこと'
description: 'mac 初期設定でやったこと' 
createdAt: '2020-06-04'
updatedAt: '2020-06-04'
---

修理していた私用のmacが返って来たので、設定し直した。

## macの設定
- トラックパッドとキーボードの設定
  - マウスとキーボードが一番高速で反応するように

## 開発環境
- iterm2のインストール
-  VSCodeのインストール

- ログインシェルをbashに
  - catalina ではデフォルトのシェルがzsh になっているが使い慣れたbashを使いたい
  - https://qiita.com/waka424/items/bc77b6e8bd4f25760e58

- homebrewのインストール
  - https://brew.sh/index_ja

-  gitのインストール、設定
```
$ brew install git
$ git config --global user.name "<GitHub ID>"
$ git config --global user.name "<email>"`
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
![macの修理代金](/blogs/first-setting-of-mac/mac_repair.png)

土曜日に修理以来をし、日曜日に集荷され、その週の火曜日にはもう修理から戻ってきてとても体験がよかった。
<br>
しかしながら、修理代金が6万円近くかかってしまい、macの修理代金とジムの解約違約金で予想外の出費がかさんで辛い。  
