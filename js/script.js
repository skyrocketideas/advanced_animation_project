// require (@babel/polyfill);
"use strict";

window.addEventListener("DOMContentLoaded", start);

// setup gsap
gsap.registerPlugin(MotionPathPlugin);

// gsap test animation
// gsap.from(".anim", { duration: 3, stagger: 1, y: 100 });

// start function
function start() {
	// console.log("start");
	getData();
}

async function getData() {
	const api_url = "img/world.svg";
	let response = await fetch(api_url);
	let data = await response.text();
	document.querySelector("#world").innerHTML = data;
	selectBuildings();
	// console.log(data);
}

// select buildings
function selectBuildings() {
	console.log("selectBuildings");
	document.querySelectorAll("#house_15_, #house_16_").forEach(element => {
		element.addEventListener("click", function(event) {
			let chosenPath = event.target;
			console.log(chosenPath);
		});
	});
}

// async function getData() {
// 	const api_url = "json/scenes.json";
// 	const response = await fetch(api_url);
// 	const data = await response.json();
// 	showSceneThree(data);
// 	// console.log(data);
// }

// function showSceneThree(data) {
// 	document.querySelector("#island").src = data.scene_three[0].media_url;
// 	document.querySelector("#sceneThreeText").innerHTML = data.scene_three[2].text;
// }

// async function start() {
// 	console.log("start");
// 	let response = await fetch("assets/far_side_cat_fud_mono_too.svg");
// 	let mySvgData = await response.text();
// 	document.querySelector(".my_image").innerHTML = mySvgData;
// 	startManipulatingTheSvg();
// }
