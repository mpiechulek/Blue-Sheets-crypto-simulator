//jshint esversion:8

let xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function() {

    // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
        // This will run when the request is successful
        console.log('success!', xhr);
    } else {
        // This will run when it's not
        console.log('The request failed!');
    }

    // This will run either way
    // All three of these are optional, depending on what you're trying to do
    console.log('This always runs...');
};

xhr.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
xhr.send();
console.log();