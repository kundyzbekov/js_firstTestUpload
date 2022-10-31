"use strict"

const box = document.getElementById('box');

//console.log(box);

const buttons = document.getElementsByTagName('button');

//console.log(buttons);

const circles = document.getElementsByClassName('circle');

//console.log(circles);

const hearts = document.querySelectorAll('.heart');

// hearts.forEach(item => {
//     console.log(item);
// });

const oneHeart = document.querySelector('.heart');
//console.log(oneHeart);

box.style.backgroundColor = 'blue';
box.style.width = '500px';

buttons[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'green';

box.style.cssText = 'background-color: red; width: 400px';

// for(let i = 0; i<hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
div.classList.add('black');
//document.querySelector('.wrapper').prepend(div);
const wrapper = document.querySelector('.wrapper');
//wrapper.prepend(div);
div.style.background = 'red';

hearts[1].after(div);

// circles[1].remove();
hearts[0].replaceWith(circles[0]);
div.innerHTML = "<h1>hello</h1>";
div.insertAdjacentHTML('beforeend', '<h2>qwe</h2>');