---
title: Spring AOP (Aspect Oriented Programming)
date: "2020-10-29T17:57:11.492Z"
template: "post"
draft: false
slug: "spring-aop"
category: "Daily"
tags:
  - "Spring"
description: "Spring AOP의 개념과 특징에 대해서 알아보자"
---

### Spring AOP (Aspect Oriented Programming)
- 관점 지향 프로그래밍. 
- 관점 지향은 어떤 로직을 기준으로 핵심적인 관점, 부가적인 관점으로 나누어서 보고 그 관점을 기준으로 각각 모듈화 하겠다는 것이다.
- AOP에서 관점 기준으로 로직을 모듈화 한다는것은 코드들을 부분적으로 나누어서 모듈화하겠다는 의미이다.
- 반복적으로 사용하는 코드들이 있는데 그것들을 Aspect로 모듈화하고 핵심 로직에서 분리하여 재사용하겠다는 것이 AOP의 취지다.

### AOP 주요 개념
- Aspect : 모듈화 한 것. 주로 부가 기능을 모듈화한다.
- Target : Aspect를 적용하는 곳 (클래스, 메서드 .. )
- Advice : 실질적으로 어떤 일을 해야할 지에 대한 것, 실질적인 부가 기능을 담은 구현체
- JointPoint : Advice가 적용될 위치
- PointCut : JointPoint의 상세한 스펙을 정의한 것. 'A란 메서드의 진입 시점에 호출할 것'과 같이 더욱 구체적으로 Advice가 실행될 지점을 정할 수 있음
- Proxy : 타겟을 감싸서 타겟의 요청을 대신 받아주는 랩핑(Wrapping) 오브젝트. 호출자 (클라이언트)에서 타겟을 호출하게 되면 타겟이 아닌 타겟을 감싸고 있는 프록시가 호출되어, 타겟 메소드 실행전에 선처리, 타겟 메소드 실행 후, 후처리를 실행시키도록 구성되어있다.
- Introduction : 타겟 클래스에 코드 변경없이 신규 메소드나 멤버변수를 추가하는 기능
- Weaving : 지정된 객체에 Aspect를 적용해서 새로운 프록시 객체를 생성하는 과정. 

### AOP의 장점
- 어플리케이션 전체에 흩어진 공통 기능이 하나의 장소에서 관리된다
- 다른 서비스 모듈들이 본인의 목적에만 충실하고 그외 사항들은 신경쓰지 않아도 된다

### 스프링 AOP 특징
- 프록시 패턴 기반의 AOP 구현체, 프록시 객체를 쓰는 이유는 접근 제어 및 부가기능을 추가하기 위해서임
- 스프링 빈에만 AOP를 적용 가능
- 모든 AOP 기능을 제공하는 것이 아닌 스프링 IoC와 연동하여 엔터프라이즈 애플리케이션에서 가장 흔한 문제(중복코드, 프록시 클래스 작성의 번거로움, 객체들 간 관계 복잡도 증가 ...)에 대한 해결책을 지원하는 것이 목적

### Spring AOP의 구현 방식
1. XML 기반의 POJO 클래스를 이용한 AOP 구현
    - 부가기능을 제공하는 Advice 클래스를 작성한다.
    - XML 설정 파일에 <aop:config>를 이용해서 애스펙트를 설정한다. (즉, 어드바이스와 포인트컷을 설정함)

2. @Aspect 어노테이션을 이용한 AOP 구현
    - @Aspect 어노테이션을 이용해서 부가기능을 제공하는 Aspect 클래스를 작성한다.
    - 이 때 Aspect 클래스는 어드바이스를 구현하는 메서드와 포인트컷을 포함한다.
    - XML 설정 파일에 <aop:aspectj-autoproxy />를 설정한다.


### Advice의 종류
1. Around 어드바이스
    - 타겟의 메서드가 호출되기 이전(before) 시점과 이후 (after) 시점에 모두 처리해야 할 필요가 있는 부가기능을 정의한다.
    - Joinpoint 앞과 뒤에서 실행되는 Advice

2. Before 어드바이스
    - 타겟의 메서드가 실행되기 이전(before) 시점에 처리해야 할 필요가 있는 부가기능을 정의한다.
    - Jointpoint 앞에서 실행되는 Advice

3. After Returning 어드바이스
    - 타겟의 메서드가 정상적으로 실행된 이후(after) 시점에 처리해야 할 필요가 있는 부가기능을 정의한다.
    - Jointpoint 메서드 호출이 정상적으로 종료된 뒤에 실행되는 Advice

4. After Throwing 어드바이스
    - 타겟의 메서드가 예외를 발생된 이후(after) 시점에 처리해야 할 필요가 있는 부가기능을 정의한다.
    - 예외가 던져 질때 실행되는 Advice


<hr>

> Reference
- [Spring 스프링 AOP (Spring AOP) 총정리](https://engkimbs.tistory.com/746)
- [AOP 정리](https://jojoldu.tistory.com/71)
- [Spring AOP, Aspect 개념 특징, AOP 용어 정리](https://shlee0882.tistory.com/206)