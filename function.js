//function simple function no paramitar and argument
function Explore(){
     console.log('hello im AI')
}

Explore();

//when function value we use we will alwys return value
function sum(prameter1 , prameter2){
     const sumVlue = prameter1 + prameter2;
     return sumVlue
}

const value = sum(12, 13);
// console.log(value)

//arrow function simple arrow function
const Myfunction = () => console.log('hello IM machine learning algorithms');

// Myfunction()

//arrow function with parameter when one prameter we will not write bracket () it will work
const myArrow = (text) => console.log(text);

// myArrow('hello im deeplearning');

//arrow function with multi fall paramiter

const myMultiFallArow = (pram1 , pram2) =>{
     const value = pram1 + pram2;
     return value
}

const sumValue = myMultiFallArow(10 , 20);
// console.log(sumValue)

