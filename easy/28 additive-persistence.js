function AdditivePersistence (num) {
  var count = 0;
  while (num.toString().split("").length > 1) {
    var newNum = 0;
    var digits = num.toString().split("");
    for (var i = 0; i < digits.length; i++) {
      newNum += parseInt(digits[i]);
    }
    num = newNum;
    count++;
  }
  return count; 
	
}
