---
title: MSA와 Monolithic
date: "2021-03-05T23:11:27.823Z"
template: "post"
draft: false
slug: "msa-monolithic"
category: "Daily"
tags:
  - "Architecture"
description: "MSA와 Monolithic의 장단점에 대해 알아보자."
---

## MSA & Monolithic
  - 일반적으로 Monolithic은 작은 서비스를 적은 개발자가 개발, 운영할 때, MSA는 큰 서비스를 많은 개발자가 개발 운영 할 때 적합하다.
  - 어느것이 좋다, 나쁘다가 아니라 주어진 상황과 환경에 따라 적절한 방식을 선택하면 된다.

### 1. Monolithic
  1. 장점
      - 작은 규모의 프로젝트에서는 하나로 묶여있기 때문에 배포, 테스트가 용이하다.
      - 한 서비스내에서 호출하기 때문에 통신 비용이 저렴하고 빠르다.

  2. 단점
      - 업데이트나 배포, 확장에 제약이 생긴다.
      - 새로운 기술 적용이 어렵다.
      - 부분의 장애가 서비스의 전체적인 장애를 유발한다.

### 2. MSA
  1. 장점
      - 요구 사항을 신속하게 반영하여 빠르게 배포할 수 있다.
      - 서비스가 분리되어 있기 때문에 Monolithic에 비해 업데이트, 배포, 확장이 용이하다.
      - 부분적 장애에 대한 격리가 수월하여 장애가 전체 서비스로 확장될 가능성이 적다.

  2. 단점
      - 서비스 간 호출시 API를 이용하기 때문에, 통신 비용이 늘어나게 된다.
      - 서비스가 분리되어 있기 때문에 테스트와 트랜잭션의 복잡도가 증가하고, 많은 자원을 필요로 한다.
      - 데이터가 여러 서비스에 걸쳐 분산되기 때문에 한번에 조회하기 어렵고, 데이터의 정합성 또한 관리하기 어렵다.
      - 로그 추적 등의 문제 해결이 쉽지 않고, 분산 환경으로 인해 유지보수량이 늘어남


> 출처
- [[MSA] Monolithic Architecture VS Micro Service Architecture](https://ssungkang.tistory.com/entry/MSA-Monolithic-Architecture-VS-Micro-Service-Architecture)
