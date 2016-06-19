function MeanMode(arr) { 
    var sumOfArray = 0;
    var counter = 0;
    var max = 0;
    var mean = 0;
    var mode = 0;
    
    for (var i = 0; i <arr.length; i++) {
        sumOfArray += arr[i];
    }
    
    mean += sumOfArray/arr.length
    
    for (var j = 0; j < arr.length; j++) {
        counter = 0;
        for (var k = 0; k < arr.length; k++) {
            if (arr[j] === arr[k]) {
                counter++
            }
            if (counter > max) {
                max = counter;
                mode = arr[j];
            }
        }   
    }
    
    if (mean === mode) {
        return 1;
    } else {
        return 0;
    }
         
}
   