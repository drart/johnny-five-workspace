var five = require("johnny-five");
var pixel = require("node-pixel");

var opts = {};
opts.port = process.argv[2] || "";

var board = new five.Board(opts);
var strip = null;

var fps = 40; // how many frames per second do you want to try?

board.on("ready", function() {

    console.log("Board ready, lets add light");

    strip = new pixel.Strip({
        data: 6,
        length: 40,
        color_order: pixel.COLOR_ORDER.GRB,
        board: this,
        controller: "FIRMATA",
    });



    strip.on("ready", function() {

        for (var i = 0; i < strip.length; i++){
            var x  = Math.random();
            if (x < 0.3){
                strip.pixel(i).color([10,0,0]);
            }else if (x > 0.6){
                strip.pixel(i).color([0,10,0]);
            }else{
                strip.pixel(i).color([0,0,10]);
            }
        }

        console.log("Strip ready, let's go");

        var blinker = setInterval(function() {

            strip.shift(1, pixel.SHIFT_FORWARD, true);
            strip.show();


        }, 1000/fps);
    });
});
