// for ~ of :배열 전용 반복문
// for ~ in :객체 전용 반복문

var phone = {
    company: '삼성',
    color: '펄 화이트',
    model: '갤럭시 S21',
    price: 1200000
};
// for ( var 변수 in 객체)

for (var data in phone) {       // >> 여기까진 키 값이 빠져나옴, 자바로치면 HashMap<키셋)
    // console.log(data);
    // console.log(phone.data); = console.log(phone.'comany'); 이거 한거임, 위에 키 값이 String으로 뽑혀서!
    console.log(phone[data]);
}


// 새로운 프로퍼티를 추가하고 싶다!
// 객체 프로퍼티 key 존재 유무 확인 후에 추가해야됨 ( = in)

var newKey = 'memory';

// 키 값 in 객체 = 존재 여부 확인해줌
if (!(newKey in phone)) {   // 메모리가 폰 안에 없으면 추가해라 = 있으면 추가 안함
    phone[newKey] = '16GB';
}

console.log(phone);



