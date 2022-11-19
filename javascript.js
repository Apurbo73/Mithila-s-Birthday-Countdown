const birthday = " 30 january 2023";
function countDown() {
    const birthDayDate = new Date(birthday);
    const currentDate = new Date();
    // totalSeconds in mili seconds
    const totalSeconds = (birthDayDate - currentDate) / 1000;
    const days = parseInt(totalSeconds / (3600 * 24));
    const hours = parseInt(totalSeconds % (24*3600)/3600);
    const minutes = parseInt(totalSeconds % 3600/60);
    const seconds= parseInt(totalSeconds%60);
    console.log(days);
    document.getElementById('days').innerText= timeFormating(days);
    document.getElementById('hours').innerText= timeFormating(hours);
    document.getElementById('minutes').innerText=timeFormating(minutes);
    document.getElementById('seconds').innerText=timeFormating(seconds);
}

//Definition and Usage. The setInterval() method calls a function at specified intervals (in milliseconds). The setInterval() method continues calling the function until clearInterval() is called, or the window is closed. 1 second = 1000 milliseconds.
setInterval(countDown,1000);
countDown();

function timeFormating (time)
{
    return time<10?(`0${time}`):time;
}30