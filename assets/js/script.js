let card = document.getElementsByClassName('.game-card');
let cards = [... card];

for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', cardFlip);
};

function cardFlip() {
    this.classList.toggle('flip');
}

function shuffle(cards) {
    cards.forEach(card => {
        let randomIndex = Math.floor(Math.random() * 16);
        card.style.order = randomIndex;
    });
}