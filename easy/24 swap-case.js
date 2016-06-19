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