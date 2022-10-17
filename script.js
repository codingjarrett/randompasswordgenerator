// Variables

var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts(); // will return true or false, if false wrong password entered
    var passwordText = document.querySelector("#password");

    if(correctPrompts) {
      var newPassword = generatePassword();
      passwordText.value = newPassword;
    } else {
      passwordText.value = "";
    }
}

function generatePassword(){
//generate password based on prompts
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts(){
  choiceArr = [];
  
  characterLength = parseInt(prompt("How many characters do you wantn the length of the password to be? (Choose value between 8-128)"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Please choose a number between 8-128!");
    return false;

  }

  if(confirm("Would you like to add lowercase letters to your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if(confirm("Would you like to add uppercase letters to your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if(confirm("Would you like to add special characters to your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if(confirm("Would you like to add numbers to your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}

