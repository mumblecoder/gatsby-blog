---
title: 완전 탐색 (Exhaustive Search)
date: "2020-11-29T12:00:00.000Z"
template: "post"
draft: true
slug: "exhaustive-search"
category: "Daily"
tags:
  - "Algorithm"
description: "완전 탐색의 정의와 기법에 대해 알아보자"
---
### 완전탐색
- '모든 경우의 수를 전부 찾아서 답을 찾는 알고리즘' 을 뜻한다. 
- 알고리즘을 풀때 가장 강력하고 확실한 방법이지만 그만큼 시간이 가장 오래 걸리는 탐색 기법이다.
- '무식한 힘'이라는 뜻을 가진 brute force algorithm이라고 불린다. 

### 완전탐색기법

#### 1. Brute Force
- for문과 if문을 이용하여 처음부터 끝까지 탐색하는 방법

#### 2. 비트 마스크
- 이진수 표현을 자료구조로 쓰는 기법 (AND, OR, XOR, SHIFT, NOT)
- DP, 순열, 배열 활용만으로 해결할 수 없을때 사용한다.
- 메모리 사용이 적고 수행시간이 빠르다. 하지만 원소의 수가 많지 않아야한다.
- 집합을 배열의 인덱스로 표현할 수 있어 코드가 간결해진다.

####  3. 재귀 함수

####  4. 순열 
- 서로 다른 n개의 원소에서 r개의 중복을 허용하지 않고 순서대로 늘어 놓은 수

####  5. BFS(너비우선탐색), DFS(깊이우선탐색)

<hr>

> Reference
- [완전탐색](https://velog.io/@sungjun-jin/%EC%99%84%EC%A0%84%ED%83%90%EC%83%89)
- [알고리즘-비트마스크](https://kim6394.tistory.com/246)