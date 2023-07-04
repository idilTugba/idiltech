//=============================================
//=============================================
//=============================================
//           JQUERY DOCUMENT READY            =
//=============================================
//=============================================
//=============================================
$("document").ready(function() {

  /*============================
  //            HOME           =
  ============================*/
  $(".logo").click(function(){
    $(".navbar").slideToggle('700');
  });

  $("#scroll-img").hover(function(){

  });
  /*-----  End of HOME  ------*/


  /*=====================================
  //            Bootstrap Tab           =
  =====================================*/
  $('#myTab .item, #imgTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
  /*-----  End of Bootstrap Tab  ------*/



  /*================================
  //            ONE PAGE           =
  ================================*/
  $.localScroll.defaults.axis = 'y';
  $('#navigation, #up-button').localScroll({
    target: 'html', // could be a selector or a jQuery object too.
    queue:true,
    duration:1000,
    hash:false,
    onBefore:function( e, anchor, $target ){
      // The 'this' is the settings object, can be modified
    },
    onAfter:function( anchor, settings ){
      // The 'this' contains the scrolled element (#wrap)
    }
  });
  /*-----  End of ONE PAGE  ------*/


  /*==============================================
  //            RENKLERİ TERSİNE ÇEVİR           =
  ==============================================*/
  $('.working-svg').click(function(event) {
    var index = $(this).index();
    console.log('index ' , index);
    $('.working-svg .click-show').not($('.working-svg:eq('+ index +') .click-show')).slideUp(400);
    $('.working-svg .svg-holder').not($('.working-svg:eq('+ index +') .svg-holder')).removeClass('black');
    $(this).find('.svg-holder').toggleClass('black');
    $(this).find('.click-show').slideToggle(700);
  });

  $('.icon-back').click(function(event) {
    $('.click-show').slideUp(700);
  });
  /*-----  End of RENKLERİ TERSİNE ÇEVİR  ------*/



  /*====================================
  //            OWL CAROUSEL           =
  ====================================*/
  $("#myTab").owlCarousel({
    items : 4
  });

  function teamMembersCarousel() {
    function activeTeam(){
      //$("#teamMembers").find('.active img').addClass(selectedCss);
      $("#teamMembers").find('.item').removeClass('defaultCss transformX transformXters zIndex');
      $("#teamMembers").find('.active').removeClass('zIndex');
      $("#teamMembers").find('.active').eq(0).find('.item').addClass('defaultCss transformX');
      $("#teamMembers").find('.active').eq(0).addClass('zIndex');
      $("#teamMembers").find('.active').eq(4).addClass('zIndex');
      $("#teamMembers").find('.active').eq(4).find('.item').addClass('defaultCss transformXters');
    };
    window.activeTeam = activeTeam;

    $("#teamMembers").owlCarousel({
      items : 5,
      addClassActive : true,
      startDragging : activeTeam,
      afterMove : activeTeam,
      afterUpdate : activeTeam
    });
  };
  teamMembersCarousel();
  /*-----  End of OWL CAROUSEL  ------*/



  /*===================================
  //            BREAKPOINTS          =
  ===================================*/
  var breakpoint = {
    320: false,
    480: false,
    768: false,
    960: false,
    1200: false
  };

  window.breakpoint = breakpoint;
  var setWindowBreakpoint = function(breakpointValue) {
    $.each(breakpoint, function(index, val) {
      if (Number(index) !== breakpointValue) {
        breakpoint[Number(index)] = false;
      }
      else {
        breakpoint[Number(index)] = true;
      }
    });
  };

  /////////////////
  // breakpoints //
  /////////////////
  $(window).setBreakpoints({
    distinct: true,
    breakpoints: [320, 480, 768, 960, 1200 ]
  })

  // 1200
  $(window).on('enterBreakpoint1200',function() {
    console.info('enterBreakpoint1200');
    setWindowBreakpoint(1200);
  });
  // 960
  $(window).on('enterBreakpoint960',function() {
    console.info('enterBreakpoint960');
    setWindowBreakpoint(960);
  });
  $(window).on('enterBreakpoint768',function() {
    setWindowBreakpoint(768);
    console.info('enterBreakpoint768');
  });
  $(window).on('enterBreakpoint480',function() {
    setWindowBreakpoint(480);
    console.info('enterBreakpoint480');
  });
  $(window).on('enterBreakpoint320',function() {
    setWindowBreakpoint(320);
    console.info('enterBreakpoint320');
  });
  // breapoint changes
  $(window).on("breakpointChanged", function(event) {
    console.info('breakpoint changed');
  });
  //--------  End of breakpoints  ---------//
  /*-----  End of BREAKPOINTS ------*/



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
$(window).load(function() {

  activeTeam();

  /*==================================
  //           SAYFA AÇILDIKTAN 5 SN SONRA           =
  ==================================*/
  setTimeout(function() {
    $('.navbar').slideDown('700')
  }, 5000);

  /*-----  End ofSAYFA AÇILDIKTAN 5 SN SONRA  ------*/


  /*=====================================
  //            HOMEPAGE 100%           =
  =====================================*/
  function homeInit() {
    var home      = jQuery('#home'),
      winHeight   = jQuery(window).height(),
      homeHeight  = winHeight;
    if (jQuery(window).width() > 748 && jQuery(window).height() > 500 ) {
      home.css({height: homeHeight + "px"});
    }
    else {
      home.css({height: "auto" , position: "relative"});
    }
  };
  jQuery(window).on("resize", homeInit);
  jQuery(document).on("ready", homeInit);
  homeInit();
  /*-----  End of HOMEPAGE 100%  ------*/


  /*==================================
  //            GOOGLE MAP           =
  ==================================*/
  function initialize() {
    var holdinner = $('.map').innerHeight();
    var mapcanvash = (holdinner * 0.07575) - 0.614906;
    $('#map_canvas').css('height', holdinner + "px");
    var pin = new google.maps.LatLng(41.049742, 28.988588); // The location of the marker
    var center = new google.maps.LatLng(41.049742, 28.988588); // This is the center of the map
    var mapOptions = {
      zoom: 16,
      center: center,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      panControl: false,
      scrollwheel: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.BIG,
        position: google.maps.ControlPosition.LEFT_TOP
      },
      streetViewControl: false
    }
    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    var contentString = '<div class="content" style="margin:0; padding:0;">' + '</div>';
    var infowindow = new google.maps.InfoWindow({

    });
    var marker = new google.maps.Marker({
      position: pin,
      map: map,
      title: 'Orko Mimarlık',
      zIndex: 99,
      icon: 'img/icon-map.png'
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
  };
  initialize();
  /*-----  End of GOOGLE MAP  ------*/


}); //windows.load
//-----  End of   JQUERY WINDOW LOAD   -----//
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

/////////////////////////////
// page animation function //
/////////////////////////////
var pageAnimation = function(div1, div2, anim1, anim2, bool) {
  var animEnd = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
  var pages = [div1, div2];
  var cl1 = div1.attr('class');
  var cl2 = div2.attr('class');
  var isAnimation = div1.data('animation');
  if ( !isAnimation ) {
    div1.attr('class', cl1 + " " + anim1).on(animEnd, function(event) {
      div1.attr('class', cl1);
      div1.removeClass('anim-active');
    });
    div2.attr('class', cl2 + " " + anim2 +  " " + "anim-active").on(animEnd, function(event) {
      div2.attr('class', cl2);
      div2.addClass('anim-active');
    });
    div1.data('animation', anim2);
    div2.data('animation', anim1);
  }
  else {
    div1.attr('class', cl2 + " " + anim2).on(animEnd, function(event) {
      div1.attr('class', cl2);
      div1.addClass('anim-active');
    });
    div2.attr('class', cl2 + " " + anim1 +  " " + "anim-active").on(animEnd, function(event) {
      div2.attr('class', cl2);
      div2.removeClass('anim-active');
    });
    div1.data('animation', "");
    div2.data('animation', "");
  }
};
// pageAnimation(div1, div2, "rotatePushLeft", "rotatePullRight delay300");



///////////////////////////////////
// print window height and width //
///////////////////////////////////
// var windowSizePrint = function(argument) {
// 	windowWidth = $(window).width();
// 	windowHeight = $(window).height();
// 	if (!$("#window-size-info").length) {
// 		$('body').append('<h2 id="window-size-info" style="position: fixed; bottom: 30px;right: 0;z-index: 9999;background-color:#000;color: #fff;font-size: 14px;box-shadow:none;padding:5px;box-shadow:0 0 0 transparent;"><span class="w"></span> x <span class="h"></span></h2>')
// 	};
// 	$('h2#window-size-info span.w').text(windowWidth);
// 	$('h2#window-size-info span.h').text(windowHeight);
// }
// $("document").ready(windowSizePrint);
// $(window).load(windowSizePrint);
// $(window).resize(windowSizePrint);



/////////////////////////////////////////////
// center elements vertical and horizontal //
/////////////////////////////////////////////
function getCentered(){
	var $centerHorizontal = $('.center-horizontal'),
		$centerVertical = $('.center-vertical');
	$centerHorizontal.each(function(){
		$(this).css('marginLeft', -$(this).outerWidth()/2);
	});
	$centerVertical.each(function(){
		$(this).css('marginTop', -$(this).outerHeight()/2);
	});
	$centerHorizontal.css({
		'display' : 'inline',
		'position' : 'absolute',
		'left' : '50%'
	});
	$centerVertical.css({
		'display' : 'inline',
		'position' : 'absolute',
		'top' : '50%',
	});
}
$("document").ready(getCentered);
$(window).load(getCentered);
$(window).resize(getCentered);



//////////////////////
// mobiles function //
//////////////////////
var browser = {
  mobile  : navigator.userAgent.indexOf("Mobile") + 1,
  windows : navigator.userAgent.indexOf("Windows") + 1,
  chrome  : navigator.userAgent.indexOf("Chrome") + 1,
  firefox : navigator.userAgent.indexOf("Firefox") + 1,
  apple   : navigator.userAgent.indexOf("Safari") + 1,
  ipod    : navigator.userAgent.indexOf("iPod") + 1,
  iphone  : navigator.userAgent.indexOf("iPhone") + 1,
  ipad    : navigator.userAgent.indexOf("iPad") + 1,
  android : navigator.userAgent.indexOf("Android") + 1,
  ie      : navigator.userAgent.indexOf("MSIE") + 1
};










