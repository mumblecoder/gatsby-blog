---
title: java.lang.Math Class
date: "2020-09-16T21:26:17.251Z"
template: "post"
draft: false
slug: "math-class"
category: "Daily"
tags:
  - "Java"
description: "Math 클래스는 수학에서 자주 사용하는 상수들과 함수들을 미리 구현해 놓은 클래스이다."
---

### Math Class
- Math 클래스는 수학에서 자주 사용하는 상수들과 함수들을 미리 구현해 놓은 클래스이다.
- Math 클래스의 모든 메소드는 클래스 메소드(static method)이므로, 객체를 생성하지 않고도 바로 사용할 수 있다.
- Math 클래스는 java.lang 패키지에 포함되어 제공된다.

### Fields
1. ***Math.E*** : 오일러의 수라 불리며, 자연로그(natural logarithms)의 밑(base) 값으로 약 2.718을 의미
2. ***Math.PI*** : 원의 원주를 지름으로 나눈 비율(원주율) 값으로 약 3.14159를 의미

### Methods
![math class methods](/img/math-class-method.png)

- 메소드를 쓸 때는 매개변수와 return 자료형에 유의 하자.
- 삼각함수관련 함수들(sin, cos, tan 등)은 파라미터로 radian값을 받는다.
- return 자료형이 int인지, float인지 확인하고 연산에 사용해야 오차가 발생하지 않는다.

<hr>

> Reference
- [Math Class](http://tcpschool.com/java/java_api_math)


