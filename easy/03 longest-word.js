//Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. 
//If there are two or more words that are the same length, return the first word from the string with that length. 
//Ignore punctuation and assume sen will not be empty. 

function LongestWord(sen) { 
    sen = sen.toLowerCase();
    var newSen = "";
    var alphabet = " abcdefghijklmnopqrstuvwxyz";
    var maxLength = "";
    	
    for (var j = 0; j < sen.length; j++) {
    	if (alphabet.indexOf(sen[j]) > -1) {
    			newSen += sen[j];
    	}
    }
 
    var array = newSen.split(" "); 
  
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > maxLength.length) {
            maxLength = array[i];
        } 
    }
  return maxLength; 
}

LongestWord("I L$$ove Dogs")
