---
title: Elasticsearch
date: "2021-03-20T23:10:22.253Z"
template: "post"
draft: false
slug: "elasticsearch"
category: "Daily"
tags:
  - "Elasticsearch"
description: "Elasticsearch에 대해 알아보자"
---
### Elasticsearch
- Apache Lucene(아파치 루씬) 기반의 java 오픈소스 분산 검색 엔진
- 데이터 저장소가 아니라서 MySQL같은 데이터베이스를 대체할 수 없다.
- 방대한 양의 데이터를 신속하고 거의 실시간으로 저장, 검색, 분석할 수 있다.
- Elasticsearch는 검색을 위해 단독으로 사용되기도 하며, ELK(Elasticsearch / Logstatsh / Kibana 스택으로 사용되기도 한다.

### ELK( Elasticsearch / Logstatsh / Kibana )
- ELK는 분석 및 저장 기능을 담당하는 ElasticSearch, 수집 기능을 하는 Logstash, 이를 시각화하는 도구인 Kibana의 앞글자만 딴 단어이다.
- ELK는 접근성과 용이성이 좋아 최근 가장 핫한 Log 및 데이터 분석 도구다.

#### 1) ElasticSearch
- ElasticSearch는 Lucene 기반으로 개발한 분산 검색엔진으로, Logstash를 통해 수신된 데이터를 저장소에 저장하는 역할을 담당
- 데이터를 중심부에 저장하여 예상되는 항목을 검색하고 예상치 못한 항목을 밝혀낼 수 있다.
- 정형, 비정형, 위치정보, 메트릭 등 원하는 방법으로 다양한 유형의 검색을 수행하고 결합할 수 있다.

#### 2) Logstash
- 오픈소스 서버측 데이터 처리 파이프라인으로, 다양한 소스에서 동시에 데이터를 수집하고 변환하여 stash 보관소로 보낸다.
- 수집할 로그를 선정해서, 지정된 대상 서버(ElasticSearch)에 인덱싱하여 전송하는 역할을 담당하는 소프트웨어

#### 3) Kibana
- 데이터를 시각적으로 탐색하고 실시간으로 분석 할 수 있다.
- 시각화를 담당하는 HTML + Javascript 엔진이라고 보면 된다.

### ELK Stack
- ELK + Beats = ELK Stack
#### 1) Beats
- 서버에 에이전트로 설치하여 다양한 유형의 데이터를 Elastic Search 또는 Logstash에 전송하는 오픈 소스 데이터 발송자 


### 로그 분석시 ELK Stack 사용 방식
1. 로그를 분석하기 위해서는 로그 데이터를 Elasticsearch로 가져오는 것에서 시작한다.
2. Beats를 이용해 로그를 수집하고 logstash로 전송
3. logstash는 로그를 정제해 Elasticsearch에 저장
4. Kibana에서는 Elasticsearch에 저장되어 있는 로그들을 차트 등으로 시각화해 다양한 분석이 가능하게 한다.



<hr>

> Reference
- [Elasticsearch란? (개념 및 종류, RDBMS와 차이)](https://choseongho93.tistory.com/231)
- [[Elasticsearch] 기본 개념잡기](https://victorydntmd.tistory.com/308)
- [ELK Stack을 이용한 로그 분석 시스템 구축하기](https://yunyoung1819.tistory.com/146)