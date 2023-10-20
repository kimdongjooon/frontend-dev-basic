/**
 * 클로저(Closure): 클로저는 함수와 그 함수가 정의되었을때, 변수 스코프(Lexical Scope)와 조합.
 * 
 * 1. 자유변수에 닫혀(closed, 엮어) 있는 함수
 * 2. 클로저는 자신이 정의할때의 스코프를 기억하고 있다. 
 * 3. 클로저는 함수가 자신이 정의 되었을때의 스코프를 기억하여 자신이 정의된 스코프 밖에서도 호출되어도 그 스코프에 접근 가능함.즉, 사용가능.
 * 4. 왜쓰냐?
 *    - 전역 변수 회피.
 *    - 상태 유지* : useState
 *    - 정보 은닉 : useState
 */


/* Lexical Scope */ 
var f1 = function(){
    const s = "Hello World";

    const inner = function (){
        console.log(s);
    }

    inner();
}

f1();

/* Closure */
const f2 = function(){
    const s = "Hello World"; // 기억함.,

    const inner = function(){ // 기억함.
        console.log(s);
    }

    return inner;
}

const closure = f2();
closure();


function c(){
    var a = 10;
}

return function f3(){
    console.log(a);
}

var f = c();
f();