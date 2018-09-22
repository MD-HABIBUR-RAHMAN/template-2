/*** Vid musklick på Bars aktiveras classen showing ***/

$(document).ready(function(){
    $(".menu-bars").on("click", function(){
        $("nav ul").toggleClass("showing1");
    });  
});

$(document).ready(function(){

	$(window).scroll(function(){

		if ($(this).scrollTop()>550){
			$('#scrollup').fadeIn();
		}
		else{
			$('#scrollup').fadeOut();
		}

	});
	$('#scrollup').click(function(){
		$('html,body').animate({scrollTop:0},1000);
	});

});

$(document).ready(function(){
	var stickyNavTop = $('.nav').offset().top;
	var stickyNav = function(){
			var scrollTop = $(window).scrollTop();

			if (scrollTop > stickyNavTop) {
				$('.nav').addClass('sticky');
			}
			else{
				$('.nav').removeClass('sticky');
			}
		};

		stickyNav();
		$(window).scroll(function(){
			stickyNav();
		});
});