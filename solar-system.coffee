#speeds
sMercury = 365.26 / 87.96
sVenus = 365.26 / 224.68
sEarth = 1
sMars = 1 / 686.98
sJupiter = 1 / 11.862
sSaturn = 1 / 29.456
sUranus = 1 / 84.04
sNeptune = 1 / 164.81
sPluto = 1 / 247.7

#sizes
zMercury = 5
zVenus = 10
zEarth = 10
zMars = 7
zJupiter = 20
zSaturn = 15
zUranus = 10
zNeptune = 10
zPluto = 5

#Orbits
mOrbit = 1
vOrbit = 2
eOrbit = 3
marsOrbit = 4
jOrbit = 5
sOrbit = 6
uOrbit = 7
nOrbit = 8
pOrbit = 9

#Orbit Shapes
bSize = 50
incX = 30
incY = 20
drawPlanet = (time, speed, orbit, size) ->
  degree = (time * speed) % 360
  radX = (bSize + incX * pow(orbit, 1.1)) / 2
  radY = (bSize + incY * pow(orbit, 1.1)) / 2
  positionX = radX * cos(degree)
  positionY = radY * sin(degree)
  ellipse positionX, positionY, size, size
  
  #Saturn's Ring
  ellipse positionX, positionY, 1.5 * size, 0.25 * size  if orbit is sOrbit
  return

drawSolarSystem = (time) ->
  background 0, 0, 0
  
  #sun
  noStroke()
  fill 255, 255, 0
  ellipse 0, 0, bSize, bSize
  
  #draw orbits
  noFill()
  stroke 92, 92, 92
  strokeWeight 1
  i = 1

  while i <= 9
    diameterX = bSize + incX * pow(i, 1.1)
    diameterY = bSize + incY * pow(i, 1.1)
    ellipse 0, 0, diameterX, diameterY
    i += 1
  
  #Mercury
  noStroke()
  fill 219, 217, 212
  drawPlanet time, sMercury, mOrbit, zMercury
  
  #Venus
  fill 205, 212, 106
  drawPlanet time, sVenus, vOrbit, zVenus
  
  #Earth
  fill 36, 136, 212
  drawPlanet time, sEarth, eOrbit, zEarth
  
  #Mars
  fill 255, 0, 0
  drawPlanet time, sMars, marsOrbit, zMars
  
  #Jupiter
  fill 173, 107, 37
  drawPlanet time, sJupiter, jOrbit, zJupiter
  
  #Saturn
  fill 163, 131, 77
  drawPlanet time, sSaturn, sOrbit, zSaturn
  
  #Uranus
  fill 113, 222, 230
  drawPlanet time, sUranus, uOrbit, zUranus
  
  #Neptune
  fill 206, 89, 235
  drawPlanet time, sNeptune, nOrbit, zNeptune
  
  #Pluto
  fill 240, 57, 130
  drawPlanet time, sPluto, pOrbit, zPluto
  return

speed = 1 #Change the speed and see what happens!
currentTime = 0
draw = ->
  resetMatrix()
  translate 200, 200
  drawSolarSystem currentTime
  currentTime += speed
  return