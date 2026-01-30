/* Animated Text */
const textList = [
  "FullStack Developer",
  "Learner",
  "Problem Solver",
  "Tech Enthusiast",
  "Cybersecurity Learner"
];

let currentIndex = 0;
const animatedText = document.getElementById("animatedText");

function updateAnimatedText() {
  animatedText.textContent = textList[currentIndex];
  currentIndex = (currentIndex + 1) % textList.length;
}

setInterval(updateAnimatedText, 2000);
updateAnimatedText();

/* Theme Toggle */
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const theme = document.body.classList.contains("dark")
    ? "dark"
    : "light";

  localStorage.setItem("theme", theme);
});

/* Load Saved Theme */
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}
