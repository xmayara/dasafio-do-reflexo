const circle = document.getElementById("circle");
const scoreDisplay = document.getElementById("score");
const gameArea = document.getElementById("game-area");
const themeToggle = document.getElementById("theme-toggle");

let score = 0;
let speed = 1000;
let timeoutId;

// Alternar Tema
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeToggle.textContent = isDark ? "☀️ Mudar Tema" : "🌙 Mudar Tema";
}

// Carregar Tema do Local Storage
window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️ Mudar Tema";
    }
    
    circle.addEventListener("click", handleClick);
    themeToggle.addEventListener("click", toggleTheme);
    startGame();
};

// Posiciona o círculo aleatoriamente
function moveCircle() {
    const maxX = gameArea.clientWidth - circle.clientWidth;
    const maxY = gameArea.clientHeight - circle.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    circle.style.left = `${randomX}px`;
    circle.style.top = `${randomY}px`;
}

// Quando o jogador clica no círculo
function handleClick() {
    score++;
    scoreDisplay.textContent = `Pontos: ${score}`;

    if (speed > 300) {
        speed -= 50;
    }

    clearTimeout(timeoutId);
    startGame();
}

// Inicia o jogo
function startGame() {
    moveCircle();
    timeoutId = setTimeout(startGame, speed);
}
