$(document).ready(function(){
  $('.pane').hide();
	$('#home').show();
  $('#home_item').addClass('active');

	//show home
	$('#home_button').on('click', function(){
		$('.pane').hide();
    $('.nav-item').removeClass('active');
    $('#home_item').addClass('active');
		$('#home').show();
	});
  $('#logo_button').on('click', function(){
		$('.pane').hide();
    $('.nav-item').removeClass('active');
    $('#home_item').addClass('active');
		$('#home').show();
	});
  $('#brand_button').on('click', function(){
		$('.pane').hide();
    $('.nav-item').removeClass('active');
    $('#home_item').addClass('active');
		$('#home').show();
	});
	//show link
	$('#about_button').on('click', function(){
		$('.pane').hide();
    $('.nav-item').removeClass('active');
    $('#about_item').addClass('active');
		$('#about').show();
	});
	//show disabled
	$('#contact_button').on('click', function(){
		$('.pane').hide();
    $('.nav-item').removeClass('active');
    $('#contact_item').addClass('active');
		$('#contact').show();
	});
});
