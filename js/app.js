$(document).ready(function()  {
$( '.owl-one' ).owlCarousel({
  loop: true,
  lazyLoad: false,
  nav: true,
  responsiveClass:true,
  navigation: true,  
  dots: false,
  navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
  responsive: {
      0: {
          items: 1
      },
    
      375: {
          items: 2
      },
      
      768: {
          items: 3
      },
      1000: {
          items: 4
      }
  }
}); 

$( '.owl-two' ).owlCarousel({
    loop: true,
    lazyLoad: false,
    nav: false,
    responsiveClass:true,
    navigation: true,  
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
      
        375: {
            items: 2
        },
        
        768: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
  }); 
});









