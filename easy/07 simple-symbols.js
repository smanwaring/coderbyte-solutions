function SimpleSymbols(str) { 
	str = str.toLowerCase();
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var answer = true;
	
	if (alphabet.indexOf(str[0]) > -1  || alphabet.indexOf(str[str.length]) > -1) {
			return false;
	}
	
	for (var i = 0; i < str.length; i++) {
		console.log('i: ' + i + ' str[i]: ' + str[i]);
		if (alphabet.indexOf(str[i]) > -1) {
			if (str[i-1] !== "+" || str[i+1] !== "+") {
				answer = false;
			}
		}
	}
  return answer; 
}

SimpleSymbols("==a+")
   