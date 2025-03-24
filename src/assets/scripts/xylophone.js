const audioElements = {};

Object.entries(notes).forEach(([note, url]) => {
  const audio = new Audio(url);
  audio.preload = 'auto';
  audio.load();
  audioElements[note] = audio;
});

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
      const note = key.getAttribute('data-note');
      audioElements[note].currentTime = 0;
      audioElements[note].play();
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