window.addEventListener('scroll', () => {
    let Animated = document.getElementsByClassName("Boo");
    
	for (let index = 0; index < Animated.length; index++) {
		let AnimatedEnter = Animated[index].getBoundingClientRect().top;
		let screamp = window.innerHeight / 1.25;

		if (AnimatedEnter < screamp) { Animated[index].classList.add('apearAnimated'); }
        else { Animated[index].classList.remove('apearAnimated'); }
	}
});