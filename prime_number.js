/* let primeNumber = (num) => {
  //for bigger numbers so we dont loop throw the whole thing
  let root = Math.ceil(Math.sqrt(num));

  //check for the number is prime or not 
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
  // looping throw numbers from 2 the prime number to the entered number root and returning if it is true or false
    for (let i = 2; i <= root; i++) {
      if (num % i === 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}; */

function primeNumber(num) {
  //for bigger numbers so we dont loop throw the whole thing
  var root = Math.ceil(Math.sqrt(num));

  //check for the number is prime or not
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    // looping throw numbers from 2 the prime number to the entered number root and returning if it is true or false
    for (var i = 2; i <= root; i++) {
      if (num % i === 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}

primeNumber(27);
