$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

     // Custom Button
    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.owl-prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });
});