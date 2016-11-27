var PubNub = require('pubnub');

var pubnub = new PubNub({
    subscribeKey: "sub-c-027aacee-b1a8-11e6-a071-02ee2ddab7fe",
    publishKey: "pub-c-91ae968c-c67b-4c85-afda-bbf9cf78998a"
})

pubnub.subscribe({ channels: ['neopixel']  });
pubnub.addListener({
    message: function(m){
         switch(m.message){
             case 'off':
                 console.log('fkjkjfdf');
                 break;
             case 'red':
                 console.log('rrrrrr');
                 break;
             case 'green':
                 console.log('gggggg');
                 break;
             case 'blue':
                 console.log('bbbbbbbb');
                 break;
             default:
                 console.log('not off');
             };
         }
});
