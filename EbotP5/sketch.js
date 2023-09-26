 
const isAlpha = str => /^[a-zA-Z]*$/.test(str);

// great regex is alpha for string check
// the api fails on 
let cnv, ustate, pout

function setup() {
  cnv =createCanvas(600, 600);
  cnv.parent("sketch-holder");
  background(0);
  ustate = createInput('I feel sad');
  ustate.style('font-size', '20px');;
  pout= createP("say something like 'I like chocolate'")
  createButton("generate").mousePressed(writeSent)
  fill(255)

 
  
}

function writeSent(){
  pout.html(ustate.value())
  onInput();
}

function onInput() {
  background(0)
  
  fill("green")
  strokeWeight(10)
  rect(0, 100, 600, 100)
  
  // Display the text entered
  fill("black")
  textSize(30)
  text(ustate.value(), 20, 140)
}
/*
for (let [key, value] of Object.entries(yourobject)) {
  console.log(key, value);
}

*/