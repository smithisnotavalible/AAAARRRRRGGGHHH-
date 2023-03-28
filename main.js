noseX = 0
noseY = 0
righteyeX = 0
righteyeY = 0
function preload() {
    nose = loadImage("https://i.postimg.cc/htHYM3g7/13147-200-removebg-preview.png");
    hat = loadImage("https://i.postimg.cc/tTZSQ35V/10757561-EA-checkers515-Wx515-H-removebg-preview.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(nose, noseX - 45, noseY - 75, 100, 100);
    image(hat, righteyeX - 65, righteyeY - 180, 160, 250);
}

function take_snapshot() {
   save('myFilterImage.png')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        righteyeX = results[0].pose.rightEye.x
        righteyeY = results[0].pose.rightEye.y
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}