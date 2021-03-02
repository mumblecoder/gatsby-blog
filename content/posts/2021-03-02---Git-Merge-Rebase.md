---
title: Git Merge & Rebase
date: "2021-03-02T19:23:41.844Z"
template: "post"
draft: false
slug: "git-merge-rebase"
category: "Daily"
tags:
  - "Git"
description: "Git에서 Merge와 Rebase의 특징에 대해 알아보자"
---

### Merge, Rebase
  - Merge는 branch를 통합하는 것이고, Rebase는 branch의 base를 옮긴다는 뜻이다.
  - 같은 곳을 수정했을 경우에는 두 작업 모두 충돌이 발생할 수 있고, 충돌 해결 후 작업을 재진행하면 된다.

### 1. Merge
- 브랜치들의 현재 상태를 기준으로 병합을 하는 것이다.
- rebase에 비해 이해와 사용이 쉬워 branch가 많지 않은 경우 merge만 사용하기도 한다.
- branch가 많을 경우 history가 난잡해진다.

### 2. Rebase
- 현재 브랜치의 base를 옮기는 것이다. 다른 브랜치로 옮기는 것이다.
- rebase를 사용하면 Git History가 깔끔해질 수 있다.


#### 아래 출처 글을 읽으면 쉽게 이해 할 수 있다.

> 출처
- [Git Merge와 Rebase의 차이, 아름다운고 깔끔한 Git History 만들기.](https://firework-ham.tistory.com/12)
- [[Git&Github] Git Merge와Rebase 그리고 충돌 해결하기](https://velog.io/@dev_cecy/GitGithub-Git-Merge%EC%99%80-Rebase%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90)
