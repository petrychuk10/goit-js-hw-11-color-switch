const body = document.querySelector("body");
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const startButton = document.querySelector('button[data-action="start"]');
const stopButton = document.querySelector('button[data-action="stop"]');
startButton.addEventListener("click", startChangeBg);
stopButton.addEventListener("click", stopChangeBg);

function startChangeBg() {
  timer = setInterval(() => {
    body.style.backgroundColor =
      colors[randomIntegerFromInterval(colors.length)];
  }, 1000);
}

function stopChangeBg() {
  clearInterval(timer);
}

const randomIntegerFromInterval = (number) => {
  return Math.floor(Math.random() * number);
};