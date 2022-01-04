---
title: Using ObjectMapper Without Default Constructor (ParameterNamesModule)
date: "2022-01-03T23:55:00.000Z"
template: "post"
draft: false
slug: "objectmapper-without-default-constructor"
category: "Daily"
tags:
  - "Java"
description: "기본 생성자 없이 ObjectMapper 사용하기"
---

## 일의 시작
- rabbitTemplate의 messageConverter를 변경해야 할 상황이 생겼다.
- 현재는 default값인 SimpleMessageConverter를 사용하고 있었는데 Jackson2JsonMessageConverter로 변경하기로 했다.
- 단순하게 setMessageConverter() 메서드로 messageConverter만 교체해주면 끝날 줄 알았는데 개발 서버에 배포하니 엄청난 에러들이 발생했다.

## 수습 및 원인 파악
- 빠르게 원복하여 재배포.
- 에러 메세지는 아래와 같다.
```
Caused by: com.fasterxml.jackson.databind.exc.InvalidDefinitionException: 
Cannot construct instance of `com.web.school.dao.Student` (no Creators, like default constructor, exist): 
cannot deserialize from Object value (no delegate- or property-based Creator)
```
- 기본 생성자가 존재하지 않아서 발생한 에러였다.
- 단순하게 생각하면 객체의 기본 생성자를 만들면 되겠지만 맘에 들지 않았다.
- 현재 Student 객체의 코드는 아래와 같다.

```java
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@AllArgsConstructor
@Getter
@ToString
public class Student {

    private final String name;

}
```

- 기본 생성자를 생성하려면 필드에 붙은 final을 제거해줘야 한다.
- Setter를 안 만들 거니 final 없어도 되지 않나? 라고 생각할 수 있지만 나만 건드는 코드가 아니기에 Setter가 생기지 않을 거라고 장담할 수 없다.
- 그래서 다른 방법을 찾아보았다.

## 해결(SpringBoot(2.3.3), Jackson(2.11.2) 기준)

1. ParameterNamesModule 등록
```java
ObjectMapper mapper = new ObjectMapper().registerModule(new ParameterNamesModule());
```

2. @JsonCreator 선언
```java
@AllArgsConstructor(onConstructor = @_(@JsonCreator))
@Getter
@ToString
public class Student {
    private final String name;
}
```


## 주의점
- 위 에러의 경우 받은 데이터를 deserialize 할 때 발생한다.
- 즉, Runtime에 발생하므로 메세지가 변환되는 모든 경우를 확인해야 한다.

## 참고글
- [RabbitMQ Jackson2JsonMessageConvertor](https://minholee93.tistory.com/entry/RabbitMQ-Jackson2JsonMessageConvertor)
- [Jackson으로 파싱한 JSON 속성값을 생성자로 전달하기](https://blog.benelog.net/jackson-with-constructor.html)
