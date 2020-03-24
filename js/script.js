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

// get data from API
async function getData() {
	const api_url = "json/scenes.json";
	const response = await fetch(api_url);
	const data = await response.json();
	showSceneThree(data);
	// console.log(data);
}

// or ...
// can we do this?
//
// ... take an image from the json object
// and put it in the DOM so we can manipulate the parts of it there?
// guess we need to put it in as 'response.text' instead of 'response.json'?
// (like the coloring book)

// // show data from API
// function showSceneOne(data) {
// 	// document.querySelector("#scene_three_bg").innerHTML = data;
// 	document.querySelector("#sceneOneText").innerHTML = data.scene_one[2].text;
// 	showSceneTwo(data);
// }

// function showSceneTwo(data) {
// 	document.querySelector("#sceneTwoText").innerHTML = data.scene_two[2].text;
// 	showSceneThree(data);
// }

function showSceneThree(data) {
	document.querySelector("#island").src = data.scene_three[0].media_url;
	document.querySelector("#sceneThreeText").innerHTML = data.scene_three[2].text;
}
