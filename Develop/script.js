// Assignment Code
var lowercaseAlphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");
var uppercaseAlphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ");
var numberCharacters = "1 2 3 4 5 6 7 8 9".split(" ");
var specialCharacters = "~ ! @ # $ % ^ & * ( ) _ - + = [ ] { } | ; : / ?".split(" ");
var passwordCharacters = [];
var generatedPasswordNumbers = [];
var passwordFinal = [];
var passwordLength = 0;

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Prompt Questions

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters would you like the password to be? (Please enter an integer between 8 and 128): ");
  }
  var lower = confirm("Do you want lowercase characters?: ");
  var upper = confirm("Do you want uppercase characters?: ");
  var numbers = confirm("Do you want numbers?: ");
  var special = confirm("Do you want special characters?: ");

  //If statements to add requested character types
  if (lower === true) {
    for (let i = 0; i < lowercaseAlphabet.length - 1; i++) {
      passwordCharacters.push(lowercaseAlphabet[i]);
    }
    //   Test Console Display
    //   console.log("Lowercase: " + passwordCharacters);

    if (upper === true) {
      for (let i = 0; i < uppercaseAlphabet.length - 1; i++) {
        passwordCharacters.push(uppercaseAlphabet[i]);
      }
    }
    // //Test Console Display
    // console.log("Uppercase: " + passwordCharacters);

    if (numbers === true) {
      for (let i = 0; i < numberCharacters.length - 1; i++) {
        passwordCharacters.push(numberCharacters[i]);
      }
    }

    // //Test Console Display
    // console.log("Numbers: " + passwordCharacters);

    if (special === true) {
      for (let i = 0; i < specialCharacters.length - 1; i++) {
        passwordCharacters.push(specialCharacters[i]);
      }
    }
    //Test Console Display
    // console.log("Special: " + passwordCharacters);
  }

  // Loop to generate the requested amount of random slots to be entered into the array passwordCharacters.
  for (let i = 1; i < passwordLength; i++) {
    var characterSlot = passwordCharacters.length * Math.random();
    characterSlot = parseInt(characterSlot);
    generatedPasswordNumbers.push(characterSlot);

    // //Test Display
    // console.log("Generated Passwords Numbers: " + generatedPasswordNumbers);
  }

  // Test Console Display
  // console.log("Password Characters: " + passwordCharacters[1]);

  //Loop to convert the generatedPasswordNumbers into useable characters.
  for (let i = 0; i < passwordLength - 1; i++) {

    passwordFinal.push(passwordCharacters[generatedPasswordNumbers[i]])
  }

  //Test Display
  console.log(passwordFinal);
  return passwordFinal.join("");
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
