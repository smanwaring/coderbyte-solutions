function PowersofTwo(num) { 
  var divisible = num % 3;
  var newNum = num / 3;
  while (divisible === 0 && newNum !== 3) {
    divisible = newNum % 3;
    newNum = newNum /3;
  }
  if (newNum === 3) {
    return true;
  } else {
    return false;
  }

}
