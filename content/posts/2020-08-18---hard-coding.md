---
title: 20.08.18 - HashMap, TreeMap, LinkedHashMap
date: "2020-08-18T11:15:12.394Z"
template: "post"
draft: true
slug: "java-maps"
category: "IT 토막상식"
tags:
  - "Java"
description: "자바에는 여러가지 Map이 존재한다. 특성을 파악하여 적절한 상황에 적절한 Map을 써보도록 하자."
---

### 1. HashMap
- 내부적으로 Entry의 array로 되어 있다.
- Hash값을 이용해 저장하기 때문에 순서를 보장하지 않는다.

### 2. TreeMap
- 내부적으로 키와 값을 한 쌍으로 하는 데이터를 이진 검색 트리(binary search tree)의 형태로 저장한다. 이진 검색 트리는 데이터를 추가하거나 제거하는 등의 기본 동작 시간이 매우 빠르다.
- 키값에 대한 Comparator구현으로 정렬 순서를 바꿀수 있다.

### 3. LinkedHashMap
- LinkedList로 저장됨.
- 키값은 입력 순서대로 저장된다.

> 
