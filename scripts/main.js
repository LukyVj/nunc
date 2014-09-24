$(document).ready(function(){

	setTimeout(function(){
		$('.main-view').addClass('ready')
	}, 1000)
	
	$.getScript("scripts/backgrounds.js");
	$.getScript("scripts/communicate.js");
	$.getScript("scripts/messages.js");

	$('.nunc-communication').fadeOut();


	function start(){
		var starter = $('#start-nunc');

		starter.on('click', function(){
			$('.nunc-hello').fadeOut();
			$('.nunc-communication').fadeIn();
		});

		setTimeout(function(){
			var roomName = $('.room-log').val();

			$('#messages').append('<iframe src="http://nunc-chat-server.herokuapp.com/" style="border:0;width:100%;height:100%;"></iframe>')
		},500)
	}

	function deploy(){
		start();
	}

	deploy()



});