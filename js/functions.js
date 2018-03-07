( function( $ ) {

"use strict";

// *** On ready *** //
$( document ).on( "ready" , function() {
	responsiveClasses();
	dataCustomOptions();
	fullscreenSection();
	imageBG();
	fitVideos();
	BGVideoYTPlayer();
	lightboxImage();
	lightboxGallery();
	lightboxIframe();
	scrollProgress();
	mobileMenu();
	superfishMenu();
	onePageNav();
	stickyNav();
	bannerParallaxImageBG();
	bannerSlider();
	whiteTextSwitching();
	testmonialsSlider();
	clientsSlider();
	sliderImageBG();
	optimizeSliderImageBG();
	headerForm1Validation();
	ctaPointer();
	scrollTopIcon();
	// parallax_text();
});

// *** On load *** //
$( window ).on( "load" , function() {
	parallaxStellar();
	// contentAnimation();
	// switcherLoad();
});

// *** On resize *** //
$( window ).on( "resize" , function() {
	optimizeSliderImageBG();
	responsiveClasses();
	fullscreenSection();
	parallaxStellar();
});

// *** On scroll *** //
$( window ).on( "scroll" , function() {
	stickyNav();
	scrollTopIcon();
	scrollProgress();
});

// *** On Scroll In On load *** //
$( window ).on( "load" , function() {
	$( window ).on( "scroll" , function() {

	});
});


// *** jQuery noConflict *** //
var $ = jQuery.noConflict();


// *** General Variables *** //
var $window = $( window ),
	$this = $( this ),
	$body = $( "body" );

// *** Data Custom Options *** //
function dataCustomOptions() {
$("*[data-pattern-overlay-darkness-opacity]").each(function(){var a=$(this).data("pattern-overlay-darkness-opacity");$(this).css("background-color",convertHex("#000000",a))}),$("*[data-pattern-overlay-background-image]").each(function(){"none"==$(this).data("pattern-overlay-background-image")?$(this).css("background-image","none"):"yes"==$(this).data("pattern-overlay-background-image")&&$(this).css("background-image")}),$("*[data-remove-pattern-overlay]").each(function(){"yes"==$(this).data("remove-pattern-overlay")&&$(this).css("background","none")}),$("*[data-bg-color]").each(function(){var a=$(this).data("bg-color");$(this).css("background-color",a)}),$("*[data-bg-color-opacity]").each(function(){var a=$(this).data("bg-color-opacity"),b=$(this).css("background-color"),c=b.replace("rgb","rgba").replace(")",", "+a+")");$(this).css("background-color",c)}),$("*[data-bg-img]").each(function(){var a=$(this).data("bg-img");$(this).css("background-image","url('"+a+"')")}),$("*[data-parallax-bg-img]").each(function(){var a=$(this).data("parallax-bg-img");$(this).css("background-image","url('./images/files/parallax-bg/"+a+"')")});
}


// *** Responsive Classes *** //
function responsiveClasses() {
	var jRes = jRespond([
		{
			label: "smallest",
			enter: 0,
			exit: 479
		},{
			label: "handheld",
			enter: 480,
			exit: 767
		},{
			label: "tablet",
			enter: 768,
			exit: 991
		},{
			label: "laptop",
			enter: 992,
			exit: 1199
		},{
			label: "desktop",
			enter: 1200,
			exit: 10000
		}
	]);
	jRes.addFunc([
		{
			breakpoint: "desktop",
			enter: function() { $body.addClass( "device-lg" ); },
			exit: function() { $body.removeClass( "device-lg" ); }
		},{
			breakpoint: "laptop",
			enter: function() { $body.addClass( "device-md" ); },
			exit: function() { $body.removeClass( "device-md" ); }
		},{
			breakpoint: "tablet",
			enter: function() { $body.addClass( "device-sm" ); },
			exit: function() { $body.removeClass( "device-sm" ); }
		},{
			breakpoint: "handheld",
			enter: function() { $body.addClass( "device-xs" ); },
			exit: function() { $body.removeClass( "device-xs" ); }
		},{
			breakpoint: "smallest",
			enter: function() { $body.addClass( "device-xxs" ); },
			exit: function() { $body.removeClass( "device-xxs" ); }
		}
	]);
}


// *** Loading Progress *** //
$("body").waitForImages({finished:function(){setTimeout(function(){$(".lp-content, #loading-progress .logo").css({opacity:0}),$("#loading-progress").addClass("hide-it"),setTimeout(function(){},1300)},0)},each:function(t,o,i){var n=Math.floor((t+1)/o*100);$("#lp-counter").animate({$this:n},{duration:150,easing:"",queue:!1,step:function(t){var o=Math.round(t);$("#lp-counter").text(o+"%")}}),$("#lp-bar").animate({width:n+"%"},0)},waitForAll:!0});


// *** Fullscreen Section *** //
function fullscreenSection() {
	$( ".fullscreen, #home-header, #home-banner" ).css( "height", $( window ).height() );
	$( "#banner.fullscreen" ).css( "height", $( window ).height() );
}


// *** RTL Case *** //
var HTMLDir = $( "html" ).css( "direction" ),
	owlRtl;

// If page is RTL
if ( HTMLDir == "rtl" ) { 
	// Owl Carousel
	owlRtl = true 
} else { 
	owlRtl = false 
}


// *** Image Background *** //
function imageBG() {
	$( ".img-bg" ).each(function() {
		var $this = $( this ),
			imgSrc = $this.find( "img" ).attr( "src" );

		if ( $this.parent( ".section-image" ).length ) {
			$this.css( "background-image", "url('" + imgSrc + "')"  );
		} else {
			$this.prepend( "<div class='bg-element'></div>" );
			var bgElement = $this.find( ".bg-element" );
			bgElement.css( "background-image", "url('" + imgSrc + "')"  );
		}
		$this.find( "img" ).css({ "opacity" : 0 , "visibility" : "hidden" });		
	});
}


// *** Stellar Parallax *** //
function parallaxStellar() {
	$(function() {
		if ( $body.hasClass( "device-lg" ) || $body.hasClass( "device-md" ) || $body.hasClass( "device-sm" ) ) {
			$.stellar({
				horizontalScrolling: false, // don't change this option
				// verticalScrolling: false,
				verticalOffset: 0,
		    	responsive: true, // false
			});
        }
	});
}


// *** Fit Videos *** //
function fitVideos() {
	$( "#full-container" ).fitVids();
}


// *** Background Videos *** //
function BGVideoYTPlayer() {
	$(".video-background").each( function() {
		$( this ).YTPlayer({
			mute: false,
			autoPlay: true,
			opacity: 1,
			containment: ".video-background",
			showControls: false,
			startAt: 0,
			addRaster: true,
			showYTLogo: false,
			stopMovieOnBlur: false
		});
	});
}


// *** Lightbox Iframe *** //
function lightboxIframe() {
	$( ".lightbox-iframe" ).magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});	
}


// *** Lightbox Image *** //
function lightboxImage() {
	$( ".lightbox-img" ).magnificPopup({
		type: 'image',
		gallery:{
			enabled: false
		},
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});	
}


// *** Lightbox Gallery *** //
function lightboxGallery() {
	$( ".lightbox-gallery" ).magnificPopup({
		type: 'image',
		gallery:{
			enabled: true
		},
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});	
}


// *** Scroll Top Icon *** //
function scrollTopIcon() {
	var windowScroll = $( window ).scrollTop();
	if ( $( window ).scrollTop() > 800 ) {
		$( ".scroll-top-icon" ).addClass( "show" );
	} else {
		$( ".scroll-top-icon" ).removeClass( "show" );
	}
}

$( ".scroll-top" ).on( "click" , function(e) {
	e.preventDefault();
    $( "html, body" ).animate({
        scrollTop: 0
    }, 1200, "easeInOutExpo" ); //1200 easeInOutExpo
});


// *** Scroll Progress *** //
function scrollProgress() {
    var docheight = $(document).height();
    var winheight = $(window).height();
    var height = docheight - winheight;
    var scroll = $(document).scrollTop();
    var scrollperc = scroll/(height/100);
    $("#scroll-progress .scroll-progress").width(scrollperc+'%');
    $(".scroll-percent").text(scrollperc.toFixed(0)+'%');	
}


// *** Mobile Menu *** //
function mobileMenu() {
	// Cloning Main Menu to Mobile Menu
	$( "#main-menu" ).clone().appendTo( "#mobile-menu" ).removeClass().addClass( "mobile-menu" );
	
	// For Scroll Purpose
	if ( $( ".mobile-menu" ).length ) {
		var mobMenuScroll = document.querySelector( "#mobile-menu" );
		SimpleScrollbar.initEl( mobMenuScroll );	
	}

	// Dropdown
	$( ".mobile-menu" ).superfish({
		popUpSelector: "ul, .megamenu",
		cssArrows: true,
		delay: 300,
		speed: 150,
		speedOut: 150,
		animation: { opacity : "show", height : "show" }, //  , height : "show"
		animationOut: { opacity : "hide", height: "hide" }
	});


	// Toggle Mobile Menu
	$( ".mobile-menu-btn" ).on( "click", function(e) {
		e.preventDefault();
		$( this ).toggleClass( "is-active" );
		$( "#mobile-menu-wrap" ).stop().slideToggle( 250 );
	});	
}


// *** Dropdown Menu *** //
function superfishMenu() {
	// Firing Superfish plugin
	$( ".main-menu" ).superfish({
		popUpSelector: "ul",
		cssArrows: true,
		delay: 300,
		speed: 100,
		speedOut: 100,
		animation: { opacity : "show" }, //  , height : "show"
		animationOut: { opacity : "hide" }
	});
}

// *** One Page Nav *** //
function onePageNav() {
   	var headerStickyCases = $( "#header" ).hasClass( "style-1" ),
	    offsetDifference = ( ! headerStickyCases ) ? 0 : 80;

	$.scrollIt({
      upKey: false,           
      downKey: false,         
      scrollTime: 0,          
	  activeClass: 'current',
      onPageChange: null,     
	  topOffset: -offsetDifference
	});

    $(  "#main-menu li a, .scroll-to" ).on(  "click", function( e ) {
        e.preventDefault();
        var $anchor = $(this);      

        // scroll to specific anchor
        $(  "html, body" ).stop().animate({
            scrollTop: $( $anchor.attr( "href" ) ).offset().top - offsetDifference
        } , 1200 , "easeInOutExpo" );

        var classCases = $body.hasClass( "device-md" ) 
        				 || $body.hasClass( "device-sm" ) 
        				 || $body.hasClass( "device-xs" ) 
        				 || $body.hasClass( "device-xxs" );

        if ( classCases ) {
        	$( "#mobile-menu-wrap, .mobile-menu-sticky" ).slideUp( 250 );
        	$( ".mobile-menu-btn" ).removeClass( "is-active" );
        }
    });    
}


// *** Sticky Nav *** //
var	logo = $( ".logo-header img" ),
	logoSrc = logo.attr( "src" ),
	logoAlt = logo.data( "logo-alt" );

function stickyNav() {
	var headerTopDistance = $( "#header" ).offset().top,
		windowScroll = $( window ).scrollTop(),
		header = $( "#header" ),
		headerStickyHeight = parseInt( $( "#header-sticky" ).height() , 10 ),
		headerHeight = parseInt( $( "#header" ).height() , 10 ),
		bannerHeight = parseInt( $( ".banner-parallax" ).height() , 10 ),
		pageTitleHeight = parseInt( $( "#page-title" ).height() , 10 );

	if ( header.hasClass( "style-1" ) ) {
		if ( windowScroll > header.offset().top ) {
			header.addClass( "sticky" );
			logo.attr( "src" , logoSrc );
			$( ".header-btn" ).removeClass( "hover-white" ).addClass( "hover-dark" );
		} else {
			header.removeClass( "sticky" );

			// reversing alternative logo when header has .text-white
			if ( $( "#header" ).hasClass( "text-white" ) ) {
				logo.attr( "src" , logoAlt );
				$( ".header-btn" ).removeClass( "hover-dark" ).addClass( "hover-white" );
			}

			// when back from sticky state
			whiteTextSwitching();
		}
	}
}


// *** white Text Switching *** //
function whiteTextSwitching() {
	if ( ! $( "#header" ).hasClass( "sticky" ) ) {
		if ( $( ".owl-item.active" ).find( ".banner-center-box" ).hasClass( "text-white" ) ) {
			$( "#header" ).addClass( "text-white" );
			logo.attr( "src" , logoAlt );
			$( ".header-btn" ).removeClass( "hover-dark" ).addClass( "hover-white" );
		} else {
			$( "#header" ).removeClass( "text-white" );
			$( ".header-btn" ).removeClass( "hover-white" ).addClass( "hover-dark" );
			logo.attr( "src" , logoSrc );
		}			
	}

	// when slider not used, only banner parallax
	if ( ! $( ".banner-slider" ).parents( ".banner-parallax" ).length == 1 ) {
		if ( $( ".banner-center-box" ).hasClass( "text-white" ) ) {
			$( "#header" ).addClass( "text-white" );
			logo.attr( "src" , logoAlt );
			$( ".header-btn" ).removeClass( "hover-dark" ).addClass( "hover-white" );
		} else {
			$( "#header" ).removeClass( "text-white" );
			logo.attr( "src" , logoSrc );
			$( ".header-btn" ).removeClass( "hover-white" ).addClass( "hover-dark" );
		}			
	}
}


// *** Banner Parallax Image BG *** //
function bannerParallaxImageBG() {
	var bannerParallax = $( ".banner-parallax" ),
		imgSrc = bannerParallax.children( "img:first-child" ).attr( "src" );

	bannerParallax.prepend( "<div class='bg-element'></div>" );
	var bgElement = bannerParallax.find( "> .bg-element" );
	bgElement.css( "background-image", "url('" + imgSrc + "')"  ).attr( "data-stellar-background-ratio" , 0.2 );
}


// *** Banner Slider *** //
function bannerSlider() {
	var bannerSlider = $( ".banner-slider > .owl-carousel" );
	bannerSlider.owlCarousel({
		items: 1,
		rtl: owlRtl,
		autoplay: false,
		autoplaySpeed: 800, // Sliding autoplay speed
		autoplayTimeout: 4000, // Autoplay interval timeout.
		dragEndSpeed: 600, // Sliding speed by mouse drag
		autoplayHoverPause: true, // Stop autoplay on mouse hover
		loop: true,
		slideBy: 1, // Number of item are slided for each one transition
		margin: 10, // space between each item. Very useful!
		stagePadding: 0, // This used to see part of left an right items as preview style
		nav: true, // show prev and next buttons
		dots: true, // Show dots navigation
		navText: ["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"], // prev and next buttons content
		responsive : {
			0 : {
		        // items : 1
		    },
		    480 : {
		        // items : 2
		    },
		    768 : {
		        // items : 3
		    }
		},
		autoHeight: true,
		autoWidth: false,
		animateOut: 'owl-fadeUp-out',
	    animateIn: 'owl-fadeUp-in',
		navRewind: true,
		center: false, // It's used to make the carousel start from the centered item
		dotsEach: 1, // Number of items per dot
		dotData: false,
		lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
		smartSpeed: 600, // Sliding speed when hover next or prev nav
		fluidSpeed: 5000,
		navSpeed: 600,
		// fallbackEasing: "ease-in-out",
		dotsSpeed: 600 // Sliding speed by using dots
	});
	bannerSlider.on("translated.owl.carousel",function(n){whiteTextSwitching()}),bannerSlider.on("changed.owl.carousel",function(n){setTimeout(function(){whiteTextSwitching()},150)});
}


// *** Slider Image BG *** //
function sliderImageBG() {
	$( ".slider-img-bg .owl-item > li" ).each( function() {
		var $this = $( this ),
			imgSrc = $this.find( ".slide" ).children( "img" ).attr( "src" );
		$this.prepend( "<div class='bg-element'></div>" );
		var bgElement = $this.find( "> .bg-element" );
		bgElement.css( "background-image", "url('" + imgSrc + "')"  );
	});
}


// *** Optimize Slider Image BG *** //
function optimizeSliderImageBG() {
	$( ".slider-img-bg" ).each( function() {
		var imgHeight = $( this ).closest( "div" ).height();

		if ( $( ".banner-parallax" ).children( ".banner-slider" ).length > 0 ) {
			// $( ".banner-parallax, .banner-parallax .row > [class*='col-']" ).height( $( ".banner-slider" ).height() );
		}

		$( this ).find( ".owl-item > li .slide" ).children( "img" ).css({
			"display" : "none",
			"height"  : imgHeight,
			"opacity" : 0
		});
	});
}


// *** CTA Pointer *** //
function ctaPointer() {
	if ( $( ".cta-pointer" ).length > 0 ) {
		var elementId1 = ".cta-pointer"; // Put Your Target Point ID here

		var pp1 = $( elementId1 ).pointPoint();

		var targetPoint1 = $( elementId1 );

	    $( targetPoint1 ).on( "click" , function(){
	        pp1.destroyPointPoint();
	    });		
	}
}


// *** Testmonials Slider *** //
function testmonialsSlider() {
	var testmonialsSlider = $( ".testmonials-slider > .owl-carousel" );
	testmonialsSlider.owlCarousel({
		// items: 3,
		rtl: owlRtl,
		autoplay: 3000,
		autoplaySpeed: 500, // Sliding autoplay speed
		autoplayTimeout: 5000, // Autoplay interval timeout.
		dragEndSpeed: 400, // Sliding speed by mouse drag
		autoplayHoverPause: true, // Stop autoplay on mouse hover
		loop: true,
		slideBy: 1, // Number of item are slided for each one transition
		margin: 30, // space between each item. Very useful!
		stagePadding: 0, // This used to see part of left an right items as preview style
		nav: false, // show prev and next buttons
		dots: false, // Show dots navigation
		navText: ["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"], // prev and next buttons content
		responsive : {
			0 : {
		        items : 1
		    },
		    480 : {
		        items : 1
		    },
		    768 : {
		        items : 1
		    },
		    1200 : {
		        items : 1
		    }
		},
		autoHeight: false,
		autoWidth: false,
		// animateOut: 'goDownOut',
	    // animateIn: 'goDownIn',
		navRewind: true,
		center: false, // It's used to make the carousel start from the centered item
		dotsEach: 1, // Number of items per dot
		dotData: false,
		lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
		smartSpeed: 600, // Sliding speed when hover next or prev nav
		fluidSpeed: 5000,
		navSpeed: 400,
		// fallbackEasing: "ease-in-out",
		dotsSpeed: 400 // Sliding speed by using dots
	});
}


// *** Clients Slider *** //
function clientsSlider() {
	var clientsSlider = $( ".clients-slider > .owl-carousel" );
	clientsSlider.owlCarousel({
		items: 6,
		rtl: owlRtl,
		autoplay: 3000,
		autoplaySpeed: 500, // Sliding autoplay speed
		autoplayTimeout: 3000, // Autoplay interval timeout.
		dragEndSpeed: 400, // Sliding speed by mouse drag
		autoplayHoverPause: true, // Stop autoplay on mouse hover
		loop: true,
		slideBy: 1, // Number of item are slided for each one transition
		margin: 30, // space between each item. Very useful!
		stagePadding: 0, // This used to see part of left an right items as preview style
		nav: false, // show prev and next buttons
		dots: false, // Show dots navigation
		navText: ["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"], // prev and next buttons content
		responsive : {
			0 : {
		        items : 2
		    },
		    480 : {
		        items : 3
		    },
		    768 : {
		        items : 4
		    },
		    992 : {
		        items : 5
		    },
		    1200 : {
		        items : 6
		    }
		},
		autoHeight: false,
		autoWidth: false,
		// animateOut: 'goDownOut',
	    // animateIn: 'goDownIn',
		navRewind: true,
		center: false, // It's used to make the carousel start from the centered item
		dotsEach: 1, // Number of items per dot
		dotData: false,
		lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
		smartSpeed: 600, // Sliding speed when hover next or prev nav
		fluidSpeed: 5000,
		navSpeed: 400,
		// fallbackEasing: "ease-in-out",
		dotsSpeed: 400 // Sliding speed by using dots
	});
}


// *** Header Form 1 *** //
function headerForm1Validation() {
	$( "#signup-form-1" ).validate({
		// rules
		rules: {
			sf1Name: {
				required: true,
				minlength: 3
			},
			sf1Email: {
				required: true,
				email: true
			},
			sf1PhoneNum: {
				required: true,
				number: true,
				minlength: 12,
				maxlength: 12
			}
		}
	});

	var errorMsgData = $( ".sf1-notifications" ).data( "error-msg" ),
		errorMsgDefault = 'Please Follow Error Messages and Complete as Required',
		errorMsg = ( errorMsgData ) ? ( errorMsgData ) : errorMsgDefault;

	// Submit event
	$( "#signup-form-1" ).on( "submit" , function( event ) {
	    if ( event.isDefaultPrevented() ) {
		    var errorContent = '<i class="sf1-error-icon fa fa-close"></i>' +
		                       errorMsg;
			sf1SubmitMSG(false, errorContent);
	        sf1Error();
	    } else {
	        event.preventDefault();
	        sf1SubmitForm();
	    }
	});
}

function sf1SubmitForm(){var s=$("#sf1Name").val(),i=$("#sf1Email").val(),n=$("#sf1PhoneNum").val();$.ajax({type:"POST",url:"./php/sf1-process.php",data:"sf1Name="+s+"&sf1Email="+i+"&sf1PhoneNum="+n,success:function(s){"success"==s?sf1Success():(sf1Error(),sf1SubmitMSG(!1,s))}})}function sf1Success(){var s=$(".sf1-notifications").data("success-msg"),i=s||"Thank you for your submission :)";$("#signup-form-1")[0].reset(),sf1SubmitMSG(!0,'<i class="sf1-success-icon fa fa-check"></i>'+i),$(".sf1-notifications-content").addClass("sent"),$(".sf1-notifications").css("opacity",0),$(".sf1-notifications").slideDown(300).animate({opacity:1},300).delay(5e3).slideUp(400)}function sf1Error(){$(".sf1-notifications").css("opacity",0),$(".sf1-notifications").slideDown(300).animate({opacity:1},300),$(".sf1-notifications-content").removeClass("sent")}function sf1SubmitMSG(s,i){var n;n="shake animated",$(".sf1-notifications").delay(300).addClass(n).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("shake bounce animated")}),$(".sf1-notifications").children(".sf1-notifications-content").html(i)}


} )( jQuery );


function convertHex( hex , opacity ){
	// "use strict";
	// var r, g, b, result;
    hex = hex.replace( '#' , '' );
    r = parseInt( hex.substring( 0 , 2 ) , 16 );
    g = parseInt( hex.substring( 2 , 4 ) , 16 );
    b = parseInt( hex.substring( 4 , 6 ) , 16 );

    result = 'rgba('+r+', '+g+', '+b+', '+opacity+')';
    return result;
}
