//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

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
 let ballY = 100

 line(100,0,100,200)
 line(0,100,200,100)

 fill(200,69,84); //main black ball
 strokeWeight(4);//determines the stroke of the shape
 ellipse(ballX,ballY,100, 100); // draws a circle 100 pixels accross at location 100 pixels accross and 100 pixels down

 fill(252,252,252); //white circle inside
 strokeWeight(0);
 ellipse(ballX+15,ballY+5,60,60);

 strokeWeight(2); //the number 8
 ellipse(ballX+19,ballY-3,15,15);
 ellipse(ballX+20,ballY+15,20,20);

 //fill(252,252,252) //shine curve
 //strokeWeight(0);
 // ellipse(89,64,16,16);
 // ellipse(86,65,16,16); //middle part
 // ellipse(84,66,16,16);
 // ellipse(81,68,16,16); //middle part
 // ellipse(78,71,16,16);
 // ellipse(76,73,16,16); //middle part
 // ellipse(74,75,16,16);
 // ellipse(72,78,16,16); //middle curve
 // ellipse(70,81,16,16);

 //bezierVertex() check out variable
 //to do list: make triangle, cube thing, other coloured balls, pool stick. add parameters and if statements.

 // example of a Bezier Curve
 // noFill();
 // beginShape();
 // vertex (30,20);
 // strokeWeight(5);
 // bezierVertex(80,0,80,75,30,75);
 // endShape();

let curveX = 87 //80
let curveY = 86 //80
 //beginShape(); //shine
 //vertex (95,60);
 ////strokeWeight(0);
 //bezierVertex(80,50,65,70,65,85);
 //bezierVertex(50,80,65,35,95,60); //70,40
 //endShape();

 beginShape(); //shine
 vertex (curveX+15,curveY-20);
 //strokeWeight(0);
 bezierVertex(curveX,curveY-30,curveX-15,curveY-10,curveX-15,curveY+5);
 bezierVertex(curveX-30,curveY,curveX-15,curveY-45,curveX+15,curveY-20); //70,40
 endShape();

}
