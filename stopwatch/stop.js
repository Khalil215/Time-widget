let pause = document.getElementById("pa")
let play = document.getElementById("pl")
let reset = document.getElementById("reset")
let second = document.getElementById("sec")
let minute = document.getElementById("min");
let miliSec = document.getElementById("milisec")
let start = document.getElementById("st")
let button = document.querySelectorAll('.button1')

var stats = 0;

function waitforme(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, ms);
  });
}

function pauser() {
  return new Promise((resolve) => {
    let playbuttonclick = function () {
      pause.style.display = "unset";
      play.style.display = "none";
      reset.style.display = "none";

      play.removeEventListener("click", playbuttonclick);

      stats = 0;
      resolve("resolved");
    };
    play.addEventListener("click", playbuttonclick);
  });
}

pause.addEventListener("click", function () {
  stats = 1;

  pause.style.display = "none";
  play.style.display = "unset";
  play.innerHTML = "Play";
  reset.style.display = "unset";
});

reset.addEventListener('click', ()=>{
  second.innerHTML = 0;
  minute.innerHTML = 0;
  miliSec.innerHTML = 0;
  pause.style.display = "none";
  play.innerHTML = "Start";
  reset.style.display = "none";
});

async function go() {
  
  pause.style.display = "unset";
  start.style.display = "none";


  for (let a = 0; ; a = a + 100) {
    if (a == 1000) {
      a = 0;
      second.innerHTML = Number(second.innerHTML) + 1;
    }

    if (second.innerHTML == 60) {
      second.innerHTML = 0;

      minute.innerHTML = Number(minute.innerHTML) + 1;
    }

    miliSec.innerHTML = a / 100;
    await waitforme(100);
    if (stats == 1) await pauser();
  }
}
start.addEventListener("click", go)

function changeMode() {
  document.body.classList.toggle('nightMode');
  button.forEach(b => b.classList.toggle('nightModeOB'))
}
mode.addEventListener('click', changeMode)