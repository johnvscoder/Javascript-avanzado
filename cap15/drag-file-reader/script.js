"use strict";

const zona = document.querySelector(".zona-arrastre");
zona.addEventListener("dragover", e => {
    e.preventDefault();
    changeStyle(e.srcElement, "#222");
});

zona.addEventListener("dragleave", e => {
    e.preventDefault();
    changeStyle(e.srcElement, "#888");
});

zona.addEventListener("drop", e => {
    e.preventDefault();
    changeStyle(e.srcElement, "#888");
    cargarArchivo(e.dataTransfer.files[0]);
});

const changeStyle = (obj, color) => {
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
};

// const cargarArchivo = ar => {
//     const reader = new FileReader();
//     reader.readAsText(ar);
//     reader.addEventListener("load", e => {
//         document.querySelector(".resultado").textContent = e.currentTarget.result;
//     });
// };

// const cargarArchivo = ar => {
//     const reader = new FileReader();
//     reader.readAsDataURL(ar);
//     reader.addEventListener("load", e => {
//         let url = URL.createObjectURL(ar);
//         let img = document.createElement("IMG");
//         img.setAttribute("src", url);
//         document.querySelector(".resultado").appendChild(img);
//     });
// };

const cargarArchivo = ar => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(ar);
    reader.addEventListener("progress", e => {
        let carga = Math.round(e.loaded / ar.size * 100);
        zona.textContent = `Carga ${carga}`;
        document.querySelector(".barra-de-carga").style.padding = "75px 20px";
        document.querySelector(".barra-de-carga").style.width = `${carga}%`;
    });
    reader.addEventListener("loadend", () => {
        changeStyle(zona, "#4fc");
        document.querySelector(".barra-de-carga").style.background = "#2e6";
        document.querySelector(".barra-de-carga").style.borderStyle = "solid";
        setTimeout(() => {
            zona.style.color = "#fff";
            zona.style.animation = "aparecer 1s forwards";
            zona.textContent = "Carga completa";
        }, 500);
    });
    reader.addEventListener("load", e => {
        let video = new Blob([new Uint8Array(e.currentTarget.result)], {type: "video/mp4"});
        let url = URL.createObjectURL(video);
        let vid = document.createElement("VIDEO");
        vid.setAttribute("src", url);
        document.querySelector(".resultado").appendChild(vid);
        vid.play();
    });
};