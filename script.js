//your JS code here. If required.
function playAudio(audioId) {
	const audio = new Audio(`/sounds/${audioId}.mp3`);
	audio.play();
}

document.querySelectorAll(`.btn`).forEach(function (button) {
	button.addEventListener("click", function () {
		if (this.id === 'applause' || this.id === 'boo' || this.id === 'gasp' || this.id === 'tada' || this.id === 'victory' || this.id === 'wrong') {
			playAudio(this.id);
		} else if(this.classList.contains('stop')){
			document.querySelectorAll('audio').forEach(function(audio) {
                audio.pause();
                audio.currentTime = 0;
            });)
		}
	});
});