function LetterChanges(str) { 
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var newAlphabet = "bcdefghijklmnopqrstuvwxyza";
    var newStr = "";
    var newNewStr = "";
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        if (alphabet.indexOf(str[i]) > -1) {
            newStr += newAlphabet.charAt(alphabet.indexOf(str[i])); 
        } else {
            newStr += str[i];
        }
    }
    for (var j = 0; j < newStr.length; j++) {
        if (newStr[j] === "a" || newStr[j] === "e" || newStr[j] === "i" || newStr[j] === "o" || newStr[j] === "u" ){
            newNewStr += newStr[j].toUpperCase();
        } else {
            newNewStr += newStr[j];
        }
    }
  return newNewStr; 
         
}
   

LetterChanges("coderbyte");  