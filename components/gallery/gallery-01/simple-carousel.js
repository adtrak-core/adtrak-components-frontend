// --------------------------------------------------------------------------------------------------
// SIMPLE CAROUSEL with left/right buttons
// Clicking right arrow button will scroll carousel onto the next carousel item
// User can also swipe/scroll
// --------------------------------------------------------------------------------------------------

var carouselArrows = document.querySelectorAll(".carousel-arrow");

carouselArrows.forEach((arrow) => {
	
	arrow.addEventListener("click", function() {
		arrow.parentNode.parentNode.querySelector('.carousel-arrow-left').classList.add('opacity-100');

		var carouselContainer = arrow.parentNode.parentNode.querySelector('.carousel-container');
		var carouselItem = arrow.parentNode.parentNode.querySelectorAll('.carousel-item');
		var x;

		if (arrow.classList.contains('carousel-arrow-right')) {
			x = (carouselItem[0].offsetWidth) + carouselContainer.scrollLeft;
			carouselContainer.scrollTo({
				left: x,
				behavior: "smooth",
			});
		} else {
			x = (carouselItem[0].offsetWidth) - carouselContainer.scrollLeft;
			carouselContainer.scrollTo({
				left: -x,
				behavior: "smooth",
			});
		}
	})
});