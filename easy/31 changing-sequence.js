function ChangingSequence(arr) { 
    var pattern = arr[1] > arr[0];
    
    for (var i = 2; i < arr.length; i++) {
        var sequence = arr[i] > arr[i-1];
        if (sequence !== pattern) {
        	console.log(arr[i])
            return (i-1);
        }
    } 
    return -1
         
}