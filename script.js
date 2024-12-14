window.onload = function(){
    var seconds = 00;
    var milliseconds = 00;
    var appendseconds = document.getElementById("seconds");
    var appendmilliseconds = document.getElementById("milliseconds");
    var startbtn = document.getElementById("start");
    var stopbtn = document.getElementById("stop");
    var resetbtn = document.getElementById("reset");
    var Interval;
    startbtn.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    stopbtn.onclick = function(){
        clearInterval(Interval);
    }
    resetbtn.onclick = function(){
        clearInterval(Interval);
        milliseconds = 00;
        seconds = 00;
        appendseconds.innerHTML = "00";
        appendmilliseconds.innerHTML = "00";
    }
    function startTimer(){
        milliseconds++;
        if(milliseconds <=9){
            appendmilliseconds.innerHTML = "0" + milliseconds;
        }
        if(milliseconds > 9){
            appendmilliseconds.innerHTML = milliseconds;
        }
        if(milliseconds > 99){
            seconds++;
            appendseconds.innerHTML = "0" + seconds;
            milliseconds = 00;
            appendmilliseconds.innerHTML = "00";
        }
        if(seconds > 9){
            appendseconds.innerHTML = seconds;
        }
    }
}