//jshint esversion:6
import { insertData } from './dom-insert.js';
import { addToLocalStorage, retrievedObject } from './local-storage.js';

//=================================Variables====================================

let warning_1 = "You account dosen't have the required funds";
let warning_2 = "Enter a positive ammount number of Bitcoin";
let warning_3 = "You account dosen't have the required ammount of Bitcoin";

let newTrade;
let ammount;
let currentValue = '';
let startBalance = 1000;

//=================================Variables====================================

class Trade {
    constructor(ballanceUSD, btcAmmoun, currentValue) {
        this.balanceUSD = ballanceUSD;
        this.btcAmmount = btcAmmoun;
        this.currentValue = currentValue;
    }
}

//=================================If DATA in localstorahe======================

export const dataInStorage = () => {

    let actualPrice = document.getElementById('bitcoin-price').value;

    if (localStorage.getItem("tradingData") === null) {
        newTrade = new Trade(startBalance, btcAmmoun, currentValue);
        addToLocalStorage(newTrade);
    } else {
        newTrade = retrievedObject();
    }
};

// ===============================Get variables=================================
const getVariables = () => {
    ammount = Math.abs(document.getElementById('ammount').value.replace(",", "."));
    if (isNaN(ammount) || ammount == '') {
        document.getElementById('warning').textContent = warning_2;
    } else {
        ammount = document.getElementById('ammount').value;
        console.log(ammount);
        document.getElementById('warning').textContent = '';
    }
    return ammount;
};

// ================================BUY==========================================

export const getBuy = () => {

    getVariables();
    let actualPric = document.getElementById('bitcoin-price').value;
    let buyPriceUSD = actualPric * ammount;

    if (buyPriceUSD > newTrade.balanceUSD) {
        document.getElementById('warning').textContent = warning_1;
    } else {
        newTrade.balanceUSD = newTrade.balanceUSD - buyPriceUSD;
        newTrade.btcAmmount = newTrade.btcAmmount + ammount;
    }

    addToLocalStorage(newTrade);
};

//=================================Sell=========================================

export const getSell = () => {
    let sellProfit = ammount * btcPrice;

    if (ammount > balanceBTC) {
        document.querySelector('#warning').textContent = warning_2;

    } else {
        actualBallance = balanceUSD + ellProfi;
    }
    return actualBallance;
};

//=================================Calculate change=========================================