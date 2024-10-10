let img;

function preload() {
  img = loadImage("https://media.tenor.com/O_x4UCmt5p0AAAAj/among-us-twerk.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  // Calcula a direção do cursor
  let dir = createVector(mouseX - width / 2, mouseY - height / 2);
  let angle = dir.heading();
  
  // Desenha a imagem na posição central da tela
  push();
  translate(width / 2, height / 2);
  rotate(angle); // Rotaciona a imagem
  imageMode(CENTER);
  image(img, 0, 0, width * 0.9, height * 0.9); // Tamanho da imagem
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
