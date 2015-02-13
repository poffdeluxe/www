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

	//Set-up last.fm
	var lastfm = new LastFM({
		apiKey    : 'cb1718d214061dee6228712d03f8e7e7',
		apiSecret : '4561d99167199b8ebd932db5121c7c3e'
	});
	lastfm.user.getRecentTracks({
		user: 'poffdeluxe',
		limit: 1
	}, {
		success: function(data) {
			var recentTracks = data.recenttracks.track;
			if(recentTracks.length > 0) {
				var track = recentTracks[0];

				if(!track['@attr']) {
					return;
				}

				if(!track['@attr']['nowplaying']) {
					return;
				}

				// If we get here, we're scrobblin' rn
				var artistName = track.artist['#text'];
				var trackName = track.name;

				var $music = $('#now-playing');
				var $musicTitle = $music.find('#music-title');

				$musicTitle.text(trackName + ' by ' + artistName);
				$music.fadeIn();
			}
		},
		error: function(code, message) {
			console.log("Couldn't load Last.fm");
		}
	});

});
