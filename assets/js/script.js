const cards = document.querySelectorAll('.game-card');

function startGame() {
    this.classList.toggle('flip');
}

cards.forEach((card) => card.addEventListener('click', startGame));