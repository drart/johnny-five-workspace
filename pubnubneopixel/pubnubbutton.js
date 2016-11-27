////http://johnny-five.io/examples/button/
var PubNub = require('pubnub');
var five = require("johnny-five"),
  board, button;

board = new five.Board();

board.on("ready", function() {

  // Create a new `button` hardware instance.
  // This example allows the button module to
  // create a completely default instance
  button = new five.Button(2);

  // Inject the `button` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    button: button
  });

  // Button Event API

  // "down" the button is pressed
  button.on("down", function() {
    pubnub.publish({channel:'arduino', message:'down'});  
    console.log("down");
  });

  // "hold" the button is pressed for specified time.
  //        defaults to 500ms (1/2 second)
  //        set
  button.on("hold", function() {
    console.log("hold");
    pubnub.publish({channel:'arduino', message:'hold'});  

  });

  // "up" the button is released
  button.on("up", function() {
    pubnub.publish({channel:'arduino', message:'up'});  
    console.log("up");
  });
    
    
    setInterval(function(){
            pubnub.publish({channel:'arduino', message:'up'});  
    }, 1000);
});



//------------------
///// PUBNUB  
//------------------

var pubnub = new PubNub({
    subscribeKey: "sub-c-027aacee-b1a8-11e6-a071-02ee2ddab7fe",
    publishKey: "pub-c-91ae968c-c67b-4c85-afda-bbf9cf78998a"
})
