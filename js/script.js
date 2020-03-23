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
function getData() {
  /*const api_url = "json/scenes.json";
	const response = await fetch(api_url);
	const data = await response.json();
	// console.log(data.images[2].title);
	showData(data);*/

  fetch("img/indexDark.svg")
    .then(response => response.text())
    .then(mySvgData => {
      document.querySelector("#sceneOne").innerHTML = mySvgData;
    });
  //let mySvgData = await response.json();
  //console.log(mySvgData);

  showData();
}

// show data from API
/*function showData(data) {
	document.querySelector(".scene_heading").textContent = data.scene_one[0].title;
}*/

function showData() {
  let startpage = document.querySelector("#startpage");
}
