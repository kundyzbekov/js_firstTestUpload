/*function cblc(a){
    let volume = 0;
    if(a<0 || typeof (a) != 'number' || !Number.isInteger(a)){
        return 'При вычислении произошла ошибка';
    }
   
    volume = Math.pow(a,3);
    let fArea =  (Math.pow(a,2) * 6);
    return 'Объем куба:' + volume + ', площадь всей поверхности:' + fArea;
}
console.log(cblc(5));

function getCoupeNumber(b) {
    if(b<0 || typeof b !== 'number')
        return "Ошибка. Проверьте правильность введенного номера места";

    if(b===0 || b>36)
        return "Таких мест в вагоне не существует";

    return Math.ceil(b/4);  
    


}
console.log(getCoupeNumber(35));
*/
function getTimeFromMinutes(c) {
    if(c<0 || typeof (c) != 'number' || !Number.isInteger(c)){
        return "Ошибка, проверьте данные";
    }
    let rem = c%60;
    let t = Math.floor(c/60);
    if(t===0)
        return "Это " +0+ " часов и " + c + " минут";
    if(t===1)
        return "Это " +t+ " час и " + rem + " минут";
    return "Это " +t+ " часа и " + rem + " минут";
    
}
console.log(getTimeFromMinutes(150));

/*function findMaxNumber(a,b,c,d) {
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
            return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}
console.log(findMaxNumber(5,3,7,1));
*/