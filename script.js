// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789".split;
var lowers = "abcdefghijklmnopqrstuvwxyz".split;
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split;
var symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split;
// Write password to the #password input
function writePassword() {
  var getprompts = prompts();
  var passwordText = document.querySelector("#password");
  if (getprompts) {
    var password = generatePassword();
    passwordText.value === password;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for (i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * array.length);
    password = password + array[randomIndex];
  }
}

function prompts() {
  array = [];
  var length = parseInt(prompt("The minimun length is 8 characters and the maximun is 128 characters.", "Please enter a number."));
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
  }
  if (lowersconfirm) {
    array = array.concat(lowers);
  }
  if (uppersconfirm) {
    array = array.concat(uppers);
  }
  if (symbolsconfirm) {
    array = array.concat(symbols);
  }
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
