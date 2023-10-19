/**
 * 자바스크립트 함수: function 타입의 객체.
 * 
 */

console.log("=== 함수를 생성하는 방법1: 함수 리터럴 =====");
function f1(a,b){
    return a + b;
}
console.log(typeof(f1),f1 instanceof Function, f1(10,200));


console.log("=== 함수를 생성하는 방법2: 함수 리터럴 =====");
var f2 = function(a,b){
    return a + b;
}
console.log(typeof(f2),f2 instanceof Function, f2(10,200));


console.log("=== 함수를 생성하는 방법3: 화살표 함수. =====");
var f4 = (a,b) => a+b;
console.log(typeof(f4),f4 instanceof Function, f4(10,200));


console.log("=== 함수를 생성하는 방법4: new와 함께 Function 생성자 함수를 사용하는 방법. =====");
var f3 = new Function('a','b','return a+b;')
console.log(typeof(f3),f3 instanceof Function, f3(10,200));


console.log("=== 함수를 생성하는 방법5: 익명 함수=====");
setTimeout(function(){
    console.log('time out!');
},10);


console.log("=== 익명 함수의 또 다른 예: 함수 정의 후, 즉시 실행을 한번 만 하는 함수======");

var r = (function(a,b){
    var m = 10;
    return a / m + b / m;
})(10,20);

console.log(r);

console.log("=== 가변 파라미터 함수 ======");
// 가변 파라미터 함수 사용법 1: arguments.
var sum = function(){
    var sum = 0;


    // console.log(arguments instanceof Object, arguments.length,arguments);
    // for (var i = 0; i < arguments.length ; i++){
    //     sum += arguments[i];
    // }

    // 유사배열 에러남 배열이 아니란 의미. Array 타입x
    // arguments의 __proto__는 Object.prototype에 chain이 되어 있기 때문에 forEach를 호출할 수 없다.(arguments는 Object타입임.)
    // arguments.forEach(function(e){
    //     sum += e;   
    // });

    // 억지로라도 forEach 써보기. 파라미터가 2개이상.
    Array.prototype.forEach.call(arguments, function(e){
        sum+=e;
    });
    // Array.prototype.forEach.apply(arguments); // foreach 파라미터가 1개만있을때.

    return sum;
};

console.log(sum(10));
console.log(sum(10,20));
console.log(sum(10,20,30));
console.log(sum(10,30,50,123,50,20));






