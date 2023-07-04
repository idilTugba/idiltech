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


  var keys = {37: 1, 38: 1, 39: 1, 40: 1};

      function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;  
      }

      function preventDefaultForScrollKeys(e) {
          if (keys[e.keyCode]) {
              preventDefault(e);
              return false;
          }
      }


    function disableScroll() {
      console.log('no scroll');
      if (window.addEventListener) // older FF
          window.addEventListener('DOMMouseScroll', preventDefault, false);
      window.onwheel = preventDefault; // modern standard
      window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
      window.ontouchmove  = preventDefault; // mobile
      document.onkeydown  = preventDefaultForScrollKeys;
    }

    function enableScroll() {
      console.log('scroll free');
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.onmousewheel = document.onmousewheel = null; 
        window.onwheel = null; 
        window.ontouchmove = null;  
        document.onkeydown = null;  
    }


  
 /////////////////////////////////////
 /////////////////////////////////////
 /////////////////////////////////////
 /////////////////////////////////////
 /////////////////////////////////////




  var browserH = window.innerHeight;
  var pageH = $('.page').height();
  var browserW = window.innerWidth;
  pageH = pageH - (pageH/10);

    var oran = browserW/browserH;
    

  var videoWidth = function(){
    $('.page video').css({'width': browserW});
  }

  $('#back-top,#back-top2').click(function(){
    $('body').animate({
      scrollTop: 0 
    },500);
  });

  $(document).scroll(function(){
    if($(document).scrollTop() >= pageH){
      $('.how').addClass('active');
      console.log(pageH);
    }else{
      $('.how').removeClass('active');
    }
  });
 // videoWidth();
  //$(window).on("resize", videoWidth);

  $('#grid-side .owl-prev').click(function(){
      console.log(activeNo);
    setTimeout(function(){
      var activeNo = $('#grid-side').find('active').child().attr('data-id');
    },1000);
  });


  //DATE
  //DATE
  var clock;
  // Grab the current date
  var currentDate = new Date();

  // Set some date in the future. In this case, it's always Jan 1
  var futureDate  = new Date(currentDate.getFullYear() + 0, 2, 31, 21, 59); 

  // Calculate the difference in seconds between the future and current date
  var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

  // Instantiate a coutdown FlipClock
  clock = $('.clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true,
    showSeconds: false,
    callbacks: {
      stop: function(){
        console.log('done');
        $('.vd-section1 .clock').slideUp();
        $('.vd-section2 .watch-fi').slideDown();
        $('.vd-section2').addClass('live');
      }
    }
  });
  //DATE
  //DATE

  

  
  //SCROLL//

  $('#footer .title').click(function(){
    $('#footer ul').find('.minus').removeClass('active');
    $('#footer ul').find('.plus').addClass('active');
    if ($(this).parent().hasClass('active')==false) {
      $('#footer ul').removeClass('active');
      $(this).parent().toggleClass('active');
      $(this).find('.plus').removeClass('active');
      $(this).find('.minus').addClass('active');
    }else{
      $(this).parent().removeClass('active');
    }
  });
  
  $('#icon-menu').click(function(){
    $(this).toggleClass('active');
    $('#mobile-menu').toggleClass('active');
    $('html,body').toggleClass('no-scroll');
  });

  $('.c_main_tab').click(function () {
        var index = $(this).index();
        $('.c_main_tab').removeClass('active');
        $(this).addClass('active');
        $('.c_main_tab_content').removeClass('active');
        $('.c_main_tab_content').eq(index).addClass('active');
    });

    $('.c_description_accordion_title').click(function () {
        if ($(this).hasClass('active')==false)
        {
            $('.c_description_accordion_title').removeClass('active');
            $('.c_description_accordion_text').slideUp();
            $(this).addClass('active');
            $(this).next().slideDown();
        }
        else {
            $(this).removeClass('active');
            $(this).next().slideUp();
        }
    });

    $('.c_tab').click(function () {
        var index = $(this).index();
        $('.c_tab').removeClass('active');
        $(this).addClass('active');
        $('.c_tab_content').removeClass('active');
        $('.c_tab_content').eq(index).addClass('active');
    });

    $('.c_tab_table_content').each(function () {
        var country_count = $(this).find('.c_tab_table_content_text').length;
        if(country_count <= 20)
        {
            $(this).find('.c_tab_table_pagination').hide();
        }
        else {
            $(this).find('.c_tab_table_pagination').html("<div class=\"c_tab_table_pagination_left\" onclick=\"go_previous(this)\"></div><span>01</span> / " + Math.ceil(country_count / 20) + "<div class=\"c_tab_table_pagination_right\" onclick=\"go_next(this)\"></div>");
        }
    });

  /***IFRAME VIDEO v POPUP**/

  //TAB LİST
  var windowW = window.innerWidth;
  if(windowW>=801){
    $('.tab-list li, #tab-list li').click(function(){
      var TabDataHref = $(this).attr('data-href');
      $('#tab-list li').removeClass('active');
      $('#now').text('0'+TabDataHref);
      if(TabDataHref == 'all'){
        $('.slider-tarifeler .list-part').addClass('active');
        $(this).addClass('active');
      } else{
        $('.slider-tarifeler .list-part').removeClass('active');
        $('.'+TabDataHref).addClass('active');
        $(this).addClass('active');        
      }
    });

    $('ul.slider-link-tarifeler li').click(function(){
       $('ul.slider-link-tarifeler li').removeClass('active');
       $(this).addClass('active');
       var dataHref = $(this).attr('data-href');
       $('.tarife-box').removeClass('active');
       $('.'+dataHref).addClass('active');
       if(browserW<801){
         //$('.tarife-slider .owl-item').removeClass('active');
        // $('#'+dataId).parent().addClass('active');

       }
     });
  }
  //TAB LİST
 
  //DOT TARİFELER
  $('.tarife-slider-mobile-dot li').click(function(){
    $('.tarife-slider-mobile-dot li').removeClass('active');
    $(this).addClass('active');
    var dotId = $(this).attr('id');
    $('.tarife-box').removeClass('active');
    $('#tarife-slider .'+dotId ).addClass('active');
  });
  //DOT TARİFELER


//ACORDION SCROLL

if($('.c_description_accordion_text').length == 0){
 
} else {
  $('.c_description_accordion_text').mCustomScrollbar({
    scrollButtons:{
      enable:true
    }
  });    
}

  $('.pop-up .row').mCustomScrollbar({
    scrollButtons:{
      enable:true
    }
  });    

// RED ÜLKELERİ TAB
  $('.red-tab-list li').click(function(){
    var redTabId = $(this).attr('id-data');
    var redTabName = $(this).text;
    $(this).parent().parent().parent().parent().slideDown();
    console.log(redTabName);
    $('.red-tab-content').removeClass('active');
    $('#'+redTabId).addClass('active');
  });
// RED ÜLKELERİ TAB




//var vid = document.getElementById("back-banner-video1");
//video
  
//video
//pop-up
  $('.pop-up-tab').click(function(){
    var popUpTab = $(this).attr('data-id');
    console.log(popUpTab);
    $('#'+popUpTab).addClass('active');
    $('#how').removeClass('active');
    disableScroll();
    console.log('fdefvd');
  });

  $('.pop-up .close').click(function(){
    $('.pop-up').removeClass('active');
    enableScroll();
  });

  $('.banner-pop-up .close').click(function(){
    $('.banner-pop-up').removeClass('active');
    enableScroll();
  });

  $('.popup-opening .close').click(function(){
    $('.popup-opening').removeClass('active');
    $('.banner-pop-up').removeClass('active');
    enableScroll();
  });

  $('.background-filter').click(function(){
    $('.popup-opening').removeClass('active');
    enableScroll();
  });

//pop-up


//grid number

var gridNumber = $('.part .item').length;
gridNumber = parseInt(gridNumber)-2;
console.log(gridNumber);
$('.number-grid').text(gridNumber);
//grid number




//ACORDION SCROLL


if (windowW <= 801) {

    $('.tooltip1').click(function(event){
      $(this).children('.tooltip-first').css({'display': 'block'});
      event.stopPropagation();
    });

    $('.tooltip2').click(function(event){
      $(this).children('.tooltip-first').css({'display': 'block'});
      event.stopPropagation();
    });

}





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
  


  // SSS TAB SISTEM
    $('#page4 li').click(function(){
      if ($(this).hasClass('active')==false) {
        var li = $(this).index();
        $('#page4 li').removeClass('active');
        $('#page4 li').eq(li).addClass('active');
        $('#page4 li ').find('.detail').slideUp(400);
        $('#page4 li').eq(li).find('.detail').slideDown(400);
        
      }
    });

    // SSS TAB SISTEM



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

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $('html').addClass('mobile');
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

if(window.innerWidth > 800){

  function go_previous(elem)
  {
      var next_page = 1;
      var current_page = $(elem).parent().parent().attr("current-page");
      next_page = --current_page;
      if (next_page < 1)
          next_page = 1;
      $(elem).parent().parent().attr("current-page", next_page);
      $(elem).parent().parent().find('.c_tab_table_content_text').hide();
      for (var i = (next_page - 1) * 21; i < (next_page - 1) * 21 + 21; i++)
      {
          $(elem).parent().parent().find('.c_tab_table_content_text').eq(i).show()
      }
      var total_page = Math.ceil($(elem).parent().parent().find('.c_tab_table_content_text').length / 21);
      if (next_page < 10)
          next_page = "0" + next_page;
      if (total_page < 10)
          total_page = "0" + total_page;
      $(elem).parent().parent().find('.c_tab_table_pagination').html("<div class=\"c_tab_table_pagination_left\" onclick=\"go_previous(this)\"></div><span>" + next_page + "</span> / " + total_page + "<div class=\"c_tab_table_pagination_right\" onclick=\"go_next(this)\"></div>");
  }

  function go_next(elem) {
      var next_page = 1;
      var current_page = $(elem).parent().parent().attr("current-page");
      next_page = ++current_page;
      var total_page = Math.ceil($(elem).parent().parent().find('.c_tab_table_content_text').length / 21);
      if (next_page > total_page)
          next_page = total_page;
      $(elem).parent().parent().attr("current-page", next_page);
      $(elem).parent().parent().find('.c_tab_table_content_text').hide();
      for (var i = (next_page - 1) * 21; i < (next_page - 1) * 21 + 21; i++) {
          $(elem).parent().parent().find('.c_tab_table_content_text').eq(i).show()
      }
      if (next_page < 10)
          next_page = "0" + next_page;
      if (total_page < 10)
          total_page = "0" + total_page;
      $(elem).parent().parent().find('.c_tab_table_pagination').html("<div class=\"c_tab_table_pagination_left\" onclick=\"go_previous(this)\"></div><span>" + next_page + "</span>/" + total_page + "<div class=\"c_tab_table_pagination_right\" onclick=\"go_next(this)\"></div>");
  }
}else{
  function go_previous(elem)
  {
      var next_page = 1;
      var current_page = $(elem).parent().parent().attr("current-page");
      next_page = --current_page;
      if (next_page < 1)
          next_page = 1;
      $(elem).parent().parent().attr("current-page", next_page);
      $(elem).parent().parent().find('.c_tab_table_content_text').hide();
      for (var i = (next_page - 1) * 20; i < (next_page - 1) * 20 + 20; i++)
      {
          $(elem).parent().parent().find('.c_tab_table_content_text').eq(i).show()
      }
      var total_page = Math.ceil($(elem).parent().parent().find('.c_tab_table_content_text').length / 20);
      if (next_page < 10)
          next_page = "0" + next_page;
      if (total_page < 10)
          total_page = "0" + total_page;
      $(elem).parent().parent().find('.c_tab_table_pagination').html("<div class=\"c_tab_table_pagination_left\" onclick=\"go_previous(this)\"></div><span>" + next_page + "</span> / " + total_page + "<div class=\"c_tab_table_pagination_right\" onclick=\"go_next(this)\"></div>");
  }

  function go_next(elem) {
      var next_page = 1;
      var current_page = $(elem).parent().parent().attr("current-page");
      next_page = ++current_page;
      var total_page = Math.ceil($(elem).parent().parent().find('.c_tab_table_content_text').length / 20);
      if (next_page > total_page)
          next_page = total_page;
      $(elem).parent().parent().attr("current-page", next_page);
      $(elem).parent().parent().find('.c_tab_table_content_text').hide();
      for (var i = (next_page - 1) * 20; i < (next_page - 1) * 20 + 20; i++) {
          $(elem).parent().parent().find('.c_tab_table_content_text').eq(i).show()
      }
      if (next_page < 10)
          next_page = "0" + next_page;
      if (total_page < 10)
          total_page = "0" + total_page;
      $(elem).parent().parent().find('.c_tab_table_pagination').html("<div class=\"c_tab_table_pagination_left\" onclick=\"go_previous(this)\"></div><span>" + next_page + "</span>/" + total_page + "<div class=\"c_tab_table_pagination_right\" onclick=\"go_next(this)\"></div>");
  }
  
}

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









