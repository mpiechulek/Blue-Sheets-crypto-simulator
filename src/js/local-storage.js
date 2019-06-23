//jshint esversion:6

export const addToLocalStorage = () => {
    localStorage.setItem('data', JSON.stringify(newTrade));
    console.log(JSON.parse(retrievedObject));
};

export const retrievedObject = localStorage.getItem('data');

export const clearLocalStorage = () => {
    localStorage.clear();
};