var five = require("johnny-five");
var board = new five.Board();

var motor;

board.on("ready", function() {

  // Create a new generic sensor instance for
  // a sensor connected to an analog (ADC) pin
  var sensor = new five.Sensor("A0");

  // When the sensor value changes, log the value
  sensor.on("change", function(value) {
    console.log(value);
  });

  var buttons = new five.Buttons({
          pins: [2, 3, 4, 5, 6],
          invert: true,
        });

  buttons.on("press", function(button) {
    console.log("Pressed: ", button.pin);
    motor.start();
  });

  buttons.on("release", function(button) {
    console.log("Released: ", button.pin);
    motor.stop();
  });

  motor = new five.Motor({
          pin: 3
    });
});
