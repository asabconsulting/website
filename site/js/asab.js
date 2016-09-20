$(document).ready(function() {

function pageLoad() {
    var loc = window.location.href.split('/');
    var page = loc[loc.length - 1];
	$('.menu-row ul li a').each(function (i) {
		 var href = $(this).attr('href');
		 if (href.indexOf(page) != -1) {
			 $('ul.nav li.active').removeClass('active');
			 $(this).parent().addClass('active');
		 }
	 });
}

pageLoad();
	 
}