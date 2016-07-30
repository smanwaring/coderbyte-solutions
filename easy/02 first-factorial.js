//Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it 
//(e.g. if num = 4,return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.

return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.


function FirstFactorial(num) { 
    answer = 1;
    for (var i = num; i > 1; i--) {
        answer *= i
    }
  return answer; 
}
