//---------------------
// PubNub 
//---------------------
var pubnub = new PubNub({
    subscribeKey: "sub-c-027aacee-b1a8-11e6-a071-02ee2ddab7fe",
    publishKey: "pub-c-91ae968c-c67b-4c85-afda-bbf9cf78998a"
});

pubnub.subscribe({ channels: ['arduino']  });

pubnub.addListener({
    message: function(m){
        console.log(m.message);
        switch (m.message){
            case 'up':
                ellipse(100,100, 100, 100);
                break;
            case 'down':
                ellipse(0,0, 100, 100);
                break;
            case 'hold':
                rect(100,100,100,100);
                break;
            default:
                break;
        }
    }
});

//---------------------
// P5JS
//---------------------
function setup(){
   createCanvas(800,800);
}

function draw(){
    background(255,20);
    // drawing happens from pubnub
}
