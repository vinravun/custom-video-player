const player = document.querySelector('.player'),
    video = player.querySelector('.player__video'),
    playButton = player.querySelector('.player__toggle'),
    skipButtons = player.querySelectorAll('[data-skip]'),
    fullscreenButton = player.querySelector('.player__fullscreen'),
    sliders = player.querySelectorAll('.player__slider'),
    progress = player.querySelector('.progress'),
    progressBar = progress.querySelector('.progress__filled');

function togglePlay() {
    video[video.paused ? 'play' : 'pause']();
}

function togglePlayButton() {
    this.paused ? playButton.classList.add('paused') : playButton.classList.remove('paused');
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip)
}

function toggleFullscreen() {

}

function handleSlider() {
    video[this.name] = this.value;
    player.querySelector('[for=playbackRate').textContent = `${this.value}x`;
}

function updateProgress() {
    const progressValue = video.currentTime / video.duration;
    progressBar.style.transform = `scaleX(${progressValue})`;
}

function scrub(e) {
    e.stopPropagation();
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', togglePlayButton);
video.addEventListener('pause', togglePlayButton);
video.addEventListener('timeupdate', updateProgress);

playButton.addEventListener('click', togglePlay);
skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));
fullscreenButton.addEventListener('click', toggleFullscreen);
sliders.forEach(slider => slider.addEventListener('change', handleSlider));
progress.addEventListener('click', scrub);

