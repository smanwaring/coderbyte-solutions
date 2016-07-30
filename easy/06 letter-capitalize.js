//Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. 
//Words will be separated by only one space. 

function LetterCapitalize(str) { 
	var answer = "";
	for (var i = 0; i < str.length; i++) {
		if (i === 0) {
			answer += str[i].toUpperCase();
		} else if (str[i-1] === " ") {
			answer += str[i].toUpperCase();
		} else {
			answer += str[i];
		}
	}
  return answer; 
         
}

LetterCapitalize("Hello world")
