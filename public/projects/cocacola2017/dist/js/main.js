///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
//=============================================
//           JQUERY DOCUMENT READY            =
//=============================================


$("document").ready(function() {


  if($('html').find('.home-page-for-header')==true){
  } else{
    $('.header-close').addClass('small');
    $('#header').removeClass('active2');
  }

  var browserH = window.innerHeight;
  var browserW = window.innerWidth;
    $('input,textarea').focus(function () {
        $(this).data('placeholder', $(this).attr('placeholder'))
               .attr('placeholder', '');
    }).blur(function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });
 
  
  $('#menu-icon-open').click(function(){
    $('#header-open').toggleClass('active');
    $('#wrap').toggleClass('active');
    $('body').toggleClass('active');
    $(this).parent('.menu-icon').toggleClass('close');
  });


    var copy = function(vf){
    };


      $('span.text').on('click',function(vf){
        var vf = $(this).parent().find('input').val();
        $(this).css({'display':'none'});
        $(this).parent().find('span.check').css({'display':'inline-block'});
        document.addEventListener('copy', function(e){
            e.clipboardData.setData(vf);
            e.preventDefault(); // We want our data, not data from any selection, to be written to the clipboard
        });
      });

      $('span.text2').on('click',function(vf){
        var vf = $(this).parent().find('input').val();
        $(this).css({'display':'none'});
        $(this).parent().find('span.check2').css({'display':'inline-block'});
        document.addEventListener('copy', function(e){
            e.clipboardData.setData(vf);
            e.preventDefault(); // We want our data, not data from any selection, to be written to the clipboard
        });
      });
  

  $('#nasil-online').click(function(){
    $('#popup-content-online').addClass('active');
    //$('body').css({'overflow':'hidden'});
  });

  $('#nasil-digi').click(function(){
    $('#popup-content-digi').addClass('active');
    //$('body').css({'overflow':'hidden'});
  });

  $('#kk-popup').click(function(){
    $('#kk-popup-content').addClass('active');
    $('body').css({'overflow':'hidden'});
  });

  $('#gs-popup').click(function(){
    $('#gs-popup-content').addClass('active');
    $('body').css({'overflow':'hidden'});
  });
  
  $('.close-icon,.done-icon').click(function(){
    $('.popup-content').removeClass('active');
  });

  // Kullanım koşulları 






/**
  var boxAnimate = function(){
    TweenLite.from($('.item-holder .item:eq(0)'), 1, {opacity: '1', transform: 'translateY(10vw)', delay: 0.5});
    TweenLite.from($('.item-holder .item:eq(1)'), 0.7, {opacity: '1', transform: 'translateY(10vw)', delay: 0.5});
    TweenLite.from($('.item-holder .item:eq(2)'), 0.6, {opacity: '1', transform: 'translateY(10vw)', delay: 0.5});
    TweenLite.from($('.item-holder .item:eq(3)'), 0.9, {opacity: '1', transform: 'translateY(10vw)', delay: 0.5});    
  };

  boxAnimate();
  
**/

  


  /***IFRAME VIDEO v POPUP**/


}); //document.ready
//-----  End of JQUERY DOCUMENT READY   -----//
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
//=============================================
//=============================================
//=============================================
//             JQUERY WINDOW LOAD            ==
//=============================================
//=============================================
//=============================================
$(window).load(function(){

  
  $(".kk").mCustomScrollbar();
  
   var IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
   var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
   var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
   var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
   if ((IOS === true) || (isMac === true)){
       $('html').addClass('noVhSupport');
   }

   if ((IOS === true)){
       $('html').addClass('noVhSupport2');
   }

    
});
//-----  End of   JQUERY WINDOW LOAD   -----//
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////




/////////////////////////////////////////////
// center elements vertical and horizontal //
/////////////////////////////////////////////
<!--


/**


  $('.show').appear();
  $('.show2').appear();
  $('.transformA').appear();
  $('.show-left').appear();
  $('.show-right').appear();
  $('.show-fade').appear();
  $('.show-up').appear();

  $(document.body).on('disappear', '.show', function(e, $effected) {
    $(this).addClass('fadeInUp inner');
    $(this).removeClass('show');
  });

  $(document.body).on('appear', '.show2', function(e, $effected) {
    $(this).addClass('fadeInUp inner');
    $(this).removeClass('show2');
    $('#paracik-nedir3 .part2').find('.bg2').addClass('active');
  });

  $(document.body).on('appear', '.show-left', function(e, $effected) {
    $(this).addClass('bounceInLeft inner');
    $(this).removeClass('show-left');
  });

  $(document.body).on('appear', '.show-up', function(e, $effected) {
    $(this).addClass('pulse inner');
    $(this).removeClass('show-up');
  });

  $(document.body).on('appear', '.show-fade', function(e, $effected) {
    $(this).addClass('fadeIn inner');
    $(this).removeClass('show-fade');
  });

  $(document.body).on('appear', '.show-right', function(e, $effected) {
    $(this).addClass('bounceInRight inner');
    $(this).removeClass('show-right');
  });


  $(document.body).on('appear', '.transformA', function(e, $effected) {
    $(this).removeClass('transformA');
  });-->**/









