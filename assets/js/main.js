(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".detailses_items_carousel").owlCarousel({ 
    items: 1,
    // navText: [
    //   '<i class="fa fa-angle-left"></i>',
    //   '<i class="fa fa-angle-right"></i>'
    // ],
    nav: false,
    dots: true, 
    autoHeight:true
  });

  /* magnificPopup img view */
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  }); 

 
})(jQuery);
