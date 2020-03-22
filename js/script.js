"use strict";
// require(@babel/polyfill);
window.addEventListener("DOMContentLoaded", start);

gsap.registerPlugin(MotionPathPlugin);
gsap.from(".anim", { duration: 3, stagger: 1, y: 100 });

// const data = [
// 	{
// 		i: "1.jpg"
// 	}
// ];

// start function to listen for events
function start() {
	// console.log("start");
	getInstagram();
}

// fetch Instagram feed from API
function getInstagram() {
	console.log("getInstagram");
	fetch("json/test2.json")
		.then(response => {
			return response.json();
		})
		.then(allPosts => {
			allPosts.magickingdom.forEach(post => {
				showData(post);
				console.log(post.timestamp);
			});
		});
}

// function showData(post) {
// 	console.log("showData");
// 	const template = document.querySelector("template").content;
// 	const copy = template.cloneNode(true);
// 	// console.log(post);
// 	// copy.querySelector(".biggy").textContent = post.interesting;
// 	copy.querySelector(".data_image").src = post.media_url;
// 	document.getElementById("testy").appendChild(copy);
// }

function showData(post) {
	console.log("showData");
	const template = document.querySelector("template").content;
	const copy = template.cloneNode(true);
	// console.log(post);
	copy.querySelector(".biggy").textContent = post.burger;
	document.getElementById("embassy").appendChild(copy);
}
