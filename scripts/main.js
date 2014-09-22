$(document).ready(function(){

	$('.container.main-view').fadeIn();
	
	$.getScript("scripts/backgrounds.js");
	$.getScript("scripts/communicate.js");

	$('.nunc-communication').fadeOut();


	function start(){
		var starter = $('#start-nunc');

		starter.on('click', function(){
			$('.nunc-hello').fadeOut();
			$('.nunc-communication').fadeIn();
		});
	}

	function deploy(){
		start();
	}

	deploy()



});

