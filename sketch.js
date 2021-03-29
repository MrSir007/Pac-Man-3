var pacman;
var blackStripe1, blackStripe2, blackStripe3;

function setup() {
  createCanvas(600,800);

  wallGroup = createGroup();
  coinGroup = createGroup();

  blackStripe1 = createSprite(300,400,100,80);
  blackStripe1.visible = false;
}

function draw() {
  background("black");

  walls();
  coins();

  tracker();

  

  drawSprites();
}

function walls() {
  wallGroup.add(createSprite(300,90,560,10));
  wallGroup.add(createSprite(300,710,560,10));
  wallGroup.add(createSprite(25,200,10,220));
  wallGroup.add(createSprite(25,600,10,220));
  wallGroup.add(createSprite(575,200,10,220));
  wallGroup.add(createSprite(575,600,10,220));
  wallGroup.add(createSprite(135,400,10,200));
  wallGroup.add(createSprite(465,400,10,200));
  wallGroup.add(createSprite(80,305,100,10));
  wallGroup.add(createSprite(80,495,100,10));
  wallGroup.add(createSprite(520,305,100,10));
  wallGroup.add(createSprite(520,495,100,10));
  wallGroup.add(createSprite(300,365,100,10));
  wallGroup.add(createSprite(300,435,100,10));
  wallGroup.add(createSprite(255,400,10,80));
  wallGroup.add(createSprite(345,400,10,80));
  wallGroup.add(createSprite(300,135,10,80));
  wallGroup.add(createSprite(300,270,10,80));
  wallGroup.add(createSprite(300,230,100,10));
  wallGroup.add(createSprite(300,520,10,60));
  wallGroup.add(createSprite(300,490,100,10));
  wallGroup.add(createSprite(300,630,10,60));
  wallGroup.add(createSprite(300,600,100,10));
  wallGroup.add(createSprite(200,300,10,150));
  wallGroup.add(createSprite(220,300,50,10));
  wallGroup.add(createSprite(400,300,10,150));
  wallGroup.add(createSprite(380,300,50,10));
  wallGroup.add(createSprite(200,460,10,70));
  wallGroup.add(createSprite(400,460,10,70));
  wallGroup.add(createSprite(200,627.5,10,65));
  wallGroup.add(createSprite(400,627.5,10,65));
  wallGroup.add(createSprite(222.5,545,55,10));
  wallGroup.add(createSprite(372.5,545,55,10));
  wallGroup.add(createSprite(200,155,10,40));
  wallGroup.add(createSprite(255,155,10,40));
  wallGroup.add(createSprite(230,140,60,10));
  wallGroup.add(createSprite(230,170,60,10));
  wallGroup.add(createSprite(400,155,10,40));
  wallGroup.add(createSprite(345,155,10,40));
  wallGroup.add(createSprite(370,140,60,10));
  wallGroup.add(createSprite(370,170,60,10));
  wallGroup.add(createSprite(80,155,10,40));
  wallGroup.add(createSprite(135,155,10,40));
  wallGroup.add(createSprite(110,140,60,10));
  wallGroup.add(createSprite(110,170,60,10));
  wallGroup.add(createSprite(520,155,10,40));
  wallGroup.add(createSprite(465,155,10,40));
  wallGroup.add(createSprite(490,140,60,10));
  wallGroup.add(createSprite(490,170,60,10));
  wallGroup.add(createSprite(80,245,10,40));
  wallGroup.add(createSprite(135,245,10,40));
  wallGroup.add(createSprite(110,230,60,10));
  wallGroup.add(createSprite(110,260,60,10));
  wallGroup.add(createSprite(520,245,10,40));
  wallGroup.add(createSprite(465,245,10,40));
  wallGroup.add(createSprite(490,230,60,10));
  wallGroup.add(createSprite(490,260,60,10));
  wallGroup.add(createSprite(160,660,180,10));
  wallGroup.add(createSprite(440,660,180,10));
  wallGroup.add(createSprite(50,600,40,10));
  wallGroup.add(createSprite(550,600,40,10));

  wallGroup.setColorEach("DarkGray");
}

function coins() {
  for(var i = 60; i <= 540; i += 20) {
    for(var j = 120; j <= 685; j += 20) {
      var coin = createSprite(i,j,3,3);
      
      if (coin.overlap(wallGroup) || coin.overlap(blackStripe1)) {
        coin.visible = false;
      } else {
        coinGroup.add(coin);
      }
      coinGroup.setColorEach("Yellow");
    }
  }
}

function tracker() {
  stroke("white");
  text(mouseX + "," + mouseY, mouseX, mouseY);
}