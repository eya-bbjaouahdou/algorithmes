function trouverLePlusLong(str) {
    
    str = str.split("");
    
    if(str.length == 1) {
        return str[0].length;
    }

    if(str[0].length >= str[1].length) {
        str.splice(1,1);
        return trouverLePlusLong(str.join(""));
    }

    if(str[0].length <= str[1].length){

        return trouverLePlusLong(str.slice(1, str.length).join(""));
    }
 

}
console.log(trouverLePlusLong("The quick brown fox jumped over the lazy dog"));