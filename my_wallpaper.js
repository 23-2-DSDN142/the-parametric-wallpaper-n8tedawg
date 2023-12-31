//your parameter variables go here!
 let ballX = 157 // Controls the black ball itself
 let ballY = 120
 let hatX = 43 // Controls the purple hat he wears
 let hatY = 115
 let sparkleX = 93 // Controls the sparkles on the top right
 let sparkleY = 70
 let moustacheX = 23 // Controls the moustache
 let moustacheY = 130

 let drawsymbol = true// TRUE draws the symbol.FALSE turns this 'if statement' off
 let nofacialhair = false// TRUE removes the moustache. FALSE turns this 'if statement' off
 let casualeightball = false // TRUE removes the moustache, hat and sparkles. FALSE turns this 'if statement' off
 let casualdouble = false // TRUE makes two of them. FALSE turns this 'if statement' off
 let miniballs = false // TRUE makes multiple mini symbols. FALSE turns this 'if statement' off

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print (to remove the lines)

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 110;
  pWallpaper.grid_settings.cell_height = 250;
  pWallpaper.grid_settings.row_offset  = 130;
}

function wallpaper_background() {
 background(62, 60, 125); // Midnight sky blue colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 if (drawsymbol){ // This draws the symbol.
  Drawpurplehat(hatX,hatY);
  Draw8ball(ballX,ballY);
  DrawSparkles(sparkleX,sparkleY);
  DrawMoustache(moustacheX,moustacheY);
 }
 else{}

 if (casualeightball){ // This draws the symbol but without the moustache, hat or sparkles.
  rotate(-5);
  Draw8ball(ballX+10,ballY-25);
 }
 else{}

if (casualdouble){ // This draws the symbol without the moustache, hat or sparkles. This then draw the symbol twice.
  rotate(-5);
  Draw8ball(ballX-30,ballY+15); // Bottom left symbol
  rotate(-5);
  Draw8ball(ballX+50,ballY-65); // Top right symbol
 }
else{}

if (nofacialhair){ // This draws the symbol without the moustache.
  Drawpurplehat(hatX,hatY);
  Draw8ball(ballX,ballY);
  DrawSparkles(sparkleX,sparkleY);
}
else{}

if (miniballs){ // This draws the symbol at a smaller scale three times.
scale(0.5); //Top symbol
Drawpurplehat(hatX,hatY);
Draw8ball(ballX,ballY);
DrawSparkles(sparkleX,sparkleY);
DrawMoustache(moustacheX,moustacheY);

rotate(4) // Right symbol
Drawpurplehat(hatX+180,hatY+130);
Draw8ball(ballX+190,ballY+120);
DrawSparkles(sparkleX+190,sparkleY+120);
DrawMoustache(moustacheX+190,moustacheY+120);

rotate(8) // Bottom symbol
Drawpurplehat(hatX-15,hatY+200);
Draw8ball(ballX,ballY+200);
DrawSparkles(sparkleX,sparkleY+200);
DrawMoustache(moustacheX,moustacheY+200);
 }
else{}
}


function Drawpurplehat(hatX,hatY){ // This draws the purple magical hat.
  fill(152, 14, 176) // Purple magical hat
  strokeWeight(0);
  rotate(-10); // I was unsure on how to rotate my objects, so I looked at the pj5s.org reference website and this was how I got the rotate tool.
  triangle(hatX+25,hatY-10,hatX,hatY-65,hatX-50,hatY-50) // The hat is made up of two triangles to look like the top of the hat.
  triangle(hatX-20,hatY-40,hatX-30,hatY-5,hatX+20,hatY-10)
  fill(102, 13, 117)
  ellipse(hatX,hatY,100,40) // Brim of the hat 
}

 function Draw8ball(ballX,ballY){ // This draws the 8 ball.
  rotate(5); // Rotate the ball back
  fill(0,0,0); // Main black ball colour
  strokeWeight(0); // Determines the stroke of the shape
  ellipse(ballX,ballY,100,100);
 
  fill(252,252,252); // White circle inside the ball
  strokeWeight(0);
  ellipse(ballX+15,ballY,60,60);
 
  fill(252,252,252) // The white shine on the ball (top left of the ball)
  beginShape(); // I also was unsure on how to make smooth curves when one of my classmates recommended the bezier tool on the pj5s.org reference website. Suffice to say that it really helped me out.
  vertex (ballX,ballY-40);
  bezierVertex(ballX-17,ballY-35,ballX-32,ballY-15,ballX-42,ballY-5);
  bezierVertex(ballX-47,ballY-5,ballX-30,ballY-55,ballX,ballY-40);
  endShape();
 
  textSize(60); // TEXT the number 8
  fill(0,0,0)
  text("8",ballX,ballY+20); // My friend recommended me using the Text tool rather than having to make shapes out of the ellipse tool to create the 8.
 }

 function DrawSparkles(sparkleX,sparkleY){ // This draws the sparkles on the right side (the yellow diamonds)
  fill(248, 255, 51) // Sparkle
  quad(sparkleX,sparkleY,sparkleX+5,sparkleY+10,sparkleX,sparkleY+20,sparkleX-5,sparkleY+10) //top shine
  quad(sparkleX,sparkleY+25,sparkleX+5,sparkleY+35,sparkleX,sparkleY+45,sparkleX-5,sparkleY+35) //bottom shine
  quad(sparkleX+9,sparkleY+12,sparkleX+14,sparkleY+22,sparkleX+9,sparkleY+32,sparkleX+4,sparkleY+22) //right shine
  // I was stuck on how to draw a rectangle, but angled in a different way where it is stretched. I searched up on the pj5s.org reference website for some ideas and i came across the quad tool. This really benefited me.
}

function DrawMoustache(moustacheX,moustacheY){ // This draws the grey moustache on the ball's face.
  fill(115, 115, 115) // Moustache
  beginShape();
  vertex(moustacheX+25,moustacheY);
  bezierVertex(moustacheX+10,moustacheY-5,moustacheX,moustacheY,moustacheX-5,moustacheY+25)
  bezierVertex(moustacheX+55,moustacheY-20,moustacheX+50,moustacheY+5,moustacheX+55,moustacheY+25)
  endShape();
 }

