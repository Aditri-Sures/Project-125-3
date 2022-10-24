 noseX=0;
 noseY=0;
 difference=0;
 leftWristX=0;
 rightWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);

    canvas=createCanvas(500,400);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}


function modelLoaded(){

console.log("model has loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        
       leftWristX=results[0].pose.leftWrist.x;
       rightWristX=results[0].pose.rightWrist.x;
       difference=floor(leftWristX-rightWristX);

    }
}



function draw(){
background("aqua");
document.getElementById("square_side").innerHTML="width and height will be = "+difference+"px";
fill("pink");
textSize(difference);
text('Aditri',50,400);
}

