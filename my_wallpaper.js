//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
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
 // rect(40 ,40, rect_width, rect_height);
 let ballX = 20//100
 let ballY = ballX+25 //125
 Draw8ball(95,120);
 //Draw8ball(55,55);
 //Draw8ball(145,145);
}

function Drawpurplehat(hatX,hatY){

  
}

 function Draw8ball(ballX,ballY){
  let shineX = 83
  let shineY = 120
  let hatX = 80//80
  let hatY = 90//90
  let sparkleX = 150
  let sparkleY = 50
  //let insidetriangleX = 90
  //let insidetriangleY = 110
 
  //line(100,0,100,200) //testlines
  //line(0,100,200,100)
 
  fill(152, 14, 176)//purple magical hat
  strokeWeight(0);
  rotate(-PI); //rotate the hat and the ball
  rotate(-PI);
  triangle(hatX+25,hatY-10,hatX,hatY-65,hatX-50,hatY-50)
  triangle(hatX-20,hatY-40,hatX-30,hatY-5,hatX+20,hatY-10)
  fill(102, 13, 117)
  //fill(133, 14, 153)
  ellipse(hatX,hatY,100,40)//brim of the hat
 
  rotate(PI); //rotate the ball back
  rotate(PI);
  fill(0,0,0); //main black ball
  strokeWeight(0);//determines the stroke of the shape
  ellipse(ballX,ballY,100, 100); // draws a circle 100 pixels accross at location 100 pixels accross and 100 pixels down
 
  fill(252,252,252); //white circle inside
  strokeWeight(0);
  ellipse(ballX+15,ballY,60,60);
 
  //fill(152, 14, 176); //magical triangle
  //triangle(insidetriangleX+4,insidetriangleY,insidetriangleX+50,insidetriangleY+5,insidetriangleX+25,insidetriangleY+49)
 
  fill(252,252,252) // the white shine on the ball
  beginShape();
  vertex (ballX,ballY-40);//95,60 original 
  bezierVertex(ballX-17,ballY-35,ballX-32,ballY-15,ballX-42,ballY-5);
  bezierVertex(ballX-47,ballY-5,ballX-32,ballY-55,ballX,ballY-40); //70,40
  endShape();
 
  textSize(60); //TEXT the number 8
  fill(0,0,0)
  text("8",ballX,ballY+20); //20,71
 
  //textSize(13); //TEXT try again
  //fill(0,0,0)
  //text("try",insidetriangleX+19,insidetriangleY+13)
  //textSize(10);
  //text("again",insidetriangleX+14,insidetriangleY+23)
 
  fill(248, 255, 51)//sparkle
  quad(sparkleX,sparkleY,sparkleX+5,sparkleY+10,sparkleX,sparkleY+20,sparkleX-5,sparkleY+10) //top shine
  quad(sparkleX,sparkleY+25,sparkleX+5,sparkleY+35,sparkleX,sparkleY+45,sparkleX-5,sparkleY+35) //bottom shine
  quad(sparkleX+9,sparkleY+12,sparkleX+14,sparkleY+22,sparkleX+9,sparkleY+32,sparkleX+4,sparkleY+22) //right shine
  

  //ballX is 20
  //ballY is 45

  fill(166, 171, 167)//moustache
  beginShape();
  vertex(115,125);
  bezierVertex(100,120,90,125,85,150);
  bezierVertex(145,105,140,130,145,150)
  endShape();

 }

