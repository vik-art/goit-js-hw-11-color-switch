const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
},
colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
],

setRandomColor = () => {
  const _color = colors[randomIntegerFromInterval(0, colors.length - 1)]
  console.log(_color)
  document.body.style.backgroundColor = _color;
}
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = undefined;
refs.startBtn.addEventListener('click', e => { intervalId =
setInterval(() => setRandomColor(), 1000);
refs.startBtn.setAttribute("disabled", true);
})

refs.stopBtn.addEventListener('click', e => {
  clearInterval(intervalId);
  refs.startBtn.removeAttribute("disabled");
})