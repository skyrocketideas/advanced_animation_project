// require (@babel/polyfill);
"use strict";

window.addEventListener("DOMContentLoaded", start);

// setup gsap
gsap.registerPlugin(MotionPathPlugin);

// gsap test animation
// gsap.from(".anim", { duration: 3, stagger: 1, y: 100 });

// start function
function start() {
	console.log("start");
	getData();
}

async function getData() {
	const api_url = "json/scenes.json";
	const response = await fetch(api_url);
	const data = await response.json();
	showSceneThree(data);
	console.log(data);
}

// scene 3 show image
function showSceneThree(data) {
	console.log("showSceneThree");
	const world_url = data.scene_three[0].media_url;
	document.querySelector("#worldImg").innerHTML = world_url;
	//document.querySelector("#island").src = data.scene_three[0].media_url;
	//document.querySelector("#sceneThreeText").innerHTML = data.scene_three[2].text;
}

// show data from API
// function showSceneOne(data) {
// 	document.querySelector("#sceneOneText").innerHTML = data.scene_one[2].text;
// 	showSceneTwo(data);
// }

// // scene 2 show data
// function showSceneTwo(data) {
// 	document.querySelector("#sceneTwoText").innerHTML = data.scene_two[2].text;
// 	showSceneThree(data);
// }

// modal
const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
	modal.classList.add("hide");
});

function showDetails(data) {
	console.log(data);
	modal.querySelector(".modal-name").textContent = data.name;
	modal.querySelector(".modal-description").textContent = data.longdescription;
	modal.querySelector(".modal-price").textContent = data.price;
	modal.classList.remove("hide");
}

// async function getData() {
// 	const api_url = "img/world_2.svg";
// 	let response = await fetch(api_url);
// 	let data = await response.text();
// 	document.querySelector("#world").innerHTML = data;
// 	selectBuildings();
// 	// console.log(data);
// }

// // select buildings
// function selectBuildings() {
// 	console.log("selectBuildings");
// 	document.querySelectorAll("#earth, #houseFront").forEach(element => {
// 		element.addEventListener("click", function(event) {
// 			let chosenPath = event.target;
// 			element.classList.add("active");
// 			console.log(chosenPath);
// 		});
// 	});
// }
