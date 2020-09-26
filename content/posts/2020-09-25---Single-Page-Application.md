---
title: SPA란 무엇인가
date: "2020-09-25T21:06:12.463Z"
template: "post"
draft: true
slug: "single-page-application"
category: "Daily"
tags:
  - "Etc"
description: "SPA는 Single Page Application 의 약자이다."
---

### SPA
- Single Page Application 의 약자이다.
- 일반 페이지 같은경우는 client/web browser (프론트) 가 server(백엔드) 에게 html,javascript,css 등 화면에 보여줄 데이터를 요청하고 , 서버는 요청된 파일을 client에게 뿌려주는 형태이다.
- 그러나 SPA는 Client (Browser)가 필요한 부분만 자바스크립트를 사용하여 업데이트 해주는 것이다.
- 즉 SPA 앱 안에 html,css,자바스크립트 등 모든 정보가 이미 내장되어 있는 상태로, 새로운 데이터가 필요할때만 서버 API를 호출하여 필요한 데이터만 불러와 화면에 보여주는 식이다.


### SPA의 단점
1. 앱의 규모가 커지면 자바스크립트 파일이 너무 커진다. 
  - 페이지 로딩시 실제 사용자가 방문하지 않을 수도 있는 페이지의 스크릅트도 불러오기 떄문이다.
  - 코드 스플리팅 (code splitting)으로 해결하는 방법이 있음

2. SEO, 클로러가 페이지 정보를 수집하지 못하여 페이지 검색이 힘듬. 구글,네이버같은 대형 포털싸이트에 검색 안 될 경우도 있음.
  - REACT 같은경우는 index.html파일은 거의 비어있고 js파일이 로딩되며 구현되기 때문으로 추측된다.<br>
    (자바스크립트가 실행될때 까지 페이지가 비어 있어서 로딩 대기중의 짦은 시간동안 빈페이지가 화면에 띄워져있는다.)

<hr>

> Reference
- [SPA란?](https://velog.io/@cyongchoi/Spa-%EB%9E%80)
