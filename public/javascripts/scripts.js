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

	  var $searchmenu = $('#searchbar'),
	    $searchmenulink = $('.searchbar-toggle');

		$searchmenulink.click(function() {
		  $searchmenulink.toggleClass('active');
		  $searchmenu.toggleClass('active');
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
			  // breakpoint from 960 up
			  960 : {
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
				960: {
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
				960: {
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
			autoplay:false,
			responsive: {
				0: {
					items:1,
					margin:10,
					center:true,
					stagePadding: 10
				},
				960: {
					items:4,
					center:false,
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
					center:true,
					items:1
				},
				960: {
					nav:true,
					center:false,
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
					nav:false,
					center:true
				},
				960: {
					nav:true,
					center:false
				}
			}
		});

	})(jQuery);
});
