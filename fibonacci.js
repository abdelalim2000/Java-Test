/* let fibonacci = (result, len) => {
  //identfing the first two numbers to start the squance
  let n1 = result[0],
    n2 = result[1],
    //identifing the next number the next number and counter to start after the init the 2 numbers
    next,
    counter = 2;

  //checking if the first number is smaller than the second number
  if (n1 < n2) {
    //looping throw thw numbers
    while (counter < len) {
      //adding to the next variable the sum of the n1 and n2
      next = n1 + n2;
      //assigning the new numbers to the first numbers
      n1 = n2;
      n2 = next;
      //pushing the result into the array
      result.push(next);
      counter++;
    }
    return result;
  } else {
    return "please enter the first number smaller than the second number";
  }
}; */

function fibonacci(result, len) {
  //identfing the first two numbers to start the squance
  var n1 = result[0],
    n2 = result[1],
    //identifing the next number the next number and counter to start after the init the 2 numbers
    next,
    counter = 2;

  //checking if the first number is smaller than the second number
  if (n1 < n2) {
    //looping throw thw numbers
    while (counter < len) {
      //adding to the next variable the sum of the n1 and n2
      next = n1 + n2;

      //assigning the new numbers to the first numbers
      n1 = n2;
      n2 = next;

      //pushing the result into the array
      result.push(next);
      counter++;
    }

    return result;
  } else {
    return "please enter the first number smaller than the second number";
  }
}

fibonacci([0, 1], 10);
