$(document).ready(function(){
	(function ($) {

		$('body').addClass('js');
	  var $menu = $('#menu'),
	    $menulink = $('.menu-toggle');
	  
		$menulink.click(function() {
		  $menulink.toggleClass('active');
		  $menu.toggleClass('active');
		  return false;
		});

		$('.language-option-wrap').mouseover(function() {
			$('.language-dropdown').toggleClass('active');
		});

	  $('.language-item').on('click', function() {
	    var $languageNameTarget = ($(this).data('language'))
	    var $language = $('[data-language-target=' + $languageNameTarget + ']')
	    var $allLanguages = $('[data-language-target]')
    	
    	$(this).addClass('active');
    	$('.language-item').not(this).removeClass('active');
    	$allLanguages.removeClass('active');
    	$language.addClass('active');

	  });
		
		$('.owl-hero').owlCarousel({
	    items:1,
	    loop:true,
	    margin:10,
	    center:true,
	    autoplay:true,
	    responsive : {
			  // breakpoint from 0 up
			  0 : {
			    nav:false,
			  },
			  // breakpoint from 640 up
			  640 : {
			  	nav:true
			  }
			}
		});

		$('.owl-clients').owlCarousel({
			loop:true,
			autoplay:true,
			responsive: {
				0: {
					items:1,
					margin:0,
					center:true
					// stagePadding:10
				},
				640: {
					items:5,
					margin:60,
					center:false
				}
			}
		});

		$('.owl-solutions').owlCarousel({
			loop:true,
			autoplay:true,
			responsive: {
				0: {
					items:1,
					nav:false,
					margin:10,
					center:true
					// stagePadding:10
				},
				640: {
					items:3,
					nav:true,
					margin:0,
					center:false
				}
			}
		});

		$('.owl-benefits').owlCarousel({
			nav:false,
			loop:false,
			dots:false,
			center:false,
			autoplay:false,
			responsive: {
				0: {
					items:1,
					margin:10,
					stagePadding: 10
				},
				640: {
					items:4,
					margin:0
				}
			}
		});

		$('.owl-blog').owlCarousel({
			loop:true,
			autoplay:true,
			responsive: {
				0: {
					nav:false,
					items:1
				},
				640: {
					nav:true,
					items:3
				}
			}
		});

		$('.owl-testimonials').owlCarousel({
			loop:true,
			autoplay:true,
			items:1,
			responsive: {
				0: {
					nav:false
				},
				640: {
					nav:true
				}
			}
		});

	})(jQuery);
});
