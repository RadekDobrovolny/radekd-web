const audioElements = {};

// Vytvoř audio pool pro každou notu (více instancí pro plynulé přehrávání)
const POOL_SIZE = 3;

Object.entries(notes).forEach(([note, url]) => {
    audioElements[note] = [];
    for (let i = 0; i < POOL_SIZE; i++) {
        const audio = new Audio(url);
        audio.preload = 'auto';
        audio.volume = 1.0;
        audioElements[note].push(audio);
    }
});

// Index pro round-robin výběr z poolu
const noteIndex = {};
Object.keys(notes).forEach(note => noteIndex[note] = 0);

function playNote(note) {
    if (!audioElements[note]) return;

    const pool = audioElements[note];
    const audio = pool[noteIndex[note]];

    // Přepni na další audio v poolu
    noteIndex[note] = (noteIndex[note] + 1) % POOL_SIZE;

    // Zastav předchozí přehrávání a začni znovu
    audio.pause();
    audio.currentTime = 0;
    audio.play().catch(err => console.warn('Audio play failed:', err));
}

document.querySelectorAll('.key').forEach(key => {
    const note = key.getAttribute('data-note');

    // Použij touchstart pro lepší odezvu na mobilech
    key.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Zabraň ghost clicku
        playNote(note);
    });

    key.addEventListener('click', () => {
        playNote(note);
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});

document.getElementById('switch').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
});
