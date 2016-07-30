//Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest 
//numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. 
//The array will not be empty and will contain at least 2 numbers.
//It can get tricky if there's just two numbers! 


function SecondGreatLow(arr) { 
	arr.sort(function(a,b){return[a-b]}) ;
	var highest = arr[arr.length-1];
	var lowest = arr[0];
	var secHighest;
	var secLowest;
	
	if (arr.length === 2) {
		return arr[1] + " " + arr[0];
	}
	
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] !== lowest && !secLowest){
			secLowest = arr[i];	
		}
	}
	
	for (var j = arr.length-1; j > -1; j--) {
		if (arr[j] !== highest && !secHighest){
			secHighest = arr[j];	
		}
	} 
	
	
  return secLowest + " " + secHighest; 
         
}
