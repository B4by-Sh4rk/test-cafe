$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    responsive:{
      0:{
          items: 3
      },
      1900:{
          items: 4

      }
    },
    navText: [$('.prev'),$('.next')],
  });

});