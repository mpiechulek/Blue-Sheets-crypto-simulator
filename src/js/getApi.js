//jshint esversion:8

function refresh() {
    let req = new XMLHttpRequest();

    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            console.log('success!');
            let data = JSON.parse(req.response);
            let price = Math.ceil(data.ticker.price);
            document.getElementById("bitcoin-price").innerHTML = price;

        } else {
            console.log('The request failed!');
        }
    };

    req.open("GET", 'https://api.cryptonator.com/api/ticker/btc-usd', true);
    req.send(null);
}

export function initAPI() {

    refresh();
    let int = self.setInterval(function() {
        refresh();
    }, 30000);
}