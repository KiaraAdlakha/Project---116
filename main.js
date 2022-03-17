noseX=0;
noseY=0;
function preload()
{

img=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}
function setup()
{
canvas=createCanvas(800,500);
canvas.position(800,200);
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose", got_poses)
}
function draw()
{
image(video,0,0,800,500);
image(img,noseX,noseY,60,20);
}
function modelLoaded()
{
    console.log("PoseNet is Loaded");
}
function got_poses(result)
{
if (result.length > 0)
{
    console.log(result);
    console.log("nose x position ="+result[0].pose.nose.x);
    console.log("nose y position ="+result[0].pose.nose.y);
    noseX=result[0].pose.nose.x-15;
    noseY=result[0].pose.nose.y+5;
}
}