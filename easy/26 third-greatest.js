function ThirdGreatest(strArr) { 

  strArr.sort(function(a, b){
      return b.length - a.length; 
    });
    console.log(strArr)
    
   return strArr[2];
         
}
   