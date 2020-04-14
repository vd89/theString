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