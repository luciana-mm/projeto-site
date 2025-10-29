const imagens = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;
function carrossel(){
    idx++;

    if(idx>img.length - 1){
        idx=0;
    }
    imagens.style.transform = `translateX(${-idx * imagens.clientWidth}px)`;
}

setInterval(carrossel, 1800);