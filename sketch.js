//todas as variáveis já foram declaradas
var garden,gardenImg;
var rabbit,rabbitImg;
var greenLeaf,greenLeafImg;
var redLeaf,redLeafImg;
var orangeLeaf,orangeLeafImg;
var apple,appleImg;


function preload(){
  gardenImg = loadImage("images/garden.png");
  rabbitImg = loadImage("images/rabbit.png");
  appleImg = loadImage("images/apple.png");
  
  //carregar as imagens das folhas (leaf)

}


function setup(){
  
  createCanvas(400,400);

  //criando a imagem de fundo
  garden=createSprite(200,200);
  garden.addImage(gardenImg);


  //criando o sprite do coelhinho (rabbit)
  rabbit = createSprite(160,340,20,20);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // faça o coelho se mover junto com o mouse no eixo X
  
  
  //criando as bordas
  edges= createEdgeSprites();
  //faça o coelho colidir com as bordas
  
  
  
  //criando uma variável para armazenar um número aleatório entre 1 e 4 
  //DESCOMENTE A LINHA CORRETA: 
  
// var select_sprites = Math(random(1,3));

// var select_sprites = Math.random(random(1,3));

// var select_sprites = Math.round(1,3);

// var select_sprites = Math.round(random(1,3));


  
//crie um switch para chamar as funções das folhas e maças e exibi-las na tela a cada 60 quadros

//lembrando que o frameCount faz a contagem de quadros

  drawSprites();

}

function createApples() {
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
}

function createOrangeL() {
  orangeLeaf = createSprite(random(50, 350),40, 10, 10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale=0.08;
  orangeLeaf.velocityY = 3;
  orangeLeaf.lifetime = 150;
}

function createRedL() {
  //complete a função para criar folhas vermelhas


}

//crie uma função para criar as folhas verdes