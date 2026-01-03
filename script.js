/* QUOTES */
const quotes = [
  "Grow focus, grow life 🌱",
  "Discipline beats motivation 💪",
  "Small steps every day 🔥"
];

if (document.getElementById("quote")) {
  quote.innerText = quotes[Math.floor(Math.random() * quotes.length)];
}

/* LOGIN */
function signup() {
  localStorage.setItem(user.value, pass.value);
  alert("Account created 🎉");
}

function login() {
  if (localStorage.getItem(user.value) === pass.value) {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login ❌");
  }
}

function logout() {
  window.location.href = "index.html";
}

/* STREAK */
let streak = localStorage.getItem("streak") || 0;
if (document.getElementById("streak")) {
  document.getElementById("streak").innerText = streak;
}

/* TODO */
function addTask() {
  let li = document.createElement("li");
  li.innerText = `${priority.value} ${task.value}`;
  li.onclick = () => li.style.textDecoration = "line-through";
  list.appendChild(li);
  task.value = "";
}

/* DARK MODE */
function toggleDark() {
  document.body.classList.toggle("dark");
}

/* POMODORO */
let time = 25 * 60;
let interval;

function startPomodoro() {
  clearInterval(interval);
  time = 25 * 60;
  plant.className = "plant stage0";

  interval = setInterval(() => {
    time--;
    updateTimer();
    growPlant();

    if (time === 0) {
      clearInterval(interval);
      streak++;
      localStorage.setItem("streak", streak);
      confetti();
      alert("🎉 Focus session complete!");
    }
  }, 1000);
}

function updateTimer() {
  let m = Math.floor(time / 60);
  let s = time % 60;
  timer.innerText = `${m}:${s < 10 ? "0" : ""}${s}`;
}

function growPlant() {
  if (time === 20 * 60) plant.className = "plant stage1";
  if (time === 10 * 60) plant.className = "plant stage2";
  if (time === 5 * 60) plant.className = "plant stage3";
}

/* CONFETTI */
function confetti() {
  for (let i = 0; i < 80; i++) {
    let c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = `hsl(${Math.random() * 360},100%,50%)`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}

/* MUSIC */
function toggleMusic() {
  music.paused ? music.play() : music.pause();
}
