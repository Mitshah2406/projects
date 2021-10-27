let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
console.log(hour, minute, second)
let interval = setInterval(() => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let calc_hr = (hr * 30) + (min / 2);
    let calc_min = (min * 6) + (sec / 10);
    let calc_sec = sec * 6;

    hour.style.transform = `rotate(${calc_hr}deg)`;
    minute.style.transform = `rotate(${calc_min}deg)`;
    second.style.transform = `rotate(${calc_sec}deg)`;
}, 1000);
// -----digitalClock------------------------
let d_interval = setInterval(() => {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var period = "AM";
    if (hour == 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour - 12;
        period = "PM";
    }
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    var time = hour + " : " + minute + " : " + second + " " + period;
    document.getElementById("digitalClock").innerText = time;
    document.getElementById("digitalClock").textContent = time;

}, 1000)
