// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var symbols = ["!", "#", "$", "%", "&", "'", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var length = 0;
var password = "";
// Write password to the #password input
function writePassword() {
  var getprompts = prompts();
  console.log(getprompts);
  var passwordText = document.querySelector("#password");
  console.log(passwordText);
  if (getprompts) {
    passwordText.value = generatePassword();
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  console.log(password);
  for (i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * array.length);
    password = password + array[randomIndex];
    console.log(length);
    console.log(password);
  }
  console.log(password);
  return password;
}

function prompts() {
  array = [];
  length = parseInt(prompt("The minimun length is 8 characters and the maximun is 128 characters.", "Please enter a number."));
  if (length < 8 || length > 128 || length === undefined) {
    alert("Your password must be a number 8-128. Please try again.");
    return;
  } else {
    var numbersconfirm = confirm("This will allow your password to contain numbers (1, 2, 3, etc.), is this ok?");
    var lowersconfirm = confirm("This will allow your password to contain lowercase letters (a, b, c, etc.), is this ok?");
    var uppersconfirm = confirm("This will allow your password to contain uppercase letters (A, B, C, etc.), is this ok?");
    var symbolsconfirm = confirm("This will allow your password to contain symbols (&, +, -, etc.), is this ok?");
  }
  if (numbersconfirm) {
    array = array.concat(numbers);
    console.log(array);
  }
  if (lowersconfirm) {
    array = array.concat(lowers);
    console.log(array);
  }
  if (uppersconfirm) {
    array = array.concat(uppers);
    console.log(array);
  }
  if (symbolsconfirm) {
    array = array.concat(symbols);
    console.log(array);
  }
  return array;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
