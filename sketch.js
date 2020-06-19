let canvas;
let next;
let theObjects = [];
let theImage;
let merkels;

function preload() {
	theImage = loadImage('./like.png');
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup();
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');

	next = select('#next');
	next.style('font-size', '1.5em');
	setInterval(changeColor, 500);

	/*** Beginning: Packing Algorithm ***/
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
	/*** End: Packing Algorithm *******************/

	merkels = selectAll('.merkel');
	if (windowWidth > windowHeight) {
		for (let i = 0; i < merkels.length; i++) {
			merkels[i].position((windowWidth / 3 + ((i / 2) * windowWidth) / 3), windowHeight / 3);
		}
	} else {
		for (let i = 0; i < merkels.length; i++) {
			merkels[i].position(windowWidth / 3, 50 + (0.6 * i * windowHeight) / 3);
		}
	}

	setInterval(showHideMerkel0, 500);
	setInterval(showHideMerkel1, 1000);
	setInterval(showHideMerkel2, 500);
}

function changeColor() {
	let colors = ['Red', 'Orange', 'Yellow', 'MediumSpringGreen', 'RoyalBlue', 'Purple', 'Pink', 'LightCyan'];
	let col = random(colors);
	next.style('background-color', col);
}

function showHideMerkel0() {
	let imgmerkels = document.getElementsByClassName("merkel");
	if (getComputedStyle(imgmerkels[0]).getPropertyValue('visibility') == 'visible') {
		imgmerkels[0].style.visibility = "hidden";
	} else {
		imgmerkels[0].style.visibility = "visible";
	}
}

function showHideMerkel1() {
	let imgmerkels = document.getElementsByClassName("merkel");
	if (getComputedStyle(imgmerkels[1]).getPropertyValue('visibility') == 'visible') {
		imgmerkels[1].style.visibility = "hidden";
	} else {
		imgmerkels[1].style.visibility = "visible";
	}
}

function showHideMerkel2() {
	let imgmerkels = document.getElementsByClassName("merkel");
	if (getComputedStyle(imgmerkels[2]).getPropertyValue('visibility') == 'visible') {
		imgmerkels[2].style.visibility = "hidden";
	} else {
		imgmerkels[2].style.visibility = "visible";
	}
}

// function showHideMerkel() {
// 	let imgmerkels = document.getElementsByClassName("merkel");
// 	for (let i = 0; i < imgmerkels.length; i++) {
// 		if (getComputedStyle(imgmerkels[i]).getPropertyValue('visibility') == 'visible') {
// 			imgmerkels[i].style.visibility = "hidden";
// 		} else {
// 			imgmerkels[i].style.visibility = "visible";
// 		}
// 	}
// }

function draw() {
	background(255, 240, 0);
	for (let obj of theObjects) {
		obj.show();
	}
}