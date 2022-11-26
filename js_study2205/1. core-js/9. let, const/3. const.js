
// 상수: 불변의 고정값, 내,외부에서 변경 불가능함
const SALE_RATE = 0.2; //할인율 20%
// let SALE_RATE = 0.2;  // 교체가능함 

const PI = 3.14159265; //원주율

// sale_rate = 0.3;

console.log(`sale_rate : ${SALE_RATE}`);

// const 와 객체 (배열, 객체, 함수), 객체는 왠만하면 const 선언한다
const person = {
    name: '김철수',
    age: 30
};

// person = {
//     name : '박영희',
//     age : 20
// };

person.name = '고길동';
console.log(person);

// 일단 변수 선언시 const라고 생각하고 쓰다가 변수값이 변경되야한다면 let으로 선언하기!
for (let i = 0; i < 5; i++) {
    
}