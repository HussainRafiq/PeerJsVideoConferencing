

var peer = new Peer();

   function Call(call) {
        call.on('stream', function (remoteStream) {
            console.log('set thier');
            //$('#call').hide();
            //$('#oppvideo').show();
            document.getElementById("oppvideo").srcObject=remoteStream;
            console.log('yolo');
        });
    }


peer.on('open', function(id){
  console.log('My peer ID is: ' + id);
    $('#uid').text(id);
          ;});



var constraints = { audio: true, video: true };
let captureStream = null;


navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
                window.localStream = stream;
                document.getElementById("mevideo").srcObject = stream; 
                peer.on('call', function (call) {
                    call.answer(stream); // Answer the call with an A/V stream.
                    Call(call);
                });});

                function myFunction2() {
                var x = document.getElementById("myText2").value;
                to=x;

                var call=peer.call(to,window.localStream);
                Call(call);
                }
