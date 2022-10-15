function sayHello(name) {
    return "Привет, " + name +"!";
}
console.log(sayHello("g"));

function returnNeighboringNumbers(n) {
    const arr = [];
    for(let i = 0;i<3; i++){
        arr[i]=n+i-1;
    }
    return arr;
}
console.log(returnNeighboringNumbers(3));

function getMathResult(a,b) {
    let s = a;
    let r = a;
    if(typeof a != "number" && typeof b != "number")
        return a;
    if(typeof a == "number" && typeof b != "number")
        return a;
    else {
        for(let i = 2; i<=b; i++){
            s = s+ a*(i-1); 
            r = r + "---" + s;
            s = a;
        }
        return r;
    }
}
console.log(getMathResult(10,-5));
