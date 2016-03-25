$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      touchDrag: true,
      autoplayHoverPause: true,
      navigationText : false
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });


 
   $(".home-news__tab--news--slider").owlCarousel({        
      navigation : false, 
      items : 4,
      slideSpeed : 1000,
      paginationSpeed : 400,
      touchDrag: true,
      autoplayHoverPause: true,
      items: [4],
      itemsDesktop: [1280, 3],
      itemsDesktopSmall: [1000, 2],
      itemsMobile: [690, 1],
      navigation: true,
      navigationText : false,
      pagination : false

  });

 
   $(".home-news__tab--articles--slider").owlCarousel({        
      navigation : false, 
      items : 4,
      slideSpeed : 1000,
      paginationSpeed : 400,
      touchDrag: true,
      autoplayHoverPause: true,
      items: [4],
      itemsDesktop: [1280, 3],
      itemsDesktopSmall: [1000, 2],
      itemsMobile: [690, 1],
      navigation: true,
      navigationText : false,
      pagination : false

  });

 
   $(".home-news__tab--video--slider").owlCarousel({        
      navigation : false, 
      items : 4,
      slideSpeed : 1000,
      paginationSpeed : 400,
      touchDrag: true,
      autoplayHoverPause: true,
      items: [4],
      itemsDesktop: [1280, 3],
      itemsDesktopSmall: [1000, 2],
      itemsMobile: [690, 1],
      navigation: true,
      navigationText : false,
      pagination : false

  });


 
});

$(function() {
    $('.top-slider__item h2').highlight( 'G-' );
    
});

$(function() {
    /*jQuery('#home-news__tab--news').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        adaptiveHeight: true,
        speed: 300,
        arrows: true,        
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });*/

    
});