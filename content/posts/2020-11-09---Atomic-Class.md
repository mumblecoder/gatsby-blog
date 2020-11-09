---
title: Atomic Class
date: "2020-11-09T22:43:37.371Z"
template: "post"
draft: true
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


<hr>

> Reference
- [Java - AtomicInteger 사용 방법](https://codechacha.com/ko/java-atomic-integer/)
- [An Introduction to Atomic Variables in Java](https://www.baeldung.com/java-atomic-variables)
