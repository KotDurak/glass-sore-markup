$(function(){
	$(".regular").slick({
	    dots: false,
	    infinite: true,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	     cssEase: 'linear',
	     responsive: [
	     {
	     	breakpoint: 1024,
	     	settings: {
	     		slidesToShow: 3,
	     		slidesToScroll: 3,
	     		infinite: true,
	     		dots: true
	     	}
	     },
	     {
	     	breakpoint: 600,
	     	settings: {
	     		slidesToShow: 2,
	     		slidesToScroll: 2
	     	}
	     },
	     {
	     	breakpoint: 480,
	     	settings: {
	     		slidesToShow: 1,
	     		slidesToScroll: 1
	     	}
	     }
		]
	  });

	$(".rew-slick").slick({
	    dots: false,
	    infinite: true,
	    slidesToShow: 2,
	    slidesToScroll: 1,
	     cssEase: 'linear',
	     responsive: [
	     {
	     	breakpoint: 1024,
	     	settings: {
	     		slidesToShow: 2,
	     		slidesToScroll: 2,
	     		infinite: true,
	     		dots: true
	     	}
	     },
	     {
	     	breakpoint: 600,
	     	settings: {
	     		slidesToShow: 2,
	     		slidesToScroll: 2
	     	}
	     },
	     {
	     	breakpoint: 480,
	     	settings: {
	     		slidesToShow: 1,
	     		slidesToScroll: 1
	     	}
	     }
		]
	  });

	var D_custom_nav = $('.custom-nav');	
	var no_hide = true; 

	$('.main-catalog').on('click', function(event){
		$('.custom-nav').toggle();
	});

	$(window).on('scroll', function(event){
		if(!no_hide){
			D_custom_nav.hide();
		}
		
	});

	$('.catalog').on('mouseover', function(event){
		var D_elem = $(this);
		no_hide = true;
		D_elem.find('.dropdown-menu').show();
	});

	$('.catalog').on('mouseout', function(event){
		var D_elem = $(this);
		no_hide = false;
		D_elem.find('.dropdown-menu').hide();
	});
});