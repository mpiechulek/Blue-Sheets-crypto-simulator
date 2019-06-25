//jshint esversion:6

export const getDate = () => {
    let today = new Date();
    let dateOptions = { weekday: 'long', month: 'short', day: 'numeric' };
    let todayDate = today.toLocaleString('en-US', dateOptions);
    document.getElementById('date').innerHTML = todayDate;
};

// export const getTime = () => {
//     let today = new Date();
//     let timeOptions = { hour: '2-digit', minute: '2-digit', second: 'numeric' };
//     let time = today.toLocaleString('pl-PL', timeOptions);
//     document.getElementById('time').innerHTML = time;
//     setTimeout(getTime, 500);
// };