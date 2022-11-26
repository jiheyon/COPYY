
// OR 연산
console.log('hello' || 'world');    // 좌:true면 볼 필요 없음 (t || ? = t) //    hello
console.log(0 || '안녕');           // 좌 false면 우항에 의존함 ( f || ? = 변동) //   안녕
console.log(0 || ''); 
console.log(0 || null);             // 대문자 null은 변수로 취급됨
console.log(0 || undefined); 
console.log(0 || NaN); 

console.log(`=====================`); 

// AND 연산자
console.log('HELLO' && 'WORLD');    //좌:true면 우항을 봐야함    // WORLD
console.log(null && '메롱');        //좌:false면 볼 필요 없음    // null

console.log('====================');

var x = -10;

x > 0 && console.log('안녕하십니까아아아!');

// 왼쪽 트루> 오른쪽 선택
// 왼쪽 펄스 > 무시됨

/*
if (x > 0) {
    console.log('안녕하십니까!');
}
*/




