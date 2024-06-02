const notes = {
    'C': 'assets/sounds/C.aac',
    'D': 'assets/sounds/D.aac',
    'E': 'assets/sounds/E.aac',
    'F': 'assets/sounds/F.aac',
    'G': 'assets/sounds/G.aac',
    'A': 'assets/sounds/A.aac',
    'B': 'assets/sounds/B.aac'
};

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note');
        const audio = new Audio(notes[note]);
        audio.play();
    });
});