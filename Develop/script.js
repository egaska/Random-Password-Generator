// Assignment Code
var lowercaseAlphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");
var uppercaseAlphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ");
var passwordCharacters = []; 


// Prompt Questions
var generateBtn = document.querySelector("#generate");

var lowCharacters = confirm("Do you want lowercase characters?");

var upperCharacters = confirm("Do you want uppercase characters?");

var numbers = confirm("Do you want numbers?");

var specialCharacters = confirm("Do you want special characters?");


//If loops to add requested charactertypes

if (lowCharacters = true){
  passwordCharacters = passwordCharacters + lowercaseAlphabet;
}
console.log(passwordCharacters);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
