$(document).ready(function(){
  
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:40,
        nav:false,
        autoPlay: 2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
    });
  