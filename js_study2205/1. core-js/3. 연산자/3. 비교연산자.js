
var a = 5;      // 숫자
var b = '5';    // 문자
// 둘이 같냐> 엄밀히 말하면 다름! 근데 == 쓰면 같다고 뜨고 === 쓰면 다르다고 뜸

// ==, != 연산자는 암묵적으로 문자열 내부에 
// 순수한 숫자가 있으면 자동으로 따옴표를 제거 후
// 비교합니다.
console.log(a === b);   // 스크립트에서 3개로 쓴다고 생각하기 무조건!
console.log(a !== b);

console.log('=======================');

// == 비교는 결과 예측이 어려우므로 사용하지 않는 걸 추천
console.log('0' == '');
console.log(0 == '');
console.log('0' == 0);
console.log(false == 'false');
console.log(false == '0');

console.log('=======================');

//숫자 대소 비교
var x = 10;
console.log(x > 5);
console.log(x <= 10);

//문자 대소 비교
console.log('==========================');

console.log('a' === 'A');
console.log('a' < 'A');

console.log('ace' < 'ade');     // 비교는 첫글자부터 1:1로 비교됨
console.log('pineapple' < 'zebra');
console.log('new york' < 'Zebra');

//영어 소문자랑 대문자랑 비교하면 무조건 소문자가 큽니다.
//같은 형태면 사전에서 뒤에나오는 단어일수록 크다.