function setup () {
    createCanvas (600,  600);
    background("black");
  }
  
  function draw () {
    stroke("yellow");
    fill("black");
    
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 60, 60);
    }
  }
  