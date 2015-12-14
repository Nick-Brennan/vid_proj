$(function(){
  var errorCallback = function(e) {
    console.log('Reeeejected!', e);
  };

  exports = window;

  exports.URL = window.URL || window.webkitURL;

  exports.requestAnimationFrame = window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame || window.oRequestAnimationFrame;

  exports.cancelAnimationFrame = window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame ||
      window.msCancelAnimationFrame || window.oCancelAnimationFrame;

  navigator.getUserMedia = navigator.getUserMedia ||
      navigator.webkitGetUserMedia || navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;

  navigator.getUserMedia({video: true, audio: false}, function(localMediaStream) {
    var video = document.querySelector("video");
    video.src = window.URL.createObjectURL(localMediaStream);

    video.onloadedmetadata = function(e) {
      console.log(e);
    };
  }, errorCallback);
});