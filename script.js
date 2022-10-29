// activates generate as a button
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Assignment code here
// this generates an array
// of the alphabet in all uppercase.
var alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphaUpper = alpha.map((x) => String.fromCharCode(x));
const alphaLower = [];
// this pushes a complete lowercase aplhabet
// to the alphaLower array one element at a time.
alphaUpper.forEach(element => {
  alphaLower.push(element.toLowerCase());
});
// declare constantvariable with the value of an
// array that contains string of each number on the kaypad
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// declare constant variable with the value of an array containing all of the special characters.
const special =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "{", "}", ";", "'", ":", "|", ".", "<", ">", "~"];
// proof the const variable have been updated and print
// to console correctly..
// console.log(alphaUpper);
// console.log(alphaLower);
// console.log(special);
// console.log(numbers);
// successful!! all arrays are printing properly..


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

function generatePassword() {
  var passLength = prompt("Choose a length of your password, between 8 and 128 characters.");
  passLength = Number(passLength);
  console.log(passLength);

  if (passLength < 8 || passLength > 128) {
    alert("Password length must be between 8 and 128 characters");
    return null;
  }

  // need checks to include certain characters or not
  var wantUpper = confirm("Would you like to use UPPERCASE in your password.");
  console.log(wantUpper);

  var wantLower = confirm("Please confirm if you'd like lower cases in your password.");
  console.log(wantLower);

  var wantNum = confirm("Please confirm if you'd like numbers in your password.");
  console.log(wantNum);

  var wantSpecial = confirm("Please confirm if you'd like special characters in your password.");
  console.log(wantSpecial);

  // creating new varChars to embody if the user choses okay or not on criteria. This is written to say if it's true uppperCase pull from that array and continues until completed.
  var newChars = [];
  var guarenteedChars = [];

  // checks the confirm values in variable to be truthy to push random element 
  // if truthy
  if (wantUpper) {
    newChars = newChars.concat(alphaUpper);
    // pick a random element from selected array set and pushes that element to the guaranteed array
    var randomUpper = Math.floor(Math.random() * alphaUpper.length);
    guarenteedChars.push(alphaUpper[randomUpper]);
  }
//  if truthy
  if (wantLower) {
    newChars = newChars.concat(alphaLower);
    // sends a single random element from alphaLower array the guaranteed array 
    var randomLower = Math.floor(Math.random() * alphaLower.length);
    guarenteedChars.push(alphaLower[randomLower]);
  }
  // if truthy
  if (wantNum) {
    newChars = newChars.concat(numbers);
    // sends a random element from numbers array to guaranteed array
    var randomNum = Math.floor(Math.random() * numbers.length);
    guarenteedChars.push(numbers[randomNum]);
  }
  // if truthy
  if (wantSpecial) {
    newChars = newChars.concat(special);
    // send a random element from special array this array to the guaranteed array 
    var randomSpec = Math.floor(Math.random() * special.length);
    guarenteedChars.push(special[randomSpec]);
  }
  // shows array of guaranteed characters
  console.log(guarenteedChars);

  // create final password:
  var finalPassword = [];

  // create random password using for loop
  for (var i = 0; i < passLength - guarenteedChars.length; i++) {
    var randomNumber = Math.floor(Math.random() * newChars.length);
    finalPassword = finalPassword.concat(newChars[randomNumber]);
  }

  // this guarentees all selected criteria is at the end of the password.
  finalPassword = finalPassword.concat(guarenteedChars);

  // omits ray elements seperated by periods is what join does
  finalPassword = finalPassword.join("");
  console.log(newChars);
  console.log(finalPassword);
  return finalPassword;
}



