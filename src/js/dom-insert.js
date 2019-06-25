//jshint esversion:6

export const insertData = (quotes, funds, btc, buyValue, presentValue) => {
    document.getElementById('bitcoin-price').textContent = quotes;
    document.getElementById('ballance-usd').textContent = funds;
    document.getElementById('btc-on-account').textContent = btc;
    document.getElementById('buy-value').textContent = buyValue;
    document.getElementById('present-btc-value').textContent = presentValue;
};