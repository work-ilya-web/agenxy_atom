if ($(".music-signature").length > 0){
	var swiper = new Swiper(".music-signature__swiper", {
        slidesPerView: 4,
        spaceBetween: 24,
		slidesPerGroup: 1,
		loop: false,
		loopFillGroupWithBlank: false,
		speed: 1000,
		iOSEdgeSwipeDetection: true,
		breakpoints: {
			200: {
				slidesPerView: 1,
				spaceBetween: 16,
				slidesPerGroup: 1,
			},
			370: {
				slidesPerView: 1.35,
				spaceBetween: 16,
				slidesPerGroup: 1,
			},
			760: {
				slidesPerView: 2.2,
				spaceBetween: 24,
				slidesPerGroup: 1,
			},
			1010: {
				slidesPerView: 3,
				slidesPerGroup: 1,
			},
			1320: {
				slidesPerView: 4,
				slidesPerGroup: 1,
			}
		}
    });

	var swiper = new Swiper(".music-about__swiper", {
        slidesPerView: 4,
        spaceBetween: 24,
		slidesPerGroup: 1,
		loop: false,
		loopFillGroupWithBlank: false,
		speed: 1000,
		iOSEdgeSwipeDetection: true,
		breakpoints: {
			200: {
				slidesPerView: 1,
				spaceBetween: 16,
				slidesPerGroup: 1,
			},
			370: {
				slidesPerView: 1.085,
				spaceBetween: 16,
				slidesPerGroup: 1,
			},
			760: {
				slidesPerView: 2.2,
				spaceBetween: 24,
				slidesPerGroup: 1,
			},
			1010: {
				slidesPerView: 3,
				slidesPerGroup: 1,
			},
			1320: {
				slidesPerView: 4,
				slidesPerGroup: 1,
			}
		}
    });
}