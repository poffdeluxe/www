$(document).ready(function() {

	//Load up audio
	var audio = new Audio();
	audio.setAttribute('src', 'damn.wav');

    $('.portrait').click(function() {
    	audio.currentTime = 0;
    	audio.play();
	});
});