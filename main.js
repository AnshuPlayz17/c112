https://teachablemachine.withgoogle.com/models/mLgaUyi5B/

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});

camera=document.getElementById("camera")

Webcam.attach("#camera")

function TakeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="capturedimage">'
    });
}

console.log(ml5.version)

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mLgaUyi5B/model.json',modelLoaded)

function modelLoaded(){
    console.log("model is loaded")
}

function Predict(){
    img=document.getElementById("capturedimage");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("handGesture").innerHTML=results[0].label
        if(results[0].label=="Amazing"){
            document.getElementById("gesture").innerHTML="&#128076"
        }
        if(results[0].label=="Thumbs Up"){
            document.getElementById("gesture").innerHTML="&#128077"
        }
        if(results[0].label=="Victory"){
            document.getElementById("gesture").innerHTML="&#9996"
        }
    }
}