$(function(){

	// Smooth Scroll
	$('a[href*="#"]').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 400);
	    return false;
	});
}
