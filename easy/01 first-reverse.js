//Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. //

function FirstReverse(str) { 
    var newStr = "";
    for (var i = str.length-1; i > -1; i--) {
        newStr += str[i]
    }
  return newStr;
}

FirstReverse();       
