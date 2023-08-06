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
 background(65, 173, 38); //pool table colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 // rect(40 ,40, rect_width, rect_height);

 let ballX = 100
 let ballY = 125
 let shineX = 83
 let shineY = 120
 let hatX = 80
 let hatY = 90
 let sparkleX = 150
 let sparkleY = 50
 let insidetriangleX = 90
 let insidetriangleY = 110

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
 ellipse(ballX+15,ballY+5,60,60);

 fill(152, 14, 176); //magical triangle
 triangle(insidetriangleX+4,insidetriangleY,insidetriangleX+50,insidetriangleY+5,insidetriangleX+25,insidetriangleY+49)

 fill(252,252,252) // the white shine on the ball
 beginShape();
 vertex (shineX+17,shineY-35);//95,60 original 
 bezierVertex(shineX,shineY-30,shineX-15,shineY-10,shineX-25,shineY);
 bezierVertex(shineX-30,shineY,shineX-15,shineY-50,shineX+17,shineY-35); //70,40
 endShape();

 //textSize(60); //TEXT the number 8
 //fill(0,0,0)
 //text("8",ballX,ballY+26);

 textSize(13); //TEXT try again
 fill(0,0,0)
 text("try",insidetriangleX+19,insidetriangleY+13)
 textSize(10);
 text("again",insidetriangleX+14,insidetriangleY+23)

 fill(248, 255, 51)
 quad(sparkleX,sparkleY,sparkleX+5,sparkleY+10,sparkleX,sparkleY+20,sparkleX-5,sparkleY+10) //top shine
 quad(sparkleX,sparkleY+25,sparkleX+5,sparkleY+35,sparkleX,sparkleY+45,sparkleX-5,sparkleY+35) //bottom shine
 quad(sparkleX+9,sparkleY+12,sparkleX+14,sparkleY+22,sparkleX+9,sparkleY+32,sparkleX+4,sparkleY+22) //right shine
}
