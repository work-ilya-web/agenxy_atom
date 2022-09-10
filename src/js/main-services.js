if ($(".main-services").length > 0){
	var swiper = new Swiper(".main-services__row", {
		slidesPerView: 3,
		slidesPerGroup: 1,
		spaceBetween: 24,
		loop: false,
		loopFillGroupWithBlank: false,
		speed: 1000,
		iOSEdgeSwipeDetection: true,
		breakpoints: {
			200: {
				slidesPerView: 1,
				spaceBetween: 20,
				slidesPerGroup: 1,
			},
			370: {
				slidesPerView: 1.1,
				spaceBetween: 20,
				slidesPerGroup: 1,
			},
			680: {
				slidesPerView: 1.8,
				spaceBetween: 20,
				slidesPerGroup: 1,
			},
			760: {
				slidesPerView: 2,
				spaceBetween: 24,
				slidesPerGroup: 1,
			},
			1010: {
				slidesPerView: 2,
				slidesPerGroup: 1,
			},
			1010: {
				slidesPerView: 2.4,
				slidesPerGroup: 1,
			},
			1320: {
				slidesPerView: 3,
				slidesPerGroup: 1,
				spaceBetween: 24,
			}
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
			hide: false,
			dragSize: 115,
			snapOnRelease: false,
		},
    });
}