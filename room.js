// module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
var engine;
var world;
var boxes = [];
var ground;
var options = { isStatic: true }
function setup()
{
    createCanvas(outerWidth, outerHeight);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground = Bodies.rectangle(0, outerHeight - 200, outerWidth * 2, 100, options);
    World.add(world, ground);
}
function mouseDragged()
{
    boxes.push(new Box (mouseX, mouseY, 32, 32 ));
}
function draw()
{
    background(51);
    for (var i = 0; i < boxes.length ; i++)
    {
        boxes[i].show();
    }
}