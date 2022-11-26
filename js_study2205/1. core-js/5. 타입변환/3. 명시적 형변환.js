
//명시적 문자열 변환 (숫자 > 문자)
var a = 10, b = 20;
// var result = String(a) + String(b);
// var result = a.toString() + b.toString();
var result = '' + a + b;


console.log(result);

//명시적 숫자 변환 (문자>숫자)
console.log('=====================');

var m = '10', n = '20';
// var result2 = Number(m) + Number(n);
// var result2 = parseInt(m) + parseInt(n);
var result2 = +m + +n; // 근데 이건 예외처리가 안됨

console.log(result2);

//명시적 논리변환
console.log('=========================');

var ex1 = Boolean(null);  // false  // 문자열을 논리로 바꿔주는 연갛
console.log(ex1);

var ex2 = !!'메롱';     // true임 , !인 경우 논리로 바꾸길 원하는구나 생각 (true니까 false로 바꿈) 
console.log(ex2);

var ex3 = Boolean('메롱'); 
console.log(ex3);

