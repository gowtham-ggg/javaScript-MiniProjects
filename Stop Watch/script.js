const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const display = document.getElementById("timer");

let [hour, min, sec] = [0, 0, 0];
let timer  = null;

function stopWatch(){
    sec++;
    if(sec === 60){
        sec = 0;
        min++;

        if(min === 60){
            min =0;
            hour++;
        }
    }
    let hours = hour<10 ? "0" + hour : hour;
    let mins = min<10 ? "0" + min : min;
    let secs = sec<10 ? "0" + sec : sec;

    display.innerHTML = `${hours}:${mins}:${secs}`;
 }

 function watchStart(){
    if(timer === null){
        timer = setInterval(stopWatch,1000)
    }
   
 }
function watchStop(){
    clearInterval(timer);
    timer = null;
}
function watchReStart(){
    [hour, min, sec] = [0, 0, 0];
    display.innerHTML = "00:00:00";
    watchStart();
}
 startBtn.addEventListener("click", watchStart);
 stopBtn.addEventListener("click", watchStop);
 resetBtn.addEventListener("click", watchReStart);

