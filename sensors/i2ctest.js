var five = require("johnny-five");
var board = new five.Board();

var zxsensor = {}

board.on("ready", function() {
    this.i2cConfig();
    setInterval(poll, 50)
});

function poll(){
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
    
   if (zxsensor.g !== 0)
       console.log('GESTURE!!');
    else 
        console.log(zxsensor);
}