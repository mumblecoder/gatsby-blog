---
title: JUnit을 사용한 단위 테스트
date: "2020-10-23T23:48:12.582Z"
template: "post"
draft: true
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
public class CaluratorTest {                            // 1번
    @Test                                               // 2번
    public void testSum(){                                                        
        Calcurator c = new Calcurator();
        double result = c.sum(10, 50);                  // 3번
        assertEquals(60, result, 0);                    // 4번
    }
}
```

1. 테스트 클래스는 반드시 public으로 선언. 클래스명은 관례에 따라 테스트클래스명 + Test 끝나는 이름으로 사용된다. JUnit 3에서는 TestCase클래스를 상속받아 사용해야 했으나 JUnit 4에서는 상속받지 않아도 된다.
2. @Test 어노테이션을 선언하여 testSum 메서드가 단위 테스트 메서드임을 선언. 클래스명과 마찬가지로 테스트 메서드는 test + 테스트메서드명으로 선언한다. @Test 어노테이션을 선언한 메서드는 JUnit이 알아서 실행을 해준다.
3. Calcurator 클래스의 인스턴스를 선언하여 sum 메서드에 10, 50 인자값을 세팅하여 result 변수에 결과값을 리턴 받는다.
4. Assert 클래스의 정적 메서드인 assertEquals를 이용하여 테스트 결과 값을 확인한다. assertEquals(expected, actual, delta)는 assertEquals(예상값, 실제값, 허용오차)




<hr>

> Reference
- [Junit을 이용한 단위테스트](https://epthffh.tistory.com/entry/Junit%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%8B%A8%EC%9C%84%ED%85%8C%EC%8A%A4%ED%8A%B8)


