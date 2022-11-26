

//논리 타입
var logic = 10 < 5;
console.log(typeof logic);
console.log(logic);

// var x = 'true'; (X)
// var x = True;
var x = true;
var y = false;

//undefined타입: 변수를 초기화하지 않음
var hello;              // 자바는 int(a); , sysout(a) 에러나는데 스크립트는 에러는 안남, 대신 undefined
console.log(hello);

//null타입: 개발자가 의도적으로 값이 없다는 것을 표현할 때
var apple = '사과';
apple = null;