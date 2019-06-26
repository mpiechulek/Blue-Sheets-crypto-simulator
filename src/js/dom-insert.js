//jshint esversion:6

export const insertData = (funds, btc, presentValue) => {
    document.getElementById('ballance-usd').value = funds;
    document.getElementById('btc-on-account').value = btc;
    document.getElementById('present-btc-value').value = presentValue;
};