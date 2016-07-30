//Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output 
//should be 4547-9-3. 
//Don't count zero as an odd number. 

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
