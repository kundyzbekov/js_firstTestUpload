/*const arr = [3, 5, 8, 16, 20, 23, 50];


// Пишем решение вот тут
for(let i = 0; i<arr.length;i++){
    result[i] = arr[i];
}
//console.log(result);
// Не трогаем
//return result;

const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for(let i = 0; i<data.length; i++){
        if(typeof data[i] == "number"){
            data[i] = data[i]*2;
        } else {
            data[i] = data[i] + " done";
        }


    }
    console.log(data);
    
    // Не трогаем
    //return data;
*/
const data = [5, 10, 'Shopping', 20, 'Homework'];
//const result = [];

    // Пишем решение вот тут
    for(let i = 0; i<data.length; i++){
        result[i] = data[data.length-i-1];
    }
    
    console.log(result);
    //return result;

    const lines = 5;
    let res = '';
    for(let i = 0;i<=lines; i++){
        for(let j = 0;j<=lines-i;j++){
            res+=' ';
        }
        for(let k = 0; k<2*i+1; k++){
            res+='*';
        }
        res+="\n";
       
    }
    console.log(res);
    