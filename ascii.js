var globalFrame = 0;
var frames = [];
var timer = null;
var timerSpeed = 250;

function eventsLoader() {
    let start = document.getElementById("start");
    start.onclick = startGame;
    let stop = document.getElementById("stop");
    stop.onclick = stopGame;
    let turbo = document.getElementById("turbo");
    turbo.onchange = speedIncrement;
    let fonts = document.getElementById("fontsize");
    fonts.onchange = changeSize;
}

function startGame() {
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    stop.disabled = false;
    let animation = document.getElementById("animation");
    animation.onclick = animationsFunction;
}

function stopGame() {
    let stop = document.getElementById("stop");
    var textArea = document.getElementById("text-area");
    frames = ["", "", ""];
    console.log(timer);
    clearInterval(timer);
    stop.disabled = true;
}


function animationsFunction() {
    let selectedAnimation = document.getElementById("animation").value;
    frames = ANIMATIONS[selectedAnimation].split('=====\n');
    timer = setInterval(displayFrames, timerSpeed, frames);
}

function displayFrames(framesArray) {
    var textArea = document.getElementById("text-area");
    textArea.value = frames[globalFrame];
    globalFrame = incrementI();
}

function incrementI() {
    if (globalFrame >= frames.length - 1) { globalFrame = 0; }
    else { globalFrame++; }
    return globalFrame;
}

function speedIncrement() {
    console.log(timerSpeed);
    if (timerSpeed == 250) {
        timerSpeed = 50;
        animationsFunction();
    }
    else {
        timerSpeed = 250;
        animationsFunction();
    }
}

function changeSize() {
    var textArea = document.getElementById("text-area");
    let selectectedSize = document.getElementById("fontsize").value;
    switch (selectectedSize) {
        case "Tiny":
            textArea.style.fontSize = "7pt";
        case "Small":
            textArea.style.fontSize = "10pt";
        case "Medium":
            textArea.style.fontSize = "12pt";
        case "Large":
            textArea.style.fontSize = "16pt";
        case "Extra Large":
            textArea.style.fontSize = "24pt";
        case "XXL":
            textArea.style.fontSize = "32pt";

    }
}

function makeSizer(size) {
    return function () {
        document.body.style.fontSize = size + "px";
    };
}


window.onload = eventsLoader;
