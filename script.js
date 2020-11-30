const player = document.querySelector('.player'),
    video = player.querySelector('.player__video'),
    playButton = player.querySelector('.player__toggle'),
    skipButtons = player.querySelectorAll('[data-skip]'),
    sliders = player.querySelectorAll('.player__slider');

function togglePlay() {
    video[video.paused ? 'play' : 'pause']();
}

function togglePlayButton() {
    this.paused ? playButton.classList.add('paused') : playButton.classList.remove('paused');
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleSlider() {
    console.log(video[this.value]);
    video[this.name] = this.value;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', togglePlayButton);
video.addEventListener('pause', togglePlayButton);
playButton.addEventListener('click', togglePlay);
skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));
sliders.forEach(slider => slider.addEventListener('change', handleSlider));