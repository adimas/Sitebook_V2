$(document).on('ready', function() {

	/* Configuration here: http://caroufredsel.dev7studios.com/configuration.php */
	$(".carousel ul").carouFredSel({
		items	: 3,
		scroll	: {
			items			: 1,
			duration		: 500,
			timeoutDuration	: 4000,
			pauseOnHover	: true
		},
		auto	: true,
		prev	: ".prev",
		next	: ".next"
	}).parent().css("width", "100%");


});

jQuery(document).ready(function($){
	$("#dropmenu").on("click", function(e){
		$(".inline").slideToggle("slow");
		
		$(this).toggleClass("active");
	});

});
