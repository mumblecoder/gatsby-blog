DataSource, DB Connection Pool의 차이, 정의

Statement, PreparedStatement
1. 쿼리 문장 분석
2. 컴파일 
3. 실행
> PreparedStatement는 1번 과정을 처음 한번만 하고 그 후엔 캐시에 담아서 쿼리를 재사용하기 때문에
DB에 훨씬 적은 부하를 주며, 성능도 좋다. 또한 쿼리에서 변수를 ?로 처리하기 때문에 가독성도 좋다.

ResultSet
- 현재 열의 데이터를 가리키는 커서를 관리한다.
- 즉, 데이터는 갖고 있지 않고, 커서만을 관리하는 객체이다.

executeQuery()
- select관련 쿼리를 수행한다. 결과는 ResultSet 객체의 형태로 리턴

executeUpdate()
- select를 제외한 DML 및 DDL 쿼리를 수행한다, 결과는 int 형태로 리턴

execute()
- 쿼리의 종류와 상관없이 쿼리를 수행한다. 결과는 boolean형으로 리턴하는데 데이터가 있을경우 

ResultSet 객체가 닫히는 경우
1. close() 메서드를 호출하는 경우
2. GC의 대상이 되어 GC되는 경우
3. 관련된 statement 객체의 close() 메서드가 호출되는 경우
> 그런데 왜 굳이 resultSet객체를 close() 해야하는가?
- 자동으로 호출되기전에 관련된 DB와 JDBC 리소스를 해제하기 위함. 빨리 닫으면 그만큼 DB의 부담이 적어진다

close() 메서드는 finally 구문안에 넣어주는 것이 가장 정상적인 방법

ServiceLocator 패턴?

JDK 7에 등장한 AutoCloseable 인터페이스
- try block이 시작될때 소괄호 안에 close() 메서드를 호출하는 객체를 생성해주면 처리 가능하다.
```java
	try(BufferedReader br = new BufferedReader(reader)) {
		return br.readLine();
	}
```
- 별도로 finally 블록에서 close() 메서드를 호출하지 않아도 된다.
- close() 메서드를 호출해야하는 대상이 AutoCloseable 인터페이스를 구현한 것인지 확인할 것.

ResultSet.last() 메서드는 사용하지 말아라
- 수행시간은 데이터의 건수와 DB와의 통신속도에 따라서 달라진다.
- 건수가 많으면 많을수록 대기 시간이 증가한다. rs.next()를 수행할 때와는 엄청나게 속도차이가 나기 떄문에 사용을 자제해야한다.
- 데이터의 수가 궁금한거라면 쿼리를 한번 더 날리는게 훨씬 낫다.


setAutocommit() 메서드는 필요할때만 사용하자.
- 여러개의 쿼리를 동시에 작업할 때 성능에 영향을 주게 된다.

배치성 작업은 executeBatch() 메서드를 사용하자
- addBatch() 메서드를 사용하여 쿼리를 지정하고, executeBatch() 메서드를 사용하여 쿼리를 수행하자
- 여러개의 쿼리를 한번에 수행할 수 있기 때문에 JDBC 호출 횟수가 감소되어 성능이 좋아진다

setFetchSize() 메서드를 사용하여 데이터를 더 빠르게 가져오자
- 가져오는 데이터의 수가 정해져있을때는 setFetchSize() 를 사용하여 원하는 개수를 정의하자.

한 건만 필요할때는 한 건만 가져오자
