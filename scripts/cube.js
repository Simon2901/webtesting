var DIM = 8;
var size = 100;

function setup() {
    var canvas = createCanvas(200, 200, WEBGL);

    canvas.parent("sketch-holder")
}

function draw() {

    background("#f3f1f4");
    orbitControl();
    scale(0.6);

    for (var i = 0; i < DIM; i++) {
        for (var j = 0; j < DIM; j++) {
            for (var k = 0; k < DIM; k++) {
                let x = map(i, 0, DIM, -size, size);
                let y = map(j, 0, DIM, -size, size);
                let z = map(k, 0, DIM, -size, size);
                stroke(0); // Farbe des "Stifts" weiß
                point(x, y, z); // male einen Punkt bei x y z
            }
        }
    }


}