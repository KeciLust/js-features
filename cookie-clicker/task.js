const img = document.getElementById(`cookie`);
let end;

function clickImg() {
    img.width = 250;
    setTimeout(() => img.width = 200, 50);
    const click = document.getElementById(`clicker__counter`);
    click.textContent = Number(click.textContent) + 1;
    const start = (new Date().getTime());
    const speed = document.getElementById(`clicker__speed`);
    if (Number(click.textContent) > 1) {
        speed.textContent = (1 / ((start - end) / 1000)).toFixed(2);
        end = start;
    } else {
        end = start;
    }

}
img.onclick = clickImg;