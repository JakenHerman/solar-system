//speeds
var sMercury=365.26/87.96;
var sVenus=365.26/224.68;
var sEarth=1;
var sMars=1/686.98;
var sJupiter=1/11.862;
var sSaturn=1/29.456;
var sUranus=1/84.04;
var sNeptune=1/164.81;
var sPluto=1/247.7;
//sizes
var zMercury=5;
var zVenus=10;
var zEarth=10;
var zMars=7;
var zJupiter=20;
var zSaturn=15;
var zUranus=10;
var zNeptune=10;
var zPluto=5;
//Orbits
var mOrbit=1;
var vOrbit=2;
var eOrbit=3;
var marsOrbit=4;
var jOrbit=5;
var sOrbit=6;
var uOrbit=7;
var nOrbit=8;
var pOrbit=9;
//Orbit Shapes
var bSize = 50;
var incX = 30;
var incY = 20;
var drawPlanet = function(time,speed,orbit,size){var degree=(time*speed)%360;
    var radX=(bSize+incX*pow(orbit,1.1))/2;
    var radY=(bSize+incY*pow(orbit,1.1))/2;
    var positionX=radX*cos(degree);
    var positionY=radY*sin(degree);
    ellipse(positionX,positionY,size,size);
    //Saturn's Ring
    if (orbit===sOrbit){
        ellipse(positionX,positionY,1.5*size,0.25*size);}};
var drawSolarSystem=function(time){
    background(0,0,0);
    //sun
    noStroke();
    fill(255,255,0);
    ellipse(0,0,bSize,bSize);
     //draw orbits
    noFill();
    stroke(92,92,92);
    strokeWeight(1);
    for (var i=1;i<=9;i+=1){var diameterX=bSize+incX*pow(i,1.1);
        var diameterY=bSize+incY*pow(i,1.1);
        ellipse(0,0,diameterX,diameterY);}
    //Mercury
    noStroke();
    fill(219,217,212);
    drawPlanet(time,sMercury,mOrbit,zMercury);
    //Venus
    fill(205,212,106);
    drawPlanet(time,sVenus,vOrbit,zVenus);
    //Earth
     fill(36,136,212);
    drawPlanet(time,sEarth,eOrbit,zEarth);
    //Mars
    fill(255,0,0);
    drawPlanet(time,sMars,marsOrbit,zMars);
    //Jupiter
    fill(173,107,37);
    drawPlanet(time,sJupiter,jOrbit,zJupiter);
    //Saturn
    fill(163,131,77);
    drawPlanet(time,sSaturn,sOrbit,zSaturn);
    //Uranus
    fill(113,222,230);
    drawPlanet(time,sUranus,uOrbit,zUranus);
    //Neptune
    fill(206,89,235);
    drawPlanet(time,sNeptune,nOrbit,zNeptune);
    //Pluto
    fill(240,57,130);
    drawPlanet(time,sPluto,pOrbit,zPluto);};
var speed=1;//Change the speed and see what happens!  
var currentTime=0;
var draw=function(){
    resetMatrix();
    translate(200,200);
    drawSolarSystem(currentTime);
    currentTime+=speed;};