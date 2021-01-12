---
title: 인프런 스프링 무료강의
date: "2021-01-10T22:32:37.991Z"
template: "post"
draft: true
slug: "spring-lecture"
category: "Daily"
tags:
  - "Spring"
description: "인프런에서 김영한님의 스프링입문 무료강의를 듣고 끄적거린 글"
---

1. 스프링 프로젝트 생성시 [https://start.spring.io/](https://start.spring.io/)에서 생성하면 편리하다.

2. 디펜던시로는 Spring Web, 템플릿 엔진만 추가해도 아주 기본적인 웹페이지는 구현 가능하다.

3. 최근엔 대부분 Gradle, IntelliJ를 사용한다. 익숙해지도록 하자.

4. Junit은 오랫동안 4버전을 사용하다 최근들어서는 5버전으로 갈아타는 추세다.

5. Test code 작성 패턴 - Given-When-Then [Given-When-Then Pattern](https://brunch.co.kr/@springboot/292)

6. Junit5 사용법 [[JUnit] JUnit5 사용법 - 기본](https://gmlwjd9405.github.io/2019/11/26/junit5-guide-basic.html)

7. 생성자 주입, 필드 주입, 수정자 주입이 있는데 생성자 주입이 가장 좋은 방법이다.
    - [스프링 - 생성자 주입을 사용해야 하는 이유, 필드인젝션이 좋지 않은 이유](https://yaboong.github.io/spring/2019/08/29/why-field-injection-is-bad/)

8. 컴포넌트 스캔을 사용하여 스프링에 빈 등록
    - 우리가 흔히 쓰는 @Controller, @Service, @Repository는 모두 @Component가 기본이다.

9. 자바 코드로 직접 스프링에 빈 등록
    - @Configuration을 달고 있는 config파일안에 @Bean을 사용하여 직접 빈 등록을 할 수 있다.


> Reference
- [스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근 기술](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%EC%9E%85%EB%AC%B8-%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8/dashboard)
