socket = io();

socket.on('hello', function(){
  console.log('Socket is ready!');
  socket.on('button:press', function(data){
    console.log('ayy lmao');
    $('audio')[0].currentTime = 0;
    $('audio')[0].play();
  });
});
