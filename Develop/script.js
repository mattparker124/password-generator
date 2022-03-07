// Assignment code here
var passInfo = {
  length: 0,
  lowercase: true,
  uppercase: true,
  numeric: true,
  special: true
}

function getLength() {
  passInfo.length = window.prompt('Please select a password length between 8 and 128');
  if (passInfo.length >= 8 && passInfo.length <= 128) {
    passInfo.length = Number(passInfo.length);
  }
  else {
    window.alert('This is not a number! Try again');
    getLength();
  }
}

function getParams() {
  passInfo.lowercase = window.confirm('Would you like the password to include lowercase letters?')
  passInfo.uppercase = window.confirm('Would you like the password to include uppercase letters?')
  passInfo.numeric = window.confirm('Would you like the password to include numbers?')
  passInfo.special = window.confirm('Would you like the password to include special characters?')
  if (!passInfo.lowercase && !passInfo.uppercase && !passInfo.numeric && !passInfo.special) {
    window.alert('You must pick at least one type of character! Try again');
    getParams();
  }
}

function generatePassword() {
  getLength();
  getParams();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
