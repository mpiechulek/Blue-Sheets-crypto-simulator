//jshint esversion:6

export const insertData = (quotes, funds, btc, buyValue, presentValue) => {

    document.querySelector('#bitcoin-price').textContent = quotes;

    document.querySelector('#ballance-usd').textContent = funds;
    document.querySelector('#btc-on-account').textContent = btc;
    document.querySelector('#buy-value').textContent = buyValue;
    document.querySelector('#present-btc-value').textContent = presentValue;
};