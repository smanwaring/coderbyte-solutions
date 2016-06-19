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
