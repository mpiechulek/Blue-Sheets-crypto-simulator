//jshint esversion:6


//=================================Variables====================================

let warning_1 = "You account dosen't have the required funds";
let warning_2 = "Enter ammount";
let warning_3 = "You account dosen't have the required ammount of Bitcoin";
let warningSelector = document.querySelector('#warning').textContent;
let actualBallance;

//=================================Buy==========================================

const getBuy = (btcPrice, ammount, balanceUSD) => {
    let buyPriceUSD = btcPrice * ammount;

    if (buyPriceUSD > balanceUSD) {
        warningSelector = warning_1;

    } else {
        actualBallance = balanceUSD - buyPriceUSD;
    }
};

//=================================Sell=========================================

const getSell = (btcPrice, ammount, balanceBTC) => {
    let sellProfit = ammount * btcPrice;

    if (ammount > balanceBTC) {
        document.querySelector('#warning').textContent = warning_1;

    } else {
        actualBallance = balanceUSD + ellProfi;
    }
};

//=================================Sell=========================================