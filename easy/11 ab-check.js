//Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated
//by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three 
//characters between a and b). 
//Otherwise return the string false. 

function ABCheck(str) { 
	str = str.toLowerCase();
	
	for (var i = 0; i < str.length; i++) {
		if (str[i] === "a") {
			if (str[i+4] ==="b"){
				return "true";
		} else if (str[i] === "b") {
			if (str[i+4] ==="a") {
				return "true";
			}
		}
		}
	}
	return "false";
}
   

ABCheck("Laura sobs")
