let cards = document.querySelectorAll('.game-card');

function cardFlip(cards) {
    this.classList.toggle('flip');
    console.log('flipping');
}

cards.forEach((card) => card.addEventListener('click', cardFlip));