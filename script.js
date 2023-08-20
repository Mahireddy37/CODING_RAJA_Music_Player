const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const skipBtn = document.getElementById('skip-btn');

playBtn.addEventListener('click', () => {
    audioPlayer.play();
    playBtn.disabled = true;
    pauseBtn.disabled = false;
});

pauseBtn.addEventListener('click', () => {
    audioPlayer.pause();
    pauseBtn.disabled = true;
    playBtn.disabled = false;
});

skipBtn.addEventListener('click', () => {
    // Implement skipping logic (e.g., change audio source)
});
