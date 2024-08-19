// LOGGING OUT SOMETHING TO THE CONSOLE
console.log('Started learning javaScript again ');

//CREATED A VARIABLE
let myAge = 20;
// CREATED A ANOTHER VARIABLE
let earlyYears = 2; 
earlyYears = earlyYears *= 10.5;
// CRAETED A VARIABLE TO STORE THE RESULT OF myAge variable minius 2
let laterYears = myAge -= 2
laterYears *= 4;
//ADDING TWO VARIABLE TOGETHER AND STORING THEM IN A VARIABLE
let myAgeInDogYears = earlyYears + laterYears;
//
let myName = 'XERXERS'.toLowerCase();
//
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);



// NEW PROGRAM

let userName = '';
userName ? `Hello ${userName}` : `Hello`;

let userQuestion = 'What is trading';
console.log(`${userName} What is trading.`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber){
  case 0:
  console.log('Trading is a game of probability');
  break;
  case 1:
  console.log('Trading can be gambling somethings');
  break;
  case 2:
  console.log('Trading is the hardest way to make easy money');
  break;
  case 3:
  console.log('Trading is a skillset');
  break;
  case 4:
  console.log('Trading is what i call my way out');
  break;
  case 5:
  console.log('Trading can be the buying and selling of currency pairs');
  break;
  case 6:
  console.log('Trading is an handfull');
  break;
  default:
  console.log('Trading is for the 1%');
  break;
}
console.log(eightBall);
