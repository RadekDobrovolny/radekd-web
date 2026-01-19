const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const audioBuffers = {};
let isLoading = true;

// Načti všechny audio soubory do bufferů
async function loadAudioFiles() {
    const promises = Object.entries(notes).map(async ([note, url]) => {
        try {
            const response = await fetch(url);
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
            audioBuffers[note] = audioBuffer;
        } catch (err) {
            console.error(`Failed to load ${note}:`, err);
        }
    });

    await Promise.all(promises);isLoading = false;
}

function playNote(note) {
    if (isLoading || !audioBuffers[note]) return;

    // Obnovení audio kontextu po user interaction (mobilní požadavek)
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    // Vytvoř nový source node pro každé přehrání
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffers[note];
    source.connect(audioContext.destination);
    source.start(0);
}

// Načti audio soubory při startu
loadAudioFiles();

document.querySelectorAll('.key').forEach(key => {
    const note = key.getAttribute('data-note');

    // Touchstart s pasivní optimalizací
    key.addEventListener('touchstart', (e) => {
        e.preventDefault();
        playNote(note);
    }, { passive: false });

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
