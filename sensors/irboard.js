var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    this.samplingInterval(10);

    var sensor1 = new five.Sensor({
        pin: "A0",
        freq: 10
    });

    sensor1.on("change", function(value) {
        //console.log( this.fscaleTo(0,1));
    });

    var sensor2 = new five.Sensor({
        pin: "A1",
        freq: 10
    });

    sensor2.on("change", function(value) {
        //console.log( this.fscaleTo(0,1));
    });

    var sensor3 = new five.Sensor({
        pin: "A2",
        freq: 10
    });

    sensor3.on("change", function(value) {
        //console.log( this.fscaleTo(0,1));
    });

    var sensor4 = new five.Sensor({
        pin: "A3",
        freq: 10
    });

    sensor4.on("change", function(value) {
        //console.log( this.fscaleTo(0,1));
    });


    var button = new five.Sensor({
        pin: "A4",
        freq: 10
    });

    button.on("change", function(value) {
        console.log( this.fscaleTo(0,1));
    });


    var tiltswitch = new five.Sensor({
        pin: "A5",
        freq: 10
    });

    tiltswitch.on("change", function(value) {
        console.log( this.fscaleTo(0,1));
    });



});
