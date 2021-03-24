 Webcam.set({
     width: 310,
     height: 300,
     image_format: 'png',
     png_quality: 90,
     constraints: {
         facingMode: "environment"
     }
 });
 Camera = document.getElementById("Camera");
 Webcam.attach("#Camera");

 function Capture_Img() {
     Webcam.snap(function (data_uri) {
         document.getElementById("Snapshot").innerHTML = '<img id = "Captured_Img" src ="' + data_uri + '"/>';
     });
 }
 console.log('ml5 version', ml5.version);
 classifier = ml5.imageClassifier('MobileNet', modelLoaded);

 function modelLoaded() {
     console.log("model loaded");
 }

 function Identify_Img() {
     Img = document.getElementById("Captured_Img");
     classifier.classify(Img, gotResult);
 }

 function gotResult(error, results) {
     if (error) {
console.error(error);
     }
     else{
         console.log(results);
         document.getElementById("Answers").innerHTML = results[0].label;
     }
 }