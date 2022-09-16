// use < and '>' 
if(7 < 10){
     console.log('7 geter then 10')
}else if(11 < 5){
     console.log('11 is geter then 5')
}else{
     console.log('noathing')
}

//use >= , <= for condison

if(7 >= 8){
     console.log('7 is geter then or equal 8')
}else if(10 <= 12){
     console.log('12 is geter then or equal 10')
}
else{
     console.log('noathing')
}

//remember == convert strang to number we can use stractequal === its not convert any value its compare type
//use == and !== !=

if(10 == '10'){
     console.log('string 10 and number 10 is equal')
}else{
     console.log('they are not same')
}


//!== convert string to number but != not equal dont convert string

if(12 != '12'){
     console.log('12 and string 12 are not same')
}else if(13 !== '13'){
     console.log('13 and string 13 are same')
}else{
     console.log('they are note same')
}

// use === strictequal it's not convert data type we use this when we chack type

if(12 === '12'){
     console.log('number 12 and string 12 are note same')
}
else if(15 == '15'){
     console.log('number 15 and string 15 are same')
}

//use && and || to compare 
 //when we use && if one condison was wrong it not exicute this block of code 
if(20 > 50 && 60 > 30){
     console.log('20 is less then 50 and 60 is geter then 30')
}else if(5 > 2 && 6 < 10){
     console.log('5 is geter then 2 and 6 is less then 10')
}else{
     console.log('noathing')
}

// when we use || or,  if one condison was ture it exicute 

if(20 < 10 || 50 < 20){
     console.log('20 is less then 10 and 50 is geter then 20')
}else if(5 > 2 || 9 < 20){
     console.log('5 is less then 2 and 20 is geter then 9')
}else{
     console.log('they are not same')
}

//use condison then create gread system

const geradeNmuber = (num) =>{
     if(num >= 100 || num >= 80){
          return 'A+';
     }else if(num >= 79 || num >= 60){
          return 'B+'
     }else if(num >= 59 || num >= 50){
          return 'c+'
     }else{
          return 'f'
     }
}

// const number = geradeNmuber(40);
// console.log(number)