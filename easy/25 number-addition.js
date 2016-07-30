//Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, 
//then return that final number. For example: if str is "88Hello 3World!" the output should be 91. 
//You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. 
//So "55Hello" and "5Hello 5" should return two different answers. 
//Each string will contain at least one letter or symbol. 


function NumberAddition(whoozywhatsie) { 
	var numArraygibberish = makeArrayOfNumbers(whoozywhatsie);
	var numbersAddedTogether = addArrayTogether(numArraygibberish);
	
	return numbersAddedTogether;
}

function makeArrayOfNumbers (cutiepie) {
	var numbers = "1234567890";
	var savedNumber = "";
	var numArray = [];
	
	for (var i = 0; i < cutiepie.length; i++) {
		if (numbers.indexOf(cutiepie[i]) > -1) {
			savedNumber += cutiepie[i]; 
		} else if (numbers.indexOf(cutiepie[i-1]) > -1) {
			numArray.push(+savedNumber);
			savedNumber = "";
		}
	}
	if (savedNumber) {
		numArray.push(+savedNumber);
	}
	return numArray;
}

function addArrayTogether(myArray) {
	var addedArrayNumbers = 0;
	for (var i = 0; i < myArray.length; i++) {
		addedArrayNumbers += myArray[i];
	}
	return addedArrayNumbers;
}
