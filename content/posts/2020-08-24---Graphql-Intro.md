---
title: GraphQL
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
    - GraphQL 스키마의 가장 기본적인 구성 요소는 객체(Object) 타입입니다. 객체 타입은 서비스에서 가져올 수 있는 객체의 종류와 그 객체의 필드를 나타냅니다.


3. 리졸버(Resolver)
    - gql 에서는 데이터를 가져오는 구체적인 과정을 직접 구현 해야한다.
    - gql 쿼리문 파싱은 대부분의 gql 라이브러리에서 처리를 하지만, gql에서 데이터를 가져오는 구체적인 과정은 resolver가 담당하고, 이를 직접 구현 해야한다.
    - 프로그래머는 리졸버를 직접 구현해야하는 부담은 있지만, 이를 통해서 데이터 source의 종류에 상관 없이 구현이 가능하다. 
    - 예를 들어서, 리졸버를 통해 데이터를 데이터베이스에서 가져 올 수 있고, 일반 파일에서 가져 올 수 있고, 심지어 http, SOAP와 같은 네트워크 프로토콜을 활용해서 원격 데이터를 가져올 수 있다.
    - gql 쿼리에서는 각각의 필드마다 함수가 하나씩 존재 한다고 생각하면 된다. 이 함수는 다음 타입을 반환합니다. 이러한 각각의 함수를 리졸버라고 한다.
    - 만약 필드가 스칼라 값(문자열이나 숫자와 같은 primitive 타입)인 경우에는 실행이 종료되어 연쇄적인 리졸버 호출이 일어나지 않는다. 하지만 필드의 타입이 스칼라 타입이 아닌 우리가 정의한 타입이라면 해당 타입의 리졸버가 호출된다.

4. 인스트로펙션(Instropection)
    - gql의 인트로스펙션은 서버 자체에서 현재 서버에 정의된 스키마의 실시간 정보를 공유를 할 수 있게 한다.
    - 이 스키마 정보만 알고 있으면 클라이언트 사이드에서는 따로 연동규격서를 요청 할 필요가 없다. 클라이언트 사이드에서는 실시간으로 현재 서버에서 정의하고 있는 스키마를 의심 할 필요 없이 받아들이고, 그에 맞게 쿼리문을 작성하면 된다.
    - 대부분의 서버용 gql 라이브러리에는 쿼리용 IDE를 제공한다.
    - 프로그래머는 인트로스펙션을 활용하여, 직접 쿼리 및 뮤테이션, 필드 스키마를 확인 할 수 있다. 물론 보안상의 이슈로 상용환경에서는 이러한 스키마의 공개는 신중해야 한다.


> Reference 
- [GraphQL 개념잡기](https://tech.kakao.com/2019/08/01/graphql-basic)
- [GraphQL이란 - 2. GraphQL의 구조](https://smoh.tistory.com/296)
