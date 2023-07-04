/* Menu Click Function */
$('.menu-icon').bind('click', function() {
    $(this).toggleClass('active');
    $(this).find('div').removeClass('no-animation');
    $('#menu').toggle();
    $('#main').toggleClass('blur')
});

$('.menu--item--main--element-homepage').click(function(){
    $('#menu').hide();
    $('#main').removeClass('blur');
    $('.menu-icon').toggleClass('active');
    $('#content-page').hide();
    $('#home-page').show();
    $('.side-bar-list--item').removeClass('side-bar-list--item-active');
    $('.side-bar-list--item-home').addClass('side-bar-list--item-active');

});

$('.home-page-start-button').click(function () {
   $('#home-page').hide();
   $('#content-page').show();
   $('.content-page-logo').show();
    $('.content-page-main').hide();
    $('.content-page-main--student-home-rent').show();
   $('.side-bar-list--item-home').removeClass('side-bar-list--item-active');
   $('.side-bar-list--item-student-home').addClass('side-bar-list--item-active');

    $('#slider-student-home').slick({
        variableWidth: true,
        dots: true,
        centerMode: true,
        infinite: false,
        autoplay: false
    });

});

$('.menu--item--main--element-deal').click(function(){
	$('#menu').hide();
    $('#main').removeClass('blur');
    $('.menu-icon').toggleClass('active');
    $('#home-page').hide();
    $('#content-page').show();
    $('.content-page-logo').show();
    $('.content-page-main').hide();
    $('.content-page-main--student-home-rent').show();
    $('.side-bar-list--item-home').removeClass('side-bar-list--item-active');
    $('.side-bar-list--item-student-home').addClass('side-bar-list--item-active');

    $('#slider-student-home').slick({
        variableWidth: true,
        dots: true,
        centerMode: true,
        infinite: false,
        autoplay: false
    });
});

$('.home-page-start-button--mobile--scroll-icon').click(function(){
    $('#home-page').hide();
    $('#content-page').show();
    $('.content-page-logo').show();
    $('.content-page-main').hide();
    $('.content-page-main--student-home-rent').show();
    $('.side-bar-list--item-home').removeClass('side-bar-list--item-active');
    $('.side-bar-list--item-student-home').addClass('side-bar-list--item-active');

    $('#slider-student-home').slick({
        variableWidth: true,
        dots: true,
        centerMode: true,
        infinite: false,
        autoplay: false
    });
});

$('.side-bar-list--item-home').click(function () {
    $('#home-page').show();
    $('#content-page').hide();
    $('.content-page-logo').hide();
    $('.side-bar-list--item').removeClass('side-bar-list--item-active');
    $('.side-bar-list--item-home').addClass('side-bar-list--item-active');
});
$('.side-bar-list--item-taxi').click(function(){
    $('#home-page').hide();
    $('#content-page').show();
    $('.content-page-logo').show();
    $('.content-page-main').hide();
    $('.content-page-main--taxi').show();
    $('.side-bar-list--item').removeClass('side-bar-list--item-active');
    $('.side-bar-list--item-taxi').addClass('side-bar-list--item-active');

    $('#slider-taxi').slick({
        variableWidth: true,
        dots: true,
        centerMode: true,
        infinite: false,
        autoplay: false
    });

});
$('.side-bar-list--item-student-home').click(function(){
    $('#home-page').hide();
    $('#content-page').show();
    $('.content-page-logo').show();
    $('.content-page-main').hide();
    $('.content-page-main--student-home-rent').show();
    $('.side-bar-list--item').removeClass('side-bar-list--item-active');
    $(this).addClass('side-bar-list--item-active');
    $('#slider-student-home').slick({
        variableWidth: true,
        dots: true,
        centerMode: true,
        infinite: false,
        autoplay: false
    });
});

/*$('.side-bar-list--market').click(function(){
    $('#home-page').hide();
    $('#content-page').show();
    $('.content-page-logo').show();
    $('.content-page-main').hide();
    $('.content-page-main--market').show();
    $('.side-bar-list--item').removeClass('side-bar-list--item-active');
    $(this).addClass('side-bar-list--item-active');
    $('#slider').slick({
        variableWidth: true,
        dots: true,
        centerMode: true,
        infinite: false,
        autoplay: false
    });
});
$('.side-bar-list--football-ticket').click(function(){
    $('#home-page').hide();
    $('#content-page').show();
    $('.content-page-logo').show();
    $('.content-page-main').hide();
    $('.content-page-main--football-ticket').show();
    $('.side-bar-list--item').removeClass('side-bar-list--item-active');
    $(this).addClass('side-bar-list--item-active');
    $('#slider').slick({
        variableWidth: true,
        dots: true,
        centerMode: true,
        infinite: false,
        autoplay: false
    });
});
$('.side-bar-list--avm').click(function(){
    $('#home-page').hide();
    $('#content-page').show();
    $('.content-page-logo').show();
    $('.content-page-main').hide();
    $('.content-page-main--avm').show();
    $('.side-bar-list--item').removeClass('side-bar-list--item-active');
    $(this).addClass('side-bar-list--item-active');
    $('#slider').slick({
        variableWidth: true,
        dots: true,
        centerMode: true,
        infinite: false,
        autoplay: false
    });
});
$('.side-bar-list--check').click(function(){
    $('#home-page').hide();
    $('#content-page').show();
    $('.content-page-logo').show();
    $('.content-page-main').hide();
    $('.content-page-main--check').show();
    $('.side-bar-list--item').removeClass('side-bar-list--item-active');
    $(this).addClass('side-bar-list--item-active');
    $('#slider').slick({
        variableWidth: true,
        dots: true,
        centerMode: true,
        infinite: false,
        autoplay: false
    });
});
$('.side-bar-list--cinema-ticket').click(function(){
    $('#home-page').hide();
    $('#content-page').show();
    $('.content-page-logo').show();
    $('.content-page-main').hide();
    $('.content-page-main--cinema-ticket').show();
    $('.side-bar-list--item').removeClass('side-bar-list--item-active');
    $(this).addClass('side-bar-list--item-active');
    $('#slider').slick({
        variableWidth: true,
        dots: true,
        centerMode: true,
        infinite: false,
        autoplay: false
    });
});
*/


