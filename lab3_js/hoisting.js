// 1.
const cube = function(x) {
  return x * x * x;
}

// 2.
const fullName = function(first, last) {
  return first + " " + last;
};

// 3.
const power = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

// 4.
const sumCubes = function(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}


// console.log(message);
// var message = 'Hi there!';

// It shows undefined instead of throwing an error because the variable was declared but the value wasn't assigned when the message was executed.

// console.log(message);
// let message = 'Hi there!';

// The declaration was hoisted but not initialized. So accessing it before the execution throws an error.

// console.log(showMessage());
// const showMessage = function(){
//   return 'Hi there!';
// };

// It throws an type error while executing this code because the function showMessage is declared using const and is only assigned later in the code.

// console.log(showMessage());
// function showMessage(){
//   return 'Hi there!';
// }

// Since the entire function is hoisted it does not give any error during the execution.


// 1.
let values = [10, 20, 30];
for(let i = 0; i < values.length; i++){
  console.log(values[i]);
}

//2.
let lastLogin = '1/1/1970';
console.log(welcome('Charlie', 'Munger'));
function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};
