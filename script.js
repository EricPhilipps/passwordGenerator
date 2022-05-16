// Assignment Code
var generateBtn = document.querySelector("#generate");

// character arrays
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">",
  "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "~", '"'];

var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
   "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
   "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// all of the global variables needed for functions
var includeSC = true;
var includeNC = true;
var includeUC = true;
var includeLC = true;
var passLength = 0;
var allowedInputs = true;
var randomIndex;

function generatePassword() {
  // final password array and final password string used at the end of generatePassword
  var finalPassArray = [];
  var finalPassword = "";

  // do while loops to return to beginning if incorrect input is input
  do {
    do  {
      allowedInputs = true;
      var multiDArray = [];
      var multiIndex = 0;
      passLength = prompt("Please enter the length of your password (must be greater than 8)");

      if (passLength === "") {
        alert("Please input a length of at least 8 and less than 130");
        allowedInputs = false;
      }
      
      passLength = parseInt(passLength);
    
      if (passLength < 8 || passLength > 129 || passLength === "") {
        alert("Please input a length of at least 8 and less than 130");
        allowedInputs = false;
      }
    } while (!allowedInputs);

    // using confirm to see what characters we would use, when yes array added to multidimensional array
    includeSC = confirm("Would you like to include Special Characters?");
    if (includeSC) {
      multiDArray[multiIndex] = specialChar;
      multiIndex++;
      console.log(multiDArray);
    }

    includeNC = confirm("Would you like to include Numeric Characters?");
    if (includeNC) {
      multiDArray[multiIndex] = numericChar;
      multiIndex++;
      console.log(multiDArray);
    }
    
    includeUC = confirm("Would you like to include Uppercase Characters?");
    if (includeUC) {
      multiDArray[multiIndex] = upperChar;
      multiIndex++;
      console.log(multiDArray);
    }
    
    includeLC = confirm("Would you like to include Lowercase Characters?");
    if (includeLC) {
      multiDArray[multiIndex] = lowerChar;
      multiIndex++;
      console.log(multiDArray);
    }

    if (!includeSC && !includeNC && !includeUC && !includeLC) {
      alert("You have selected no characters! Please select at least one.");
      allowedInputs = false;
    }
    else {
      allowedInputs = true;
    }
  } while (!allowedInputs);

  // For loop to create an array with the random characters from the multidimensional array
  for (var i = 0; i < passLength; i++) {
    var arrayIndex;
    var whichType = randomizer(multiDArray.length);

    arrayIndex = randomizer(multiDArray[whichType].length);
    finalPassArray[i] = multiDArray[whichType][arrayIndex];

  }

  // join the array togther to make a string
  finalPassword = finalPassArray.join('');
  
  // return the final string to pass it to write password
  return finalPassword;
}

function randomizer(arraylength) {
  var randIndex = Math.floor(Math.random() * (arraylength));

  //console.log(randIndex);

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