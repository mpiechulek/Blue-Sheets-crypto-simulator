//jshint esversion:6
import { insertData } from './dom-insert.js';
import { addToLocalStorage, retrievedObject, clearLocalStorage } from './local-storage.js';

//=================================Variables====================================

let warning_1 = "You account dosen't have the required funds";
let warning_2 = "Enter a positive ammount number of Bitcoin";
let warning_3 = "You account dosen't have the required ammount of Bitcoin";

let ammount;
let currentValue;
let balanceUSD = 10000;
currentValue = document.getElementById('bitcoin-price').value;

//=================================Class========================================

class Trade {
    constructor(ballanceUSD, btcAmmoun, currentValue) {
        this.balanceUSD = ballanceUSD;
        this.btcAmmoun = btcAmmoun;
        this.currentValue = currentValue;
    }
}

//=================================If DATA in localstorahe======================

export const dataInStorage = () => {

    let data = retrievedObject();
    if (data) {
        insertData(data.balanceUSD, data.btcAmmoun, data.currentValue);
    } else {
        insertData(1000, 0, 0);
    }
};

// ===============================Get variables=================================

const getVariables = () => {
    ammount = Math.abs(document.getElementById('ammount').value.replace(",", "."));
    if (isNaN(ammount) || ammount == '') {
        document.getElementById('warning').textContent = warning_2;
        console.log("Warning: ammount value not correct");
        return false;
    } else {
        document.getElementById('warning').textContent = '';
        return true;
    }
};

// ================================BUY==========================================

export const getBuy = () => {
    let actualPrice, balanceUSD, balanceBTC, buyPriceUSD, usd, btc, value, newTrade;
    getVariables();

    actualPrice = parseFloat(document.getElementById('bitcoin-price').value);
    balanceUSD = parseFloat(document.getElementById('ballance-usd').value);
    balanceBTC = parseFloat(document.getElementById('btc-on-account').value);
    buyPriceUSD = actualPrice * ammount;
    console.log(actualPrice, balanceUSD, balanceBTC, buyPriceUSD);

    if (balanceUSD < buyPriceUSD) {
        document.getElementById('warning').textContent = warning_1;
        console.log('warnign buying enable no funds');

    } else {
        usd = Math.floor(balanceUSD - buyPriceUSD);
        btc = (balanceBTC + ammount).toPrecision(4);

        value = Math.round((actualPrice * btc) * 10 / 10);
        newTrade = new Trade(usd, btc, value);
        console.log(newTrade);
        insertData('', '', '');
        insertData(newTrade.balanceUSD, newTrade.btcAmmoun, newTrade.currentValue);
        clearLocalStorage();
        addToLocalStorage(newTrade);
    }
};

//=================================Sell=========================================

export const getSell = () => {

    let actualPrice, balanceUSD, balanceBTC, sellProfitUSD, usd, btc, value, newTrade;

    getVariables();

    actualPrice = parseFloat(document.getElementById('bitcoin-price').value);
    balanceUSD = parseFloat(document.getElementById('ballance-usd').value);
    balanceBTC = parseFloat(document.getElementById('btc-on-account').value);
    sellProfitUSD = actualPrice * ammount;
    console.log(actualPrice, balanceUSD, balanceBTC, sellProfitUSD);

    if (ammount > balanceBTC) {
        document.getElementById('warning').textContent = warning_3;
        console.log('warnign buying enable no funds');

    } else {
        usd = Math.floor(balanceUSD - buyPriceUSD);
        btc = (balanceBTC + ammount).toPrecision(4);

        value = Math.round((actualPrice * btc) * 10 / 10);
        newTrade = new Trade(usd, btc, value);
        console.log(newTrade);
        insertData('', '', '');
        insertData(newTrade.balanceUSD, newTrade.btcAmmoun, newTrade.currentValue);
        clearLocalStorage();
        addToLocalStorage(newTrade);
    }
};




//=================================Insert Data to form==========================

export const dataInjection = () => {
    insertData(newTrade.balanceUSD, newTrade.btcAmmount, newTrade.currentValue);
};