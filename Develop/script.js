// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

}

function randomizer() {

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

