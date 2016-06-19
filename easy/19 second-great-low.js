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