var PubNub = require('pubnub');
var five = require("johnny-five");
var pixel = require("node-pixel");

//------------------
///// JOHNNY FIVE
//------------------
var opts = {};
opts.port = process.argv[2] || "";
 
console.log(opts);

var board = new five.Board(opts);
var strip = null;

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
        console.log("Strip ready, let's go");
    });
});

//------------------
///// PUBNUB  
//------------------

var pubnub = new PubNub({
    subscribeKey: "sub-c-027aacee-b1a8-11e6-a071-02ee2ddab7fe",
    publishKey: "pub-c-91ae968c-c67b-4c85-afda-bbf9cf78998a"
})

pubnub.subscribe({ channels: ['neopixel']  });
pubnub.addListener({
    message: function(m){
         switch(m.message){
             case 'off':
                 strip.color('#000');
                 console.log('fkjkjfdf');
                 break;
             case 'red':
                 strip.color('#f00');
                 console.log('rrrrrr');
                 break;
             case 'green':
                 strip.color('#0f0');
                 console.log('gggggg');
                 break;
             case 'blue':
                 strip.color('#00f');
                 console.log('bbbbbbbb');
                 break;
             default:
                 console.log('not off');
             };
                strip.show();
         }
});
