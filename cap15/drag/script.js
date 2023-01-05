'use strict';

function drag(e) {
    let color = e.target.dataset.color;
    e.dataTransfer.setData("color", color);
}

document.querySelectorAll(".draggable").forEach(item => {
    item.addEventListener("dragstart", drag);
});
const area = document.querySelector(".area");
area.addEventListener("dragover", e => {
    e.preventDefault();
});
area.addEventListener("drop", (e) => {
    let color = e.dataTransfer.getData("color");
    area.style.backgroundColor = color;
}); 