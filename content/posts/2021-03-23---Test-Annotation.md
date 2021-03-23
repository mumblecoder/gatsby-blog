---
title: 테스트 관련 어노테이션
date: "2021-03-23T22:50:32.712Z"
template: "post"
draft: false
slug: "test-annotation"
category: "Daily"
tags:
  - "Test"
description: "테스트 코드 작성시 많이 사용하는 어노테이션에 대해 알아보자."
---

### 테스트를 위한 어노테이션들
- @SpringBootTest
- @WebMvnTest
- @DataJpaTest
- @RestClientTest
- @JsonTest

### 1. @SpringBootTest
- 통합 테스트를 제공하는 기본적인 스프링 부트 테스트 어노테이션
- 애플리케이션이 실행될 때의 설정을 임의로 바꾸어 테스트를 진행할 수 있다.
- 여러 단위 테스트를 하나의 통합된 테스트로 수행할 때 적합하다.
- 실제 구동되는 애플리케이션과 똑같이 애플리케이션 컨텍스트를 로드하여 테스트하기 때문에 하고 싶은 테스트를 모두 수행할 수 있다.
- 애플리케이션에 설정된 모든 빈을 로드하기 때문에 애플리케이션 규모가 클수록 느리다.

### 2. @WebMvcTest
- MVC를 위한 테스트, 웹에서 테스트하기 힘든 컨트롤러를 테스트하는데 적합하다.
- 웹 상에서 요청과 응답에 대해 테스트 할 수 있고, 시큐리티 혹은 필터까지 자동으로 테스트하며 추가/삭제까지 가능하다.
- MVC 관련 설정인 @Controller, @ControllerAdvice, @JsonComponent, Filter, WebMvcConfigurer, HandlerMethodArgumentResolver만 로드 되기 때문에 @SpringBootTest 어노테이션 보다 가볍게 테스트 가능하다.

### 3. @DataJpaTest
- JPA 관련 테스트 설정만 로드하여 테스트를 한다.
- 데이터 소스의 설정이 정상적인지, JPA를 사용한 CRUD 기능등의 테스트가 가능하다.
- JPA 테스트가 끝날때마다 자동 롤백하므로 실 데이터 변경을 걱정할 필요없이 테스트가 가능하다.
- JPA말고 JDBC를 테스트하려면 @JdbcTest, 몽고디비를 테스트하려면 @DataMongoTest 어노테이션을 사용하면 된다.

### 4. @RestClientTest
- REST 관련 테스트를 도와주는 어노테이션.
- REST 통신의 데이터형으로 사용되는 JSON 형식이 예상대로 응답을 반환하는지 등을 테스트 할 수 있다.

### 5. @JsonTest
- JSON의 직렬화와 역직렬화를 수행하는 라이브러리인 Gson과 Jackson API의 테스트를 제공한다. 
- 각각 GsonTester와 JacksonTester를 사용하여 테스트를 수행한다.



<hr>

> Reference
- 김영재, 처음 배우는 스프링 부트2 (p73-p91)
