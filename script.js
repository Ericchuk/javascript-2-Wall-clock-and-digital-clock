let second = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let hours = document.querySelector(".hours");
let Dsecond = document.querySelector(".Dseconds");
let Dminutes = document.querySelector(".Dminutes");
let Dhours = document.querySelector(".Dhours");


function dates(){
    let date = new Date();
    let secondsFromDate = date.getSeconds();
    let secondsDegree = ((secondsFromDate / 60) * 360) + 90;
    let minutesFromDate = date.getMinutes();
    let minutesDegrees = ((minutesFromDate / 60) * 360) + 90;
    let hoursFromDate = date.getHours();
    let hourDegree = ((hoursFromDate / 12) * 360) + 90;
    // console.log(minutesDegrees,hourDegree,secondsDegree);
    second.style.transform = `rotate(${secondsDegree}deg)`;
    minutes.style.transform = `rotate(${minutesDegrees}deg)`;
    hours.style.transform = `rotate(${hourDegree}deg)`;
    Dsecond.textContent = `${secondsFromDate}`;
    Dminutes.textContent = `${minutesFromDate}`;
    Dhours.textContent = `${hoursFromDate}`;
}

setInterval(dates, 1000);