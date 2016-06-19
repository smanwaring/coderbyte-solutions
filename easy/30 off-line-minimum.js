function OffLineMinimum(strArr) { 
	var nums = [];
	var output = [];
	
	for (var i = 0; i < strArr.length; i++) {
		if (strArr[i] !== "E") {
			nums.push(parseInt(strArr[i]));
		} else {
			var smallest = Math.min.apply(null, nums);
			output.push(smallest);
			nums.splice(nums.indexOf(smallest, 1));
		}
	}
 
  return output.join(','); 
         
}
