$(document).ready(function() {	

	var maxWidth = window.matchMedia( "(min-width: 1024px)" );
	if (maxWidth.matches) {	        
	    $(function(){
			// Header fixed	
	        var fixedHeader = 200;
	        $(window).scroll(function() {
	            var scroll = getCurrentScroll();
	            if ( scroll >= fixedHeader ) {
	               $('#site-header').addClass('header-fixed');
	            }
	            else {
	                $('#site-header').removeClass('header-fixed');
	            }
	        });
	        function getCurrentScroll() {
	            return window.pageYOffset || document.documentElement.scrollTop;
	        }
	    });
	}

	var maxWidth = window.matchMedia( "(max-width: 1024px)" );
	if (maxWidth.matches) {
	    // Transmision en vivo - mobile
	    $('.transmision-vivo .ver-ahora').click(function(event) {
	        event.preventDefault();
	        $('.btn-hamburger').removeClass('active');
	        $('#site-header').removeClass('header-nav-open');
	        $('.transmision-vivo .transmision-col:nth-child(3)').slideToggle();
	    });
	}
	
    // Menu mobile
    $('.btn-hamburger').click(function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('#site-header').toggleClass('header-nav-open');
        $('.transmision-vivo .transmision-col:nth-child(3)').slideUp();
    });
    
    // Buscador
    $('.search-link').click(function(event) {
        event.preventDefault();
        $(this).toggleClass('close-search');
    	$(".search-form").toggle();
    	$("#q").focus();
    });
});
