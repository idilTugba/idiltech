<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="language" content="tr" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="robots" content="index, follow, odp" />
    <meta name="googlebot" content="index, follow" />
    <meta name="keywords" content="vodafone,vodafone red,red,red ayr�cal�klar�,red d�nyas�,red f�rsatlar�,red tarifeleri, red small, red medium, red large, elite" />
    <meta name="description" content="Yeni Red tarifeleriyle ak�ll� cihaz indirimlerinden, restoran indirimlerine, yurtd��� avantajlar�ndan, seyahat indirimlerine kadar bir�ok f�rsat sizi bekliyor. Vodafone Red'le Hayat Daha Kolay!" />
    <meta property="og:title" content="Vodafone Red">
    <meta property="og:description" content="Yeni Red tarifeleriyle ak�ll� cihaz indirimlerinden, restoran indirimlerine, yurtd��� avantajlar�ndan, seyahat indirimlerine kadar bir�ok f�rsat sizi bekliyor. Vodafone Red'le Hayat Daha Kolay!" />
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

    <title>�cretsiz Netflix | Vodafone Red</title>

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
      <a method="link" class="tealium" tracking="button:redli-ol" title="redli-ol" href="redli-ol.php"><p>Nas�l Vodafone Red'li Olabilirim? <span class="icon-chevron-thin-right"></span></p></a>
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
              <li><a method="link" class="tealium" tracking="button:red-firsatlari" title="red-firsatlari" href="red-firsatlari.php">VODAFONE </br>RED'L�LERE </br>�ZEL FIRSATLAR</a></li>
              <li><a method="link" class="tealium" tracking="button:tarifeler" title="tarifeler" href="tarifeler.php">�HT�YACA UYGUN </br> VODAFONE RED </br> TAR�FELER�</a></li>
              <li><a method="link" class="tealium" tracking="button:redli-ol" title="redli-ol" href="redli-ol.php">NASIL VODAFONE RED'L� </br> OLAB�L�R�M?</a></li>
            </ul>
            <div class="social">
              <p>B�Z� TAK�P ET</p>
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
                              <li><a method="link" class="tealium" href="red-firsatlari.php">Neden Red'li Olmal�y�m?</a></li>
                              <li><a method="link" class="tealium" href="tarifeler.php">Red Tarifeleri</a></li>
                              <li><a method="link" class="tealium" href="redli-ol.php">Nas�l Red'li Olabilirim?</a></li>
                          </ul>
                      </div>
                  </div>
              </header>
                    <div id="slider" class="page">
                        <div class="netflix bg"></div>
                        <img src="dist/img/kampanyalar/netflix-m.jpg" alt="" class="bg mobile">
                        <div class="text-holder netflix-banner">
                            <div class="text netflix-text detail-text">
                                 <p class="span-text"><span><strong>Buradas�n�z:</strong> <span><a method="link" class="tealium" href="anasayfa.php">RED</a></span> / <span><a method="link" class="tealium" href="Kampanyalar.php">F�rsatlar</a></span> / <a method="link" class="tealium" href="netflix.php">Netflix</a></span> </p>
                                <p class="h1">3 ayl�k hediye <strong>Netflix</strong> </br> sadece <strong>Vodafone Red'de</strong></p>
                                <p>
                                    �d�ll� orjinal dizi ve filmlerin keyfini ��kar�n.</strong>
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
                                        <!--<p style="color: #428600;">S�n�rl� Say�da</p>-->
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
                                                <p><strong>12 + 12</strong> ay kalma s�z�n�ze</p>
                                            </div>
                                        </div>
                                        <p class="detail">80 <span class="icon-turkish-lira"></span> Kontrats�z</p>
                                        <span class="plus">+</span>
                                        <p class="h6"><span class="icon-plus"></span><span>Her Y�ne</span></br><strong>2.000 DK</strong></br><strong>1.000 SMS </strong></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="detail">
                                        <p class="last"><strong>Vodafone'lular ve Sabit Hatlarla S�n�rs�z Konu�ma</strong></p>
                                        <p class="dot">...</p>
                                        <p>3 Ay Hediye <a method="link" class="tealium" href="javascript:void(0);" style="cursor: text;"><img src="dist/img/netflix-logo2.png" alt=""></a> �yeli�i</p>
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
                                                    <p>Ayl�k ek paket <strong>1GB/15TL,</strong> ek paket bitti�inde ise her <strong>500MB/5TL</strong></p>
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
                                                    <p><strong>12 + 12</strong> ay kalma s�z�n�ze</p>
                                                </div>
                                            </div>
                                            <span class="plus">+</span>
                                            <p class="detail">60 <span class="icon-turkish-lira"></span> Kontrats�z</p>
                                            <p class="h6"><span class="icon-plus"></span><span>Her Y�ne</span></br><strong>1.000 DK</strong></br><strong>1.000 SMS </strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail">
                                            <p>
                                                3 ay boyunca </br>Ayl�k <strong>1 GB</strong> <i>+</i> <strong>Netflix</strong>
                                            </p>
                                            <p class="bedel">
                                                <span class="title">Ayl�k</span>
                                                <span class="icon-turkish-lira"></span> <strong>9.90</strong>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a method="link" class="tealium color" href="javascript:void(0);" data-href="#vodafone-red-form">Vodafone Red'li Ol</a>
                                            <a method="link" href="https://www.vodafone.com.tr/MyVodafone/myvodafone.home.php" class="link-scroll tealium">Netflix Paketi Sat�n Al</a>
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
                                            <p>En �ok Satan Tarife</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class="h5">7 GB</p>
                                            <div class="tooltip tooltip1">
                                                <span class="icon-info-circle"></span>
                                                <div class="tooltip-first">
                                                    <p>Ayl�k ek paket <strong>1GB/15TL,</strong> ek paket bitti�inde ise her <strong>500MB/5TL</strong></p>
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
                                                    <p><strong>12 + 12</strong> ay kalma s�z�n�ze</p>
                                                </div>
                                            </div>
                                            <span class="plus">+</span>
                                            <p class="detail">70 <span class="icon-turkish-lira"></span> Kontrats�z</p>
                                            <p class="h6"><span class="icon-plus"></span><span>Her Y�ne</span></br><strong>1.000 DK</strong></br><strong>1.000 SMS </strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail">
                                            <p>
                                                3 ay boyunca </br>Ayl�k <strong>1 GB</strong> <i>+</i> <strong>Netflix</strong>
                                            </p>
                                            <p class="bedel">
                                                <span class="title">Ayl�k</span>
                                                <span class="icon-turkish-lira"></span> <strong>9.90</strong>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a method="link" class="tealium color" href="javascript:void(0);" data-href="#vodafone-red-form">Vodafone Red'li Ol</a>
                                            <a method="link" href="https://www.vodafone.com.tr/MyVodafone/myvodafone.home.php" class="link-scroll tealium">Netflix Paketi Sat�n Al</a>
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
                                                    <p>Ayl�k ek paket <strong>1GB/15TL,</strong> ek paket bitti�inde ise her <strong>500MB/5TL</strong></p>
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
                                                    <p><strong>12 + 12</strong> ay kalma s�z�n�ze</p>
                                                </div>
                                            </div>
                                            <span class="plus">+</span>
                                            <p class="detail">80 <span class="icon-turkish-lira"></span> Kontrats�z</p>
                                            <p class="h6"><span class="icon-plus"></span><span>Her Y�ne</span></br><strong>2.000 DK</strong></br><strong>1.000 SMS </strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail">
                                            <p>
                                                3 ay boyunca </br>Ayl�k <strong>1 GB</strong> <i>+</i> <strong>Netflix</strong>
                                            </p>
                                            <p class="bedel">
                                                <span class="title">Ayl�k</span>
                                                <span class="icon-turkish-lira"></span> <strong>9.90</strong>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a method="link" class="tealium color" href="javascript:void(0);" data-href="#vodafone-red-form">Vodafone Red'li Ol</a>
                                            <a method="link" href="https://www.vodafone.com.tr/MyVodafone/myvodafone.home.php" class="link-scroll tealium">Netflix Paketi Sat�n Al</a>
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
                                                    <p>Ayl�k ek paket <strong>1GB/15TL,</strong> ek paket bitti�inde ise her <strong>500MB/5TL</strong></p>
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
                                                    <p><strong>12 + 12</strong> ay kalma s�z�n�ze</p>
                                                </div>
                                            </div>
                                            <span class="plus">+</span>
                                            <p class="detail">100 <span class="icon-turkish-lira"></span> Kontrats�z</p>
                                            <p class="h6"><span class="icon-plus"></span><span>Her Y�ne</span></br><strong>2.000 DK</strong></br><strong>1.000 SMS </strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail">
                                            <p>
                                                3 ay boyunca </br>Ayl�k <strong>1 GB</strong> <i>+</i> <strong>Netflix</strong>
                                            </p>
                                            <p class="bedel">
                                                <span class="title">Ayl�k</span>
                                                <span class="icon-turkish-lira"></span> <strong>9.90</strong>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a method="link" class="tealium color" href="javascript:void(0);" data-href="#vodafone-red-form">Vodafone Red'li Ol</a>
                                            <a method="link" href="https://www.vodafone.com.tr/MyVodafone/myvodafone.home.php" class="link-scroll tealium">Netflix Paketi Sat�n Al</a>
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
                                                    <p>Ayl�k ek paket <strong>1GB/15TL,</strong> ek paket bitti�inde ise her <strong>500MB/5TL</strong></p>
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
                                                    <p><strong>12 + 12</strong> ay kalma s�z�n�ze</p>
                                                </div>
                                            </div>
                                            <span class="plus">+</span>
                                            <p class="detail">120 <span class="icon-turkish-lira"></span> Kontrats�z</p>
                                            <p class="h6"><span class="icon-plus"></span><span>Her Y�ne</span></br><strong>2.000 DK</strong></br><strong>1.000 SMS </strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail netflix-detail">
                                            <p>3 Ay Hediye <a method="link" class="tealium" href="javascript:void(0);" style="cursor:text;"><img src="dist/img/netflix-logo2.png" alt=""></a> �yeli�i</p>
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
                          <a method="link" target="_blank" class="pop-up-tab tealium" href="dist/Netflix-nasil-aktive-ederim.pdf">Nas�l Aktive Ederim? <span class="plus">+</span></a>
						  <a method="link" target="_blank" class="pop-up-tab tealium" href="dist/Netflix-sifre-degistirme.pdf">Netflix �ifremi Nas�l De�i�tiririm? <span class="plus">+</span></a>
						  <a method="link" class="pop-up-tab tealium" href="dist/netflix-sss.pdf" target="_blank" title="Netflix S�k�a Sorulan Sorular">Netflix S�k�a Sorulan Sorular<span class="plus">+</span></a>
                        </div>
                    </div>
                </div> <!--row-->
            </div> <!--container-->
        </div> <!--content-holder-->
        <div id="netflix-part" class="netflix-part">
            <div class="container">
                <div class="row">
                    <div class="title-side">
                        <p class="h3"><strong>En �yiler</strong></p>
                    </div>
                    <div id="slider-netflix" class="slider-netflix">
                        <a method="link" class="tealium sld-img" target="_blank" href="https://www.youtube.com/watch?v=Lv3W0_gy_Jg">
                            <div class="item">
                                <img src="dist/img/netflix1.jpg" alt="">
                                <img src="dist/img/netflix1m.jpg" class="mobile" alt="">
                                <div class="text-holder">
                                    <p class="h1">Narcos <span></span></p>
                                    <p class="h3"><a method="link" class="tealium fragman" target="_blank" href="https://www.youtube.com/watch?v=Lv3W0_gy_Jg">Fragman� �zle</a></p>
                                </div>
                            </div>
                        </a>
                        <a method="link" class="tealium sld-img" target="_blank" href="https://www.youtube.com/watch?v=WZ0NsJNMREU">
                            <div class="item">
                                <img src="dist/img/netflix2.jpg" alt="">
                                <img src="dist/img/netflix2m.jpg" class="mobile" alt="">
                                <div class="text-holder">
                                    <p class="h1">Stranger Things <span></span></p>
                                    <p class="h3"><a method="link" class="tealium fragman" target="_blank" href="https://www.youtube.com/watch?v=WZ0NsJNMREU">Fragman� �zle</a></p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <p class="watch white">�imdi izle</p>
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
                    <p><strong>Vodafone Red</strong>'le her an, her yerde sevdi�iniz dizi ve filmleri <strong>tek bir uygulama �zerinden</strong> hi� u�ra�madan izleyin.</p>
                    <p class="watch">�imdi izle</p>
                </div>
            </div>
        </div>
        <div id="vodafone-red-form" class="vodafone-red-form">
            <div class="container">
                <div class="row">
                    <div class="title-side">
                        <p class="h3"><strong><span>Vodafone Red'li </span> Olmak �stiyorum</strong></p>
                    </div>
                    <p class="text">Formu doldurun, <strong>�zel ekibimiz size kadar gelsin</strong>, numaran�z de�i�meden <strong>Vodafone Red</strong>'li olun.</p>
                    <iframe src="https://lead.vodafone.com.tr/f/digital-netflix" frameborder="0"></iframe>
                </div>
            </div>
        </div>
        <footer id="footer" class="footer">
            <div class="container">
              <div class="row">
                  <ul>
                      <li class="title"><p>Hakk�m�zda</p><span class="plus active">+</span><span class="minus">-</span></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/VodafoneHakkinda/insan-kaynaklari.php">�nsan Kaynaklar�</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://medyamerkezi.vodafone.com.tr/basin-bultenleri">Bas�n Odas�</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/VodafoneHakkinda/zararli-yazilimlar.php">Duyurular</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/VodafoneHakkinda/reklamlar.php ">Reklam Filmleri</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Vodafone-Turkiye-Ile-Besiktas-Arasinda-Dev-Sponsorluk-Imzasi.php ">Sponsorluklar</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.turkiyevodafonevakfi.org.tr/ ">Vodafone T�rkiye Vakf�</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com/content/index.html ">Vodafone Group</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/VodafoneHakkinda/gizlilik_politikasi.php?default_id=gizlilikpolitikasi">Hukuki �artlar ve </br>Gizlilik Politikas�</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/bilgitoplumuhizmetleri/vodafone-telekomunikasyon-anonim-sirketi.html ">Bilgi Toplumu </br>Hizmetleri</a></li>
                  </ul>
                  <ul>
                      <li class="title"><p>Destek</p><span class="plus active">+</span><span class="minus">-</span></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/yardim/tr/ ">Yard�m</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/yardim/tr/kategori.php/bireysel/vodafone-red/53 ">S�k�a Sorulan Sorular</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/YardimDestek/bize_ulasin.php ">Bize Ula��n</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://forum.vodafone.com.tr/ ">Vodafone Forum</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://telefondestek.vodafone.com.tr/web/ ">Cihaz Ke�fi</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="https://www.vodafone.com.tr/MyVodafone/myvodafone.home.php ">OnlineSelf Servis</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Red/red-ozel-satis-ekibi.php ">Vodafone Red �zel</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Red/red-ozel-satis-ekibi.php ">Sat�� Ekibi </a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/YardimDestek/bireysel-abonelik.php ">Vodafone Aboneli�i</a></li>
                  </ul>
                  <ul>
                      <li class="title"><p>Online Sat��</p><span class="plus active">+</span><span class="minus">-</span></li>
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
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Tarife-Karsilastirma/index.php#/terms">Tarifeleri Kar��la�t�r</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Tarifeler/Faturali-Tarifeler.php">Fatural� Tarifeler</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Tarifeler/Faturasiz-Tarifeler.php">Faturas�z Tarifeler</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://telefondestek.vodafone.com.tr/web/">T�m Cihazlar</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://telefondestek.vodafone.com.tr/web/">Cihazlar� Dene</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Tarifeler/Altin-Tarifeler.php#paketler">Faturas�z Paketler</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Tarifeler/faturalipaketler.php">Fatural� Paketler</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Internet/mobil-internet-paketleri.php">S�per �nternet Paketleri</a></li>

                  </ul>
                  <ul>
                      <li class="title"><p>Servisler</p><span class="plus active">+</span><span class="minus">-</span></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Internet/vodafone-4-5g.php">Vodafone 4.5G</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="https://www.vodafone.com.tr/Internet/arayana-dinlet.php">Arayana Dinlet</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Servisler/Vodafone-TV.php">Vodafone TV</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Internet/Mobil-Yardim.php">Mobil</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Kampanyalar/Dusler-Kulubu.php">Yard�m Engelleri A�an Servisler</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/cepbagis.php">Cep Ba���</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Servisler/CepNakit.php">Cep Nakit</a></li>
                  </ul>
                  <ul>
                      <li class="title"><p>Vodafone Siteleri</p><span class="plus active">+</span><span class="minus">-</span></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafonefreezone.com/">Vodafone Freezone</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/Tarifeler/AkilKupuKamuTarifeler.php">Kamulara �zel Ak�l K�p�</a></li>
                      <li><a method="link" class="tealium" href="tarifeler.php">Tarifeler</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafonecepsaglik.com.tr/">Vodafone Cep Sa�l�k</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.vodafone.com.tr/en/roam-with-vodafone.php">Visting Turkey</a></li>
                      <li><a method="link" class="tealium" target="_blank" href="http://www.ciftcikulubu.com/">Vodafone �ift�i Kul�b�</a></li>
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
                        <span class="mobile">@ 2017 Vodafone T�rkiye</span>
                        <div class="back-top">
                            <div id="back-top" class="icon"><span></span></div>
                                <p>Ba�a D�n</p>
                                <span>@ 2017 Vodafone T�rkiye</span>
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
                        <p id="back-top2"><strong><span class="icon-chevron-thin-right"></span></strong> Ba�a D�n</p>
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
                            1-GENEL A�IKLAMALAR 
                        </p>
                    </div>
                    <p>Bu H�k�m ve Ko�ullar, (ister web'de, isterse de WAP ile ya da PDA'de eri�im sa�layaca��n�z) bu internet sitesinde ("Site") sizlere sunulacak "��erik" ve "Hizmet"lere (bundan sonra tek ba��na "Hizmet" ve birlikte "Hizmet"ler" olarak an�lacakt�r) eri�iminize ve bu "��erik" ve "Hizmet"leri kullan�m�n�za uygulanacak genel h�k�m ve ko�ullard�r. Bu Site ve "Hizmet"ler Vodafone Telekom�nikasyon A.�. (Vodafone) (bundan sonra "biz," "bizim", "bize" ya da Vodafone olarak an�lacakt�r) taraf�ndan ya da ad�na i�letilmektedir. "Siz" ve "sizin" s�zc�kleri, size yani "Hizmet"in kullan�c�s�na, at�fta bulunmaktad�r. </p>
                    <p>L�tfen bu h�k�m ve ko�ullar� dikkatlice okuyunuz. </p>
                    
                    <div class="title-side">
                        <p class="h3">
                            2-B�Z�MLE OLAN S�ZLE�MEN�Z
                        </p>
                    </div>
                    <p>Bizimle olan s�zle�meniz a�a��daki i�lemlerden hangisi daha �nce ger�ekle�irse, bu tarihte ba�layacakt�r:</p>  
                    <p>Kay�t s�recimizi tamamlaman�z ve bu H�k�m ve Ko�ullar� okuyup Kabul etti�inizi teyit etmeniz; ya da Kay�t gerektirmeyen "Hizmet"lerimizden birini g�r�nt�lemeniz, bunlara eri�im sa�laman�z ya da kullanman�z. </p>
                    <p>Bu H�k�m ve Ko�ullar� print ederek bir kopyas�n� kendi kay�tlar�n�z i�in saklaman�z� tavsiye ederiz. Bu H�k�m ve Ko�ullar t�m ""Hizmet"ler" i�in ge�erlidir. </p>
                    <p>Bu H�k�m ve Ko�ullara ilaveten, bu "Hizmet"e kay�t olurken kabul etmeniz gerekecek tek tek "Hizmet"lere uygulanacak ek h�k�m ve ko�ullar da bulunabilir. </p>
                    <div class="title-side">
                        <p class="h3">
                            3-GENEL OLARAK
                        </p>
                    </div>
                    <p>Bu H�k�m ve Ko�ullardan kaynaklanan haklar�m�z� kaybetmeksizin ileride kullanmak i�in erteleyebiliriz. </br>
                    Size ihbarda bulunmadan, y�k�ml�l�klerimizin herhangi bir k�sm�n� alt ta�eronlara ifa ettirebilece�imizi ya da bu H�k�m ve Ko�ullar� veya haklar�m�z�n ya da y�k�ml�l�klerimizin bir k�sm�n� temlik edebilece�imizi kabul ediyorsunuz. </br>
                    Bu H�k�m ve Ko�ullardan kaynaklanan haklar�n�z� ya da y�k�ml�l�klerinizi temlik etmemeyi, satmamay� ya da ba�ka herhangi bir �ekilde devretmemeyi taahh�t ediyorsunuz. </br>
                    Kontrolum�z d���nda ger�ekle�en sebeplerden dolay� bu H�k�m ve Ko�ullar�n ihlali halinde size kar�� sorumlu olmayaca��z. </br>
                    Bu H�k�mler ya da "Hizmet"in kullan�m� sonucunda, sizin ve bizim aram�zda herhangi bir ortak giri�imin, ortakl���n, istihdam ya da vekillik ili�kisinin kurulmad���n� kabul ediyorsunuz. </br>
                    Bu H�k�m ve Ko�ullar (ve uygulanabilirse, bir "Hizmet"e kay�t olurken kay�t s�recinin bir par�as� olarak Kabul etti�iniz ilgili ek h�k�mler ve Sa�lay�c�'n�n h�k�m ve ko�ullar�) "Hizmet"i kullan�m�n�z konusunda siz ve biz aras�ndaki anla�man�n tamam�n� te�kil eder ve "Hizmet" ile ilgili olarak yap�lan t�m �nceki s�zle�melerin yerine ge�er. </br>
                    Bu H�k�m ve Ko�ullardan herhangi bir k�sm�n�n hukuken ge�ersiz ya da h�k�ms�z hale gelmesi halinde, ge�ersiz ya da h�k�ms�z maddenin yerine orijinal amaca en yak�n ge�erli bir madde konulacakt�r ve H�k�m ve Ko�ullar�n geri kalan k�sm� aynen y�r�rl�kte kalmaya devam edecektir. </br>
                    Vodafone, y�r�rl�kteki mevzuat�, y�netmelikleri, hukuki s�reci ya da devlet kurumlar�n�n taleplerini kar��lamak i�in Vodafone'nun gerekli g�rece�i her t�rl� bilgiyi if�a etme hakk�n� her zaman sakl� tutar. </br>
                    Vodafone �ebekesinde kay�tl� cep telefonunuz var ise, "Hizmet"i kullan�rken Vodafone airtime Hizmetinin genel h�k�m ve ko�ullar� (ya da Hizmet sa�lay�c�n�z�n h�k�m ve ko�ullar�) ve (varsa) Vodafone �n-�demeli Hizmetinin h�k�m ve ko�ullar� uygulanacakt�r. </p>
                    
                    <div class="title-side">
                        <p class="h3">
                            4-YARDIM
                        </p>
                    </div>
                    <p>Bu "Hizmet" ile ilgili herhangi bir sorunuz ya da sorununuz olursa, Vodafone m��terisi iseniz M��teri "Hizmet"leri hatt� olan 0 (542) 542 00 00'� ya da di�er telefonlardan 0212 448 70 00 numaras�n� (�cretli) aray�n�z ya da vodafone.com.tr adresinden "Yard�m ve Destek" ve sonra "Bize Ula��n" k�s�mlar�na t�klamak ve ilgili formu doldurmak suretiyle bize mail atabilirsiniz. </p>  
                    <div class="title-side">
                        <p class="h3">
                            5-KULLANICI ADI VE ��FRE
                        </p>
                    </div>
                    <p>"Hizmet"e kay�t olurken doldurulmas� zorunlu tutulan alanlarda do�ru, g�ncel ve tam bilgi vermeyi Kabul ediyorsunuz. Kay�d� m�teakip, "Hizmet"e ve kay�t gerektiren sayfalara eri�im sa�layabilmeniz i�in taraf�n�za bir �ifre verilecektir. �ifrenizle "Hizmet"e eri�im sa�laman�z�n sonucunda ger�ekle�en t�m aksiyonlardan siz sorumlusunuz. �ifrenizin ve "Hizmet"e eri�imde bulunurken kulland���n�z cihaz�n g�venli�ini temin etmek sizin sorumlulu�unuzdur. Bu H�k�m ve Ko�ullar�n �ifrenizi if�a etti�iniz herhangi biri taraf�ndan ihlali, sizin taraf�n�zdan yap�lan bir ihlal olarak alg�lanacakt�r. </br>
                    �ifrenizin yetkisiz bir kullan�c� taraf�ndan ��renilmesi durumunda, bizi bu hata ya da yanl��l�ktan derhal haberdar edersiniz. M�nhas�r ve mutlak takdir yetkimiz ile, �ifrenizi ve kullan�c� ad�n�z� diledi�imiz zaman de�i�tirme hakk�n� sakl� tutar�z.</br>
                    Belli "Hizmet"ler i�in, bir kullan�c� ad� ve �ifre se�meniz gerekebilir. Her t�rl� "Hizmet" i�in: </br></br>

                    Se�ti�iniz kullan�c� ad�, m�stehcen, tehdit edici, �rk��, b�l�c�, k���k d���r�c�, milli g�venli�e ayk�r�, devletin �lkesi ve milletiyle b�l�nmez b�t�nl���ne ayk�r� ve ���nc� ki�ileri tahkir edici nitelikte olamaz ya da herhangi bir ���nc� ki�inin fikri m�lkiyet ya da m�seccel haklar�n� ihlal edemez; ve </br></br>

                    Kendi m�nhas�r ve mutlak takdirimizle taraf�n�zca se�ilen kullan�c� ad�n�n uygunsuz oldu�unu d���nmemiz halinde, taraf�n�za bildirimde bulunarak ya da bulunmadan bu kullan�c� ismini kullanman�z� reddetme ve engelleme hakk�m�z sakl�d�r. </br>
                    Zaman zaman �ifrenizi ve kullan�c� ad�n�z� de�i�tirebiliriz ve bize sa�lad���n�z irtibat bilgilerini kullanarak her t�rl� de�i�ikli�i size bildiririz.  </p>  
                    
                    <div class="title-side">
                        <p class="h3">
                            6-SERV�SLER� KULLANIMINIZ
                        </p>
                    </div>
                    <p>Hizmetlerde ("��erik") yer alan ya da Hizmetler arac�l���yla eri�ilebilen (yaz�l�m, veri, uygulama, bilgi, metin, foto�raf, m�zik, ses, g�r�nt�, grafik, logo, sembol, �izim ve di�er materyal ya da hareketli imgeler dahil, ancak bunlarla s�n�rl� olmamak �zere) her t�rl� materyal ya da "��erik" ile ilgili t�m telif haklar�, ticari markalar, patentler ve di�er fikri m�lkiyet haklar� ya bizim m�lkiyetimizdedir ya da bunlar�n lisans�/kullan�m hakk� Hizmetlerin bir par�as� olarak hak sahibi ya da sahipleri taraf�ndan bize devredilmi�/verilmi�tir. "��erik" ile ba�ka herhangi bir �ey yapmak istemeniz halinde, �ncelikle bu materyale ait haklar�n sahibinin yaz�l� izninizi alman�z gerekir. T�m haklar a��k�a sakl�d�r. </br></br>

                    Sadece �zel ve ticari olmayan bir ama�la ve bu H�k�m ve Ko�ullara uyman�za tabi olarak, size "Hizmet"i ve ��eri�i bilgisayar�n�z, cep telefon cihaz�n�z ya da di�er eri�im ara�lar�yla g�r�nt�lemeniz ve kullanman�z amac�yla, m�nhas�r olmayan ve devredilemeyen bir hak veriyoruz. Kendi bilgisayar�n�z, cep telefon cihaz�n�z ya da di�er eri�im cihazlar�n�zda ki�isel kullan�m i�in ve "Hizmet"in ya da ��eri�in usul�nce kullan�m� i�in gerekti�i �l��de ve kopyalamaya telif hakk� sahibinin vermesi ko�ulu ile, de�i�tirmeden ��eri�i kopyalayabilirsiniz.</br></br>

                    Herhangi bir ��eri�i (t�m�yle ya da k�smen):</br>
                    A��k�a izin verilmedik�e ���nc� �ah�slara devredemez ya da ���nc� �ah�slar�n eri�imine izin veremezsiniz; ya da 
                    De�i�tiremez, i�leyemez, yeniden formatlayamaz ya da ba�ka herhangi bir �ekilde adapte edemezsiniz.</br>
                    "Site" ve sitede sunulan Hizmet, Vodafone marka b�t�nl��� ile iltibas yaratacak �ekilde ve/veya birebir kullan�larak ya da adapte edilerek ve burada say�lan k�s�tlamalarla s�n�rl� olmaks�z�n kullan�lamaz. Hizmetleri bu �ekilde kullanmak ya da ba�kaca bir Hizmet olu�turmak yasakt�r. 
                    </p>  
                    <div class="title-side">
                        <p class="h3">
                            8-ONLINE SELF SERV�S
                        </p>
                    </div>
                    <p>Vodafone bireysel abonesiyseniz, Siteden "Online Self Servis" Hizmetine kay�t olabilirsiniz. </br>
                    Vodafone kurumsal abonesiyseniz, Vodafone abonelik i�lemlerinizi kurumsal hesab�m� kullanarak ger�ekle�tirebilirsiniz.</br>
                    Kaydolmu� oldu�unuz Hizmetleri g�r�nt�leyebilecek, yeni Hizmetlere kay�t olabilecek ya da kayd�n�z� iptal edebilecek ve ki�isel bilgilerinizi g�ncelleyebileceksiniz.</br>
                    Kurumsal Hesap arac�l���yla, kurumsal m��terilerin �al��anlar� taraf�ndan kurum ad�na yap�lacak i�lemlere ait yetkiler, kullan�c� stat�s� ve �r�n kullan�m�na paralel de�i�iklik g�sterir.</p>
                    
                    <div class="title-side">
                        <p class="h3">
                           8-B�ZE SORUN 
                        </p>
                    </div>
                    <p>Vodafone'un Bize Sorun uygulamas� ile sorular�n�z� web sitesi �zerinden iletebilir ve anl�k olarak tarife ve kampanyalar�m�za ili�kin bilgi alabilirsiniz.Tarife ve kampanyalar�m�za ili�kin sorular�n�z anl�k yan�tlanacak olup, verilecek bilgiler web sitesi i�eri�inde de yer almaktad�r. Hatt�n�z ile ilgili yard�m talepleriniz veya sorular�n�z i�in online self servisi kullanabilir veya M��teri Hizmetleri birimimizle ba�lant� kurabilirsiniz. </br></br>

                    Web sitesi �zerinden yap�lacak g�r��melerin m��teri memnuniyeti sa�lamak amac�yla kaydedilece�ini, Bize Sorun uygulamas�n� kullan�rken uygunsuz, veya su� unsuru i�eren ifadeler kullanmaman�z� �nemle hat�rlat�r�z </p> 


                    <div class="title-side">
                        <p class="h3">
                           9-SERV�S VE/VEYA ��ER�KLE �LG�L� YASAKLI KULLANIMLAR
                        </p>
                    </div>
                    <p>Siz ve Hizmete eri�im sa�lamak suretiyle, Hizmet ve ��eri�i kullanma hakk� verdi�iniz ki�iler, a�a��daki i�lemleri yerine getiremezler: </br>
                    ��eri�i ve/veya Hizmeti ya da bunlar�n herhangi bir k�sm�n� bu S�zle�me'de a��klanandan farkl� bir �ekilde kopyalama, if�a etme, de�i�tirme, i�leme, yeniden formatlama, g�r�nt�leme, da��tma, lisans verme, yayma, satma, yerine getirme, transfer etme, bunlara hiperlink sa�lama, tersine m�hendislik i�lemi yapma ya da par�alara ay�rma ya da ��eri�i ve/veya Hizmetleri ya da herhangi bir par�as�n� bu S�zle�me'de belirtilenden farkl� bir �ekilde kulland�rma</br>
                    "��erik" ve/veya Hizmetten hiperlinkler (deep-linkler dahil) sa�lama ya da yaratma; 
                    Vodafone ana sayfas�n� kopyalama ya da Hizmetinin ya da ��eri�in herhangi bir k�sm�n�n �evresinde ayr� bir �er�eve olu�turma ("�er�eveleme" olarak biliniyor); </br>
                    Hizmet ya da ��eri�i herhangi bir ticari ama�la kullanma;</br>
                    Hizmeti ve Hizmet arac�l���yla ula��lan herhangi bir bilgiyi yasad��� ama�larla kullanma;</br>
                    M�stehcen, pornografik, tehdit edici, �rk��, b�l�c�, k���k d���r�c�, milli g�venli�e ayk�r�, devletin �lkesi ve milletiyle b�l�nmez b�t�nl���ne ayk�r�, ���nc� ki�ileri tahkir edici, te�hirci, uygunsuz, g�ven sars�c� ya da ba�ka herhangi bir surette yasa d��� olan herhangi bir mesaj, bilgi ya da resmi yay�nlamak, y�klemek ya da iletmek i�in Hizmeti kullanma; </br>
                    Gizlilik haklar� dahil, ba�kalar�n�n haklar�n� taciz etme, tehdit etme, bir ba�kas�n� taklit etme ya da ba�ka bir �ekilde ihlal etme; </br>
                    Di�er kullan�c�lar�n Hizmeti ya da ba�ka herhangi bir websitesini kullanmas�n� ve bunlardan faydalanmas�n� engellemek amac�yla ba�ka bilgisayarlar� hack'leme, a��r� trafik taleplerinde bulunma, probe ya da port scan yapmak, vir�s, mail bomb, chain letters ya da piramit �emalar� bula�t�rma; </br>
                    Mevzuata ayk�r� �ekilde di�er ki�ilerin ki�isel bilgilerini toplama ve i�leme; </br>
                    �r�n ya da Hizmet sat��� i�in reklam yapma ya da teklifte bulunma; </br>
                    Telif hakk� dahil ba�kalar�n�n fikri m�lkiyet haklar�n� ihlal etme; </br>
                    Hizmetin kullan�c�lar� hakk�nda bilgi toplamak ya da yetkisiz ya da izinsiz olarak junk ya da bulk ("spam" olarak da bilinen) e-mail g�ndermek ya da ba�ka bir �ekilde da��tmak amac�yla Hizmeti kullanma;</br>
                    Kendi m�nhas�r ve mutlak takdirimize g�re uygunsuz ya da kabul edilemez oldu�unu ya da marka ve itibar�m�za zarar verme olas�l��� bulundu�unu d���nd���m�z bir �ekilde, Hizmeti ya da ��eri�i kullanma.</br> 
                    Ba�ka birinin Hizmete ya da ��eri�e eri�iminizi kullanmas�ndan kaynaklanm�� olsa bile, Hizmetin ya da ��eri�in k�t�ye kullan�m�ndan siz sorumlu olacaks�n�z. Sizin ya da ���nc� ki�ilerin Hizmete ili�kin olarak koydu�u ya da koymaya �al��t��� herhangi bir materyali silme, ��karma, de�i�tirme ya da reddetme, Hizmete eri�iminizi bloke etme ya da durdurma ve bu H�k�m ve Ko�ullar�n herhangi bir �ekilde ihlalini engellemek ya da gidermek i�in takdiri bize ait olmak �zere gerekli g�rd���m�z di�er her t�rl� aksiyonu alma hakk�m�z sakl�d�r. "��erik"te ya da Hizmette bu H�k�m ve Ko�ullar� ihlal edece�ini makul surette d���nd���n�z herhangi bir "��erik" ya da ���nc� ki�i materyalini bize bildirmek isterseniz, l�tfen bildiriniz.</br>
                    (Gizlilik Politikam�za uygun olarak) herhangi bir soru�turma ya da �ebeke g�venli�i ihlali konusunda yasalar kapsam�nda ve di�er yetkili ilgili resmi kurumlar ile i�birli�i yap�lacak ve yasalar kapsam�nda ki�isel bilgileriniz resmi kurumlar ve/veya adli makamlarla payla��labilecektir. </p>         



                    <div class="title-side">
                        <p class="h3">
                           10-K���SEL B�LG�LER�N�Z
                        </p>
                    </div>
                    <p>Vodafone i�in ki�isel bilgilerin gizlili�i konusu �ok �nemlidir. Bireysel/kurumsal ki�isel bilgilerinizin g�venli�i, genel h�k�mler ve Telekom�nikasyon Mevzuat� kapsam�nda Vodafone taraf�ndan koruma alt�na al�nm��t�r. Ki�isel bilgiler yasalara uygun olarak verilmi� Mahkeme/Savc�l�k kararlar� ve ki�inin a��k yaz�l� onay� d���nda hi�bir �ekilde ���nc� ki�iler taraf�ndan kullan�lamayacak, kopyalanmayacak, i�lenemeyecek, da��t�lamayacak ve yay�nlanmayacakt�r.</br>
                    Ki�isel bilgi kullan�m�m�z, bu S�zle�me'nin bir par�as�n� olu�turan Gizlilik Politikas�na tabi olacakt�r. L�TFEN G�ZL�L�K POL�T�KASINI D�KKATL�CE OKUYUNUZ. Bu politika, ki�isel bilgileri nas�l kullanaca��m�z ve belli ko�ullarda kimlere verece�imiz konusu da dahil, ki�isel bilgileriniz ile ilgili olarak sizlerin haklar�n� ve bizlerin y�k�ml�l�klerini ele almaktad�r. </p>

                    <div class="title-side">
                        <p class="h3">
                           11-��ER�K Y�KLEME ve SORUMLULUK 
                        </p>
                    </div>
                    <p>Herhangi bir Hizmetimiz cep telefonunuza, ki�isel bilgisayar�n�za, ki�isel dijital asistan�n�za ya da di�er eri�im ara�lar�na, "��erik" y�klemenize imkan sa�l�yorsa, a�a��daki ko�ullara uyman�z gerekir.
                    Bu ��eri�i eri�im cihaz�n�za kaydedebilirsiniz ancak (a��k�a izin verilmedik�e) bu ��eri�i ba�ka bir yere kaydetmeniz, ��eri�i de�i�tirmeniz, kopyalaman�z, da��tman�z, i�lemeniz bir ya da daha fazla ���nc� ki�iye iletmeniz ya da ���nc� ki�ilerin ��eri�e eri�imine izin vermeniz t�m�yle yasakt�r. </br>
                    Se�mi� oldu�unuz ��eri�i alabilmeniz i�in eri�im cihaz�n�zdaki ki�isel ayarlar� uygun bir �ekilde ayarlaman�z gerekmektedir. Hizmetlere kay�t olmak suretiyle, eri�im cihaz�n�z�n ilgili ��eri�in indirilmesini destekledi�ini teyit ediyorsunuz. E�er bundan emin de�ilseniz, Sitedeki bilgileri kontrol etmeli, cihaz�n�z�n el kitap����n�za bakmal� ya da eri�im cihaz�n�z�n imalat��s� ile irtibat kurmal�s�n�z. Uygun olmayan bir eri�im cihaz�na "��erik" indirmeye �al��man�z halinde bu durumdan sorumlu olamay�z ve sonuca bak�lmaks�z�n, gerekli �cretin taraf�n�zca �denmesi gerekir. </br>
                    K�s�tlama olmaks�z�n, hi�bir surette a�a��daki sebeplerin biri ya da daha fazlas�ndan kaynaklanan, ��eri�in teslimat�nda meydana gelen aksakl�k, hata ya da gecikmelerden sorumlu olmayaca��z:</br>
                    (a) "��erik" sipari�i vermeden �nce yanl�� telefon numaras� ya da ba�ka yanl�� bilgi vermeniz;</br>
                    (b) mesaj gelen kutunuzun dolu olmas� ve ekstra mesaj alamaman�z;</br>
                    (c) telefonunuzun kapal� olmas�, herhangi bir sebeple ula��lamaz olmas�; ya da
                    (d) makul kontrol�m�z d���nda ba�ka herhangi bir sebep. </br></br>
                    "Site" de yer alan Hizmetlerimizi kullan�rken, sorumluluk tamamen size aittir. Vodafone; sitede ar�za, hata, vir�s ya da bilgisayar�n�z� etkileyebilecek hatalar�n olmad���n�/olmayaca��n� hi�bir zaman garanti edememektedir. Vodafone, internet �zerinden g�nderilen e-postalar�n, herhangi bir durdurma, izleme, kay�p ya da de�i�meye maruz kalabilece�inden dolay� tamamen g�venli oldu�u konusunda size garanti veremez. G�nderilen bu e-posta mesajlar�ndan ya da Vodafone'a g�nderdi�iniz veya taraf�m�zdan size iletilen e-posta mesajlardan kaynaklanacak herhangi bir zarardan size veya herhangi birine kar�� sorumluluk kabul edilmez.</br>
                    Size daha iyi bir hizmet ve daha etkili bir "Site" sunmak amac�yla, browser'�n�zla etkile�imimizin par�as� olarak "cookies" kullan�lmaktad�r. "Cookie", ziyaret�inin, web sitesini ziyareti s�ras�nda bilgisayar�na g�nderilen bilgidir. Cookie'ler, bir ziyaret�inin Sitede izledi�i navigasyonu takip edebilmemize olanak vermektedir. Bir ki�i, Bize online olarak ki�isel bilgilerini isteyerek vermedi�i s�rece taraf�m�zca tan�namaz. Bu bilgiler, ba��ms�z kurulu�larla pazarlama yapmalar� amac�yla payla��lamaz veya sat�lamaz. </p>

                    <div class="title-side">
                        <p class="h3">
                           12-G�VENL�K 
                        </p>
                    </div>
                    <p>Bireysel/kurumsal abonelik i�lemleriniz i�in belirledi�iniz �ifrenizi g�vende ve gizli tutmak i�in azami dikkati g�steriniz ve yetkisiz kullan�mlar� engellemek amac�yla gerekli �nlemleri mutlaka al�n�z. �ifrenizi bir yere not ederek, Vodafone personeli dahil olmak �zere ���nc� bir ki�iye s�yleyerek ve/veya ���nc� ki�iler taraf�ndan anla��lmas�na yol a�acak �ekilde bir yere kaydederek ya da "Site"ye giri� yapt�ktan sonra bilgisayar ekran�n� g�zetimsiz b�rakarak if�a etmeyin. Do�um tarihi, y�ld�n�mleri, telefon numaras� gibi kolay tahmin edilebilecek �ifreler kullanmay�n�z. "Online Self Servis KULLANICI S�ZLE�MES�"ni ("S�zle�me") onaylayarak "Site"ye �ye oldu�unuzdan ayr�ca "S�zle�me" h�k�mleri aynen ge�erlidir.</br>
                    "Site" �zerinden ad�n�za herhangi bir yetkisiz giri�in olmas�, ��phelendi�iniz veya bilginiz dahilinde yetkisiz bir emrin verilmesi veya birisinin �ifrenizi bildi�inden ��phelenmeniz durumunu taraf�m�za hemen bildirmelisiniz. Bunun i�in Vodafone M��teri "Hizmet"lerini arayabilirsiniz. Bu tip durumlarda hemen �ifrenizi de�i�tirmelisiniz. Herhangi bir kayb�n telafi edilmesine �al���l�rken ilgili bankalar ve emniyet birimlerinin yard�m�n�za ihtiyac� olabilecektir. Bu nedenle ve kay�plar�n telafi edilmesi veya �nlenmesine yard�mc� olaca��na inand���m�z durumlarda emniyet birimlerine veya ilgili ���nc� ki�ilere, ki�isel bilgileriniz hakk�nda bilgi verilebilecektir. </p>      

                    <div class="title-side">
                        <p class="h3">
                           13-F�KR� M�LK�YET
                        </p>
                    </div>
                    <p>"Site"de bulunan sayfa ekranlar�, bilgi, her t�rl� "��erik"le, tema ve materyallerin ve bunlar�n d�zenlenmesi konusundaki telif haklar�, Vodafone'a ve/veya Vodafone ile s�zle�mesi olan ���nc� ki�ilere aittir. "Site"nin i�erdi�i bilgi ve materyallere dair t�m telif haklar�, tescilli marka, patent ve/veya di�er t�m fikri ve s�nai m�lkiyet haklar� Vodafone ad�na sakl�d�r. Bu ba�lamda, hi�bir a��k veya imal�, tam ya da basit ruhsat-lisans verilmemektedir.</br>
                    �r�n ve "Hizmet"lerimizi kullan�rken veya ki�isel bilginiz i�in "Site"deki dosyalar� basabilir, kopyalayabilir, indirebilir veya ge�ici olarak saklayabilirsiniz. Ancak "Site"deki hi�bir �ey de�i�tirilemez. Aksi hal fikri ve s�nai m�lkiyet mevzuat�na g�re hukuki ve cezai i�lem gerektirecektir. Vodafone'nun yaz�l� izni al�nmad��� s�rece, "Site"nin ba�ka �ekillerdeki kullan�m� yasakt�r. Hi� kimse, �nceden Vodafone'nun yaz�l� iznini almad�k�a, "Site"nin belli bir k�sm�n� ba�ka bir web sitesinde kullanamaz veya ba�ka bir web sitesine ba�lant� kuramaz. </br>
                    Vodafone ve Vodafone logosu ile markala�t�r�lm�� hizmet ve �r�nler bir b�t�n olarak, Vodafone Telekom�nikasyon A.�.'nin tescilli markas� olup, Vodafone'a ait t�m haklar Vodafone Telekom�nikasyon A.�.'de sakl�d�r. Yukar�da belirtilen kapsamda ve belirtilen hallerin d���nda, Vodafone tescilli markas�, logo veya marka ad�, izinsiz kullan�lamaz veya �o�alt�lamayaca�� gibi, alan ad� ve benzeri uzant�l� alan ve alt alan adlar�, hi�bir �ekilde kullan�lamaz.  </p>      

                    <div class="title-side">
                        <p class="h3">
                           14-"S�TE"N�N KULLANIMI
                        </p>
                    </div>
                    <p>Vodafone i�in ki�isel bilgilerin gizlili�i konusu �ok �nemlidir. Bireysel/kurumsal ki�isel bilgilerinizin g�venli�i, genel h�k�mler ve Telekom�nikasyon Mevzuat� kapsam�nda Vodafone taraf�ndan koruma alt�na al�nm��t�r. Ki�isel bilgiler yasalara uygun olarak verilmi� Mahkeme/Savc�l�k kararlar� ve ki�inin a��k yaz�l� onay� d���nda hi�bir �ekilde ���nc� ki�iler taraf�ndan kullan�lamayacak, kopyalanmayacak, i�lenemeyecek, da��t�lamayacak ve yay�nlanmayacakt�r.</br>
                    Ki�isel bilgi kullan�m�m�z, bu S�zle�me'nin bir par�as�n� olu�turan Gizlilik Politikas�na tabi olacakt�r. L�TFEN G�ZL�L�K POL�T�KASINI D�KKATL�CE OKUYUNUZ. Bu politika, ki�isel bilgileri nas�l kullanaca��m�z ve belli ko�ullarda kimlere verece�imiz konusu da dahil, ki�isel bilgileriniz ile ilgili olarak sizlerin haklar�n� ve bizlerin y�k�ml�l�klerini ele almaktad�r. </p>      

                    <div class="title-side">
                        <p class="h3">
                           10-K���SEL B�LG�LER�N�Z
                        </p>
                    </div>
                    <p>�imdilik kayd�yla "Site"nin kullan�m�ndan belirli bir �cret talep edilmemektedir. Ancak ilerde Vodafone'nun bunu yapmak hakk� sakl� tutulmu�tur. Vodafone'nun, abonelik ile ilgili bireysel/kurumsal i� ve i�lemlerini "Site" �zerinden yapmak amac�yla belirleyebilece�i makul �creti �demeyi �imdiden kabul ve beyan etmektesiniz. Bununla birlikte, bu tarz bir �cretlendirme yap�lmadan ve Vodafone'a herhangi bir ihbarda bulunman�zdan �nce posta, e-posta, k�sa mesaj veya di�er yollardan taraf�n�za bu de�i�iklikle ilgili bilgi verilecektir. Bildirimi takiben, hizmeti kullanmaya devam etmeniz, teklif edilen �cret de�i�ikli�ini kabul etti�iniz anlam�na gelecektir. </p>      

                    <div class="title-side">
                        <p class="h3">
                           15-���NC� �AHIS S�TELER�, Y�K�ML�L�KLER VE YASAL UYARI
                        </p>
                    </div>
                    <p>Hizmet vas�tas�yla iletilen ya da eri�ilen ���nc� �ah�slara ait i�eri�in g�venli�i ya da konusu �zerine kontrol g�c�m�z�n olamayaca��n� kabul ediyorsunuz ve yasad��� ya da hukuka ayk�r� i�eri�in iletiminden ya da al�nmas�ndan hi�bir surette sorumlu de�iliz. 5651 Say�l� Yasan�n 4.maddesi gere�ince de i�erik sa�lay�c�, ba�lant� sa�lad��� ba�kas�na ait i�eriklerden sorumlu de�ildir. Hizmetler, di�er websitelerine, kaynaklara ve/veya ileti�im �ebekelerine ba�lanmak i�in taraf�n�zca kullan�labilir. Bu ���nc� ki�ilere ait sitelerin i�eri�inden ya da Hizmetlerinden hi�bir surette sorumlu de�iliz. �leti�imlerinizin g�venli�i temin etmek i�in elimizden gelen �abay� g�sterece�iz; ancak ileti�imleriniz, kontrol�m�z alt�nda olmayan ���nc� ki�ilere ait �ebekelerden/hatlardan ge�mektedir. �nternet g�venli bir ortam de�ildir. �stenmeyen programlar ya da materyaller, bilginiz olmadan y�klenebilir ve bu suretle, yetkisi olmayan ki�iler, bilgisayar�n�za ya da cep telefon cihaz�n�zda, PDA ya da benzeri cihazlar�n�zdaki sakl� bilgilere eri�im sa�layabilir. Bu programlar, b�y�k bir ihtimalle bilginiz dahilinde olmadan, yetki vermedi�iniz i�lemleri yapabilir. "Site" �zerindeki ba�ka yerlere sa�lad���m�z hiperlink, sadece bilgilendirme ama�l�d�r. Di�er web siteleri veya sayfalara giden ba�lant�lar� takip etmenin riski taraf�n�za ait olup bu ba�lant� sebebiyle olu�an zararlardan Vodafone asla sorumluluk veya y�k�ml�l�k kabul etmez.</br> 
                    Y�klenebilir yaz�l�m sitelerine ba�lant�lar oldu�u takdirde, bunlar sadece kullan�m kolayl��� sa�lamak i�indir. </br>Interneti ve/veya Hizmet taraf�ndan eri�im sa�lanan ���nc� �ah�slara ait websitelerini ya da i�eri�i kullanman�zdan kaynaklanan her t�rl� kay�p ya da zarardan dolay� hi�bir sorumluluk kabul etmiyoruz. </br>
                    Yaz�l�m� indirmekle ilgili zorluklar veya sonu�lara dair herhangi bir sorumluluk veya y�k�ml�l�k ta��mamaktay�z. �ndirilen herhangi bir yaz�l�m�n kullan�m�, e�er varsa, yaz�l�mla birlikte sa�lanan veya yaz�l�m�n yan�nda yer alan lisans anla�mas�n�n maddelerine tabidir. </br>
                    Sitedeki hi�bir bilgi, ���nc� ki�ilerin kabulu veya onay�n� ya da bu ki�ilere ait tavsiye, d���nce, bilgi, �r�n ya da Hizmeti ifade veya ima etmemektedir. </br>
                    ���nc� ki�ilere ait bir web sitesinden, herhangi bir Vodafone web sitesine, herhangi bir bi�imde hiperlink ba�lant�s� yarat�lmadan �nce, mutlaka yaz�l� iznimizin al�nmas� gerekmektedir. Bu tarz bir kullan�m �crete tabi olabilir. Vodafone, bu tarz bir ba�lant� nedeniyle Sizin veya ���nc� taraf�n u�rad��� hi�bir kay�p veya zarardan sorumlu de�ildir.</p>      

                    <div class="title-side">
                        <p class="h3">
                           16-TAZM�NAT Y�K�ML�L���N�Z
                        </p>
                    </div>
                    <p>Vodafone i�in ki�isel bilgilerin gizlili�i konusu �ok �nemlidir. Bireysel/kurumsal ki�isel bilgilerinizin g�venli�i, genel h�k�mler ve Telekom�nikasyon Mevzuat� kapsam�nda Vodafone taraf�ndan koruma alt�na al�nm��t�r. Ki�isel bilgiler yasalara uygun olarak verilmi� Mahkeme/Savc�l�k kararlar� ve ki�inin a��k yaz�l� onay� d���nda hi�bir �ekilde ���nc� ki�iler taraf�ndan kullan�lamayacak, kopyalanmayacak, i�lenemeyecek, da��t�lamayacak ve yay�nlanmayacakt�r.</br>
                    Ki�isel bilgi kullan�m�m�z, bu S�zle�me'nin bir par�as�n� olu�turan Gizlilik Politikas�na tabi olacakt�r. L�TFEN G�ZL�L�K POL�T�KASINI D�KKATL�CE OKUYUNUZ. Bu politika, ki�isel bilgileri nas�l kullanaca��m�z ve belli ko�ullarda kimlere verece�imiz konusu da dahil, ki�isel bilgileriniz ile ilgili olarak sizlerin haklar�n� ve bizlerin y�k�ml�l�klerini ele almaktad�r. </p>      

                    <div class="title-side">
                        <p class="h3">
                           17-H�ZMET�N DURDURULMASI VE SONA ERD�R�LMES� 
                        </p>
                    </div>
                    <p>"Site"de verilen "Hizmet"i;</br>
                    Bak�m ya da tamir i�leri i�in;</br> 
                    ��erikleri ya da "Hizmet"lerin i�levini zaman i�inde g�ncellemek ya da y�kseltmek i�in;</br> 
                    Sizin bu Ko�ullar� ihlal etti�inizi ya da ihlal edebilece�inizi d���nmemiz halinde durdurma hakk�m�z bulunmaktad�r.</br> 
                    Bu S�zle�me'nin h�k�m ve ko�ullar�n�n muhtemel bir ihlalini ara�t�rmak ya da engellemek i�in Hizmetlere eri�iminizi durdurursak, bu S�zle�me bu durdurma s�resinde de ge�erli olmaya devam edecektir.</br></br>

                    Hizmetin t�m� ya da bir k�sm�na eri�iminizi sona erdirebiliriz:</br>
                    Hizmete eri�iminizi sona erdirirsek, Hizmette depolam�� oldu�unuz t�m bilgileri, e-mailleri ve verileri silme hakk�m�z bulunmaktad�r. Bu sebeple, t�m bilgilerin kopyalar�n� Hizmetten ayr� olarak ba�ka herhangi bir depolama cihaz�nda saklaman�z� �neririz.</br>
                    Vodafone; teknik, ticari ya da i�letimsel sebeplerle ya da kamu yarar�na ili�kin sebeplerle "Site"de sundu�u Hizmetleri her zaman genel olarak geri �ekebilir ya da de�i�tirebilir. Hizmetlerin Vodafone taraf�ndan kesin olarak durdurulmas� halinde, Hizmetlerin durdurulmas�ndan makul bir s�re �nce bu durum size bildirilecektir.</br> Durdurma, geri alma ya da de�i�iklik sebebine ba�l� olarak, �nceden bildirimde bulunmak her zaman m�mk�n olmayabilir. Fesih ne sizin ne de bizim do�an haklar�m�z� ve y�k�ml�l�klerimizi etkileyecektir.</br>
                    "Site"deki talimatlar� takip ederek ya da yukar�da 4.maddede a��kland��� �ekilde bizimle ba�lant� kurarak Hizmeti her zaman durdurabilirsiniz. Hizmetin durdurulmas�, taraf�n�zca kullan�lan Hizmetlerin �cretini ya da Hizmetin kullan�m� s�ras�nda sat�n al�nan ���nc� mallar�n�n ya da Hizmetlerinin �cretini �deme y�k�ml�l���n�z� etkilemeyecektir.</p>      

                    <div class="title-side">
                        <p class="h3">
                           18-UYGULANACAK HUKUK VE �HT�LAFIN ��Z�M�
                        </p>
                    </div>
                    <p>Bu H�k�mler T�rk hukukuna tabi olacak ve T�rk hukukuna g�re yorumlanacakt�r ve �stanbul Merkez Mahkemelerinin, ihtilaf�n ��z�m� konusunda m�nhas�r olmayan yetkiye sahip oldu�unu siz ve biz kabul ederiz. </br>S�ZLE�MEY� OKUDUM VE YUKARIDA YER ALAN T�M H�K�MLER�, A�IK VE H�R �RADE BEYANIM DO�RULTUSUNDA KABUL ED�P ONAYLIYORUM.  </p> 

                    <div class="title-side">
                        <p class="h3">
                           II.G�ZL�L�K POL�T�KASI
                        </p>
                    </div>
                    <p> 1. Aboneden istenen ki�isel bilgiler, aboneye "Hizmet" verilebilmesi i�in gerekli olup, bu ki�isel bilgiler Vodafone Telekom�nikasyon A.�. b�nyesinde muhafaza alt�ndad�r.</br>
                    2. Aboneye ait ki�isel bilgiler; Telekom�nikasyon mevzuat�na uygun olarak ve Elektronik Haberle�me Sekt�r�nde Ki�isel Verileri ��lenmesi ve Gizlili�inin Korunmas� Hakk�nda Y�netmelik gere�ince, Telekom�nikasyon "Hizmet"lerini pazarlamak ya da katma de�erli "Hizmet"leri sa�lamak amac�yla; abone veya kullan�c� ki�isel bilgilerinin kullan�lmas�na izin verdi�i takdirde, Vodafone Telekom�niksyon A.�. taraf�ndan, bu t�r "Hizmet"ler ve pazarlama i�in gerekli kapsam ve s�rede i�lenebilir. Kullan�c� ve aboneler, ki�isel bilgilerinin i�lenmesi i�in verdikleri izinleri her zaman geri alabilirler.</br>
                    3. Vodafone Telekom�nikasyon A.�.; abonenin veya kullan�c�n�n onay�n� almak ko�uluyla, telekom�nikasyon "Hizmet"lerinin pazarlanmas� ya da katma de�erli "Hizmet"lerin sa�lanmas� amac�yla, i�lenen ki�isel bilgileri ve bu t�r i�lemin s�resini abone ve kullan�c�lara bildirecektir. </br>
                    4. Afet ve acil durum halleri ile kolluk g��leri, amb�lans ve itfaiye "Hizmet"leri dahil t�m acil aramalara ili�kin acil yard�m �a�r�lara cevap vermek amac�yla; abonenin veya kullan�c�n�n r�zas� olmasa bile abonenin yer verisini ve kimli�ini, kullan�c�n�n ise yer verisini i�eren bilgiler Telekom�nikasyon Mevzuat� gere�ince eri�ilebilir tutacakt�r. </br>
                    5. Abone ki�isel bilgileri, yasalara uygun olarak verilmi� Mahkeme/Savc�l�k kararlar�, yasal istisnalar d���nda, hi�bir �ekilde ���nc� ki�ilere verilmez. </br>
                    6. Vodafone Telekom�nikasyon A.�.'nin hedefi, abone bilgilerini g�ncel tutmakt�r.Bu nedenle belirli zaman aral�klar� ile abonelerden ki�isel bilgilerinin g�ncellenmesi talep edilebilecektir.</br>
                    7. Vodafone Telekom�nikasyon A.�., kendi personeli de dahil olmak �zere, abone bilgilerine hi� kimsenin izinsiz ula�amamas� i�in bili�im sistemleri �zerinde s�k� bir g�venlik politikas� uygulamaktad�r.</br>
                    8. Vodafone Telekom�nikasyon A.�., meydana gelebilecek bir sahtecilik/doland�r�c�l�k ya da herhangi bir soru�turma ya da �ebeke g�venli�i ihlali konusunda yasal merciler ve di�er ilgili kurumlar ile i�birli�i yapabilir ve yasalar taraf�ndan gerekli g�r�len hallerde ya da adli makamlar�n talebini yerine getirilmesi halinde, elde edilen her t�rl� bilgiyi (ki�isel veriler dahil) if�a etme hakk� da sakl�d�r.</br>
                    9. Abone bilgilerine ula�ma izni olan yetkili Vodafone Grubu'na dahil t�m �irketler, t�m Vodafone grubu personeli ve t�m ���nc� �ah�slar, gizlilik mecburiyeti uygulamas�na �zellikle uymak zorunlulu�undad�rlar. </p>                   
                </div>
            </div>
        </div>
        <div id="pop-up-katilim" class="pop-up katilim-kosullar�" >
            <div class="container">
                <span class="close"></span>
                <div class="row">
                    
                    <div class="title-side">
                        <p class="h3">
                            1-GENEL A�IKLAMALAR 
                        </p>
                    </div>
                    <p>Bu H�k�m ve Ko�ullar, (ister web'de, isterse de WAP ile ya da PDA'de eri�im sa�layaca��n�z) bu internet sitesinde ("Site") sizlere sunulacak "��erik" ve "Hizmet"lere (bundan sonra tek ba��na "Hizmet" ve birlikte "Hizmet"ler" olarak an�lacakt�r) eri�iminize ve bu "��erik" ve "Hizmet"leri kullan�m�n�za uygulanacak genel h�k�m ve ko�ullard�r. Bu Site ve "Hizmet"ler Vodafone Telekom�nikasyon A.�. (Vodafone) (bundan sonra "biz," "bizim", "bize" ya da Vodafone olarak an�lacakt�r) taraf�ndan ya da ad�na i�letilmektedir. "Siz" ve "sizin" s�zc�kleri, size yani "Hizmet"in kullan�c�s�na, at�fta bulunmaktad�r. </p>
                    <p>L�tfen bu h�k�m ve ko�ullar� dikkatlice okuyunuz. </p>
                    
                    <div class="title-side">
                        <p class="h3">
                            2-B�Z�MLE OLAN S�ZLE�MEN�Z
                        </p>
                    </div>
                    <p>Bizimle olan s�zle�meniz a�a��daki i�lemlerden hangisi daha �nce ger�ekle�irse, bu tarihte ba�layacakt�r:</p>  
                    <p>Kay�t s�recimizi tamamlaman�z ve bu H�k�m ve Ko�ullar� okuyup Kabul etti�inizi teyit etmeniz; ya da Kay�t gerektirmeyen "Hizmet"lerimizden birini g�r�nt�lemeniz, bunlara eri�im sa�laman�z ya da kullanman�z. </p>
                    <p>Bu H�k�m ve Ko�ullar� print ederek bir kopyas�n� kendi kay�tlar�n�z i�in saklaman�z� tavsiye ederiz. Bu H�k�m ve Ko�ullar t�m ""Hizmet"ler" i�in ge�erlidir. </p>
                    <p>Bu H�k�m ve Ko�ullara ilaveten, bu "Hizmet"e kay�t olurken kabul etmeniz gerekecek tek tek "Hizmet"lere uygulanacak ek h�k�m ve ko�ullar da bulunabilir. </p>
                    <div class="title-side">
                        <p class="h3">
                            3-GENEL OLARAK
                        </p>
                    </div>
                    <p>Bu H�k�m ve Ko�ullardan kaynaklanan haklar�m�z� kaybetmeksizin ileride kullanmak i�in erteleyebiliriz. </br>
                    Size ihbarda bulunmadan, y�k�ml�l�klerimizin herhangi bir k�sm�n� alt ta�eronlara ifa ettirebilece�imizi ya da bu H�k�m ve Ko�ullar� veya haklar�m�z�n ya da y�k�ml�l�klerimizin bir k�sm�n� temlik edebilece�imizi kabul ediyorsunuz. </br>
                    Bu H�k�m ve Ko�ullardan kaynaklanan haklar�n�z� ya da y�k�ml�l�klerinizi temlik etmemeyi, satmamay� ya da ba�ka herhangi bir �ekilde devretmemeyi taahh�t ediyorsunuz. </br>
                    Kontrolum�z d���nda ger�ekle�en sebeplerden dolay� bu H�k�m ve Ko�ullar�n ihlali halinde size kar�� sorumlu olmayaca��z. </br>
                    Bu H�k�mler ya da "Hizmet"in kullan�m� sonucunda, sizin ve bizim aram�zda herhangi bir ortak giri�imin, ortakl���n, istihdam ya da vekillik ili�kisinin kurulmad���n� kabul ediyorsunuz. </br>
                    Bu H�k�m ve Ko�ullar (ve uygulanabilirse, bir "Hizmet"e kay�t olurken kay�t s�recinin bir par�as� olarak Kabul etti�iniz ilgili ek h�k�mler ve Sa�lay�c�'n�n h�k�m ve ko�ullar�) "Hizmet"i kullan�m�n�z konusunda siz ve biz aras�ndaki anla�man�n tamam�n� te�kil eder ve "Hizmet" ile ilgili olarak yap�lan t�m �nceki s�zle�melerin yerine ge�er. </br>
                    Bu H�k�m ve Ko�ullardan herhangi bir k�sm�n�n hukuken ge�ersiz ya da h�k�ms�z hale gelmesi halinde, ge�ersiz ya da h�k�ms�z maddenin yerine orijinal amaca en yak�n ge�erli bir madde konulacakt�r ve H�k�m ve Ko�ullar�n geri kalan k�sm� aynen y�r�rl�kte kalmaya devam edecektir. </br>
                    Vodafone, y�r�rl�kteki mevzuat�, y�netmelikleri, hukuki s�reci ya da devlet kurumlar�n�n taleplerini kar��lamak i�in Vodafone'nun gerekli g�rece�i her t�rl� bilgiyi if�a etme hakk�n� her zaman sakl� tutar. </br>
                    Vodafone �ebekesinde kay�tl� cep telefonunuz var ise, "Hizmet"i kullan�rken Vodafone airtime Hizmetinin genel h�k�m ve ko�ullar� (ya da Hizmet sa�lay�c�n�z�n h�k�m ve ko�ullar�) ve (varsa) Vodafone �n-�demeli Hizmetinin h�k�m ve ko�ullar� uygulanacakt�r. </p>
                    
                    <div class="title-side">
                        <p class="h3">
                            4-YARDIM
                        </p>
                    </div>
                    <p>Bu "Hizmet" ile ilgili herhangi bir sorunuz ya da sorununuz olursa, Vodafone m��terisi iseniz M��teri "Hizmet"leri hatt� olan 0 (542) 542 00 00'� ya da di�er telefonlardan 0212 448 70 00 numaras�n� (�cretli) aray�n�z ya da vodafone.com.tr adresinden "Yard�m ve Destek" ve sonra "Bize Ula��n" k�s�mlar�na t�klamak ve ilgili formu doldurmak suretiyle bize mail atabilirsiniz. </p>  
                    <div class="title-side">
                        <p class="h3">
                            5-KULLANICI ADI VE ��FRE
                        </p>
                    </div>
                    <p>"Hizmet"e kay�t olurken doldurulmas� zorunlu tutulan alanlarda do�ru, g�ncel ve tam bilgi vermeyi Kabul ediyorsunuz. Kay�d� m�teakip, "Hizmet"e ve kay�t gerektiren sayfalara eri�im sa�layabilmeniz i�in taraf�n�za bir �ifre verilecektir. �ifrenizle "Hizmet"e eri�im sa�laman�z�n sonucunda ger�ekle�en t�m aksiyonlardan siz sorumlusunuz. �ifrenizin ve "Hizmet"e eri�imde bulunurken kulland���n�z cihaz�n g�venli�ini temin etmek sizin sorumlulu�unuzdur. Bu H�k�m ve Ko�ullar�n �ifrenizi if�a etti�iniz herhangi biri taraf�ndan ihlali, sizin taraf�n�zdan yap�lan bir ihlal olarak alg�lanacakt�r. </br>
                    �ifrenizin yetkisiz bir kullan�c� taraf�ndan ��renilmesi durumunda, bizi bu hata ya da yanl��l�ktan derhal haberdar edersiniz. M�nhas�r ve mutlak takdir yetkimiz ile, �ifrenizi ve kullan�c� ad�n�z� diledi�imiz zaman de�i�tirme hakk�n� sakl� tutar�z.</br>
                    Belli "Hizmet"ler i�in, bir kullan�c� ad� ve �ifre se�meniz gerekebilir. Her t�rl� "Hizmet" i�in: </br></br>

                    Se�ti�iniz kullan�c� ad�, m�stehcen, tehdit edici, �rk��, b�l�c�, k���k d���r�c�, milli g�venli�e ayk�r�, devletin �lkesi ve milletiyle b�l�nmez b�t�nl���ne ayk�r� ve ���nc� ki�ileri tahkir edici nitelikte olamaz ya da herhangi bir ���nc� ki�inin fikri m�lkiyet ya da m�seccel haklar�n� ihlal edemez; ve </br></br>

                    Kendi m�nhas�r ve mutlak takdirimizle taraf�n�zca se�ilen kullan�c� ad�n�n uygunsuz oldu�unu d���nmemiz halinde, taraf�n�za bildirimde bulunarak ya da bulunmadan bu kullan�c� ismini kullanman�z� reddetme ve engelleme hakk�m�z sakl�d�r. </br>
                    Zaman zaman �ifrenizi ve kullan�c� ad�n�z� de�i�tirebiliriz ve bize sa�lad���n�z irtibat bilgilerini kullanarak her t�rl� de�i�ikli�i size bildiririz.  </p>  
                    
                    <div class="title-side">
                        <p class="h3">
                            6-SERV�SLER� KULLANIMINIZ
                        </p>
                    </div>
                    <p>Hizmetlerde ("��erik") yer alan ya da Hizmetler arac�l���yla eri�ilebilen (yaz�l�m, veri, uygulama, bilgi, metin, foto�raf, m�zik, ses, g�r�nt�, grafik, logo, sembol, �izim ve di�er materyal ya da hareketli imgeler dahil, ancak bunlarla s�n�rl� olmamak �zere) her t�rl� materyal ya da "��erik" ile ilgili t�m telif haklar�, ticari markalar, patentler ve di�er fikri m�lkiyet haklar� ya bizim m�lkiyetimizdedir ya da bunlar�n lisans�/kullan�m hakk� Hizmetlerin bir par�as� olarak hak sahibi ya da sahipleri taraf�ndan bize devredilmi�/verilmi�tir. "��erik" ile ba�ka herhangi bir �ey yapmak istemeniz halinde, �ncelikle bu materyale ait haklar�n sahibinin yaz�l� izninizi alman�z gerekir. T�m haklar a��k�a sakl�d�r. </br></br>

                    Sadece �zel ve ticari olmayan bir ama�la ve bu H�k�m ve Ko�ullara uyman�za tabi olarak, size "Hizmet"i ve ��eri�i bilgisayar�n�z, cep telefon cihaz�n�z ya da di�er eri�im ara�lar�yla g�r�nt�lemeniz ve kullanman�z amac�yla, m�nhas�r olmayan ve devredilemeyen bir hak veriyoruz. Kendi bilgisayar�n�z, cep telefon cihaz�n�z ya da di�er eri�im cihazlar�n�zda ki�isel kullan�m i�in ve "Hizmet"in ya da ��eri�in usul�nce kullan�m� i�in gerekti�i �l��de ve kopyalamaya telif hakk� sahibinin vermesi ko�ulu ile, de�i�tirmeden ��eri�i kopyalayabilirsiniz.</br></br>

                    Herhangi bir ��eri�i (t�m�yle ya da k�smen):</br>
                    A��k�a izin verilmedik�e ���nc� �ah�slara devredemez ya da ���nc� �ah�slar�n eri�imine izin veremezsiniz; ya da 
                    De�i�tiremez, i�leyemez, yeniden formatlayamaz ya da ba�ka herhangi bir �ekilde adapte edemezsiniz.</br>
                    "Site" ve sitede sunulan Hizmet, Vodafone marka b�t�nl��� ile iltibas yaratacak �ekilde ve/veya birebir kullan�larak ya da adapte edilerek ve burada say�lan k�s�tlamalarla s�n�rl� olmaks�z�n kullan�lamaz. Hizmetleri bu �ekilde kullanmak ya da ba�kaca bir Hizmet olu�turmak yasakt�r. 
                    </p>  
                    <div class="title-side">
                        <p class="h3">
                            8-ONLINE SELF SERV�S
                        </p>
                    </div>
                    <p>Vodafone bireysel abonesiyseniz, Siteden "Online Self Servis" Hizmetine kay�t olabilirsiniz. </br>
                    Vodafone kurumsal abonesiyseniz, Vodafone abonelik i�lemlerinizi kurumsal hesab�m� kullanarak ger�ekle�tirebilirsiniz.</br>
                    Kaydolmu� oldu�unuz Hizmetleri g�r�nt�leyebilecek, yeni Hizmetlere kay�t olabilecek ya da kayd�n�z� iptal edebilecek ve ki�isel bilgilerinizi g�ncelleyebileceksiniz.</br>
                    Kurumsal Hesap arac�l���yla, kurumsal m��terilerin �al��anlar� taraf�ndan kurum ad�na yap�lacak i�lemlere ait yetkiler, kullan�c� stat�s� ve �r�n kullan�m�na paralel de�i�iklik g�sterir.</p>
                    
                    <div class="title-side">
                        <p class="h3">
                           8-B�ZE SORUN 
                        </p>
                    </div>
                    <p>Vodafone'un Bize Sorun uygulamas� ile sorular�n�z� web sitesi �zerinden iletebilir ve anl�k olarak tarife ve kampanyalar�m�za ili�kin bilgi alabilirsiniz.Tarife ve kampanyalar�m�za ili�kin sorular�n�z anl�k yan�tlanacak olup, verilecek bilgiler web sitesi i�eri�inde de yer almaktad�r. Hatt�n�z ile ilgili yard�m talepleriniz veya sorular�n�z i�in online self servisi kullanabilir veya M��teri Hizmetleri birimimizle ba�lant� kurabilirsiniz. </br></br>

                    Web sitesi �zerinden yap�lacak g�r��melerin m��teri memnuniyeti sa�lamak amac�yla kaydedilece�ini, Bize Sorun uygulamas�n� kullan�rken uygunsuz, veya su� unsuru i�eren ifadeler kullanmaman�z� �nemle hat�rlat�r�z </p> 


                    <div class="title-side">
                        <p class="h3">
                           9-SERV�S VE/VEYA ��ER�KLE �LG�L� YASAKLI KULLANIMLAR
                        </p>
                    </div>
                    <p>Siz ve Hizmete eri�im sa�lamak suretiyle, Hizmet ve ��eri�i kullanma hakk� verdi�iniz ki�iler, a�a��daki i�lemleri yerine getiremezler: </br>
                    ��eri�i ve/veya Hizmeti ya da bunlar�n herhangi bir k�sm�n� bu S�zle�me'de a��klanandan farkl� bir �ekilde kopyalama, if�a etme, de�i�tirme, i�leme, yeniden formatlama, g�r�nt�leme, da��tma, lisans verme, yayma, satma, yerine getirme, transfer etme, bunlara hiperlink sa�lama, tersine m�hendislik i�lemi yapma ya da par�alara ay�rma ya da ��eri�i ve/veya Hizmetleri ya da herhangi bir par�as�n� bu S�zle�me'de belirtilenden farkl� bir �ekilde kulland�rma</br>
                    "��erik" ve/veya Hizmetten hiperlinkler (deep-linkler dahil) sa�lama ya da yaratma; 
                    Vodafone ana sayfas�n� kopyalama ya da Hizmetinin ya da ��eri�in herhangi bir k�sm�n�n �evresinde ayr� bir �er�eve olu�turma ("�er�eveleme" olarak biliniyor); </br>
                    Hizmet ya da ��eri�i herhangi bir ticari ama�la kullanma;</br>
                    Hizmeti ve Hizmet arac�l���yla ula��lan herhangi bir bilgiyi yasad��� ama�larla kullanma;</br>
                    M�stehcen, pornografik, tehdit edici, �rk��, b�l�c�, k���k d���r�c�, milli g�venli�e ayk�r�, devletin �lkesi ve milletiyle b�l�nmez b�t�nl���ne ayk�r�, ���nc� ki�ileri tahkir edici, te�hirci, uygunsuz, g�ven sars�c� ya da ba�ka herhangi bir surette yasa d��� olan herhangi bir mesaj, bilgi ya da resmi yay�nlamak, y�klemek ya da iletmek i�in Hizmeti kullanma; </br>
                    Gizlilik haklar� dahil, ba�kalar�n�n haklar�n� taciz etme, tehdit etme, bir ba�kas�n� taklit etme ya da ba�ka bir �ekilde ihlal etme; </br>
                    Di�er kullan�c�lar�n Hizmeti ya da ba�ka herhangi bir websitesini kullanmas�n� ve bunlardan faydalanmas�n� engellemek amac�yla ba�ka bilgisayarlar� hack'leme, a��r� trafik taleplerinde bulunma, probe ya da port scan yapmak, vir�s, mail bomb, chain letters ya da piramit �emalar� bula�t�rma; </br>
                    Mevzuata ayk�r� �ekilde di�er ki�ilerin ki�isel bilgilerini toplama ve i�leme; </br>
                    �r�n ya da Hizmet sat��� i�in reklam yapma ya da teklifte bulunma; </br>
                    Telif hakk� dahil ba�kalar�n�n fikri m�lkiyet haklar�n� ihlal etme; </br>
                    Hizmetin kullan�c�lar� hakk�nda bilgi toplamak ya da yetkisiz ya da izinsiz olarak junk ya da bulk ("spam" olarak da bilinen) e-mail g�ndermek ya da ba�ka bir �ekilde da��tmak amac�yla Hizmeti kullanma;</br>
                    Kendi m�nhas�r ve mutlak takdirimize g�re uygunsuz ya da kabul edilemez oldu�unu ya da marka ve itibar�m�za zarar verme olas�l��� bulundu�unu d���nd���m�z bir �ekilde, Hizmeti ya da ��eri�i kullanma.</br> 
                    Ba�ka birinin Hizmete ya da ��eri�e eri�iminizi kullanmas�ndan kaynaklanm�� olsa bile, Hizmetin ya da ��eri�in k�t�ye kullan�m�ndan siz sorumlu olacaks�n�z. Sizin ya da ���nc� ki�ilerin Hizmete ili�kin olarak koydu�u ya da koymaya �al��t��� herhangi bir materyali silme, ��karma, de�i�tirme ya da reddetme, Hizmete eri�iminizi bloke etme ya da durdurma ve bu H�k�m ve Ko�ullar�n herhangi bir �ekilde ihlalini engellemek ya da gidermek i�in takdiri bize ait olmak �zere gerekli g�rd���m�z di�er her t�rl� aksiyonu alma hakk�m�z sakl�d�r. "��erik"te ya da Hizmette bu H�k�m ve Ko�ullar� ihlal edece�ini makul surette d���nd���n�z herhangi bir "��erik" ya da ���nc� ki�i materyalini bize bildirmek isterseniz, l�tfen bildiriniz.</br>
                    (Gizlilik Politikam�za uygun olarak) herhangi bir soru�turma ya da �ebeke g�venli�i ihlali konusunda yasalar kapsam�nda ve di�er yetkili ilgili resmi kurumlar ile i�birli�i yap�lacak ve yasalar kapsam�nda ki�isel bilgileriniz resmi kurumlar ve/veya adli makamlarla payla��labilecektir. </p>         



                    <div class="title-side">
                        <p class="h3">
                           10-K���SEL B�LG�LER�N�Z
                        </p>
                    </div>
                    <p>Vodafone i�in ki�isel bilgilerin gizlili�i konusu �ok �nemlidir. Bireysel/kurumsal ki�isel bilgilerinizin g�venli�i, genel h�k�mler ve Telekom�nikasyon Mevzuat� kapsam�nda Vodafone taraf�ndan koruma alt�na al�nm��t�r. Ki�isel bilgiler yasalara uygun olarak verilmi� Mahkeme/Savc�l�k kararlar� ve ki�inin a��k yaz�l� onay� d���nda hi�bir �ekilde ���nc� ki�iler taraf�ndan kullan�lamayacak, kopyalanmayacak, i�lenemeyecek, da��t�lamayacak ve yay�nlanmayacakt�r.</br>
                    Ki�isel bilgi kullan�m�m�z, bu S�zle�me'nin bir par�as�n� olu�turan Gizlilik Politikas�na tabi olacakt�r. L�TFEN G�ZL�L�K POL�T�KASINI D�KKATL�CE OKUYUNUZ. Bu politika, ki�isel bilgileri nas�l kullanaca��m�z ve belli ko�ullarda kimlere verece�imiz konusu da dahil, ki�isel bilgileriniz ile ilgili olarak sizlerin haklar�n� ve bizlerin y�k�ml�l�klerini ele almaktad�r. </p>

                    <div class="title-side">
                        <p class="h3">
                           11-��ER�K Y�KLEME ve SORUMLULUK 
                        </p>
                    </div>
                    <p>Herhangi bir Hizmetimiz cep telefonunuza, ki�isel bilgisayar�n�za, ki�isel dijital asistan�n�za ya da di�er eri�im ara�lar�na, "��erik" y�klemenize imkan sa�l�yorsa, a�a��daki ko�ullara uyman�z gerekir.
                    Bu ��eri�i eri�im cihaz�n�za kaydedebilirsiniz ancak (a��k�a izin verilmedik�e) bu ��eri�i ba�ka bir yere kaydetmeniz, ��eri�i de�i�tirmeniz, kopyalaman�z, da��tman�z, i�lemeniz bir ya da daha fazla ���nc� ki�iye iletmeniz ya da ���nc� ki�ilerin ��eri�e eri�imine izin vermeniz t�m�yle yasakt�r. </br>
                    Se�mi� oldu�unuz ��eri�i alabilmeniz i�in eri�im cihaz�n�zdaki ki�isel ayarlar� uygun bir �ekilde ayarlaman�z gerekmektedir. Hizmetlere kay�t olmak suretiyle, eri�im cihaz�n�z�n ilgili ��eri�in indirilmesini destekledi�ini teyit ediyorsunuz. E�er bundan emin de�ilseniz, Sitedeki bilgileri kontrol etmeli, cihaz�n�z�n el kitap����n�za bakmal� ya da eri�im cihaz�n�z�n imalat��s� ile irtibat kurmal�s�n�z. Uygun olmayan bir eri�im cihaz�na "��erik" indirmeye �al��man�z halinde bu durumdan sorumlu olamay�z ve sonuca bak�lmaks�z�n, gerekli �cretin taraf�n�zca �denmesi gerekir. </br>
                    K�s�tlama olmaks�z�n, hi�bir surette a�a��daki sebeplerin biri ya da daha fazlas�ndan kaynaklanan, ��eri�in teslimat�nda meydana gelen aksakl�k, hata ya da gecikmelerden sorumlu olmayaca��z:</br>
                    (a) "��erik" sipari�i vermeden �nce yanl�� telefon numaras� ya da ba�ka yanl�� bilgi vermeniz;</br>
                    (b) mesaj gelen kutunuzun dolu olmas� ve ekstra mesaj alamaman�z;</br>
                    (c) telefonunuzun kapal� olmas�, herhangi bir sebeple ula��lamaz olmas�; ya da
                    (d) makul kontrol�m�z d���nda ba�ka herhangi bir sebep. </br></br>
                    "Site" de yer alan Hizmetlerimizi kullan�rken, sorumluluk tamamen size aittir. Vodafone; sitede ar�za, hata, vir�s ya da bilgisayar�n�z� etkileyebilecek hatalar�n olmad���n�/olmayaca��n� hi�bir zaman garanti edememektedir. Vodafone, internet �zerinden g�nderilen e-postalar�n, herhangi bir durdurma, izleme, kay�p ya da de�i�meye maruz kalabilece�inden dolay� tamamen g�venli oldu�u konusunda size garanti veremez. G�nderilen bu e-posta mesajlar�ndan ya da Vodafone'a g�nderdi�iniz veya taraf�m�zdan size iletilen e-posta mesajlardan kaynaklanacak herhangi bir zarardan size veya herhangi birine kar�� sorumluluk kabul edilmez.</br>
                    Size daha iyi bir hizmet ve daha etkili bir "Site" sunmak amac�yla, browser'�n�zla etkile�imimizin par�as� olarak "cookies" kullan�lmaktad�r. "Cookie", ziyaret�inin, web sitesini ziyareti s�ras�nda bilgisayar�na g�nderilen bilgidir. Cookie'ler, bir ziyaret�inin Sitede izledi�i navigasyonu takip edebilmemize olanak vermektedir. Bir ki�i, Bize online olarak ki�isel bilgilerini isteyerek vermedi�i s�rece taraf�m�zca tan�namaz. Bu bilgiler, ba��ms�z kurulu�larla pazarlama yapmalar� amac�yla payla��lamaz veya sat�lamaz. </p>

                    <div class="title-side">
                        <p class="h3">
                           12-G�VENL�K 
                        </p>
                    </div>
                    <p>Bireysel/kurumsal abonelik i�lemleriniz i�in belirledi�iniz �ifrenizi g�vende ve gizli tutmak i�in azami dikkati g�steriniz ve yetkisiz kullan�mlar� engellemek amac�yla gerekli �nlemleri mutlaka al�n�z. �ifrenizi bir yere not ederek, Vodafone personeli dahil olmak �zere ���nc� bir ki�iye s�yleyerek ve/veya ���nc� ki�iler taraf�ndan anla��lmas�na yol a�acak �ekilde bir yere kaydederek ya da "Site"ye giri� yapt�ktan sonra bilgisayar ekran�n� g�zetimsiz b�rakarak if�a etmeyin. Do�um tarihi, y�ld�n�mleri, telefon numaras� gibi kolay tahmin edilebilecek �ifreler kullanmay�n�z. "Online Self Servis KULLANICI S�ZLE�MES�"ni ("S�zle�me") onaylayarak "Site"ye �ye oldu�unuzdan ayr�ca "S�zle�me" h�k�mleri aynen ge�erlidir.</br>
                    "Site" �zerinden ad�n�za herhangi bir yetkisiz giri�in olmas�, ��phelendi�iniz veya bilginiz dahilinde yetkisiz bir emrin verilmesi veya birisinin �ifrenizi bildi�inden ��phelenmeniz durumunu taraf�m�za hemen bildirmelisiniz. Bunun i�in Vodafone M��teri "Hizmet"lerini arayabilirsiniz. Bu tip durumlarda hemen �ifrenizi de�i�tirmelisiniz. Herhangi bir kayb�n telafi edilmesine �al���l�rken ilgili bankalar ve emniyet birimlerinin yard�m�n�za ihtiyac� olabilecektir. Bu nedenle ve kay�plar�n telafi edilmesi veya �nlenmesine yard�mc� olaca��na inand���m�z durumlarda emniyet birimlerine veya ilgili ���nc� ki�ilere, ki�isel bilgileriniz hakk�nda bilgi verilebilecektir. </p>      

                    <div class="title-side">
                        <p class="h3">
                           13-F�KR� M�LK�YET
                        </p>
                    </div>
                    <p>"Site"de bulunan sayfa ekranlar�, bilgi, her t�rl� "��erik"le, tema ve materyallerin ve bunlar�n d�zenlenmesi konusundaki telif haklar�, Vodafone'a ve/veya Vodafone ile s�zle�mesi olan ���nc� ki�ilere aittir. "Site"nin i�erdi�i bilgi ve materyallere dair t�m telif haklar�, tescilli marka, patent ve/veya di�er t�m fikri ve s�nai m�lkiyet haklar� Vodafone ad�na sakl�d�r. Bu ba�lamda, hi�bir a��k veya imal�, tam ya da basit ruhsat-lisans verilmemektedir.</br>
                    �r�n ve "Hizmet"lerimizi kullan�rken veya ki�isel bilginiz i�in "Site"deki dosyalar� basabilir, kopyalayabilir, indirebilir veya ge�ici olarak saklayabilirsiniz. Ancak "Site"deki hi�bir �ey de�i�tirilemez. Aksi hal fikri ve s�nai m�lkiyet mevzuat�na g�re hukuki ve cezai i�lem gerektirecektir. Vodafone'nun yaz�l� izni al�nmad��� s�rece, "Site"nin ba�ka �ekillerdeki kullan�m� yasakt�r. Hi� kimse, �nceden Vodafone'nun yaz�l� iznini almad�k�a, "Site"nin belli bir k�sm�n� ba�ka bir web sitesinde kullanamaz veya ba�ka bir web sitesine ba�lant� kuramaz. </br>
                    Vodafone ve Vodafone logosu ile markala�t�r�lm�� hizmet ve �r�nler bir b�t�n olarak, Vodafone Telekom�nikasyon A.�.'nin tescilli markas� olup, Vodafone'a ait t�m haklar Vodafone Telekom�nikasyon A.�.'de sakl�d�r. Yukar�da belirtilen kapsamda ve belirtilen hallerin d���nda, Vodafone tescilli markas�, logo veya marka ad�, izinsiz kullan�lamaz veya �o�alt�lamayaca�� gibi, alan ad� ve benzeri uzant�l� alan ve alt alan adlar�, hi�bir �ekilde kullan�lamaz.  </p>      

                    <div class="title-side">
                        <p class="h3">
                           14-"S�TE"N�N KULLANIMI
                        </p>
                    </div>
                    <p>Vodafone i�in ki�isel bilgilerin gizlili�i konusu �ok �nemlidir. Bireysel/kurumsal ki�isel bilgilerinizin g�venli�i, genel h�k�mler ve Telekom�nikasyon Mevzuat� kapsam�nda Vodafone taraf�ndan koruma alt�na al�nm��t�r. Ki�isel bilgiler yasalara uygun olarak verilmi� Mahkeme/Savc�l�k kararlar� ve ki�inin a��k yaz�l� onay� d���nda hi�bir �ekilde ���nc� ki�iler taraf�ndan kullan�lamayacak, kopyalanmayacak, i�lenemeyecek, da��t�lamayacak ve yay�nlanmayacakt�r.</br>
                    Ki�isel bilgi kullan�m�m�z, bu S�zle�me'nin bir par�as�n� olu�turan Gizlilik Politikas�na tabi olacakt�r. L�TFEN G�ZL�L�K POL�T�KASINI D�KKATL�CE OKUYUNUZ. Bu politika, ki�isel bilgileri nas�l kullanaca��m�z ve belli ko�ullarda kimlere verece�imiz konusu da dahil, ki�isel bilgileriniz ile ilgili olarak sizlerin haklar�n� ve bizlerin y�k�ml�l�klerini ele almaktad�r. </p>      

                    <div class="title-side">
                        <p class="h3">
                           10-K���SEL B�LG�LER�N�Z
                        </p>
                    </div>
                    <p>�imdilik kayd�yla "Site"nin kullan�m�ndan belirli bir �cret talep edilmemektedir. Ancak ilerde Vodafone'nun bunu yapmak hakk� sakl� tutulmu�tur. Vodafone'nun, abonelik ile ilgili bireysel/kurumsal i� ve i�lemlerini "Site" �zerinden yapmak amac�yla belirleyebilece�i makul �creti �demeyi �imdiden kabul ve beyan etmektesiniz. Bununla birlikte, bu tarz bir �cretlendirme yap�lmadan ve Vodafone'a herhangi bir ihbarda bulunman�zdan �nce posta, e-posta, k�sa mesaj veya di�er yollardan taraf�n�za bu de�i�iklikle ilgili bilgi verilecektir. Bildirimi takiben, hizmeti kullanmaya devam etmeniz, teklif edilen �cret de�i�ikli�ini kabul etti�iniz anlam�na gelecektir. </p>      

                    <div class="title-side">
                        <p class="h3">
                           15-���NC� �AHIS S�TELER�, Y�K�ML�L�KLER VE YASAL UYARI
                        </p>
                    </div>
                    <p>Hizmet vas�tas�yla iletilen ya da eri�ilen ���nc� �ah�slara ait i�eri�in g�venli�i ya da konusu �zerine kontrol g�c�m�z�n olamayaca��n� kabul ediyorsunuz ve yasad��� ya da hukuka ayk�r� i�eri�in iletiminden ya da al�nmas�ndan hi�bir surette sorumlu de�iliz. 5651 Say�l� Yasan�n 4.maddesi gere�ince de i�erik sa�lay�c�, ba�lant� sa�lad��� ba�kas�na ait i�eriklerden sorumlu de�ildir. Hizmetler, di�er websitelerine, kaynaklara ve/veya ileti�im �ebekelerine ba�lanmak i�in taraf�n�zca kullan�labilir. Bu ���nc� ki�ilere ait sitelerin i�eri�inden ya da Hizmetlerinden hi�bir surette sorumlu de�iliz. �leti�imlerinizin g�venli�i temin etmek i�in elimizden gelen �abay� g�sterece�iz; ancak ileti�imleriniz, kontrol�m�z alt�nda olmayan ���nc� ki�ilere ait �ebekelerden/hatlardan ge�mektedir. �nternet g�venli bir ortam de�ildir. �stenmeyen programlar ya da materyaller, bilginiz olmadan y�klenebilir ve bu suretle, yetkisi olmayan ki�iler, bilgisayar�n�za ya da cep telefon cihaz�n�zda, PDA ya da benzeri cihazlar�n�zdaki sakl� bilgilere eri�im sa�layabilir. Bu programlar, b�y�k bir ihtimalle bilginiz dahilinde olmadan, yetki vermedi�iniz i�lemleri yapabilir. "Site" �zerindeki ba�ka yerlere sa�lad���m�z hiperlink, sadece bilgilendirme ama�l�d�r. Di�er web siteleri veya sayfalara giden ba�lant�lar� takip etmenin riski taraf�n�za ait olup bu ba�lant� sebebiyle olu�an zararlardan Vodafone asla sorumluluk veya y�k�ml�l�k kabul etmez.</br> 
                    Y�klenebilir yaz�l�m sitelerine ba�lant�lar oldu�u takdirde, bunlar sadece kullan�m kolayl��� sa�lamak i�indir. </br>Interneti ve/veya Hizmet taraf�ndan eri�im sa�lanan ���nc� �ah�slara ait websitelerini ya da i�eri�i kullanman�zdan kaynaklanan her t�rl� kay�p ya da zarardan dolay� hi�bir sorumluluk kabul etmiyoruz. </br>
                    Yaz�l�m� indirmekle ilgili zorluklar veya sonu�lara dair herhangi bir sorumluluk veya y�k�ml�l�k ta��mamaktay�z. �ndirilen herhangi bir yaz�l�m�n kullan�m�, e�er varsa, yaz�l�mla birlikte sa�lanan veya yaz�l�m�n yan�nda yer alan lisans anla�mas�n�n maddelerine tabidir. </br>
                    Sitedeki hi�bir bilgi, ���nc� ki�ilerin kabulu veya onay�n� ya da bu ki�ilere ait tavsiye, d���nce, bilgi, �r�n ya da Hizmeti ifade veya ima etmemektedir. </br>
                    ���nc� ki�ilere ait bir web sitesinden, herhangi bir Vodafone web sitesine, herhangi bir bi�imde hiperlink ba�lant�s� yarat�lmadan �nce, mutlaka yaz�l� iznimizin al�nmas� gerekmektedir. Bu tarz bir kullan�m �crete tabi olabilir. Vodafone, bu tarz bir ba�lant� nedeniyle Sizin veya ���nc� taraf�n u�rad��� hi�bir kay�p veya zarardan sorumlu de�ildir.</p>      

                    <div class="title-side">
                        <p class="h3">
                           16-TAZM�NAT Y�K�ML�L���N�Z
                        </p>
                    </div>
                    <p>Vodafone i�in ki�isel bilgilerin gizlili�i konusu �ok �nemlidir. Bireysel/kurumsal ki�isel bilgilerinizin g�venli�i, genel h�k�mler ve Telekom�nikasyon Mevzuat� kapsam�nda Vodafone taraf�ndan koruma alt�na al�nm��t�r. Ki�isel bilgiler yasalara uygun olarak verilmi� Mahkeme/Savc�l�k kararlar� ve ki�inin a��k yaz�l� onay� d���nda hi�bir �ekilde ���nc� ki�iler taraf�ndan kullan�lamayacak, kopyalanmayacak, i�lenemeyecek, da��t�lamayacak ve yay�nlanmayacakt�r.</br>
                    Ki�isel bilgi kullan�m�m�z, bu S�zle�me'nin bir par�as�n� olu�turan Gizlilik Politikas�na tabi olacakt�r. L�TFEN G�ZL�L�K POL�T�KASINI D�KKATL�CE OKUYUNUZ. Bu politika, ki�isel bilgileri nas�l kullanaca��m�z ve belli ko�ullarda kimlere verece�imiz konusu da dahil, ki�isel bilgileriniz ile ilgili olarak sizlerin haklar�n� ve bizlerin y�k�ml�l�klerini ele almaktad�r. </p>      

                    <div class="title-side">
                        <p class="h3">
                           17-H�ZMET�N DURDURULMASI VE SONA ERD�R�LMES� 
                        </p>
                    </div>
                    <p>"Site"de verilen "Hizmet"i;</br>
                    Bak�m ya da tamir i�leri i�in;</br> 
                    ��erikleri ya da "Hizmet"lerin i�levini zaman i�inde g�ncellemek ya da y�kseltmek i�in;</br> 
                    Sizin bu Ko�ullar� ihlal etti�inizi ya da ihlal edebilece�inizi d���nmemiz halinde durdurma hakk�m�z bulunmaktad�r.</br> 
                    Bu S�zle�me'nin h�k�m ve ko�ullar�n�n muhtemel bir ihlalini ara�t�rmak ya da engellemek i�in Hizmetlere eri�iminizi durdurursak, bu S�zle�me bu durdurma s�resinde de ge�erli olmaya devam edecektir.</br></br>

                    Hizmetin t�m� ya da bir k�sm�na eri�iminizi sona erdirebiliriz:</br>
                    Hizmete eri�iminizi sona erdirirsek, Hizmette depolam�� oldu�unuz t�m bilgileri, e-mailleri ve verileri silme hakk�m�z bulunmaktad�r. Bu sebeple, t�m bilgilerin kopyalar�n� Hizmetten ayr� olarak ba�ka herhangi bir depolama cihaz�nda saklaman�z� �neririz.</br>
                    Vodafone; teknik, ticari ya da i�letimsel sebeplerle ya da kamu yarar�na ili�kin sebeplerle "Site"de sundu�u Hizmetleri her zaman genel olarak geri �ekebilir ya da de�i�tirebilir. Hizmetlerin Vodafone taraf�ndan kesin olarak durdurulmas� halinde, Hizmetlerin durdurulmas�ndan makul bir s�re �nce bu durum size bildirilecektir.</br> Durdurma, geri alma ya da de�i�iklik sebebine ba�l� olarak, �nceden bildirimde bulunmak her zaman m�mk�n olmayabilir. Fesih ne sizin ne de bizim do�an haklar�m�z� ve y�k�ml�l�klerimizi etkileyecektir.</br>
                    "Site"deki talimatlar� takip ederek ya da yukar�da 4.maddede a��kland��� �ekilde bizimle ba�lant� kurarak Hizmeti her zaman durdurabilirsiniz. Hizmetin durdurulmas�, taraf�n�zca kullan�lan Hizmetlerin �cretini ya da Hizmetin kullan�m� s�ras�nda sat�n al�nan ���nc� mallar�n�n ya da Hizmetlerinin �cretini �deme y�k�ml�l���n�z� etkilemeyecektir.</p>      

                    <div class="title-side">
                        <p class="h3">
                           18-UYGULANACAK HUKUK VE �HT�LAFIN ��Z�M�
                        </p>
                    </div>
                    <p>Bu H�k�mler T�rk hukukuna tabi olacak ve T�rk hukukuna g�re yorumlanacakt�r ve �stanbul Merkez Mahkemelerinin, ihtilaf�n ��z�m� konusunda m�nhas�r olmayan yetkiye sahip oldu�unu siz ve biz kabul ederiz. </br>S�ZLE�MEY� OKUDUM VE YUKARIDA YER ALAN T�M H�K�MLER�, A�IK VE H�R �RADE BEYANIM DO�RULTUSUNDA KABUL ED�P ONAYLIYORUM.  </p> 

                    <div class="title-side">
                        <p class="h3">
                           II.G�ZL�L�K POL�T�KASI
                        </p>
                    </div>
                    <p> 1. Aboneden istenen ki�isel bilgiler, aboneye "Hizmet" verilebilmesi i�in gerekli olup, bu ki�isel bilgiler Vodafone Telekom�nikasyon A.�. b�nyesinde muhafaza alt�ndad�r.</br>
                    2. Aboneye ait ki�isel bilgiler; Telekom�nikasyon mevzuat�na uygun olarak ve Elektronik Haberle�me Sekt�r�nde Ki�isel Verileri ��lenmesi ve Gizlili�inin Korunmas� Hakk�nda Y�netmelik gere�ince, Telekom�nikasyon "Hizmet"lerini pazarlamak ya da katma de�erli "Hizmet"leri sa�lamak amac�yla; abone veya kullan�c� ki�isel bilgilerinin kullan�lmas�na izin verdi�i takdirde, Vodafone Telekom�niksyon A.�. taraf�ndan, bu t�r "Hizmet"ler ve pazarlama i�in gerekli kapsam ve s�rede i�lenebilir. Kullan�c� ve aboneler, ki�isel bilgilerinin i�lenmesi i�in verdikleri izinleri her zaman geri alabilirler.</br>
                    3. Vodafone Telekom�nikasyon A.�.; abonenin veya kullan�c�n�n onay�n� almak ko�uluyla, telekom�nikasyon "Hizmet"lerinin pazarlanmas� ya da katma de�erli "Hizmet"lerin sa�lanmas� amac�yla, i�lenen ki�isel bilgileri ve bu t�r i�lemin s�resini abone ve kullan�c�lara bildirecektir. </br>
                    4. Afet ve acil durum halleri ile kolluk g��leri, amb�lans ve itfaiye "Hizmet"leri dahil t�m acil aramalara ili�kin acil yard�m �a�r�lara cevap vermek amac�yla; abonenin veya kullan�c�n�n r�zas� olmasa bile abonenin yer verisini ve kimli�ini, kullan�c�n�n ise yer verisini i�eren bilgiler Telekom�nikasyon Mevzuat� gere�ince eri�ilebilir tutacakt�r. </br>
                    5. Abone ki�isel bilgileri, yasalara uygun olarak verilmi� Mahkeme/Savc�l�k kararlar�, yasal istisnalar d���nda, hi�bir �ekilde ���nc� ki�ilere verilmez. </br>
                    6. Vodafone Telekom�nikasyon A.�.'nin hedefi, abone bilgilerini g�ncel tutmakt�r.Bu nedenle belirli zaman aral�klar� ile abonelerden ki�isel bilgilerinin g�ncellenmesi talep edilebilecektir.</br>
                    7. Vodafone Telekom�nikasyon A.�., kendi personeli de dahil olmak �zere, abone bilgilerine hi� kimsenin izinsiz ula�amamas� i�in bili�im sistemleri �zerinde s�k� bir g�venlik politikas� uygulamaktad�r.</br>
                    8. Vodafone Telekom�nikasyon A.�., meydana gelebilecek bir sahtecilik/doland�r�c�l�k ya da herhangi bir soru�turma ya da �ebeke g�venli�i ihlali konusunda yasal merciler ve di�er ilgili kurumlar ile i�birli�i yapabilir ve yasalar taraf�ndan gerekli g�r�len hallerde ya da adli makamlar�n talebini yerine getirilmesi halinde, elde edilen her t�rl� bilgiyi (ki�isel veriler dahil) if�a etme hakk� da sakl�d�r.</br>
                    9. Abone bilgilerine ula�ma izni olan yetkili Vodafone Grubu'na dahil t�m �irketler, t�m Vodafone grubu personeli ve t�m ���nc� �ah�slar, gizlilik mecburiyeti uygulamas�na �zellikle uymak zorunlulu�undad�rlar. </p>                   
                </div>
            </div>
        </div>
        <div id="esaslar" class="pop-up esaslar" >
            <div class="container">
                <span class="close"></span>
                <div class="row">
                    <strong>Vodafone Red Netflix Paketi Kampanya Ko�ullar�:</strong><br><br>
					<p class="h2" style="color: #e60000!important;"><strong>Vodafone Red Netflix Paketi : </strong></p></br>
					
					<p>� 3 ay hediye Netflix �yeli�i sadece <strong>Yeni Red 10, Yeni Red 20, 4.5G Red 10, 4.5G Red Elite</strong> ve <strong>Red Elite</strong> Tarifelerinde ge�erlidir. </p></br>
					<p>� Di�er Red Tarifeleri Netflix Paketi'nden, ayl�k 9,90 TL'lik data paketiyle faydalanabilir. </p></br>
					<p>� Hediye Netflix �yelikleri d���ndaki Netflix Paketi'nden, di�er Red Tarifelerindeki aboneler ayl�k 9,90 TL'ye 3 ay ge�erli ayl�k 1 GB paket al�mlar�yla faydalanabilmektedir. </p></br>
					<p>� 1 GB internet paketi al�nd�ktan sonra 3 ayl�k Netflix �yeli�i otomatik tan�mlanacakt�r. </p></br>
					<p>� Abonelerin sadece �yelik bilgilerini doldurmalar� gerekmektedir.</p></br>
					<p>� Kampanya hem yeni gelen hem mevcut aboneleri �in ge�erlidir. </p></br>
					<p>� Hediye Netflix �yeli�i sadece 3 ayl�k standart Netflix Paketi (ayn� anda 2 cihazdan yay�n/HD) i�in ge�erlidir. </p></br>
					<p>� An�nda izlemek i�in Netflix uyumlu cihaz (mobil cihazlar, Smart TV [IMVT1], PlayStation) ve internet ba�lant�s� gereklidir. </p></br>
					<p>� Netflix hakk� devredilemez veya paraya �evrilemez. </p></br>
					<p>� Ba�ka Netflix �yeli�i ile de�i�tirilemez veya birle�tirilemez. </p></br>
					<p>� Kampanya dahilinde verilen 1 GB cepten internet yurti�inde ge�erlidir. </p></br>
					<p>� 3 ayl�k d�nem sonunda abone iptal etmedi�i takdirde, Netflix �yeli�i ayl�k 27,99 TL'lik standart paketle, g�nderilecek uyar� mesaj� ile abone �yeli�ini devam ettirmek isterse �cretlendirilecektir. </p></br>
					<p>� De�i�iklik hakk� Vodafone ve Netflix'te sakl�d�r. </p></br>
					<p>� Kampanya, 29.10.2016-20.09.2017 tarihleri aras�nda ge�erlidir. </p></br>
					<p>� Detaylar: <a style="color: #e60000;" target="_blank" href="http://netflix.com/termsofuse">netflix.com/termsofuse</a> ve <a style="color: #e60000;" target="_blank" href="http://vodafone.com.tr/">vodafone.com.tr</a>   
                </div>
            </div>
        </div>
    </div>
</body>
</html>   