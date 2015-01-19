socket = io();

socket.on('hello', function(){
  console.log('Socket is ready!');

  socket.on('launchpad:connect', function(d){
    $('[data-device-id="launchpad"]').text("CONNECTED");
  });

  socket.on('launchpad:disconnect', function(d){
    $('[data-device-id="launchpad"]').text("DISCONNECTED");
  });

  socket.on('button:press', function(d){
    $('audio')[0].currentTime = 0;
    $('audio')[0].play();
  })
});
