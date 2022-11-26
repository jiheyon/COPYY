
// 1. 변수의 중복선언 허용
// 추후 변수 선언시 중복인줄 모르고 선언할 수 있음 -> 이전 변수에서 큰 변화가 생김
var x = 10;
var x = 100;
console.log(x);

// 2. 블록레벨 스코프 지원 X
var i = '안녕'; //전역 스코프

for (var i = 1; i <= 3; i++) {
    console.log(i);
}

console.log(`i : ${i}`);

// 3. 변수 호이스팅
z = 100;            // z 만들지않고 초기화부터 함 > 참조함 > 이후 변수 생성
console.log(z);


var z;