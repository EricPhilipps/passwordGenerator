// Assignment Code
var generateBtn = document.querySelector("#generate");

// missing \, " because messed with string notation
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">",
  "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "~"];

var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
   "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
   "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var includeSC;
var includeNC;
var includeUC;
var includeLC;
var passLength;
var allowedInputs;

function generatePassword() {
  let passLength = prompt("Please enter the length of your password (must be greater than 8)", [default_value]);

  if (passLength < 8) {
    alert("Please input a length greater than 8")
  }

  let includeSC = confirm("Would you like to include Special Characters?")
  if (includeSC) {
    // use random and add to passwordarray
  }

  let includeNC = confirm("Would you like to include Numeric Characters?")
  if (includeNC) {
    // use random and add to passwordarray
  }

  let includeUC = confirm("Would you like to include Uppercase Characters?")
  if (includeUC) {
    // use random and add to passwordarray
  }

  let includeLC = confirm("Would you like to include Lowercase Characters?")
  if (includeLC) {
    // use random and add to passwordarray
  }
}

function randomizer(array) {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Create the variables to save user input
  // booleans for whether to include each type of character
    // Special Characters
    // Numeric Characters
    // Lowercase Characters
    // Uppercase Characters
    // alert, confirm, and prompt
    // use conditionals to validate inputs
      // password length, or no characters selected

  // password length string (but must be integer)

// Make an array for each type of character
  // Special, numeric, lowercase, uppercase characters

// generatePassword function -- take user input and grab characters
// from array and generate password

// Use random function to take random characters from each array chosen by user

// create an empty array to become the final password and randomize
  // then use a for loop to convert the arrray into a string

