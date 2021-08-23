console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World'; 
}
// Call the function to test
hello();
console.log('Function:', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

let people = [];

function helloName(){
  console.log( 'People in group:', people);
  let fName = prompt ('What is your first name?');
  let lName = prompt ('What is your last name?');
  let person = {
    firstName: fName,
    lastName: ' ' + lName,
  }
  people.push( person );

  if (person = fName + ' ' + lName){
    alert('Hello:' + person);
  }
  return;
}
console.log( people);

// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers() {
  firstNum = parseInt(prompt ('Enter first number'));
  secondNumber = parseInt(prompt ( 'Enter second number'));
  let sum = firstNum + secondNumber;
  return alert (sum);
}


// 4. Function to multiply three numbers & return the result
function multiplyThree(){
  num1 = parseInt(prompt ('Enter first number'));
  num2 = parseInt(prompt ( 'Enter second number'));
  num3 = parseInt(prompt ( 'Enter third number'));
  let multiplyresult = num1 * num2 * num3;
  return alert (multiplyresult);
}


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if ( number >= 0 ){
    return true;
  }
  else{
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let pets = [ 'cat', 'dog', 'bird', 'lizard' ];
console.log('List of pets;', pets);

let lastPet = pets[pets.length - 1];
function getLast( pets ) {
return lastPet; 
}
console.log('Last pet:', lastPet);

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

let colors = [ 'red', 'blue', 'black', 'green'];

function find( value, colors ){
  for( let i=0; i < colors.length; i++ ) {
    const element = colors[i];
    if(value==element){  
      return true
    }
  }
      return false
}
console.log('The color black is in colors', (find('black',colors)));
console.log('The animal lizard is in colors', (find('lizard',colors)));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
let fruit = ['a', 'apple'];

function isFirstLetter(letter, fruit) {
  for( let i=0; i < fruit.length; i++ ) {
    fruit.charAt(i);
    if(fruit.charAt[i]===[]){
      return true;
    }
  }
  return false;
}


 
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
// 9. Function to return the sum of all numbers in an array
let cars = [];
function sumAll(cars) {
  let max = Math.max(cars[0], cars[1]);
  let min = Math.min(cars[0], cars[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}
console.log('The sum is:', sumAll([1, 4]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let numArr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function getPositives(ar){
  const posArr = ar.filter(num => num > -1);
  return posArr;
}
console.log('Positive numbers are:', getPositives([-5,10]));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
