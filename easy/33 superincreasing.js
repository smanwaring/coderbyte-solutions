function Superincreasing(arr) { 
    var counter = arr[0];
    
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > counter) {
            counter += arr[i];
        } else {
            return "false"
        }
    }

  return "true"; 
         
}