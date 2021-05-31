---
title: Mac에서 mongoDB 설치하기
date: "2021-05-31T14:55:12.281Z"
template: "post"
draft: false
slug: "mongodb-install"
category: "Daily"
tags:
  - "MongoDB"
description: "Mac과 brew를 사용하여 mongoDB를 설치해보자"
---

## 1. mongoDB 다운 가능한 저장소 접근
    ```
    brew tap mongodb/brew
    ```
   - brew의 기본 저장소에는 mongodb가 없어서 tap 명령어를 통해 mongodb가 있는 저장소에 접근해야한다.
    
## 2. mongoDB 설치
    ```
    brew install mongodb-community@4.4
    ```
  - tap 명령어로 접근이 되었으면 원하는 버전을 설치한다. 설치가 정상적으로 되면 아래와 같은 화면을 볼 수 있다.
    
    ```
    ==> Installing mongodb/brew/mongodb-community@4.4
    ==> Caveats
    mongodb-community@4.4 is keg-only, which means it was not symlinked into /usr/local,
    because this is an alternate version of another formula.

    If you need to have mongodb-community@4.4 first in your PATH, run:
      echo 'export PATH="/usr/local/opt/mongodb-community@4.4/bin:$PATH"' >> ~/.zshrc

    To have launchd start mongodb/brew/mongodb-community@4.4 now and restart at login:
      brew services start mongodb/brew/mongodb-community@4.4
    Or, if you don't want/need a background service you can just run:
      mongod --config /usr/local/etc/mongod.conf
    ==> Summary
    🍺  /usr/local/Cellar/mongodb-community@4.4/4.4.5: 11 files, 157.3MB, built in 4 seconds
    ```

## 3. mongo, mongod라는 명령어를 사용하기 위해 path설정
    ```
    echo 'export PATH="/usr/local/opt/mongodb-community@4.4/bin:$PATH"' >> ~/.zshrc
    ```
   - 설치했을때 해당 명령어를 수행하라고 안내한다. 버전과 디렉토리는 상황에 따라 변경될 수 있으니 본인 커맨드창 확인할 것.
   - 위 명령어를 수행하면 .zshrc 파일에 path가 기록된다.
   
## 4. path 적용
    ```
    source ~/.zshrc
    ```
   - .zshrc의 변경된 사항을 적용 하려면 위 명령어를 수행해야한다. 그 전까지는 변경사항이 적용되지 않는다.
   
## 5. mongoDB 실행
    ```
    brew services start mongodb/brew/mongodb-community@4.4 (서비스를 백그라운드로 실행하고싶은 경우)
    mongod --config /usr/local/etc/mongod.conf (아닌 경우)
    ```

## 6. mongoDB 접속

    ```
    mongo
    ```
    
