function AlphabetSoup(str) {
	console.log(str);
	str = str.split('');
    console.log(str);
    str.sort();
    console.log(str);
    str = str.join("");
    console.log(str);
    return str;
}

AlphabetSoup("coderbyte")