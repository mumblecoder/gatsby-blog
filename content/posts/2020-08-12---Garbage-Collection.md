---
title: Garbage Collection
date: "2020-08-12T09:43:13.115Z"
template: "post"
draft: false
slug: "garbage-collection"
category: "Daily"
tags:
  - "Etc"
description: "Garbage Collection. GC(가비지컬렉션)에 대해서 알아보자"
---

### Garbage Collection(GC. 가비지 컬렉션)

1. Minor GC
    - 새로 생성된 대부분의 객체는 Eden 영역에 위치한다.
    - Eden영역에서 GC가 한 번 발생한 후 살아남은 객체는 Servivor 영역중 하나로 이동된다.
    - 위 과정을 반복하다가 계속 살아남는 객체는 일정시간 참조되고 있다는 뜻이므로 Old영역으로 이동시킨다 

2. Major GC
    - Old영역에 있는 모든 객체들을 검사하여 참조되지 않은 객체들을 한꺼번에 삭제한다.
    - 시간이 오래 걸리고 실행 중 프로세스가 정지된다. 이것을 'stop-the-world'라고 한다.
    - Major GC가 발생하면 GC를 실행하는 스레드를 제외한 나머지 스레드는 모두 작업을 멈춘다.
    - GC 작업을 완료한 이후에야 중단했던 작업을 다시 시작한다.

3. GC의 소멸대상 선정 원리
    - GC는 힙 내의 객체중에서 가비지를 찾아내서 처리하여 힙의 메모리를 회수한다.
    - 참조되고 있지 않은 객체를 가비지라고 하며 가비지 판단을 위해 reachability라는 개념을 사용한다.
    - 힙 영역에 할당된 객체가 유효한 참조가 있으면 reachability, 없으면 unreachability이다.
    - 인스턴스가 GC의 대상이 되었다고 바로 소멸되는것은 아니다. 빈번한 GC 실행은 시스템에 부담이 될 수 있기에 별도 알고리즘을 기반으로 계산이 되어 실행된다.

<hr>

> Reference
- [가비지컬렉션](https://asfirstalways.tistory.com/m/159)
