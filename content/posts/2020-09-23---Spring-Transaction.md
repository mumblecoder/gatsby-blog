---
title: Spring Transaction 전파
date: "2020-09-23T20:45:32.842Z"
template: "post"
draft: true
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




<hr>

> Reference
- [spring transaction 전파](http://wonwoo.ml/index.php/post/966)

