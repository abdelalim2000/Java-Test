/* let reverse = (str) => {
  //case to end the recursion

  /*
    returning the string
    by using th substr method that return string from index 1
    and ading the first charecter by using charAt(0)

  //case to end the recursion
  return str === "" ? "" : reverse(str.substr(1)) + str.charAt(0);
};
 
reverse("hello");
*/
function reverse(str) {
  //case to end the recursion

  /*
    returning the string
    by using th substr method that
  */
  return str === "" ? "" : reverse(str.substr(1)) + str.charAt(0);
}

reverse("");
