nosex=0;
nosey=0;
difference=0;
rightwristx=0;
leftwristx=0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function modelLoaded()
{
    console.log('PoseNet Is Intialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex = " +nosex+" nosey = "+nosey);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log("leftwristx = "+leftwristx+"rightwristx = "+rightwristx+"difference = "+difference);
    
    }
}

function draw()
{
    background("white");
    textSize(difference);
    document.getElementById("square_sides").innerHTML="size of font will be = "+difference+"px";
    fill("purple");
    text("Nethra",200,200);

}