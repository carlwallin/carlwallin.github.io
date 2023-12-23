let symmetry;
let angle;
let angleB = 0;
let saveButton, clearButton, mouseButton, keyboardButton;
let symmetrySlider, symSizeSlider;
let brushSizeSlider, sizeSlider;
let brushOpSlider, sizeOpSlider;
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
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

  // Setting up the slider for symmetry
  symmetrySlider = createButton("Symmetry Slider");
  symmetrySlider.position(10, 60);
  symmetrySlider.class("textknapp");
  symSizeSlider = createSlider(4, 32, 12, 1); // Startvärde 12
  symSizeSlider.position(140, 60);
  symSizeSlider.size(200);
  symSizeSlider.class("slider");

  // Setting up the slider for the thickness of the brush
  brushSizeSlider = createButton("Brush Size Slider");
  brushSizeSlider.position(10, 90);
  brushSizeSlider.class("textknapp");
  sizeSlider = createSlider(0.1, 100, 10, 0.1);
  sizeSlider.position(140, 90);
  sizeSlider.size(200);
  sizeSlider.class("slider");

  brushOpSlider = createButton("Brush Opacity Slider");
  brushOpSlider.position(10, 120);
  brushOpSlider.class("textknapp");
  sizeOpSlider = createSlider(1, 255, 100, 0.1);
  sizeOpSlider.position(140, 120);
  sizeOpSlider.size(200);
  sizeOpSlider.class("slider");
}

function saveFile() {
  save("design.jpg");
}

function clearScreen() {
  background(255);
}

function draw() {
  translate(width / 2, height / 2);

  // Uppdatera symmetry och angle baserat på skjutreglaget
  symmetry = symSizeSlider.value();
  angle = 360 / symmetry;

  let sx = map(sin(angleB), -1, 1, 0.1, 80);
  let ox = map(sin(angleB), -1, 1, 150, 1);
  sizeSlider.value(sx);
  sizeOpSlider.value(ox);

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
  angleB += 1;
}
