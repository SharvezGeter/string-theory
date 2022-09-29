//xify
function xify(str) {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        newStr += "x";

    }
    return newStr;
}
console.log(xify("Yesssirrrr"));
console.log(xify("HelloWorld"));


// yellingChars 
function yellingChars(str) {
    let newStr = "";

    for(i = 0; i < str.length; i++){
        newStr += str[i]; //adding back chars from the original string!
        newStr += "!"; // adds exclamation point after it
       
        // newStr += Str[i] + "!"; // same as above 
    }
    return newStr;
}
console.log(yellingChars("goodness"));
console.log(yellingChars("yesssirrr"));



//indexedChars 
function indexedChars(str) {
    let newStr = ""
    for(i = 0; i < str.length; i++){
        newStr += i;
        newStr += str[i];
    }
    return newStr
}

console.log(indexedChars("Hello"));
console.log(indexedChars("Coding"));



//exclaim
function exclaim(str) {
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        
        if(str[i] === "?" || str[i] === "."){
            newStr += "!";
    }
        newStr += str[i];
    }
    return newStr;
}


console.log(exclaim("Only. love. can. hurt. like. thissssssssss."))





//truncate 
function truncate(str) {
    let newStr = "";

    for(let i = 0; i < 15; i++){
        newStr += str[i];
    }
        newStr += "..."
      return newStr;
}
console.log(truncate("Heeeeyyyy my nammmee isss, what?"));
console.log(truncate("My nammmee isss, who?"));



//ciEmailify
function ciEmailify(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            newStr = newStr + "."
        } else {
            newStr += str[i]
        }

    }
    newStr += str[i] 
    
    return newStr + "@codeimmersives.com"


}
console.log(ciEmailify("colin jaffe"))
console.log(ciEmailify("Yesssirrrr"))



//reverse
function reverse(str) {
    let newStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str[i]
    }
    return newStr;
}

console.log(reverse("colin"));
console.log(reverse("mesuara"));



//onlyVowels
function onlyVowels(str) {

    let newStr = "";

    for (let i = 0; i < str.length; i++) { 
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            newStr === ""
        } else {
            newStr += str[i]
        }


    }
    return newStr
}
console.log(onlyVowels('Yessssiiiirrrrr'));
console.log(onlyVowels('conlin'));
console.log(onlyVowels('Anthony DeRosa'));