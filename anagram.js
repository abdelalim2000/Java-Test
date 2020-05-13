/* let anagram = (str1, str2) => {
  //specifing regular expresion for the special charecters so we can remove them later
  let reg = /[\W_]/g;

  //lowering the string case and replacing the special chareters with empty string
  let lowSTR1 = str1.toLowerCase().replace(reg, ""),
    lowSTR2 = str2.toLowerCase().replace(reg, "");

  /*
        assign 2 variables string and applying 
        split method to return array of string
        sort method to sort the array
        join method to convert the array into string again
    
  let a = str1.split("").sort().join(""),
    e = str2.split("").sort().join("");

  //literal condition to check if the two strings are anagram or not and console back the result
  a === e
    ? console.log(`${a} and ${e} are anagram`)
    : console.log(`${a} and ${e} are not anagram`);
};

anagram("hello !", "elloh ?"); */

function anagram(str1, str2) {
  //specifing regular expresion for the special charecters so we can remove them later
  var reg = /[\W_]/g;

  //lowering the string case and replacing the special chareters with empty string
  var lowSTR1 = str1.toLowerCase().replace(reg, ""),
    lowSTR2 = str2.toLowerCase().replace(reg, "");

  /*
        assign 2 variables string and applying 
        split method to return array of string
        sort method to sort the array
        join method to convert the array into string again
    */
  var a = str1.split("").sort().join(""),
    e = str2.split("").sort().join("");

  //literal condition to check if the two strings are anagram or not and console back the result
  a === e
    ? console.log("".concat(a, " and ").concat(e, " are anagram"))
    : console.log("".concat(a, " and ").concat(e, " are not anagram"));
}
