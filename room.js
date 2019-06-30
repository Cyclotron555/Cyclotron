// module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
var engine;
var world;
var boxes = [];
function setup()
{
    createCanvas(outerWidth, outerHeight);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
}
function mousePressed()
{
    boxes.push(new Box (mouseX, mouseY, 100, 100 ));
}
function draw()
{
    background(51);
    for (var i = 0; i < boxes.length ; i++)
    {
        boxes[i].show();
    }
}