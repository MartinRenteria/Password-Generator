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

  //Prompt that appears when you click generate button 
function generatePassword() {
    var confirmPasswordLength = (prompt("How many characters would you like your password to contain?"));
    if (confirmPasswordLength <= 7 || confirmPasswordLength >= 129) {
      alert("Your password must have between 8 and 128 characters");
      return;
    }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
