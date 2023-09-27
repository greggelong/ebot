const isAlpha = str => /^[a-zA-Z]*$/.test(str);

// great regex is alpha for string check
// the api fails on 
let cnv, ustate, pout, enterbutt
let y=-100
let foo = new p5.Speech();

function setup() {
  cnv =createCanvas(800, 600);
  cnv.parent("sketch-holder");
  background(222,93,131);
  
  ustate = select('#input');
  ustate.style('font-size', '20px');
  ustate.style('width', '600px');
  ustate.style('background-color','cyan')
  
  
  enterbutt= select('#enbutton').mousePressed(writeSent)
  pout= createP("say something like 'I like chocolate'")
  stroke(222,93,131)
  foo.speak("Hello, I'm ELIZA.  I will ask you why questions repeatedly. Prepare to have your values and fears revealed.")
  

 
  
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
    background(222,93,131)
  }
  // put the bar
  fill("cyan")
  strokeWeight(10)
  stroke(222,93,131)
  rect(0, y, 800, 100)
 
  
  // Display the text entered
  fill("black")
  
  textSize(20)
  print(50-ustate.value().length,ustate.value().length)
  noStroke()
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
    background(223,93,131)
  }
  // put the bar
  fill("yellow")
  strokeWeight(10)
  stroke(222,93,131)
  rect(0, y, 800, 100)
 
  
  // Display the text entered
  fill("black")
  textSize(20)
  noStroke()
  let q = gwq(ustate.value())
  text(q , 20, y+50)
  foo.speak(q);

}

function gwq(response){
  
  let rlist = response.toLowerCase().trim().replace(/[\/#$%\^&\*;:.?!{}=\-_`'"~()]/g,"").split(' ')
  
  print(rlist)
   let refertobot = ["you","yours"]
    for(const i of refertobot){
        if (rlist.includes(i)){
          
          return "Please don't bring me into this.  I am concerned only about you."
        }
      }
    //check for questions words in interogative positions only 
   let  qwords = ["do","what", "how","why","when"]
    for(const i of qwords){
        if (i ===rlist[0]){
            return "I am asking the questions here!!!"
        }
    }
    let replaceit = {
        "i":"you",
        "am":"are",
        "me":"you",
        "mine":"yours",
        "my":"your",
        "myself":"yourself",
        "i'm":"you're",
        "was":"were",
        "because": "",
        }

    for (let [key, value] of Object.entries(replaceit)) {
          console.log(key, value);
          for(let i =0; i<rlist.length;i++){
            if (rlist[i] === key){
              rlist[i]= value

            }
          }
        }
     
    resultPart =rlist.join(' ').trim()
    // now clear the input for the next time
    ustate.value("") 

    return "Why do you think "+resultPart+"?"


}
