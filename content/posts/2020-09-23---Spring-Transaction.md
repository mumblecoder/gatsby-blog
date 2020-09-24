---
title: Spring Transaction 전파
date: "2020-09-23T20:45:32.842Z"
template: "post"
draft: false
slug: "spring-transaction"
category: "Daily"
tags:
  - "Java"
description: "transaction 전파란 현재 transaction 에서 다른 transaction 으로 이동할 때를 이야기 한다. Propagation 값에 따라 어떻게 전파되는지 알아보자"
---

### transaction 전파란 
- 현재 transaction 에서 다른 transaction 으로 이동할 때를 이야기 한다. 
- 예를 들면 UserService에 트랜잭션이 걸려있는데 UserService에서 호출한 TestService에도 트랜잭션이 걸려있는 것을 말한다.
- 같은 클래스는 해당 사항이 없다.

### 테스트 예제 
#### UserService
```java
@Autowired
TestService testService;

@Transactional
public void transactionTest() {
  log.info("currentTransactionName : {}", TransactionSynchronizationManager.getCurrentTransactionName());
  testService.transactionService();
}
```

#### TestService
```java
public void transactionService(){
  log.info("currentTransactionName : {}" , TransactionSynchronizationManager.getCurrentTransactionName());
}
```

- 위와 같은 상태로 실행하면 로그에 찍힌 트랜잭션 이름이 동일하다. 

- 지금부터는 TestSevice의 transactionService() 메서드에 대해서만 변화를 줄것이다.
- @Transactional 속성 중 Propagation으로 전파 속성을 지정할 수 있다. 

1. @Transactional(propagation = Propagation.REQUIRED)
	- propagation의 defalut value는 Propagation.REQUIRED이다.
	- 이 경우엔 동일한 트랜잭션 이름이 로그로 기록된다.

2. @Transactional(propagation = Propagation.REQUIRED_NEW)
	- 이 경우엔 트랜잭션명이 다르게 기록된다.
	- 기존에 트랜잭션이 있더라도 현재 트랜잭션을 새로 만드는 속성이다.
	- 하지만 부모 트랜잭션에서 에러가 발생하면 새로 만든 트랜잭션도 같이 롤백된다.
	
3. @Transactional(propagation = Propagation.NEVER)
	- 이 경우엔 에러가 발생한다.
	- 트랜잭션이 이미 있으면 에러를 발생하는 속성이다.
	
4. @Transactional(propagation = Propagation.MANDATORY)
	- 이 경우엔 동일한 트랜잭션명이 기록된다.
	- 만약 UserService에 트랜잭션을 걸지 않았다면 에러가 발생한다.
	- 트랜잭션이 없는 곳에서 호출되면 에러를 발생하는 속성이다.

5. @Transactional(propagation = Propagation.NOT_SUPPORTED)
	- Propagation.REQUIRES_NEW 속성처럼 트랜잭션명이 다르게 기록된다.
	- 부모 트랜잭션에서 오류가 발생하여도 새로 만든 트랜잭션은 영향을 받지 않는다. (롤백되지 않는다.)


<hr>

> Reference
- [spring transaction 전파](http://wonwoo.ml/index.php/post/966)

