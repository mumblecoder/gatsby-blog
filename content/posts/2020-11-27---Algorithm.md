---
title: 시간 복잡도, 공간 복잡도, 빅오 표기법
date: "2020-11-27T23:52:21.925Z"
template: "post"
draft: false
slug: "algorithm"
category: "Daily"
tags:
  - "Algorithm"
description: "시간 복잡도, 공간 복잡도, 빅오 표기법에 대해 알아보자"
---
### 시간 복잡도
- 내가 짠 코드의 실행 시간(Execution Time)을 예측해 얼마나 효율적인 코드인가를 나타내는 개념. 
- 실행 시간은 연산(Operation)에 비례해 길어진다.

### 공간 복잡도
- 코드가 얼마나 메모리 공간을 효율적으로 사용하는지에 대한 개념.
- 정적 배열이나 해시 테이블처럼 공간을 미리 확보하는 자료구조에 자주 등장하는 개념.

### 빅오(Big O) 표기법
- 빅오(Big-O)는 시공간 복잡도를 수학적으로 표시하는 대표적인 방법이다. 
- 코드의 실제 러닝 타임을 표시하는 것이 아니며, 인풋 데이터 증가율에 따른 알고리즘의 성능을 (논리적으로) 예측하기 위해 사용한다. 
- 빅오 표기법에는 다음 2가지 규칙이 있다.
    1. 가장 높은 차수만 남긴다.  O(n² + n) -> O(n²)
    2. 계수 및 상수는 과감하게 버린다.  O(2n + 3) -> O(n)

<hr>

> Reference
- [코드의 시간복잡도 계산하기](https://medium.com/humanscape-tech/%EC%BD%94%EB%93%9C%EC%9D%98-%EC%8B%9C%EA%B0%84-%EB%B3%B5%EC%9E%A1%EB%8F%84-%EA%B3%84%EC%82%B0%ED%95%98%EA%B8%B0-b67dd8625966)
- [시간복잡도 wiki](https://ko.wikipedia.org/wiki/%EC%8B%9C%EA%B0%84_%EB%B3%B5%EC%9E%A1%EB%8F%84)
- [빅오 표기법과 시간 복잡도 계산, 그리고 알고리즘 개선하기 (Big-O notation, time complexity, and algorithm)](https://velog.io/@raram2/big-o-notation-and-time-complexity)