const options = {
    name: 'test',
    width: 1024,
    color : {
        border: 'black'
    },
    makeTest : function () {
        console.log("qwe");
    }
}

console.log(Object.keys(options).length);
console.log(options.color.border);
options.makeTest();
const { border} = options.color;
console.log(border);

for(let key in options){
    if(typeof(options[key])==='object'){
        for(let i in options[key]){
            console.log(`свойство ${i} имеет значение ${options[key][i]}`);
        } 
    } else {
        console.log(`свойство ${key} имеет значение ${options[key]}`);
    }
}