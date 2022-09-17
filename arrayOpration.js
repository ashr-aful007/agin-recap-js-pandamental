const array = [50, 80, 60, 13, 20, 90];

//check array length
const length = array.length;
console.log(length)

const name = ['rofik', 'shopike' , 'jobbor' , 'ali'];

//check array indexOf
// name[3];
const index = name.indexOf('shopike')
// console.log(index)


//check includes 

const phone = ['samsung', 'oppo' , 'redmi' , 'iphone'];

const includes = phone.includes('oppo');
// console.log(includes)

//check array use Array.isArray
const isArray1 = Array.isArray(phone)
// console.log(isArray1)


//use slice of array
const slice2 = phone.slice(0, 2);
// console.log(slice2)

//use splice splice have two paramitar, 1  you set one Number index to 3 number index cut doune and add 
//'mangophone'

phone.splice(1, 3, 'mangophone');
// console.log(phone)

//[ 'samsung', 'mangophone' ]

//use array.push
phone.push('hello')
// console.log(phone)

//use array.pop pop clear last item

const laptop = ['lenevo', 'dell', 'mac']

laptop.pop()
console.log(laptop)


//use shift, shift clear farst item
const friends = ['foo', 'bar', 'abul', 'rafi'];
friends.shift();

// console.log(friends)

//use unshift its added value in array on the first position
const collection = ['pan', 'book', 'table', 'chear'];
collection.unshift('pan')

// console.log(collection)


//use join, join( )emty add all value inarray , and it's given string value like (robinewathormacnewathortems)
const othorName = ['robi', 'mac', 'tems'];
const text = othorName.join("newathor")

// console.log(text)

//use reduce, reduce role play for array all elemtn sum value , 
//use arrow function previous paramitr agrument recive previous value
//then current paramitar argument recive current value they have not sum yet
//then its claculate prvious and current number 
//and we provide init value 0 ,
const numbersTotal = [12, 100, 150, 120, 30].reduce((previous, current) => previous + current, 0);
console.log(numbersTotal)

