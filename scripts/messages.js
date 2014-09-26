$('#start-nunc, .join').on('click', function(){
	var  logName = $('.room-log').attr('value');
	console.log('Log key : > '+logName+' <')
            // Set RTC options.
            var rtcOpts = {
            	room: ''+logName+'',
            	signaller: '//switchboard.rtc.io'
            };
// call RTC module
var rtc = RTC(rtcOpts);
// A div element to show our local video stream
var localVideo = document.getElementById('l-video');
// A div element to show our remote video streams
var remoteVideo = document.getElementById('r-video');
// A contenteditable element to show our messages
var messageWindow = document.getElementById('messages');

// Bind to events happening on the data channel
function bindDataChannelEvents(id, channel, attributes, connection) {

  // Receive message
  channel.onmessage = function (evt) {
  	messageWindow.innerHTML = evt.data;
  };

  // Send message
  messageWindow.onkeyup = function () {
  	channel.send(this.innerHTML);
  };
}

// Start working with the established session
function init(session) {
	session.createDataChannel('chat');
	session.on('channel:opened:chat', bindDataChannelEvents);
}

// Display local and remote video streams
localVideo.appendChild(rtc.local);
remoteVideo.appendChild(rtc.remote);

// Detect when RTC has established a session
rtc.on('ready', init);
});