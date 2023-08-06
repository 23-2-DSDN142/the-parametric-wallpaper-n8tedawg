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

 fill(0,0,0); //main black ball
 strokeWeight(4);//determines the stroke of the shape
 ellipse(ballX,ballY,100, 100); // draws a circle 100 pixels accross at location 100 pixels accross and 100 pixels down

 fill(252,252,252); //white circle inside
 strokeWeight(0);
 ellipse(ballX+15,ballY+5,60,60);

 //bezierVertex() check out variable
 //to do list: make triangle, cube thing, other coloured balls, pool stick. add parameters and if statements.

let curveX = 83 //80//87
let curveY = 95 //80//86

 beginShape(); //shine
 vertex (curveX+17,curveY-35);//95,60 original 
 bezierVertex(curveX,curveY-30,curveX-15,curveY-10,curveX-25,curveY);
 bezierVertex(curveX-30,curveY,curveX-15,curveY-50,curveX+17,curveY-35); //70,40
 endShape();

 textSize(60); //the number 8
 fill(0,0,0)
 text("8",100,126);

}
