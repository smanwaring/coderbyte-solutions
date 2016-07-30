//Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains 
//(ie. "All cows eat grass" would return 5). 
//Do not count y as a vowel for this challenge.

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
