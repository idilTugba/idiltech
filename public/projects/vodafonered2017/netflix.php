<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="language" content="tr" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="robots" content="index, follow, odp" />
    <meta name="googlebot" content="index, follow" />
    <meta name="keywords" content="vodafone,vodafone red,red,red ayrýcalýklarý,red dünyasý,red fýrsatlarý,red tarifeleri, red small, red medium, red large, elite" />
    <meta name="description" content="Yeni Red tarifeleriyle akýllý cihaz indirimlerinden, restoran indirimlerine, yurtdýþý avantajlarýndan, seyahat indirimlerine kadar birçok fýrsat sizi bekliyor. Vodafone Red'le Hayat Daha Kolay!" />
    <meta property="og:title" content="Vodafone Red">
    <meta property="og:description" content="Yeni Red tarifeleriyle akýllý cihaz indirimlerinden, restoran indirimlerine, yurtdýþý avantajlarýndan, seyahat indirimlerine kadar birçok fýrsat sizi bekliyor. Vodafone Red'le Hayat Daha Kolay!" />
    <meta property="og:image" content="http://www.vodafone.com.tr/img/vodafone_logo.gif" />
    <meta property="og:site_name" content="Vodafone" />
    <meta name="search_image_url" content="http://www.vodafone.com.tr/img/search/red.jpg" />
    <meta name="search_name" content="Vodafone Red" />
    <meta name="search_description" content="Vodafone Red" />
    <meta name="search_category" content="plans" />
    <!--
    App Dowland Link for Mobile
    <meta name='yandex-verification' content='668b81a736039683' />
    <meta name="apple-itunes-app" content="app-id=983886691">
    <meta name="google-play-app" content="app-id=com.boynergrup.hopi">
    <meta name="msApplication-ID" content="App" />
    <meta name="msApplication-PackageFamilyName" content="HuluLLC.HuluPlus_fphbd361v8tya" />
    <meta name="msApplication-PackageEdgeName" content="9WZDNCRFJ3L1" />
    -->
    <!--Call with click to Phone Number for Apple-->
    <meta name="format-detection" content="telephone=no">

    <title>Ücretsiz Netflix | Vodafone Red</title>

    <!--[if lt IE 9]>
      <script type="text/javascript" src="js/html5shiv.js"></script>
      <script type="text/javascript" src="js/modernizr-2.6.2-respond-1.1.0.min.js"></script>
    <![endif]-->

    <link href="dist/img/favicon/favicon.png" rel="Shortcut icon">
    <link rel="stylesheet" href="dist/css/style.css" />
    <!--<link rel="stylesheet" href="dist/css/jquery.smartbanner.css" />-->
    <style type="css"></style>

    
    <script type="text/javascript" src="dist/js/all.js"></script>

    <script type="text/javascript">

        $(window).load(function(){
          setTimeout(function(){
            $(window).scrollTop( 0 );
          },1);
        });

        $('document').ready(function () {

            /**
                $('#slider-netflix').owlCarousel({
                    autoPlay: 4000,
                    loop:true,
                    margin:0,
                    singleItem:true,
                    items: 2,
                    smartSpeed:500,
                    animateIn: 'flipInX'
                  });
            **/
         
            $('a.color').click(function(){
                var link = $(this).attr('data-href');
                console.log(link)
                var scrollTop1 = $(link).offset();
                $('body,html').animate({
                  scrollTop: scrollTop1.top,
                  scrollLeft: scrollTop1.left
                },1000);
            });

            var windowW = window.innerWidth;
            if (windowW <= 801) {
                $('#teklifler-slider').owlCarousel({
                    autoPlay: 4000,
                    loop: true,
                    margin: 0,
                    singleItem: true,
                    items: 1,
                    smartSpeed: 500
                });
            }   

            var windowW = window.innerWidth;

            $('#tarife-slider').clone().appendTo(".tarife-holder.netflix").addClass('tarife-slider-mobile');
            $('.tarife-slider-mobile').removeAttr('id');
            $('#tarife-slider').owlCarousel({
                autoPlay: false,
                loop: true,
                margin: 0,
                singleItem: true,
                items: 2,
                dots: false, 
                mouseDrag: false,
                touchDrag: false,
                rewindSpeed: 5000,
                autoWidth: true,
                nav: true,
                smartSpeed: 1000
            });


            $('.tarife-slider-nav .prev').click(function(){
              var activeTable =  $('.tarife-slider-mobile').find('.tarife-box.active').index();
              $('.tarife-slider-mobile').find('.tarife-box').eq(activeTable).removeClass('active');
              if(activeTable==0){
                activeTable = 4;
              }else{
                activeTable = activeTable - 1;
              }
              $('.tarife-slider-mobile').find('.tarife-box').eq(activeTable).addClass('active');          
            });

            $('.tarife-slider-nav .next').click(function(){
              var activeTable =  $('.tarife-slider-mobile').find('.tarife-box.active').index();
              $('.tarife-slider-mobile').find('.tarife-box').eq(activeTable).removeClass('active');
              if(activeTable==4){
                activeTable = 0;
              }else{
                activeTable = activeTable + 1;
              }
              $('.tarife-slider-mobile').find('.tarife-box').eq(activeTable).addClass('active');      
            });  

            $('.link-scroll').click(function(){
                $('body').animate({
                 scrollTop: $('#vodafone-red-form').offset().top
               },1000); 
            });
            


        });
        
    </script>

    <script type="text/javascript" src="https://tags.tiqcdn.com/utag/vodafone/tr-main/prod/utag.sync.js"  ></script>
  

   
</head>
<body>
    <script type="text/javascript">
		var utag_data = {

			page_name  : "bireysel:Red:netflix", // Page name
			  channel  : "bireysel:Red", // s.channel (Section)
			 page_type : "bireysel:Red:urun", // s.channel (Section)
		  login_status : "not-logged-in", // s.channel (Section)
          link_tracking: ""

    }

    utag_data.link_tracking = getCookie('linkTrackingVal');
	</script>
	
	<!-- Loading script asynchronously -->
    <script type="text/javascript">
        (function (a, b, c, d) {
            a = '//tags.tiqcdn.com/utag/vodafone/tr-main/prod/utag.js';
            b = document; c = 'script'; d = b.createElement(c); d.src = a; d.type = 'text/java' + c; d.async = true;
            a = b.getElementsByTagName(c)[0]; a.parentNode.insertBefore(d, a);
        })();
        $(document).ready(function(){
          setTimeout(function(){
            tealiumInit();
          }, 500);
        });
    </script>
    <div id="rotatePage"></div> 
    <div id="how" class="how">
      <a method="link" class="tealium" tracking="button:redli-ol" title="redli-ol" href="redli-ol.php"><p>Nasýl Vodafone Red'li Olabilirim? <span class="icon-chevron-thin-right"></span></p></a>
    </div>
      <div id="icon-menu" class="icon-menu">
        <img src="dist/img/open.png" class="open" alt=""><img src="dist/img/close.png" class="close" alt="">
      </div>
      <div id="mobile-menu" class="mobile-menu">
        <div class="container">
          <div class="row">
            <div class="rhombus">
                 <a method="link" class="tealium" tracking="button:anasayfa" title="anasayfa" href="anasayfa.php"><img src="dist/img/rhombus-logo.png" class="logo" alt=""></a>
            </div>
            <ul>
              <li><a method="link" class="tealium" tracking="button:red-firsatlari" title="red-firsatlari" href="red-firsatlari.php">VODAFONE </br>RED'LÝLERE </br>ÖZEL FIRSATLAR</a></li>
              <li><a method="link" class="tealium" tracking="button:tarifeler" title="tarifeler" href="tarifeler.php">ÝHTÝYACA UYGUN </br> VODAFONE RED </br> TARÝFELERÝ</a></li>
              <li><a method="link" class="tealium" tracking="button:redli-ol" title="redli-ol" href="redli-ol.php">NASIL VODAFONE RED'LÝ </br> OLABÝLÝRÝM?</a></li>
            </ul>
            <div class="social">
              <p>BÝZÝ TAKÝP ET</p>
              <a method="link" class="tealium" tracking="button:menu-facebook" title="menu-facebook" target="_blank" href="https://www.facebook.com/vodafoneTR/ " ><span class="icon-social-fb"></span></a>
              <a method="link" class="tealium" tracking="button:menu-twitter" title="menu-twitter" target="_blank" href="https://twitter.com/vodafonetr " ><span class="icon-social-tw"></span></a>
              <a method="link" class="tealium" tracking="button:menu-youtube" title="menu-youtube" target="_blank" href="https://www.youtube.com/vodafonetr"><span class="icon-play"></span></a>
              <a method="link" class="tealium" tracking="button:menu-forum" title="menu-forum" target="_blank" href="http://forum.vodafone.com.tr/ " ><span class="icon-bubbles2"></span></a>
            </div>
            <div class="red-logo"><a method="link" class="tealium" tracking="button:anasayfa" title="anasayfa" href="anasayfa.php"><img src="dist/img/red-logo2.png" alt=""></a></div>
          </div>
        </div>
      </div>
      <div id="wrap" class="wrap">
        <div class="content-holder">
          <div class="container">
            <div class="row">
              <div class="rhombus">
                  <a method="link" class="tealium" href="anasayfa.php"><img src="dist/img/rhombus-logo.png" class="logo" alt=""></a>
              </div>
              <header id="header" class="header">
                  <div class="container">
                      <div class="row">
                          <ul>            
                              <li><a method="link" class="tealium" href="red-firsatlari.php">Neden Red'li Olmalýyým?</a></li>
                              <li><a method="link" class="tealium" href="tarifeler.php">Red Tarifeleri</a></li>
                              <li><a method="link" class="tealium" href="redli-ol.php">Nasýl Red'li Olabilirim?</a></li>
                          </ul>
                      </div>
                  </div>
              </header>
                    <div id="slider" class="page">
                        <div class="netflix bg"></div>
                        <img src="dist/img/kampanyalar/netflix-m.jpg" alt="" class="bg mobile">
                        <div class="text-holder netflix-banner">
                            <div class="text netflix-text detail-text">
                                 <p class="span-text"><span><strong>Buradasýnýz:</strong> <span><a method="link" class="tealium" href="anasayfa.php">RED</a></span> / <span><a method="link" class="tealium" href="Kampanyalar.php">Fýrsatlar</a></span> / <a method="link" class="tealium" href="netflix.php">Netflix</a></span> </p>
                                <p class="h1">3 aylýk hediye <strong>Netflix</strong> </br> sadece <strong>Vodafone Red'de</strong></p>
                                <p>
                                    Ödüllü orjinal dizi ve filmlerin keyfini çýkarýn.</strong>
                                </p>
                            </div>
                            <div class="watch-now">Narcos izleyin</div>
                            <div class="red-logo">
                                <img src="dist/img/red-logo.png" alt="">
                            </div>
                            <div class="red-logo netflix-logo">
                                <img src="dist/img/netflix-logo2.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="tarife-holder tarifeler">
                      <div class="tarife-slider tarife-tab netflix-tarife">
                        <div class="tarife-box green netflix-camp">
                            <table>
                                <tr class="title">
                                    <td>
                                        <p class="h4" style="color: #428600;">Yeni Red 10</p>
                                        <!--<p style="color: #428600;">Sýnýrlý Sayýda</p>-->
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p class="h5">10 GB</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="kontrat">
                                        <p class="h5"><span class="icon-turkish-lira"></span>69</p>
                                        <div class="tooltip tooltip2">
                                            <span class="icon-info-circle"></span>
                                            <div class="tooltip-first">
                                                <p><strong>12 + 12</strong> ay kalma sözünüze</p>
                                            </div>
                                        </div>
                                        <p class="detail">80 <span class="icon-turkish-lira"></span> Kontratsýz</p>
                                        <span class="plus">+</span>
                                        <p class="h6"><span class="icon-plus"></span><span>Her Yöne</span></br><strong>2.000 DK</strong></br><strong>1.000 SMS </strong></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="detail">
                                        <p class="last"><strong>Vodafone'lular ve Sabit Hatlarla Sýnýrsýz Konuþma</strong></p>
                                        <p class="dot">...</p>
                                        <p>3 Ay Hediye <a method="link" class="tealium" href="javascript:void(0);" style="cursor: text;"><img src="dist/img/netflix-logo2.png" alt=""></a> Üyeliði</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a method="link" class="tealium color" href="javascript:void(0);" data-href="#vodafone-red-form">Vodafone Red'li Ol</a>
                                        <a method="link" class="tealium" target="_blank" href="https://offers.vodafone.com/tr" >Netflix'i Aktive Et</a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                      </div>
                    </div>
                    <div class="tarife-holder netflix">
                        <div class="tarife-slider" id="tarife-slider">
                            <div class="tarife-box red active">
                                <div class="red-logo netflix-logo">
                                    <img src="dist/img/netflix-logo2.png" alt="">
                                </div>
                                <table>
                                    <tr class="title">
                                        <td>
                                            <p class="h4">Yeni Red 5</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class="h5">5 GB</p>
                                            <div class="tooltip tooltip1">
                                                <span class="icon-info-circle"></span>
                                                <div class="tooltip-first">
                                                    <p>Aylýk ek paket <strong>1GB/15TL,</strong> ek paket bittiðinde ise her <strong>500MB/5TL</strong></p>
                                                    <a method="link" href="javascript:void(0);" class="link-scroll hemen-al tealium">Hemen Al</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="kontrat">
                                            <p class="h5"><span class="icon-turkish-lira"></span>49</p>
                                             <div class="tooltip tooltip2">
                                                <span class="icon-info-circle"></span>
                                                <div class="tooltip-first">
                                                    <p><strong>12 + 12</strong> ay kalma sözünüze</p>
                                                </div>
                                            </div>
                                            <span class="plus">+</span>
                                            <p class="detail">60 <span class="icon-turkish-lira"></span> Kontratsýz</p>
                                            <p class="h6"><span class="icon-plus"></span><span>Her Yöne</span></br><strong>1.000 DK</strong></br><strong>1.000 SMS </strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail">
                                            <p>
                                                3 ay boyunca </br>Aylýk <strong>1 GB</strong> <i>+</i> <strong>Netflix</strong>
                                            </p>
                                            <p class="bedel">
                                                <span class="title">Aylýk</span>
                                                <span class="icon-turkish-lira"></span> <strong>9.90</strong>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a method="link" class="tealium color" href="javascript:void(0);" data-href="#vodafone-red-form">Vodafone Red'li Ol</a>
                                            <a method="link" href="https://www.vodafone.com.tr/MyVodafone/myvodafone.home.php" class="link-scroll tealium">Netflix Paketi Satýn Al</a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="tarife-box purple">
                                <div class="red-logo netflix-logo">
                                    <img src="dist/img/netflix-logo2.png" alt="">
                                </div>
                                <table>
                                    <tr class="title">
                                        <td>
                                            <p class="h4">Yeni Red 7</p>
                                            <p>En Çok Satan Tarife</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class="h5">7 GB</p>
                                            <div class="tooltip tooltip1">
                                                <span class="icon-info-circle"></span>
                                                <div class="tooltip-first">
                                                    <p>Aylýk ek paket <strong>1GB/15TL,</strong> ek paket bittiðinde ise her <strong>500MB/5TL</strong></p>
                                                    <a method="link" href="javascript:void(0);" class="link-scroll hemen-al tealium">Hemen Al</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="kontrat">
                                            <p class="h5"><span class="icon-turkish-lira"></span>59</p>
                                             <div class="tooltip tooltip2">
                                                <span class="icon-info-circle"></span>
                                                <div class="tooltip-first">
                                                    <p><strong>12 + 12</strong> ay kalma sözünüze</p>
                                                </div>
                                            </div>
                                            <span class="plus">+</span>
                                            <p class="detail">70 <span class="icon-turkish-lira"></span> Kontratsýz</p>
                                            <p class="h6"><span class="icon-plus"></span><span>Her Yöne</span></br><strong>1.000 DK</strong></br><strong>1.000 SMS </strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail">
                                            <p>
                                                3 ay boyunca </br>Aylýk <strong>1 GB</strong> <i>+</i> <strong>Netflix</strong>
                                            </p>
                                            <p class="bedel">
                                                <span class="title">Aylýk</span>
                                                <span class="icon-turkish-lira"></span> <strong>9.90</strong>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a method="link" class="tealium color" href="javascript:void(0);" data-href="#vodafone-red-form">Vodafone Red'li Ol</a>
                                            <a method="link" href="https://www.vodafone.com.tr/MyVodafone/myvodafone.home.php" class="link-scroll tealium">Netflix Paketi Satýn Al</a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="tarife-box green">
                                <div class="red-logo netflix-logo">
                                    <img src="dist/img/netflix-logo2.png" alt="">
									<p style="color:#333;">3 Ay Hediye </p>
                                </div>
                                <table>
                                    <tr class="title">
                                        <td>
                                            <p class="h4">Yeni Red 10</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class="h5">10 GB</p>
                                            <div class="tooltip tooltip1">
                                                <span class="icon-info-circle" style="right: 6.10vw!important;"></span>
                                                <div class="tooltip-first">
                                                    <p>Aylýk ek paket <strong>1GB/15TL,</strong> ek paket bittiðinde ise her <strong>500MB/5TL</strong></p>
                                                    <a method="link" href="javascript:void(0);" class="link-scroll hemen-al tealium">Hemen Al</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="kontrat">
                                            <p class="h5"><span class="icon-turkish-lira"></span>69</p>
                                             <div class="tooltip tooltip2">
                                                <span class="icon-info-circle"></span>
                                                <div class="tooltip-first">
                                                    <p><strong>12 + 12</strong> ay kalma sözünüze</p>
                                                </div>
                                            </div>
                                            <span class="plus">+</span>
                                            <p class="detail">80 <span class="icon-turkish-lira"></span> Kontratsýz</p>
                                            <p class="h6"><span class="icon-plus"></span><span>Her Yöne</span></br><strong>2.000 DK</strong></br><strong>1.000 SMS </strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail">
                                            <p>
                                                3 ay boyunca </br>Aylýk <strong>1 GB</strong> <i>+</i> <strong>Netflix</strong>
                                            </p>
                                            <p class="bedel">
                                                <span class="title">Aylýk</span>
                                                <span class="icon-turkish-lira"></span> <strong>9.90</strong>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a method="link" class="tealium color" href="javascript:void(0);" data-href="#vodafone-red-form">Vodafone Red'li Ol</a>
                                            <a method="link" href="https://www.vodafone.com.tr/MyVodafone/myvodafone.home.php" class="link-scroll tealium">Netflix Paketi Satýn Al</a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="tarife-box yellow">
                                <div class="red-logo netflix-logo">
                                    <img src="dist/img/netflix-logo2.png" alt="">
                                </div>
                                <table>
                                    <tr class="title">
                                        <td>
                                            <p class="h4">Yeni Red 15</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class="h5">15 GB</p>
                                            <div class="tooltip tooltip1">
                                                <span class="icon-info-circle"></span>
                                                <div class="tooltip-first">
                                                    <p>Aylýk ek paket <strong>1GB/15TL,</strong> ek paket bittiðinde ise her <strong>500MB/5TL</strong></p>
                                                    <a method="link" href="javascript:void(0);" class="link-scroll hemen-al tealium">Hemen Al</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="kontrat">
                                            <p class="h5"><span class="icon-turkish-lira"></span>89</p>
                                             <div class="tooltip tooltip2">
                                                <span class="icon-info-circle"></span>
                                                <div class="tooltip-first">
                                                    <p><strong>12 + 12</strong> ay kalma sözünüze</p>
                                                </div>
                                            </div>
                                            <span class="plus">+</span>
                                            <p class="detail">100 <span class="icon-turkish-lira"></span> Kontratsýz</p>
                                            <p class="h6"><span class="icon-plus"></span><span>Her Yöne</span></br><strong>2.000 DK</strong></br><strong>1.000 SMS </strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail">
                                            <p>
                                                3 ay boyunca </br>Aylýk <strong>1 GB</strong> <i>+</i> <strong>Netflix</strong>
                                            </p>
                                            <p class="bedel">
                                                <span class="title">Aylýk</span>
                                                <span class="icon-turkish-lira"></span> <strong>9.90</strong>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a method="link" class="tealium color" href="javascript:void(0);" data-href="#vodafone-red-form">Vodafone Red'li Ol</a>
                                            <a method="link" href="https://www.vodafone.com.tr/MyVodafone/myvodafone.home.php" class="link-scroll tealium">Netflix Paketi Satýn Al</a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="tarife-box darkpurple">
                                <div class="red-logo netflix-logo">
                                    <img src="dist/img/netflix-logo2.png" alt="">
									<p style="color:#333;">3 Ay Hediye </p>
                                </div>
                                <table>
                                    <tr class="title">
                                        <td>
                                            <p class="h4">Yeni Red 20</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class="h5">20 GB</p>
                                            <div class="tooltip tooltip1">
                                                <span class="icon-info-circle"></span>
                                                <div class="tooltip-first">
                                                    <p>Aylýk ek paket <strong>1GB/15TL,</strong> ek paket bittiðinde ise her <strong>500MB/5TL</strong></p>
                                                    <a method="link" href="javascript:void(0);" class="link-scroll hemen-al tealium">Hemen Al</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="kontrat">
                                            <p class="h5"><span class="icon-turkish-lira"></span>109</p>
                                             <div class="tooltip tooltip2">
                                                <span class="icon-info-circle"></span>
                                                <div class="tooltip-first">
                                                    <p><strong>12 + 12</strong> ay kalma sözünüze</p>
                                                </div>
                                            </div>
                                            <span class="plus">+</span>
                                            <p class="detail">120 <span class="icon-turkish-lira"></span> Kontratsýz</p>
                                            <p class="h6"><span class="icon-plus"></span><span>Her Yöne</span></br><strong>2.000 DK</strong></br><strong>1.000 SMS </strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail netflix-detail">
                                            <p>3 Ay Hediye <a method="link" class="tealium" href="javascript:void(0);" style="cursor:text;"><img src="dist/img/netflix-logo2.png" alt=""></a> Üyeliði</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a method="link" class="tealium color" href="javascript:void(0);" data-href="#vodafone-red-form">Vodafone Red'li Ol</a>
                                            <a method="link" class="tealium" href="https://offers.vodafone.com/tr" target="_blank">Netflix'i Aktive Et</a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="tarife-slider-nav">
                            <div class="slick-prev prev"></div>
                            <div class="slick-next next"></div>
                        </div>
                        <div class="button-holder">
                          <a method="view" data-id="esaslar" class="pop-up-tab tealium" href="javascript:void(0);">Esaslar <span class="plus">+</span></a>
                          <a method="link" target="_blank" class="pop-up-tab tealium" href="dist/Netflix-nasil-aktive-ederim.pdf">Nasýl Aktive Ederim? <span class="plus">+</span></a>
						  <a method="link" target="_blank" class="pop-up-tab tealium" href="dist/Netflix-sifre-degistirme.pdf">Netflix Þifremi Nasýl Deðiþtiririm? <span class="plus">+</span></a>
						  <a method="link" class="pop-up-tab tealium" href="dist/netflix-sss.pdf" target="_blank" title="Netflix Sýkça Sorulan Sorular">Netflix Sýkça Sorulan Sorular<span class="plus">+</span></a>
                        </div>
                    </div>
                </div> <!--row-->
            </div> <!--container-->
        </div> <!--content-holder-->
        <div id="netflix-part" class="netflix-part">
            <div class="container">
                <div class="row">
                    <div class="title-side">
                        <p class="h3"><strong>En Ýyiler</strong></p>
                    </div>
                    <div id="slider-netflix" class="slider-netflix">
                        <a method="link" class="tealium sld-img" target="_blank" href="https://www.youtube.com/watch?v=Lv3W0_gy_Jg">
                            <div class="item">
                                <img src="dist/img/netflix1.jpg" alt="">
                                <img src="dist/img/netflix1m.jpg" class="mobile" alt="">
                                <div class="text-holder">
                                    <p class="h1">Narcos <span></span></p>
                                    <p class="h3"><a method="link" class="tealium fragman" target="_blank" href="https://www.youtube.com/watch?v=Lv3W0_gy_Jg">Fragmaný Ýzle</a></p>
                                </div>
                            </div>
                        </a>
                        <a method="link" class="tealium sld-img" target="_blank" href="https://www.youtube.com/watch?v=WZ0NsJNMREU">
                            <div class="item">
                                <img src="dist/img/netflix2.jpg" alt="">
                                <img src="dist/img/netflix2m.jpg" class="mobile" alt="">
                                <div class="text-holder">
                                    <p class="h1">Stranger Things <span></span></p>
                                    <p class="h3"><a method="link" class="tealium fragman" target="_blank" href="https://www.youtube.com/watch?v=WZ0NsJNMREU">Fragmaný Ýzle</a></p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <p class="watch white">Þimdi izle</p>
                    <div class="red-logo netflix-logo">
                        <img src="dist/img/netflix-logo2.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div id="netflix-part" class="netflix-part banner-side">
            <div class="container">
                <div class="row">
                    <div class="title-side">
                        <p class="h3"><strong>Her Ekranda <span> Sizinle</span></strong></p>
                    </div>
                    <p><strong>Vodafone Red</strong>'le her an, her yerde sevdiðiniz dizi ve filmleri <strong>tek bir uygulama üzerinden</strong> hiç uðraþmadan izleyin.</p>
                    <p class="watch">Þimdi izle</p>
                </div>
            </div>
        </div>
        <div id="vodafone-red-form" class="vodafone-red-form">
            <div class="container">
                <div class="row">
                    <div class="title-side">
                        <p class="h3"><strong><span>Vodafone Red'li </span> Olmak Ýstiyorum</strong></p>
                    </div>
                    <p class="text">Formu doldurun, <strong>özel ekibimiz size kadar gelsin</strong>, numaranýz deðiþmeden <strong>Vodafone Red</strong>'li olun.</p>
                    <iframe src="https://lead.vodafone.com.tr/f/digital-netflix" frameborder="0"></iframe>
                </div>
            </div>
        </div>
        <footer id="footer" class="footer">
            <div class="container">
              <div class="row">
                  <ul>
                      <li class="title"><p>Hakkýmýzda</p><span class="plus active">+</span><span class="minus">-</span></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/VodafoneHakkinda/insan-kaynaklari.php">Ýnsan Kaynaklarý</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://medyamerkezi.vodafone.com.tr/basin-bultenleri">Basýn Odasý</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/VodafoneHakkinda/zararli-yazilimlar.php">Duyurular</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/VodafoneHakkinda/reklamlar.php ">Reklam Filmleri</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Vodafone-Turkiye-Ile-Besiktas-Arasinda-Dev-Sponsorluk-Imzasi.php ">Sponsorluklar</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.turkiyevodafonevakfi.org.tr/ ">Vodafone Türkiye Vakfý</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com/content/index.html ">Vodafone Group</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/VodafoneHakkinda/gizlilik_politikasi.php?default_id=gizlilikpolitikasi">Hukuki Þartlar ve </br>Gizlilik Politikasý</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/bilgitoplumuhizmetleri/vodafone-telekomunikasyon-anonim-sirketi.html ">Bilgi Toplumu </br>Hizmetleri</a></li>
                  </ul>
                  <ul>
                      <li class="title"><p>Destek</p><span class="plus active">+</span><span class="minus">-</span></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/yardim/tr/ ">Yardým</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/yardim/tr/kategori.php/bireysel/vodafone-red/53 ">Sýkça Sorulan Sorular</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/YardimDestek/bize_ulasin.php ">Bize Ulaþýn</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://forum.vodafone.com.tr/ ">Vodafone Forum</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://telefondestek.vodafone.com.tr/web/ ">Cihaz Keþfi</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="https://www.vodafone.com.tr/MyVodafone/myvodafone.home.php ">OnlineSelf Servis</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Red/red-ozel-satis-ekibi.php ">Vodafone Red Özel</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Red/red-ozel-satis-ekibi.php ">Satýþ Ekibi </a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/YardimDestek/bireysel-abonelik.php ">Vodafone Aboneliði</a></li>
                  </ul>
                  <ul>
                      <li class="title"><p>Online Satýþ</p><span class="plus active">+</span><span class="minus">-</span></li>
                      <li><a method="link" class="tealium" href="http://cepmerkezi.vodafone.com.tr/cep-telefonlari/iphone-7-32gb-siyah ">iPhone 7</a></li>
                      <li><a method="link" class="tealium" href="http://cepmerkezi.vodafone.com.tr/cep-telefonlari/iphone-7-plus-32gb-siyah ">iPhone 7 Plus</a></li>
                      <li><a method="link" class="tealium" href="http://cepmerkezi.vodafone.com.tr/cep-telefonlari/iphone-5s?icmp=consumer ">iPhone 5s</a></li>
                      <li><a method="link" class="tealium" href="http://cepmerkezi.vodafone.com.tr/cep-telefonlari/vodafone-smart-style-7-8gb-beyaz?icmp=consumer">Vodafone Smart style 7</a></li>
      
                      <li><a method="link" class="tealium" href="http://cepmerkezi.vodafone.com.tr/cep-telefonlari/samsung-galaxy-s7-edge-32gb-siyah?icmp=consumer">    Samsung Galaxy S7 Edge</a></li>
                      <li><a method="link" class="tealium" href="http://cepmerkezi.vodafone.com.tr/cep-telefonlari/samsung-galaxy-note-5?icmp=consumer">Samsung Galaxy Note 5</a></li>
                       <li><a method="link" class="tealium" href="http://cepmerkezi.vodafone.com.tr/cep-telefonlari/huawei-gt3-16gb-gri?icmp=consumer">Huawei GT 3</a></li>
                      <li><a method="link" class="tealium" href="http://cepmerkezi.vodafone.com.tr/cep-telefonlari/venus-v3-5010-8gb-beyaz?icmp=consumer">Vestel Venus V3 5010</a></li>
                       <li><a method="link" class="tealium" href="http://www.vodafone.com.tr/size-en-uygun-akilli-telefonlar.php">Size en uygun cihaz</a></li>
                  </ul>
                  <ul>
                      <li class="title"><p>Tarife, Paketler</br> ve Cihazlar</p><span class="plus active">+</span><span class="minus">-</span></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Tarife-Karsilastirma/index.php#/terms">Tarifeleri Karþýlaþtýr</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Tarifeler/Faturali-Tarifeler.php">Faturalý Tarifeler</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Tarifeler/Faturasiz-Tarifeler.php">Faturasýz Tarifeler</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://telefondestek.vodafone.com.tr/web/">Tüm Cihazlar</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://telefondestek.vodafone.com.tr/web/">Cihazlarý Dene</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Tarifeler/Altin-Tarifeler.php#paketler">Faturasýz Paketler</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Tarifeler/faturalipaketler.php">Faturalý Paketler</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Internet/mobil-internet-paketleri.php">Süper Ýnternet Paketleri</a></li>

                  </ul>
                  <ul>
                      <li class="title"><p>Servisler</p><span class="plus active">+</span><span class="minus">-</span></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Internet/vodafone-4-5g.php">Vodafone 4.5G</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="https://www.vodafone.com.tr/Internet/arayana-dinlet.php">Arayana Dinlet</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Servisler/Vodafone-TV.php">Vodafone TV</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Internet/Mobil-Yardim.php">Mobil</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Kampanyalar/Dusler-Kulubu.php">Yardým Engelleri Aþan Servisler</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/cepbagis.php">Cep Baðýþ</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Servisler/CepNakit.php">Cep Nakit</a></li>
                  </ul>
                  <ul>
                      <li class="title"><p>Vodafone Siteleri</p><span class="plus active">+</span><span class="minus">-</span></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafonefreezone.com/">Vodafone Freezone</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Tarifeler/AkilKupuKamuTarifeler.php">Kamulara Özel Akýl Küpü</a></li>
                      <li><a method="link" class="tealium" href="tarifeler.php">Tarifeler</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafonecepsaglik.com.tr/">Vodafone Cep Saðlýk</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/en/roam-with-vodafone.php">Visting Turkey</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.ciftcikulubu.com/">Vodafone Çiftçi Kulübü</a></li>
                      <li><a method="link" class="tealium" href="anasayfa.php">Vodafone Red</a></li>
                  </ul>
              </div> 
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="row">
                        <div class="social">
                            <p>Bizi Takip Edin</p>
                            <a method="link" class="tealium" href="https://www.facebook.com/vodafoneTR/ " target="_blank"><span class="icon-social-fb"></span></a>
                            <a method="link" class="tealium" href="https://twitter.com/vodafonetr " target="_blank"><span class="icon-social-tw"></span></a>
                            <a method="link" class="tealium" href="https://www.youtube.com/vodafonetr" target="_blank"><span class="icon-play"></span></a>
                            <a method="link" class="tealium" href="http://forum.vodafone.com.tr/ " target="_blank"><span class="icon-bubbles2"></span></a>
                        </div>
                        <span class="mobile">@ 2017 Vodafone Türkiye</span>
                        <div class="back-top">
                            <div id="back-top" class="icon"><span></span></div>
                                <p>Baþa Dön</p>
                                <span>@ 2017 Vodafone Türkiye</span>
                            </div>
                            <div class="logo">
                                <img src="dist/img/red-logo2.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-mobile">
                    <div class="container">
                    <div class="row">
                        <p id="back-top2"><strong><span class="icon-chevron-thin-right"></span></strong> Baþa Dön</p>
                    </div>
                </div>
            </div>
        </footer>
        <div id="pop-up-gizlilik" class="pop-up gizlilik-politikasi" >
            <div class="container">
                <span class="close"></span>
                <div class="row">
                    
                    <div class="title-side">
                        <p class="h3">
                            1-GENEL AÇIKLAMALAR 
                        </p>
                    </div>
                    <p>Bu Hüküm ve Koþullar, (ister web'de, isterse de WAP ile ya da PDA'de eriþim saðlayacaðýnýz) bu internet sitesinde ("Site") sizlere sunulacak "Ýçerik" ve "Hizmet"lere (bundan sonra tek baþýna "Hizmet" ve birlikte "Hizmet"ler" olarak anýlacaktýr) eriþiminize ve bu "Ýçerik" ve "Hizmet"leri kullanýmýnýza uygulanacak genel hüküm ve koþullardýr. Bu Site ve "Hizmet"ler Vodafone Telekomünikasyon A.Þ. (Vodafone) (bundan sonra "biz," "bizim", "bize" ya da Vodafone olarak anýlacaktýr) tarafýndan ya da adýna iþletilmektedir. "Siz" ve "sizin" sözcükleri, size yani "Hizmet"in kullanýcýsýna, atýfta bulunmaktadýr. </p>
                    <p>Lütfen bu hüküm ve koþullarý dikkatlice okuyunuz. </p>
                    
                    <div class="title-side">
                        <p class="h3">
                            2-BÝZÝMLE OLAN SÖZLEÞMENÝZ
                        </p>
                    </div>
                    <p>Bizimle olan sözleþmeniz aþaðýdaki iþlemlerden hangisi daha önce gerçekleþirse, bu tarihte baþlayacaktýr:</p>  
                    <p>Kayýt sürecimizi tamamlamanýz ve bu Hüküm ve Koþullarý okuyup Kabul ettiðinizi teyit etmeniz; ya da Kayýt gerektirmeyen "Hizmet"lerimizden birini görüntülemeniz, bunlara eriþim saðlamanýz ya da kullanmanýz. </p>
                    <p>Bu Hüküm ve Koþullarý print ederek bir kopyasýný kendi kayýtlarýnýz için saklamanýzý tavsiye ederiz. Bu Hüküm ve Koþullar tüm ""Hizmet"ler" için geçerlidir. </p>
                    <p>Bu Hüküm ve Koþullara ilaveten, bu "Hizmet"e kayýt olurken kabul etmeniz gerekecek tek tek "Hizmet"lere uygulanacak ek hüküm ve koþullar da bulunabilir. </p>
                    <div class="title-side">
                        <p class="h3">
                            3-GENEL OLARAK
                        </p>
                    </div>
                    <p>Bu Hüküm ve Koþullardan kaynaklanan haklarýmýzý kaybetmeksizin ileride kullanmak için erteleyebiliriz. </br>
                    Size ihbarda bulunmadan, yükümlülüklerimizin herhangi bir kýsmýný alt taþeronlara ifa ettirebileceðimizi ya da bu Hüküm ve Koþullarý veya haklarýmýzýn ya da yükümlülüklerimizin bir kýsmýný temlik edebileceðimizi kabul ediyorsunuz. </br>
                    Bu Hüküm ve Koþullardan kaynaklanan haklarýnýzý ya da yükümlülüklerinizi temlik etmemeyi, satmamayý ya da baþka herhangi bir þekilde devretmemeyi taahhüt ediyorsunuz. </br>
                    Kontrolumüz dýþýnda gerçekleþen sebeplerden dolayý bu Hüküm ve Koþullarýn ihlali halinde size karþý sorumlu olmayacaðýz. </br>
                    Bu Hükümler ya da "Hizmet"in kullanýmý sonucunda, sizin ve bizim aramýzda herhangi bir ortak giriþimin, ortaklýðýn, istihdam ya da vekillik iliþkisinin kurulmadýðýný kabul ediyorsunuz. </br>
                    Bu Hüküm ve Koþullar (ve uygulanabilirse, bir "Hizmet"e kayýt olurken kayýt sürecinin bir parçasý olarak Kabul ettiðiniz ilgili ek hükümler ve Saðlayýcý'nýn hüküm ve koþullarý) "Hizmet"i kullanýmýnýz konusunda siz ve biz arasýndaki anlaþmanýn tamamýný teþkil eder ve "Hizmet" ile ilgili olarak yapýlan tüm önceki sözleþmelerin yerine geçer. </br>
                    Bu Hüküm ve Koþullardan herhangi bir kýsmýnýn hukuken geçersiz ya da hükümsüz hale gelmesi halinde, geçersiz ya da hükümsüz maddenin yerine orijinal amaca en yakýn geçerli bir madde konulacaktýr ve Hüküm ve Koþullarýn geri kalan kýsmý aynen yürürlükte kalmaya devam edecektir. </br>
                    Vodafone, yürürlükteki mevzuatý, yönetmelikleri, hukuki süreci ya da devlet kurumlarýnýn taleplerini karþýlamak için Vodafone'nun gerekli göreceði her türlü bilgiyi ifþa etme hakkýný her zaman saklý tutar. </br>
                    Vodafone þebekesinde kayýtlý cep telefonunuz var ise, "Hizmet"i kullanýrken Vodafone airtime Hizmetinin genel hüküm ve koþullarý (ya da Hizmet saðlayýcýnýzýn hüküm ve koþullarý) ve (varsa) Vodafone ön-ödemeli Hizmetinin hüküm ve koþullarý uygulanacaktýr. </p>
                    
                    <div class="title-side">
                        <p class="h3">
                            4-YARDIM
                        </p>
                    </div>
                    <p>Bu "Hizmet" ile ilgili herhangi bir sorunuz ya da sorununuz olursa, Vodafone müþterisi iseniz Müþteri "Hizmet"leri hattý olan 0 (542) 542 00 00'ý ya da diðer telefonlardan 0212 448 70 00 numarasýný (ücretli) arayýnýz ya da vodafone.com.tr adresinden "Yardým ve Destek" ve sonra "Bize Ulaþýn" kýsýmlarýna týklamak ve ilgili formu doldurmak suretiyle bize mail atabilirsiniz. </p>  
                    <div class="title-side">
                        <p class="h3">
                            5-KULLANICI ADI VE ÞÝFRE
                        </p>
                    </div>
                    <p>"Hizmet"e kayýt olurken doldurulmasý zorunlu tutulan alanlarda doðru, güncel ve tam bilgi vermeyi Kabul ediyorsunuz. Kayýdý müteakip, "Hizmet"e ve kayýt gerektiren sayfalara eriþim saðlayabilmeniz için tarafýnýza bir þifre verilecektir. Þifrenizle "Hizmet"e eriþim saðlamanýzýn sonucunda gerçekleþen tüm aksiyonlardan siz sorumlusunuz. Þifrenizin ve "Hizmet"e eriþimde bulunurken kullandýðýnýz cihazýn güvenliðini temin etmek sizin sorumluluðunuzdur. Bu Hüküm ve Koþullarýn þifrenizi ifþa ettiðiniz herhangi biri tarafýndan ihlali, sizin tarafýnýzdan yapýlan bir ihlal olarak algýlanacaktýr. </br>
                    Þifrenizin yetkisiz bir kullanýcý tarafýndan öðrenilmesi durumunda, bizi bu hata ya da yanlýþlýktan derhal haberdar edersiniz. Münhasýr ve mutlak takdir yetkimiz ile, þifrenizi ve kullanýcý adýnýzý dilediðimiz zaman deðiþtirme hakkýný saklý tutarýz.</br>
                    Belli "Hizmet"ler için, bir kullanýcý adý ve þifre seçmeniz gerekebilir. Her türlü "Hizmet" için: </br></br>

                    Seçtiðiniz kullanýcý adý, müstehcen, tehdit edici, ýrkçý, bölücü, küçük düþürücü, milli güvenliðe aykýrý, devletin ülkesi ve milletiyle bölünmez bütünlüðüne aykýrý ve üçüncü kiþileri tahkir edici nitelikte olamaz ya da herhangi bir üçüncü kiþinin fikri mülkiyet ya da müseccel haklarýný ihlal edemez; ve </br></br>

                    Kendi münhasýr ve mutlak takdirimizle tarafýnýzca seçilen kullanýcý adýnýn uygunsuz olduðunu düþünmemiz halinde, tarafýnýza bildirimde bulunarak ya da bulunmadan bu kullanýcý ismini kullanmanýzý reddetme ve engelleme hakkýmýz saklýdýr. </br>
                    Zaman zaman þifrenizi ve kullanýcý adýnýzý deðiþtirebiliriz ve bize saðladýðýnýz irtibat bilgilerini kullanarak her türlü deðiþikliði size bildiririz.  </p>  
                    
                    <div class="title-side">
                        <p class="h3">
                            6-SERVÝSLERÝ KULLANIMINIZ
                        </p>
                    </div>
                    <p>Hizmetlerde ("Ýçerik") yer alan ya da Hizmetler aracýlýðýyla eriþilebilen (yazýlým, veri, uygulama, bilgi, metin, fotoðraf, müzik, ses, görüntü, grafik, logo, sembol, çizim ve diðer materyal ya da hareketli imgeler dahil, ancak bunlarla sýnýrlý olmamak üzere) her türlü materyal ya da "Ýçerik" ile ilgili tüm telif haklarý, ticari markalar, patentler ve diðer fikri mülkiyet haklarý ya bizim mülkiyetimizdedir ya da bunlarýn lisansý/kullaným hakký Hizmetlerin bir parçasý olarak hak sahibi ya da sahipleri tarafýndan bize devredilmiþ/verilmiþtir. "Ýçerik" ile baþka herhangi bir þey yapmak istemeniz halinde, öncelikle bu materyale ait haklarýn sahibinin yazýlý izninizi almanýz gerekir. Tüm haklar açýkça saklýdýr. </br></br>

                    Sadece özel ve ticari olmayan bir amaçla ve bu Hüküm ve Koþullara uymanýza tabi olarak, size "Hizmet"i ve Ýçeriði bilgisayarýnýz, cep telefon cihazýnýz ya da diðer eriþim araçlarýyla görüntülemeniz ve kullanmanýz amacýyla, münhasýr olmayan ve devredilemeyen bir hak veriyoruz. Kendi bilgisayarýnýz, cep telefon cihazýnýz ya da diðer eriþim cihazlarýnýzda kiþisel kullaným için ve "Hizmet"in ya da Ýçeriðin usulünce kullanýmý için gerektiði ölçüde ve kopyalamaya telif hakký sahibinin vermesi koþulu ile, deðiþtirmeden Ýçeriði kopyalayabilirsiniz.</br></br>

                    Herhangi bir Ýçeriði (tümüyle ya da kýsmen):</br>
                    Açýkça izin verilmedikçe üçüncü þahýslara devredemez ya da üçüncü þahýslarýn eriþimine izin veremezsiniz; ya da 
                    Deðiþtiremez, iþleyemez, yeniden formatlayamaz ya da baþka herhangi bir þekilde adapte edemezsiniz.</br>
                    "Site" ve sitede sunulan Hizmet, Vodafone marka bütünlüðü ile iltibas yaratacak þekilde ve/veya birebir kullanýlarak ya da adapte edilerek ve burada sayýlan kýsýtlamalarla sýnýrlý olmaksýzýn kullanýlamaz. Hizmetleri bu þekilde kullanmak ya da baþkaca bir Hizmet oluþturmak yasaktýr. 
                    </p>  
                    <div class="title-side">
                        <p class="h3">
                            8-ONLINE SELF SERVÝS
                        </p>
                    </div>
                    <p>Vodafone bireysel abonesiyseniz, Siteden "Online Self Servis" Hizmetine kayýt olabilirsiniz. </br>
                    Vodafone kurumsal abonesiyseniz, Vodafone abonelik iþlemlerinizi kurumsal hesabýmý kullanarak gerçekleþtirebilirsiniz.</br>
                    Kaydolmuþ olduðunuz Hizmetleri görüntüleyebilecek, yeni Hizmetlere kayýt olabilecek ya da kaydýnýzý iptal edebilecek ve kiþisel bilgilerinizi güncelleyebileceksiniz.</br>
                    Kurumsal Hesap aracýlýðýyla, kurumsal müþterilerin çalýþanlarý tarafýndan kurum adýna yapýlacak iþlemlere ait yetkiler, kullanýcý statüsü ve ürün kullanýmýna paralel deðiþiklik gösterir.</p>
                    
                    <div class="title-side">
                        <p class="h3">
                           8-BÝZE SORUN 
                        </p>
                    </div>
                    <p>Vodafone'un Bize Sorun uygulamasý ile sorularýnýzý web sitesi üzerinden iletebilir ve anlýk olarak tarife ve kampanyalarýmýza iliþkin bilgi alabilirsiniz.Tarife ve kampanyalarýmýza iliþkin sorularýnýz anlýk yanýtlanacak olup, verilecek bilgiler web sitesi içeriðinde de yer almaktadýr. Hattýnýz ile ilgili yardým talepleriniz veya sorularýnýz için online self servisi kullanabilir veya Müþteri Hizmetleri birimimizle baðlantý kurabilirsiniz. </br></br>

                    Web sitesi üzerinden yapýlacak görüþmelerin müþteri memnuniyeti saðlamak amacýyla kaydedileceðini, Bize Sorun uygulamasýný kullanýrken uygunsuz, veya suç unsuru içeren ifadeler kullanmamanýzý önemle hatýrlatýrýz </p> 


                    <div class="title-side">
                        <p class="h3">
                           9-SERVÝS VE/VEYA ÝÇERÝKLE ÝLGÝLÝ YASAKLI KULLANIMLAR
                        </p>
                    </div>
                    <p>Siz ve Hizmete eriþim saðlamak suretiyle, Hizmet ve Ýçeriði kullanma hakký verdiðiniz kiþiler, aþaðýdaki iþlemleri yerine getiremezler: </br>
                    Ýçeriði ve/veya Hizmeti ya da bunlarýn herhangi bir kýsmýný bu Sözleþme'de açýklanandan farklý bir þekilde kopyalama, ifþa etme, deðiþtirme, iþleme, yeniden formatlama, görüntüleme, daðýtma, lisans verme, yayma, satma, yerine getirme, transfer etme, bunlara hiperlink saðlama, tersine mühendislik iþlemi yapma ya da parçalara ayýrma ya da Ýçeriði ve/veya Hizmetleri ya da herhangi bir parçasýný bu Sözleþme'de belirtilenden farklý bir þekilde kullandýrma</br>
                    "Ýçerik" ve/veya Hizmetten hiperlinkler (deep-linkler dahil) saðlama ya da yaratma; 
                    Vodafone ana sayfasýný kopyalama ya da Hizmetinin ya da Ýçeriðin herhangi bir kýsmýnýn çevresinde ayrý bir çerçeve oluþturma ("çerçeveleme" olarak biliniyor); </br>
                    Hizmet ya da Ýçeriði herhangi bir ticari amaçla kullanma;</br>
                    Hizmeti ve Hizmet aracýlýðýyla ulaþýlan herhangi bir bilgiyi yasadýþý amaçlarla kullanma;</br>
                    Müstehcen, pornografik, tehdit edici, ýrkçý, bölücü, küçük düþürücü, milli güvenliðe aykýrý, devletin ülkesi ve milletiyle bölünmez bütünlüðüne aykýrý, üçüncü kiþileri tahkir edici, teþhirci, uygunsuz, güven sarsýcý ya da baþka herhangi bir surette yasa dýþý olan herhangi bir mesaj, bilgi ya da resmi yayýnlamak, yüklemek ya da iletmek için Hizmeti kullanma; </br>
                    Gizlilik haklarý dahil, baþkalarýnýn haklarýný taciz etme, tehdit etme, bir baþkasýný taklit etme ya da baþka bir þekilde ihlal etme; </br>
                    Diðer kullanýcýlarýn Hizmeti ya da baþka herhangi bir websitesini kullanmasýný ve bunlardan faydalanmasýný engellemek amacýyla baþka bilgisayarlarý hack'leme, aþýrý trafik taleplerinde bulunma, probe ya da port scan yapmak, virüs, mail bomb, chain letters ya da piramit þemalarý bulaþtýrma; </br>
                    Mevzuata aykýrý þekilde diðer kiþilerin kiþisel bilgilerini toplama ve iþleme; </br>
                    Ürün ya da Hizmet satýþý için reklam yapma ya da teklifte bulunma; </br>
                    Telif hakký dahil baþkalarýnýn fikri mülkiyet haklarýný ihlal etme; </br>
                    Hizmetin kullanýcýlarý hakkýnda bilgi toplamak ya da yetkisiz ya da izinsiz olarak junk ya da bulk ("spam" olarak da bilinen) e-mail göndermek ya da baþka bir þekilde daðýtmak amacýyla Hizmeti kullanma;</br>
                    Kendi münhasýr ve mutlak takdirimize göre uygunsuz ya da kabul edilemez olduðunu ya da marka ve itibarýmýza zarar verme olasýlýðý bulunduðunu düþündüðümüz bir þekilde, Hizmeti ya da Ýçeriði kullanma.</br> 
                    Baþka birinin Hizmete ya da Ýçeriðe eriþiminizi kullanmasýndan kaynaklanmýþ olsa bile, Hizmetin ya da Ýçeriðin kötüye kullanýmýndan siz sorumlu olacaksýnýz. Sizin ya da üçüncü kiþilerin Hizmete iliþkin olarak koyduðu ya da koymaya çalýþtýðý herhangi bir materyali silme, çýkarma, deðiþtirme ya da reddetme, Hizmete eriþiminizi bloke etme ya da durdurma ve bu Hüküm ve Koþullarýn herhangi bir þekilde ihlalini engellemek ya da gidermek için takdiri bize ait olmak üzere gerekli gördüðümüz diðer her türlü aksiyonu alma hakkýmýz saklýdýr. "Ýçerik"te ya da Hizmette bu Hüküm ve Koþullarý ihlal edeceðini makul surette düþündüðünüz herhangi bir "Ýçerik" ya da üçüncü kiþi materyalini bize bildirmek isterseniz, lütfen bildiriniz.</br>
                    (Gizlilik Politikamýza uygun olarak) herhangi bir soruþturma ya da þebeke güvenliði ihlali konusunda yasalar kapsamýnda ve diðer yetkili ilgili resmi kurumlar ile iþbirliði yapýlacak ve yasalar kapsamýnda kiþisel bilgileriniz resmi kurumlar ve/veya adli makamlarla paylaþýlabilecektir. </p>         



                    <div class="title-side">
                        <p class="h3">
                           10-KÝÞÝSEL BÝLGÝLERÝNÝZ
                        </p>
                    </div>
                    <p>Vodafone için kiþisel bilgilerin gizliliði konusu çok önemlidir. Bireysel/kurumsal kiþisel bilgilerinizin güvenliði, genel hükümler ve Telekomünikasyon Mevzuatý kapsamýnda Vodafone tarafýndan koruma altýna alýnmýþtýr. Kiþisel bilgiler yasalara uygun olarak verilmiþ Mahkeme/Savcýlýk kararlarý ve kiþinin açýk yazýlý onayý dýþýnda hiçbir þekilde üçüncü kiþiler tarafýndan kullanýlamayacak, kopyalanmayacak, iþlenemeyecek, daðýtýlamayacak ve yayýnlanmayacaktýr.</br>
                    Kiþisel bilgi kullanýmýmýz, bu Sözleþme'nin bir parçasýný oluþturan Gizlilik Politikasýna tabi olacaktýr. LÜTFEN GÝZLÝLÝK POLÝTÝKASINI DÝKKATLÝCE OKUYUNUZ. Bu politika, kiþisel bilgileri nasýl kullanacaðýmýz ve belli koþullarda kimlere vereceðimiz konusu da dahil, kiþisel bilgileriniz ile ilgili olarak sizlerin haklarýný ve bizlerin yükümlülüklerini ele almaktadýr. </p>

                    <div class="title-side">
                        <p class="h3">
                           11-ÝÇERÝK YÜKLEME ve SORUMLULUK 
                        </p>
                    </div>
                    <p>Herhangi bir Hizmetimiz cep telefonunuza, kiþisel bilgisayarýnýza, kiþisel dijital asistanýnýza ya da diðer eriþim araçlarýna, "Ýçerik" yüklemenize imkan saðlýyorsa, aþaðýdaki koþullara uymanýz gerekir.
                    Bu Ýçeriði eriþim cihazýnýza kaydedebilirsiniz ancak (açýkça izin verilmedikçe) bu Ýçeriði baþka bir yere kaydetmeniz, Ýçeriði deðiþtirmeniz, kopyalamanýz, daðýtmanýz, iþlemeniz bir ya da daha fazla üçüncü kiþiye iletmeniz ya da üçüncü kiþilerin Ýçeriðe eriþimine izin vermeniz tümüyle yasaktýr. </br>
                    Seçmiþ olduðunuz Ýçeriði alabilmeniz için eriþim cihazýnýzdaki kiþisel ayarlarý uygun bir þekilde ayarlamanýz gerekmektedir. Hizmetlere kayýt olmak suretiyle, eriþim cihazýnýzýn ilgili Ýçeriðin indirilmesini desteklediðini teyit ediyorsunuz. Eðer bundan emin deðilseniz, Sitedeki bilgileri kontrol etmeli, cihazýnýzýn el kitapçýðýnýza bakmalý ya da eriþim cihazýnýzýn imalatçýsý ile irtibat kurmalýsýnýz. Uygun olmayan bir eriþim cihazýna "Ýçerik" indirmeye çalýþmanýz halinde bu durumdan sorumlu olamayýz ve sonuca bakýlmaksýzýn, gerekli ücretin tarafýnýzca ödenmesi gerekir. </br>
                    Kýsýtlama olmaksýzýn, hiçbir surette aþaðýdaki sebeplerin biri ya da daha fazlasýndan kaynaklanan, Ýçeriðin teslimatýnda meydana gelen aksaklýk, hata ya da gecikmelerden sorumlu olmayacaðýz:</br>
                    (a) "Ýçerik" sipariþi vermeden önce yanlýþ telefon numarasý ya da baþka yanlýþ bilgi vermeniz;</br>
                    (b) mesaj gelen kutunuzun dolu olmasý ve ekstra mesaj alamamanýz;</br>
                    (c) telefonunuzun kapalý olmasý, herhangi bir sebeple ulaþýlamaz olmasý; ya da
                    (d) makul kontrolümüz dýþýnda baþka herhangi bir sebep. </br></br>
                    "Site" de yer alan Hizmetlerimizi kullanýrken, sorumluluk tamamen size aittir. Vodafone; sitede arýza, hata, virüs ya da bilgisayarýnýzý etkileyebilecek hatalarýn olmadýðýný/olmayacaðýný hiçbir zaman garanti edememektedir. Vodafone, internet üzerinden gönderilen e-postalarýn, herhangi bir durdurma, izleme, kayýp ya da deðiþmeye maruz kalabileceðinden dolayý tamamen güvenli olduðu konusunda size garanti veremez. Gönderilen bu e-posta mesajlarýndan ya da Vodafone'a gönderdiðiniz veya tarafýmýzdan size iletilen e-posta mesajlardan kaynaklanacak herhangi bir zarardan size veya herhangi birine karþý sorumluluk kabul edilmez.</br>
                    Size daha iyi bir hizmet ve daha etkili bir "Site" sunmak amacýyla, browser'ýnýzla etkileþimimizin parçasý olarak "cookies" kullanýlmaktadýr. "Cookie", ziyaretçinin, web sitesini ziyareti sýrasýnda bilgisayarýna gönderilen bilgidir. Cookie'ler, bir ziyaretçinin Sitede izlediði navigasyonu takip edebilmemize olanak vermektedir. Bir kiþi, Bize online olarak kiþisel bilgilerini isteyerek vermediði sürece tarafýmýzca tanýnamaz. Bu bilgiler, baðýmsýz kuruluþlarla pazarlama yapmalarý amacýyla paylaþýlamaz veya satýlamaz. </p>

                    <div class="title-side">
                        <p class="h3">
                           12-GÜVENLÝK 
                        </p>
                    </div>
                    <p>Bireysel/kurumsal abonelik iþlemleriniz için belirlediðiniz þifrenizi güvende ve gizli tutmak için azami dikkati gösteriniz ve yetkisiz kullanýmlarý engellemek amacýyla gerekli önlemleri mutlaka alýnýz. Þifrenizi bir yere not ederek, Vodafone personeli dahil olmak üzere üçüncü bir kiþiye söyleyerek ve/veya üçüncü kiþiler tarafýndan anlaþýlmasýna yol açacak þekilde bir yere kaydederek ya da "Site"ye giriþ yaptýktan sonra bilgisayar ekranýný gözetimsiz býrakarak ifþa etmeyin. Doðum tarihi, yýldönümleri, telefon numarasý gibi kolay tahmin edilebilecek þifreler kullanmayýnýz. "Online Self Servis KULLANICI SÖZLEÞMESÝ"ni ("Sözleþme") onaylayarak "Site"ye üye olduðunuzdan ayrýca "Sözleþme" hükümleri aynen geçerlidir.</br>
                    "Site" üzerinden adýnýza herhangi bir yetkisiz giriþin olmasý, þüphelendiðiniz veya bilginiz dahilinde yetkisiz bir emrin verilmesi veya birisinin þifrenizi bildiðinden þüphelenmeniz durumunu tarafýmýza hemen bildirmelisiniz. Bunun için Vodafone Müþteri "Hizmet"lerini arayabilirsiniz. Bu tip durumlarda hemen þifrenizi deðiþtirmelisiniz. Herhangi bir kaybýn telafi edilmesine çalýþýlýrken ilgili bankalar ve emniyet birimlerinin yardýmýnýza ihtiyacý olabilecektir. Bu nedenle ve kayýplarýn telafi edilmesi veya önlenmesine yardýmcý olacaðýna inandýðýmýz durumlarda emniyet birimlerine veya ilgili üçüncü kiþilere, kiþisel bilgileriniz hakkýnda bilgi verilebilecektir. </p>      

                    <div class="title-side">
                        <p class="h3">
                           13-FÝKRÝ MÜLKÝYET
                        </p>
                    </div>
                    <p>"Site"de bulunan sayfa ekranlarý, bilgi, her türlü "Ýçerik"le, tema ve materyallerin ve bunlarýn düzenlenmesi konusundaki telif haklarý, Vodafone'a ve/veya Vodafone ile sözleþmesi olan üçüncü kiþilere aittir. "Site"nin içerdiði bilgi ve materyallere dair tüm telif haklarý, tescilli marka, patent ve/veya diðer tüm fikri ve sýnai mülkiyet haklarý Vodafone adýna saklýdýr. Bu baðlamda, hiçbir açýk veya imalý, tam ya da basit ruhsat-lisans verilmemektedir.</br>
                    Ürün ve "Hizmet"lerimizi kullanýrken veya kiþisel bilginiz için "Site"deki dosyalarý basabilir, kopyalayabilir, indirebilir veya geçici olarak saklayabilirsiniz. Ancak "Site"deki hiçbir þey deðiþtirilemez. Aksi hal fikri ve sýnai mülkiyet mevzuatýna göre hukuki ve cezai iþlem gerektirecektir. Vodafone'nun yazýlý izni alýnmadýðý sürece, "Site"nin baþka þekillerdeki kullanýmý yasaktýr. Hiç kimse, önceden Vodafone'nun yazýlý iznini almadýkça, "Site"nin belli bir kýsmýný baþka bir web sitesinde kullanamaz veya baþka bir web sitesine baðlantý kuramaz. </br>
                    Vodafone ve Vodafone logosu ile markalaþtýrýlmýþ hizmet ve ürünler bir bütün olarak, Vodafone Telekomünikasyon A.Þ.'nin tescilli markasý olup, Vodafone'a ait tüm haklar Vodafone Telekomünikasyon A.Þ.'de saklýdýr. Yukarýda belirtilen kapsamda ve belirtilen hallerin dýþýnda, Vodafone tescilli markasý, logo veya marka adý, izinsiz kullanýlamaz veya çoðaltýlamayacaðý gibi, alan adý ve benzeri uzantýlý alan ve alt alan adlarý, hiçbir þekilde kullanýlamaz.  </p>      

                    <div class="title-side">
                        <p class="h3">
                           14-"SÝTE"NÝN KULLANIMI
                        </p>
                    </div>
                    <p>Vodafone için kiþisel bilgilerin gizliliði konusu çok önemlidir. Bireysel/kurumsal kiþisel bilgilerinizin güvenliði, genel hükümler ve Telekomünikasyon Mevzuatý kapsamýnda Vodafone tarafýndan koruma altýna alýnmýþtýr. Kiþisel bilgiler yasalara uygun olarak verilmiþ Mahkeme/Savcýlýk kararlarý ve kiþinin açýk yazýlý onayý dýþýnda hiçbir þekilde üçüncü kiþiler tarafýndan kullanýlamayacak, kopyalanmayacak, iþlenemeyecek, daðýtýlamayacak ve yayýnlanmayacaktýr.</br>
                    Kiþisel bilgi kullanýmýmýz, bu Sözleþme'nin bir parçasýný oluþturan Gizlilik Politikasýna tabi olacaktýr. LÜTFEN GÝZLÝLÝK POLÝTÝKASINI DÝKKATLÝCE OKUYUNUZ. Bu politika, kiþisel bilgileri nasýl kullanacaðýmýz ve belli koþullarda kimlere vereceðimiz konusu da dahil, kiþisel bilgileriniz ile ilgili olarak sizlerin haklarýný ve bizlerin yükümlülüklerini ele almaktadýr. </p>      

                    <div class="title-side">
                        <p class="h3">
                           10-KÝÞÝSEL BÝLGÝLERÝNÝZ
                        </p>
                    </div>
                    <p>Þimdilik kaydýyla "Site"nin kullanýmýndan belirli bir ücret talep edilmemektedir. Ancak ilerde Vodafone'nun bunu yapmak hakký saklý tutulmuþtur. Vodafone'nun, abonelik ile ilgili bireysel/kurumsal iþ ve iþlemlerini "Site" üzerinden yapmak amacýyla belirleyebileceði makul ücreti ödemeyi þimdiden kabul ve beyan etmektesiniz. Bununla birlikte, bu tarz bir ücretlendirme yapýlmadan ve Vodafone'a herhangi bir ihbarda bulunmanýzdan önce posta, e-posta, kýsa mesaj veya diðer yollardan tarafýnýza bu deðiþiklikle ilgili bilgi verilecektir. Bildirimi takiben, hizmeti kullanmaya devam etmeniz, teklif edilen ücret deðiþikliðini kabul ettiðiniz anlamýna gelecektir. </p>      

                    <div class="title-side">
                        <p class="h3">
                           15-ÜÇÜNCÜ ÞAHIS SÝTELERÝ, YÜKÜMLÜLÜKLER VE YASAL UYARI
                        </p>
                    </div>
                    <p>Hizmet vasýtasýyla iletilen ya da eriþilen üçüncü þahýslara ait içeriðin güvenliði ya da konusu üzerine kontrol gücümüzün olamayacaðýný kabul ediyorsunuz ve yasadýþý ya da hukuka aykýrý içeriðin iletiminden ya da alýnmasýndan hiçbir surette sorumlu deðiliz. 5651 Sayýlý Yasanýn 4.maddesi gereðince de içerik saðlayýcý, baðlantý saðladýðý baþkasýna ait içeriklerden sorumlu deðildir. Hizmetler, diðer websitelerine, kaynaklara ve/veya iletiþim þebekelerine baðlanmak için tarafýnýzca kullanýlabilir. Bu üçüncü kiþilere ait sitelerin içeriðinden ya da Hizmetlerinden hiçbir surette sorumlu deðiliz. Ýletiþimlerinizin güvenliði temin etmek için elimizden gelen çabayý göstereceðiz; ancak iletiþimleriniz, kontrolümüz altýnda olmayan üçüncü kiþilere ait þebekelerden/hatlardan geçmektedir. Ýnternet güvenli bir ortam deðildir. Ýstenmeyen programlar ya da materyaller, bilginiz olmadan yüklenebilir ve bu suretle, yetkisi olmayan kiþiler, bilgisayarýnýza ya da cep telefon cihazýnýzda, PDA ya da benzeri cihazlarýnýzdaki saklý bilgilere eriþim saðlayabilir. Bu programlar, büyük bir ihtimalle bilginiz dahilinde olmadan, yetki vermediðiniz iþlemleri yapabilir. "Site" üzerindeki baþka yerlere saðladýðýmýz hiperlink, sadece bilgilendirme amaçlýdýr. Diðer web siteleri veya sayfalara giden baðlantýlarý takip etmenin riski tarafýnýza ait olup bu baðlantý sebebiyle oluþan zararlardan Vodafone asla sorumluluk veya yükümlülük kabul etmez.</br> 
                    Yüklenebilir yazýlým sitelerine baðlantýlar olduðu takdirde, bunlar sadece kullaným kolaylýðý saðlamak içindir. </br>Interneti ve/veya Hizmet tarafýndan eriþim saðlanan üçüncü þahýslara ait websitelerini ya da içeriði kullanmanýzdan kaynaklanan her türlü kayýp ya da zarardan dolayý hiçbir sorumluluk kabul etmiyoruz. </br>
                    Yazýlýmý indirmekle ilgili zorluklar veya sonuçlara dair herhangi bir sorumluluk veya yükümlülük taþýmamaktayýz. Ýndirilen herhangi bir yazýlýmýn kullanýmý, eðer varsa, yazýlýmla birlikte saðlanan veya yazýlýmýn yanýnda yer alan lisans anlaþmasýnýn maddelerine tabidir. </br>
                    Sitedeki hiçbir bilgi, üçüncü kiþilerin kabulu veya onayýný ya da bu kiþilere ait tavsiye, düþünce, bilgi, ürün ya da Hizmeti ifade veya ima etmemektedir. </br>
                    Üçüncü kiþilere ait bir web sitesinden, herhangi bir Vodafone web sitesine, herhangi bir biçimde hiperlink baðlantýsý yaratýlmadan önce, mutlaka yazýlý iznimizin alýnmasý gerekmektedir. Bu tarz bir kullaným ücrete tabi olabilir. Vodafone, bu tarz bir baðlantý nedeniyle Sizin veya üçüncü tarafýn uðradýðý hiçbir kayýp veya zarardan sorumlu deðildir.</p>      

                    <div class="title-side">
                        <p class="h3">
                           16-TAZMÝNAT YÜKÜMLÜLÜÐÜNÜZ
                        </p>
                    </div>
                    <p>Vodafone için kiþisel bilgilerin gizliliði konusu çok önemlidir. Bireysel/kurumsal kiþisel bilgilerinizin güvenliði, genel hükümler ve Telekomünikasyon Mevzuatý kapsamýnda Vodafone tarafýndan koruma altýna alýnmýþtýr. Kiþisel bilgiler yasalara uygun olarak verilmiþ Mahkeme/Savcýlýk kararlarý ve kiþinin açýk yazýlý onayý dýþýnda hiçbir þekilde üçüncü kiþiler tarafýndan kullanýlamayacak, kopyalanmayacak, iþlenemeyecek, daðýtýlamayacak ve yayýnlanmayacaktýr.</br>
                    Kiþisel bilgi kullanýmýmýz, bu Sözleþme'nin bir parçasýný oluþturan Gizlilik Politikasýna tabi olacaktýr. LÜTFEN GÝZLÝLÝK POLÝTÝKASINI DÝKKATLÝCE OKUYUNUZ. Bu politika, kiþisel bilgileri nasýl kullanacaðýmýz ve belli koþullarda kimlere vereceðimiz konusu da dahil, kiþisel bilgileriniz ile ilgili olarak sizlerin haklarýný ve bizlerin yükümlülüklerini ele almaktadýr. </p>      

                    <div class="title-side">
                        <p class="h3">
                           17-HÝZMETÝN DURDURULMASI VE SONA ERDÝRÝLMESÝ 
                        </p>
                    </div>
                    <p>"Site"de verilen "Hizmet"i;</br>
                    Bakým ya da tamir iþleri için;</br> 
                    Ýçerikleri ya da "Hizmet"lerin iþlevini zaman içinde güncellemek ya da yükseltmek için;</br> 
                    Sizin bu Koþullarý ihlal ettiðinizi ya da ihlal edebileceðinizi düþünmemiz halinde durdurma hakkýmýz bulunmaktadýr.</br> 
                    Bu Sözleþme'nin hüküm ve koþullarýnýn muhtemel bir ihlalini araþtýrmak ya da engellemek için Hizmetlere eriþiminizi durdurursak, bu Sözleþme bu durdurma süresinde de geçerli olmaya devam edecektir.</br></br>

                    Hizmetin tümü ya da bir kýsmýna eriþiminizi sona erdirebiliriz:</br>
                    Hizmete eriþiminizi sona erdirirsek, Hizmette depolamýþ olduðunuz tüm bilgileri, e-mailleri ve verileri silme hakkýmýz bulunmaktadýr. Bu sebeple, tüm bilgilerin kopyalarýný Hizmetten ayrý olarak baþka herhangi bir depolama cihazýnda saklamanýzý öneririz.</br>
                    Vodafone; teknik, ticari ya da iþletimsel sebeplerle ya da kamu yararýna iliþkin sebeplerle "Site"de sunduðu Hizmetleri her zaman genel olarak geri çekebilir ya da deðiþtirebilir. Hizmetlerin Vodafone tarafýndan kesin olarak durdurulmasý halinde, Hizmetlerin durdurulmasýndan makul bir süre önce bu durum size bildirilecektir.</br> Durdurma, geri alma ya da deðiþiklik sebebine baðlý olarak, önceden bildirimde bulunmak her zaman mümkün olmayabilir. Fesih ne sizin ne de bizim doðan haklarýmýzý ve yükümlülüklerimizi etkileyecektir.</br>
                    "Site"deki talimatlarý takip ederek ya da yukarýda 4.maddede açýklandýðý þekilde bizimle baðlantý kurarak Hizmeti her zaman durdurabilirsiniz. Hizmetin durdurulmasý, tarafýnýzca kullanýlan Hizmetlerin ücretini ya da Hizmetin kullanýmý sýrasýnda satýn alýnan üçüncü mallarýnýn ya da Hizmetlerinin ücretini ödeme yükümlülüðünüzü etkilemeyecektir.</p>      

                    <div class="title-side">
                        <p class="h3">
                           18-UYGULANACAK HUKUK VE ÝHTÝLAFIN ÇÖZÜMÜ
                        </p>
                    </div>
                    <p>Bu Hükümler Türk hukukuna tabi olacak ve Türk hukukuna göre yorumlanacaktýr ve Ýstanbul Merkez Mahkemelerinin, ihtilafýn çözümü konusunda münhasýr olmayan yetkiye sahip olduðunu siz ve biz kabul ederiz. </br>SÖZLEÞMEYÝ OKUDUM VE YUKARIDA YER ALAN TÜM HÜKÜMLERÝ, AÇIK VE HÜR ÝRADE BEYANIM DOÐRULTUSUNDA KABUL EDÝP ONAYLIYORUM.  </p> 

                    <div class="title-side">
                        <p class="h3">
                           II.GÝZLÝLÝK POLÝTÝKASI
                        </p>
                    </div>
                    <p> 1. Aboneden istenen kiþisel bilgiler, aboneye "Hizmet" verilebilmesi için gerekli olup, bu kiþisel bilgiler Vodafone Telekomünikasyon A.Þ. bünyesinde muhafaza altýndadýr.</br>
                    2. Aboneye ait kiþisel bilgiler; Telekomünikasyon mevzuatýna uygun olarak ve Elektronik Haberleþme Sektöründe Kiþisel Verileri Ýþlenmesi ve Gizliliðinin Korunmasý Hakkýnda Yönetmelik gereðince, Telekomünikasyon "Hizmet"lerini pazarlamak ya da katma deðerli "Hizmet"leri saðlamak amacýyla; abone veya kullanýcý kiþisel bilgilerinin kullanýlmasýna izin verdiði takdirde, Vodafone Telekomüniksyon A.Þ. tarafýndan, bu tür "Hizmet"ler ve pazarlama için gerekli kapsam ve sürede iþlenebilir. Kullanýcý ve aboneler, kiþisel bilgilerinin iþlenmesi için verdikleri izinleri her zaman geri alabilirler.</br>
                    3. Vodafone Telekomünikasyon A.Þ.; abonenin veya kullanýcýnýn onayýný almak koþuluyla, telekomünikasyon "Hizmet"lerinin pazarlanmasý ya da katma deðerli "Hizmet"lerin saðlanmasý amacýyla, iþlenen kiþisel bilgileri ve bu tür iþlemin süresini abone ve kullanýcýlara bildirecektir. </br>
                    4. Afet ve acil durum halleri ile kolluk güçleri, ambülans ve itfaiye "Hizmet"leri dahil tüm acil aramalara iliþkin acil yardým çaðrýlara cevap vermek amacýyla; abonenin veya kullanýcýnýn rýzasý olmasa bile abonenin yer verisini ve kimliðini, kullanýcýnýn ise yer verisini içeren bilgiler Telekomünikasyon Mevzuatý gereðince eriþilebilir tutacaktýr. </br>
                    5. Abone kiþisel bilgileri, yasalara uygun olarak verilmiþ Mahkeme/Savcýlýk kararlarý, yasal istisnalar dýþýnda, hiçbir þekilde üçüncü kiþilere verilmez. </br>
                    6. Vodafone Telekomünikasyon A.Þ.'nin hedefi, abone bilgilerini güncel tutmaktýr.Bu nedenle belirli zaman aralýklarý ile abonelerden kiþisel bilgilerinin güncellenmesi talep edilebilecektir.</br>
                    7. Vodafone Telekomünikasyon A.Þ., kendi personeli de dahil olmak üzere, abone bilgilerine hiç kimsenin izinsiz ulaþamamasý için biliþim sistemleri üzerinde sýký bir güvenlik politikasý uygulamaktadýr.</br>
                    8. Vodafone Telekomünikasyon A.Þ., meydana gelebilecek bir sahtecilik/dolandýrýcýlýk ya da herhangi bir soruþturma ya da þebeke güvenliði ihlali konusunda yasal merciler ve diðer ilgili kurumlar ile iþbirliði yapabilir ve yasalar tarafýndan gerekli görülen hallerde ya da adli makamlarýn talebini yerine getirilmesi halinde, elde edilen her türlü bilgiyi (kiþisel veriler dahil) ifþa etme hakký da saklýdýr.</br>
                    9. Abone bilgilerine ulaþma izni olan yetkili Vodafone Grubu'na dahil tüm þirketler, tüm Vodafone grubu personeli ve tüm üçüncü þahýslar, gizlilik mecburiyeti uygulamasýna özellikle uymak zorunluluðundadýrlar. </p>                   
                </div>
            </div>
        </div>
        <div id="pop-up-katilim" class="pop-up katilim-kosullarý" >
            <div class="container">
                <span class="close"></span>
                <div class="row">
                    
                    <div class="title-side">
                        <p class="h3">
                            1-GENEL AÇIKLAMALAR 
                        </p>
                    </div>
                    <p>Bu Hüküm ve Koþullar, (ister web'de, isterse de WAP ile ya da PDA'de eriþim saðlayacaðýnýz) bu internet sitesinde ("Site") sizlere sunulacak "Ýçerik" ve "Hizmet"lere (bundan sonra tek baþýna "Hizmet" ve birlikte "Hizmet"ler" olarak anýlacaktýr) eriþiminize ve bu "Ýçerik" ve "Hizmet"leri kullanýmýnýza uygulanacak genel hüküm ve koþullardýr. Bu Site ve "Hizmet"ler Vodafone Telekomünikasyon A.Þ. (Vodafone) (bundan sonra "biz," "bizim", "bize" ya da Vodafone olarak anýlacaktýr) tarafýndan ya da adýna iþletilmektedir. "Siz" ve "sizin" sözcükleri, size yani "Hizmet"in kullanýcýsýna, atýfta bulunmaktadýr. </p>
                    <p>Lütfen bu hüküm ve koþullarý dikkatlice okuyunuz. </p>
                    
                    <div class="title-side">
                        <p class="h3">
                            2-BÝZÝMLE OLAN SÖZLEÞMENÝZ
                        </p>
                    </div>
                    <p>Bizimle olan sözleþmeniz aþaðýdaki iþlemlerden hangisi daha önce gerçekleþirse, bu tarihte baþlayacaktýr:</p>  
                    <p>Kayýt sürecimizi tamamlamanýz ve bu Hüküm ve Koþullarý okuyup Kabul ettiðinizi teyit etmeniz; ya da Kayýt gerektirmeyen "Hizmet"lerimizden birini görüntülemeniz, bunlara eriþim saðlamanýz ya da kullanmanýz. </p>
                    <p>Bu Hüküm ve Koþullarý print ederek bir kopyasýný kendi kayýtlarýnýz için saklamanýzý tavsiye ederiz. Bu Hüküm ve Koþullar tüm ""Hizmet"ler" için geçerlidir. </p>
                    <p>Bu Hüküm ve Koþullara ilaveten, bu "Hizmet"e kayýt olurken kabul etmeniz gerekecek tek tek "Hizmet"lere uygulanacak ek hüküm ve koþullar da bulunabilir. </p>
                    <div class="title-side">
                        <p class="h3">
                            3-GENEL OLARAK
                        </p>
                    </div>
                    <p>Bu Hüküm ve Koþullardan kaynaklanan haklarýmýzý kaybetmeksizin ileride kullanmak için erteleyebiliriz. </br>
                    Size ihbarda bulunmadan, yükümlülüklerimizin herhangi bir kýsmýný alt taþeronlara ifa ettirebileceðimizi ya da bu Hüküm ve Koþullarý veya haklarýmýzýn ya da yükümlülüklerimizin bir kýsmýný temlik edebileceðimizi kabul ediyorsunuz. </br>
                    Bu Hüküm ve Koþullardan kaynaklanan haklarýnýzý ya da yükümlülüklerinizi temlik etmemeyi, satmamayý ya da baþka herhangi bir þekilde devretmemeyi taahhüt ediyorsunuz. </br>
                    Kontrolumüz dýþýnda gerçekleþen sebeplerden dolayý bu Hüküm ve Koþullarýn ihlali halinde size karþý sorumlu olmayacaðýz. </br>
                    Bu Hükümler ya da "Hizmet"in kullanýmý sonucunda, sizin ve bizim aramýzda herhangi bir ortak giriþimin, ortaklýðýn, istihdam ya da vekillik iliþkisinin kurulmadýðýný kabul ediyorsunuz. </br>
                    Bu Hüküm ve Koþullar (ve uygulanabilirse, bir "Hizmet"e kayýt olurken kayýt sürecinin bir parçasý olarak Kabul ettiðiniz ilgili ek hükümler ve Saðlayýcý'nýn hüküm ve koþullarý) "Hizmet"i kullanýmýnýz konusunda siz ve biz arasýndaki anlaþmanýn tamamýný teþkil eder ve "Hizmet" ile ilgili olarak yapýlan tüm önceki sözleþmelerin yerine geçer. </br>
                    Bu Hüküm ve Koþullardan herhangi bir kýsmýnýn hukuken geçersiz ya da hükümsüz hale gelmesi halinde, geçersiz ya da hükümsüz maddenin yerine orijinal amaca en yakýn geçerli bir madde konulacaktýr ve Hüküm ve Koþullarýn geri kalan kýsmý aynen yürürlükte kalmaya devam edecektir. </br>
                    Vodafone, yürürlükteki mevzuatý, yönetmelikleri, hukuki süreci ya da devlet kurumlarýnýn taleplerini karþýlamak için Vodafone'nun gerekli göreceði her türlü bilgiyi ifþa etme hakkýný her zaman saklý tutar. </br>
                    Vodafone þebekesinde kayýtlý cep telefonunuz var ise, "Hizmet"i kullanýrken Vodafone airtime Hizmetinin genel hüküm ve koþullarý (ya da Hizmet saðlayýcýnýzýn hüküm ve koþullarý) ve (varsa) Vodafone ön-ödemeli Hizmetinin hüküm ve koþullarý uygulanacaktýr. </p>
                    
                    <div class="title-side">
                        <p class="h3">
                            4-YARDIM
                        </p>
                    </div>
                    <p>Bu "Hizmet" ile ilgili herhangi bir sorunuz ya da sorununuz olursa, Vodafone müþterisi iseniz Müþteri "Hizmet"leri hattý olan 0 (542) 542 00 00'ý ya da diðer telefonlardan 0212 448 70 00 numarasýný (ücretli) arayýnýz ya da vodafone.com.tr adresinden "Yardým ve Destek" ve sonra "Bize Ulaþýn" kýsýmlarýna týklamak ve ilgili formu doldurmak suretiyle bize mail atabilirsiniz. </p>  
                    <div class="title-side">
                        <p class="h3">
                            5-KULLANICI ADI VE ÞÝFRE
                        </p>
                    </div>
                    <p>"Hizmet"e kayýt olurken doldurulmasý zorunlu tutulan alanlarda doðru, güncel ve tam bilgi vermeyi Kabul ediyorsunuz. Kayýdý müteakip, "Hizmet"e ve kayýt gerektiren sayfalara eriþim saðlayabilmeniz için tarafýnýza bir þifre verilecektir. Þifrenizle "Hizmet"e eriþim saðlamanýzýn sonucunda gerçekleþen tüm aksiyonlardan siz sorumlusunuz. Þifrenizin ve "Hizmet"e eriþimde bulunurken kullandýðýnýz cihazýn güvenliðini temin etmek sizin sorumluluðunuzdur. Bu Hüküm ve Koþullarýn þifrenizi ifþa ettiðiniz herhangi biri tarafýndan ihlali, sizin tarafýnýzdan yapýlan bir ihlal olarak algýlanacaktýr. </br>
                    Þifrenizin yetkisiz bir kullanýcý tarafýndan öðrenilmesi durumunda, bizi bu hata ya da yanlýþlýktan derhal haberdar edersiniz. Münhasýr ve mutlak takdir yetkimiz ile, þifrenizi ve kullanýcý adýnýzý dilediðimiz zaman deðiþtirme hakkýný saklý tutarýz.</br>
                    Belli "Hizmet"ler için, bir kullanýcý adý ve þifre seçmeniz gerekebilir. Her türlü "Hizmet" için: </br></br>

                    Seçtiðiniz kullanýcý adý, müstehcen, tehdit edici, ýrkçý, bölücü, küçük düþürücü, milli güvenliðe aykýrý, devletin ülkesi ve milletiyle bölünmez bütünlüðüne aykýrý ve üçüncü kiþileri tahkir edici nitelikte olamaz ya da herhangi bir üçüncü kiþinin fikri mülkiyet ya da müseccel haklarýný ihlal edemez; ve </br></br>

                    Kendi münhasýr ve mutlak takdirimizle tarafýnýzca seçilen kullanýcý adýnýn uygunsuz olduðunu düþünmemiz halinde, tarafýnýza bildirimde bulunarak ya da bulunmadan bu kullanýcý ismini kullanmanýzý reddetme ve engelleme hakkýmýz saklýdýr. </br>
                    Zaman zaman þifrenizi ve kullanýcý adýnýzý deðiþtirebiliriz ve bize saðladýðýnýz irtibat bilgilerini kullanarak her türlü deðiþikliði size bildiririz.  </p>  
                    
                    <div class="title-side">
                        <p class="h3">
                            6-SERVÝSLERÝ KULLANIMINIZ
                        </p>
                    </div>
                    <p>Hizmetlerde ("Ýçerik") yer alan ya da Hizmetler aracýlýðýyla eriþilebilen (yazýlým, veri, uygulama, bilgi, metin, fotoðraf, müzik, ses, görüntü, grafik, logo, sembol, çizim ve diðer materyal ya da hareketli imgeler dahil, ancak bunlarla sýnýrlý olmamak üzere) her türlü materyal ya da "Ýçerik" ile ilgili tüm telif haklarý, ticari markalar, patentler ve diðer fikri mülkiyet haklarý ya bizim mülkiyetimizdedir ya da bunlarýn lisansý/kullaným hakký Hizmetlerin bir parçasý olarak hak sahibi ya da sahipleri tarafýndan bize devredilmiþ/verilmiþtir. "Ýçerik" ile baþka herhangi bir þey yapmak istemeniz halinde, öncelikle bu materyale ait haklarýn sahibinin yazýlý izninizi almanýz gerekir. Tüm haklar açýkça saklýdýr. </br></br>

                    Sadece özel ve ticari olmayan bir amaçla ve bu Hüküm ve Koþullara uymanýza tabi olarak, size "Hizmet"i ve Ýçeriði bilgisayarýnýz, cep telefon cihazýnýz ya da diðer eriþim araçlarýyla görüntülemeniz ve kullanmanýz amacýyla, münhasýr olmayan ve devredilemeyen bir hak veriyoruz. Kendi bilgisayarýnýz, cep telefon cihazýnýz ya da diðer eriþim cihazlarýnýzda kiþisel kullaným için ve "Hizmet"in ya da Ýçeriðin usulünce kullanýmý için gerektiði ölçüde ve kopyalamaya telif hakký sahibinin vermesi koþulu ile, deðiþtirmeden Ýçeriði kopyalayabilirsiniz.</br></br>

                    Herhangi bir Ýçeriði (tümüyle ya da kýsmen):</br>
                    Açýkça izin verilmedikçe üçüncü þahýslara devredemez ya da üçüncü þahýslarýn eriþimine izin veremezsiniz; ya da 
                    Deðiþtiremez, iþleyemez, yeniden formatlayamaz ya da baþka herhangi bir þekilde adapte edemezsiniz.</br>
                    "Site" ve sitede sunulan Hizmet, Vodafone marka bütünlüðü ile iltibas yaratacak þekilde ve/veya birebir kullanýlarak ya da adapte edilerek ve burada sayýlan kýsýtlamalarla sýnýrlý olmaksýzýn kullanýlamaz. Hizmetleri bu þekilde kullanmak ya da baþkaca bir Hizmet oluþturmak yasaktýr. 
                    </p>  
                    <div class="title-side">
                        <p class="h3">
                            8-ONLINE SELF SERVÝS
                        </p>
                    </div>
                    <p>Vodafone bireysel abonesiyseniz, Siteden "Online Self Servis" Hizmetine kayýt olabilirsiniz. </br>
                    Vodafone kurumsal abonesiyseniz, Vodafone abonelik iþlemlerinizi kurumsal hesabýmý kullanarak gerçekleþtirebilirsiniz.</br>
                    Kaydolmuþ olduðunuz Hizmetleri görüntüleyebilecek, yeni Hizmetlere kayýt olabilecek ya da kaydýnýzý iptal edebilecek ve kiþisel bilgilerinizi güncelleyebileceksiniz.</br>
                    Kurumsal Hesap aracýlýðýyla, kurumsal müþterilerin çalýþanlarý tarafýndan kurum adýna yapýlacak iþlemlere ait yetkiler, kullanýcý statüsü ve ürün kullanýmýna paralel deðiþiklik gösterir.</p>
                    
                    <div class="title-side">
                        <p class="h3">
                           8-BÝZE SORUN 
                        </p>
                    </div>
                    <p>Vodafone'un Bize Sorun uygulamasý ile sorularýnýzý web sitesi üzerinden iletebilir ve anlýk olarak tarife ve kampanyalarýmýza iliþkin bilgi alabilirsiniz.Tarife ve kampanyalarýmýza iliþkin sorularýnýz anlýk yanýtlanacak olup, verilecek bilgiler web sitesi içeriðinde de yer almaktadýr. Hattýnýz ile ilgili yardým talepleriniz veya sorularýnýz için online self servisi kullanabilir veya Müþteri Hizmetleri birimimizle baðlantý kurabilirsiniz. </br></br>

                    Web sitesi üzerinden yapýlacak görüþmelerin müþteri memnuniyeti saðlamak amacýyla kaydedileceðini, Bize Sorun uygulamasýný kullanýrken uygunsuz, veya suç unsuru içeren ifadeler kullanmamanýzý önemle hatýrlatýrýz </p> 


                    <div class="title-side">
                        <p class="h3">
                           9-SERVÝS VE/VEYA ÝÇERÝKLE ÝLGÝLÝ YASAKLI KULLANIMLAR
                        </p>
                    </div>
                    <p>Siz ve Hizmete eriþim saðlamak suretiyle, Hizmet ve Ýçeriði kullanma hakký verdiðiniz kiþiler, aþaðýdaki iþlemleri yerine getiremezler: </br>
                    Ýçeriði ve/veya Hizmeti ya da bunlarýn herhangi bir kýsmýný bu Sözleþme'de açýklanandan farklý bir þekilde kopyalama, ifþa etme, deðiþtirme, iþleme, yeniden formatlama, görüntüleme, daðýtma, lisans verme, yayma, satma, yerine getirme, transfer etme, bunlara hiperlink saðlama, tersine mühendislik iþlemi yapma ya da parçalara ayýrma ya da Ýçeriði ve/veya Hizmetleri ya da herhangi bir parçasýný bu Sözleþme'de belirtilenden farklý bir þekilde kullandýrma</br>
                    "Ýçerik" ve/veya Hizmetten hiperlinkler (deep-linkler dahil) saðlama ya da yaratma; 
                    Vodafone ana sayfasýný kopyalama ya da Hizmetinin ya da Ýçeriðin herhangi bir kýsmýnýn çevresinde ayrý bir çerçeve oluþturma ("çerçeveleme" olarak biliniyor); </br>
                    Hizmet ya da Ýçeriði herhangi bir ticari amaçla kullanma;</br>
                    Hizmeti ve Hizmet aracýlýðýyla ulaþýlan herhangi bir bilgiyi yasadýþý amaçlarla kullanma;</br>
                    Müstehcen, pornografik, tehdit edici, ýrkçý, bölücü, küçük düþürücü, milli güvenliðe aykýrý, devletin ülkesi ve milletiyle bölünmez bütünlüðüne aykýrý, üçüncü kiþileri tahkir edici, teþhirci, uygunsuz, güven sarsýcý ya da baþka herhangi bir surette yasa dýþý olan herhangi bir mesaj, bilgi ya da resmi yayýnlamak, yüklemek ya da iletmek için Hizmeti kullanma; </br>
                    Gizlilik haklarý dahil, baþkalarýnýn haklarýný taciz etme, tehdit etme, bir baþkasýný taklit etme ya da baþka bir þekilde ihlal etme; </br>
                    Diðer kullanýcýlarýn Hizmeti ya da baþka herhangi bir websitesini kullanmasýný ve bunlardan faydalanmasýný engellemek amacýyla baþka bilgisayarlarý hack'leme, aþýrý trafik taleplerinde bulunma, probe ya da port scan yapmak, virüs, mail bomb, chain letters ya da piramit þemalarý bulaþtýrma; </br>
                    Mevzuata aykýrý þekilde diðer kiþilerin kiþisel bilgilerini toplama ve iþleme; </br>
                    Ürün ya da Hizmet satýþý için reklam yapma ya da teklifte bulunma; </br>
                    Telif hakký dahil baþkalarýnýn fikri mülkiyet haklarýný ihlal etme; </br>
                    Hizmetin kullanýcýlarý hakkýnda bilgi toplamak ya da yetkisiz ya da izinsiz olarak junk ya da bulk ("spam" olarak da bilinen) e-mail göndermek ya da baþka bir þekilde daðýtmak amacýyla Hizmeti kullanma;</br>
                    Kendi münhasýr ve mutlak takdirimize göre uygunsuz ya da kabul edilemez olduðunu ya da marka ve itibarýmýza zarar verme olasýlýðý bulunduðunu düþündüðümüz bir þekilde, Hizmeti ya da Ýçeriði kullanma.</br> 
                    Baþka birinin Hizmete ya da Ýçeriðe eriþiminizi kullanmasýndan kaynaklanmýþ olsa bile, Hizmetin ya da Ýçeriðin kötüye kullanýmýndan siz sorumlu olacaksýnýz. Sizin ya da üçüncü kiþilerin Hizmete iliþkin olarak koyduðu ya da koymaya çalýþtýðý herhangi bir materyali silme, çýkarma, deðiþtirme ya da reddetme, Hizmete eriþiminizi bloke etme ya da durdurma ve bu Hüküm ve Koþullarýn herhangi bir þekilde ihlalini engellemek ya da gidermek için takdiri bize ait olmak üzere gerekli gördüðümüz diðer her türlü aksiyonu alma hakkýmýz saklýdýr. "Ýçerik"te ya da Hizmette bu Hüküm ve Koþullarý ihlal edeceðini makul surette düþündüðünüz herhangi bir "Ýçerik" ya da üçüncü kiþi materyalini bize bildirmek isterseniz, lütfen bildiriniz.</br>
                    (Gizlilik Politikamýza uygun olarak) herhangi bir soruþturma ya da þebeke güvenliði ihlali konusunda yasalar kapsamýnda ve diðer yetkili ilgili resmi kurumlar ile iþbirliði yapýlacak ve yasalar kapsamýnda kiþisel bilgileriniz resmi kurumlar ve/veya adli makamlarla paylaþýlabilecektir. </p>         



                    <div class="title-side">
                        <p class="h3">
                           10-KÝÞÝSEL BÝLGÝLERÝNÝZ
                        </p>
                    </div>
                    <p>Vodafone için kiþisel bilgilerin gizliliði konusu çok önemlidir. Bireysel/kurumsal kiþisel bilgilerinizin güvenliði, genel hükümler ve Telekomünikasyon Mevzuatý kapsamýnda Vodafone tarafýndan koruma altýna alýnmýþtýr. Kiþisel bilgiler yasalara uygun olarak verilmiþ Mahkeme/Savcýlýk kararlarý ve kiþinin açýk yazýlý onayý dýþýnda hiçbir þekilde üçüncü kiþiler tarafýndan kullanýlamayacak, kopyalanmayacak, iþlenemeyecek, daðýtýlamayacak ve yayýnlanmayacaktýr.</br>
                    Kiþisel bilgi kullanýmýmýz, bu Sözleþme'nin bir parçasýný oluþturan Gizlilik Politikasýna tabi olacaktýr. LÜTFEN GÝZLÝLÝK POLÝTÝKASINI DÝKKATLÝCE OKUYUNUZ. Bu politika, kiþisel bilgileri nasýl kullanacaðýmýz ve belli koþullarda kimlere vereceðimiz konusu da dahil, kiþisel bilgileriniz ile ilgili olarak sizlerin haklarýný ve bizlerin yükümlülüklerini ele almaktadýr. </p>

                    <div class="title-side">
                        <p class="h3">
                           11-ÝÇERÝK YÜKLEME ve SORUMLULUK 
                        </p>
                    </div>
                    <p>Herhangi bir Hizmetimiz cep telefonunuza, kiþisel bilgisayarýnýza, kiþisel dijital asistanýnýza ya da diðer eriþim araçlarýna, "Ýçerik" yüklemenize imkan saðlýyorsa, aþaðýdaki koþullara uymanýz gerekir.
                    Bu Ýçeriði eriþim cihazýnýza kaydedebilirsiniz ancak (açýkça izin verilmedikçe) bu Ýçeriði baþka bir yere kaydetmeniz, Ýçeriði deðiþtirmeniz, kopyalamanýz, daðýtmanýz, iþlemeniz bir ya da daha fazla üçüncü kiþiye iletmeniz ya da üçüncü kiþilerin Ýçeriðe eriþimine izin vermeniz tümüyle yasaktýr. </br>
                    Seçmiþ olduðunuz Ýçeriði alabilmeniz için eriþim cihazýnýzdaki kiþisel ayarlarý uygun bir þekilde ayarlamanýz gerekmektedir. Hizmetlere kayýt olmak suretiyle, eriþim cihazýnýzýn ilgili Ýçeriðin indirilmesini desteklediðini teyit ediyorsunuz. Eðer bundan emin deðilseniz, Sitedeki bilgileri kontrol etmeli, cihazýnýzýn el kitapçýðýnýza bakmalý ya da eriþim cihazýnýzýn imalatçýsý ile irtibat kurmalýsýnýz. Uygun olmayan bir eriþim cihazýna "Ýçerik" indirmeye çalýþmanýz halinde bu durumdan sorumlu olamayýz ve sonuca bakýlmaksýzýn, gerekli ücretin tarafýnýzca ödenmesi gerekir. </br>
                    Kýsýtlama olmaksýzýn, hiçbir surette aþaðýdaki sebeplerin biri ya da daha fazlasýndan kaynaklanan, Ýçeriðin teslimatýnda meydana gelen aksaklýk, hata ya da gecikmelerden sorumlu olmayacaðýz:</br>
                    (a) "Ýçerik" sipariþi vermeden önce yanlýþ telefon numarasý ya da baþka yanlýþ bilgi vermeniz;</br>
                    (b) mesaj gelen kutunuzun dolu olmasý ve ekstra mesaj alamamanýz;</br>
                    (c) telefonunuzun kapalý olmasý, herhangi bir sebeple ulaþýlamaz olmasý; ya da
                    (d) makul kontrolümüz dýþýnda baþka herhangi bir sebep. </br></br>
                    "Site" de yer alan Hizmetlerimizi kullanýrken, sorumluluk tamamen size aittir. Vodafone; sitede arýza, hata, virüs ya da bilgisayarýnýzý etkileyebilecek hatalarýn olmadýðýný/olmayacaðýný hiçbir zaman garanti edememektedir. Vodafone, internet üzerinden gönderilen e-postalarýn, herhangi bir durdurma, izleme, kayýp ya da deðiþmeye maruz kalabileceðinden dolayý tamamen güvenli olduðu konusunda size garanti veremez. Gönderilen bu e-posta mesajlarýndan ya da Vodafone'a gönderdiðiniz veya tarafýmýzdan size iletilen e-posta mesajlardan kaynaklanacak herhangi bir zarardan size veya herhangi birine karþý sorumluluk kabul edilmez.</br>
                    Size daha iyi bir hizmet ve daha etkili bir "Site" sunmak amacýyla, browser'ýnýzla etkileþimimizin parçasý olarak "cookies" kullanýlmaktadýr. "Cookie", ziyaretçinin, web sitesini ziyareti sýrasýnda bilgisayarýna gönderilen bilgidir. Cookie'ler, bir ziyaretçinin Sitede izlediði navigasyonu takip edebilmemize olanak vermektedir. Bir kiþi, Bize online olarak kiþisel bilgilerini isteyerek vermediði sürece tarafýmýzca tanýnamaz. Bu bilgiler, baðýmsýz kuruluþlarla pazarlama yapmalarý amacýyla paylaþýlamaz veya satýlamaz. </p>

                    <div class="title-side">
                        <p class="h3">
                           12-GÜVENLÝK 
                        </p>
                    </div>
                    <p>Bireysel/kurumsal abonelik iþlemleriniz için belirlediðiniz þifrenizi güvende ve gizli tutmak için azami dikkati gösteriniz ve yetkisiz kullanýmlarý engellemek amacýyla gerekli önlemleri mutlaka alýnýz. Þifrenizi bir yere not ederek, Vodafone personeli dahil olmak üzere üçüncü bir kiþiye söyleyerek ve/veya üçüncü kiþiler tarafýndan anlaþýlmasýna yol açacak þekilde bir yere kaydederek ya da "Site"ye giriþ yaptýktan sonra bilgisayar ekranýný gözetimsiz býrakarak ifþa etmeyin. Doðum tarihi, yýldönümleri, telefon numarasý gibi kolay tahmin edilebilecek þifreler kullanmayýnýz. "Online Self Servis KULLANICI SÖZLEÞMESÝ"ni ("Sözleþme") onaylayarak "Site"ye üye olduðunuzdan ayrýca "Sözleþme" hükümleri aynen geçerlidir.</br>
                    "Site" üzerinden adýnýza herhangi bir yetkisiz giriþin olmasý, þüphelendiðiniz veya bilginiz dahilinde yetkisiz bir emrin verilmesi veya birisinin þifrenizi bildiðinden þüphelenmeniz durumunu tarafýmýza hemen bildirmelisiniz. Bunun için Vodafone Müþteri "Hizmet"lerini arayabilirsiniz. Bu tip durumlarda hemen þifrenizi deðiþtirmelisiniz. Herhangi bir kaybýn telafi edilmesine çalýþýlýrken ilgili bankalar ve emniyet birimlerinin yardýmýnýza ihtiyacý olabilecektir. Bu nedenle ve kayýplarýn telafi edilmesi veya önlenmesine yardýmcý olacaðýna inandýðýmýz durumlarda emniyet birimlerine veya ilgili üçüncü kiþilere, kiþisel bilgileriniz hakkýnda bilgi verilebilecektir. </p>      

                    <div class="title-side">
                        <p class="h3">
                           13-FÝKRÝ MÜLKÝYET
                        </p>
                    </div>
                    <p>"Site"de bulunan sayfa ekranlarý, bilgi, her türlü "Ýçerik"le, tema ve materyallerin ve bunlarýn düzenlenmesi konusundaki telif haklarý, Vodafone'a ve/veya Vodafone ile sözleþmesi olan üçüncü kiþilere aittir. "Site"nin içerdiði bilgi ve materyallere dair tüm telif haklarý, tescilli marka, patent ve/veya diðer tüm fikri ve sýnai mülkiyet haklarý Vodafone adýna saklýdýr. Bu baðlamda, hiçbir açýk veya imalý, tam ya da basit ruhsat-lisans verilmemektedir.</br>
                    Ürün ve "Hizmet"lerimizi kullanýrken veya kiþisel bilginiz için "Site"deki dosyalarý basabilir, kopyalayabilir, indirebilir veya geçici olarak saklayabilirsiniz. Ancak "Site"deki hiçbir þey deðiþtirilemez. Aksi hal fikri ve sýnai mülkiyet mevzuatýna göre hukuki ve cezai iþlem gerektirecektir. Vodafone'nun yazýlý izni alýnmadýðý sürece, "Site"nin baþka þekillerdeki kullanýmý yasaktýr. Hiç kimse, önceden Vodafone'nun yazýlý iznini almadýkça, "Site"nin belli bir kýsmýný baþka bir web sitesinde kullanamaz veya baþka bir web sitesine baðlantý kuramaz. </br>
                    Vodafone ve Vodafone logosu ile markalaþtýrýlmýþ hizmet ve ürünler bir bütün olarak, Vodafone Telekomünikasyon A.Þ.'nin tescilli markasý olup, Vodafone'a ait tüm haklar Vodafone Telekomünikasyon A.Þ.'de saklýdýr. Yukarýda belirtilen kapsamda ve belirtilen hallerin dýþýnda, Vodafone tescilli markasý, logo veya marka adý, izinsiz kullanýlamaz veya çoðaltýlamayacaðý gibi, alan adý ve benzeri uzantýlý alan ve alt alan adlarý, hiçbir þekilde kullanýlamaz.  </p>      

                    <div class="title-side">
                        <p class="h3">
                           14-"SÝTE"NÝN KULLANIMI
                        </p>
                    </div>
                    <p>Vodafone için kiþisel bilgilerin gizliliði konusu çok önemlidir. Bireysel/kurumsal kiþisel bilgilerinizin güvenliði, genel hükümler ve Telekomünikasyon Mevzuatý kapsamýnda Vodafone tarafýndan koruma altýna alýnmýþtýr. Kiþisel bilgiler yasalara uygun olarak verilmiþ Mahkeme/Savcýlýk kararlarý ve kiþinin açýk yazýlý onayý dýþýnda hiçbir þekilde üçüncü kiþiler tarafýndan kullanýlamayacak, kopyalanmayacak, iþlenemeyecek, daðýtýlamayacak ve yayýnlanmayacaktýr.</br>
                    Kiþisel bilgi kullanýmýmýz, bu Sözleþme'nin bir parçasýný oluþturan Gizlilik Politikasýna tabi olacaktýr. LÜTFEN GÝZLÝLÝK POLÝTÝKASINI DÝKKATLÝCE OKUYUNUZ. Bu politika, kiþisel bilgileri nasýl kullanacaðýmýz ve belli koþullarda kimlere vereceðimiz konusu da dahil, kiþisel bilgileriniz ile ilgili olarak sizlerin haklarýný ve bizlerin yükümlülüklerini ele almaktadýr. </p>      

                    <div class="title-side">
                        <p class="h3">
                           10-KÝÞÝSEL BÝLGÝLERÝNÝZ
                        </p>
                    </div>
                    <p>Þimdilik kaydýyla "Site"nin kullanýmýndan belirli bir ücret talep edilmemektedir. Ancak ilerde Vodafone'nun bunu yapmak hakký saklý tutulmuþtur. Vodafone'nun, abonelik ile ilgili bireysel/kurumsal iþ ve iþlemlerini "Site" üzerinden yapmak amacýyla belirleyebileceði makul ücreti ödemeyi þimdiden kabul ve beyan etmektesiniz. Bununla birlikte, bu tarz bir ücretlendirme yapýlmadan ve Vodafone'a herhangi bir ihbarda bulunmanýzdan önce posta, e-posta, kýsa mesaj veya diðer yollardan tarafýnýza bu deðiþiklikle ilgili bilgi verilecektir. Bildirimi takiben, hizmeti kullanmaya devam etmeniz, teklif edilen ücret deðiþikliðini kabul ettiðiniz anlamýna gelecektir. </p>      

                    <div class="title-side">
                        <p class="h3">
                           15-ÜÇÜNCÜ ÞAHIS SÝTELERÝ, YÜKÜMLÜLÜKLER VE YASAL UYARI
                        </p>
                    </div>
                    <p>Hizmet vasýtasýyla iletilen ya da eriþilen üçüncü þahýslara ait içeriðin güvenliði ya da konusu üzerine kontrol gücümüzün olamayacaðýný kabul ediyorsunuz ve yasadýþý ya da hukuka aykýrý içeriðin iletiminden ya da alýnmasýndan hiçbir surette sorumlu deðiliz. 5651 Sayýlý Yasanýn 4.maddesi gereðince de içerik saðlayýcý, baðlantý saðladýðý baþkasýna ait içeriklerden sorumlu deðildir. Hizmetler, diðer websitelerine, kaynaklara ve/veya iletiþim þebekelerine baðlanmak için tarafýnýzca kullanýlabilir. Bu üçüncü kiþilere ait sitelerin içeriðinden ya da Hizmetlerinden hiçbir surette sorumlu deðiliz. Ýletiþimlerinizin güvenliði temin etmek için elimizden gelen çabayý göstereceðiz; ancak iletiþimleriniz, kontrolümüz altýnda olmayan üçüncü kiþilere ait þebekelerden/hatlardan geçmektedir. Ýnternet güvenli bir ortam deðildir. Ýstenmeyen programlar ya da materyaller, bilginiz olmadan yüklenebilir ve bu suretle, yetkisi olmayan kiþiler, bilgisayarýnýza ya da cep telefon cihazýnýzda, PDA ya da benzeri cihazlarýnýzdaki saklý bilgilere eriþim saðlayabilir. Bu programlar, büyük bir ihtimalle bilginiz dahilinde olmadan, yetki vermediðiniz iþlemleri yapabilir. "Site" üzerindeki baþka yerlere saðladýðýmýz hiperlink, sadece bilgilendirme amaçlýdýr. Diðer web siteleri veya sayfalara giden baðlantýlarý takip etmenin riski tarafýnýza ait olup bu baðlantý sebebiyle oluþan zararlardan Vodafone asla sorumluluk veya yükümlülük kabul etmez.</br> 
                    Yüklenebilir yazýlým sitelerine baðlantýlar olduðu takdirde, bunlar sadece kullaným kolaylýðý saðlamak içindir. </br>Interneti ve/veya Hizmet tarafýndan eriþim saðlanan üçüncü þahýslara ait websitelerini ya da içeriði kullanmanýzdan kaynaklanan her türlü kayýp ya da zarardan dolayý hiçbir sorumluluk kabul etmiyoruz. </br>
                    Yazýlýmý indirmekle ilgili zorluklar veya sonuçlara dair herhangi bir sorumluluk veya yükümlülük taþýmamaktayýz. Ýndirilen herhangi bir yazýlýmýn kullanýmý, eðer varsa, yazýlýmla birlikte saðlanan veya yazýlýmýn yanýnda yer alan lisans anlaþmasýnýn maddelerine tabidir. </br>
                    Sitedeki hiçbir bilgi, üçüncü kiþilerin kabulu veya onayýný ya da bu kiþilere ait tavsiye, düþünce, bilgi, ürün ya da Hizmeti ifade veya ima etmemektedir. </br>
                    Üçüncü kiþilere ait bir web sitesinden, herhangi bir Vodafone web sitesine, herhangi bir biçimde hiperlink baðlantýsý yaratýlmadan önce, mutlaka yazýlý iznimizin alýnmasý gerekmektedir. Bu tarz bir kullaným ücrete tabi olabilir. Vodafone, bu tarz bir baðlantý nedeniyle Sizin veya üçüncü tarafýn uðradýðý hiçbir kayýp veya zarardan sorumlu deðildir.</p>      

                    <div class="title-side">
                        <p class="h3">
                           16-TAZMÝNAT YÜKÜMLÜLÜÐÜNÜZ
                        </p>
                    </div>
                    <p>Vodafone için kiþisel bilgilerin gizliliði konusu çok önemlidir. Bireysel/kurumsal kiþisel bilgilerinizin güvenliði, genel hükümler ve Telekomünikasyon Mevzuatý kapsamýnda Vodafone tarafýndan koruma altýna alýnmýþtýr. Kiþisel bilgiler yasalara uygun olarak verilmiþ Mahkeme/Savcýlýk kararlarý ve kiþinin açýk yazýlý onayý dýþýnda hiçbir þekilde üçüncü kiþiler tarafýndan kullanýlamayacak, kopyalanmayacak, iþlenemeyecek, daðýtýlamayacak ve yayýnlanmayacaktýr.</br>
                    Kiþisel bilgi kullanýmýmýz, bu Sözleþme'nin bir parçasýný oluþturan Gizlilik Politikasýna tabi olacaktýr. LÜTFEN GÝZLÝLÝK POLÝTÝKASINI DÝKKATLÝCE OKUYUNUZ. Bu politika, kiþisel bilgileri nasýl kullanacaðýmýz ve belli koþullarda kimlere vereceðimiz konusu da dahil, kiþisel bilgileriniz ile ilgili olarak sizlerin haklarýný ve bizlerin yükümlülüklerini ele almaktadýr. </p>      

                    <div class="title-side">
                        <p class="h3">
                           17-HÝZMETÝN DURDURULMASI VE SONA ERDÝRÝLMESÝ 
                        </p>
                    </div>
                    <p>"Site"de verilen "Hizmet"i;</br>
                    Bakým ya da tamir iþleri için;</br> 
                    Ýçerikleri ya da "Hizmet"lerin iþlevini zaman içinde güncellemek ya da yükseltmek için;</br> 
                    Sizin bu Koþullarý ihlal ettiðinizi ya da ihlal edebileceðinizi düþünmemiz halinde durdurma hakkýmýz bulunmaktadýr.</br> 
                    Bu Sözleþme'nin hüküm ve koþullarýnýn muhtemel bir ihlalini araþtýrmak ya da engellemek için Hizmetlere eriþiminizi durdurursak, bu Sözleþme bu durdurma süresinde de geçerli olmaya devam edecektir.</br></br>

                    Hizmetin tümü ya da bir kýsmýna eriþiminizi sona erdirebiliriz:</br>
                    Hizmete eriþiminizi sona erdirirsek, Hizmette depolamýþ olduðunuz tüm bilgileri, e-mailleri ve verileri silme hakkýmýz bulunmaktadýr. Bu sebeple, tüm bilgilerin kopyalarýný Hizmetten ayrý olarak baþka herhangi bir depolama cihazýnda saklamanýzý öneririz.</br>
                    Vodafone; teknik, ticari ya da iþletimsel sebeplerle ya da kamu yararýna iliþkin sebeplerle "Site"de sunduðu Hizmetleri her zaman genel olarak geri çekebilir ya da deðiþtirebilir. Hizmetlerin Vodafone tarafýndan kesin olarak durdurulmasý halinde, Hizmetlerin durdurulmasýndan makul bir süre önce bu durum size bildirilecektir.</br> Durdurma, geri alma ya da deðiþiklik sebebine baðlý olarak, önceden bildirimde bulunmak her zaman mümkün olmayabilir. Fesih ne sizin ne de bizim doðan haklarýmýzý ve yükümlülüklerimizi etkileyecektir.</br>
                    "Site"deki talimatlarý takip ederek ya da yukarýda 4.maddede açýklandýðý þekilde bizimle baðlantý kurarak Hizmeti her zaman durdurabilirsiniz. Hizmetin durdurulmasý, tarafýnýzca kullanýlan Hizmetlerin ücretini ya da Hizmetin kullanýmý sýrasýnda satýn alýnan üçüncü mallarýnýn ya da Hizmetlerinin ücretini ödeme yükümlülüðünüzü etkilemeyecektir.</p>      

                    <div class="title-side">
                        <p class="h3">
                           18-UYGULANACAK HUKUK VE ÝHTÝLAFIN ÇÖZÜMÜ
                        </p>
                    </div>
                    <p>Bu Hükümler Türk hukukuna tabi olacak ve Türk hukukuna göre yorumlanacaktýr ve Ýstanbul Merkez Mahkemelerinin, ihtilafýn çözümü konusunda münhasýr olmayan yetkiye sahip olduðunu siz ve biz kabul ederiz. </br>SÖZLEÞMEYÝ OKUDUM VE YUKARIDA YER ALAN TÜM HÜKÜMLERÝ, AÇIK VE HÜR ÝRADE BEYANIM DOÐRULTUSUNDA KABUL EDÝP ONAYLIYORUM.  </p> 

                    <div class="title-side">
                        <p class="h3">
                           II.GÝZLÝLÝK POLÝTÝKASI
                        </p>
                    </div>
                    <p> 1. Aboneden istenen kiþisel bilgiler, aboneye "Hizmet" verilebilmesi için gerekli olup, bu kiþisel bilgiler Vodafone Telekomünikasyon A.Þ. bünyesinde muhafaza altýndadýr.</br>
                    2. Aboneye ait kiþisel bilgiler; Telekomünikasyon mevzuatýna uygun olarak ve Elektronik Haberleþme Sektöründe Kiþisel Verileri Ýþlenmesi ve Gizliliðinin Korunmasý Hakkýnda Yönetmelik gereðince, Telekomünikasyon "Hizmet"lerini pazarlamak ya da katma deðerli "Hizmet"leri saðlamak amacýyla; abone veya kullanýcý kiþisel bilgilerinin kullanýlmasýna izin verdiði takdirde, Vodafone Telekomüniksyon A.Þ. tarafýndan, bu tür "Hizmet"ler ve pazarlama için gerekli kapsam ve sürede iþlenebilir. Kullanýcý ve aboneler, kiþisel bilgilerinin iþlenmesi için verdikleri izinleri her zaman geri alabilirler.</br>
                    3. Vodafone Telekomünikasyon A.Þ.; abonenin veya kullanýcýnýn onayýný almak koþuluyla, telekomünikasyon "Hizmet"lerinin pazarlanmasý ya da katma deðerli "Hizmet"lerin saðlanmasý amacýyla, iþlenen kiþisel bilgileri ve bu tür iþlemin süresini abone ve kullanýcýlara bildirecektir. </br>
                    4. Afet ve acil durum halleri ile kolluk güçleri, ambülans ve itfaiye "Hizmet"leri dahil tüm acil aramalara iliþkin acil yardým çaðrýlara cevap vermek amacýyla; abonenin veya kullanýcýnýn rýzasý olmasa bile abonenin yer verisini ve kimliðini, kullanýcýnýn ise yer verisini içeren bilgiler Telekomünikasyon Mevzuatý gereðince eriþilebilir tutacaktýr. </br>
                    5. Abone kiþisel bilgileri, yasalara uygun olarak verilmiþ Mahkeme/Savcýlýk kararlarý, yasal istisnalar dýþýnda, hiçbir þekilde üçüncü kiþilere verilmez. </br>
                    6. Vodafone Telekomünikasyon A.Þ.'nin hedefi, abone bilgilerini güncel tutmaktýr.Bu nedenle belirli zaman aralýklarý ile abonelerden kiþisel bilgilerinin güncellenmesi talep edilebilecektir.</br>
                    7. Vodafone Telekomünikasyon A.Þ., kendi personeli de dahil olmak üzere, abone bilgilerine hiç kimsenin izinsiz ulaþamamasý için biliþim sistemleri üzerinde sýký bir güvenlik politikasý uygulamaktadýr.</br>
                    8. Vodafone Telekomünikasyon A.Þ., meydana gelebilecek bir sahtecilik/dolandýrýcýlýk ya da herhangi bir soruþturma ya da þebeke güvenliði ihlali konusunda yasal merciler ve diðer ilgili kurumlar ile iþbirliði yapabilir ve yasalar tarafýndan gerekli görülen hallerde ya da adli makamlarýn talebini yerine getirilmesi halinde, elde edilen her türlü bilgiyi (kiþisel veriler dahil) ifþa etme hakký da saklýdýr.</br>
                    9. Abone bilgilerine ulaþma izni olan yetkili Vodafone Grubu'na dahil tüm þirketler, tüm Vodafone grubu personeli ve tüm üçüncü þahýslar, gizlilik mecburiyeti uygulamasýna özellikle uymak zorunluluðundadýrlar. </p>                   
                </div>
            </div>
        </div>
        <div id="esaslar" class="pop-up esaslar" >
            <div class="container">
                <span class="close"></span>
                <div class="row">
                    <strong>Vodafone Red Netflix Paketi Kampanya Koþullarý:</strong><br><br>
					<p class="h2" style="color: #e60000!important;"><strong>Vodafone Red Netflix Paketi : </strong></p></br>
					
					<p>• 3 ay hediye Netflix üyeliði sadece <strong>Yeni Red 10, Yeni Red 20, 4.5G Red 10, 4.5G Red Elite</strong> ve <strong>Red Elite</strong> Tarifelerinde geçerlidir. </p></br>
					<p>• Diðer Red Tarifeleri Netflix Paketi'nden, aylýk 9,90 TL'lik data paketiyle faydalanabilir. </p></br>
					<p>• Hediye Netflix üyelikleri dýþýndaki Netflix Paketi'nden, diðer Red Tarifelerindeki aboneler aylýk 9,90 TL'ye 3 ay geçerli aylýk 1 GB paket alýmlarýyla faydalanabilmektedir. </p></br>
					<p>• 1 GB internet paketi alýndýktan sonra 3 aylýk Netflix üyeliði otomatik tanýmlanacaktýr. </p></br>
					<p>• Abonelerin sadece üyelik bilgilerini doldurmalarý gerekmektedir.</p></br>
					<p>• Kampanya hem yeni gelen hem mevcut aboneleri çin geçerlidir. </p></br>
					<p>• Hediye Netflix üyeliði sadece 3 aylýk standart Netflix Paketi (ayný anda 2 cihazdan yayýn/HD) için geçerlidir. </p></br>
					<p>• Anýnda izlemek için Netflix uyumlu cihaz (mobil cihazlar, Smart TV [IMVT1], PlayStation) ve internet baðlantýsý gereklidir. </p></br>
					<p>• Netflix hakký devredilemez veya paraya çevrilemez. </p></br>
					<p>• Baþka Netflix üyeliði ile deðiþtirilemez veya birleþtirilemez. </p></br>
					<p>• Kampanya dahilinde verilen 1 GB cepten internet yurtiçinde geçerlidir. </p></br>
					<p>• 3 aylýk dönem sonunda abone iptal etmediði takdirde, Netflix üyeliði aylýk 27,99 TL'lik standart paketle, gönderilecek uyarý mesajý ile abone üyeliðini devam ettirmek isterse ücretlendirilecektir. </p></br>
					<p>• Deðiþiklik hakký Vodafone ve Netflix'te saklýdýr. </p></br>
					<p>• Kampanya, 29.10.2016-20.09.2017 tarihleri arasýnda geçerlidir. </p></br>
					<p>• Detaylar: <a style="color: #e60000;" target="_blank" href="http://netflix.com/termsofuse">netflix.com/termsofuse</a> ve <a style="color: #e60000;" target="_blank" href="http://vodafone.com.tr/">vodafone.com.tr</a>   
                </div>
            </div>
        </div>
    </div>
</body>
</html>   