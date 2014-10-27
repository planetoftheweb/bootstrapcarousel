$(function() {
  var topoffset = 50; //variable for scrolling height

  //---- Start Carousel JavaScript

    //Make a special class go full screen
    var wheight = $( window ).height(); //get the height of the window
    $('.fullheight').css('height', wheight); //set to window tallness 

    //replace each IMG inside the carousel with a background image
    $('#featured .item img').each(function() {
      var imgSrc = $(this).attr('src');
      $(this).parent().css({'background-image': 'url('+imgSrc+')'});
      $(this).remove();
    });

  //---- End Carousel JavaScript

  //Activate Scrollspy
	$('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
  })
  
  // find out if the users has scrolled past the carousel, then add inbody class
   var hash = $(this).find("li.active a").attr("href");
   if (hash!=="#featured") {
      $('header nav').addClass('inbody');
   } else {
      $('header nav').removeClass('inbody');
   }

  // Does the same as above when scrollspy activates
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function () {
     var hash = $(this).find("li.active a").attr("href");
     if (hash!=="#featured") {
        $('header nav').addClass('inbody');
     } else {
        $('header nav').removeClass('inbody');
     }
  })

  //Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
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

}); //function
