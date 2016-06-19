function MultiplicativePersistence(num) {
  var count = 0;
  while (num > 9) {
    var newNum = 1;
    var digits = num.toString().split("");
    for (var i = 0; i < digits.length; i++) {
      newNum *= parseInt(digits[i]);
    }
    num = newNum;
    count++;
  }
  return count; 
	
}