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
        	 console.log(reversedString)
        }
    }
    
    if (newStr === reversedString) {
        return "true";
    } else {
        return "false";
    }

}

Palindrome("do geese see god")