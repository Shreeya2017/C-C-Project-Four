var revX=15;
var revY=15;
var x=200;
var y=0;
//var m=1;
//var n=1;

var x1=200;
var y1=0;

var x2=200;
var y2=0;

var x3=200;
var y3=0;

var x4=200;
var y4=0;

var x5=200;
var y5=0;

var sensorVal1;
var aiokey = "a99a5314a948456892e3147e9497e361";
var feedName = "distVal";



function setup() {
  createCanvas(400,250);
  //setInterval(askAIO,800);
}

function draw() {
  background(0);
  noStroke();
  fill(255,255,255);
  ellipse(x,y,sensorVal1,sensorVal1);
  
  fill(255,255,255,150);
  ellipse(x1+2,y1,22,22);
  
  fill(255,255,255,20);
  ellipse(x2+5,y2,50,50);
  
  fill(255,255,255,20);
  ellipse(x3+12,y3,70,70);
  
   fill(255,255,255,20);
  ellipse(x4+18,y4,100,100);
  
   fill(255,255,255,20);
  ellipse(x5+27,y5,120,120);
  
  if(x1,x2,x3,x4,x5,x>=width){
    //n=n+10;
    //=y+n;
    revX=random(-20);
    revY=3;
  }
  if (x1,x2,x3,x4,x5,x<=0) {
    //n=n-10;
    //y=y+n;
    revX=random(20);
    revY=-3;
  }
  if (y1,y2,y3,y4,y5,y>=height) {
    //m=m-10;
    //x=x-m;
    revX=-3;
    revY=random(-6);
  }
  if (y1,y2,y3,y4,y5,y<=0) {
    //m=m+10;
    //x=x+m;
    revX=3;
    revY=random(6);
  }
   if (x1,x2,x3,x4,x5,x>=width) {
     if (y1,y2,y3,y4,y5,y>=height) {
    revX=-5;
    revY=-5;
     }
   }
   if (x1,x2,x3,x4,x5,x<=0) {
     if (y1,y2,y3,y4,y5,y<=0) {
    revX=5;
    revY=5;
     }
   }
   
   if (x1,x2,x3,x4,x5,x>=width) {
     if (y1,y2,y3,y4,y5,y<=0) {
    revX=-5;
    revY=5;
     }}
     
   if (x1,x2,x3,x4,x5,x<=0) {
     if (y1,y2,y3,y4,y5,y>=height) {
    revX=5;
    revY=-5;
     }}
     
  x=x+revX;
  y=y+revY;
  x1=random(x,x-1)+revX;
  y1=random(y,y-1)+revY;
  x2=random(x,x-1)+revX;
  y2=random(y,y-1)+revY;
  x3=random(x,x-1)+revX;
  y3=random(y,y-1)+revY;
  x4=random(x,x-1)+revX;
  y4=random(y,y-1)+revY;
  x5=random(x,x-1)+revX;
  y5=random(y,y-1)+revY;
  
  
  function receivedData(data)
{

sensorVal1 = parseInt(data.value); 
println(sensorVal1);
}


  function askAIO()
{
  loadJSON("https://io.adafruit.com/api/feeds/"+feedName+"/data/last.json?x-aio-key="+aiokey, receivedData);
  
}


}