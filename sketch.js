// Symmetry corresponding to the number of reflections. Change the number for different number of reflections
let symmetry = 6;

let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;
let slider;

let canvas;

function setup() {
  //createCanvas(710, 710);
  //background(255);

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  // canvas.style('z-index', '-1');

  angleMode(DEGREES);

  // Creating the save button for the file
  saveButton = createButton("save");
  saveButton.mousePressed(saveFile);
  saveButton.position(10, 10);
  saveButton.class("tryckknapp");

  // Creating the clear screen button
  clearButton = createButton("clear");
  clearButton.mousePressed(clearScreen);
  clearButton.position(60, 10);
  clearButton.class("tryckknapp");

  // Creating the button for Full Screen
  fullscreenButton = createButton("Full Screen");
  fullscreenButton.mousePressed(screenFull);
  fullscreenButton.position(110, 10);
  fullscreenButton.class("tryckknapp");

  // Setting up the slider for the thickness of the brush
  brushSizeSlider = createButton("Brush Size Slider");
  brushSizeSlider.position(10, 35);
  brushSizeSlider.class("textknapp");
  sizeSlider = createSlider(0.1, 200, 10, 0.1);
  sizeSlider.position(140, 35);
  sizeSlider.size(200);
  sizeSlider.class("slider");

  brushOpSlider = createButton("Brush Opacity Slider");
  brushOpSlider.position(10, 55);
  brushOpSlider.class("textknapp");
  sizeOpSlider = createSlider(0, 255, 100, 0.1);
  sizeOpSlider.position(140, 55);
  sizeOpSlider.size(200);
  sizeOpSlider.class("slider");
}

// Save File Function
function saveFile() {
  save("design.jpg");
}

// Clear Screen function
function clearScreen() {
  background(255);
}

// Full Screen Function
function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function draw() {
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;

    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        let sw = sizeSlider.value();
        let ow = sizeOpSlider.value();
        strokeWeight(sw);
        stroke(0, ow);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}
