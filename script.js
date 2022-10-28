// Assignment code here

// this generates an array
// of the alphabet in all uppercase.
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphaUpper = alpha.map((x) => String.fromCharCode(x));
const alphaLower = [];

// declare constantvariable with the value of an
// array that contains string of each number on the kaypad
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
// declare constant variable with the value of an array containing all of the special characters.

const special =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "{", "}", ";", "'", ":", "|", ".", "<", ">", "~"];

// this pushes a complete lowercase aplhabet
// to the alphaLower array one element at a time.
alphaUpper.forEach(element => {
  alphaLower.push(element.toLowerCase());
});

// proof the const variable have been updated and print
// to console correctly..
console.log(alphaUpper);
console.log(alphaLower);
console.log(special);
console.log(numbers);
// successful!!

// Create gereatePassword() function: 
function generatePassword() {
  // first step of generation is prompting
  // the user for the password length &
  // checking it meets acceptability criteria:
  // between 8 and 128 characters.
  // use local variables to define needed check values
  var passLength = prompt("Please enter the number of desired characters for you new password.");

}


// Get references to the #generate element
// declaring variable generateBtn with the value
// asssigned to the element with the assignment 
// id="generate", which is the main application's button.
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// this is a test to see output of the
// writePassword function
console.log(password);
console.log(passwordText);
// looks like generatePassword() function is undefined.
// create the generate password function at top of file. 




