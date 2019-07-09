Template.index.onCreated( function() {

});

Template.index.onRendered(function () {




});

function motion(event){
  //{input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }}
    var accIncGravX = event.accelerationIncludingGravity.x;
    var accIncGravY = event.accelerationIncludingGravity.y;
    var accIncGravZ = event.accelerationIncludingGravity.z;
    //var entry = JSON.stringify({ accIncGravX : accIncGravX, accIncGravY : accIncGravY, accIncGravZ : accIncGravZ})
    $("#accelerationData").empty();
    $("#accelerationData").prepend(
        accIncGravX + ", "
      + accIncGravY + ", "
      + accIncGravZ);
}

function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;
    // Do stuff with the new orientation data
    $("#deviceData").empty();
    $("#deviceData").prepend(
        alpha + ", "
      + beta + ", "
      + gamma);
}

function getTimestamp() {

  return moment().format('MMMM Do YYYY, h:mm:ssa');
}

Template.index.helpers({
  _id : function(){
    return window.navigator.userAgent;
  },
});


Template.index.events({
  'click #startBtn': function () {
    var datetime = getTimestamp();
    $("#consoleInfo").empty();

    if(window.DeviceMotionEvent){
      window.addEventListener("devicemotion", motion, false);
      $("#consoleInfo").prepend("<br>[" + datetime + "] DeviceMotionEvent started");
    }else{
      $("#consoleInfo").prepend("<br[>" + datetime + "] DeviceMotionEvent is not supported");
    }

    if(window.DeviceOrientationEvent){
      window.addEventListener("deviceorientation", handleOrientation, false);
      $("#consoleInfo").prepend("<br>[" + datetime + "] DeviceOrientationEvent started");
    }else{
      $("#consoleInfo").prepend("<br>[" + datetime + "] DeviceOrientationEvent is not supported");
    }
  },
  'click #stopBtn': function () {
    var datetime = getTimestamp();

    if(window.DeviceMotionEvent){
      window.removeEventListener("devicemotion", motion, false);
      $("#consoleInfo").prepend("<br>[" + datetime + "] DeviceMotionEvent stopped");
    }else{
      $("#consoleInfo").prepend("<br>[" + datetime + "] DeviceMotionEvent is not supported");
    }

    if(window.DeviceOrientationEvent){
      window.removeEventListener("deviceorientation", handleOrientation, false);
      $("#consoleInfo").prepend("<br>[" + datetime + "] DeviceOrientationEvent stopped");
    }else{
      $("#consoleInfo").prepend("<br>[" + datetime + "] DeviceOrientationEvent is not supported");
    }
  }
});

Template.index.onDestroyed(function () {

});
