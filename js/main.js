
let stapSound = new Audio('./audio/stapler.mov');


let stapler = document.querySelector('.stapler');
stapler.onmousedown = function() {
	stapler.classList.add('clicked')
	stapSound.currentTime = -100;
	stapSound.play();
}

stapler.onmouseup = function() {
	stapler.classList.remove('clicked')
}