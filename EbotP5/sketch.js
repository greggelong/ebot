 
const isAlpha = str => /^[a-zA-Z]*$/.test(str);

// great regex is alpha for string check
// the api fails on 
let cnv, ustate, pout
let y=-100

function setup() {
  cnv =createCanvas(600, 600);
  cnv.parent("sketch-holder");
  background(0);
  ustate = createInput('I feel sad');
  ustate.style('font-size', '20px');;
  
  createButton("ENTER").mousePressed(writeSent)
  pout= createP("say something like 'I like chocolate'")
  

 
  
}

function writeSent(){
  pout.html(ustate.value())
  onInput();
}

function onInput() {
 // background(0)
  // move the cursor
  y+=100
  if (y>=600){
    y=0
    background(0)
  }
  // put the bar
  fill("cyan")
  strokeWeight(10)
  rect(0, y, 600, 100)
 
  
  // Display the text entered
  fill("black")
  textSize(30)
  text(ustate.value(), 20, y+50)
  botReply()
}
/*
for (let [key, value] of Object.entries(yourobject)) {
  console.log(key, value);
}

*/

function botReply(){
  y+=100
  if (y>=600){
    y=0
    background(0)
  }
  // put the bar
  fill("yellow")
  strokeWeight(10)
  rect(0, y, 600, 100)
 
  
  // Display the text entered
  fill("black")
  textSize(30)
  text("bot's reply" , 20, y+50)

}

  console.log(key, value);
}

*/
