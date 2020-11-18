---
title: JPA Entity Mapping
date: "2020-11-02T22:30:12.212Z"
template: "post"
draft: false
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
- PK 역할을 할 필드에 사용하는 어노테이션
- 기본 키를 애플리케이션에서 직접 엔티티 클래스의 @Id 필드에 set해준다.
- @GeneratedValue은 기본키를 자동생성하기 위해 쓰는 어노테이션으로, 상황에 따라 안써도 된다. 자동생성 방법은 4가지가 있다.
    1. IDENTITY : 기본 키 생성을 데이터베이스에 위임하는 방법 (데이터베이스에 의존적)
        - 주로 MySQL, PostgresSQL, SQL Server, DB2에서 사용.
    2. SEQUENCE : 데이터베이스 시퀀스를 사용해서 기본 키를 할당하는 방법 (데이터베이스에 의존적)
        - 주로 시퀀스를 지원하는 Oracle, PostgresSQL, DB2, H2에서 사용. 
        - @SequenceGenerator를 사용하여 시퀀스 생성기를 등록하고, 실제 데이터베이스의 생성될 시퀀스이름을 지정해줘야 한다.
    3. TABLE : 키 생성 테이블을 사용하는 방법
        - 키 생성 전용 테이블을 하나 만들고 여기에 이름과 값으로 사용할 컬럼을 만드는 방법.
        - 테이블을 사용하므로, 데이터베이스 벤더에 상관없이 모든 데이터베이스에 적용이 가능하다.
    4. AUTO : 데이터베이스 벤더에 의존하지 않고, 데이터베이스는 기본키를 할당하는 벙법
        - 데이터베이스에 따라서 IDENTITY, SEQUENCE, TABLE 방법 중 하나를 자동으로 선택해주는 방법.
        - 예를들어, Oracle일 경우 SEQUENCE를 자동으로 선택해서 사용한다. 따라서, 데이터베이스를 변경해도 코드를 수정할 필요가 없다.

### @Column
- name속성을 사용해 매핑할 테이블의 컬럼을 지정할 수 있다.
- insertable, updatable 속성을 사용해 읽기 전용으로 설정할 수 있다.
- 다른 속성으로는 nullable, unique 등이 있다.

### @Temporal
- @Temporal(TemporalType.TIMESTAMP)
- 시간과 관련된 매핑
- Date뿐만 아니라 자바8에서 지원하는 LocalDatetime도 지원한다.

### @Transient
- 이 어노테이션이 붙은 필드는 테이블과 매핑하지 않는다.
- 애플리케이션에서 DB에 저장하지 않는 필드
- 가능하면 쓰지 않는 것이 좋다.


<hr>

> Reference
- 자바 ORM 표준 JPA 프로그래밍
- [JPA 엔티티 매핑 방법 (Entity Mapping)](https://gmlwjd9405.github.io/2019/08/11/entity-mapping.html)
