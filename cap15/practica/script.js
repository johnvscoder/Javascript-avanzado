"use strict";

// console.log(history);
// console.log(history.length);

// document.querySelector("#atras").addEventListener("click", () => {
//     console.log(history.back());
// });

// document.querySelector("#adelante").addEventListener("click", () => {
//     console.log(history.forward());
// });

// document.querySelector("#go").addEventListener("click", () => {
//     console.log(history.go(-2));
// });

// console.log(window.location);

// console.log(history.length);

// document.getElementById("pushstate").addEventListener("click", () => {
//     history.pushState({nombre: "John"}, "title", "?hola=d");

//     console.log(location);

//     console.log(history.length);
// });


addEventListener("popstate", e => {
    console.log(e);
    console.log(e.state);
});

let i = 1;
document.getElementById("pushstate").addEventListener("click", () => {
    history.pushState({name: 'John' + i}, 'title', '?jajaja' + i++);
});

let j = 1;
document.getElementById("replacestate").addEventListener("click", () => {
    history.replaceState({name: 'Macaria' + j}, 'title', '?blablabla' + j++);
});