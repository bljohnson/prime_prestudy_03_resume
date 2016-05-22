$(document).ready(function() {
	$('header').on('click', '.resumeButton', function () {
		$(this).closest('body').find('.sectionButtons').fadeToggle(250, "linear");
		$(this).closest('body').find('.contact,.education,.work,.volunteer').fadeOut(250, "linear");
	}); 
	$('.sectionButtons').on('click', '.contactButton', function () {
		$(this).closest('body').find('.contact').fadeToggle(250, "linear");
		$(this).closest('body').find('.education,.work,.volunteer').fadeOut(250, "linear");
	});
	$('.sectionButtons').on('click', '.educationButton', function () {
		$(this).closest('body').find('.education').fadeToggle(250, "linear");
		$(this).closest('body').find('.contact,.work,.volunteer').fadeOut(250, "linear");

	});
	$('.sectionButtons').on('click', '.workButton', function () {
		$(this).closest('body').find('.work').fadeToggle(250, "linear");
		$(this).closest('body').find('.contact,.education,.volunteer').fadeOut(250, "linear");
	});
	$('.sectionButtons').on('click', '.volunteerButton', function () {
		$(this).closest('body').find('.volunteer').fadeToggle(250, "linear");
		$(this).closest('body').find('.contact,.education,.work').fadeOut(250, "linear");
	});
});