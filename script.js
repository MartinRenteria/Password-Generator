// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assignment Code for arrays
var includeLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var includeUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var includeSymbols = ["!","@","#","$","%","^","&","*","(",")","+","-","?","<",">","/"];
var includeNumbers = ["0","1","2","3","4","5","6","7","8","9"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  //Prompt that appears when you click generate button 
function generatePassword() {
    var confirmPasswordLength = (prompt("How many characters would you like your password to contain?"));
    if (confirmPasswordLength <= 7 || confirmPasswordLength >= 129) {
      alert("Your password must have between 8 and 128 characters");
      return;
    }

// Determining how many conditions you would like your password to have

var confirmIncludeLowercase = confirm("Click ok to confirm including lowercase letter");
var confirmIncludeUppercase = confirm("Click ok to confirm including uppercase letters");
var confirmIncludeSymbols = confirm("Click ok to confirm including special chracters");
var confirmIncludeNumbers = confirm("Click ok to confirm including numbers");

//Adding parameters to the password
var randomNumber = ""
var passwordParameters = [] 

if (confirmIncludeLowercase) {
  passwordParameters = passwordParameters.concat(includeLowercase)
} 

if (confirmIncludeUppercase) {
  passwordParameters = passwordParameters.concat(includeUppercase)
} 

if (confirmIncludeSymbols) {
  passwordParameters = passwordParameters.concat(includeSymbols)
} 

if (confirmIncludeNumbers) {
  passwordParameters = passwordParameters.concat(includeNumbers)
} 

// Adding each criteria into password container length
if (confirmIncludeLowercase) {
    passwordParameters.push(includeLowercase);
  }
  if (confirmIncludeUppercase) {
    passwordParameters.push(includeUppercase);
  }
  if (confirmIncludeSymbols) {
    passwordParameters.push(includeSymbols);
  }
  if (confirmIncludeNumbers) {
    passwordParameters.push(includeNumbers);
  }

if (confirmIncludeLowercase === false && confirmIncludeUppercase === false && confirmIncludeSymbols === false && confirmIncludeNumbers === false){
  alert("You must pick an option for password diversity.");
  return randomNumber;
}

for (var i = 0; i < confirmPasswordLength; i++) {
  randomNumber = randomNumber + passwordParameters[Math.floor(Math.random() * passwordParameters.length)];

}
return randomNumber;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
