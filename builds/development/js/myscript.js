$(function() {
  var topoffset = 50; //variable for scrolling effects

	//Make a special class go full screen
  var wheight = $( window ).height(); //get the height of the window
  $('.fullheight').css('height', wheight); //set to window tallness 

  //adjust height of .fullheight elements on window resize
  $( window ).resize(function() {
    var wheight = $( window ).height();
    $('.fullheight').css('height', wheight); //set to window tallness 
  });

  //replace each IMG inside the carousel with a background image

	$('#featured .item img').each(function() {
		var imgSrc = $(this).attr('src');
		$(this).parent().css({'background-image': 'url('+imgSrc+')'});
		$(this).remove();
	});

//  <!-- Indicators -->
//  <ol class="carousel-indicators">
//    <li data-target="#featured" data-slide-to="0" class="active"></li>
//    <li data-target="#featured" data-slide-to="1"></li>
//    <li data-target="#featured" data-slide-to="2"></li>
 // </ol>

	//Activate Scrollspy
	$('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
  })


   var hash = $(this).find("li.active a").attr("href");
   if (hash!=="#featured") {
      $('header nav').addClass('inbody');
   } else {
      $('header nav').removeClass('inbody');
   }

  //if scroll location goes past the top
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function () {
     var hash = $(this).find("li.active a").attr("href");
     if (hash!=="#featured") {
        $('header nav').addClass('inbody');
     } else {
        $('header nav').removeClass('inbody');
     }
  })


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
	  interval: 4000
	})

}); //function
