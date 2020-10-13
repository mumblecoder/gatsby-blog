---
title: Singleton Pattern
date: "2020-10-13T22:09:52.235Z"
template: "post"
draft: false
slug: "singleton"
category: "Daily"
tags:
  - "Pattern"
description: "싱글톤(Singleton) 패턴에 대해 알아보자"
---

### 싱글턴(Singleton)
- 싱글턴 패턴은 인스턴스가 오직 1개만 생성되야 하는 경우에 사용되는 패턴이다. 
- 예를들어 레지스트리 같은 설정 파일의 경우 객체가 여러개 생성되면 설정 값이 변경될 위험이 있기에 싱글턴 패턴을 활용하여 생성해야한다.
- 싱글턴 패턴을 이용하면 하나의 인스턴스를 메모리에 등록해서 여러 스레드가 해당 인스턴스를 공유하여 사용하게 할 수 있으므로, 요청이 많은 곳에서 사용하면 효율을 높일 수 있다.
- 주의점은 싱글턴을 만들때 동시성(Concurrency) 문제를 고려해서 싱글턴을 설계해야한다.
- 싱글턴 패턴의 공통적인 특징은 private constructor를 가진다는 것과, static method 를 사용한다는 점이다.

### 싱글턴 패턴의 기본적인 방법
```java
public class Singleton{
  private static Singleton ton;

  public static Singleton getInstance(){
    if (ton == null){
      ton = new Singleton();
    }
    return ton;
  } 
}
```
- 위와 같은 코드를 작성할 경우 multi-thread 환경에서는 getInstance()가 동시에 호출 되어 문제가 발생할 수 있다.
- 간단하게 Synchronized를 이용하여 해결할 수 있지만, 비용측면에서 좋지 않기떄문에 다른 방법을 권장한다.

### Eager Initialize
```java
public class Singleton{
  private static Singleton ton = new Singleton();

  public static Singleton getInstance(){
    return ton;
  } 
}
```
- 위와 같이 코드를 작성하면 static 함수이기 때문에 class load시 객체가 생성되어 동시접근에 대한 문제가 해결된다.

### Lazy Initialize
```java
public class Singleton{
  private static volatile Singleton ton;

  public static Singleton getInstance() {
    if (ton == null){
      synchronized(Singleton.class) {
        if (ton == null){
          ton = new Singleton();
        }
      }
    }
    return ton;
  } 
}
```
- Eager Initialize와 달리 객체 사용시 생성된다.
- 위 코드는 java 1.5이상에서만 사용가능하다. (이하 버전은 volatile 때문에 수정 필요.)

### 중첩 클래스 사용
```java
public class Singleton{

  private static class Holder{
    public static final Singleton ton = new Singleton();
  }

  public static Singleton getInstance(){
    return Holder.ton;
  } 
}
```
- 중첩 클래스를 갖는다는 부담은 있지만, synchronized없이 lazy initialize의 장점을 가질 수 있다.


<hr>

> Reference
- [안전한 싱글톤](https://blog.naver.com/pionio2/220788958222)
- [Singleton 패턴](https://medium.com/webeveloper/%EC%8B%B1%EA%B8%80%ED%84%B4-%ED%8C%A8%ED%84%B4-singleton-pattern-db75ed29c36)