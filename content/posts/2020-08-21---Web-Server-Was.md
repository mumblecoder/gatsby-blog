---
title: Web Server & WAS
date: "2020-08-21T10:13:55.781Z"
template: "post"
draft: false
slug: "web-server-was"
category: "Daily"
tags:
  - "Server"
description: "Web 서버와 WAS에 대해 알아보자 "
---

### Web Server
- 클라이언트로부터 HTTP 요청을 받아 HTML 문서나 각종 리소스를 전달하는 컴퓨터
- 주문을 받는 직원(Web Server), 손님(Client)의 주문(request)을 기다린다.
- 클라이언트의 요청을 기다리고, 요청에 대한 데이터를 만들어서 응답. 정적인 데이터로 한정


### WAS
- 웹 브라우저에서 이용할 수 있는 응용 소프트웨어
- 웹 어플리케이션과 서버 환경을 만들어 동작시키는 기능을 제공하는 소프트웨어 프레임워크
- Web Server + Web Container
- HTML같은 정적인 페이지에서 처리할 수 없는 비지니스 로직이나 DB조회 같은 동적인 컨텐츠를 제공

### 두 서버의 차이
- Web server : 정적인 컨텐츠만. WAS : 정적 + 동적 

### 두 서버를 동시에 쓰는 이유
1. 기능을 분리하여 서버 부하 방지
	- WAS는 DB 조회 등 페이지를 만들기 위한 다양한 로직을 처리하는데, 단순한 정적 콘텐츠를 WAS에서 제공한다면 다른 작업에 사용하는 리소스들로 인해 지연이 생겨날 수 있다.
	- 톰캣 5.5 이상부터는 성능이 크게 떨어지지 않는다고 한다.

2. 물리적으로 분리하여 보안 강화
	- SSL에 대한 암복호화 처리에 Web Server를 사용한다.
	- 공격에 대해 Web Server를 앞단에 두어 중요한 정보가 담긴 DB나 로직까지 (WAS까지) 전파되지 못하게 한다.

2. 여러대의 WAS 연결 가능
	- 로드밸런싱
	- fail over, fail back에 대한 대처가 가능
	- 무중단 운영이 가능해진다

4. 다른 종류의 WAS로 서비스 가능
<br><hr>


Reference - [티거의 Web Server vs WAS](https://youtu.be/F_vBAbjj4Pk)
