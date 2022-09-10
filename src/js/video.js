(function() {
	const video = document.querySelector('.video')

if (video) {
	const container = document.querySelector('.video')
	const target = document.querySelector('.cursor')
	const positionTargetX = (container.offsetWidth / 2) - (target.offsetWidth / 2)
	const positionTargetY = (container.offsetHeight / 2) - (target.offsetHeight / 2)

	gsap.set(target, {
	x: positionTargetX,
	y: positionTargetY,
	duration: 0.3
	})

	container.addEventListener('mousemove', (e) => {
	const rect = container.getBoundingClientRect()
	let x = e.clientX - rect.left
	let y = e.clientY - rect.top
	let rightBorder = container.offsetWidth - (target.offsetWidth / 2)
	let bottomBorder = container.offsetHeight - (target.offsetHeight / 2)

	if (x < 0) {
		x = 0
	}

	if (x > rightBorder) {
		x = rightBorder
	}

	if (y < 0) {
		y = 0
	}

	if (y > bottomBorder) {
		y = bottomBorder
	}

	gsap.to(target, {
		x,
		y,
		duration: 0.3
	})
	})

	container.addEventListener('mouseleave', (e) => {
	let x = (container.offsetWidth / 2) - (target.offsetWidth / 2)
	let y = (container.offsetHeight / 2) - (target.offsetHeight / 2)

	gsap.to(target, {
		x,
		y,
		duration: 0.3
	})
	})
}
})();

/*$("body").on("click", ".video", function(){
	$(".promo__preview").addClass("promo__preview--hidden");
	video.play();
	let modalVideo = $(this).find(".modal-video");
	let modalCursor = $(this).parent().find(".cursor");
	if(modalVideo.hasClass("modal-video--play")) {
		modalVideo.removeClass("modal-video--play");
		modalVideo.addClass("modal-video--step");
		modalCursor.removeClass("cursor--active");
	} else {
		modalVideo.addClass("modal-video--play");
		modalVideo.removeClass("modal-video--step");
		modalCursor.addClass("cursor--active");
		video.play();
	}
	if(modalVideo.hasClass("modal-video--step")) {
		$(".video-controls").addClass("video-controls--visible")
	}
});*/

if ($(".video--js").length > 0){
	let video;
	let display;
	window.onload = function() {
		video = document.getElementById("video");
	};
	$("body").on("click", ".video--js", function(){
		$(".video__preview").addClass("hidden");
		video.play();
		if($(".video-box").hasClass("play")) {
			$(".video-box").removeClass("play");
			$(".video-box").addClass("step");
			$(this).find(".cursor").removeClass("cursor--active");
			video.pause();
		} else {
			$(".video-box").addClass("play");
			$(".video-box").removeClass("step");
			$(this).find(".cursor").addClass("cursor--active");
			video.play();
		}
	});
}