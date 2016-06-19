function ArithGeo(arr) { 
  var arithTrue = true, geoTrue = true;
  var diff = arr[1] - arr[0];
  
  for (var i = 2; i < arr.length; i++) {
    if ((arr[i] - arr[i-1]) !== diff) {
      arithFlag = false;
    }
  }
  if (arithTrue) {
    return "Arithmetic";
  } else { 
    diff = arr[1] / arr[0];
    for (var j = 2; j < arr.length; j++) {
      if ((arr[j] / arr[j-1]) !== diff) { 
        geoFlag = false;
      }
    }
    if (geoTrue) {
      return "Geometric";
    }
    else {
      return "-1";
    }
  }
  
}
