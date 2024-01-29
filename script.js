//your JS code here. If required.

const audioElement = document.createElement("audio");

function playSound(soundFile) {
    audioElement.src = `./sounds/${soundFile}`;
    audioElement.play();
}

function stopSound() {
    audioElement.pause();
}