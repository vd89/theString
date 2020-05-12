//Properties of String

let str = `Life, the universe and everything and this is working. Answer:`

console.log(`${str}` + str.length); // Life, the universe and everything and this is working. Answer: 62

let myString = "bluebells"

let lenMyString = myString.length

console.log(lenMyString); // 9
console.log(myString); // bluebells

// Methods 

// String.formCharCode()
// converts ascii dec code to letters 

console.log(String.fromCharCode(65, 90, 78));  // AZN
console.log(String.fromCharCode(106, 97, 109, 101, 115)); // james
console.log(String.fromCharCode(100, 97, 120)); // dax 

let findLetter = () => {
    let strObj =[]
    for (var i =97; i<= 122; i--) {
       strObj = String.fromCharCode(i)        
    }
    return strObj
}

console.log(findLetter());

function genAlphabetic() {
    let alphabet = []
    for (let i = 97; i <= 122; i++) {
        let alphabetVal = String.fromCharCode(i)
        alphabet.push(alphabetVal)
    }
    //    return alphabet;
    console.log(alphabet);
}


genAlphabetic()