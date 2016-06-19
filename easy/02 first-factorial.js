function FirstFactorial(num) { 
    answer = 1;
    for (var i = num; i > 1; i--) {
        answer *= i
    }
  return answer; 
}