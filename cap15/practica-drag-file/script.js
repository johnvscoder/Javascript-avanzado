"use strict";

const videoExtensions = ["flv", "avi", "mov", "mp4", "wmv", "webm"];
const imageExtensions = ["jpg", "jpeg", "gif", "png", "webp"];

const dragZone = document.querySelector(".drag-zone");
dragZone.addEventListener("dragover", e => {
    e.preventDefault();
});

dragZone.addEventListener("drop", e => {
    e.preventDefault();

    let files = e.dataTransfer.files;
    for(let file of files) {
        let extension = getFileExtension(file);
        if(videoExtensions.indexOf(extension) != -1) {
            loadVideo(file);
        }
        else if(imageExtensions.indexOf(extension) != -1) {
            loadImage(file);
        }
        else {
            alert(`Error. file extension of ${file.name} not recognized`);
        }
    }
});

function loadVideo(file) {
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.addEventListener("load", e => {
        let extension = getFileExtension(file);
        let video = new Blob([new Uint8Array(e.currentTarget.result)], {type: `video/${extension}`});
        let url = URL.createObjectURL(video);

        let videoDiv = document.createElement("DIV");
        videoDiv.setAttribute("class", "video");
        videoDiv.setAttribute("data-file-name", file.name);
        videoDiv.setAttribute("data-url", url);
        videoDiv.textContent = file.name;
        
        let files = document.querySelector(".files");
        files.appendChild(videoDiv);
        
        const videoDOM = document.querySelector(".files .video:last-child");
        videoDOM.addEventListener("click", e => {
            let url = e.target.dataset.url;
            let fileName = e.target.dataset.fileName;
            let extension = fileName.split(".").pop();

            let videoTag = document.createElement("VIDEO");
            videoTag.setAttribute("src", url);
            videoTag.setAttribute("controls", true);
            videoTag.setAttribute("type", `video/${extension}`);
            const content = document.querySelector(".content");
            content.innerHTML = "";
            content.appendChild(videoTag);
            videoTag.play();
        });

        
        let videoTag = document.createElement("VIDEO");
        videoTag.setAttribute("src", url);
        videoTag.setAttribute("controls", true);
        videoTag.setAttribute("type", `video/${extension}`);
        const content = document.querySelector(".content");
        content.innerHTML = "";
        content.appendChild(videoTag);
        videoTag.play();
    });
}

function loadImage(file) {
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.addEventListener("load", e => {
        let extension = getFileExtension(file);
        let img = new Blob([new Uint8Array(e.currentTarget.result)], {type: `image/${file}`});
        let url = URL.createObjectURL(img);

        let imageDiv = document.createElement("DIV");
        imageDiv.setAttribute("class", "image");
        imageDiv.setAttribute("data-file-name", file.name);
        imageDiv.setAttribute("data-url", url);
        imageDiv.textContent = file.name;
        let files = document.querySelector(".files");
        files.appendChild(imageDiv);

        const imageDOM = document.querySelector(".files .image:last-child");
        imageDOM.addEventListener("click", e => {
            let url = e.target.dataset.url;

            let imgDOM = `<img src="${url}">`;
            const content = document.querySelector(".content");
            content.innerHTML = imgDOM;
        });

        let imgDOM = `<img src="${url}">`;
        const content = document.querySelector(".content");
        content.innerHTML = imgDOM;
    });

}

function getFileExtension(file) {
    return file.name.split(".").pop();
}