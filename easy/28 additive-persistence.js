//Have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and 
//return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. 
//For example: 
//if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 

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
