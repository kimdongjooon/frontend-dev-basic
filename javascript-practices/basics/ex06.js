/**
 * 자바스크립트 객체1: object
 * 
 *  1. 자바스크립트 객체는 function 타입과 object타입 2가지가 있음.
 *  2. 보통, function 타입의 객체는 '함수'라고 부른다.
 *  3. 따라서 자바스크립트에서 객체라고 부르는 것은 object타입의 객체를 가리킨다.
 * 
 */






// 생성 방법 1
// 1. Number, Object, String, .. 내장 객체(내장 생성자 함수)를 사용하는 방법.
// 2. 사용자 정의 생성자 함수를 사용하는 방법.
var o1 = new Object();
o1.name = '둘리';
o1.age = 10;
o1.another = new Object();
o1.another.name ='마이콜';
o1.another.age = 30;

console.log(o1);

// 생성 방법 2
// {} literal를 사용하는 방법
var o2 = {};
o2.name = '둘리';
o2.age = 10;
o2.another = new Object();
o2.another.name ='마이콜';
o2.another.age = 30;

console.log(o2);


// 생성 방법 3
// JSON(Java Script Object Notaion)
var o3 ={
    name : '둘리',
    age : 10,
    another : {
        name:'마이콜', 
        age:30
    }
};

console.log(o3);





// XmlHttpRequest, fetch
// const response = fetch("mysite07/api/user/1",{});
response = '{ "no":1, "age":10, "name":"둘리", "email": "dooly@gmail.com" }';
var user = JSON.parse(response);
console.log(user);