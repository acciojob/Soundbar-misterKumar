//your JS code here. If required.
var section = document.getElementById("buttons")
// alert(section)
section.addEventListener('click', function(e) {
    if(e.target.className === 'btn') {
        var soundName = `./sounds/${e.target.innerHTML}.mp3`;		
		const audio = new Audio(soundName);
		audio.play();
		// alert(soundName)
		
    }
	// alert(e.target.className)
});