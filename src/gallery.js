window.addEventListener("mousewheel", e => {
	if (e.deltaX === 0) {
		e.stopPropagation();
		e.preventDefault();
		window.scrollBy(e.deltaY, 0);
	}
});