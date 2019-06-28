//jshint esversion:6

//adding object to local storage
export const addToLocalStorage = (object) => {
    localStorage.setItem('tradingData', JSON.stringify(object));
};

//puling out object from local storage
export const retrievedObject = () => {
    return JSON.parse(localStorage.getItem('tradingData'));
};

//Clearing local storahe deleting the tradingData object
export const clearLocalStorage = () => {
    localStorage.removeItem('tradingData');
};