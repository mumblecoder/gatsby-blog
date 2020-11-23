---
title: Apache Kafka
date: "2020-11-22T23:23:15.921Z"
template: "post"
draft: true
slug: "apache-kafka"
category: "Daily"
tags:
  - "Kafka"
description: "메세징 시스템 Apache Kafka에 대해 알아보자"
---

### Apache Kafka
- 분산 스트리밍 플랫폼이며 데이터 파이프 라인을 만들 때 주로 사용되는 오픈소스 솔루션
- 메세징 큐의 일종
- 대용량의 실시간 로그 처리에 특화되어 설계된 메시징 시스템, 기존 범용 메시징 시스템대비 TPS가 매우 우수
- 기존의 메시징 시스템에서는 broker가 consumer에게 메시지를 push해 주는 방식인데 반해, Kafka는 consumer가 broker로부터 직접 메시지를 가지고 가는 pull 방식으로 동작하기 때문에 consumer는 자신의 처리능력만큼의 메시지만 broker로부터 가져오기 때문에 최적의 성능을 낼 수 있다.
![Kafka Architecture](/img/kafka-architecture.png)

### 카프카 주요 개념
- producer : 메세지 생산(발행)자.
- consumer : 메세지 소비자
- consumer group : consumer들끼리 메세지를 나눠서 가져간다. offset을 공유하여 중복으로 가져가지 않는다.
- broker : 카프카 서버를 가리킨다.
- zookeeper : 카프카 서버 (+클러스터) 상태를 관리한다.
- cluster : 브로커들의 묶음
- topic : 메세지 종류
- partitions : topic이 나눠지는 단위
- Log : 1개의 메세지
- offset : 파티션내에서 각 메시지가 가지는 unique id

### 카프카의 특징(Kafka Features)
1. Publisher Subscriber 모델
    - Publisher Subscriber 모델은 데이터 큐를 중간에 두고 서로 간 독립적으로 데이터를 생산하고 소비합니다. 이런 느슨한 결합을 통해 Publisher나 Subscriber가 죽을 시, 서로 간에 의존성이 없으므로 안정적으로 데이터를 처리할 수 있습니다. 또한 설정 역시 간단하게 할 수 있다는 장점이 있습니다.
2. 고가용성(High availability) 및 확장성(Scalability)
    - 카프카는 클러스터로서 작동한다. 
    - 클러스터로서 작동하므로 Fault-tolerant한 고가용성 서비스를 제공할 수 있고 분산 처리를 통해 빠른 데이터 처리를 가능하게 한다.
    - 서버를 수평적으로 늘려 안정성 및 성능을 향상시키는 Scale-out이 가능합니다.
3. 디스크 순차 저장 및 처리(Sequential Store and Process in Disk)
    - 메세지를 메모리 큐에 적재하는 기존 메세지 시스템과 다르게 카프카는 메세지를 디스크에 순차적으로 저장한다.
    - 서버에 장애가나도 메세지가 디스크에 저장되어 있으므로 유실걱정이 없다.
    - 디스크가 순차적으로 저장되어 있으므로 디스크 I/O가 줄어들어 성능이 빨라진다.
4. 분산 처리(Distributed Processing)
    - 카프카는 파티션(Partition)이란 개념을 도입하여 여러개의 파티션을 서버들에 분산시켜 나누어 처리할 수 있어서 메세지를 상황에 맞추어 빠르게 처리할 수 있다.




<hr>

> Reference
- [아파치 카프카(Apache Kafka) 아키텍처 및 동작방식, 파티션 읽기 쓰기(Partition Read and Write)](https://engkimbs.tistory.com/691)
- [아파치 카프카 알아보기](https://12bme.tistory.com/531)
