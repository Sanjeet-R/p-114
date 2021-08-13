noseX=0;
noseY=0;

function preload()
{
    clown_nose=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup()
{
    video=createCapture(VIDEO);
    video.size(300,300);
    canvas=createCanvas(300,300);
    canvas.center();
    video.hide();

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("poseNet is initiallized");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y+5;
    }
}
function draw()
{
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,30,30);
}
function takeSnapshot()
{
    save('ur_a_clown-yay.png');
}