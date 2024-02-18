var k = 0
function setup() {
    createCanvas(400,400);
    background(200);
}

function draw() {
    strokeWeight(1);
    stroke(0,0,0);
    line(200,399,200,0);
    stroke(249,0,255);
    strokeWeight(50);
    point(100,198);

    stroke(249,0,255);
    strokeWeight(50);
    var y = 198 + 10* Math.sin(PI/100*k)
    k += 1;
    point(300,y);
    stroke(200);
    strokeWeight(2);
    fill(249, 19, 147);
    ellipse(100,150,70,70);
    ellipse(150,196,70,70);
    ellipse(100,245,70,70);
    ellipse(50,196,70,70);


    fill(249, 19, 147);
    var y = 150 + 10* Math.sin(PI/100*k)
    k += 1;
    ellipse(300,y,70,70);

    var y = 196 + 10* Math.sin(PI/100*k)
    k += 1;
    ellipse(350, y,70,70);

    var y = 245 + 10* Math.sin(PI/100*k)
    k += 1;
    ellipse(300,y,70,70);

    var y = 196 + 10* Math.sin(PI/100*k)
    k += 1;
    ellipse(250,y,70,70);

}  