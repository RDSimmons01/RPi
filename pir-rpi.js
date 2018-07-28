const Sensor = require('pi-pir-sensor');
const sensor = new Sensor({
    // pin number must be specified
    pin: 11,

    // loop time to check PIR sensor, defaults to 1.5 seconds
    loop: 1500
});

sensor.on('movement', function () {
    // who's there?
});

sensor.start();
