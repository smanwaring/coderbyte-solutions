//Have the function SwapCase(str) take the str parameter and swap the case of each character. 
//For example: if str is "Hello World" the output should be hELLO wORLD. 
//Let numbers and symbols stay the way they are. 

function SwapCase(str) { 
	var lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
	var upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
	var newString = "";
	
	for (var i = 0; i < str.length; i++) {
		if (lowerCaseAlphabet.indexOf(str[i]) > -1) {
			newString += str[i].toUpperCase();
		} else if (upperCaseAlphabet.indexOf(str[i]) > -1) {
			newString += str[i].toLowerCase();
		} else {
			newString += str[i];
		}
	}
  return newString; 
}
