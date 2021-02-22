const timeS = document.getElementById("timerS");
const timeM = document.getElementById("timerM");
const timeH = document.getElementById("timerH");

function timerWin() {
    if (Number(timeS.textContent) > 0) {
        timeS.textContent = Number(timeS.textContent) > 10 ? `${Number(timeS.textContent) - 1}` : `0${Number(timeS.textContent) - 1}`;
    } else if (Number(timeS.textContent) == 0 && Number(timeM.textContent) > 0) {
        timeS.textContent = 59;
        timeM.textContent = Number(timeM.textContent) > 10 ? `${Number(timeM.textContent) - 1}` : `0${Number(timeM.textContent) - 1}`;
    } else if (Number(timeS.textContent) == 0 && Number(timeM.textContent) == 0 && Number(timeH.textContent) > 0) {
        timeS.textContent = 59;
        timeM.textContent = 59;
        timeH.textContent = Number(timeH.textContent) > 10 ? `${Number(timeH.textContent) - 1}` : `0${Number(timeH.textContent) - 1}`;
    } else {
        alert(`Вы победили в конкурсе!`);
        clearInterval(timeEnd);

    }
}

let timeEnd = setInterval(timerWin, 1000);