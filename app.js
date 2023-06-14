let container = document.querySelector(".container");
let dino = document.querySelector(".dino");
let cactus = document.querySelector(".cactus");
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
    cactus.classList.add("cactusActive")
    road.firstElementChild.style.animation = "animateRoad 3s linear infinite"
    cloud.firstElementChild.style.animation = "animateCloud 5s linear infinite"

    // score
    let playerScore = 0;
    interval = setInterval(scoreCounter,200)
}
})

// jump your character

window.addEventListener("Keydown" , (e)=>{ 
console.log(e);

if (e.key == "ArrowUp")
  if (dino.classList != "dinoActive")
  {
    dino.classList.add("dinoActive");

    // remove class after 0.5s
    setTimeout(() => {
        dino.classList.remove("dinoActive"); 
    }, 500);
  }

});

// `Game Over` if `character` hit the `cactus`
let result = setInterval(() => {
  let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
  
  let cactusLeft = parseInt(getComputedStyle(cactus).getPropertyValue("left"));

  if (dinoBottom <= 90 && cactusLeft >= 20 && cactusLeft <= 145){

    gameOver.style.display = "cactus";
    cactus.classList.remove("cactusActive");
    road.firstElementChild.style.animation = "none";
    cloud.firstElementChild.style.animation = "none";
    clearInterval(interval);
  }
}, 10);