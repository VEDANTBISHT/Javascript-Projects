const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');




const placement = '1 jan 2024';

function countdown(){
    const newYearsDate = new Date(placement);
    const currentDate = new Date();
    const totalSeconds = new Date(newYearsDate-currentDate)/1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)%60;


    daysE1.innerHTML = days;
    hoursE1.innerHTML = hours;
    minsE1.innerHTML = mins;
    secondsE1.innerHTML = seconds;

    
}
//initial call

countdown();
setInterval(countdown , 1000);
