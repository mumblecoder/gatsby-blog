---
title: Filter와 Interceptor
date: "2021-03-07T13:23:53.126Z"
template: "post"
draft: false
slug: "filter-interceptor"
category: "Daily"
tags:
  - "Spring"
description: "Filter와 Interceptor에 대해 알아보자."
---

## Filter & Interceptor
![흐름도](img/filter-interceptor-aop.png)
  - Interceptor와 Filter는 Servlet 단위에서 실행된다. 반면 AOP는 메소드 앞에 Proxy패턴의 형태로 실행된다.
  - Filter와 Interceptor는 실행되는 시점이 다르다. 실행순서를 보면 Filter가 가장 밖에 있고 그 안에 Interceptor, 그 안에 AOP가 있는 형태이다.
  - Filter는 Web Application에 등록을 하고, Interceptor는 Spring의 Context에 등록을 한다.
  - Filter는 Servlet에서 처리하기 전후를 다룰 수 있다.
  - Interceptor는 Handler를 실행하기전(preHandle), Handler를 실행한 후(postHandle), view를 렌더링한 후(afterCompletion) 등, Servlet내에서도 메서드에 따라 실행 시점을 다르게 가져간다.

### 1. Filter
  - 요청과 응답을 거른뒤 정제하는 역할을 한다.
  - 필터는 스프링 컨텍스트 외부에 존재하여 스프링과 무관한 자원에 대해 동작한다.
  - 서블릿 필터는 DispatcherServlet 이전에 실행이 되는데 필터가 동작하도록 지정된 자원의 앞단에서 요청내용을 변경하거나, 여러가지 체크를 수행할 수 있다.
  - 자원의 처리가 끝난 후 응답 내용에 대해서도 변경하는 처리를 할 수 있다.
  - 보통 web.xml에 등록하고, 일반적으로 인코딩 변환 처리, XSS방어 등의 요청에 대한 처리로 사용된다.


### 2. Interceptor
- 요청에 대한 작업 전/후로 가로챈다고 보면 된다.
- 스프링의 DistpatcherServlet이 컨트롤러를 호출하기 전, 후로 끼어들기 때문에 스프링 컨텍스트 내부에서 Controller(Handler)에 관한 요청과 응답에 대해 처리한다.
- 스프링의 모든 빈 객체에 접근할 수 있다.
- 인터셉터는 여러 개를 사용할 수 있고 로그인 체크, 권한체크, 프로그램 실행시간 계산작업 로그확인 등의 업무처리를 할 수 있다



> 출처
- [[Spring] Filter, Interceptor, AOP 차이 및 정리](https://goddaehee.tistory.com/154)
- [(Spring)Filter와 Interceptor의 차이](https://supawer0728.github.io/2018/04/04/spring-filter-interceptor/)
