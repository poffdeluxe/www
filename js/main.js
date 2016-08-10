$(document).ready(function() {

	//Load up audio
	var audio = new Audio();
	audio.setAttribute('src', 'media/damn.wav');

  $('.portrait').click(function() {
		audio.currentTime = 0;
  	audio.play();
	});

	//Add animated class
	var fadeInArray = [$('.contact-group'), $('.description')];
	fadeInArray.forEach(function($elem) {
		$elem.addClass('animated fadeInUp')
	});
});
