let theObjects = [];
let theImage;

function preload() {
	theImage = loadImage('./like.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	let protection = 0;

	while (theObjects.length < 3000) {
		// let x = random(width);
		// let y = random(height);
		// let r = random(8,50);
		// let obj = new SingleObject(x, y, r);

		let obj = new SingleObject(random(width), random(height), random(8, 36), theImage);

		let overlapping = false;

		for (let j = 0; j < theObjects.length; j++) {
			if (obj.isOverlapping(theObjects[j])) {
				overlapping = true;
				break;
			}
		}

		if (!overlapping) {
			theObjects.push(obj);
		}

		protection++;

		if (protection > 10000) {
			break;
		}

	}
}

function draw() {
	background(255, 240, 0);
	for (let obj of theObjects) {
		obj.show();
	}
}