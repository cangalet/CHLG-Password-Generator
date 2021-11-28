//  User input variables:
var confirmCharacter;
var confirmNumber;
var confirmUpperCase;
var confirmLowerCase;

// Start Password variable values: 
// Special characters 

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// function to UpperCase characters
var alphaUpper = alpha.map(alpha => alpha.toUpperCase());
console.log(alphaUpper);


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate Password criteria
function generateOptions() {
  var passwordLength = parseInt(prompt("How long do you want to make your password? Choose between 8 and 128"));
  // validation for length between 8 and 128
  if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
    alert("You need to enter a valid length! Your password needs to be between 8 and 128 characters.");
    return generateOptions();
  } else 

  var passwordIncludeSpecial = confirm("Do you want to include special characters?");

  var passwordIncludeNumeric = confirm("Do you want to include numeric characters?");

  var passwordIncludeLowerCase = confirm("Do you want to include lowercase characters?");

  var passwordIncludeUpperCase = confirm("Do you want to include uppercase characters?");

  var questionOptions = {
    length: passwordLength,
    specialCharacters: passwordIncludeSpecial,
    numeric: passwordIncludeNumeric,
    lowerCase: passwordIncludeLowerCase,
    upperCase: passwordIncludeUpperCase
  }

return questionOptions;

};

function generatePassword() {
  var options = generateOptions();
  console.log(options)

  var passwordPool = [];
    console.log(passwordPool)

    if (options.specialCharacters) {
        for (i = 0; i < character.length; ++i) {
            passwordPool.push(character[i]);
        }
    } 
    if (options.numeric) {
        for (i = 0; i < number.length; ++i) {
        passwordPool.push(number[i]);
        }
    }
    if (options.lowerCase) {
        for (i = 0; i < alpha.length; ++i) {
        passwordPool.push(alpha[i]);
        }
    }
    if (options.upperCase) {
        for (i = 0; i < alphaUpper.length; ++i) {
        passwordPool.push(alphaUpper[i]);
        }
    }

    var finalPassword = [];

    for (let i = 0; i < options.length; ++i) {
        var randomPicker = Math.floor(Math.random() * Math.floor(passwordPool.length));
         finalPassword.push(passwordPool[randomPicker])
    }

    console.log(finalPassword)

    var password = finalPassword.join('');
    console.log(password)

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");




  passwordText.value = password;

}

// Question Options


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria */

/* WHEN prompted for password criteria
THEN I select which criteria to include in the password */

/* WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters */

/* WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters */

/* WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected */

/* WHEN all prompts are answered
THEN a password is generated that matches the selected criteria */

/* WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */
  // validation for length between 8 and 128
  // do {
  //   passwordLength = parseInt(prompt("How long do you want to make your password? Choose between 8 and 128"))
  //   console.log(passwordLength);
  // } while (passwordLength < 8 || passwordLength > 128 || !passwordLength)