---
title: 스프링 작동 원리
date: "2021-02-24T22:58:23.382Z"
template: "post"
draft: true
slug: "spring-operation"
category: "Daily"
tags:
  - "Spring"
description: "스프링 작동 원리에 대해 알아보자"
---

![스프링 동작원리 그림](/img/spring-loading-process.png)
1. 웹 애플리케이션이 실행되면 Tomcat(WAS)에 의해 web.xml이 loading된다.
2. web.xml에 등록되어 있는 ContextLoaderListener(Java Class)가 생성된다. 
    - ContextLoaderListener 클래스는 ServletContextListener 인터페이스를 구현하고 있으며, ApplicationContext를 생성하는 역할을 수행한다.
3. 생성된 ContextLoaderListener는 root-context.xml을 loading한다.
4. root-context.xml에 등록되어 있는 Spring Container가 구동된다. 
    - 이때 개발자가 작성한 비즈니스 로직에 대한 부분과 DAO, VO 객체들이 생성된다. 
5. 클라이언트로부터 웹 애플리케이션이 요청이 온다.
6. DispatcherServlet(Servlet)이 생성된다. DispatcherServlet은 FrontController의 역할을 수행한다. 클라이언트로부터 요청 온 메시지를 분석하여 알맞은 PageController에게 전달하고 응답을 받아 요청에 따른 응답을 어떻게 할 지 결정만한다. 실질적인 작업은 PageController에서 이루어지기 때문이다. 이러한 클래스들을 HandlerMapping, ViewResolver 클래스라고 한다.
7. DispatcherServlet은 servlet-context.xml을 loading 한다.
8. 두번째 Spring Container가 구동되며 응답에 맞는 PageController들이 동작한다. 이 때 첫번째 Spring Container 가 구동되면서 생성된 DAO, VO, ServiceImpl 클래스들과 협업하여 알맞은 작업을 처리하게 된다.


> 출처
- [Spring 의 시작, 프레임워크의 구성요소와 동작원리](https://asfirstalways.tistory.com/334)
