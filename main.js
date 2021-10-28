//https://teachablemachine.withgoogle.com/models/3hU29Kpid/
function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3hU29Kpid/model.json',modelReady)
    }
    function modelReady(){
    console.log("model loaded");
    classifier.classify(gotResults)
    }
    function gotResults(error,results){
    console.log("got result")
    if (error) {
        console.error(error)
        } else {
        console.log(results)
        random_number_r=Math.floor(Math.random()*255) + 1;
        random_number_g=Math.floor(Math.random()*255) + 1;
        random_number_b=Math.floor(Math.random()*255) + 1;
        document.getElementById("hear").innerHTML="I can hear :" + results[0].label;
        document.getElementById("hear").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
                
        img1=document.getElementById("animal");

        if(results[0].label=="Meowing"){
        img1.src="cat.png";
        }
        else if(results[0].label=="Barking"){
            img1.src="dog.png";
        }
        else if(results[0].label=="Mooing"){
            img1.src="cow.png";
        }
        else{
            img1.src="lion.jpg";
        }
        }
        }
        
    