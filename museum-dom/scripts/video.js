const prog = document.querySelectorAll('.progress');
  


prog.forEach ( el => {
    el.addEventListener('input', function() {
        const value = this.value;
        this.style.background = `linear-gradient(to right, 
          #710707 ${value}%, 
          #C4C4C4 ${value}%, 
          #C4C4C4 100%)`
      })
})

const volume = document.querySelector(".volume");
const progress = document.querySelector(".progress__play");
const videoPlayer = document.querySelector(".video-player");
const video = document.querySelector(".video-viewer");
const bigTogglePlayButton = document.querySelector(".video-big-play");
const smallTogglePlayButton = document.querySelector(".icon__play");
const muteVolumeButton = document.querySelector(".icon__sound");
const fullScreenButton = document.querySelector(".video__resize");

const togglePlay = () => {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
};

const changePlayIcon = () => {
	if (!video.paused) {
		bigTogglePlayButton.style.display = "none";
		smallTogglePlayButton.innerHTML =
			'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><title>iconfinder_211871_pause_icon</title><path fill="#b3b3b3" d="M12.539 28.828v-27.662c0-0.515-0.415-0.93-0.938-0.93h-5.506c-0.523 0-0.938 0.415-0.938 0.93v27.662c0 0.515 0.415 0.938 0.938 0.938h5.506c0.523 0 0.938-0.415 0.938-0.938z"></path><path fill="#b3b3b3" d="M23.906 0.234h-5.506c-0.515 0-0.938 0.415-0.938 0.93v27.662c0 0.515 0.415 0.938 0.938 0.938h5.506c0.515 0 0.938-0.415 0.938-0.938v-27.662c0-0.515-0.415-0.93-0.938-0.93z"></path></svg>';
	} else {
		bigTogglePlayButton.style.display = "block";
		smallTogglePlayButton.innerHTML =
			'<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.237 14.75L2 0C2 22.23 2 11.32 2 29.49L28.237 14.75Z" fill="#B3B3B3"/></svg>';
	}
};

const backSkipValue = -10;
const forwardSkipValue = 10;
function skips(value) {
	video.currentTime += value;
}

function changePositionVolume() {
	video.volume = this.value;
	this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${
		this.value * 100
	}%, #c4c4c4 ${this.value * 100}%, #c4c4c4 100%)`;
}

function handleVolume() {
	if (video.volume) {
		video.muted = false;
		muteVolumeButton.innerHTML =
			'<svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.86 0L3.63 10.42V19.07L17.86 29.49C17.83 7.26 17.86 18.17 17.86 0Z" fill="#B3B3B3" /><path d="M0 21.9198H7.47V7.55981H0V21.9198Z" fill="#B3B3B3" /><path d="M27 29.1399C26.6559 29.1407 26.3193 29.0395 26.0328 28.849C25.7462 28.6586 25.5225 28.3874 25.39 28.0699C25.2993 27.8572 25.2514 27.6286 25.249 27.3974C25.2467 27.1661 25.2899 26.9367 25.3763 26.7221C25.4627 26.5076 25.5905 26.3122 25.7524 26.1471C25.9143 25.982 26.1072 25.8504 26.32 25.7599C27.7344 25.1603 29.0184 24.2907 30.1 23.1999C32.3328 20.9541 33.5873 17.9167 33.59 14.7499C33.5793 11.5788 32.3138 8.5408 30.07 6.29988C28.9863 5.20894 27.7031 4.33644 26.29 3.72988C25.8627 3.547 25.5251 3.20251 25.3509 2.7716C25.1766 2.3407 25.1799 1.85837 25.36 1.42988C25.4463 1.21604 25.5746 1.02173 25.7375 0.858495C25.9003 0.695259 26.0943 0.566432 26.308 0.479673C26.5216 0.392914 26.7505 0.349995 26.9811 0.353466C27.2116 0.356938 27.4391 0.406729 27.65 0.49988C31.3419 2.07523 34.2782 5.02222 35.84 8.71988C36.6452 10.6177 37.0601 12.6583 37.06 14.7199C37.059 16.7804 36.6477 18.82 35.85 20.7199C35.077 22.5565 33.9526 24.2244 32.54 25.6299C31.1475 27.0638 29.4858 28.209 27.65 28.9999C27.4453 29.0907 27.224 29.1384 27 29.1399Z" fill="#B3B3B3" /><path d="M23.69 22.0801C23.3094 22.0796 22.9406 21.9476 22.6462 21.7064C22.3518 21.4652 22.1499 21.1297 22.0746 20.7566C21.9992 20.3835 22.0551 19.9959 22.2329 19.6594C22.4106 19.3229 22.6993 19.0581 23.0499 18.9101C23.8655 18.5635 24.5605 17.9838 25.048 17.2438C25.5354 16.5037 25.7936 15.6362 25.79 14.7501C25.7935 14.149 25.6744 13.5535 25.44 13.0001C25.2031 12.4627 24.8634 11.9769 24.44 11.5701C24.0312 11.1489 23.5458 10.8095 23.01 10.5701C22.6564 10.3727 22.3883 10.0515 22.2574 9.66825C22.1264 9.28504 22.1418 8.86693 22.3008 8.49445C22.4597 8.12197 22.7508 7.82146 23.118 7.6508C23.4853 7.48013 23.9028 7.45138 24.29 7.57008C25.4625 8.07189 26.495 8.8522 27.2977 9.84332C28.1005 10.8344 28.6493 12.0064 28.8966 13.2577C29.1439 14.5089 29.0822 15.8016 28.7168 17.0235C28.3515 18.2455 27.6934 19.3599 26.7999 20.2701C26.0941 20.9834 25.2548 21.5508 24.3299 21.9401C24.1281 22.0293 23.9106 22.0769 23.69 22.0801Z" fill="#B3B3B3" /></svg>';
	} else {
		video.muted = true;
		muteVolumeButton.innerHTML =
			'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><title>mute</title><path fill="#b3b3b3" d="M18.405 2.387c-0.445 0-0.831 0.163-1.156 0.488l-8.556 8.556h-6.732c-0.446 0-0.831 0.163-1.156 0.488s-0.488 0.711-0.488 1.156v9.865c0 0.445 0.163 0.831 0.488 1.156s0.711 0.488 1.156 0.488h6.732l8.556 8.556c0.326 0.325 0.711 0.488 1.156 0.488s0.831-0.163 1.156-0.488 0.488-0.711 0.488-1.156v-27.955c0-0.445-0.163-0.831-0.488-1.156s-0.711-0.488-1.156-0.488z"></path><path fill="#b3b3b3" d="M31.902 18.679l3.468-3.468c0.22-0.22 0.33-0.488 0.33-0.802s-0.11-0.582-0.33-0.802l-1.604-1.604c-0.22-0.22-0.488-0.33-0.802-0.33s-0.582 0.11-0.802 0.33l-3.468 3.468-3.468-3.468c-0.22-0.22-0.488-0.33-0.802-0.33s-0.582 0.11-0.802 0.33l-1.604 1.604c-0.22 0.22-0.33 0.488-0.33 0.802s0.11 0.582 0.33 0.802l3.468 3.468-3.468 3.468c-0.22 0.22-0.33 0.488-0.33 0.802s0.11 0.582 0.33 0.802l1.604 1.604c0.22 0.22 0.488 0.33 0.802 0.33s0.582-0.11 0.802-0.33l3.468-3.468 3.468 3.468c0.22 0.22 0.487 0.33 0.802 0.33s0.582-0.11 0.802-0.33l1.604-1.604c0.22-0.22 0.33-0.488 0.33-0.802s-0.11-0.582-0.33-0.802l-3.468-3.468z"></path></svg>';
	}
}

function handleVolumeClick() {
	if (video.volume <= 0) {
		video.muted = false;
	}
	video.muted = !video.muted;
	if (video.muted) {
		muteVolumeButton.innerHTML =
			'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><title>mute</title><path fill="#b3b3b3" d="M18.405 2.387c-0.445 0-0.831 0.163-1.156 0.488l-8.556 8.556h-6.732c-0.446 0-0.831 0.163-1.156 0.488s-0.488 0.711-0.488 1.156v9.865c0 0.445 0.163 0.831 0.488 1.156s0.711 0.488 1.156 0.488h6.732l8.556 8.556c0.326 0.325 0.711 0.488 1.156 0.488s0.831-0.163 1.156-0.488 0.488-0.711 0.488-1.156v-27.955c0-0.445-0.163-0.831-0.488-1.156s-0.711-0.488-1.156-0.488z"></path><path fill="#b3b3b3" d="M31.902 18.679l3.468-3.468c0.22-0.22 0.33-0.488 0.33-0.802s-0.11-0.582-0.33-0.802l-1.604-1.604c-0.22-0.22-0.488-0.33-0.802-0.33s-0.582 0.11-0.802 0.33l-3.468 3.468-3.468-3.468c-0.22-0.22-0.488-0.33-0.802-0.33s-0.582 0.11-0.802 0.33l-1.604 1.604c-0.22 0.22-0.33 0.488-0.33 0.802s0.11 0.582 0.33 0.802l3.468 3.468-3.468 3.468c-0.22 0.22-0.33 0.488-0.33 0.802s0.11 0.582 0.33 0.802l1.604 1.604c0.22 0.22 0.488 0.33 0.802 0.33s0.582-0.11 0.802-0.33l3.468-3.468 3.468 3.468c0.22 0.22 0.487 0.33 0.802 0.33s0.582-0.11 0.802-0.33l1.604-1.604c0.22-0.22 0.33-0.488 0.33-0.802s-0.11-0.582-0.33-0.802l-3.468-3.468z"></path></svg>';
	} else {
		muteVolumeButton.innerHTML =
			'<svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.86 0L3.63 10.42V19.07L17.86 29.49C17.83 7.26 17.86 18.17 17.86 0Z" fill="#B3B3B3" /><path d="M0 21.9198H7.47V7.55981H0V21.9198Z" fill="#B3B3B3" /><path d="M27 29.1399C26.6559 29.1407 26.3193 29.0395 26.0328 28.849C25.7462 28.6586 25.5225 28.3874 25.39 28.0699C25.2993 27.8572 25.2514 27.6286 25.249 27.3974C25.2467 27.1661 25.2899 26.9367 25.3763 26.7221C25.4627 26.5076 25.5905 26.3122 25.7524 26.1471C25.9143 25.982 26.1072 25.8504 26.32 25.7599C27.7344 25.1603 29.0184 24.2907 30.1 23.1999C32.3328 20.9541 33.5873 17.9167 33.59 14.7499C33.5793 11.5788 32.3138 8.5408 30.07 6.29988C28.9863 5.20894 27.7031 4.33644 26.29 3.72988C25.8627 3.547 25.5251 3.20251 25.3509 2.7716C25.1766 2.3407 25.1799 1.85837 25.36 1.42988C25.4463 1.21604 25.5746 1.02173 25.7375 0.858495C25.9003 0.695259 26.0943 0.566432 26.308 0.479673C26.5216 0.392914 26.7505 0.349995 26.9811 0.353466C27.2116 0.356938 27.4391 0.406729 27.65 0.49988C31.3419 2.07523 34.2782 5.02222 35.84 8.71988C36.6452 10.6177 37.0601 12.6583 37.06 14.7199C37.059 16.7804 36.6477 18.82 35.85 20.7199C35.077 22.5565 33.9526 24.2244 32.54 25.6299C31.1475 27.0638 29.4858 28.209 27.65 28.9999C27.4453 29.0907 27.224 29.1384 27 29.1399Z" fill="#B3B3B3" /><path d="M23.69 22.0801C23.3094 22.0796 22.9406 21.9476 22.6462 21.7064C22.3518 21.4652 22.1499 21.1297 22.0746 20.7566C21.9992 20.3835 22.0551 19.9959 22.2329 19.6594C22.4106 19.3229 22.6993 19.0581 23.0499 18.9101C23.8655 18.5635 24.5605 17.9838 25.048 17.2438C25.5354 16.5037 25.7936 15.6362 25.79 14.7501C25.7935 14.149 25.6744 13.5535 25.44 13.0001C25.2031 12.4627 24.8634 11.9769 24.44 11.5701C24.0312 11.1489 23.5458 10.8095 23.01 10.5701C22.6564 10.3727 22.3883 10.0515 22.2574 9.66825C22.1264 9.28504 22.1418 8.86693 22.3008 8.49445C22.4597 8.12197 22.7508 7.82146 23.118 7.6508C23.4853 7.48013 23.9028 7.45138 24.29 7.57008C25.4625 8.07189 26.495 8.8522 27.2977 9.84332C28.1005 10.8344 28.6493 12.0064 28.8966 13.2577C29.1439 14.5089 29.0822 15.8016 28.7168 17.0235C28.3515 18.2455 27.6934 19.3599 26.7999 20.2701C26.0941 20.9834 25.2548 21.5508 24.3299 21.9401C24.1281 22.0293 23.9106 22.0769 23.69 22.0801Z" fill="#B3B3B3" /></svg>';
	}
}

function handleProgress() {
	const current = (video.currentTime / video.duration) * 100;
	progress.value = current;
	progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${progress.value}%, #c4c4c4 ${progress.value}%, #c4c4c4 100%)`;
}

function scrub(e) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

const removeVelocityValue = -0.25;
const addVelocityValue = 0.25;
function videoVelocity(value) {
	video.playbackRate += value;
	let playbackRate = Math.floor(video.playbackRate * 100) / 100;
	if (playbackRate < 0.25) {
		video.playbackRate = 0.25;
	} else if (playbackRate > 3) {
		video.playbackRate = 2.75;
	}
	if (playbackRate <= 0.25) {
		removeVelocityButton.disabled = true;
	} else if (playbackRate >= 3) {
		addVelocityButton.disabled = true;
	} else {
		removeVelocityButton.disabled = false;
		addVelocityButton.disabled = false;
	}
}

let isFullscreen = false;
function openFullscreen() {
	isFullscreen = !isFullscreen;
	if (isFullscreen && !Boolean(document.fullscreenElement)) {
		videoPlayer.requestFullscreen();
		fullScreenButton.innerHTML =
			'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><title>fullscreen_exit</title><path fill="#b3b3b3" d="M28.255 7.745h7.721v5.067h-12.789v-12.789h5.067v7.721zM23.188 35.976v-12.789h12.789v5.067h-7.721v7.721h-5.067zM7.745 7.745v-7.721h5.067v12.789h-12.789v-5.067h7.721zM0.024 28.255v-5.067h12.789v12.789h-5.067v-7.721h-7.721z"></path></svg>';
	} else {
		document.exitFullscreen();
		fullScreenButton.innerHTML =
			'<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.48 31.6299H23.05V35.8599H35.7001V23.1499H31.48V31.6299Z" fill="#B3B3B3" /><path d="M4.22 23.1499H0V35.8599H12.65V31.6299H4.22V23.1499Z" fill="#B3B3B3" /><path d="M0 12.71H4.22V4.24H12.65V0H0V12.71Z" fill="#B3B3B3" /><path d="M23.05 0V4.24H31.48V12.71H35.7001V0H23.05Z" fill="#B3B3B3" /></svg>';
	}
}

function exitHandler() {
	if (!document.fullscreenElement) {
		isFullscreen = false;
		fullScreenButton.innerHTML =
			'<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.48 31.6299H23.05V35.8599H35.7001V23.1499H31.48V31.6299Z" fill="#B3B3B3" /><path d="M4.22 23.1499H0V35.8599H12.65V31.6299H4.22V23.1499Z" fill="#B3B3B3" /><path d="M0 12.71H4.22V4.24H12.65V0H0V12.71Z" fill="#B3B3B3" /><path d="M23.05 0V4.24H31.48V12.71H35.7001V0H23.05Z" fill="#B3B3B3" /></svg>';
	}
}

document.addEventListener("keydown", (e) => {
	if (e.key === " " || e.key === "ArrowRight" || e.key === "ArrowLeft") {
		e.preventDefault();
	}
});

document.addEventListener("keyup", (e) => {
	if (e.key === "m") handleVolumeClick();
	if (e.key === " " || e.key === "k") togglePlay();
	if (e.key === ",") videoVelocity(removeVelocityValue);
	if (e.key === ".") videoVelocity(addVelocityValue);
	if (e.key === "f") openFullscreen();
	if (e.key === "j" || e.key === "ArrowLeft") skips(backSkipValue);
	if (e.key === "l" || e.key === "ArrowRight") skips(forwardSkipValue);
});

bigTogglePlayButton.addEventListener("click", togglePlay);
smallTogglePlayButton.addEventListener("click", togglePlay);

video.addEventListener('play', changePlayIcon);
video.addEventListener('pause', changePlayIcon);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", handleProgress);


// forwardSkipButton.addEventListener("click", () => skips(forwardSkipValue));
// backSkipButton.addEventListener("click", () => skips(backSkipValue));

volume.addEventListener("change", handleVolume);
volume.addEventListener("click", handleVolume);
volume.addEventListener("mousemove", changePositionVolume);
muteVolumeButton.addEventListener('click', handleVolumeClick);


progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
let mousedown = false;
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

fullScreenButton.addEventListener("click", openFullscreen);
document.addEventListener("fullscreenchange", exitHandler);

progress.addEventListener("input", function () {
	this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${this.value}%, #c4c4c4 ${this.value}%, #c4c4c4 100%)`;
});
volume.addEventListener("input", function () {
	this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${this.value}%, #c4c4c4 ${this.value}%, #c4c4c4 100%)`;
});