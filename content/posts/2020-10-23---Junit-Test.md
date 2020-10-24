---
title: JUnit을 사용한 단위 테스트
date: "2020-10-23T23:48:12.582Z"
template: "post"
draft: false
slug: "junit-test"
category: "Daily"
tags:
  - "Java"
description: "JUnit을 사용한 단위 테스트 방법에 대해 알아보자."
---

### JUnit
- 자바용 단위 테스트 작성을 위한 산업 표준 프레임워크

### 테스트 코드 예시
```java
public class CaluratorTest {               // 1번
    @Test                                  // 2번
    public void testSum(){                                                        
        Calcurator c = new Calcurator();
        double result = c.sum(10, 50);     // 3번
        assertEquals(60, result, 0);       // 4번
    }
}
```

1. 테스트 클래스는 반드시 public으로 선언. 클래스명은 관례에 따라 테스트클래스명 + Test 끝나는 이름으로 사용된다. JUnit 3에서는 TestCase클래스를 상속받아 사용해야 했으나 JUnit 4에서는 상속받지 않아도 된다.
2. @Test 어노테이션을 선언하여 testSum 메서드가 단위 테스트 메서드임을 선언. 클래스명과 마찬가지로 테스트 메서드는 test + 테스트메서드명으로 선언한다. @Test 어노테이션을 선언한 메서드는 JUnit이 알아서 실행을 해준다.
3. Calcurator 클래스의 인스턴스를 선언하여 sum 메서드에 10, 50 인자값을 세팅하여 result 변수에 결과값을 리턴 받는다.
4. Assert 클래스의 정적 메서드인 assertEquals를 이용하여 테스트 결과 값을 확인한다. assertEquals(expected, actual, delta)는 assertEquals(예상값, 실제값, 허용오차)


### JUnit Annotation 사용 예시

1. 스프링 프레임워크 기반의 JUnit 테스트를 위한 세팅
```java
@RunWith(SpringJUnit4ClassRunner.class) 
@ContextConfiguration(locations={"file:WebContent/WEB-INF/classes/applicationContext*.xml"})
```
    - Spring 기반의 테스트 코드 작성을 위해 테스트 클래스 상단에 @RunWith(SpringJUnit4ClassRunner.class) 구문을 추가
    - Spring 프레임워크 context 파일을 테스트 수행시에도 동일하게 로딩하기 위해 @ContextConfiguration() 사용.

2. 메서드 수행시간 제한하기
```java
@Test(timeout=5000)
```
    - 단위는 밀리초이며 이 메서드가 결과를 반환하는데 5,000밀리초가 넘긴다면 테스트는 실패한다.

3. Exception 테스트
```java
@Test(expected=RuntimeException.class)
```
    - 만약 테스트에서 RuntimeException이 발생하지 않을 경우 실패한다.

4. 테스트 건너뛰기
```java
@Ignore(value=”여기는 테스트 안할거야”)
```
    - @Ignore 어노테이션을 추가하면 해당 메서드는 테스트를 건너뛰며 JUnit4는 성공 및 실패 개수와 함께 건너뛴 테스트 수도 포한된 결과 통계를 제공한다.

5. 초기화 및 종료
```java
@Before
[...]
@After
[...]
```
    - @Before 어노테이션이 선언된 메서드는 해당 테스트 클래스의 인스턴스, 객체를 초기하 하는 작업을 한다. 
    - @After 어노테이션이 선언된 메서드는 해당 테스트 실행 후 실행된다.
    - @BeforeClass, @AfterClass도 있으며 이는 static 메서드와 동일한 형태로 테스트 클래스 실행 시 한번만 실행된다.





<hr>

> Reference
- [Junit을 이용한 단위테스트](https://epthffh.tistory.com/entry/Junit%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%8B%A8%EC%9C%84%ED%85%8C%EC%8A%A4%ED%8A%B8)


