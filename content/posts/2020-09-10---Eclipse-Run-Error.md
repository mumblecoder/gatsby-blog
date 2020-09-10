---
title: Eclipse 실행 에러 [selection does not contain a main type]
date: "2020-09-10T22:21:43.111Z"
template: "post"
draft: false
slug: "eclipse-run-error"
category: "Daily"
tags:
  - "Eclipse"
description: "selection does not contain a main type 에러에 대해 알아보자"
---

## selection does not contain a main type
- 위 에러가 발생하는 원인은 여러가지이다. 하나씩 살펴보자

    1. main 함수 오타
        - 메인 함수에 오타가 존재하는지 확인하자
        - public static void main(String[] args){}

    2. 파일 위치
        - 실행하려는 main함수가 있는 파일이 src폴더안에 있는지 확인하자.

    3. java build path
        - 프로젝트 우클릭 > Properties > Java Build Path > Source 탭
        - 프로젝트명/src 폴더가 추가되어있어도 Remove 후 다시 Add Folder로 src 폴더를 추가하자
        ![java-build-path](/img/eclipse-run-error.png)