if ($(".services-accordion__top").length > 0){
	$('.services-accordion__top').click(function(){
		$(this).parent().toggleClass('active');
		let mainHeight = $(this);
		setTimeout(function(){
			let heightValue = mainHeight.parent().offset().top;
			jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: heightValue}, 300);
		}, 300);
		if( $(this).parent().hasClass('active')) {
			$(this).next().slideDown(150);
		} else {
			$('.services-accordion__container').slideUp(150);
			$(".services-accordion").removeClass("active");
		}
	});
	$(function ($) {
		$(document).mouseup(function (e) {
		var div = $(".services-accordion.active");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
				div.removeClass("active");
			}
		});
	});
	$(function ($) {
		$(document).mouseup(function (e) {
			var div = $(".services-accordion__container");
			if (!div.is(e.target) && div.has(e.target).length === 0) {
				div.slideUp(150);
			}
		});
	});
}