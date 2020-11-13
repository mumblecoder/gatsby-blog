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

#### get () 
– 메모리에서 값을 가져 와서 다른 스레드의 변경 사항을 볼 수 있다. 휘발성 변수를 읽는 것과 동일
#### set () 
– 값을 메모리에 기록하여 변경 사항이 다른 스레드에 표시되도록 한다. 휘발성 변수 작성과 동일
#### lazySet () 
– 값을 메모리에 쓴다. 후속 관련 메모리 작업으로 재정렬 될 수 있다. 
- 한 가지 유스 케이스는 가비지 콜렉션을 위해 참조를 무효화하는 것이다. 이는 다시는 액세스되지 않고, 이 경우 null 휘발성 쓰기를 지연하여 더 나은 성능을 얻을 수 있다.
#### compareAndSet () 
– 섹션 3에서 설명한 것과 동일하며 성공하면 true를 반환하고 그렇지 않으면 false를 반환한다.
#### weakCompareAndSet () 
– 섹션 3에서 설명한 것과 동일하지만 순서가 발생하기 전에 발생하지 않는다는 점에서 약합니다. 즉, 다른 변수에 대한 업데이트가 반드시 표시되는 것은 아니다. 
- Java9에서 이 메소드는 weakCompareAndSetPlain()을 위해 모든 원자 구현에서 사용되지 않는다.
- weakCompareAndSet()의 메모리 효과는 단순했지만 그 이름은 휘발성 메모리 효과를 암시한다. 
- 이러한 혼동을 피하기 위해 그들은 이 메서드를 폐기하고 weakCompareAndSetPlain() 또는 weakCompareAndSetVolatile()과 같은 다른 메모리 효과를 가진 네 가지 메서드를 추가했다.


<hr>

> Reference
- [Java - AtomicInteger 사용 방법](https://codechacha.com/ko/java-atomic-integer/)
- [An Introduction to Atomic Variables in Java](https://www.baeldung.com/java-atomic-variables)
