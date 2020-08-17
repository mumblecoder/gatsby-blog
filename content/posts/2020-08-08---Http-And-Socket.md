---
title: 20.08.08 - Http통신과 Socket통신의 차이
date: "2020-08-08T12:25:17.844Z"
template: "post"
draft: false
slug: "http-and-socket"
category: "IT 토막상식"
tags:
  - "Etc"
description: "네트워크를 통해 서버로부터 데이터를 가져오기 위한 통신방식은 크게 Http와 Socket이 있다. 두 방식의 차이에 대해 알아보자."
socialImage: "/media/image-2.jpg"
---

### 1. Http 통신
- Client의 요청이 있을때만 서버가 응답하여 해당 정보를 전송하고 곧바로 연결을 종료하는 방식. 단방향적 통신
- 필요한 경우에만 통신을 하는 상황에서 쓰기 적절하다. (애플리케이션 개발에 주로 사용)

### 2. Socket 통신
- Server와 Client가 특정 Port를 통해 실시간으로 양방향 통신을 하는 방식 (Server에서도 요청을 보낼 수 있다.)
- Server와 Client가 계속 연결을 유지하여 통신하는 방식
- 실시간으로 데이터를 주고 받아야 하는 상황에서 쓰기 적절하다. (실시간 스트리밍 또는 실시간 채팅 등에서 많이 사용)

> 일반적인 애플리케이션, 웹 페이지에서는 Http 통신, 실시간 스트리밍 중계나 채팅 시스템 또는 실시간으로 이루어져야 하는 입출금시스템에는 Socket 통신을 사용한다.
