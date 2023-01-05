"use strict";

let i = 1;
let j = 1;

document.getElementById("count").textContent = 
    `La cantidad de entradas de historial: ${history.length}`;
document.getElementById("state").textContent =
    `El estado de la entrada actual de historial es: ${history.state ? history.state.state : null}`;
document.getElementById("push").addEventListener("click", () => {
    history.pushState({state: `${i}`}, `title${i}`, `?newUrl=${i++}`);
});
document.getElementById("replace").onclick = () => {
    history.replaceState({state: `replace_${j}`}, `title_replace${j}`, `?newUrl_replace=${j++}`);
};

onpopstate = () => {
    console.log("Se cambiado de entrada de historial");
    console.log(history.state);
};