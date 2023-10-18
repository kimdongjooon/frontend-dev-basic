/**
 * 배열(Array)
 * 
 */
console.log("=== 배열생성1: 내장객체(생성자 함수를 사용하는 방법) =====");
var a1 = new Array();
console.log(typeof(a1), a1 instanceof Array, a1.length);

// 생성자 함수 파라미터가 하나인 경우는 배열의 크기를 의미.
var a2 = new Array(10);
console.log(typeof(a2), a2 instanceof Array, a2.length);

// 배열의 크기를 지정하는 것은 아무런 의미가 없다. 동적으로 배열은 늘어 난다.
a2[0] = 0;
a2[5] = 5;
a2[10] = 10;
console.log(typeof(a2), a2 instanceof Array, a2.length, a2);

// 생성자 함수 파라미터가 2개 이상인 경우: 초기값을 지정
var a3 = new Array(0,2,4,6,8);
console.log(typeof(a3), a3 instanceof Array, a3.length, a3);


console.log("=== 배열생성2: 리터럴을 사용하는 방법 =====");