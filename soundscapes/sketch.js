let userHasClicked = false;

let riverSound;
let metalSound;

function preload() {

  riverSound = loadSound('assets/river.wav');
  metalSound = loadSound('assets/metal.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(30)
  textAlign(CENTER)

  riverSound.setVolume(0)
  metalSound.setVolume(0)

}

function draw() {

  let metalColor = color('red')
  let riverColor = color('green')

  background('hotpink');
  
  if(userHasClicked == false){
    text(
    'hi, click to continue, or something, idk...',
    width/2,
    height/2
  )
  } else {

    if(riverSound.isPlaying() == false){
    riverSound.play()
    }

    if(metalSound.isPlaying() == false){
      metalSound.play()
      }

    let targetVolumeRiver = map(
      mouseX,
      0,
      width,
      0,
      1
    )
    riverSound.setVolume(targetVolumeRiver)


    let targetVolumeMetal = map(
      mouseX,
      0,
      width,
      1,
      0
    )
    riverSound.setVolume(targetVolumeMetal)
    

    let targetColor = lerpColor (riverColor, metalColor, targetVolumeRiver)
    background(targetColor)
  }
  
}


function mouseClicked(){
userHasClicked = true;
}