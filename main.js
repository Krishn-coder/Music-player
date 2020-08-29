song1="";
song2="";
song1status="";
song2status="";
leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;
function preload(){
    song1=loadSound="music.mp3";
    song2=loaedSound="music2.mp3";
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,Modeloaded);
    poseNet.on('pose',gotPoses)
}
function Modeloaded(){
console.log("Model loaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("Left wrist x="+leftWristX+"left wrist  y="+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("right wrist x="+rightWristX+"right wrist y="+righttWristY);
    }
}
function draw(){
    image(video,0,0,600,500);
}
