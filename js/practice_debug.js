"use strict"

// let number = 5; debugger

// function logNumber(){
//     let number = 4; debugger
//     console.log(number);
// }

// number = 6; debugger
// logNumber();
function createCounter(){
    let counter = 0;
    const newFunc = function (){ debugger
        counter++; debugger
        return counter; debugger
    }
    return newFunc; debugger
}

const increment = createCounter(); debugger
const c1 = increment(); debugger
const c2 = increment(); debugger
const c3 = increment(); debugger

console.log(c1, c2, c3);