---
title: Blocking & Non-Blocking / Synchronous & Asynchronous
date: "2021-03-03T22:52:19.232Z"
template: "post"
draft: false
slug: "blocking-synchronous"
category: "Daily"
tags:
  - "Java"
description: "Blocking과 Non-Blocking / Synchronous와 Asynchronous 에 대해 알아보자"
---

## Synchronous & Asynchronous
  - 카페 직원에게 주문을 하고 오직 음료가 나오기만을 기다리다가 음료를 받는건 동기(=Synchronous).
  - 카페 직원에게 주문을 하고 자리로 돌아와 자기 일을 하다가 음료가 나왔다는 콜백을 받는건 비동기(=Asynchronous).

### 1. Synchronous
  - ThreadA는 ThreadB에게 작업을 시작 시키고, B의 작업이 끝날때까지 기다렸다 다음 작업을 시작한다.
  - 작업 요청을 했을 때 요청의 결과값(return)을 직접 받는 것이다. 

### 2. Asynchronous
  - ThreadA는 ThreadB에게 작업을 시작 시키고, B의 작업을 기다리지않고 바로 다음 작업을 시작한다.
  - 작업 요청을 했을 때 요청의 결과값(return)을 간접적으로 받는 것이다.
<hr>

## Blocking & Non-Blocking
  - Blocking : 유저 프로세스가 시스템 호출을 하고나서 결과가 반환되기까지 다음 처리로 넘어가지 않음 
  - Non-Blocking : 호출한 직후에 프로그램으로 제어가 돌아와서 시스템 호출의 종료를 기다리지 않고 다음 처리로 넘어갈 수 있음  

### 1. Blocking
- 요청한 작업을 마칠 때까지 계속 대기한다.
- 즉시 return한다.
- return 값을 받아야 끝난다.
- Thread 관점으로 본다면, 요청한 작업을 마칠 때까지 계속 대기하며 return 값을 받을 때까지 한 Thread를 계속 사용/대기 한다.

### 2. Non-Blocking
- 요청한 작업을 즉시 마칠 수 없다면 즉시 return한다.
- 즉시 리턴하지 않는다. (일을 못하게 막는다.)
- Thread 관점으로 본다면, 하나의 Thread가 여러 개의 IO를 처리 가능하다.


#### 위 설명만으로는 이해하기 어려울 수 있다. 출처로 적어둔 글을 보면 그림과 함께 자세한 설명이 있으니 꼭 한번 읽어보길 바란다.


> 출처
- [동기 vs 비동기 (feat. blocking vs non-blocking)](https://velog.io/@wonhee010/%EB%8F%99%EA%B8%B0vs%EB%B9%84%EB%8F%99%EA%B8%B0-feat.-blocking-vs-non-blocking)
