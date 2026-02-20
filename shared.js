const PLAYERS = [
    { name: 'Jonas', img: 'Jonas' },
    { name: 'Jessica', img: 'Jessan' },
    { name: 'Johanna', img: 'Johanna' },
    { name: 'Alex', img: 'Alex' },
    { name: 'Rasmus', img: 'Rasmus' },
    { name: 'Boel', img: 'Boel' },
    { name: 'Karla', img: 'Karla' },
    { name: 'Elin', img: 'Elin' }
];

function getImg(player, mood) {
    return 'Chameleon Lillebror/' + mood + ' ' + player.img + '.webp';
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function launchConfetti(count) {
    const container = document.getElementById('confettiContainer');
    if (!container) return;
    const colors = ['#818cf8', '#d946ef', '#fbbf24', '#34d399', '#f472b6', '#38bdf8', '#f87171'];
    for (let i = 0; i < (count || 60); i++) {
        const el = document.createElement('div');
        el.className = 'confetti';
        el.style.left = Math.random() * 100 + '%';
        el.style.background = colors[Math.floor(Math.random() * colors.length)];
        el.style.width = (6 + Math.random() * 8) + 'px';
        el.style.height = (6 + Math.random() * 8) + 'px';
        el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        el.style.animationDuration = (2 + Math.random() * 3) + 's';
        el.style.animationDelay = (Math.random() * 2) + 's';
        container.appendChild(el);
    }
    setTimeout(() => { container.innerHTML = ''; }, 6000);
}
