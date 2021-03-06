///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////

function generatePassword() {
  var password = "";
  //Ask the user for the length of password;
  var length = passwordLength();

  //Ask the user for character types included
  if(length != null)
  {
    var types = passwordTypes();

    for (var i = 0; i < length; i++)
    {
      //The goal is to pick a random charset from types
      //Then pick a random character from that chosen charset and append it to the password
  
      var selectedSet = [];     //Temporary selected set
      var randomSetNum = 0;     //Temporary randomly generated number for set
      var selectedChar = '';    //Temporary selected char
      var randomCharNum = 0;    //Temporary randomly generated number for char
  
      randomSetNum = Math.floor(Math.random() * types.length);
      selectedSet = types[randomSetNum];
  
      randomCharNum = Math.floor(Math.random() * selectedSet.length);
      selectedChar = selectedSet[randomCharNum];
  
      password += selectedChar;
    }
  }
  return password;
}

//Check the password's length
function passwordLength(){
  var input = prompt("Please specify the length of the password (At least 8 characters and no more than 128)");
  var correct = false;

  while(correct === false)
  {
    //If the input is not a valid number
    if(isNaN(input))
    {
      input = prompt("Please try again (At least 8 characters and no more than 128)");
    }

    //If the input is less than 8 or greater than 128
    else if(Number(input) && (Number(input) < 8 || Number(input) > 128))
    {
      input = prompt("Password's length is invalid, please try again (At least 8 characters and no more than 128)");
    }

    //If the user clicks cancel
    else if(input === null)
    {
      return null;
    }

    //Return the password's length
    else
    {
      correct = true;
    }
  }
  return Number(input);
}

//Specify character types to include in the password
function passwordTypes(){
  var typeCount = 0;  //Count the total criteria that user picks
  var typeList = [];  //List of the character types picked by user

  var lowerSet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperSet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numericSet = ["0","1","2","3","4","5","6","7","8","9"];
  var specialSet = ["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];

  //Loop until the user has picked at least 1 criteria
  while(typeCount === 0)
  {
    alert("Pick at least 1 character type");

    //lower case?
    var lowerCase = confirm("Include lower case characters?");
    if(lowerCase)
    {
      typeList.push(lowerSet);
      typeCount++;
    }
  
    //upper case?
    var upperCase = confirm("Include upper case characters?");
    if(upperCase)
    {
      typeList.push(upperSet);
      typeCount++;
    }
  
    //numeric?
    var numeric = confirm("Include numberic characters?");
    if(numeric)
    {
      typeList.push(numericSet);
      typeCount++;
    }
  
    //special?
    var specialCharacter = confirm("Include special characters?");
    if(specialCharacter)
    {
      typeList.push(specialSet);
      typeCount++;
    }
  }
  //Return the list of chosen charsets
  return typeList;
}