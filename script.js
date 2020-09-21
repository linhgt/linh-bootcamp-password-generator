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
  //Ask the user for the length of password;
  var length = passwordLength();

  var types = passwordTypes();
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
    else if(Number(input) < 8 || Number(input) > 128)
    {
      input = prompt("Password's length is invalid, please try again (At least 8 characters and no more than 128)");
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

  var lowerCase = confirm("Include lower case characters?");
  if(lowerCase)
  {
    typeCount++;
  }

  var upperCase = confirm("Include upper case characters?");
  if(upperCase)
  {
    typeCount++;
  }

  var numeric = confirm("Include numberic characters?");
  if(numeric)
  {
    typeCount++;
  }

  var specialCharacter = confirm("Include special characters?");
  if(specialCharacter)
  {
    typeCount++;
  }
}