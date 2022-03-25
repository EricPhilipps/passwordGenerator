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

var includeSC = true;
var includeNC = true;
var includeUC = true;
var includeLC = true;
var passLength = 0;
var allowedInputs = true;
var randomIndex;

function generatePassword() {
  var finalPassArray = [];
  var finalPassword = "";
  do {
    do  {
      allowedInputs = true;
      var multiDArray = [];
      var multiIndex = 0;
      passLength = prompt("Please enter the length of your password (must be greater than 8)");
      passLength = parseInt(passLength);
      
      console.log(passLength);

      if (passLength < 8 || passLength > 129) {
        alert("Please input a length of at least 8 and less than 130");
        allowedInputs = false;
      }
    } while (!allowedInputs);
    
    console.log(passLength);

    includeSC = confirm("Would you like to include Special Characters?");
    if (includeSC) {
      multiDArray[multiIndex] = specialChar;
      multiIndex++;
    }
    else {
      includeSC = false;
    }

    includeNC = confirm("Would you like to include Numeric Characters?");
    if (includeNC) {
      multiDArray[multiIndex] = numericChar;
      multiIndex++;
    }
    else {
      includeNC = false;
    }

    includeUC = confirm("Would you like to include Uppercase Characters?");
    if (includeUC) {
      multiDArray[multiIndex] = upperChar;
      multiIndex++;
    }
    else {
      includeUC = false;
    }

    includeLC = confirm("Would you like to include Lowercase Characters?");
    if (includeLC) {
      multiDArray[multiIndex] = lowerChar;
      multiIndex++;
    }
    else {
      includeLC = false
    }

    if (!includeSC && !includeNC && !includeUC && !includeLC) {
      alert("You have selected no characters! Please select at least one.");
      allowedInputs = false;
    }
  } while (!allowedInputs);

  // console.log("Hello?");
  // console.log(includeLC, includeUC, includeSC, includeNC, passLength);
  // console.log(multiDArray);

  for (var i = 0; i < passLength; i++) {
    var whichType = randomizer(multiDArray);

    finalPassArray[i] = randomizer(multiDArray[whichType]);
  }

  finalPassword = finalPassArray.join('');
  
  return finalPassword;
}

function randomizer(array) {
  var randIndex = Math.floor(Math.random() * (array.length - 0) + 0);

  console.log(randIndex);

  return randIndex;
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
  // booleans for whether to include each type of character X
    // Special Characters X
    // Numeric Characters X
    // Lowercase Characters X
    // Uppercase Characters X
    // alert, confirm, and prompt X
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

