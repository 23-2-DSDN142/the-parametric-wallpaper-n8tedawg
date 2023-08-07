//your parameter variables go here!
 let ballX = 90 // controls the black ball itself
 let ballY = 125 
 let hatX = 75 // controls the purple hat he wears
 let hatY = 95
 let sparkleX = 150 // controls the sparkles on the top right
 let sparkleY = 50
 let moustacheX = 80 // controls the moustache
 let moustacheY = 125

 let drawsymbol = true // TRUE draws the symbol.FALSE turns this 'if statement' off
 let nofacialhair = false// TRUE removes the moustache. FALSE turns this 'if statement' off
 let casualeightball = false // TRUE removes the moustache, hat and sparkles. FALSE turns this 'if statement' off
 let casualdouble = false // TRUE makes two of them. FALSE turns this 'if statement' off
 let miniballs = false // TRUE makes multiple mini symbols. FALSE turns this 'if statement' off

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  //pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(true); //set this to false when you're ready to print (to remove the lines)

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
 //background(65, 173, 38); //pool table colour
 //background(55, 59, 56); //grey colour
 background(62, 60, 125); //midnight sky blue
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 //Draw8ball(55,55);
 //Draw8ball(145,145);

 if (drawsymbol){
  Drawpurplehat(hatX,hatY);
  Draw8ball(ballX,ballY);
  DrawSparkles(sparkleX,sparkleY);
  DrawMoustache(moustacheX,moustacheY);
 }
 else{}

 if (casualeightball){
  rotate(-5);
  Draw8ball(ballX+10,ballY-25);
 }
 else{}

if (casualdouble){
  rotate(-5);
  Draw8ball(ballX-30,ballY+15); //bottom left
  rotate(-5);
  Draw8ball(ballX+50,ballY-65); //top right
 }
else{}

if (nofacialhair){
  Drawpurplehat(hatX,hatY);
  Draw8ball(ballX,ballY);
  DrawSparkles(sparkleX,sparkleY);
}
else{}

if (miniballs){
scale(0.5); //top left ball
Drawpurplehat(hatX,hatY);
Draw8ball(ballX,ballY);
DrawSparkles(sparkleX,sparkleY);
DrawMoustache(moustacheX,moustacheY);

rotate(4) // right side ball
Drawpurplehat(hatX+180,hatY+130);
Draw8ball(ballX+190,ballY+120);
DrawSparkles(sparkleX+190,sparkleY+120);
DrawMoustache(moustacheX+190,moustacheY+120);

rotate(8) // bottom left ball
Drawpurplehat(hatX-15,hatY+200);
Draw8ball(ballX,ballY+200);
DrawSparkles(sparkleX,sparkleY+200);
DrawMoustache(moustacheX,moustacheY+200);
 }
else{}
}

function Drawpurplehat(hatX,hatY){//hatX,hatY){

  fill(152, 14, 176)//purple magical hat
  strokeWeight(0);
  rotate(-10); //rotate the hat and the ball
  triangle(hatX+25,hatY-10,hatX,hatY-65,hatX-50,hatY-50)
  triangle(hatX-20,hatY-40,hatX-30,hatY-5,hatX+20,hatY-10)
  fill(102, 13, 117)
  //fill(133, 14, 153)
  ellipse(hatX,hatY,100,40)//brim of the hat 
}

 function Draw8ball(ballX,ballY){
  let shineX = 83
  let shineY = 120
  let hatX = 80//80
  let hatY = 90//90
 
  //line(100,0,100,200) //testlines
  //line(0,100,200,100)
 
  rotate(5); //rotate the ball back
  fill(0,0,0); //main black ball
  strokeWeight(0);//determines the stroke of the shape
  ellipse(ballX,ballY,100,100); // draws a circle 100 pixels accross at location 100 pixels accross and 100 pixels down
 
  fill(252,252,252); //white circle inside
  strokeWeight(0);
  ellipse(ballX+15,ballY,60,60);
 
  //fill(152, 14, 176); //magical triangle
  //triangle(insidetriangleX+4,insidetriangleY,insidetriangleX+50,insidetriangleY+5,insidetriangleX+25,insidetriangleY+49)
 
  fill(252,252,252) // the white shine on the ball
  beginShape();
  vertex (ballX,ballY-40);//95,60 original 
  bezierVertex(ballX-17,ballY-35,ballX-32,ballY-15,ballX-42,ballY-5);
  bezierVertex(ballX-47,ballY-5,ballX-30,ballY-55,ballX,ballY-40); //70,40
  endShape();
 
  textSize(60); //TEXT the number 8
  fill(0,0,0)
  text("8",ballX,ballY+20); //20,71
 
  //textSize(13); //TEXT try again
  //fill(0,0,0)
  //text("try",insidetriangleX+19,insidetriangleY+13)
  //textSize(10);
  //text("again",insidetriangleX+14,insidetriangleY+23)
 }

 function DrawSparkles(sparkleX,sparkleY){
  fill(248, 255, 51)//sparkle
  quad(sparkleX,sparkleY,sparkleX+5,sparkleY+10,sparkleX,sparkleY+20,sparkleX-5,sparkleY+10) //top shine
  quad(sparkleX,sparkleY+25,sparkleX+5,sparkleY+35,sparkleX,sparkleY+45,sparkleX-5,sparkleY+35) //bottom shine
  quad(sparkleX+9,sparkleY+12,sparkleX+14,sparkleY+22,sparkleX+9,sparkleY+32,sparkleX+4,sparkleY+22) //right shine
}

function DrawMoustache(moustacheX,moustacheY){
  fill(115, 115, 115)//moustache
  beginShape();
  vertex(moustacheX+25,moustacheY);
  bezierVertex(moustacheX+10,moustacheY-5,moustacheX,moustacheY,moustacheX-5,moustacheY+25)
  bezierVertex(moustacheX+55,moustacheY-20,moustacheX+50,moustacheY+5,moustacheX+55,moustacheY+25)
  endShape();
 }

