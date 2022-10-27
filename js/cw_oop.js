const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let area = 0;
    let volume = 0;
    data.shops.forEach(item => {
        area+= item.width * item.length;
    });

    volume = area * data.height;
    if(data.budget - (volume*data.moneyPer1m3 >=0)){
        console.log('ok');
    } else {
        console.log('not ok');
    }
}
isBudgetEnough(shoppingMallData);