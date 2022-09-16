//for loop
for(let i = 0; i<10; i++){
     // console.log(i)
}

//while loop
let i = 0;

// while(i<5){   
//      console.log(i)
//      // i++;
// }

//for of loop
const numbers = [20, 10, 50, 60]

for(const number of numbers){
     // console.log(number)
}

//forEach

const values = [550, 23, 10, 75, 100];

values.forEach(value =>{
     // console.log(value)
})

//for in loop its work for objects
const obj = {
     name: 'rafi',
     age: 12,
     class: 10,
     job: 'student',    
}

for(const value in obj){
     console.log(obj[value])

}