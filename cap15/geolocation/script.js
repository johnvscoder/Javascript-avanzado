'use strict';

const latitudeH2 =  document.getElementById("latitude");
const longitudeH2 = document.getElementById("longitude");
const errorH2 = document.getElementById("error");
document.querySelector("button").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(pos => {
        let latitude = pos.coords.latitude;
        let longitude = pos.coords.longitude;
        latitudeH2.textContent = `Latitud: ${latitude}`;
        longitudeH2.textContent =  `Longitud: ${longitude}`;
        errorH2.textContent = "";
    },
    () => {
        latitudeH2.textContent = "Latitud:";
        longitudeH2.textContent = "Longitud:";
        errorH2.textContent = "No se pudo obtener la ubicación actual";
    });
});