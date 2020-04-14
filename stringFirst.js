// Learning from the MDN Web Docs of JAVASCRIPT
// String and template Literals 

let first = "Hello World"
let second = `Hello World`

let longStr = "This is a very long string which needs " + 
    "to wrap across multiple lines" + 
    "otherwise my code is unreadable."
                
//console.log(longStr); // This is a very long string which needs to wrap across multiple linesotherwise my code is unreadable.

let longStrBack = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."

//console.log(longStrBack); // This is a very long string which needs to wrap across multiple lines because otherwise my code is unreadable.


let char = "Hello World".charAt(6)
console.log(char); // W

let char1 = 'Hello Wold'[0]
console.log(char1); // H

// Comparing Strings 

let a = "James"
let b = "Code"

let comparing =(a,b) => {
    if (a < b) {
        console.log(`${a} is less than ${b}`);
    } else if (a > b) {
        console.log(`${a} is greater than ${b}`);        
    } else {
        console.log(`${a} and ${b} are equal`);
    }
    return
}

comparing(a, b) // James is greater than Born

let isEqual = (str1,str2) => {
    return str1.toUpperCase() === str2.toUpperCase()
}

let str1 = "james"
let str2 = "james"

console.log(isEqual(str1, str2)); // true

// Distinction Between sting primitives and String Objects

let strPrim = "foo"
let strObj = new String(strPrim)

console.log(strPrim) // foo
console.log(strObj); // [String:'foo'] 

console.log(typeof strPrim); // String
console.log(typeof strObj); // Object

let sOne = '2+2'
let sTwo = new String('2+2')

console.log(eval(sOne)); // 4
console.log(eval(sTwo)); // [String: '2+2']
console.log(eval(sTwo.valueOf())); // 4

let strObjOne = new String("James")
console.log(strObjOne); // [String: 'James']
console.log(strObjOne.valueOf()); // James

let x = new String("James Code")
console.log(x.valueOf()); // James Code




