---
title: SSL (Secure Socket Layer)
date: "2020-11-07T16:30:53.283Z"
template: "post"
draft: true
slug: "what-is-ssl"
category: "Daily"
tags:
  - "Security"
description: "SSL에 대해 알아보자"
---

### SSL
- SSL(Secure Socket Layer) 프로토콜은 처음에 Netscape사에서 웹서버와 브라우저 사이의 보안을 위해 만들었다. 
- SSL은 Certificate Authority(CA)라 불리는 서드 파티로부터 서버와 클라이언트의 인증을 하는데 사용된다.

### SSL 인증서
- 클라이언트와 서버간의 통신을 제3자가 보증해주는 전자화된 문서
- 클라이언트가 접속한 서버가 신뢰할 수 있는 서버임을 보장하고, SSL 통신에 사용할 공개키를 클라이언트에게 제공하는 역할을 한다.
- 클라이언트가 서버에 접속한 직후에 서버는 클라이언트에게 이 인증서 정보를 전달한다. 클라이언트는 이 인증서 정보가 신뢰할 수 있는 것인지를 검증 한 후에 절차를 수행한다.
![ssl인증서절차](/img/ssl-process.png)

#### SSL과 SSL 디지털 인증서를 이용했을 때의 이점
- 통신 내용이 공격자에게 노출되는 것을 방지
- 클라이언트가 접속하려는 서버가 신뢰할 수 있는 서버인지를 판단할 수 있다.
- 통신 내용의 악의적인 변경을 방지


### CA (Certificate authority)
- 인증서의 역할을 하는 민간기업들이 있는데 이런 기업들을 CA 혹은 Root Certificate 라고 한다. 이 기업들은 신뢰성이 엄격하게 공인된 기업들이다.
- CA로는 다음 기업들이 있다. Symantec (VeriSign, Thawte, Geotrust) (42.9%), Comodo (26%), GoDaddy (14%), GlobalSign (7.7%) (괄호값은 점유율)



<hr>

> Reference
- [ SSL(Secure Socket Layer) 이란](https://12bme.tistory.com/80)
