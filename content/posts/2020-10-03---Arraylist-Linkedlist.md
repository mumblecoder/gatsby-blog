---
title: Arraylist & Linkedlist
date: "2020-10-03T22:39:54.473Z"
template: "post"
draft: false
slug: "arraylist-linkedlist"
category: "Daily"
tags:
  - "Java"
description: "Arraylist와 Linkedlist의 차이점에 대해 알아보자."
---

### ArrayList
- ArrayList는 내부적으로 데이터를 배열에서 관리하며 데이터의 추가, 삭제를 위해 아래와 같이 임시 배열을 생성해 데이터를 복사 하는 방법을 사용 하고 있다.
![arraylist](/img/arraylist.png)
- 대량의 자료를 추가/삭제 하는 경우에는 그만큼 데이터의 복사가 많이 일어나게 되어 성능 저하를 일으킬 수 있다. 반면 각 데이터는 인덱스를 가지고 있기 때문에 한번에 참조가 가능해 데이터의 검색에는 유리한 구현체이다.

### LinkedList
- LinkedList는 데이터를 저장하는 각 노드가 이전 노드와 다음 노드의 상태만 알고 있다고 보면 된다.
![linkedlist](/img/linkedlist.png)
- ArrayList와 같이 데이터의 추가, 삭제시 불필요한 데이터의 복사가 없어 데이터의 추가, 삭제시에 유리한 반면 데이터의 검색시에는 처음부터 노드를 순회해야 하기 때문에 성능상 불리하다. 소스 코드를 통해 조금 구체적으로 살펴보자.

### 데이터의 검색, 삽입, 삭제시 성능 비교
1. 검색
    - 데이터 검색 시에는 ArrayList는 LinkedList에 비해 굉장히 빠르다.
    - ArrayList는 인덱스 기반의 자료 구조이며 get(int index) 를 통해 O(1) 의 시간 복잡도를 가진다. 
    - LinkedList는 검색 시 모든 요소를 탐색해야 하기 때문에 최악의 경우에는 O(N)의 시간 복잡도를 가진다.

2. 삽입, 삭제
    - LinkedList에서의 데이터의 삽입, 삭제 시에는 ArrayList와 비교해 굉장히 빠르다.
    - LinkedList는 이전 노드와 다음 노드를 참조하는 상태만 변경하면 된다. 삽입, 삭제가 일어날 때 O(1)의 시간 복잡도를 가진다. 
    - ArrayList의 경우 삽입, 삭제 이후 다른 데이터를 복사해야 하기 때문에 최악의 경우 O(N) 의 성능을 내게 된다.

<hr>

> Reference
- [Java의 LinkedList와 ArrayList에 대한 비교](https://www.holaxprogramming.com/2014/02/12/java-list-interface/)
