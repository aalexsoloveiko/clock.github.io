function clock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var options = {
        month: "long",
        day: "numeric",
        weekday: "long"
    };

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    document.querySelector(".date").innerHTML = hours + ":" + minutes + ":" + seconds + "   " + date.toLocaleString("ru", options);   

    setTimeout("clock()", 1000);
}
clock();

function setDate() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    var secondHand = document.querySelector(".secondHand");
    var minHand = document.querySelector(".minuteHand");
    var hourHand = document.querySelector(".hourHand");
    
    var secondDeg = seconds * 6 + 90;
    var minDeg = minutes * 6 + 90;
    var hourDeg = (hours + minutes / 60) * 30 + 90;
    
    secondHand.style.transform = `rotate(${secondDeg}deg)`; 
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    
    setTimeout("setDate()", 1000);
}

setDate() 