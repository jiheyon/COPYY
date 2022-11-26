

var decimal = 100; //정수인데 실제로는 구분없이 모두 실수로 저장됨  100.0

//typeof 연산자: 저장된 값의 타입을 알려줌
console.log(typeof decimal);

var float = 3.14; //실수
console.log(typeof float);

//js는 모든 숫자데이터를 실수로 처리
console.log(10 / 4);   // 자바는 값 2로 나옴 근데 스크립트는 2.5로 나옴 > 10.0/4.0 으로 실행된거임

var binary = 0b1001;
console.log(binary);

// NaN : 수치연산 불가값
console.log(10 / '안녕');  // NAN  , 자바는 연산에러오 나옴

