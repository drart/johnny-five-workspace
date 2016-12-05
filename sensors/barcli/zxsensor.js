var Barcli = require("barcli");
var five = require("johnny-five");
var board = new five.Board();

var zxsensor = {}

board.on("ready", function() {

    var x = new Barcli({ label: "x", range: [0, 255] });
    var z = new Barcli({ label: "z", range: [0, 255] });

    this.i2cConfig();

    setInterval(function(){

        board.i2cReadOnce(0x10, 0x08, 1, function(data){
            zxsensor.x = data[0];
        });
        board.i2cReadOnce(0x10, 0x0a, 1, function(data){
            zxsensor.z = data[0];
        });
        board.i2cReadOnce(0x10, 0x04, 1, function(data){
            zxsensor.g = data[0];
        });
        board.i2cReadOnce(0x10, 0x05,1, function(data){
            zxsensor.gs = data[0];
        });
        
    },50);
});
