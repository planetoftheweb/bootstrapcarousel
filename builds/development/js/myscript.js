$(function() {
  var topoffset = 0; //variable for scrolling effects

	//Make a special class go full screen
  var wheight = $( window ).height(); //get the height of the window
  $('.fullheight').css('height', wheight); //set to window tallness 

  //adjust height of .fullheight elements on window resize
  $( window ).resize(function() {
    var wheight = $( window ).height();
    $('.fullheight').css('height', wheight); //set to window tallness 
  });

	$('#featured .item img').each(function() {
		var imgSrc = $(this).attr('src');
		$(this).parent().css({'background-image': 'url('+imgSrc+')'});
		$(this).remove();
	});

	//Activate Scrollspy
	$('body').scrollspy({ target: 'header .navbar' })

  //Use smooth scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

	$('.carousel').carousel({
	  interval: 7000
	})

}); //function
