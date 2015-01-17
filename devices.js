Devices = {};

Devices.Launchpad = {};

Devices.Launchpad.triggers = [
  {
    name: 'buttonPress',
    humanName: 'On button press',
    arguments: ['Button x', 'Button y']
  }
];

Devices.Launchpad.actions = [
  {
    name: 'lightButton',
    humanName: 'Light up button',
    arguments: ['Color']
  }
];

module.exports = Devices;
