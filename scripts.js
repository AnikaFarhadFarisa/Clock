
const mylabel = document.getElementById("mylabel");
const dial = document.getElementById("dial");
const hor = document.getElementById("hor");
const mins = document.getElementById("min");


setInterval(updateTime, 1000);
let sec = 0;
let hour = 0;
let min = 0;

function updateTime(){
    let date = new Date();
    mylabel.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours >= 12 ? "pm" : "am";

        hours = (hours % 12) || 12;

        sec = 6*seconds;
        dial.style.transform = 'rotate(' + sec + 'deg)';

        hour = 30*hours;
        hor.style.transform = 'rotate(' + hour + 'deg)';

        min = 6*minutes;
        mins.style.transform = 'rotate(' + min + 'deg)';

        return `${hours}:${minutes}:${seconds} ${amOrPm}`;

    }
    
    
    
}
