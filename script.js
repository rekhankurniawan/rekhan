const box = document.getElementById("box");
const scoreText = document.getElementById("score");
const startBtn = document.getElementById("startBtn");
const gameArea = document.getElementById("gameArea");

let score = 0;
let gameStarted = false;

function moveBox() {
  const maxX = gameArea.clientWidth - box.offsetWidth;
  const maxY = gameArea.clientHeight - box.offsetHeight;

  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);

  box.style.left = x + "px";
  box.style.top = y + "px";
}

startBtn.addEventListener("click", () => {
  score = 0;
  scoreText.textContent = score;
  gameStarted = true;
  box.style.display = "block";
  moveBox();
});

box.addEventListener("click", () => {
  if (!gameStarted) return;
  score++;
  scoreText.textContent = score;
  moveBox();
});
