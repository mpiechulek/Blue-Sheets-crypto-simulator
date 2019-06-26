//jshint esversion:6

export const addToLocalStorage = (object) => {
    localStorage.setItem('tradingData', JSON.stringify(object));
};

export const retrievedObject = () => {
    return JSON.parse(localStorage.getItem('tradingData'));
};

export const clearLocalStorage = () => {
    localStorage.removeItem('tradingData');
};