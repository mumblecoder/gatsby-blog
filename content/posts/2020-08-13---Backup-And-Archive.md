---
title: 백업과 아카이브에 대해서
date: "2020-08-13T10:15:37.121Z"
template: "post"
draft: false
slug: "backup-and-archive"
category: "Daily"
tags:
  - "Etc"
description: "백업과 아카이브의 차이"
---

백업과 아카이브는 제대로 알지 못하면 같은 기능을 말하는건가 착각할 수 있지만, 두 기능은 엄연히 다른 기능이다.

### 백업(Backup)에 대해서
- 백업은 데이터가 손상되거나 손실된 경우를 대비해 저장하는 데이터의 사본이다. 
- 백업을 해도 원본 데이터는 지우지 않는다.
- 백업의 목적은 사고가 났을 경우 데이터 복원을 하기 위해서다. 빠른 복구가 백업의 목표중 하나이다.

### 아카이브(Archive)에 대해서
- 아카이빙은 데이터를 장기간 보존하기위해 다른 위치로 이동하는 과정이다.
- 필수는 아니지만 보편적으로 아카이브후에 원본데이터를 삭제한다.
- 아카이브는 일반적으로 더이상 변경되지 않을 데이터를 저장한다.

> 운영에 필요한 데이터들은 문제가 생길시 복구를 위해 백업을 해두고, 로그 기록이나 법적으로 보관이 필요한 데이터들은 아카이빙해둔다.
