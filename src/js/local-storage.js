//jshint esversion:6

export const addToLocalStorage = (object) => {
    let str = JSON.stringify(object);
    localStorage.setItem('tradingData', JSON.stringify(str));
};

export const retrievedObject = () => {
    let object = localStorage.getItem('tradingData');
    return JSON.parse(object);
};

export const clearLocalStorage = () => {
    localStorage.removeItem('tradingData');
};