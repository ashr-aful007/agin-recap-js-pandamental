//The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called a recursive function.

// let myFunc = function(){
//      myFunc();
// }

//1 + 2 + 3 +................... +n

let total = 0;
let N = 10;

for(let i = 1; i <= N; i++){
     total += i;
}

// console.log(total)

//f(n-1) + n = f(n)

function sum(n){
     if(n === 0){
          return 0;
     }else{
          return sum(n-1) + n;
     }    
}
console.log(sum(10));

sum(3)
 sum(2) + 3
 sum(1) + 2 + 3
 sum(0) + 1 + 2 + 3
  0 + 1 + 2 + 3

//recursion is not swetable for large number cuz we have mamory limitation for call stack

//we use this type method
// 1 + 2 + 3 +.......... + n
// (n(n+1))/2

let n = 1000000;

console.log(n * (n + 1) / 2);

