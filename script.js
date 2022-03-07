// Assignment code here

// Assign the characters we can pick our password from
const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz"
const uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numerics = "1234567890"
const specialCharacters = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"

// Set up password object
let passInfo = {
  length: 0,
  lowercase: true,
  uppercase: true,
  numeric: true,
  special: true
}

// Find the length of the desired password
function getLength() {
  passInfo.length = window.prompt('Please select a password length between 8 and 128');
  if (passInfo.length >= 8 && passInfo.length <= 128) {
    passInfo.length = Number(passInfo.length);
  }
  // Restart this step if the entry is not valid
  else {
    window.alert('This is not a number between 8 and 128! Try again');
    getLength();
  }
}

// Find out what characters they want
function getParams() {
  passInfo.lowercase = window.confirm('Would you like the password to include lowercase letters?')
  passInfo.uppercase = window.confirm('Would you like the password to include uppercase letters?')
  passInfo.numeric = window.confirm('Would you like the password to include numbers?')
  passInfo.special = window.confirm('Would you like the password to include special characters?')
  // If none were chosen, restart this step
  if (!passInfo.lowercase && !passInfo.uppercase && !passInfo.numeric && !passInfo.special) {
    window.alert('You must pick at least one type of character! Try again');
    getParams();
  }
}

// Generate a password when the button is clicked
function generatePassword() {
  let password = '';
  let characterOptions = '';
  getLength();
  getParams();

  // Add each character list that was selected to our empty string
  if (passInfo.lowercase) {
    characterOptions += lowercaseAlphabet
  }
  if (passInfo.uppercase) {
    characterOptions += uppercaseAlphabet
  }
  if (passInfo.numeric) {
    characterOptions += numerics
  }
  if (passInfo.special) {
    characterOptions += specialCharacters
  }

  // for loop that runs as many times as our length selection, adding a single random letter from our characterOptions list to the password string each time
  for (let i = 0; i < passInfo.length; i++) {
    let randomCharacterFromList = characterOptions[Math.floor(Math.random() * characterOptions.length)]
    password += randomCharacterFromList;
  }
  // return the final result!
  return password;
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
