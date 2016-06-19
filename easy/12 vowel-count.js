function VowelCount(str) { 
    var vowels = "aeiou";
    str = str.toLowerCase();
    var answer = 0;
    
    for (var i = 0; i <str.length; i++) {
        if (vowels.indexOf(str[i]) > -1){
            answer += 1;
        }
    }
  return answer; 
         
}