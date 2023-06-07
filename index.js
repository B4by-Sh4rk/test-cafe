$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    responsive:{
      0:{
          items: 2
      },
      1200:{
          items: 3

      }
    },
    navText: [$('.prev'),$('.next')],
  });

});
