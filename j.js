function start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundclassify("https://teachablemachine.withgoogle.com/models/idsVTpib5/.json",modelclassify)

}

function modelclassify(){
classifier.classify(gotdata)}



function gotdata(error,result){
console.log(result)

if(result[0].label=="Dog Barking"){
var img=document.getElementById("img")
img.src="stray-dog-frodo-transformation-marko-duspara-fb.png"
document.getElementById("g").innerHTML="Detected Dog-"+result[0].confidence"
}

else if(result[0].label=="Cat Meowing"){
img.src="avatars-000600452151-38sfei-t500x500.jpg"
document.getElementById("q").innerHTML="Detected Cat-"+result[0].confidence"
}
}