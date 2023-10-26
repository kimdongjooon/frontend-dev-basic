/**
 * Arrow Function
 * 
 */

const power = function(x){
    return x*x;
}

const power2 = (x) => x*x;

const numbers = [1,2,3,4,5];

numbers.forEach(function(n){
    process.stdout.write(`${n}: ${power(n)}\t`); // 줄바꿈 없애기.
    
});

//ex01 
console.log("\nex01------------------------------------");
numbers.forEach(function(n){
    // 1. 
    // const result = (function(x){
    //     return x*x;
    // })(n);

    // 2.
    // const result = ( (x) => { return x*x; })(n);
   
    // 3.
    const result = ((x) => x * x )(n);

    process.stdout.write(`${n}: ${result}\t`); // 줄바꿈 없애기.
    
});

console.log("\nex02------------------------------------");
//ex02
numbers.forEach(function(n){
    process.stdout.write(`${n}: ${((x) => x * x )(n)}\t`); // 줄바꿈 없애기.
    
});

console.log("\nex03-----------------------------------");
//ex03
numbers.forEach((n) => { process.stdout.write(`${n}: ${((x) => x * x )(n)}\t`)});


console.log("\nex04-----------------------------------");
//ex04 여러행 함수 
[4, 12, 123, 4515, 92].forEach((n) => { 
    if(n % 5 == 0){
        process.stdout.write(`${n}: ${((x) => x * x )(n)}\t`)
    }
    
});

console.log("\nex04-----------------------------------");
//ex05 여러행 함수 