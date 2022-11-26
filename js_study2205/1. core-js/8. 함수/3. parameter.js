

// x ~ y 까지의 누적합을 구하는 함수 정의
// 매개변수(parameter) : 함수를 정의할 때 외부에서 받아올 값을 저장하는 변수
function calcRangeTotal(begin, end) {
    var total = 0;
    for (var n = begin; n <= end; n++) {
        total += n;
    }
    return total;
}

//인수(argument): 함수를 호출할 때 함수에게 전달하는 3, 7 같은 값들을 말함.

//var result1 = 55;
/*
var result1 = calcRangeTotal(1);   // 자바에서 (1) 한개만 주면 에러남
console.log(`result1: ${result1}`);     // 1:undifined
var result1 = calcRangeTotal(1, 2, 3);   // 자바에서 (1,2,3) 한개만 주면 에러남
console.log(`result1: ${result1}`);     // 더 주면 앞에 순서대로만 쓰고 버림
*/

var result2 = calcRangeTotal(3, 7);
console.log(`result2: ${result2}`);

console.log(`result3: ${calcRangeTotal(1, 100)}`);


//매개변수의 기본값

function sayHello(language='한국어') {      // > 미기입시 한국어로 기본 처리됨
    // console.log(`lang: ${language}`);

    // ES5
    //language = language || '한국어';

    if (language === '한국어') {
        console.log('안녕하세요!');
    } else if (language === '영어') {
        console.log('hello~~!');
    } else if (language === '일본어') {
        console.log('콘니치와~~');
    } else {
        console.log('알 수 없는 언어입니다.');
    }
}

sayHello(); // 아무것도 안넣었을때 (undofined) 기본값으로 한국어를 나오게 하고 싶음
// 옛날엔 language = language || '한국어'; 이렇게 처리했었음



//매개변수가 없는 함수
function selectRandomPet() {
    var pets = ['멍멍이', '야옹이', '짹짹이', '꽥꽥이', '어흥이'];
    
    // 0 ~ length-1까지의 랜덤 정수
    var rn = Math.floor(Math.random() * pets.length);
    return pets[rn];
}

console.log(`선택된 동물: ${selectRandomPet()}`);