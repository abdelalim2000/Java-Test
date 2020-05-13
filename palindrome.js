/* let palindrom = (str) => {
  //check for special charecters and remove it
  let reg = /[\W_]/g;

  //lower case all charecter to check and replacing special charecters with empty string
  let lowSTR = str.toLowerCase().replace(reg, "");

  /* rearrenging the string so we can check if the string is palindrom by using 
  split method to return array of string 
  reverse method to rearnge the array by getting the last array to be th first
  join method to join this array to a string again
  
  let reversSTR = lowSTR.split("").reverse().join("");

  return reversSTR === lowSTR;
};

palindrom("mom");
 */

function palindrom(str) {
  //check for special charecters and remove it
  var reg = /[\W_]/g;

  //lower case all charecter to check and replacing special charecters with empty string
  var lowSTR = str.toLowerCase().replace(reg, "");
  /* rearrenging the string so we can check if the string is palindrom by using 
    split method to return array of string 
    reverse method to rearnge the array by getting the last array to be th first
    join method to join this array to a string again
    */

  var reversSTR = lowSTR.split("").reverse().join("");
  return reversSTR === lowSTR;
}

palindrom("mom");
