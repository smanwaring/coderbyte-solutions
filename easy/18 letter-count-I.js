//Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated
//letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before 
//ever which also has 2 e's. 
//If there are no words with repeating letters return -1. Words will be separated by spaces. 

LetterCountI("These are the greateest!")

function LetterCountI(sentence) {

    var punctuationlessSentence = removePunctuationFromSentence(sentence);
    var wordArray = getWordArrayFromSentence(punctuationlessSentence);
    var wordWithMostRepeats = getWordWithMostRepeatsFromArray(wordArray);
    
    return wordWithMostRepeats;
}

function removePunctuationFromSentence(sentence){
    var punctuationlessSentence = '';
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i <sentence.length; i++) {
        if (alphabet.indexOf(sentence[i]) > -1 || sentence[i] === ' ') {
            punctuationlessSentence += sentence[i];
        }
    }
    return punctuationlessSentence;
}

function getWordArrayFromSentence(sentence){
    return sentence.split(' ');
}

function getWordWithMostRepeatsFromArray(wordArray){
    var wordWithMostRepeats;
    var maxRepeats = 0;
    for(var i = 0; i < wordArray.length; i++){
        var word = wordArray[i];
        var numRepeats = howManyMaxRepeatsInTheWord(word);
        if(numRepeats > maxRepeats){
            maxRepeats = numRepeats;
            wordWithMostRepeats = word;
        }
    }
    return wordWithMostRepeats;
}

function howManyMaxRepeatsInTheWord(word){
    var numMaxRepeats = 0;
	for (var i = 0; i < word.length; i++) {
		var counter = 0;
		for (var j = 0; j < word.length; j++) {
			if (word[i].toLowerCase() === word[j].toLowerCase()) {
				counter++;
			}
		}
		if (counter > numMaxRepeats) {
			numMaxRepeats = counter;
		}
	}
    return numMaxRepeats;
}
