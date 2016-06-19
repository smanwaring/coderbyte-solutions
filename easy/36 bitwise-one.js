function BitwiseOne(strArr) { 
    var newArr = "";
    for (var i = 0; i < strArr[0].length; i++) {
        if ((strArr[0][i] === "0") && (strArr[1][i] === "0") ) {
            newArr += "0";
        } else {
            newArr += "1"
        }
    }
  return newArr; 
         
}
   