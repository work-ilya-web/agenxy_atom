(function() {
	const modalVideo = document.querySelector('.video-modal')

if (modalVideo) {
	const modalContainer = document.querySelector('.video-modal')
	const modalTarget = document.querySelector('.modal-cursor')
	const positionTargetX = (modalContainer.offsetWidth / 2) - (modalTarget.offsetWidth / 2)
	const positionTargetY = (modalContainer.offsetHeight / 2) - (modalTarget.offsetHeight / 2)

	gsap.set(modalTarget, {
	x: positionTargetX,
	y: positionTargetY,
	duration: 0.3
	})

	modalContainer.addEventListener('mousemove', (e) => {
	const rect = modalContainer.getBoundingClientRect()
	let x = e.clientX - rect.left
	let y = e.clientY - rect.top
	let rightBorder = modalContainer.offsetWidth - (modalTarget.offsetWidth / 2)
	let bottomBorder = modalContainer.offsetHeight - (modalTarget.offsetHeight / 2)

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

	gsap.to(modalTarget, {
		x,
		y,
		duration: 0.3
	})
	})

	modalContainer.addEventListener('mouseleave', (e) => {
	let x = (modalContainer.offsetWidth / 2) - (modalTarget.offsetWidth / 2)
	let y = (modalContainer.offsetHeight / 2) - (modalTarget.offsetHeight / 2)

	gsap.to(modalTarget, {
		x,
		y,
		duration: 0.3
	})
	})
}
})();

let modalVideo;
$( document ).ready(function() {
	modalVideo = document.getElementById("video-modal");
});
/*$("body").on("click", ".video-modal.video-modal--js", function(){
	$(".video-modal__preview").addClass("hidden");
	$(".video-modal__preview").removeClass("video-modal--js");
	modalVideo.play();
	if($(".video-modal-box").hasClass("play")) {
		$(".video-modal-box").removeClass("play");
		$(".video-modal-box").addClass("step");
		$(".video-modal-controls").addClass("visible")
		$(this).find(".modal-cursor").removeClass("cursor--active").addClass("cursor--hidden");
		modalVideo.pause();
	} else {
		$(".video-modal-box").addClass("play");
		$(".video-modal-box").removeClass("step");
		$(this).find(".modal-cursor").addClass("cursor--active");
		modalVideo.play();
	}
});*/

$("body").on("click", ".video-modal-controls", function(){
	$(".video-modal__preview").addClass("hidden");
	modalVideo.play();
	$(".video-modal-controls").addClass("visible")
});

$("body").on("click", ".video-modal__preview", function(){
	$(".video-modal__preview").addClass("hidden");
	modalVideo.play();
	$(".video-modal-box").addClass("play");
	$(".video-modal-box").removeClass("step");
	$(".modal-cursor").addClass("cursor--active");
});

$("body").on("click", ".video-modal-box", function(){
	if($(".video-modal-box").hasClass("play")) {
		$(".video-modal-box").removeClass("play");
		$(".video-modal-box").addClass("step");
		$(".video-modal-controls").removeClass("visible")
		$(".modal-cursor").removeClass("cursor--active").addClass("cursor--hidden");
		modalVideo.pause();
	} else {
		$(".video-modal-box").addClass("play");
		$(".video-modal-box").removeClass("step");
		$(".modal-cursor").addClass("cursor--active");
		modalVideo.play();
	}
});

$("body").on("click", ".play--js", function(){
	$(".video-modal-box").addClass("play");
	$(".video-modal-box").removeClass("step");
	$(".video-modal-controls").removeClass("visible")
	$(".modal-cursor").removeClass("cursor--hidden").addClass("cursor--active");
	modalVideo.play();
});

$("body").on("click", ".skip--js", function(){
	$(".modal-video-window").addClass("hidden");
	modalVideo.pause();
	$("#video-modal").remove();
	$(".video-modal__preview").removeClass("hidden");
	setTimeout(function(){
		$(".modal-video-window").remove();
	}, 320)
});