---
title: JPA
date: "2020-11-02T22:30:12.212Z"
template: "post"
draft: true
slug: "jpa-entity-mapping"
category: "Daily"
tags:
  - "Jpa"
description: "JPA Entity Mapping에 대해 알아보자"
---

#### JPA를 사용하는데 가장 중요한 일은 엔티티와 테이블을 매핑하는 것이다.

### 매핑 어노테이션
- JPA는 다양한 매핑 어노테이션을 제공하는데 대표적인 어노테이션들에 대해 알아보자
- 객체와 테이블 매핑 : @Entity, @Table
- 기본 키 매핑 : @Id
- 필드와 컬럼 매핑 : @Column
- 연관관계 매핑 : @ManyToOne, @JoinColumn

### @Entity
- JPA를 사용해서 테이블과 매핑할 클래스는 @Entity 어노테이션을 필수로 붙여야 한다.
- @Entity가 붙은 클래스는 JPA가 관리하는 것으로 엔티티라고 부른다.
- @Entity 적용시 주의 할 점은 <u>기본생성자 필수</u>, <u>저장할 필드에 final 금지</u>, <u>final, inner 클래스, interface, enum에는 사용금지</u> 이다.

### @Table
- 엔티티와 매핑할 테이블을 지정할 수 있다.

### @Enumerated
- 자바의 enum을 사용하여 매핑하려면 사용해야 하는 어노테이션
```java
@Enumerated(EnumType.STRING)
private RoleType roleType;
```

### @Id, @GeneratedValue
- 


<hr>

> Reference
- 자바 ORM 표준 JPA 프로그래밍