setInterval(RNTime, 1000);
function RNTime() {
    var time = new Date();
    var hour =time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    am_pm = "AM";

    if (hour >= 12) 
    {
        if (hour == 12) {
            hour = hour
        }
        else{
            hour = hour - 12;
        }
        am_pm = "PM";
    }
    else {
        am_pm = "AM";
    }

    if (hour < 10)
    {
        hour = "0" + hour;
    }

    if (min < 10)
    {
        min = "0" + min;
    }

    if (sec <10)
    {
        sec = "0" + sec;
    }
    if (((hour == 0) || (hour == 12) || (hour == 2) || (hour == 14) || (hour == 4) || (hour == 16) || (hour == 6) || (hour == 18) || (hour == 8) || (hour == 20) || (hour == 10) || (hour == 22) || (hour == 12) || (hour == 24)) && (min == 00) && (sec == 00)) 
    {
        alert("Time is Up! Shift to next task! ");
    }
    
    var CurrentTime = hour + ":" + min + ":" + sec + am_pm;

    document.getElementById("clock").innerHTML = CurrentTime;
    
}

RNTime();

function visibility() {
    document.getElementById("hid").style.display = "block";
}