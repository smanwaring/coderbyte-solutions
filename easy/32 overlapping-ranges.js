function OverlappingRanges(arr) { 
	
	var array1 = createSequence(arr[0], arr[1]);
	var array2 = createSequence(arr[2], arr[3]);
	var counterAnswer = compareArrays(array1, array2); 
	
	
	function createSequence(x,y) {
		var newArray = [];
		for (var i = x; i <= y; i++) {
			newArray.push(i);
		}
		return newArray;
	}

	function compareArrays(arr1, arr2) {
		var counter = 0;
		for (var i = 0; i < arr1.length; i++) {
			if (arr2.indexOf(arr1[i]) > -1) {
				counter++;
			}
		}
		return counter
	}
	
	return (counterAnswer >= arr[4]); 

}