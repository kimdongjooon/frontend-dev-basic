/**
 * 변수와 자료형.
 * 
 * 기본타입
 * - undefined
 * - number
 * - string
 * - boolean
 *  
 * 객체
 * - object
 *  1. new 생성자함수() 사용해서 생성
 *  2. 리터럴
 *      {}, [], //
 *  3. null
 * 
 * - function
 *  1. new Function() 사용해서 생성
 *  2. 리터럴
 *      var f = function(){...}
 *  3. function () {...}
 * 
 */

/**
 *  자바스크립트 객체를 분류하는 또 다른 방법.
 *  
 *  1. 내장 객체
 *      javascript engine 내부에 미리 내장(정의)되어 있는 객체.
 *      - 생성자 함수 : Number, Boolean, String, Date, ...
 *      - 일반 함수 : parseInt, setTimeout, setInterval
 * 
 *  2. 호스트 객체
 *      javascript 엔진이 embed되어 있는 호스트 환경에 있는 객체
 *      Brower 호스트: screen, location, navigator, document(DOM), XmlHttpRequest
 *      Node 호스트: http, os, fs, path, process, server, ...
 * 
 *  3. 사용자 객체
 *      javascript 엔진이 실행되면서 생성하는 객체
 * 
 */

console.log("===== 기본타입(undefined, number, string, boolean) ======");
// myVariable // reference error

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

console.log("===== 객체타입(object) ======");

var F = function(a){
    this.a = a;
    console.log("일반함수");
}
F.prototype.n = 11;
F();

var o = new F(10);
console.log(typeof(o));
console.log(typeof(o.a));
console.log(typeof(o.n));
console.log(o.a);
console.log(o.n);

var i2 = new Number(10);
var s2 = new String("hello~");
var b2 = new Boolean(true);

var o2 = new Object();
var a = new Array();
var re = new RegExp();
var d = new Date();

var o3 = {};
var a2 = [];
var re2 = /^js$/gi;
var n = null;



console.log("변수 i2값: " + i2 + ", 타입: " + typeof(i2) + ", i2 instanceof(Number): "+(i2 instanceof(Number)));
console.log("변수 s2값: " + s2 + ", 타입: " + typeof(s2) + ", s2 instanceof(String): "+(s2 instanceof(String)));
console.log("변수 b2값: " + b2 + ", 타입: " + typeof(b2) + ", b2 instanceof(Boolean): "+(b2 instanceof(Boolean)));
console.log("변수 o2값: " + o2 + ", 타입: " + typeof(o2) + ", o2 instanceof(Object): "+(o2 instanceof(Object)));
console.log("변수 a값: " + a + ", 타입: " + typeof(a) + ", a instanceof(Array): "+(a instanceof(Array)));
console.log("변수 d값: " + d + ", 타입: " + typeof(d) + ", d instanceof(Date): "+(d instanceof(Date)));
console.log("변수 o3값: " + o3 + ", 타입: " + typeof(o3) + ", o3 instanceof(Object): "+(o3 instanceof(Object)));
console.log("변수 a2값: " + a2 + ", 타입: " + typeof(a2) + ", a2 instanceof(Array): "+(a2 instanceof(Array)));
console.log("변수 re2값: " + re2 + ", 타입: " + typeof(re2) + ", re2 instanceof(RegExp): "+(re2 instanceof(RegExp)));
console.log("변수 n값: " + n + ", 타입: " + typeof(n));



console.log("===== 펑션타입(function) ======");
function f1(a,b){
    return a+b;
}

var f2 = function(a,b){
    return a+b;
}

var f3 = new Function('a','b','return a+b;');

console.log("f1(10,20) 함수값: " + f1(10,20) + ", 함수 타입: " + typeof(f1) + ", f1 instanceof(Function): "+(f1 instanceof(Function)));
console.log("f2(10,20) 함수값: " + f2(10,20) + ", 함수 타입: " + typeof(f2) + ", f2 instanceof(Function): "+(f2 instanceof(Function)));
console.log("f3(10,20) 함수값: " + f3(10,20) + ", 함수 타입: " + typeof(f3) + ", f3 instanceof(Function): "+(f3 instanceof(Function)));


// 유사 객체 
console.log("===== 원시 타입도 메소드를 호출 할 수 있다.(유사객체) ======");
console.log(b2.valueOf());
console.log(b.valueOf()); // var b; 는 console.log(new Boolean(b).valueof()) 로 바뀜.