
// && : AND연산
var t = true, f = false;

console.log(t && t);
console.log(t && f);
console.log(f && t);
console.log(f && f);

// || :  OR 연산
console.log('=====================');

console.log(t || t);
console.log(t || f);
console.log(f || t);
console.log(f || f);

// NOT 연산 (!) : 논리 반전
console.log('==========================');

console.log(!t);
console.log(!f);

// var money = null;
var money = 0;
if (!money) {               // meney가 없을때 실행됨, 0일때 실행되는 문구임, 
    // if(0)=false인데 !false니까 true!
    console.log('나는 그지에요~');
} 