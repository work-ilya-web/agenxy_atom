$("body").on("click", ".list-view", function (e) {
	e.preventDefault();
	$(this).toggleClass("active");
	$(".cases-grid__body").toggleClass("active");
	$(".cases-grid__list").toggleClass("active");
});