---
title: H2, SpringBoot 연동하기
date: "2020-12-19T23:42:11.711Z"
template: "post"
draft: true
slug: "h2-springboot"
category: "Daily"
tags:
  - "Spring"
description: "SpringBoot 프로젝트에 H2 Database를 연동해보자"
---

### H2 DB 설치 및 실행
[H2 Database 맛보기](https://www.mumblecoder.tk/posts/h2-database)

### pom.xml
```
<dependency>
    <groupId>com.h2database</groupId>
	<artifactId>h2</artifactId>
</dependency>
```

### application.yml
```
spring:
  datasource:
    driverClassName: org.h2.Driver
    url: {YOUR_URL}
    username: {YOUR_USERNAME}
    password: {YOUR_PASSWORD}
  h2:
    console:
      enabled: true
      path: /h2-console
```
- h2.console.enabled를 true 설정하면 콘솔 창을 통해 H2 DB를 확인할 수 있다.
- 콘솔 접속 방법은 서비스 서버 주소 뒤에 path값을 붙이면 된다. 
- ex) http://localhost:8080/h2-console




> Reference

