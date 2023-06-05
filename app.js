const hours = document.querySelector('.hours h3'),
min = document.querySelector('.min h3'),
sec = document.querySelector('.sec h3'),
amPm = document.querySelector('.amPm');

const getFormattedTime = (time)=>{
    time = time<10? ('0'+time): time;
    return time;
}

const getCurrentTime = ()=>{
    const date = new Date();
    let hourTime = date.getHours();
    let minTime = date.getMinutes();
    let secTime = date.getSeconds();
    let amPmTime = hourTime>=12? 'PM' : 'AM';
    hourTime = hourTime%12 || 12;

    hourTime = getFormattedTime(hourTime);
    minTime = getFormattedTime(minTime);
    secTime = getFormattedTime(secTime);

    hours.innerText = hourTime;
    min.innerText = minTime;
    sec.innerText = secTime;
    amPm.innerText = amPmTime;
}

setInterval(getCurrentTime, 1000);