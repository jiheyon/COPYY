
var pets = ['멍멍이', '야옹이', '짹짹이'];

console.log(pets);

// push() : 배열의 맨 끝에 데이터를 추가
pets.push('어흥이');            // .add
pets.push('징징이');            // .add

console.log(pets);          
console.log(pets.length);

// pop() : 배열의 맨 끝 요소를 제거
pets.pop();                     // 

console.log(pets);

// shift() : 배열의 맨 첫번째 요소를 제거
pets.shift();
console.log(pets);

// unshift() : 배열의 맨 앞에 요소를 추가
pets.unshift('깔깔이');
console.log(pets);

// 맨 앞, 맨 뒤 추가 :  unshift / push
// 맨 앞, 맨 뒤 제거 : shift / pop