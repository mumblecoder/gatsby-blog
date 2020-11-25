---
title: Jenkins Pipeline
date: "2020-11-25T22:40:41.739Z"
template: "post"
draft: true
slug: "jenkins-pipeline"
category: "Daily"
tags:
  - "Jenkins"
description: "젠킨스 파이프라인 플러그인에 대해 알아보자."
---

### Jenkins Pipeline
- 연속적인 이벤트 혹은, Job의 그룹을 실행시킬 수 있는 젠킨스 플러그인
- 파이프 라인의 통합 및 구현을 지원
- Pipeline 전용 DSL을 통해, '코드'로서 기능을 정의 및 생성 가능
- Jenkinsfile을 통해 작업 생성
- 시각화 된, 빌드 화면으로 로그 실시간 로그 확인 가능

### Jenkinsfile 작성법

1. Job 구성에서, 직접 Jenkinsfile을 작성
2. SCM을 이용해서 Jenkinsfile 을 작성하는 법 - github에 관리 후 젠킨스에서 실행
3. Blueocean 플러그인으로 UI를 통해 Jenkinsfile 작성 -  github에 관리 

### Jenkins Pipeline 문법
- 문법에는 2가지 종류가 있다. 두 문법은 호환되지 않아서 동시에 사용할 수 없다.
    1. Declarative Pipeline 
        - 보다 쉽게 작성 할 수 있게, 커스텀 되어 있음. 
        - Groovy-syntax기반. Groovy 문법을 잘 몰라도 작성 가능
    2. Scripted Pipeline
        - Groovy기반, Declarative보다 효과적으로 많은 기능을 포함하여 작성 가능. 하지만 작성 난이도가 높음
        - Groovy 문법을 잘 알아야 함

<hr>

> Reference
- [젠킨스 파이프라인](https://bob-full.tistory.com/10)
