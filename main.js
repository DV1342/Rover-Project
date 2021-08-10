  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");

  rover_width=100;
  rover_height = 90;
  rover_x = 10;
  rover_y = 10;

  background_image = "mars.jpg"

  rover_image = "rover.png"


function add(){
  mars_imgTag = new Image() 
  mars_imgTag.src = background_image
  mars_imgTag.onload = uploadBackground
  rover_imgTag = new Image()
  rover_imgTag.src = rover_image
  rover_imgTag.onload = uploadrover;

}

function uploadBackground() {
 ctx.drawImage (mars_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadrover(){
    ctx.drawImage (rover_imgTag, rover_x, rover_y, rover_width, rover_height)
}


window.addEventListener ("keydown", key_down);

function key_down(e){
 key_pressed = e.keyCode;

  console.log (key_pressed);

  if (key_pressed == 40){
    down()
    console.log ("key_down");
  }
  if (key_pressed == 37){
    left()
    console.log ("key_left");
  }
  if (key_pressed == 39){
    right()
    console.log ("key_right")
  }
  if (key_pressed == 38){
    up()
    console.log ("key_up")


  }
  

}

function up(){

 if (rover_y >= 0){
  rover_y = rover_y - 10;
  console.log ("When up arrow key is pressed, x=" + rover_x +" | y = " +rover_y );
  uploadBackground();
  uploadrover();
 }
 
}

function down(){
  if (rover_y <= 510){
    rover_y = rover_y +10;
    console.log ("When down arrow key is pressed, x=" + rover_x +" | y = " +rover_y);
    uploadBackground();
    uploadrover();
  }
  

}

function left(){
 if (rover_x >= 0){
   rover_x = rover_x -10;
   console.log ("When left arrow key is pressed, x=" + rover_y +" | x = "+ rover_x);
   uploadBackground();
   uploadrover();
 }

}

function right(){
  if (rover_x <= 700){
  rover_x = rover_x +10;
  console.log ("When right arrow key is pressed, x= " + rover_y + " | x -"+ rover_x);
  uploadBackground();
  uploadrover();

  }
}