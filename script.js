
//Varaible Declaration for uppercase
var uppercaseAlphabets = [];
for (var i = 65; i <= 90; i++) {
  uppercaseAlphabets.push(String.fromCharCode(i));//method converts Unicode values to characters
}

//Varaible Declaration for lowercase
var lowercaseAlphabets = [];
for (var i = 97; i <= 122; i++) {
  lowercaseAlphabets.push(String.fromCharCode(i));

}

//Varaible Declaration for specialcahracters
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var specialCharactersArray = specialCharacters.split("");//split into "*","!"



//varaiable Declaration for numbers
var numbersArray = [0,1,2,3,4,5,6,7,8,9];



//variables for generate button 
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() 
{ 
   //variable for password text
   var passwordText = document.querySelector("#password");
   var password = generatePassword();//passing value of merge password through function
   passwordText.value = password;//textarea in html

}

//create a function to generate password
function generatePassword()
{ 
  //Check the password length
   var passwordLength =  prompt("Please Select the Length of the Password at least 8 characters and no more than 128 characters");  
   var passwordArray =[];
   var passwordValue =[];
   //varaiable for available character depend on the user input
   var availableCharacter = [];

   //Check null field as "" 
   if(passwordLength == "")
   {
    alert("It is Blank,You should provide password length, Try Again");
    return;//to get out from the further validation
   }
   else if(passwordLength < 8 || passwordLength > 128) 
   {
     alert("Please select between 8 to 128 length, Try Again");
     return;
   }      
   else 
   {
   alert(" You selected "  + passwordLength + " Character for your Password");
   }
   
   //Check the uppercase letter
   
   var hasUpperCase = confirm ("Do you like to include Uppercase letter in your password");
   var hasLowerCase = confirm ("Do you like to include Lowercase letter in your password");
   var hasSpecialCharacters = confirm ("Do you like to include special characters in your password");
   var hasNumberInPassword = confirm ("Do you like to include numbers in your password");

   if(hasUpperCase == true)
   {
     availableCharacter = availableCharacter.concat(uppercaseAlphabets);
    
   }
   if(hasLowerCase == true)
   {
    availableCharacter = availableCharacter.concat(lowercaseAlphabets);

   }
   if(hasSpecialCharacters == true)
   {
    availableCharacter = availableCharacter.concat(specialCharacters);
    console.log(availableCharacter);
   }
   if(hasNumberInPassword == true)
   {
    availableCharacter = availableCharacter.concat(numbersArray);

   }
   else if(!hasUpperCase && !hasLowerCase && !hasSpecialCharacters && !hasNumberInPassword)
   {
    alert("Please select atleast one option , Try Again");
   }
   
   for(i=1;i<=passwordLength;i++)
   {
    passwordValue = availableCharacter[Math.floor(availableCharacter.length * Math.random())];
    passwordArray.push(passwordValue);
   }
   var mergePassword =passwordArray.join("");
   return mergePassword;
 
 }
 
