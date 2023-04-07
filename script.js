//Varaible Declaration for uppercase
var uppercaseAlphabets = [];
for (var i = 65; i <= 90; i++) {
  uppercaseAlphabets.push(String.fromCharCode(i));
  //console.log(uppercaseAlphabets);
}

//Varaible Declaration for lowercase
var lowercaseAlphabets = [];
for (var i = 97; i <= 122; i++) {
  lowercaseAlphabets.push(String.fromCharCode(i));
  //console.log(lowercaseAlphabets);
}

//Varaible Declaration for specialcahracters
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var specialCharactersArray = specialCharacters.split("");
//console.log(specialCharactersArray);

//varaiable Declaration for numbers
var numbersArray = [0,1,2,3,4,5,6,7,8,9];
//for (var i = 0; i <= 9; i++) {
  //numbersArray.push(i);
  //console.log(numbersArray);
//}


//variables for generate button and password text
var generateBtn = document.querySelector("#generate");
//var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() 
{ 
 
   var passwordText = document.querySelector("#password");
   var password = generatePassword();
   passwordText.value = password;
  //generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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
   
   var upperCase = confirm ("Do you like to include Uppercase letter in your password");
   var lowerCase = confirm ("Do you like to include Lowercase letter in your password");
   var specialCharacters = confirm ("Do you like to include special characters in your password");
   var numberInPassword = confirm ("Do you like to include numbers in your password");
   console.log(upperCase);
   if(upperCase == true)
   {
     availableCharacter = availableCharacter.concat(uppercaseAlphabets);
    
   }
   if(lowerCase == true)
   {
    availableCharacter = availableCharacter.concat(lowercaseAlphabets);
   //console.log(availableCharacter);
   }
   if(specialCharacters == true)
   {
    availableCharacter = availableCharacter.concat(specialCharacters);
    console.log(availableCharacter);
   }
   if(numberInPassword == true)
   {
    availableCharacter = availableCharacter.concat(numbersArray);
    console.log(availableCharacter);
   }
   else if(!upperCase && !lowerCase && !specialCharacters && !numberInPassword)
   {
    alert("Please select atlest one option , Try Again");
   }
   
   for(i=1;i<=passwordLength;i++)
   {
    passwordValue = availableCharacter[Math.floor(availableCharacter.length * Math.random())];
    passwordArray.push(passwordValue);
   }
   var mergePassword =passwordArray.join("");
   return mergePassword;
   //console.log(password.value);
 }
 
