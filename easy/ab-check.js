function ABCheck(str) { 
	str = str.toLowerCase();
	
	for (var i = 0; i < str.length; i++) {
		if (str[i] === "a") {
			console.log(str[i])
			console.log(str[i+4])
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