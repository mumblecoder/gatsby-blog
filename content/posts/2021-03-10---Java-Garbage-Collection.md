---
title: Java - Garbage Collection 튜닝
date: "2021-03-10T23:11:32.826Z"
template: "post"
draft: false
slug: "java-garbage-collection"
category: "Daily"
tags:
  - "Java"
description: "Garbage Collection(GC) 튜닝에 대해 알아보자"
---

### 1. GC 튜닝
  - GC 튜닝은 자바 프로그램 실행 환경인 JVM을 구성하는 가운데, 성능상 이슈를 일으키기 쉬운 GC에 대하여 최적화를 진행 하는 것이다.
  - 일반적으로 권장되지 않는다. 왜냐하면 필요한 선행 지식과, 신경써야할 요소, 리스크에 비해서 얻어가는 부분이 너무 적기 때문이다.
  - 되도록 코드적으로, 메모리, 퍼포먼스를 개량하려 노력하고(StringBuffer, String Builder 등의 사용이나 쓸모없는 로직 제거 등), 최후에, 정말 최적화를 진행하고 싶을 때, 분석하고 고려할 방법이다.

### 2. GC 튜닝의 목적
  1. Old 영역으로 넘어가는 객체 최소화
      - Young 영역은, Old 영역보다 작고, Young 영역 자체도, Eden, Survivor1, Survivor2로 나뉘어져 있기에, GC에서 발생하는 Stop the World가 작게 일어난다.(일반적으로, Stop the World가 길게 한번에 일어나는 것보다, 짧게 여러번 나눠서 나타나는 것이 성능상 좋다고 한다.)
      - weak generational hypothesis에서, '대부분의 객체는 금방 접근 불가능 상태(unreachable)가 된다.' 라는 가설에 따라, Young 영역에 온 객체가, 빠르게 소멸하고, 메모리를 반납하면, Old 영역으로 넘어가는 객체가 적어지며, Old 영역이 가득 찼을 시점에 Full GC를 발생시키는 Garbage Collector의 특성상, Young에서 넘어오는 객체가 최소화 되는 것이 곧 성능을 높이는 길이라 할 수 있다.
  2. Full GC의 시간 최소화
      - Old 영역의 크기가 줄어들면, 일반적으로 Full GC의 시간도 줄어들지만, 그렇다고 이 영역이 줄어든다면, OOM(Out Of Memory Error)가 발생할수도 있고, 이를 오히려 늘린다면, Full GC의 시간이 더욱 늘어난다.
      - 즉, 알고리즘적으로, Old 영역은 일종의 딜레마에 빠져서, 요즘처럼 메모리 크기가 늘어나고, 프로그램 규모가 커져가는 환경에서 난항을 겪게 된다. 그러므로 일단 Old 영역 크기를 '적절히' 설정하는 것이 중요하다.

### 3. GC 튜닝 옵션
- GC 옵션은 "누가 이 옵션을 썼을 때 성능이 잘 나왔대. 우리도 이렇게 적용하자."라고 생각하면 안된다. 왜냐하면, 서비스마다 생성되는 객체의 크기도 다르고 살아있는 기간도 다르기 때문이다.
-  이런 저런 옵션을 많이 설정한다고 시스템의 GC 수행 속도가 월등히 빨라지진 않는다. 오히려 더 느려질 확률이 높다. 
- 두 대 이상의 서버에 GC 옵션을 다르게 적용해서 비교해 보고, 옵션을 추가한 서버의 성능이나 GC 시간이 개선된 때에만 옵션을 추가하는 것이 GC 튜닝의 기본 원칙이다
> 아래 표는 기본적으로 확인해야 하는 옵션과 GC방식에 따라 지정가능한 옵션을 정리한 표이다.
![GC 튜닝 시 기본적으로 확인해야 하는 JVM 옵션](/img/gc-option.png)
![GC 방식에 따라 지정 가능한 옵션](/img/gc-option2.png)

- 아래 출처 글을 보면 자세하게 잘 정리되어 있으니 꼭 한 번 읽어보길 바란다.

<br>

> 출처
- [Garbage Collection 튜닝](https://d2.naver.com/helloworld/37111)
- [자바 GarbageCollection 튜닝](https://wiserloner.tistory.com/554)
