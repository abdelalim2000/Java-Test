/* let num = parseInt(prompt("Enter number"));
let power = parseInt(prompt("enter the power"));

console.log(
  `the value of ${num} to the power of ${power} is: ${Math.pow(num, power)}`
);
 */

/* let numPrompt = prompt("Enter The number");
let powerPrompt = prompt("Enter The power");

let pow = (value, power) => {
  //vault for our result
  let vault = 1;
  //looping throw the power and each time getinh tha vault and changeing it`s value by the  * value
  for (let i = 0; i < power; i++) {
    vault *= value;
  }
  console.log(vault);
};

pow(numPrompt, powerPrompt); */

var numPrompt = prompt("Enter The number");
var powerPrompt = prompt("Enter The power");

function pow(value, power) {
  //vault for our result
  var vault = 1;

  //looping throw the power and each time getinh tha vault and changeing it`s value by the  * value
  /* for (var i = 1; i <= power; i++) {
    vault *= value;
  } */
  //you can choose the way u want
  for (var i = 0; i < power; i++) {
    vault *= value;
  }

  console.log(vault);
}

pow(numPrompt, powerPrompt);
