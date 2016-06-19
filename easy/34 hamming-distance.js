function HammingDistance(strArr) { 
    var counter = 0;
    for (var i = 0; i <strArr[0].length; i++) {
        if (strArr[1][i]!== strArr[0][i]) {
            counter ++
        }
    }

  return counter; 
         
}