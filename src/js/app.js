//jshint esversion:6
import { initAPI } from './getAPI.js';
import { clearLocalStorage } from './local-storage.js';
import { insertData } from './dom-insert.js';
import { dataInStorage, getBuy, getSell } from './calculate.js';
import { getDate } from './date.js';


function run() {
    console.log('App is running');
    let btnBuy = document.getElementById('btn-buy');
    let btnSell = document.getElementById('btn-sell');
    let btnReset = document.getElementById('btn-reset');
    let warnigSign = document.getElementById('warning');
    let input = document.getElementById('ammount');

    dataInStorage();

    btnBuy.addEventListener('click', () => {
        dataInStorage();
        getBuy();
        console.log('buy');
    });

    btnSell.addEventListener('click', () => {
        dataInStorage();
        getSell();
        console.log('sell');
    });

    btnReset.addEventListener('click', () => {
        console.log('reset');
        warnigSign.innerText = '';
        input.value = '';
        clearLocalStorage();
    });
}

// =============================================================================

run();
initAPI();
getDate();