//=require jquery.min.js

// to inlude bootstrap plugins add "=" sign below
// require javascripts/bootstrap/*.*
//=require javascripts/bootstrap.min.js

//=require slick.min.js

;(function($){

	var header = $(".ba-header"),
	scrollTop;

	window.addEventListener('scroll', fixHeader);

	function fixHeader() {
		scrollTop = window.pageYOffset;

		if (scrollTop >= 300) {
			header.addClass('ba-stick');
		} else{
			header.removeClass('ba-stick');
		}
	}

	fixHeader();

		// Select all links with hashes
		$('a[href*="#"]')
		  // Remove links that don't actually link to anything
		  .not('[href="#"]')
		  .not('[href="#0"]')
		  .click(function(event) {
		    // On-page links
		    if (
		    	location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
		    	&&
		    	location.hostname == this.hostname
		    	) {
		      // Figure out element to scroll to
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		      // Does a scroll target exist?
		      if (target.length) {
		        // Only prevent default if animation is actually gonna happen
		        event.preventDefault();
		        $('html, body').animate({
		        	scrollTop: target.offset().top
		        }, 800, function() {
		          // Callback after animation
		          // Must change focus!
		          var $target = $(target);
		          $target.focus();
		          if ($target.is(":focus")) { // Checking if the target was focused
		          	return false;
		          } else {
		            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
		            $target.focus(); // Set focus again
		        };
		    });
		    }
		}
	});

		  $(document).ready(function(){
		  	var $slider = $('.ba-slider');

		  	$slider.slick({
		  		arrows: true,
		  		slide: '.ba-works-slide',
		  		slidesToShow: 1,
		  		slidesToScroll: 1,
		  		dots: true,
		  		prevArrow: '.ba-slider-button--prev',
		  		nextArrow: '.ba-slider-button--next'
		  	});
		  });

		  function initMap() {
		  	var mapCenter = {lat: 42.462473, lng: 11.832275};
		  	var mapDiv = document.getElementById('ba-map');
		  	if(mapDiv === null) return;

		  	var map = new google.maps.Map(document.getElementById('ba-map'), {
		  		zoom: 11,
		  		center: mapCenter,
		  		disableDefaultUI: true,
		  		styles: [
		  		{
		  			"elementType": "geometry.fill",
		  			"stylers": [
		  			{
		  				"color": "#c8c4da"
		  			},
		  			{
		  				"visibility": "on"
		  			},
		  			{
		  				"weight": 1.5
		  			}
		  			]
		  		}
		  		]
		  	});
		  }

		  window.onload = initMap;

		})(jQuery);






















