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
  console.log(data);
}

// or ...
// can we do this?
//
// ... take an image from the json object
// and put it in the DOM so we can manipulate the parts of it there?
// guess we need to put it in as 'response.text' instead of 'response.json'?
// (like the coloring book)

// show data from API
function showSceneOne(data) {
  // document.querySelector("#scene_three_bg").innerHTML = data;
  document.querySelector("#sceneOneText").innerHTML = data.scene_one[2].text;
  showSceneTwo(data);
}

function showSceneTwo(data) {
  document.querySelector("#sceneTwoText").innerHTML = data.scene_two[2].text;
  showSceneThree(data);
}

function showSceneThree(data) {
  var world_url = data.scene_three[0].media_url;
  document.querySelector("#worldImg").src += world_url;
  //document.querySelector("#island").src = data.scene_three[0].media_url;
  //document.querySelector("#sceneThreeText").innerHTML = data.scene_three[2].text;
}

//MODAL
/*
const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
  modal.classList.add("hide");
});

function showDetails(data) {
  console.log(data)
  modal.querySelector(".modal-name").textContent = data.name;
  modal.querySelector(".modal-description").textContent = data.longdescription;
  modal.querySelector(".modal-price").textContent = data.price;
  modal.classList.remove("hide");
}
*/

//ANIMATIONS screen 2
/*Animation lights*/
gsap.from("#birth", {
  duration: 10,
  scale: 0.5,
  ease: "back"
});

let space = document.getElementById("space"),
  spaceWidth = space.scrollWidth,
  spaceHeight = space.scrollHeight,
  perspective = 100;

space.style.setProperty(`--perspective`, `${perspective}px`);

function makeStar() {
  const star = document.createElement('time'),
    starWidth = gsap.utils.random(1, 2, 1),
    starHeight = starWidth * gsap.utils.random(20, 40, 1),
    randomRotation = Math.random() * 360,
    scaleModifier = Math.random();

  const visibleRangeMaximum = spaceWidth - spaceHeight > 0 ? spaceWidth / 2 : spaceHeight / 2;

  gsap.set(star, {
    width: starWidth,
    height: starHeight,
    transform: `
      translateY(${starHeight / 2}px)
      rotate(${randomRotation}deg)
      rotateX(90deg)
      translate3d(0,0,0px)
      scaleX(${scaleModifier})
    `,
  });

  gsap.to(star, {
    duration: "random(5, 20)",
    transform: `
      translateY(${starHeight / 2}px)
      rotate(${randomRotation}deg)
      rotateX(90deg)
      translate3d(0,0,${perspective + visibleRangeMaximum}px)
      scaleX(${scaleModifier})
    `,
    repeat: -1,
    ease: "none",
  }).progress(Math.random());

  space.appendChild(star);
}

for (let i = 0; i < 200; i++) {
  makeStar();
}