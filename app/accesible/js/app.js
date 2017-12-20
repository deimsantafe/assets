$(document).ready(function() {

	$('.btn-contraste-1').click(function(event) {

	    event.preventDefault();

	    $('body').removeClass('contraste-2');
	    $('body').toggleClass('contraste-1');
	});

	$('.btn-contraste-2').click(function(event) {

	    event.preventDefault();

	    $('body').removeClass('contraste-1');
	    $('body').toggleClass('contraste-2');
	});
	    
});