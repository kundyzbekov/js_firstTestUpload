const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = 'Семья состоит из: ';
    for(let i = 0; i<arr.length; i++){
        str += `${arr[i]} `;
    }
    return str;
    
}
console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let str = '';

    arr.forEach(member => {
        str += `${member} `
    });


    return str.toLowerCase();
}
console.log(standardizeStrings(favoriteCities));

const someString = 'This is some strange string';

function reverse(str) {
    let text = '';
    if(typeof(str) === 'string'){
        for(let i = 0; i<str.length; i++){
            text+= str[str.length-i-1];
        }
         return text;
    }
    return;
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === missingCurr) {
            continue;
        }
        str += `${arr[i]}\n`;
    }
    return str;

}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));