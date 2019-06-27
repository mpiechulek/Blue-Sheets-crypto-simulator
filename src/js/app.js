//jshint esversion:6
import { initAPI } from './getAPI.js';
import { clearLocalStorage } from './local-storage.js';
import { insertData } from './dom-insert.js';
import { dataInStorage, getBuy, getSell, getVariables, xxxx } from './calculate.js';
import { getDate } from './date.js';

//=======================Id of input button and outel text======================
let ammount = document.getElementById('ammount');
let btcBallance = document.getElementById('btc-on-account');
let accountBalance = document.getElementById('present-btc-value');
let btnBuy = document.getElementById('btn-buy');
let btnSell = document.getElementById('btn-sell');
let btnReset = document.getElementById('btn-reset');
let warnigSign = document.getElementById('warning');
let input = document.getElementById('ammount');

//=============================Event listinging=================================

getDate();
initAPI();
dataInStorage();

window.addEventListener('onchange', function() {
    console.log("AAAAAAAAAAAAAAA");
});

btnBuy.addEventListener('click', () => {
    getBuy(getVariables());
    console.log('buy');
});

btnSell.addEventListener('click', () => {
    getSell(getVariables());
    console.log('sell');
});

btcBallance.addEventListener('click', () => {
    ammount.value = btcBallance.value;
});

ammount.addEventListener('click', () => {
    ammount.value = 0.000;
});

btnReset.addEventListener('click', () => {
    console.log('reset');
    warnigSign.innerText = '';
    input.value = '';
    clearLocalStorage();
    insertData(10000, 0, 10000);
    accountBalance.style.color = '#ceddef';
});