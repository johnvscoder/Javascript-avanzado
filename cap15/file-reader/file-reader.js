'use strict';

const archivo = document.getElementById('archivo');
archivo.addEventListener('change', e => {
    leerArchivo(e.target.files);
});


const leerArchivo = ar => {
    // const reader = new FileReader();
    // reader.readAsText(ar);
    // reader.addEventListener("load", e => {
    //     console.log(typeof JSON.parse(e.currentTarget.result));
    // });


    // for(let i = 0; i < ar.length; i++) {
    //     const reader = new FileReader();
    //     reader.readAsText(ar[i]);
    //     reader.addEventListener("load", e => {
    //         console.log(e.currentTarget.result);
    //     });
    // }

    for(let i = 0; i < ar.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(ar[i]);
        reader.addEventListener("load", e => {
            let img = `<img src="${e.currentTarget.result}">`;
            document.querySelector(".resultado").innerHTML += img;
        });
    }
};