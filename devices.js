Devices = {};

Devices.Launchpad = function(socket){
  this.colors = {
    red: 3,
    green: 48,
    orange: 23,
    yellow: 34
  };

  this.triggers = {
    buttonPress: {
      humanName: 'On button press',
      arguments: ['Button x', 'Button y'],
      bind: function(x, y, callback){
        socket.on('button:press', function(d){
          if(d.x === x && d.y === y){
            callback();
          }
        });
      }
    },
    anyButtonPress: {
      humanName: 'Any button press',
      arguments: [],
      bind: function(callback){
        socket.on('button:press', function(d){
          callback(d.x, d.y);
        });
      }
    }
  };

  this.actions = {
    lightButton: {
      humanName: 'Light up button',
      arguments: ['Button x', 'Button y', 'Color'],
      call: function(x, y, color){
        socket.emit('button:light', {x: x, y: y, color: color});
      }
    },
    unlightButton: {
      humanName: 'Turn off button',
      arguments: ['Button x', 'Button y'],
      call: function(x, y){
        socket.emit('button:off', {x: x, y: y});
      }
    },
    toggleButton: {
      humanName: 'Toggle button',
      arguments: ['Button x', 'Button y'],
      call: function(x, y, color){
        socket.emit('button:toggle', {x: x, y: y, color: color});
      }
    },
    lightAll: {
      humanName: 'Turn on all lights',
      arguments: ['Color'],
      call: function(color){
        socket.emit('button:light:all', {color: color});
      }
    }
  };

  return this;
};

module.exports = Devices;
