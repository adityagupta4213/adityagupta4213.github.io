$('.nav-menu-side-bar').click(function(){
	$('.mobile-side-nav').addClass('show-menu');
});
$('.close-menu').click(function(){
	$('.mobile-side-nav').removeClass('show-menu');
});

$('.mobile-nav-menu').hide();
$('.mobile-nav-dropdown').click(function(){
	$('.mobile-nav-menu').slideToggle();
});