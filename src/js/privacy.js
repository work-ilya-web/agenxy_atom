if ($(".privacy-page-accordion__top").length > 0){
	$('.privacy-page-accordion__top').click(function(){
		$(this).parent().toggleClass('active');
		if( $(this).parent().hasClass('active')) {
			$(this).next().slideDown();
		} else {
			$('.privacy-page-accordion__container').slideUp();
			$(".privacy-page-accordion").removeClass("active");
		}
	});
	$(function ($) {
		$(document).mouseup(function (e) {
		var div = $(".privacy-page-accordion.active");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
				div.removeClass("active");
			}
		});
	});
	$(function ($) {
		$(document).mouseup(function (e) {
			var div = $(".privacy-page-accordion__container");
			if (!div.is(e.target) && div.has(e.target).length === 0) {
				div.slideUp();
			}
		});
	});
}