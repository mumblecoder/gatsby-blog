---
title: Atomic Class
date: "2020-11-09T22:43:37.371Z"
template: "post"
draft: false
slug: "atomic-class"
category: "Daily"
tags:
  - "Java"
description: "동시성을 보장해주는 Atomic 클래스에 대해 알아보자."
---

### 자바에서 동시성 문제를 해결하는 방법
1. volatile keyword
    - Thread1에서 쓰고, Thread2에서 읽는 경우에만 동시성을 보장. 
    - 두 개 이상의 쓰레드에서 쓰기 작업을 할 경우 문제가 될 수 있다.
2. synchronized keyword
    - 안전하게 동시성을 보장할 수 있지만 비용이 가장 크다.
    - 해당 블럭 전체를 lock하기 떄문에 다른 Thread는 아무런 작업을 하지 못하고 기다리게 되므로 낭비가 심하다.
3. Atomic 클래스
    - CAS(compare-and-swap)를 이용하여 동시성을 보장한다. 
    - 여러 쓰레드에서 쓰기 작업을 해도 문제가 없다.

### Atomic Class
- 원자성을 보장하는 클래스.
- Synchronized Keyword 보다 적은 비용으로, volatile keyword보다 더 완벽하게 동시성을 보장한다.
- Atomic 클래스로는 AtomicInteger , AtomicLong , AtomicBoolean 등이 있다.

### CAS( Compared And Swap)알고리즘
![cas알고리즘/cpu캐시메모리](/img/cas-algorithm.png)
- 현재 쓰레드에 저장된 값과 메인메모리에 저장된 값을 비교하여 일치하는 경우 새로운 값으로 교체되고 , 일치하지 않는다면 실패하고 재시도를 하는 방식
- 멀티쓰레드환경, 멀티코어 환경에서 각 CPU는 메인 메모리에서 변수 값을 참조하는게 아닌 각 CPU의 캐시 영역에서 메모리를 참조하는데, 메인메모리에 저장된 값과 CPU캐시에 저장된 값이 다른 경우가 있다. (가시성 문제)
- CAS 알고리즘을 활용해 처리하면 CPU캐시에 잘못된 값을 참조하는 가시성 문제를 해결 할 수 있다.


<hr>

> Reference
- [Java - AtomicInteger 사용 방법](https://codechacha.com/ko/java-atomic-integer/)
- [Java - Atomic변수](https://beomseok95.tistory.com/225)
