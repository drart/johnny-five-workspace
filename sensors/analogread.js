var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
 this.samplingInterval(10);
  // Create a new generic sensor instance for
  // a sensor connected to an analog (ADC) pin
  var sensor = new five.Sensor({
      pin: "A0",
      freq: 10
  });

  // When the sensor value changes, log the value
  sensor.on("change", function(value) {
    console.log( this.fscaleTo(0,1));
  });
});
