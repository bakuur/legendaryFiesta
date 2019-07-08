Template.index.onCreated( function() {

});

Template.index.onRendered(function () {

  //create listeners for mag and acc
  if(window.DeviceMotionEvent){
    window.addEventListener("devicemotion", motion, false);
  }else{
    $("#accelerationData").replaceWith("DeviceMotionEvent is not supported");
  }

  if(window.DeviceOrientationEvent){
    window.addEventListener("deviceorientation", handleOrientation, true);
  }else{
    $("#deviceData").replaceWith("DeviceOrientationEvent is not supported");
  }

  //create listerner for touch
  var myElement = document.getElementById('myElement');
  // create a simple instance
  var mc = new Hammer(myElement);
  // listen to events...
  mc.on("press", function(ev) {
    $("#consoleInfo").append("<br>"+ev.type +" gesture detected.");
  });

  const options = { frequency: 60, referenceFrame: 'device' };
  const sensor = new AbsoluteOrientationSensor(options);
  Promise.all([navigator.permissions.query({ name: "accelerometer" }),
  navigator.permissions.query({ name: "magnetometer" }),
  navigator.permissions.query({ name: "gyroscope" })])
  .then(results => {
    if (results.every(result => result.state === "granted")) {

      sensor.addEventListener('reading', () => {
        // model is a Three.js object instantiated elsewhere.
        $("#consoleInfo").append(sensor);
      });
      sensor.addEventListener('error', error => {
        if (event.error.name == 'NotReadableError') {
          console.log("Sensor is not available.");
        }
      });
      sensor.start();

    } else {
      console.log("No permissions to use AbsoluteOrientationSensor.");
    }
  });
});

function motion(event){
    $("#accelerationData").replaceWith("Accelerometer: "
      + event.accelerationIncludingGravity.x + ", "
      + event.accelerationIncludingGravity.y + ", "
      + event.accelerationIncludingGravity.z);
}

function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;
    // Do stuff with the new orientation data
    $("#deviceData").replaceWith("<br>Orientation: "
      + absolute + ", "
      + alpha + ", "
      + beta + ", "
      + gamma);
}
Template.index.helpers({
  _id : function(){
    return id();
  },
});


Template.index.events({
  'change #testDropDown': function (event, template) {

  }
});

Template.index.onDestroyed(function () {

});
