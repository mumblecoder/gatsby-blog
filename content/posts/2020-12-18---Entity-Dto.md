---
title: 요청과 응답에 Entity를 사용하면 안되는 이유
date: "2020-12-18T22:06:13.521Z"
template: "post"
draft: false
slug: "entity-dto"
category: "Daily"
tags:
  - "Jpa"
description: "요청과 응답으로 Entity를 사용하면 어떤 문제가 발생하는지 알아보자"
---

### 요청과 응답으로 Entity가 아닌 DTO를 사용해야 하는 이유
1. 도메인 객체를 캡슐화 할 수 있다.
2. 화면에 필요한 데이터만 선택적으로 보낼 수 있다.
3. 순환 참조를 예방할 수 있다.
4. validation 코드와 모델링 코드를 분리할 수 있다.

### Map대신 DTO를 만들어 써야하는 이유
- DTO 생성이 귀찮아서 Map을 사용하는 경우 개발은 편리할 수 있으나 어래와 같은 단점이 있다.
    1. Map안에 어떤 속성이 들어있는지 알 수 없다.
    2. Map에서 값을 꺼낼때 필요한 type casting은 에러 발생 가능성이 있다.
    3. validation 코드 작성이 어렵다.


### Entity를 사용하면 생기는 문제
1. 컨트롤러 메소드 파라미터로 Entity를 사용할 경우
    - Validation 코드와 모델링을 위한 코드가 뒤섞이면서 Entity 클래스가 복잡해진다.
    - UI 계층과 도메인 계층에 의존성이 생긴다.
2. 서비스 메소드 파라미터로 Entity를 사용할 경우
    - 서비스 객체의 입장에서 인자로 넘어온 Entity가 영속화 상태라는 것을 보장할 수 없다.
3. 컨트롤러 응답에 Entity를 사용할 경우
    - 응답 스펙을 맞추기 위해 필요한 로직을 추가해야한다.
    - API 스펙과 Entity 사이에 의존성이 생긴다.

> Reference
- [[JPA] 요청과 응답으로 DTO를 사용해야 하는 이유](https://cheolhojung.github.io/posts/record/jpa-entity-vs-dto.html)
- [About DTO (Data Transfer Object)](https://velog.io/@ljinsk3/%EC%9A%94%EC%B2%AD%EA%B3%BC-%EC%9D%91%EB%8B%B5%EC%9C%BC%EB%A1%9C-%EC%97%94%ED%8B%B0%ED%8B%B0-%EB%8C%80%EC%8B%A0-DTO%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%9E%90)
