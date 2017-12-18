$(document).ready(function() {

    // Menu mobile
    $('#page').click(function() {
        $('.menu-header').removeClass('menu-header-open');
        $('.btn-hamburguer').removeClass('active');
    });

    $('.btn-hamburguer').click(function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('.menu-header').toggleClass('menu-header-open');
    });


    // Dropdown menu
    $('html').click(function() {
        $('li.dropdown-active').removeClass('dropdown-active');
    });

    $('.dropdown').click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        $('.dropdown-menu').removeClass('dropdown-active');
        $(this).parent('.dropdown-menu').addClass('dropdown-active');
    });

    // Block media

    $('.open-tab').click(function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('.tab').slideToggle(800);
    });

    // Buscador header
    $('.open-search').click(function(e) {
        e.preventDefault();
        $('.search-header').addClass('search-active');
        $('.input-search').focus();
    });
 
    // Slider tweet
    $(".slider-items").owlCarousel({ 
        items:1,    
        autoHeight: true,    
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        margin: 20
    });

	// Header fixed
    $(function(){
        var fixedHeader = 280;
        $(window).scroll(function() {
            var scroll = getCurrentScroll();
            if ( scroll >= fixedHeader ) {
               $('#top-page').addClass('header-fixed');
            }
            else {
                $('#top-page').removeClass('header-fixed');
            }
        });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });
    
    // Scroll down
    $(function() {
        $('.scroll-down[href^="#"]').click(function() {    // Change to needed selector
            $("html, body").animate({    // Need both for full browser support
                scrollTop: $( $(this).attr("href") ).offset().top - 128 // Extra 128px
            }, 1000);    // Change to desired scroll time in ms
            return false;    // Prevents the dreaded jump/flash
        });
	});

    // Social fixed
    $('.social-fixed').scrollToFixed({
        marginTop: $('.header-post').outerHeight() + 100,
        limit: function() {
            var limit = $('.block-media').offset().top - $('.social-fixed').outerHeight(true) - 60;
            return limit;
        },
        zIndex: 333,
    });

    // Datepicker
    $(function() {
		
        $( "#busqueda_fecha_desde" ).datepicker({
            dateFormat: 'dd/mm/yy',
            showOn: "both",
            buttonImage: "https://www.santafe.gob.ar/assets/app/2016/images/calendar.png",
            buttonImageOnly: true,
            buttonText: "Desde",
            changeMonth: true,
            onClose: function( selectedDate ) {
                $( "#to" ).datepicker( "option", "minDate", selectedDate );
            }
        });
        $( "#busqueda_fecha_hasta" ).datepicker({
            dateFormat: 'dd/mm/yy',
            showOn: "both",
            buttonImage: "https://www.santafe.gob.ar/assets/app/2016/images/calendar.png",
            buttonImageOnly: true,
            buttonText: "Hasta",
            changeMonth: true,
            onClose: function( selectedDate ) {
                $( "#from" ).datepicker( "option", "maxDate", selectedDate );
            }
        });
    });

});
