let container = document.querySelector(".container");
let dino = document.querySelector(".dino");
let block = document.querySelector(".block");
let road = document.querySelector(".road");
let cloud = document.querySelector(".cloud");
let score = document.querySelector(".score");
let gameover = document.querySelector(".gameover");

//Score
let interval = null;
let playerScore = 0;

// function for score
let scoreCounter = ()=>{
playerScore++;
score.innerHTML = `score <b>${playerScore}</b>`;
}

// start game

window.addEventListener("keydown" , (start)=>{
  if (start.code == "Space")
{
    gameover.style.display = "none"
    block.classList.add("blockActive")
    road.firstElementChild.style.animation = "animateRoad 3s linear infinite"
    cloud.firstElementChild.style.animation = "animateCloud 5s linear infinite"

    // score
    let playerScore = 0;
    interval = setInterval(scoreCounter,200)
}
})

window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
      if (dino.classList != "dinoActive") {
          dino.classList.add("dinoActive");

          setTimeout(() => {
              dino.classList.remove("dinoActive");
          }, 500);
      }
  }
});

let result = setInterval(() => {
  let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
  // console.log("dinoBottom" + dinoBottom);

  let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
  // console.log("blockLeft" + blockLeft);

  if (dinoBottom <= 90 && blockLeft >= 20 && blockLeft <= 145) {
      gameover.style.display = "block";
      block.classList.remove("blockActive");
      road.firstElementChild.style.animation = "none";
      cloud.firstElementChild.style.animation = "cloudAnimate 1.5s linear infinite"
      clearInterval(interval);
      playerScore = 0;
  }
}, 10);