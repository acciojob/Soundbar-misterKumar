//your JS code here. If required.
const audio = document.createElement("audio");
function playAudio(btnRef){
	let currentBtnId = btnRef.id;
	switch(currentBtnId){
			case "applause":
			console.log("applauseBtnClicked");
			audio.src = "./sounds/applause.mp4";
			audio.play();
			break;
			
			case "boo":
			audio.src = "./sounds/boo.mp4";
			audio.play();
			break;
			
			case "gasp":
			audio.src = "./sounds/gasp.mp4";
			audio.play();
			break;
			
			case "tada":
			audio.src = "./sounds/tada.mp4";
			audio.play();
			break;
			
			case "victory":
			audio.src = "./sounds/victory.mp4";
			audio.play();
			break;
			
			case "wrong":
			audio.src = "./sounds/wrong.mp4";
			audio.play();
			break;
			
			case "stop":
			audio.pause();
			break;
	}
}