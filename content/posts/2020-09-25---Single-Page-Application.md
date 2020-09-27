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

### 멀티페이지 애플리케이션(Multi-Page Application. MPA)
- 멀티페이지 애플리케이션들은 예전의 방식대로 동작한다. 예를들어, 브라우저에서 변경사항이 있을 때서버로 서브밋 데이터를 전달하여 새로운페이지 렌더링을 요청하고 그 데이터를 표시한다. 이러한 애플리케이션들은 그 필요성 때문에 SPA보다는 규모가 더 크다. 많은 컨텐츠로 인해, 많은 UI 레벨을 갖게 된다. 운좋게도 이것은 더이상 문제가 되지 않는다. AJAX 덕분에 우리는 크고 복잡한 애플리케이션들이 서버와 브라우저사이에서 많은 데이터를 전송해야 하는 문제를 걱정할 필요가 없게 되었다. 애플리케이션의 특정 부분만을 리프레쉬 할 수 있도록 한 것이다. 반면, 더 큰 복잡성이 가중되면서 SPA보다 개발이 더 어려워 졌다. 
- 멀티페이지 애플리케이션의 장점(Pros of the Multiple-Page Application)
  1. 애플리케이션내에 어디로 갈지에 대한 시각적 맵이 필요한 사용자에게 가장 적절하다. 몇개의 레벨로된 메뉴네비게이션은 전통적인 멀티페이지 애플리케이션의 필수 요소다. 
  2. 검색엔진최적화(SEO, Search Engine Optimization)관리에 매우 적절하며 또한 쉽다. 하나의 애플리케이션은 페이지당 하나의 키워드에 대해 최적화 될 수 있기때문에 다른 키워드들을 랭크에 올릴 수 있는 더 나은 기회를 제공한다.
- 멀티페이지 애플리케이션의 단점
  1. 프론트앤드와 백엔드 개발이 강하게 결합되어 있다. 
  2. 개발이 매우 복잡하게 된다. 개발자들은 클라이언트와 서버사이드 모두에 대해 프레임워크들을 사용해야 하며, 이것은 애플리케이션 개발이 더 길어지는 결과를 이끌게 된다. 

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
- [SPA(single page application) vs MPA(multi page application)](https://m.blog.naver.com/PostView.nhn?blogId=sthwin&logNo=221214109560&proxyReferer=https:%2F%2Fwww.google.com%2F)
