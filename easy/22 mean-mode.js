//Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if 
//they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). 
//The array will not be empty, will only contain positive integers, and will not contain more than one mode. 

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
   
