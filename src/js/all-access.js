if ($(".all-access").length > 0){
	var swiper = new Swiper(".all-access-nft__swiper", {
        slidesPerView: 4,
        spaceBetween: 91,
		slidesPerGroup: 1,
		loop: false,
		loopFillGroupWithBlank: false,
		speed: 1000,
		iOSEdgeSwipeDetection: true,
		breakpoints: {
			370: {
				slidesPerView: 1.4,
				spaceBetween: 16,
				slidesPerGroup: 1,
			},
			680: {
				slidesPerView: 2.2,
				spaceBetween: 24,
				slidesPerGroup: 1,
			},
			760: {
				slidesPerView: 3,
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
				spaceBetween: 91,
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