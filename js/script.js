// import "@babel/polyfill";
// require (@babel/polyfill);
"use strict";

window.addEventListener("DOMContentLoaded", start);

gsap.registerPlugin(MotionPathPlugin);
gsap.from(".anim", { duration: 3, stagger: 1, y: 100 });

// start function to listen for events
function start() {
	// console.log("start");
	getData();
}

async function getData() {
	const api_url = "json/test2.json";
	const response = await fetch(api_url);
	const data = await response.json();
	console.log(data);
}

// function getInstagram() {
// 	console.log("getInstagram");
// 	fetch("json/test2.json")
// 		.then(response => {
// 			return response.json();
// 		})
// 		.then(allPosts => {
// 			allPosts.datamaster.forEach(post => {
// 				showData(post);
// 				console.log(post.timestamp);
// 			});
// 		});
// }

// function showData(post) {
// 	console.log("showData");
// 	const template = document.querySelector("template").content;
// 	const copy = template.cloneNode(true);
// 	copy.querySelector(".data_image").src = post.media_url;
// 	document.getElementById("testy").appendChild(copy);
// }
