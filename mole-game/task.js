const getHole = index => document.getElementById(`hole${index}`); 
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
function checkHole () {
    for(let i = 1; i < 10; i++){

        getHole(i).onclick = () => {
            if(getHole(i).classList.contains(`hole_has-mole`)){
               dead.textContent = Number(dead.textContent) + 1;
               if (Number(dead.textContent) === 10){
                   alert(`Вы победили!!!`);
                   dead.textContent = 0;
                   lost.textContent = 0;
               }
            }else {
                lost.textContent = Number(lost.textContent) + 1;
                if (Number(lost.textContent) === 5){
                    alert(`Вы проиграли!!!`);
                    dead.textContent = 0;
                    lost.textContent = 0;
                }
            }
        }

        
    }
}
checkHole();
