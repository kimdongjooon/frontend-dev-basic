/**
 * 변수와 자료형.
 * 
 * 기본타입
 * - undefined
 * - number
 * - string
 * - boolean
 *  
 * - object
 * - function
 * 
 */

console.log("===== 기본타입() ======")


var u;
var ud = undefined; // var u; 와동일, 자바스크립트는 정의와 선언을 구분하지 않는다.
var i = 10;
v = 10; // var를 안해줘도 설정값의 타입에 따라서 변수 타입이 자동으로 설정됩니다.
var s = "hello";
var b = true;

console.log("변수 u값: " + u + ", 타입 : " + typeof(u));
console.log("변수 ud값: " + ud + ", 타입 : " + typeof(ud));
console.log("변수 i값: " + i + ", 타입 : " + typeof(i));
console.log("변수 v값: " + v + ", 타입 : " + typeof(v));
console.log("변수 s값: " + s + ", 타입 : " + typeof(s));
console.log("변수 b값: " + b + ", 타입 : " + typeof(b));

