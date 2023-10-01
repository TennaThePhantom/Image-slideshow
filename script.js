/*
Every that needs to be done in order to complete this project 
1 - done: arrows need to appear when you hover over container with a transition and makes background a different color

2-2.5 - done: when i hover over a circle it changes from a solid to a different color also --  
it doesn't make the rest of the circles be different colors only the one that you hover over with mouse

3 - done: when you click on the arrow it will change the image left goes backwards right goes forward
each image will have a different box shadow color 

4 - done: when you hover over the circles it will show a preview of the image until you click --
    or stop hovering 

5 after a certain amount of time if the user doesn't hover over the container or circles it will 
switch to a random image
*/

//variables(global)
const boxImage = document.getElementById("box-img");
const image = document.getElementById("picture");
const arrows = document.querySelector(".arrows");
const picture = document.getElementById("picture");
const circles = document.querySelectorAll(".fa-circle");
const allCircles = Array.from(circles);

// The current state of image(object)
const imageState = {
	currentImage: 0,
};

const mouseState = {
	mouseOnBox: false,
	mouseOnCirlce: false,
};

//colors
const colorWheel = (userColor) => {
	return getComputedStyle(document.documentElement).getPropertyValue(userColor);
};

//images
const images = [
	"Asta.png",
	"Broly.png",
	"Denji.png",
	"Mob.jpg",
	"Zensitsu.png",
	"Saber&Rider.jpg",
	"Jotaro.jpg",
];

//body-background
const gradient_background_direction = "0.25turn";
const backgroundGradientHover = `linear-gradient(${gradient_background_direction}, ${colorWheel(
	"--dark-blue"
)}, ${colorWheel("--rose")})`;

const backgroundGradient = `linear-gradient(${gradient_background_direction}, ${colorWheel(
	"--light-blue"
)}, ${colorWheel("--light-rose")})`;

//box-image
const getisMouseOnBoxOrCircle = (isMouseOnBoxOrCircle) => {
	return isMouseOnBoxOrCircle;
};
boxImage.addEventListener("mouseover", () => {
	arrows.style.opacity = "1";
	document.body.style.background = backgroundGradientHover;
	mouseState.mouseOnBox = true;
});

boxImage.addEventListener("mouseout", () => {
	arrows.style.opacity = "0";
	document.body.style.background = backgroundGradient;
	mouseState.mouseOnBox = false;
	console.log("The box is false");
});

const circlesHoverEffect = () => {
	for (let circle = 0; circle < allCircles.length; circle++) {
		allCircles[circle].addEventListener("mouseover", () => {
			if (allCircles[circle] == allCircles[0]) {
				allCircles[0].style.color = colorWheel("--red");
			} else if (allCircles[circle] == allCircles[1]) {
				allCircles[1].style.color = colorWheel("--green");
			} else if (allCircles[circle] == allCircles[2]) {
				allCircles[2].style.color = colorWheel("--orange");
			} else if (allCircles[circle] == allCircles[3]) {
				allCircles[3].style.color = colorWheel("--navy-blue");
			} else if (allCircles[circle] == allCircles[4]) {
				allCircles[4].style.color = colorWheel("--yellow");
			} else if (allCircles[circle] == allCircles[5]) {
				allCircles[5].style.color = colorWheel("--purple");
			} else {
				allCircles[6].style.color = colorWheel("--floralwhite");
			}
		});
		allCircles[circle].addEventListener("mouseout", () => {
			allCircles[circle].style.color = colorWheel("--black");
		});
	}
};

const boxShadowEffect = (currentImage) => {
	switch (currentImage) {
		case 0:
			boxImage.style.boxShadow = "none";
			boxImage.style.boxShadow = "0px 0px 18px 23px var(--red)";
			break;
		case 1:
			boxImage.style.boxShadow = "none";
			boxImage.style.boxShadow = "0px 0px 18px 23px var(--green)";
			break;
		case 2:
			boxImage.style.boxShadow = "none";
			boxImage.style.boxShadow = "0px 0px 18px 23px var(--orange)";
			break;
		case 3:
			boxImage.style.boxShadow = "none";
			boxImage.style.boxShadow = "0px 0px 18px 23px var(--navy-blue)";
			break;
		case 4:
			boxImage.style.boxShadow = "none";
			boxImage.style.boxShadow = "0px 0px 18px 23px var(--yellow)";
			break;
		case 5:
			boxImage.style.boxShadow = "none";
			boxImage.style.boxShadow = "0px 0px 18px 23px var(--purple)";
			break;
		case 6:
			boxImage.style.boxShadow = "none";
			boxImage.style.boxShadow = "0px 0px 18px 23px var(--floralwhite)";
			break;
		default:
			boxImage.style.boxShadow = "none";
			boxImage.style.boxShadow = "0px 0px 18px 23px var(--red)";
			break;
	}
};

const arrowChangeImage = (images) => {
	const leftArrow = document.getElementById("left-arrow");
	const rightArrow = document.getElementById("right-arrow");
	let clickAgain = true;
	picture.style.opacity = 1;
	boxImage.style.boxShadow = "0px 0px 18px 23px var(--red)";

	rightArrow.addEventListener("click", () => {
		picture.style.opacity = 0;
		if (clickAgain == true) {
			clickAgain = false;
			setTimeout(() => {
				imageState.currentImage = (imageState.currentImage + 1) % images.length;
				picture.src = images[imageState.currentImage];
				picture.style.opacity = 1;
				boxShadowEffect(imageState.currentImage);
			}, 700);

			setTimeout(() => {
				clickAgain = true;
			}, 1000);
		}
	});
	leftArrow.addEventListener("click", () => {
		picture.style.opacity = 0;
		if (clickAgain == true) {
			clickAgain = false;
			setTimeout(() => {
				imageState.currentImage =
					(imageState.currentImage - 1 + images.length) % images.length;
				picture.src = images[imageState.currentImage];
				picture.style.opacity = 1;
				boxShadowEffect(imageState.currentImage);
			}, 700);
			setTimeout(() => {
				clickAgain = true;
			}, 1000);
		}
	});
};

const circleImagePreview = (images) => {
	for (let circle = 0; circle < allCircles.length; circle++) {
		allCircles[circle].addEventListener("mouseover", () => {
			picture.style.opacity = 0;
			picture.src = images[circle];
			picture.style.opacity = 1;
			boxShadowEffect(circle);
			mouseState.mouseOnCirlce = true;
			console.log("The circle is true");
		});

		allCircles[circle].addEventListener("mouseout", () => {
			picture.src = images[imageState.currentImage];
			picture.style.opacity = 1;
			boxShadowEffect(imageState.currentImage);
			mouseState.mouseOnCirlce = false;
			console.log("The circle is false");
		});
	}
};

const circleImageChange = (images) => {
	for (let circle = 0; circle < allCircles.length; circle++) {
		allCircles[circle].addEventListener("click", () => {
			picture.style.opacity = 0;
			switch (circle) {
				case 0:
					imageState.currentImage = 0;
					picture.src = images[imageState.currentImage];
					picture.style.opacity = 1;
					boxShadowEffect(imageState.currentImage);
					break;
				case 1:
					imageState.currentImage = 1;
					picture.src = images[imageState.currentImage];
					picture.style.opacity = 1;
					boxShadowEffect(imageState.currentImage);
					break;
				case 2:
					imageState.currentImage = 2;
					picture.src = images[imageState.currentImage];
					picture.style.opacity = 1;
					boxShadowEffect(imageState.currentImage);
					break;
				case 3:
					imageState.currentImage = 3;
					picture.src = images[imageState.currentImage];
					picture.style.opacity = 1;
					boxShadowEffect(imageState.currentImage);
					break;
				case 4:
					imageState.currentImage = 4;
					picture.src = images[imageState.currentImage];
					picture.style.opacity = 1;
					boxShadowEffect(imageState.currentImage);

					break;
				case 5:
					imageState.currentImage = 5;
					picture.src = images[imageState.currentImage];
					picture.style.opacity = 1;
					boxShadowEffect(imageState.currentImage);
					break;
				case 6:
					imageState.currentImage = 6;
					picture.src = images[imageState.currentImage];
					picture.style.opacity = 1;
					boxShadowEffect(imageState.currentImage);
					break;
				default:
					imageState.currentImage = 0;
					picture.src = images[imageState.currentImage];
					picture.style.opacity = 1;
					boxShadowEffect(imageState.currentImage);
					break;
			}
		});
	}
};

const randomIdleImage = (images) => {
	let mouseTimer;
	let hasTheMouseMoved = false;
	const randomImage = () => {
		if (!hasTheMouseMoved) {
			if (
				mouseState.mouseOnBox === false &&
				mouseState.mouseOnCirlce === false
			) {
				let randomIndex = Math.floor(Math.random() * images.length);
				picture.style.opacity = 0;
				setTimeout(() => {
					imageState.currentImage = randomIndex;
					picture.src = images[imageState.currentImage];
					picture.style.opacity = 1;
					boxShadowEffect(imageState.currentImage);
				}, 700);
			}
		}
	};

	const resetTimer = () => {
		clearTimeout(mouseTimer);
	};

	document.addEventListener("mousemove", () => {
		hasTheMouseMoved = true;
		resetTimer();
	});

	resetTimer();

	const checkIdleMouse = () => {
		if (!hasTheMouseMoved) {
			randomImage();
		}
		hasTheMouseMoved = false;
		resetTimer();

		setTimeout(checkIdleMouse, 7000);
	};

	checkIdleMouse();
};
const activeIdleImage = () => {
	setTimeout(() => {
		randomIdleImage(images);
	}, 5000);
};

circlesHoverEffect();
arrowChangeImage(images);
circleImagePreview(images);
circleImageChange(images);

activeIdleImage();
