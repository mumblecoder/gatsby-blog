---
title: OOP (Object-Oriented Programming)
date: "2021-03-12T23:11:27.981Z"
template: "post"
draft: false
slug: "object-oriented-programming"
category: "Daily"
tags:
  - "Java"
description: "OOP (Object-Oriented Programming) 특징에 대해 알아보자"
---

### 1. OOP (Object-Oriented Programming)
- 객체 지향 프로그래밍 방식
- OOP의 장점은 코드의 재사용성이 높아지고, 코드가 간결해져서 유지보수가 쉬워진다.
- OOP의 단점은 처리 시간이 비교적 오래 걸리고, 프로그램을 설계할 때 많은 고민과 시간을 투자해야한다.

### 2. OOP의 특징
1. 캡슐화(Encapsulation)
2. 상속(Inheritance)
3. 추상화(Abstraction)
4. 다형성(Polymorphism)


### 3. OOP의 5원칙 (SOLID)
> SOLID 원칙은 소프트웨어를 설계함에 있어 이해하기 쉽고, 유연하고, 유지보수가 편하도록 도와주는 5가지의 원칙이다.

1. 단일 책임 원칙(Single Responsibility Principle, SRP)
    - 모든 클래스는 단 한 가지의 책임을 부여받아, 수정할 이유가 단 한 가지여야 함을 의미한다.

2. 개방-폐쇄 원칙(Open/Closed Principle)
    - 소프트웨어의 구성요소(컴포넌트, 클래스, 모듈, 함수)가 확장에 대해서는 유연하여야 하지만 수정에 대해서는 폐쇄적이어야 함을 의미한다
    - 새 기능이 필요할 때 기존에 작성하고 테스트했던 코드를 수정하지 않고 추가할 수 있어야 한다는 것이다

3. 리스코프 치환 원칙(Liskov’s Substitution Principle, LSP)
    - 상위 타입은 항상 하위 타입으로 대체할 수 있어야 함을 의미한다.
    - 어떤 하위 객체에 접근할 때 그 상위 객체의 인터페이스로 접근하더라도 아무런 문제가 없이 일관성 있는 행동을 해야 한다.

4. 인터페이스 분리 원칙(Interface Segregation Principle, ISP)
    - 필요하지 않는 요소를 구현하도록 강요하거나 사용하지 않는 요소에 의존하도록 만들면 안 된다는 것을 의미한다.
    - 어떤 클래스가 다른 클래스에 종속될 때에는 가능한 최소한의 인터페이스만을 사용해야 한다.

5. 의존성 역전 법칙(Dependency Inversion Principle, DIP)
    - 상위 모듈이 하위 모듈에 종속성을 가져서는 안 되며, 양쪽 모두 추상화에 의존해야 함을 의미한다.
    - 하위 레벨 모듈의 변경이 상위 레벨 모듈의 변경을 요구하는 구조적 문제에서 발생하는 위계관계를 끊는 것이다


> 출처

- [OOP의 5원칙과 4가지 특성](https://velog.io/@ygh7687/OOP%EC%9D%98-5%EC%9B%90%EC%B9%99%EA%B3%BC-4%EA%B0%80%EC%A7%80-%ED%8A%B9%EC%84%B1)
- [[OOP] 객체지향 설계 원칙 - SOLID](https://haedallog.tistory.com/147)