//jshint esversion:6
import { initAPI } from './getAPI.js';
import { clearLocalStorage } from './local-storage.js';
import { insertData } from './dom-insert.js';
import { dataInStorage, getBuy, getSell } from './calculate.js';
import { getDate } from './date.js';

//=======================Id of input button and outel text======================

let btnBuy = document.getElementById('btn-buy');
let btnSell = document.getElementById('btn-sell');
let btnReset = document.getElementById('btn-reset');
let warnigSign = document.getElementById('warning');
let input = document.getElementById('ammount');

//=============================Event listinging=================================

initAPI();
getDate();
dataInStorage();

btnBuy.addEventListener('click', () => {
    getBuy();
    console.log('buy');
});

btnSell.addEventListener('click', () => {
    getSell();
    console.log('sell');
});

btnReset.addEventListener('click', () => {
    console.log('reset');
    warnigSign.innerText = '';
    input.value = '';
    clearLocalStorage();
    insertData(1000, 0, 0);
});