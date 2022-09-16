//var is reassignable and reDecleareble
//its create global objects
// var name = 'rafi';
var age = 7;
var isStudent = true;
var subjects = ['bangla', 'english', 'math'];
var address = {
     home: 'Noakhali',
     road: 12/23,
     block:23/78,
}
function hisNumber(bangla, english , math){
     const totalNumber = bangla + english + math;
     return totalNumber;
}

var toalNumber = hisNumber(20, 40, 100);
// console.log(toalNumber)


//use let is not redecliarable but its reassignable its create block scope
let name = 'rafi';
name = 'shofike';
console.log(name)

//use const its not redeclarable and not reassignable , and its create block scope
const father = 'abul'

//its rhow arror cuz its not reassignable
 father = 'chabul'
//  console.log(father)



