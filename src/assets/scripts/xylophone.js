const audioBuffers = {};
let audioContext = null;
let loading = null;

// Načti všechny audio soubory do bufferů, ale až když je někdo opravdu potřebuje
function loadAudioFiles() {
    if (!loading) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        loading = Promise.all(Object.entries(notes).map(async ([note, url]) => {
            try {
                const response = await fetch(url);
                const arrayBuffer = await response.arrayBuffer();
                audioBuffers[note] = await audioContext.decodeAudioData(arrayBuffer);
            } catch (err) {
                console.error(`Failed to load ${note}:`, err);
            }
        }));
    }
    return loading;
}

async function playNote(note) {
    const ready = loadAudioFiles();

    // Obnovení audio kontextu po user interaction (mobilní požadavek), musí proběhnout ještě před await
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    await ready;
    if (!audioBuffers[note]) return;

    // Vytvoř nový source node pro každé přehrání
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffers[note];
    source.connect(audioContext.destination);
    source.start(0);
}

// Na desktopu začni stahovat už při najetí myší, ať první úder nečeká
document.querySelector('.xylophone').addEventListener('pointerenter', loadAudioFiles, { once: true });

// Na dotykových zařízeních se :active kvůli preventDefault neprojeví, stisk naznačí třída
function pressKey(key) {
    key.classList.add('pressed');
    setTimeout(() => key.classList.remove('pressed'), 150);
}

document.querySelectorAll('.key').forEach(key => {
    const note = key.getAttribute('data-note');

    // Touchstart s pasivní optimalizací
    key.addEventListener('touchstart', (e) => {
        e.preventDefault();
        playNote(note);
        pressKey(key);
    }, { passive: false });

    key.addEventListener('click', () => {
        playNote(note);
    });
});

// Výchozí režim nastavuje skript v <head>, tady je jen přepínač a sledování systému
const root = document.documentElement;

document.getElementById('switch').addEventListener('click', function () {
    root.classList.toggle('dark-mode');
    try {
        localStorage.setItem('dark-mode', root.classList.contains('dark-mode'));
    } catch (e) {}
});

// Dokud si návštěvník režim sám nepřepne, mění se se systémem i za běhu
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    let stored = null;
    try { stored = localStorage.getItem('dark-mode'); } catch (err) {}
    if (stored === null) {
        root.classList.toggle('dark-mode', e.matches);
    }
});
