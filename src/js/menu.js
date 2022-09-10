// Custom Select
$("body").on("click", ".burger--js:not(.open)", function(){
	$(this).addClass("open lock");
	$("body").addClass("lock");
	$(".header, .menu").addClass("visible");
	$(".menu__bg").addClass("visible");
	setTimeout(function(){
		$(".menu__logo").addClass("visible");
	}, 500);
	setTimeout(function(){
		$(".menu__list").addClass("visible");
	}, 1000);
	setTimeout(function(){
		$(".menu__list").addClass("open");
		$(".menu__list").removeClass("visible");
	}, 2300);
	setTimeout(function(){
		$(".burger--js").removeClass("lock");
	}, 2500);
});

$("body").on("click", ".burger--js.open:not(.lock)", function(){
	$(".menu__list").addClass("hidden");
	setTimeout(function(){
		$(".menu__logo").removeClass("visible");
	}, 500);
	setTimeout(function(){
		$(".menu__bg").removeClass("visible");
		$(".menu__list").removeClass("hidden open");
	}, 1000);
	setTimeout(function(){
		$(".header, .menu").removeClass("visible");
		$(".burger--js.open").removeClass("open");
		$("body").removeClass("lock");
	}, 1500);
});
