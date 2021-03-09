---
title: ORM에 대해서
date: "2021-03-08T22:44:13.826Z"
template: "post"
draft: false
slug: "object-relational-mapping"
category: "Daily"
tags:
  - "ORM"
description: "ORM(Object Relational Mapping)에 대해 알아보자."
---

## ORM(Object Relational Mapping)
- 객체와 관계형 데이터베이스의 데이터를 자동으로 매핑(연결)해주는 것을 말한다.
- 객체 지향 프로그래밍은 클래스를 사용하고, 관계형 데이터베이스는 테이블을 사용한다.
- 객체 모델과 관계형 모델 간에 불일치가 존재하므로 ORM을 통해 객체 간의 관계를 바탕으로 SQL을 자동으로 생성하여 불일치를 해결한다.

### 장점 & 단점
1. 장점
    - SQL의 절차적이고 순차적인 접근이 아닌 객체지향적인 접근으로 인해 생산성을 높여준다. 객체지향적인 코드로 인해 더 직관적이고 로직에 집중할 수 있도록 도와준다.
    - 객체마다 코드를 별도로 작성하기 때문에 코드의 가독성이 높아진다.
    - 재사용 및 유지보수의 편리성이 증가한다.
    - ORM은 독립적으로 작성되어있고, 해당 객체들을 재활용할 수 있다.
    - 매핑 정보가 명확하여, ERD를 보는 것에 대한 의존도를 낮출 수 있다.
    - 대부분 ORM 솔루션은 DB에 종속적이지 않기 때문에 구현 방법뿐만 아니라 많은 솔루션에서 자료형 타입까지 유효하다. 극단적으로 DBMS를 교체하는 거대한 작업에도 비교적 적은 리스크와 시간이 소요된다.

2. 단점
    - ORM으로만 서비스를 구현하기가 어렵다.
    - 사용하기는 편하지만 설계는 매우 신중하게 해야한다. 잘못 구현된 경우에 속도 저하 및 심각할 경우 일관성이 무너지는 문제점이 생길 수 있다.
    - 프로젝트의 복잡성이 커질 경우 난이도 또한 올라갈 수 있다.
    - 일부 자주 사용되는 대형 쿼리는 속도를 위해 SP를 쓰는등 별도의 튜닝이 필요한 경우가 있다.
    - 프로시저가 많은 시스템에선 ORM의 객체 지향적인 장점을 활용하기 어렵다. 프로시저가 많은 시스템에선 다시 객체로 바꿔야하며, 그 과정에서 생산성 저하나 리스크가 많이 발생할 수 있다.


### Framework
1. JPA/Hibernate
    - JPA(Java Persistence API)는 자바의 ORM 기술 표준으로 인터페이스의 모음이다.
    - JPA 표준 명세를 구현한 구현체가 바로 Hibernate이다.

2. Sequelize
    - Sequelize는 Postgres, MySQL, MariaDB, SQLite 등을 지원하는 Promise에 기반한 비동기로 동작하는 Node.js ORM이다. 

3. Django ORM
    - Python 기반 프레임워크인 Django에서 자체적으로 지원하는 ORM이다.

4. Prisma
    - Prisma의 특징은 GraphQL스키마를 기반으로 DB를 자동생성 해준다는 것이다. (
    - GraphQL은 facebook에서 만든 Graph Query Language로 애플리케이션 Query 언어로써 기존의 REST API의 한계점을 극복하고자 나온 통신 규약으로 REST API를 대체할 수 있다.


> 출처
- [[DB] ORM (Object Relational Mapping) 사용 이유, 장단점](https://eun-jeong.tistory.com/m/31?category=1111681)
- [[DB] ORM이란](https://gmlwjd9405.github.io/2019/02/01/orm.html)
