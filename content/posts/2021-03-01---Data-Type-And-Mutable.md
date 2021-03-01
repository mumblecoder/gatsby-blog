---
title: 참조타입과 기본타입, mutable과 immutable
date: "2021-03-01T22:07:51.717Z"
template: "post"
draft: false
slug: "type-mutable"
category: "Daily"
tags:
  - "Java"
description: "참조타입과 기본타입, mutalble과 immutable의 차이를 알아보자"
---

## 참조타입과 기본타입

### 1. 기본타입
- 정수, 실수, 문자, 논리 리터럴을 저장하는 타입을 말한다.
- 스택 영역에 데이터가 생성된다.

### 2. 참조타입
- 객체의 번지를 참조하는 타입으로 배열, 열거, 클래스, 인터페이스 타입을 말한다.
- 참조 타입의 변수들은 실제 값들을 저장하고 있는 것이 아니라 실제 값이 저장 되어 있는 메모리 주소를 저장하고 있다고 생각하면 된다. 
- 즉 주소를 통해 실제 값을 참조하기 떄문에 참조 타입이라고 한다. 참조 타입은 힙 영역에 생성된다.
- 참조 타입에서의 ==은 변수의 번지 값을 비교하는 것이고, equals는 객체내에 있는 문자열을 비교하는 것이다.

## mutable, immutable

### 1. mutable class
- 인스턴스가 생성된 후에 값의 내용이 변할 수 있는 클래스
- ex) String을 제외한 참조타입변수
- 보통 mutable 객체를 복사하게 되면 참조값을 복사하는데 이럴경우 여러 스레드로 해당 객체 접근시 값의 변경 위험이 있다.

### 2. immutable
- 클래스의 인스턴스가 일단 생성된 후에는 =로 인스턴스의 내용이 절대 변하지 않는 클래스, 
- ex) int 등의 기본 타입들과 String 
- String은 immutable하기 때문에 값을 수정 할 때 마다 기존 메모리를 버리고 새로운 메모리에 값을 넣어 연결한다.
- mutable 객체에 비해 쓰레드에 안전한 편이다.


> 출처
- [[객체지향]mutable, immutable 객체란?](https://m.blog.naver.com/PostView.nhn?blogId=k220j&logNo=220869725179&proxyReferer=https:%2F%2Fwww.google.com%2F)
