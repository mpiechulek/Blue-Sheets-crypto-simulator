//jshint esversion:6
import { initAPI } from './getAPI.js';
import { clearLocalStorage } from './local-storage.js';
import { insertData } from './dom-insert.js';
import { dataInStorage, getBuy, getSell, getVariables, upDateAccount } from './calculate.js';
// import { getDate } from './date.js';

//=======================Id of input button and outel text======================

let bctPrice = document.getElementById('bitcoin-price');
let btcBallance = document.getElementById('btc-on-account');
let accountBalance = document.getElementById('present-btc-value');
let btnBuy = document.getElementById('btn-buy');
let btnSell = document.getElementById('btn-sell');
let btnReset = document.getElementById('btn-reset');
let warnigSign = document.getElementById('warning');
let input = document.getElementById('amount');

//=============================Event listinging=================================

//Loading data from local storahe or cerating new object
dataInStorage();

(function() {
    //geting bitcoin API
    initAPI();

    //Uppdating acount balance
    accountBalance.addEventListener('click', function() {
        upDateAccount(getVariables());
    });

    //Buying operation
    btnBuy.addEventListener('click', () => {
        getBuy(getVariables());
    });

    //Selling operation
    btnSell.addEventListener('click', () => {
        getSell(getVariables());
    });

    //coppying bit coin ballanc to input form
    btcBallance.addEventListener('click', () => {
        input.value = btcBallance.value;
    });

    //reseting by clicking on the input form (btc ammount)
    input.addEventListener('click', () => {
        input.value = '';
    });

    //reseting the form and the localStorage
    btnReset.addEventListener('click', () => {
        console.log('reset');
        warnigSign.innerText = '';
        input.value = '';
        clearLocalStorage();
        insertData(10000, 0, 10000);
        accountBalance.style.color = '#ceddef';
    });
})();