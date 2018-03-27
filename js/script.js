
$(function () {
   $('.delivery').waypoint(function (direction) {
       if(direction ==='down'){
           $('div.header__row').addClass('sticky');
       } else {
           $('div.header__row').removeClass('sticky');
       }
   },{
       offset:50
   });

   $('.js--scroll--to--bottles').click(function () {
       $('html, body').animate({scrollTop: $('.bottles').offset().top},1000);
   });

   $('.js--scroll--to--delivery').click(function () {
       $('html, body').animate({scrollTop: $('.delivery').offset().top},1000);
   });


   $('a[href*="#"]:not([href="#"])').click(function() {
       if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
           var target = $(this.hash);
           target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
               $('html,body').animate({
                    scrollTop: target.offset().top
               }, 1000);return false;
           }
       }
   });


   $('.wp-1').css('opacity', '0').waypoint(function (direction) {
       $('.wp-1').addClass('animated fadeIn').css('opacity', '1');
   },{
       offset:'50%'
   });

    $('.wp-2').css('opacity', '0').waypoint(function (direction) {
        $('.wp-2').addClass('animated fadeInUp').css('opacity', '1');
    },{
        offset:'40%'
    });

    $('.wp-3').css('opacity', '0').waypoint(function (direction) {
        $('.wp-3').addClass('animated slideInUp').css('opacity', '1');
    },{
        offset:'60%'
    });

    $('.wp-4').waypoint(function (direction) {
        $('.wp-4').addClass('animated pulse').css('opacity', '1');
    },{
        offset:'40%'
    });

    $('.js--nav-icon').click(function () {
        var nav = $('.header__navbar-list');
        var  icon = $('.js--nav-icon i');

        if(icon.hasClass('ion-navicon-round')){
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
        }else{
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }

        nav.slideToggle(400);
    });
});































































