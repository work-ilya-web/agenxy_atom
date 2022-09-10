$("body").on("click", ".modal--js", function(e){
	e.preventDefault();
	$("body").addClass("lock");
	$(".modal, .modal__bg, .modal__closed").addClass("visible");
	setTimeout(function(){
		$(".modal__content").addClass("visible");
	}, 300);
});

$("body").on("click", ".closed--js", function(e){
	e.preventDefault();
	$(".modal__content").removeClass("visible");
	setTimeout(function(){
		$("body").removeClass("lock");
		$(".modal, .modal__bg, .modal__closed").removeClass("visible");
	}, 300);
});

// Custom Select
$('.form-select').click(function(event) {
	if(!$(this).hasClass('disabled')){
		$('.form-select').not(this).removeClass('active').find('.form-select-options').slideUp(50);
		$(this).toggleClass('active');
		$(this).find('.form-select-options').slideToggle(50);
	}
});
$('.form-select-options__value').click(function() {
	$(this).parents('.form-select').find('.form-select-title__value').html($(this).html());
	if($.trim($(this).data('value'))!=''){
		$(this).parents('.form-select').find('input').val($(this).data('value'));
	}else{
		$(this).parents('.form-select').find('input').val($(this).html());
	}
});
$(document).click(function(e) {
	if (!$(e.target).is(".form-select *")) {
		$('.form-select').removeClass('active');
		$('.form-select-options').slideUp(50);
	};
});
