---
title: Sequence 사용 이유
date: "2020-10-21T20:15:23.482Z"
template: "post"
draft: false
slug: "why-use-sequence"
category: "Daily"
tags:
  - "Database"
description: "PK로 자주 사용하는 시퀀스. 왜 사용하는지 알아보자"
---

### Sequence
- 유니크한 값을 자동 생성해주는 객체이다.
- 메모리에 Cache되었을 때 sequence값의 액세스 효율이 증가 한다.
- sequence는 테이블과는 독립적으로 저장되고 생성된다.

### Max + 1이 아닌 Sequence를 사용하는 이유
- 간혹 Sequence가 아닌 Max + 1을 사용하는 곳이 있다고 한다. 왜 Sequence로 변경해야 하는지 알아보자.
    1. 동기화 처리
        - max + 1은 현재 가장 큰값에 +1을 시켜주는 것이기 때문에 사용하다 보면 같은 값이 중복으로 나올 수가 있다.
        - sequence는 크리티컬 세션이 보장 되기 때문에 절대 데이터의 중복처리가 되질 않는다
        - PK로 쓰다보면 max + 1에서 중복값이 나올 수 있기 때문에 에러가 발생할 수 있다.
    2. 성능
        - max + 1은 max값을 찾기위해 table을 전체 스캔하기 때문에 성능상 sequence가 유리하다.

<hr>

> Reference
- [시퀀스(Sequence)의 이해 및 활용](http://www.gurubee.net/lecture/1037)
- [[DATABASE] 시퀀스(Sequence) 와 MAX +1 의 차이](https://mine-it-record.tistory.com/63)


