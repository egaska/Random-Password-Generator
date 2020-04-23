// Assignment Code
var lowercaseAlphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");
var uppercaseAlphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ");
var numberCharacters =  "1 2 3 4 5 6 7 8 9".split(" ");
var specialCharacters = "~ ! @ # $ % ^ & * ( ) _ - + = [ ] { } | ; : '  , . / ?".split("");
var passwordCharacters = []; 


// Prompt Questions

var lower = confirm("Do you want lowercase characters?");
var upper = confirm("Do you want uppercase characters?");
var numbers = confirm("Do you want numbers?");
var special = confirm("Do you want special characters?");

//If loops to add requested charactertypes
if (lower === true){
  passwordCharacters = passwordCharacters + lowercaseAlphabet;
}
if(upper === true){
  passwordCharacters = passwordCharacters + uppercaseAlphabet;
}
if (numbers === true){
  passwordCharacters = passwordCharacters + numberCharacters;
}
if (special === true){
  passwordCharacters = passwordCharacters + specialCharacters;
}

var characterSlot = passwordCharacters.length * Math.random();
console.log(characterSlot);
characterSlot = parseInt(characterSlot);
console.log(characterSlot);

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
