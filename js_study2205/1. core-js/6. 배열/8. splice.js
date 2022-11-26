
// splice() : 배열의 특정 요소 제거
var pets = ['멍멍이', '야옹이', '짹짹이', '고라니'];

console.log(pets);

pets.splice(1, 2);      // pets에서 1번부터 2개를 지워라!
console.log(pets);      //  1번 인덱스에서 2개를 지워라

pets.splice(0, 1, '어흥이'); // 지운 자리에 새로운 값을 넣어주겠다. 넣는값 1개이상도 가능
console.log(pets);

// 1번 위치에 꽥꽥이 삽입
pets.splice(1, 0, '꽥꽥이');    // 안지우고 중간삽입하는것
console.log(pets);

// 1번부터 끝까지 삭제
pets.splice(1);
console.log(pets);

pets.push('야옹이', '징징이', '깔깔이');
console.log(pets);


var deleteTarget = '징징이';

//삭제
if (pets.includes(deleteTarget)) {
    pets.splice(pets.indexOf(deleteTarget), 1);
} else {
    console.log(`${deleteTarget}은 존재하지 않는 데이터입니다.`);
}

console.log(pets);