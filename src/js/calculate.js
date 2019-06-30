//jshint esversion:6
import { insertData } from './dom-insert.js';
import { initAPI } from './getAPI.js';
import { addToLocalStorage, retrievedObject, clearLocalStorage } from './local-storage.js';

//=================================Variables====================================

let warning_1 = "Your account dosen't have the required funds";
let warning_2 = "Enter a positive amount number of Bitcoin";
let warning_3 = "Your account dosen't have the required amount of Bitcoin";
let warning_4 = "The minimal amount of bitoin you can buy is 0.1";
let amount;
let currentValue;
let balanceUSD;

//=================================Class========================================

class Trade {
    constructor(ballanceUSD, btcAmoun, currentValue) {
        this.balanceUSD = ballanceUSD;
        this.btcAmoun = btcAmoun;
        this.currentValue = currentValue;
    }
}

//=================================If DATA in localstorahe======================


//Checking if data ins local storage else creating new object
export const dataInStorage = () => {
    let data, newTrade;
    data = retrievedObject();
    if (data) {
        insertData(data.balanceUSD, data.btcAmoun, data.currentValue);
        profitLoost(data.currentValue);

    } else {
        insertData(10000, 0, 10000);
        newTrade = new Trade(10000, 0, 10000);
        addToLocalStorage(newTrade);
    }
};

// ===============================Get variables=================================


//getting amount value and checking if it's correct
const getamount = () => {
    amount = Math.abs(document.getElementById('amount').value.replace(",", "."));
    if (isNaN(amount) || amount == '') {
        document.getElementById('warning').textContent = warning_2;
        console.log("Warning: amount value not correct");
        return false;
    } else {
        document.getElementById('warning').textContent = '';
        if (amount >= 0.1) {
            return true;

        } else {
            document.getElementById('warning').textContent = warning_4;
        }
    }
};

//geting variables from form
export const getVariables = () => {
    let actualPrice,
        balanceUSD,
        balanceBTC,
        buyPriceUSD;

    actualPrice = parseFloat(document.getElementById('bitcoin-price').value);
    balanceUSD = parseFloat(document.getElementById('ballance-usd').value);
    balanceBTC = parseFloat(document.getElementById('btc-on-account').value);

    return {
        actualPrice,
        balanceUSD,
        balanceBTC
    };
};

// ============================Good or bad investmant===========================

// If account balance greater than the start balance outpu color green else red
const profitLoost = (number) => {
    if (number > 10000) {
        document.getElementById('present-btc-value').style.color = 'rgb(5, 237, 0)';
    } else if (number < 10000) {
        document.getElementById('present-btc-value').style.color = 'red';
    } else {
        document.getElementById('present-btc-value').style.color = '#ceddef';
    }
};

// ====================================BUY=====================================

export const getBuy = (variable) => {
    let buyPriceUSD,
        usd,
        btc,
        value,
        newTrade,
        condition;

    //checking if amount value is correct
    condition = getamount();

    if (condition) {

        //Calculating the buy price
        buyPriceUSD = (variable.actualPrice * amount);
        buyPriceUSD = Math.round(buyPriceUSD * 1000) / 1000;

        //If the fonds on the acount aren't enough call a warning text
        if (variable.balanceUSD < buyPriceUSD) {
            document.getElementById('warning').textContent = warning_1;

        } else {
            usd = variable.balanceUSD - buyPriceUSD;
            usd = Math.round(usd * 1000) / 1000;

            btc = variable.balanceBTC + amount;
            btc = Math.round(btc * 1000) / 1000;

            value = (variable.actualPrice * btc) + usd;
            value = Math.round(value * 1000) / 1000;

            profitLoost(value);

            newTrade = new Trade(usd, btc, value);
            insertData(newTrade.balanceUSD, newTrade.btcAmoun, newTrade.currentValue);
            addToLocalStorage(newTrade);

        }
    }
};

//=================================Sell=========================================

export const getSell = (variable) => {
    let sellProfitUSD,
        usd,
        btc,
        value,
        newTrade,
        condition;

    condition = getamount();

    if (condition) {

        sellProfitUSD = variable.actualPrice * amount;
        sellProfitUSD = Math.floor(sellProfitUSD * 1000) / 1000;

        if (amount > variable.balanceBTC) {
            document.getElementById('warning').textContent = warning_3;
            console.log('Warnign buying enable not enough btc on account');


        } else {
            usd = variable.balanceUSD + sellProfitUSD;
            usd = Math.round(usd * 1000) / 1000;
            console.log(usd);

            btc = variable.balanceBTC - amount;
            btc = Math.round(btc * 1000) / 1000;

            value = (variable.actualPrice * btc) + usd;
            value = Math.round(value * 1000) / 1000;

            profitLoost(value);

            newTrade = new Trade(usd, btc, value);
            insertData(newTrade.balanceUSD, newTrade.btcAmoun, newTrade.currentValue);
            addToLocalStorage(newTrade);

        }
    }
};

// ==================================Update account============================

export const upDateAccount = (variable) => {
    let update, object, newTrade;

    object = retrievedObject();
    update = (object.btcAmoun * variable.actualPrice) + object.balanceUSD;
    update = Math.round(update * 1000) / 1000;

    insertData(object.balanceUSD, object.btcAmoun, update);
    profitLoost(update);

    newTrade = new Trade(object.balanceUSD, object.btcAmoun, update);
    addToLocalStorage(newTrade);
};