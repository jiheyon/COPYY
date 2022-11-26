// 클로저는 콜백이랑 같이 사용하는 경우가 많음
/*
const increase = (() => {
    let num2 = 0; // 상태 변수
    return () => ++num2;
})();   

const decrease = (() => {
    let num2 = 0; // 상태 변수
    return () => --num2;
})();   


console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3
console.log(decrease()); // -1
console.log(decrease()); // -2
console.log(increase()); // 4
*/

const c = (function() {       // 에러남, 함수를 정의한거지 부른게 아님
    let num = 0;

    return {
        increase: () => ++num,
        decrease: () => --num
    };
})();

// const c = counting(); 

console.log(c.increase());
console.log(c.increase());
console.log(c.increase());
console.log(c.decrease());
console.log(c.decrease());
console.log(c.increase()); // 2



// 콜백이 포함된(이용한) 클로저 
console.log(`============콜백 클로저 실행=============`);

/*
const counter = function (callback) => {          // 함수를 받으면 그 함수(callback(num))를 불러서 
        return num = callback(num); // 지역변수 num을 넣어서 니가 만든 기능에 넣고 그값을 num에 반영할거임
};());
*/

const counter = (() => {        // 즉시호출

    let num = 0;                    // 여기서 선언 안하면 값이 0으로 계속 세팅됨, num이 유지가 안됨

    return (callback) => {          // 함수를 받으면 그 함수(callback(num))를 불러서 
        return num = callback(num); // 지역변수 num을 넣어서 니가 만든 기능에 넣고 그값을 num에 반영할거임
    };
})();
// 카운터는 콜백을 원함, 그래서 함수 넣어서 콜백으로 전달했음 선언한 함수
// 콜백을 부를 때 넘을 전달함(부른 함수의 변수자리에 num을 넣어주는거임(0)줬음
// 넘 설정을 안에서 하면 값이 0으로 계속 초기화되서 카운팅 불가
// counter 함수는 값을 함수로 줘야 함

console.log(counter(n => n += 2));  // 2개씩 증가가 될지?
console.log(counter(n => n ** 3));  // 세제곱 됐는지
console.log(counter(n => n / 2));  // 나눔 되었는지

console.log(counter(n => ++n));  // increase
console.log(counter(n => --n));  // decrease



////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
// 콜백을 이용한 클로저 -  쉬운 풀이 버전


function abc() {
    let num = 0;        // 본인 지역변수로 num  가지고 있음

    function def(callback) {
        num = callback(num) // 위에 선언한 num = 0을 가져오고 밖 함수에서 나온 결과를 위의 num에 갱신함
        return num;
    }
    return def;
};

const counter1 = abc;    // abc를 카운터로 부르겠다
const co = counter1(); //abc를 불렀음 // co = counter1 = abc ,  return def;니까 결국 co를 부르면 def가 리턴되는거임

function triple(m){  
    return m *= 3;
}
const n = co(triple); // 여긴 함수 필요/ 콜백 자리에 triple을 불렀음, triple 콜 할때 값 num을 줬음
// num = callback(num)  그 값을 넘에 다시 넣어줬음
// 

