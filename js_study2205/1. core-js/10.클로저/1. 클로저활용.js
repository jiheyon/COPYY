/*

-- num이 전역변수라서 increase함수 이외에도 
   num의 상태값을 변경시킬 가능성이 존재한다.
(increase)에 의해서만 카운팅 되어야 한다.

   // 숫자를 카운팅해야 하는 상황일 때

let num = 0; //카운트 상태 변수-전역변수
// 지역변수로 선언할 경우 중간에 num = 99;처럼 중간에 코드개입으로 값이 바뀔 수 있음

// 카운트 상태 변경 함수
const increase = function() {
    return ++num;
};

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
*/

// ==========================================================
/*

--num이 지역변수라서 함수 호출시 재초기화 되는 문제가 발생함
const increase function() {
    let num = 0; // 상태변수를 지역변수로 선언
    return ++num;
};

console.log(increse());
*/

// ==========================================================

/*
const increaseClosure = function() {

    let num = 0; // 상태 변수

    return function() {
        return ++num;
    };
};

const increase = increaseClosure();

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());

*/

const increase = (function() {

    let num = 0;        // 상태 변수
    return function() {     //   return ++num;을 바로 사용하지 않고 플넘을 호출하는 함수를 호출함
        return ++num;
    };
}());       // 이것도 가능하고 (실행 후 닫기)
//})();     // 이것도 가능한데 (닫고 실행)

console.log(increase());
console.log(increase());
console.log(increase());
// == 클로저 : 함수가 함수를 리턴해서 지역변수를 상태값 유지로 사용하는게 만들어 주는 작업!

console.log(`==============================================`);

const increase2 = (() => {

    let num2 = 0; // 상태 변수
    return () => ++num2;
// }());  화살표함수는 이렇게 호출하면 오류남
   })();   // 무조건 이거로 호출하기! ( 닫고-실행)


console.log(increase2());
console.log(increase2());
console.log(increase2());
