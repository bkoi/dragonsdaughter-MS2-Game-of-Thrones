let cards = document.querySelectorAll('.game-card');

function cardFlip(cards) {
    this.classList.toggle('flip');
}

cards.forEach((card) => card.addEventListener('click', cardFlip));