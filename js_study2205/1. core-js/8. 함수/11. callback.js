
//어떤 숫자 n을 전달하면 1부터 n까지의 짝수들을 모두 출력하는 함수
function showEvenNumber(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
// 홀수도 출력해달라
function showOddNumber(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}
// 5의 배수만 출력해달라...+10의 배수가 아닌녀석도 뽑아달라...조건이 다양할 경우
// 미리 만들지 않고 필요할 때 마다 필요한 코드를 써주고 전달해주겠다(=이게 콜백임)
// 공통기능은 만들어두고 커스텀 기능은 특정 시점에서 콜백한다
function showFifthNumber(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}

function showEighthNumber(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 8 === 0) {
            console.log(i);
        }
    }
}


                 /////////     /////////    /////////     /////////
function foooo(code){
    code();         //   for(var i=1;i<5;i++){} 이걸 받은거임!!
                    // 내가 원할때 실행하는거임 = 실행시점을 내가 정함
}
function barrr(){
    for(var i=1;i<5;i++){}
}
foooo(barrr);       //   for(var i=1;i<5;i++){} 이걸 함수로 감쌌음
                /////////    /////////   /////////       /////////



// 그게 이거임!! 
// 함수한테 코드를 주고 싶은거임

// n = 전달할 숫자 (숫자를 줘라)
// x = 조건식 코드 콜백 함수 (함수를 줘라)
function showNumber(n, x) {
    for (var i = 1; i <= n; i++) {
        if (x(i)) { // 하고 싶은 코드를 감싸서 전달해라 
            console.log(i);
        }
    }
}


function foo(cb1, cb2) {
    var n = 1;
    while (true) {
        //실행코드
        cb2(n);
        //탈출조건
        if (cb1(n)) {
            break;
        }
        n++;
    }
}


// 짝수만 걸러서 출력
// showNumber : 값 2개를 줘야 함
showNumber(10, function(m) {     // function() {} = 익명함수
    return m % 2 === 0;         // 즉, return m % 2 === 0;  (i) 대입 
                                // return i % 2 === 0;   
});  

// 5의 배수면서 10의 배수가 아닌것
showNumber(200, function(n){
    return n % 5 === 0 && n % 10 != 0;
});
showNumber(10, (n) => n % 2 === 0); 
showNumber(200, n => n % 5 === 0 && n % 10 != 0);
// 화살표 함수! function 떼고 중괄호 떼고 리턴+한줄이면 버리고 인자 한개면 괄호도 뗴기



//5의배수들만 출력
showNumber(20, i => i % 5 === 0);

showNumber(30, i => i % 8 === 0);

console.log('=======================');
showNumber(10, i => i % 2 === 1);
console.log('=======================');
showNumber(100, i => i % 15 === 0);


console.log('=======================');

// function foo(cb1, cb2) {} 이거  콜백함수임
foo(n => n === 10, n => console.log("쿨쿨쿨하하하" + n ** 3));


console.log('=============================');

/*
    - 콜백함수는 함수 호출자가 기본 공통기능은 신경쓰지 않고
      변경되는 기능만 스스로 만들어서 함수에게 전달하는 기법.
*/
function sayHello(cb) {
    console.log('=====================');
    cb('안녕안녕~~');
    console.log('=====================');
}


sayHello(message => console.log(`콜백이 할말이 있단다 : ${message}`));

sayHello(message => {
    console.log(`${message} ${message} ${message}`);
    console.log('방가방가 잘가잘가');
    var a = 10, b = 20;
    console.log(a + b);
});