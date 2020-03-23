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
	const api_url = "img/world.svg";
	const response = await fetch(api_url);
	const data = await response.text();
	showData(data);
}

// or ...
// can we do this?
//
// async function getData() {
// const api_url = "json/scenes.json";
// const response = await fetch(api_url);
// const data = await response.json();
// showData(data);
//
// then take an image from the json object
// and put it in the DOM so we can manipulate the parts of it there?
// (like the coloring book)

// show data from API
function showData(data) {
	document.querySelector("#scene_three_bg").innerHTML = data;
	// document.querySelector("#scene_three_bg").innerHTML = data.scene_three[0].media_url;
}
