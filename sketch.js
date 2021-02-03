
// Setup code goes here
function setup() {
  createCanvas(600, 400);
  textSize(40);
  textAlign(CENTER);

  print ("setting up sketch!")

 }


// Draw code goes here
function draw() {
  background(0);
  fill(244,97,139);
  text("☆*Hello World!*☆",width/2,height/2);
}

function mousePressed (){
	//mouse X= x coord.
	//mouse Y= Y coord.
	print ("mouse pressed at x: " + mouseX + " y:" + mouseY);
}