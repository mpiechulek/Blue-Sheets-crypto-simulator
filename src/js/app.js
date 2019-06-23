//jshint esversion:6
import { getDate, getTime } from './date.js';
import { insertData } from './dom.js';

//================================Date-time=====================================
//geting todays date and adding it to the header h2
getDate();
getTime();

// =================================Variables======================================
// insertData();

const run = () => {
    let btnBuy = document.querySelector('#btn-buy');
    let btnSell = document.querySelector('#btn-sell');
    let btnReset = document.querySelector('#btn-reset');

    btnBuy.addEventListener('click', () => {
        console.log('buy');
    });

    btnSell.addEventListener('click', () => {
        console.log('sell');
    });

    btnReset.addEventListener('click', () => {
        console.log('reset');
    });
};

run();