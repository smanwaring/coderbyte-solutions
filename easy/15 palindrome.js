//Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a 
//palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: 
//"racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. 

function Palindrome(str) { 
    str = str.toLowerCase();
    var newStr = "";
    var reversedString = "";
    
    for (var i = 0; i < str.length; i++) {
    	if (str[i] !== " ") {
    		newStr += str[i]
    	}
    }
    
    
    for (var i = str.length-1; i > -1; i--) {
        if (str[i] !== " ") {
    		 reversedString += str[i];
        }
    }
    
    if (newStr === reversedString) {
        return "true";
    } else {
        return "false";
    }

}

Palindrome("do geese see god")
