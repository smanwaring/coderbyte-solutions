function AlphabetSoup(str) {

	str = str.split('');
   
    str.sort();
  
    str = str.join("");

    return str;
}

AlphabetSoup("coderbyte")