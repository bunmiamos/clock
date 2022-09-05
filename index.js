const hour =document.querySelector(".hour");
const minute =document.querySelector(".minute");
const second =document.querySelector(".second");

function setDate() {
    const present = new Date();
    
    const getsecond = present.getSeconds();
    const getminute = present.getMinutes();
    const gethour = present.getHours();
    
    const secondDegree = (getsecond / 60) * 360;
    const minuteDegree = (getminute / 60) * 360;
    const hourDegree = (gethour / 12) * 360;

    
    second.style.transform = `rotate(${secondDegree}deg)`;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    hour.style.transform = `rotate(${hourDegree}deg)`;
}

setTimeout(setDate, 1000);