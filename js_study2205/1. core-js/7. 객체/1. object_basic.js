
//객체 생성 > JSON과 형태가 같음
var dog = {
    name: '뽀삐',       // 스크립트에서는 키:벨류값 한 쌍을 프로퍼티라고 함
    kind: '진돗개',     // 변수 룰을 지켜야하나 ""을 이용하면  상관없음 "3kind f" rksmd
    age: 3,
    injection: true,
    favorite: ['산책', '간식']
};

var cat = {
    kind: '블랙러시안',
    name: '콩순이',
    injection: true,
    age: 2,
    favorite: ['낮잠', '캣타워']
};

console.log(typeof cat);

//객체에 저장된 데이터 참조
console.log(dog.name);   //변수명.프로퍼티
console.log(cat.age);
console.log(cat.favorite);
console.log(dog.favorite[1]);

dog.favorite.push('뛰어놀기');
console.log(dog);

// 프로퍼티 참조 2
console.log('=========================');
console.log(dog.injection);
//대괄호 참조시에는 문자열형태로 key를 사용
console.log(dog['injection']);    // == console.log(dog.injection);랑 같은 값임
console.log(cat['age']);

//프로퍼티 값 수정
dog.age = 4;

cat.favorite[1] = '실뭉치';
console.log(cat);

//프로퍼티 동적 추가 (존재하지 않는 key로 새로운 값 할당)
cat.owner = '김철수';       // 있는 프로퍼티에 값 넣으면 수정되는거임
console.log(cat);

//프로퍼티 삭제
delete cat.owner;
console.log(cat);



