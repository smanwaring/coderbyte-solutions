function DashInsert(str) { 
	
	numString = str.toString();

	var strWithDashes = "";
	
	for (var i = 0; i < numString.length; i++) {
		if ( isOdd(numString[i]) && isOdd(numString[i+1]) ) {
			strWithDashes += numString[i] + "-";
		} else {
			strWithDashes += numString[i];
		}
	}
  return strWithDashes; 
}

function isOdd(num){
	return num !== undefined && num % 2 !== 0;
}