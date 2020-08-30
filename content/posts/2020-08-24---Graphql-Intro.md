---
title: 20.08.24 - GraphQL
date: "2020-08-24T11:44:23.284Z"
template: "post"
draft: false
slug: "graphql-intro"
category: "Daily"
tags:
  - "GraphQL"
description: "GraphQL은 페이스북에서 만든 쿼리로 최근 인기가 오르고 있다고 한다."
---

### GraphQL이란
- SQL과 마찬가지로 쿼리 언어이나 언어적 구조 차이와 실전에서 쓰이는 방식 차이가 매우 크다.
- 서버사이드 gql 애플리케이션은 gql로 작성된 커리를 입력으로 받아 쿼리를 처리한 결과를 다시 클라이언트로 돌려준다.
- HTTP API 자체가 특정 데이터 베이스나 플랫폼에 종속적이지 않은 것처럼 마찬가지로 gql 역시 종속적이지 않다.

### SQL과 GQL의 차이
- sql은 DB에 저장된 데이터를 효율적으로 가져오는것이 목적, gql은 웹 클라이언트가 데이터를 서버로부터 효율적으로 가져오는 것이 목적
- sql의 문장은 주로 백엔드 시스템에서 작성하고 호출, gql의 문장은 주로 클라이언트 시스템에서 작성하고 호출.

### REST API와 GraphQL 비교
- REST API는 URL, METHOD등을 조합하기 때문에 다양한 Endpoint가 존재하고, GraphQL은 단 하나의 Endpoint가 존재 한다.
- REST API에서는 각 Endpoint마다 SQL쿼리가 달라지는 반면, GraphQL은 스키마 타입마다 SQL쿼리가 달라진다.

### GraphQL의 구조
1. 쿼리(Query)와 뮤테이션(Mutation)
    - 쿼리는 읽기를 요청하는 구문, 뮤테이션은 수정을 요청하는 구문. 
    - gql에서는 쿼리와 뮤테이션을 나누는데 사실상 이 둘은 별 차이가 없어 보인다. 
    - 쿼리는 데이터를 읽는데(R) 사용하고, 뮤테이션은 데이터를 변조(CUD) 하는 데 사용한다는 개념 적인 규약을 정해 놓은 것이다.
    - Query 필드가 병렬로 실행되는 동안 Mutation 필드는 순차적으로 실행된다. 즉, 하나의 요청에서 두 개의 Mutation를 보내면 순차적으로 실행되어 경쟁 상태가 되지 않도록 한다.


2. 스키마(Schema)와 타입(Type)
    - 


3. 리졸버(Resolver)
    - 


4. 인스트로펙션(Instropection)
    - 
 


> Reference 
- [GraphQL 개념잡기](https://tech.kakao.com/2019/08/01/graphql-basic)
- [GraphQL이란 - 2. GraphQL의 구조](https://smoh.tistory.com/296)
