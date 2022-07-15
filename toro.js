let ojos = document.getElementById(`h1`);
let mover = document.getElementById(`ojode`);
let mover2 = document.getElementById(`ojoiz`);
let ceja1 = document.getElementById("cejaiz");
let ceja2 = document.getElementById("cejade");
    ojos.onclick = mueve
    function mueve(evento){
        mover.style.transition = "all 1.5s"
        mover.style.background = "red";
        mover.style.border = "black 2px solid"
        mover.style.top = "20%"
        mover.style.left = "70%"
        mover2.style.transition = "all 1.5s"
        mover2.style.background = "red";
        mover2.style.border = "black 2px solid"
        mover2.style.top = "20%"
        mover2.style.left = "70%"
        ceja1.style.transition = "all 1.5s"
        ceja1.style.top = "6%"
        ceja2.style.transition = "all 1.5s"
        ceja2.style.top = "6%"
        
    }