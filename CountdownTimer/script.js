//javascript files for countdown timer




const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');



//time to put for countdown

const placement = '2 apr 2023';

function countdown(){

    const newYearsDate = new Date(placement);
    const currentDate = new Date();
    const totalSeconds = new Date(newYearsDate-currentDate)/1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const mins = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)%60;


    daysE1.innerHTML = formatTime(days);
    hoursE1.innerHTML = formatTime(hours);
    minsE1.innerHTML = formatTime(mins);
    secondsE1.innerHTML = formatTime(seconds);

    
}

function formatTime(time){
    return time < 10 ? (`o${time}`) : time;
}
//initial call

countdown();
setInterval(countdown , 1000);
