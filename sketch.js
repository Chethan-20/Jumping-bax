var canvas;
var music;
var ball, Edges;
var surface1, surface2, surface3, surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(90,580,180,20);
    surface1.shapeColor= "red";

    surface2 = createSprite(290,580,180,20);
    surface2.shapeColor = "blue";

    surface3 = createSprite(500,580,180,20);
    surface3.shapeColor = "green";

    surface4 = createSprite(700,580,180,20);
    surface4.shapeColor = "black";

    //create box sprite and give velocity
    ball = createSprite(random(20,750),300,20,20);
    ball.shapeColor = "white";
    ball.velocityX = 3;
    ball.velocityY = 7;

}

function draw() {
    background(rgb(169,169,169));
    
    //create edgeSprite
     Edges = createEdgeSprites()
     ball.bounceOff(Edges)
     if(surface1.isTouching(ball)&& ball.bounceOff(surface1)){
         ball.shapeColor = "red";
         music.play();
     }

     if(surface2.isTouching(ball)){
        ball.shapeColor = "blue";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(surface3.isTouching(ball)&& ball.bounceOff(surface3)){
        ball.shapeColor = "green";
        music.play();
    }

    if(surface4.isTouching(ball)&& ball.bounceOff(surface4)){
        ball.shapeColor = "black";
        music.play();
    }
     drawSprites();


    //add condition to check if box touching surface and make it box
}
