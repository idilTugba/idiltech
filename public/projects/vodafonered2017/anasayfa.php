﻿<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="language" content="tr" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="keywords" content="vodafone,vodafone red,red,red ayrıcalıkları,red dünyası,red fırsatları,red tarifeleri, red small, red medium, red large, elite" />
    <meta name="description" content="Yeni Red tarifeleriyle akıllı cihaz indirimlerinden, restoran indirimlerine, yurtdışı avantajlarından, seyahat indirimlerine kadar birçok fırsat sizi bekliyor. Vodafone Red'le Hayat Daha Kolay!" />
    <meta property="og:title" content="Vodafone Red">
    <meta property="og:description" content="Yeni Red tarifeleriyle akıllı cihaz indirimlerinden, restoran indirimlerine, yurtdışı avantajlarından, seyahat indirimlerine kadar birçok fırsat sizi bekliyor. Vodafone Red'le Hayat Daha Kolay!" />
    <meta property="og:image" content="http://www.vodafone.com.tr/img/vodafone_logo.gif" />
    <meta property="og:site_name" content="Vodafone" />
    <meta name="search_image_url" content="http://www.vodafone.com.tr/img/search/red.jpg" />
    <meta name="search_name" content="Vodafone Red" />
    <meta name="search_description" content="Vodafone Red" />
    <meta name="search_category" content="plans" />
    <meta name="robots" content="index, follow, odp" />
    <meta name="googlebot" content="index, follow" />
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

    <title>Vodafone Red</title>

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
        $('document').ready(function () {
            $('#slider-banner').owlCarousel({
                items: 1,
                autoplay: true,
                autoplayTimeout:4000,
                autoplaySpeed: 500,
                margin: 0,
                singleItem: true,
                autoWidth: true,
                mouseDrag: false,
                touchDrag: true,
                dotsSpeed: 400,
                rewindSpeed: 2000,
                fallbackEasing: 'swing',
                loop: true,
                nav: true,
                slideSpeed : 500,
                dragEndSpeed: 300,
                smartSpeed: 200,
                responsiveClass:true,
                responsive:{
                        800:{
                            autoplaySpeed: 1000,
                            dotsSpeed: 1100
                        }
                    }
            });
            
            $('#grid-side').owlCarousel({
                autoPlay: false,
                margin: 0,
                singleItem: true,
                items: 1,
                autoWidth: true,
                mouseDrag: false,
                touchDrag: true,
                loop: true,
                rewindSpeed: 2000,
                navSpeed: 500,
                dotsSpeed: 400,
                nav: true,
                slideSpeed : 700,
                dragEndSpeed: 300,
                smartSpeed: 200,
                responsiveClass:true,
                responsive:{
                        800:{
                            navSpeed: 1100,
                            dotsSpeed: 1100
                        }
                    }
            });

            $('#grid-side .owl-dot').click(function(){
                utag.view({page_name:'bireysel:red ana sayfa:main slider', page_channel:'bireysel:red', page_type:'bireysel:red'});
            });
            
            $('#grid-side .owl-prev').click(function(){
                setTimeout(function(){
                    utag.view({page_name:'bireysel:red ana sayfa:main slider', page_channel:'bireysel:red', page_type:'bireysel:red'});
                    var gridNo = $('#grid-side .owl-item.active').find('.no').attr('data-id');
                    $('#now').text('0'+gridNo);                    
                },1000);
            });

            $('#grid-side .owl-next').click(function(){
                setTimeout(function(){
                    utag.view({page_name:'bireysel:red ana sayfa:main slider', page_channel:'bireysel:red', page_type:'bireysel:red'});
                    var gridNo = $('#grid-side .owl-item.active').find('.no').attr('data-id');
                    $('#now').text('0'+gridNo);
                },1000);
            });



            $('#twit-side').owlCarousel({
                autoplay: true,
                loop: true,
                margin: 0,
                singleItem: true,
                items: 1,
                dots: false,
                mouseDrag: false,
                touchDrag: false,
                smartSpeed: 500,
                animateIn: 'flipInX'
            });



            $('#tarife-slider').clone().prependTo(".tarife-holder.home-tarife").addClass('tarife-slider-mobile');
            $('.tarife-slider-mobile').removeAttr("id");
            $('.tarife-slider').not('.tarife-slider-mobile').owlCarousel({
                autoPlay: false,
                loop: true,
                margin: 0,
                singleItem: true,
                items: 2,
                dots: false, 
                mouseDrag: false,
                touchDrag: true,
                rewindSpeed: 5000,
                autoWidth: true,
                nav: true,
                smartSpeed: 1000
            });

            $('.teklifler-slider-holder').clone().appendTo(".teklifler-slider").addClass('teklifler-slider-mobile');
            $('.teklifler-slider-mobile').owlCarousel({
                autoPlay: false,
                loop: true,
                margin: 0,
                nav: true,
                singleItem: true,
                mouseDrag: false,
                touchDrag: true,
                items: 1,
                smartSpeed: 500
            });

            //table nav
              $('.tarife-slider .owl-next, .tarife-slider .owl-prev').click(function(){
                utag.view({page_name:'bireysel:red ana sayfa:tarife slider:', page_channel:'bireysel red', page_type:'bireysel:red' });
              });

              $('.tarife-slider-nav .prev').click(function(){
                utag.view({page_name:'bireysel:red ana sayfa:tarife slider:', page_channel:'bireysel red', page_type:'bireysel:red' });
                var activeTable =  $('.tarife-slider-mobile').find('.tarife-box.active').index();
                $('.tarife-slider-mobile').find('.tarife-box').eq(activeTable).removeClass('active');
                if(activeTable==0){
                  activeTable = 5;
                }else{
                  activeTable = activeTable - 1;
                }
                $('.tarife-slider-mobile').find('.tarife-box').eq(activeTable).addClass('active');          
              });

              $('.tarife-slider-nav .next').click(function(){
                utag.view({page_name:'bireysel:red ana sayfa:tarife slider:', page_channel:'bireysel red', page_type:'bireysel:red' });
                var activeTable =  $('.tarife-slider-mobile').find('.tarife-box.active').index();
                $('.tarife-slider-mobile').find('.tarife-box').eq(activeTable).removeClass('active');
                if(activeTable==5){
                  activeTable = 0;
                }else{
                  activeTable = activeTable + 1;
                }
                $('.tarife-slider-mobile').find('.tarife-box').eq(activeTable).addClass('active');      
              });  

            //table nav
        });

    </script>
    
    <!-- The utag.sync.js script should run as early as possible, preferably
     in the head of the document. See the Sample HTML for more information -->
    <script src="//tags.tiqcdn.com/utag/vodafone/tr-main/prod/utag.sync.js"></script>

    


</head>
<body>
    <script type="text/javascript">
    var utag_data = {
      page_name : "bireysel:red ana sayfa", // Page name 
      page_channel : "bireysel:red", // s.channel 
      page_type : "bireysel:red ana sayfa", // s.prop5 
      login_status: "", //logged in or logged out
      page_market : "TR", // s.prop6 
      link_tracking: "", // 
    }
    </script>

    <!-- Loading script asynchronously -->
    <script type="text/javascript">
        (function(a,b,c,d){
        a='//tags.tiqcdn.com/utag/vodafone/tr-main/prod/utag.js';
        b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;
        a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);
        })();
    </script>

    <div id="rotatePage"></div> 
    <div id="how" class="how">
        <a href="redli-ol.php"><p>Nasıl Vodafone Red’li Olabilirim? <span class="icon-chevron-thin-right"></span></p></a>
    </div>
    <div id="icon-menu" class="icon-menu">
      <img src="dist/img/open.png" class="open" alt=""><img src="dist/img/close.png" class="close" alt="">
    </div>
    <div id="mobile-menu" class="mobile-menu">
      <div class="container">
        <div class="row">
          <div class="rhombus">
               <a href="anasayfa.php"><img src="dist/img/rhombus-logo.png" class="logo" alt=""></a>
          </div>
          <ul>
            <li><a href="red-firsatlari.php">VODAFONE </br>RED'LİLERE </br>ÖZEL FIRSATLAR</a></li>
            <li><a href="tarifeler.php">İHTİYACA UYGUN </br> VODAFONE RED </br> TARİFELERİ</a></li>
            <li><a href="redli-ol.php">NASIL VODAFONE RED'Lİ </br> OLABİLİRİM?</a></li>
          </ul>
          <div class="social">
            <p>BİZİ TAKİP ET</p>
            <a target="_blank" href="https://www.facebook.com/vodafoneTR/ " ><span class="icon-social-fb"></span></a>
            <a target="_blank" href="https://twitter.com/vodafonetr " ><span class="icon-social-tw"></span></a>
            <a target="_blank" href="https://www.youtube.com/vodafonetr"><span class="icon-play"></span></a>
            <a target="_blank" href="http://forum.vodafone.com.tr/ " ><span class="icon-bubbles2"></span></a>
          </div>
          <div class="red-logo"><a href="anasayfa.php"><img src="dist/img/red-logo2.png" alt=""></a></div>
        </div>
      </div>
    </div>
    <div id="wrap" class="wrap">
        <div class="content-holder">
            <div class="container">
                <div class="row">
                    <div class="rhombus">
                        <a href="anasayfa.php"><img src="dist/img/rhombus-logo.png" class="logo" alt=""></a>
                    </div>
                    <header id="header" class="header">
                        <div class="container">
                            <div class="row">
                                <ul>            
                                    <li><a href="red-firsatlari.php">Neden Red'li Olmalıyım?</a></li>
                                    <li><a href="tarifeler.php">Red Tarifeleri</a></li>
                                    <li><a href="redli-ol.php">Nasıl Red'li Olabilirim?</a></li>
                                </ul>
                            </div>
                        </div>
                    </header>
                    <div id="slider-banner" class="page slider">
                        <div class="slider-banner-item">
                            <img src="dist/img/kampanyalar/netflix.jpg" alt="" class="bg">
                            <img src="dist/img/kampanyalar/netflix-m.jpg" alt="" class="bg mobile">
                            <div class="text-holder">
                                <div class="text home-text">
                                    <div class="holder">
                                        <p class="h3">3 aylık hediye Netflix </br>sadece Vodafone Red'de</p>
                                        <p class="h4">Dünyanın en büyük internet televizyonu Netflix’in tadını 3 ay ücretsiz çıkarın.</p>
                                        <a href="redli-ol.php" class="button-red">Hemen Red'li Ol <span class="left"></span></a>
                                    </div>
                                </div>
                                <div class="red-logo">
                                    <img src="dist/img/red-logo.png" alt="">
                                </div>
                                <div class="red-logo netflix-logo">
                                    <img src="dist/img/netflix-logo2.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="slider-banner-item">
                            <img src="dist/img/kampanyalar/digiturk-home.jpg" alt="" class="bg">
                            <img src="dist/img/kampanyalar/digiturk-home-m.jpg" alt="" class="bg mobile">
                            <div class="text-holder">
                                <div class="text home-text">
                                    <div class="holder">
                                        <p class="h3">Digiturk Play Süper Lig Taraftar Paketi ile maç keyfi cebinizde</p>
                                        <p class="h4">Takımınızın maçlarını sezon boyunca nerede istiyorsanız orada izleyin.</p>
                                        <a href="redli-ol.php" class="button-red">Hemen Red'li Ol <span class="left"></span></a>
                                    </div>
                                </div>
                                <div class="red-logo">
                                    <img src="dist/img/red-logo.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="slider-banner-item">
                            <img src="dist/img/kampanyalar/yurtdisi-home.jpg" alt="" class="bg">
                            <img src="dist/img/kampanyalar/yurtdisi-home-m.jpg" alt="" class="bg mobile">
                            <div class="text-holder">
                                <div class="text home-text no3-slider">
                                    <div class="holder">
                                        <p class="h3">Tarifeniz yurt dışında </br>da geçerli </p>
                                        <p class="h4">Vodafone’un global gücüyle Red tarifeniz 51 ülkede aynen geçerli</p>
                                        <a href="redli-ol.php" class="button-red">Hemen Red'li Ol <span class="left"></span></a>
                                    </div>
                                </div>
                                <div class="red-logo">
                                    <img src="dist/img/red-logo.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="title-side">
                        <p class="h3"><strong><span>Vodafone Red'li</span> </strong> Olmanız İçin <strong><span style="display: inline!important;" class="number-grid">10</span> Neden</strong></p>
                    </div>
                    <div class="slider-holder">
                        <div id="grid-side" class="grid-side">
                            <div data-id="1" class="no no6">
                                <div class="part part1">
                                    <div class="item item1">
                                        <a href="Netflix.php">
                                            <img src="dist/img/1.jpg" alt="">
                                            <img src="dist/img/1m.jpg" class="mobile" alt="">
                                            <p class="h3">Dünyanın en büyük internet televizyonu <strong>Netflix, sadece Vodafone Red’de</strong></p>
                                        </a>
                                    </div>
                                    <div class="item item2">
                                        <a href="budget-indirimi.php">
                                            <img src="dist/img/2.jpg" alt="">
                                            <img src="dist/img/2m.jpg" class="mobile" alt="">
                                            <p class="h3">Budget'tan<strong> %50 indirimli</strong> araç kiralama fırsatı Vodafone Red'de</p>
                                        </a>
                                    </div>
                                    <div class="item item3">
                                        <a href="SpotifyPremiumUyeligiFirsati.php">
                                            <img src="dist/img/3.jpg" >
                                            <img src="dist/img/3m.jpg" class="mobile" alt="">
                                            <p class="h3"><strong>Premium Spotify</strong> üyeliğiyle 30 milyon şarkıyı <strong>ücretsiz</strong> dinleyin</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="part part2">
                                    <div class="item item4">
                                        <a href="yurtdisinda-kullanim.php">
                                            <img src="dist/img/4.jpg" alt="">
                                            <p class="h3">Tarifenizi <strong>yurt dışında da</strong> aynen kullanmaya devam edin</p>
                                        </a>
                                    </div>
                                    <div class="item item5">
                                        <a href="digiturk-play-super-lig-taraftar-paketi.php">
                                            <img src="dist/img/5.jpg" alt="">
                                            <img src="dist/img/5m.jpg" class="mobile" alt="">
                                            <p class="h3">Ücretsiz Digiturk Play <strong>Süper Lig Taraftar Paketi</strong> ile maçlar cebinizde</p>
                                        </a>
                                    </div>
                                    <div class="item item4 mobile">
                                        <a href="yurtdisinda-kullanim.php">
                                            <img src="dist/img/4m.jpg" class="mobile" alt="">
                                            <p class="h3">Tarifenizi <strong>yurt dışında da</strong> aynen kullanmaya devam edin</p>
                                        </a>
                                    </div>
                                    <div class="item item5">
                                        <a href="anlasmali-havalimanlarinda-ucretsiz-hizli-gecis-kampanyasi.php">
                                            <img src="dist/img/6.jpg" alt="">
                                            <img src="dist/img/6m.jpg" class="mobile" alt="">
                                            <p class="h3"> Vodafone Red'liler <strong>TAV Havalimanları</strong>’nda <strong>ücretsiz</strong> hızlı geçişten yararlanıyor</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div data-id="2" class="no no6 no4">
                                <div class="part part1">
                                    <div class="item item1">
                                        <a href="red-sinema-kampanyasi.php">
                                            <img src="dist/img/grid4-1.jpg" alt="">
                                            <img src="dist/img/grid4-1m.jpg" class="mobile" alt="">
                                            <p class="h3">Vodafone Red’liler sinemada 1 bilet aldığında <strong>2. bilet hediye</strong></p>
                                        </a>
                                    </div>
                                </div>
                                <div class="part part2">
                                    <div class="item item2">
                                        <a href="ucretsiz-lounge-hizmeti.php">
                                            <img src="dist/img/grid4-2.jpg" alt="">
                                            <img src="dist/img/grid4-2m.jpg" class="mobile" alt="">
                                            <p class="h3">Havaalanlarında<strong> ücretsiz lounge hizmeti</strong></p>
                                        </a>
                                    </div>
                                    <div class="item item3">
                                        <a href="aile-indirimi.php">
                                            <img src="dist/img/grid4-3.jpg" alt="">
                                            <img src="dist/img/grid4-3m.jpg" class="mobile" alt="">
                                            <p class="h3">Vodafone Red tarifelerinde <strong>aileniz %35 indirimli</strong></p>
                                        </a>
                                    </div>
                                    <div class="item item4">
                                        <a href="yurtdisini-arama.php">
                                            <img src="dist/img/grid4-4.jpg" alt="">
                                            <p class="h3">Yurt dışını <strong>yurt içini arar gibi</strong> arayın</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="part part3">
                                    <div class="item item4 mobile">
                                        <a href="yurtdisini-arama.php">
                                            <img src="dist/img/grid4-4m.jpg" alt="">
                                            <p class="h3">Yurt dışını <strong>yurt içini arar gibi</strong> arayın</p>
                                        </a>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <div class="number">
                            <span id="now" class="now">01</span> <span class="slash">/</span> <span id="all">02</span>
                        </div>
                        <a class="tumunu-gor-link" href="red-firsatlari.php"><p class="h4"><span class="icon-th-large"></span><strong>DİĞER NEDENLERİ</strong> GÖR </p></a>
                    </div>
                    <div class="title-side">
                        <p class="h3"><strong><span>İhtiyaca Uygun </span> Vodafone Red Tarifeleri</strong></p>
                    </div>
                    <div class="tarife-holder home-tarife">
                        <div class="tarife-slider" id="tarife-slider">
                            <div class="tarife-box red">
                                <div class="red-logo netflix-logo">
                                    <img src="dist/img/netflix-logo2.png" alt="">
                                    <p>3 Ay Hediye </p>
                                </div>
                                <table>
                                    <tr class="title">
                                        <td>
                                            <p class="h4">4.5G Red 10</p>
                                            <p>Sınırlı Sayıda</p>
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
                                            <p class="detail">80 <span class="icon-turkish-lira"></span> Kontratsız</p>
                                            <span class="plus">+</span>
                                            <p class="h6"><span class="icon-plus"></span><span>Her Yöne</span></br><strong>2.000 DK</strong></br><strong>1.000 SMS </strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail">
                                            <p><strong>Vodafone'lular ve Sabit Hatlarla </strong></p>
                                            <p>Sınırsız Konuşma</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail mini-slider">
                                            <p><strong>4.5G Servisleri</strong></p>
                                            <ul class="table-service">
                                                <li>
                                                    <a href="vodafone-tv.php">
                                                        <img src="dist/img/1square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Vodafone TV <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu Tarife ile birlikte<strong> Vodafone TV</strong>'ye <strong>ücretsiz</strong> sahip olabilirsiniz.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="call-plus.php">
                                                        <img src="dist/img/2square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Call+ <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>Call+</strong>'a <strong>ücretsiz</strong> sahip olabilirsiniz.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="vodafone-guvenli-net.php">
                                                        <img src="dist/img/3square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">GüvenliNet <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>GüvenliNet</strong>'ten <strong>ücretsiz</strong> faydalanabilirsin.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="vodafone-guvenli-depo.php">
                                                        <img src="dist/img/4square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Güvenli Depo <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>Güvenli Depo</strong>'dan <strong>ücretsiz</strong> yaralanabilirsin.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="big2">
                                                    <img src="dist/img/6square.png" title="service" alt="">
                                                    <div class="tooltip">
                                                        <p class="title">Spotify Premium veya Digiturk Play Sinema Paketi <span class="icon-info-circle"></span></p>
                                                        <div class="tooltip-first">
                                                            <p>Bu tarifeyle <strong><a class="link2" href="SpotifyPremiumUyeligiFirsati.php" >Spotify Premium</a> veya <a class="link2" href="digiturk-play-sinema-uyeligi.php" >Digiturk Play Sinema Paketi</a></strong>'nden <strong>ücretsiz</strong> faydalanabilirsin.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a class="color" href="Kampanyalar.php#Red10">Bu Tarifede Geçerli Fırsatlar</a>
                                            <a href="tarifeler.php#Red10">Detaylı İncele</a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="tarife-box active red">
                                <table>
                                    <tr class="title">
                                        <td>
                                            <p class="h4">4.5G Red XS</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class="h5">4 GB</p>
                                            <div class="tooltip tooltip1">
                                                <span class="icon-info-circle"></span>
                                                <div class="tooltip-first">
                                                    <p>Aylık ek paket <strong>1GB/15TL,</strong> ek paket bittiğinde ise her <strong>500MB/5TL</strong></p>
                                                    <a class="hemen-al" href="redli-ol.php">Hemen Al</a>
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
                                            <p class="detail">60 <span class="icon-turkish-lira"></span> Kontratsız</p>
                                            <span class="plus">+</span>
                                            <p class="h6"><span class="icon-plus"></span><span>Her Yöne</span></br><strong>1.000 DK</strong></br><strong>1.000 SMS </strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail">
                                            <p><strong>Vodafone'lular ve Sabit Hatlarla </strong></p>
                                            <p>Sınırsız Konuşma</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail mini-slider">
                                            <p><strong>4.5G Servisleri</strong></p>
                                            <ul class="table-service">
                                                <li>
                                                    <a href="vodafone-tv.php">
                                                        <img src="dist/img/1square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Vodafone TV <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu Tarife ile birlikte<strong> Vodafone TV</strong>'ye <strong>ücretsiz</strong> sahip olabilirsiniz.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="call-plus.php">
                                                        <img src="dist/img/2square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Call+ <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>Call+</strong>'a <strong>ücretsiz</strong> sahip olabilirsiniz.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="vodafone-guvenli-net.php">
                                                        <img src="dist/img/3square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">GüvenliNet <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>GüvenliNet</strong>'ten <strong>ücretsiz</strong> faydalanabilirsin.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="vodafone-guvenli-depo.php">
                                                        <img src="dist/img/4square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Güvenli Depo <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>Güvenli Depo</strong>'dan <strong>ücretsiz</strong> yaralanabilirsin.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a class="color" href="Kampanyalar.php#RedXS">Bu Tarifede Geçerli Fırsatlar</a>
                                            <a href="tarifeler.php#RedXS">Detaylı İncele</a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="tarife-box purple">
                                <table>
                                    <tr class="title">
                                        <td>
                                            <p class="h4">4.5G Red S</p>
                                            <p>En Çok Satan Tarife</p>                                    
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class="h5">6 GB </p>
                                            <div class="tooltip tooltip1">
                                                <span class="icon-info-circle"></span>
                                                <div class="tooltip-first">
                                                    <p>Aylık ek paket <strong>1GB/15TL,</strong> ek paket bittiğinde ise her <strong>500MB/5TL</strong></p>
                                                    <a class="hemen-al" href="redli-ol.php">Hemen Al</a>
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
                                            <p class="detail">70 <span class="icon-turkish-lira"></span> Kontratsız</p>
                                            <span class="plus">+</span>
                                            <p class="h6"><span class="icon-plus"></span><span>Her Yöne</span></br><strong>1.000 DK</strong></br><strong>1.000 SMS </strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail">
                                            <p><strong>Vodafone'lular ve Sabit Hatlarla </strong></p>
                                            <p>Sınırsız Konuşma</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail mini-slider">
                                            <p><strong>4.5G Servisleri</strong></p>
                                            <ul class="table-service">
                                                <li>
                                                    <a href="vodafone-tv.php">
                                                        <img src="dist/img/1square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Vodafone TV <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu Tarife ile birlikte<strong> Vodafone TV</strong>'ye <strong>ücretsiz</strong> sahip olabilirsiniz.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="call-plus.php">
                                                        <img src="dist/img/2square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Call+ <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>Call+</strong>'a <strong>ücretsiz</strong> sahip olabilirsiniz.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="vodafone-guvenli-net.php">
                                                        <img src="dist/img/3square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">GüvenliNet <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>GüvenliNet</strong>'ten <strong>ücretsiz</strong> faydalanabilirsin.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="vodafone-guvenli-depo.php">
                                                        <img src="dist/img/4square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Güvenli Depo <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>Güvenli Depo</strong>'dan <strong>ücretsiz</strong> yaralanabilirsin.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="big2">
                                                    <img src="dist/img/6square.png" title="service" alt="">
                                                    <div class="tooltip">
                                                        <p class="title">Spotify Premium veya Digiturk Play Sinema Paketi <span class="icon-info-circle"></span></p>
                                                        <div class="tooltip-first">
                                                            <p>Bu tarifeyle <strong><a class="link2" href="SpotifyPremiumUyeligiFirsati.php" >Spotify Premium</a> veya <a class="link2" href="digiturk-play-sinema-uyeligi.php" >Digiturk Play Sinema Paketi</a></strong>'nden <strong>ücretsiz</strong> faydalanabilirsin.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a class="color" href="Kampanyalar.php#RedS">Bu Tarifede Geçerli Fırsatlar</a>
                                            <a href="tarifeler.php#RedS">Detaylı İncele</a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="tarife-box green">
                                <table>
                                    <tr class="title">
                                        <td>
                                            <p class="h4">4.5G Red M</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class="h5">8 GB  </p>
                                            <div class="tooltip tooltip1">
                                                <span class="icon-info-circle"></span>
                                                <div class="tooltip-first">
                                                    <p>Aylık ek paket <strong>1GB/15TL,</strong> ek paket bittiğinde ise her <strong>500MB/5TL</strong></p>
                                                    <a class="hemen-al" href="redli-ol.php">Hemen Al</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="kontrat">
                                            <p class="h5"><span class="icon-turkish-lira"></span>69</p>
                                            <div class="tooltip tooltip1">
                                                <span class="icon-info-circle"></span>
                                                <div class="tooltip-first">
                                                    <p><strong>12 + 12</strong> ay kalma sözünüze</p>
                                                </div>
                                            </div>
                                            <p class="detail">80 <span class="icon-turkish-lira"></span> Kontratsız</p>
                                            <span class="plus">+</span>
                                            <p class="h6"><span class="icon-plus"></span><span>Her Yöne</span></br><strong>2.000 DK</strong></br><strong>1.000 SMS </strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail">
                                            <p><strong>Vodafone'lular ve Sabit Hatlarla </strong></p>
                                            <p>Sınırsız Konuşma</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail mini-slider">
                                            <p><strong>4.5G Servisleri</strong></p>
                                            <ul class="table-service">
                                                <li>
                                                    <a href="vodafone-tv.php">
                                                        <img src="dist/img/1square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Vodafone TV <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu Tarife ile birlikte<strong> Vodafone TV</strong>'ye <strong>ücretsiz</strong> sahip olabilirsiniz.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="call-plus.php">
                                                        <img src="dist/img/2square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Call+ <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>Call+</strong>'a <strong>ücretsiz</strong> sahip olabilirsiniz.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="vodafone-guvenli-net.php">
                                                        <img src="dist/img/3square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">GüvenliNet <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>GüvenliNet</strong>'ten <strong>ücretsiz</strong> faydalanabilirsin.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="vodafone-guvenli-depo.php">
                                                        <img src="dist/img/4square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Güvenli Depo <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>Güvenli Depo</strong>'dan <strong>ücretsiz</strong> yaralanabilirsin.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="big2">
                                                    <img src="dist/img/6square.png" title="service" alt="">
                                                    <div class="tooltip">
                                                        <p class="title">Spotify Premium veya Digiturk Play Sinema Paketi <span class="icon-info-circle"></span></p>
                                                        <div class="tooltip-first">
                                                            <p>Bu tarifeyle <strong><a class="link2" href="SpotifyPremiumUyeligiFirsati.php" >Spotify Premium</a> veya <a class="link2" href="digiturk-play-sinema-uyeligi.php" >Digiturk Play Sinema Paketi</a></strong>'nden <strong>ücretsiz</strong> faydalanabilirsin.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a class="color" href="Kampanyalar.php#RedM">Bu Tarifede Geçerli Fırsatlar</a>
                                            <a href="tarifeler.php#RedM">Detaylı İncele</a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="tarife-box yellow">
                                <table>
                                    <tr class="title">
                                        <td>
                                            <p class="h4">4.5G Red L</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class="h5">12 GB </p>
                                            <div class="tooltip tooltip1">
                                                <span class="icon-info-circle"></span>
                                                <div class="tooltip-first">
                                                    <p>Aylık ek paket <strong>1GB/15TL,</strong> ek paket bittiğinde ise her <strong>500MB/5TL</strong></p>
                                                    <a class="hemen-al" href="redli-ol.php">Hemen Al</a>
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
                                            <p class="detail">100 <span class="icon-turkish-lira"></span> Kontratsız</p>
                                            <span class="plus">+</span>
                                            <p class="h6"><span class="icon-plus"></span><span>Her Yöne</span></br><strong>2.000 DK</strong></br><strong>1.000 SMS </strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail">
                                            <p><strong>Vodafone'lular ve Sabit Hatlarla </strong></p>
                                            <p>Sınırsız Konuşma</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail mini-slider">
                                            <p><strong>4.5G Servisleri</strong></p>
                                            <ul class="table-service">
                                                <li>
                                                    <a href="vodafone-tv.php">
                                                        <img src="dist/img/1square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Vodafone TV <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu Tarife ile birlikte<strong> Vodafone TV</strong>'ye <strong>ücretsiz</strong> sahip olabilirsiniz.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="call-plus.php">
                                                        <img src="dist/img/2square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Call+ <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>Call+</strong>'a <strong>ücretsiz</strong> sahip olabilirsiniz.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="vodafone-guvenli-net.php">
                                                        <img src="dist/img/3square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">GüvenliNet <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>GüvenliNet</strong>'ten <strong>ücretsiz</strong> faydalanabilirsin.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="vodafone-guvenli-depo.php">
                                                        <img src="dist/img/4square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Güvenli Depo <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>Güvenli Depo</strong>'dan <strong>ücretsiz</strong> yaralanabilirsin.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="spotify">
                                                    <span>+</span>
                                                    <a href="SpotifyPremiumUyeligiFirsati.php">
                                                        <img src="dist/img/7square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Spotify <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>Spotify Premium</strong>'dan <strong>ücretsiz</strong> faydalanabilirsiniz.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="big big2">
                                                    <img src="dist/img/5square.png" title="service" alt="">
                                                    <div class="tooltip">
                                                        <p class="title">Digiturk Play Sinema Paketi veya Süper Lig Taraftar Paketi  <span class="icon-info-circle"></span></p>
                                                        <div class="tooltip-first">
                                                            <p>Bu tarifeyle <strong><a class="link2" href="digiturk-play-sinema-uyeligi.php" >Digiturk Play Sinema Paketi</a> veya <a class="link2" href="digiturk-play-super-lig-taraftar-paketi.php" >Digiturk Play Süper Lig Taraftar Paketi</a></strong>'nden <strong>ücretsiz</strong> faydalanabilirsin.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a class="color" href="Kampanyalar.php#RedL">Bu Tarifede Geçerli Fırsatlar</a>
                                            <a href="tarifeler.php#RedL">Detaylı İncele</a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="tarife-box darkpurple">
                                <div class="red-logo netflix-logo">
                                    <img src="dist/img/netflix-logo2.png" alt="">
                                    <p>3 Ay Hediye </p>
                                </div>
                                <table>
                                    <tr class="title">
                                        <td>
                                            <p class="h4">4.5G Red Elite</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class="h5">25 GB </p>
                                            <div class="tooltip tooltip1">
                                                <span class="icon-info-circle"></span>
                                                <div class="tooltip-first">
                                                    <p>Aylık ek paket <strong>1GB/15TL,</strong> ek paket bittiğinde ise her <strong>500MB/5TL</strong></p>
                                                    <a class="hemen-al" href="redli-ol.php">Hemen Al</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="kontrat">
                                            <p class="h5"><span class="icon-turkish-lira"></span>159 </p>
                                            <div class="tooltip tooltip1">
                                                <span class="icon-info-circle"></span>
                                                <div class="tooltip-first">
                                                    <p><strong>12 + 12</strong> ay kalma sözünüze</p>
                                                </div>
                                            </div>
                                            <p class="detail">200 <span class="icon-turkish-lira"></span> Kontratsız</p>
                                            <span class="plus">+</span>
                                            <p class="h6"><span class="icon-plus"></span><span>Her Yöne</span></br><strong>10.000 DK</strong></br><strong>1.000 SMS </strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail">
                                            <p><strong>Vodafone'lular ve Sabit Hatlarla </strong></p>
                                            <p>Sınırsız Konuşma</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="detail mini-slider">
                                            <p><strong>4.5G Servisleri</strong></p>
                                            <ul class="table-service">
                                                <li>
                                                    <a href="vodafone-tv.php">
                                                        <img src="dist/img/1square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Vodafone TV <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu Tarife ile birlikte<strong> Vodafone TV</strong>'ye <strong>ücretsiz</strong> sahip olabilirsiniz.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="call-plus.php">
                                                        <img src="dist/img/2square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Call+ <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>Call+</strong>'a <strong>ücretsiz</strong> sahip olabilirsiniz.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="vodafone-guvenli-net.php">
                                                        <img src="dist/img/3square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">GüvenliNet <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>GüvenliNet</strong>'ten <strong>ücretsiz</strong> faydalanabilirsin.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="vodafone-guvenli-depo.php">
                                                        <img src="dist/img/4square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Güvenli Depo <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>Güvenli Depo</strong>'dan <strong>ücretsiz</strong> yaralanabilirsin.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="SpotifyPremiumUyeligiFirsati.php">
                                                        <img src="dist/img/7square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Spotify <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>Spotify Premium</strong>'dan <strong>ücretsiz</strong> faydalanabilirsiniz.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="digiturk-play-super-lig-taraftar-paketi.php">
                                                        <img src="dist/img/8square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Digiturk Play Sinema Paketi <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>Digiturk Play Sinema Paketi</strong>'nden <strong>ücretsiz</strong> faydalanabilirsin.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="digiturk-play-super-lig-taraftar-paketi.php">
                                                        <img src="dist/img/9square.png" title="service" alt="">
                                                        <div class="tooltip">
                                                            <p class="title">Digiturk Play Süper Lig Taraftar Paketi <span class="icon-info-circle"></span></p>
                                                            <div class="tooltip-first">
                                                                <p>Bu tarifeyle <strong>Digiturk Play Süper Lig Taraftar Paketi</strong>'nden <strong>ücretsiz</strong> faydalanabilirsin.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a class="color" href="Kampanyalar.php#RedElite">Bu Tarifede Geçerli Fırsatlar</a>
                                            <a href="tarifeler.php#RedElite">Detaylı İncele</a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="tarife-slider-nav">
                                <div class="slick-prev prev"></div>
                                <div class="slick-next next"></div>
                        </div>
                        <div class="ps">
                            <table>
                                <tr>
                                    <td><p class="h1">Tüm Tarifelerde</p><p>Geçerli Avantajlar</p> </td>
                                    <td class="list">
                                        <div class="list">
                                            <a href="yurtdisini-arama.php"><span class="icon-globe"></span><p>Yurt dışını</br>arama <span class="icon-chevron-thin-right"></span></p></a>
                                        </div>
                                        <div class="list">
                                            <a href="yurtdisinda-kullanim.php"><span class="icon-plane"></span><p>Yurt dışında</br>kullanım <span class="icon-chevron-thin-right"></span></p></a>
                                        </div>
                                        <div class="list">
                                            <a href="aile-indirimi.php"><span class="icon-users"></span><p>Aile</br>indirimi <span class="icon-chevron-thin-right"></span></p></a>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <div class="title-side">
                                <p class="h3"><strong><span>Tüm Tarifelerde </span> Geçerli Avantajlar</strong></p>
                            </div>
                            <ul>
                                <li>
                                    <a href="yurtdisini-arama.php"><span class="icon-globe"></span><p>Yurtdışını arama <span class="icon-chevron-thin-right"></span></p></a>
                                </li>
                                <li>
                                    <a href="yurtdisinda-kullanim.php"><span class="icon-plane"></span><p>Yurtdışında kullanım <span class="icon-chevron-thin-right"></span></p></a>
                                </li>
                                <li>
                                    <a href="aile-indirimi.php"><span class="icon-users"></span><p>Aile indirimi <span class="icon-chevron-thin-right"></span></p></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="banner-side">
                        <div class="text-holder">
                            <p class="h4">Akıllı Cihaz Teklifleri</p>
                            <p>Her ihtiyacınıza uygun akıllı cihazlar, uygun fiyatlara <strong>Vodafone</strong>'da. </p>
                            <!--<a href="#" class="button">Cihazları İncele</a>-->
                        </div>
                        <div class="teklifler-slider">
                            <ul class="teklifler-slider-holder">
                                <li>
                                    <img src="dist/img/akillitelefonlar/iphone.png" alt="">
                                    <p>iPhone 7</p>
                                    <a target="_blank" href="http://www.vodafone.com.tr/Cihazlar/yeni-iphone7.php">Satın Al</a>
                                </li>
                                <li>
                                    <img src="dist/img/akillitelefonlar/vodafonesmart.png" alt="">
                                    <p>Vodafone Smart Pro7</p>
                                    <a target="_blank" href=" http://cepmerkezi.vodafone.com.tr/cep-telefonlari/vodafone-smart-pro-7-siyah?icmp=consumer">Satın Al</a>
                                </li>
                                <li>
                                    <img src="dist/img/akillitelefonlar/samsungs7.png" alt="">
                                    <p>Samsung S7 Edge</p>
                                    <a target="_blank" href="http://cepmerkezi.vodafone.com.tr/cep-telefonlari/samsung-galaxy-s7-edge-32gb-siyah?icmp=consumer">Satın Al</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="twit-side ">
                        <div class="title">
                            <p><span class="icon-social-tw"></span></p>
                        </div>
                        <div id="twit-side">
                            <div class="twit-holder">
                                <div class="twit-content">
                                    <div id="twit" class="twit">
                                        <p>Vodafone Red ve Netflix kampanyası... 10 Numara ★★★★★ hareket.</p>
                                    </div>
                                    <div id="person" class="person">
                                        <img src="dist/img/twperson1.png" alt="" />
                                        <div class="text">
                                            <p class="h1">Doğan Öncel</p>
                                            <p class="h2">@doganoncel</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="twit-holder">
                                <div class="twit-content">
                                    <div id="twit" class="twit">
                                        <p>Vodafone'un, Spotify sonra Netflix'le de anlaşma yapması... Alkışlıyorum. 👏</p>
                                    </div>
                                    <div id="person" class="person">
                                        <img src="dist/img/twperson2.png" alt="" />
                                        <div class="text">
                                            <p class="h1">Hasan Altun</p>
                                            <p class="h2">@hasanaltun</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="twit-holder">
                                <div class="twit-content">
                                    <div id="twit" class="twit">
                                        <p>Vodafone red li iseniz havalimanlarında fast truck hizmetini kulanın arkadaşlar . Çok zevkli😀</p>
                                    </div>
                                    <div id="person" class="person">
                                        <img src="dist/img/twperson3.png" alt="" />
                                        <div class="text">
                                            <p class="h1">Hasan Özer</p>
                                            <p class="h2">@hasanozer2020</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <!-- twit-side -->
                </div> <!--row-->
            </div> <!--container-->
            <div class="vodafone-red">
                <div class="container">
                    <div class="row">
                        <div class="c_footer">
                            <div class="c_footer_title">
                                Nasıl Vodafone Red’li<br />
                                Olabilirim?
                            </div>
                            <div class="c_footer_icons">
                                <div class="c_footer_icon">
                                    <img src="dist/img/footer_icon1.png" />
                                    <div class="c_footer_icon_title">Formu Doldurun</div>
                                    <div class="c_footer_icon_text">
                                        Çok kısa vaktinizi ayırın, <span>
                                            sizi daha<br />
                                            iyi tanıyalım.
                                        </span>
                                    </div>
                                </div>
                                <div class="c_footer_icon">
                                    <img src="dist/img/footer_icon2.png" />
                                    <div class="c_footer_icon_title">Özel Ekibimiz Size Gelsin</div>
                                    <div class="c_footer_icon_text">
                                        <span>Siz yerinizden kalkmadan</span><br />
                                        işlemlerinizi halledelim.
                                    </div>
                                </div>
                                <div class="c_footer_icon">
                                    <img src="dist/img/footer_icon3.png" />
                                    <div class="c_footer_icon_title">Numaranız Bile Değişmesin</div>
                                    <div class="c_footer_icon_text">
                                        Farklı operatörde olsanız da <span>
                                            numaranızı<br />
                                            kullanmaya devam edin.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="c_footer_button">
                                <a href="redli-ol.php">Vodafone Red'li Ol</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!--content-holder-->
        <footer id="footer" class="footer">
            <div class="container">
                <div class="row">
                    <ul>
                        <li class="title"><p>Hakkımızda</p><span class="plus active">+</span><span class="minus">-</span></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/VodafoneHakkinda/insan-kaynaklari.php">İnsan Kaynakları</a></li>
                        <li><a target="_blank" href="http://medyamerkezi.vodafone.com.tr/basin-bultenleri">Basın Odası</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/VodafoneHakkinda/zararli-yazilimlar.php">Duyurular</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/VodafoneHakkinda/reklamlar.php ">Reklam Filmleri</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/Vodafone-Turkiye-Ile-Besiktas-Arasinda-Dev-Sponsorluk-Imzasi.php ">Sponsorluklar</a></li>
                        <li><a target="_blank" href="http://www.turkiyevodafonevakfi.org.tr/ ">Vodafone Türkiye Vakfı</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com/content/index.html ">Vodafone Group</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/VodafoneHakkinda/gizlilik_politikasi.php?default_id=gizlilikpolitikasi">Hukuki Şartlar ve </br>Gizlilik Politikası</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/bilgitoplumuhizmetleri/vodafone-telekomunikasyon-anonim-sirketi.html ">Bilgi Toplumu </br>Hizmetleri</a></li>
                    </ul>
                    <ul>
                        <li class="title"><p>Destek</p><span class="plus active">+</span><span class="minus">-</span></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/yardim/tr/ ">Yardım</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/Red/Online-Satis/SSS.php ">Sıkça Sorulan Sorular</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/YardimDestek/bize_ulasin.php?default_id=destek-bizeulasin ">Bize Ulaşın</a></li>
                        <li><a target="_blank" href="http://forum.vodafone.com.tr/ ">Vodafone Forum</a></li>
                        <li><a target="_blank" href="http://telefondestek.vodafone.com.tr/web/ ">Cihaz Keşfi</a></li>
                        <li><a target="_blank" href="https://www.vodafone.com.tr/MyVodafone/myvodafone.home.php ">OnlineSelf Servis</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/Red/red-ozel-satis-ekibi.php ">Vodafone Red Özel</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/Red/red-ozel-satis-ekibi.php ">Satış Ekibi </a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/YardimDestek/bireysel-abonelik.php ">Vodafone Aboneliği</a></li>
                    </ul>
                    <ul>
                        <li class="title"><p>Online Satış</p><span class="plus active">+</span><span class="minus">-</span></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/Cihazlar/Interaktif-Kilavuz.php?&icmp=mdd_intkilavuz ">E-Kılavuzlar</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/Cihazlar/Sanal-Cihaz.php?&icmp=mdd_sanalcihaz">Cihazları Deneyin</a></li>
                        <li><a target="_blank" href="http://cepmerkezi.vodafone.com.tr/handset/iphone-6-16-gb ">iPhone 6</a></li>
                        <li><a target="_blank" href="http://cepmerkezi.vodafone.com.tr/cep-telefonlari/iphone-6-plus-16-gb">iPhone 6 Plus 16GB</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/Red/Akilli-Cihazlar/Htc-One-M8.php ">HTC One (M8)</a></li>
                        <li><a target="_blank" href="http://cepmerkezi.vodafone.com.tr/cep-telefonlari/samsung-galaxy-note-edge ">Samsung Galaxy Edge</a></li>
                        <li><a target="_blank" href="http://cepmerkezi.vodafone.com.tr/cep-telefonlari/samsung-galaxy-note-4 ">Samsung Galaxy Note</a></li>
                        <li><a target="_blank" href="http://cepmerkezi.vodafone.com.tr/cep-telefonlari/htc-one-e8 ">HTC One (E8)</a></li>
                        <li><a target="_blank" href="http://cepmerkezi.vodafone.com.tr/handset/samsung-galaxy-s5 ">Samsung Galaxy S5</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/Internet/vodafone-supernet.php ">Tablet ve Mobil Modemler</a></li>
                    </ul>
                    <ul>
                        <li class="title"><p>Tarife, Paketler</br> ve Cihazlar</p><span class="plus active">+</span><span class="minus">-</span></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/Tarife-Karsilastirma/index.php#/terms">Tarifeleri Karşılaştır</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/Tarifeler/Faturali-Tarifeler.php">Faturalı Tarifeler</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/Tarifeler/Faturasiz-Tarifeler.php">Faturasız Tarifeler</a></li>
                        <li><a target="_blank" href="http://telefondestek.vodafone.com.tr/web/">Tüm Cihazlar</a></li>
                        <li><a target="_blank" href="http://telefondestek.vodafone.com.tr/web/">Cihazları Dene</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/Tarifeler/Altin-Tarifeler.php#paketler">Faturasız Paketler</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/Tarifeler/faturalipaketler.php">Faturalı Paketler</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/Internet/mobil-internet-paketleri.php">Süper İnternet Paketleri</a></li>

                    </ul>
                    <ul>
                        <li class="title"><p>Servisler</p><span class="plus active">+</span><span class="minus">-</span></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/Internet/vodafone-4-5g.php">Vodafone 4.5G</a></li>
                        <li><a target="_blank" href="https://www.vodafone.com.tr/Internet/arayana-dinlet.php">Arayana Dinlet</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/Servisler/Vodafone-TV.php">Vodafone TV</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/Internet/Mobil-Yardim.php">Mobil</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/Kampanyalar/Dusler-Kulubu.php">Yardım Engelleri Aşan Servisler</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/cepbagis.php">Cep Bağış</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/Servisler/CepNakit.php">Cep Nakit</a></li>
                    </ul>
                    <ul>
                        <li class="title"><p>Vodafone Siteleri</p><span class="plus active">+</span><span class="minus">-</span></li>
                        <li><a target="_blank" href="http://www.vodafonefreezone.com/">Vodafone Freezone</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/Tarifeler/AkilKupuKamuTarifeler.php">Kamulara Özel Akıl Küpü</a></li>
                        <li><a href="tarifeler.php">Tarifeler</a></li>
                        <li><a target="_blank" href="http://www.vodafonecepsaglik.com.tr/">Vodafone Cep Sağlık</a></li>
                        <li><a target="_blank" href="http://www.vodafone.com.tr/en/roam-with-vodafone.php">Visting Turkey</a></li>
                        <li><a target="_blank" href=" http://www.ciftcikulubu.com/">Vodafone Çiftçi Kulübü</a></li>
                        <li><a href="anasayfa.php">Vodafone Red</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="row">
                        <div class="social">
                            <p>Bizi Takip Edin</p>
                            <a href="https://www.facebook.com/vodafoneTR/ " target="_blank"><span class="icon-social-fb"></span></a>
                            <a href="https://twitter.com/vodafonetr " target="_blank"><span class="icon-social-tw"></span></a>
                            <a href="https://www.youtube.com/vodafonetr" target="_blank"><span class="icon-play"></span></a>
                            <a href="http://forum.vodafone.com.tr/ " target="_blank"><span class="icon-bubbles2"></span></a>
                        </div>
                        <span class="mobile">@ 2016 Vodafone Türkiye</span>
                        <div class="back-top">
                            <div id="back-top" class="icon"><span></span></div>
                                <p>Başa Dön</p>
                                <span>@ 2016 Vodafone Türkiye</span>
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
                        <p id="back-top2"><strong><span class="icon-chevron-thin-right"></span></strong> Başa Dön</p>
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
                    <p>Bu Hüküm ve Koşullar, (ister web'de, isterse de WAP ile ya da PDA'de erişim sağlayacağınız) bu internet sitesinde ("Site") sizlere sunulacak "İçerik" ve "Hizmet"lere (bundan sonra tek başına "Hizmet" ve birlikte "Hizmet"ler" olarak anılacaktır) erişiminize ve bu "İçerik" ve "Hizmet"leri kullanımınıza uygulanacak genel hüküm ve koşullardır. Bu Site ve "Hizmet"ler Vodafone Telekomünikasyon A.Ş. (Vodafone) (bundan sonra "biz," "bizim", "bize" ya da Vodafone olarak anılacaktır) tarafından ya da adına işletilmektedir. "Siz" ve "sizin" sözcükleri, size yani "Hizmet"in kullanıcısına, atıfta bulunmaktadır. </p>
                    <p>Lütfen bu hüküm ve koşulları dikkatlice okuyunuz. </p>
                    
                    <div class="title-side">
                        <p class="h3">
                            2-BİZİMLE OLAN SÖZLEŞMENİZ
                        </p>
                    </div>
                    <p>Bizimle olan sözleşmeniz aşağıdaki işlemlerden hangisi daha önce gerçekleşirse, bu tarihte başlayacaktır:</p>  
                    <p>Kayıt sürecimizi tamamlamanız ve bu Hüküm ve Koşulları okuyup Kabul ettiğinizi teyit etmeniz; ya da Kayıt gerektirmeyen "Hizmet"lerimizden birini görüntülemeniz, bunlara erişim sağlamanız ya da kullanmanız. </p>
                    <p>Bu Hüküm ve Koşulları print ederek bir kopyasını kendi kayıtlarınız için saklamanızı tavsiye ederiz. Bu Hüküm ve Koşullar tüm ""Hizmet"ler" için geçerlidir. </p>
                    <p>Bu Hüküm ve Koşullara ilaveten, bu "Hizmet"e kayıt olurken kabul etmeniz gerekecek tek tek "Hizmet"lere uygulanacak ek hüküm ve koşullar da bulunabilir. </p>
                    <div class="title-side">
                        <p class="h3">
                            3-GENEL OLARAK
                        </p>
                    </div>
                    <p>Bu Hüküm ve Koşullardan kaynaklanan haklarımızı kaybetmeksizin ileride kullanmak için erteleyebiliriz. </br>
                    Size ihbarda bulunmadan, yükümlülüklerimizin herhangi bir kısmını alt taşeronlara ifa ettirebileceğimizi ya da bu Hüküm ve Koşulları veya haklarımızın ya da yükümlülüklerimizin bir kısmını temlik edebileceğimizi kabul ediyorsunuz. </br>
                    Bu Hüküm ve Koşullardan kaynaklanan haklarınızı ya da yükümlülüklerinizi temlik etmemeyi, satmamayı ya da başka herhangi bir şekilde devretmemeyi taahhüt ediyorsunuz. </br>
                    Kontrolumüz dışında gerçekleşen sebeplerden dolayı bu Hüküm ve Koşulların ihlali halinde size karşı sorumlu olmayacağız. </br>
                    Bu Hükümler ya da "Hizmet"in kullanımı sonucunda, sizin ve bizim aramızda herhangi bir ortak girişimin, ortaklığın, istihdam ya da vekillik ilişkisinin kurulmadığını kabul ediyorsunuz. </br>
                    Bu Hüküm ve Koşullar (ve uygulanabilirse, bir "Hizmet"e kayıt olurken kayıt sürecinin bir parçası olarak Kabul ettiğiniz ilgili ek hükümler ve Sağlayıcı'nın hüküm ve koşulları) "Hizmet"i kullanımınız konusunda siz ve biz arasındaki anlaşmanın tamamını teşkil eder ve "Hizmet" ile ilgili olarak yapılan tüm önceki sözleşmelerin yerine geçer. </br>
                    Bu Hüküm ve Koşullardan herhangi bir kısmının hukuken geçersiz ya da hükümsüz hale gelmesi halinde, geçersiz ya da hükümsüz maddenin yerine orijinal amaca en yakın geçerli bir madde konulacaktır ve Hüküm ve Koşulların geri kalan kısmı aynen yürürlükte kalmaya devam edecektir. </br>
                    Vodafone, yürürlükteki mevzuatı, yönetmelikleri, hukuki süreci ya da devlet kurumlarının taleplerini karşılamak için Vodafone'nun gerekli göreceği her türlü bilgiyi ifşa etme hakkını her zaman saklı tutar. </br>
                    Vodafone şebekesinde kayıtlı cep telefonunuz var ise, "Hizmet"i kullanırken Vodafone airtime Hizmetinin genel hüküm ve koşulları (ya da Hizmet sağlayıcınızın hüküm ve koşulları) ve (varsa) Vodafone ön-ödemeli Hizmetinin hüküm ve koşulları uygulanacaktır. </p>
                    
                    <div class="title-side">
                        <p class="h3">
                            4-YARDIM
                        </p>
                    </div>
                    <p>Bu "Hizmet" ile ilgili herhangi bir sorunuz ya da sorununuz olursa, Vodafone müşterisi iseniz Müşteri "Hizmet"leri hattı olan 0 (542) 542 00 00'ı ya da diğer telefonlardan 0212 448 70 00 numarasını (ücretli) arayınız ya da vodafone.com.tr adresinden "Yardım ve Destek" ve sonra "Bize Ulaşın" kısımlarına tıklamak ve ilgili formu doldurmak suretiyle bize mail atabilirsiniz. </p>  
                    <div class="title-side">
                        <p class="h3">
                            5-KULLANICI ADI VE ŞİFRE
                        </p>
                    </div>
                    <p>"Hizmet"e kayıt olurken doldurulması zorunlu tutulan alanlarda doğru, güncel ve tam bilgi vermeyi Kabul ediyorsunuz. Kayıdı müteakip, "Hizmet"e ve kayıt gerektiren sayfalara erişim sağlayabilmeniz için tarafınıza bir şifre verilecektir. Şifrenizle "Hizmet"e erişim sağlamanızın sonucunda gerçekleşen tüm aksiyonlardan siz sorumlusunuz. Şifrenizin ve "Hizmet"e erişimde bulunurken kullandığınız cihazın güvenliğini temin etmek sizin sorumluluğunuzdur. Bu Hüküm ve Koşulların şifrenizi ifşa ettiğiniz herhangi biri tarafından ihlali, sizin tarafınızdan yapılan bir ihlal olarak algılanacaktır. </br>
                    Şifrenizin yetkisiz bir kullanıcı tarafından öğrenilmesi durumunda, bizi bu hata ya da yanlışlıktan derhal haberdar edersiniz. Münhasır ve mutlak takdir yetkimiz ile, şifrenizi ve kullanıcı adınızı dilediğimiz zaman değiştirme hakkını saklı tutarız.</br>
                    Belli "Hizmet"ler için, bir kullanıcı adı ve şifre seçmeniz gerekebilir. Her türlü "Hizmet" için: </br></br>

                    Seçtiğiniz kullanıcı adı, müstehcen, tehdit edici, ırkçı, bölücü, küçük düşürücü, milli güvenliğe aykırı, devletin ülkesi ve milletiyle bölünmez bütünlüğüne aykırı ve üçüncü kişileri tahkir edici nitelikte olamaz ya da herhangi bir üçüncü kişinin fikri mülkiyet ya da müseccel haklarını ihlal edemez; ve </br></br>

                    Kendi münhasır ve mutlak takdirimizle tarafınızca seçilen kullanıcı adının uygunsuz olduğunu düşünmemiz halinde, tarafınıza bildirimde bulunarak ya da bulunmadan bu kullanıcı ismini kullanmanızı reddetme ve engelleme hakkımız saklıdır. </br>
                    Zaman zaman şifrenizi ve kullanıcı adınızı değiştirebiliriz ve bize sağladığınız irtibat bilgilerini kullanarak her türlü değişikliği size bildiririz.  </p>  
                    
                    <div class="title-side">
                        <p class="h3">
                            6-SERVİSLERİ KULLANIMINIZ
                        </p>
                    </div>
                    <p>Hizmetlerde ("İçerik") yer alan ya da Hizmetler aracılığıyla erişilebilen (yazılım, veri, uygulama, bilgi, metin, fotoğraf, müzik, ses, görüntü, grafik, logo, sembol, çizim ve diğer materyal ya da hareketli imgeler dahil, ancak bunlarla sınırlı olmamak üzere) her türlü materyal ya da "İçerik" ile ilgili tüm telif hakları, ticari markalar, patentler ve diğer fikri mülkiyet hakları ya bizim mülkiyetimizdedir ya da bunların lisansı/kullanım hakkı Hizmetlerin bir parçası olarak hak sahibi ya da sahipleri tarafından bize devredilmiş/verilmiştir. "İçerik" ile başka herhangi bir şey yapmak istemeniz halinde, öncelikle bu materyale ait hakların sahibinin yazılı izninizi almanız gerekir. Tüm haklar açıkça saklıdır. </br></br>

                    Sadece özel ve ticari olmayan bir amaçla ve bu Hüküm ve Koşullara uymanıza tabi olarak, size "Hizmet"i ve İçeriği bilgisayarınız, cep telefon cihazınız ya da diğer erişim araçlarıyla görüntülemeniz ve kullanmanız amacıyla, münhasır olmayan ve devredilemeyen bir hak veriyoruz. Kendi bilgisayarınız, cep telefon cihazınız ya da diğer erişim cihazlarınızda kişisel kullanım için ve "Hizmet"in ya da İçeriğin usulünce kullanımı için gerektiği ölçüde ve kopyalamaya telif hakkı sahibinin vermesi koşulu ile, değiştirmeden İçeriği kopyalayabilirsiniz.</br></br>

                    Herhangi bir İçeriği (tümüyle ya da kısmen):</br>
                    Açıkça izin verilmedikçe üçüncü şahıslara devredemez ya da üçüncü şahısların erişimine izin veremezsiniz; ya da 
                    Değiştiremez, işleyemez, yeniden formatlayamaz ya da başka herhangi bir şekilde adapte edemezsiniz.</br>
                    "Site" ve sitede sunulan Hizmet, Vodafone marka bütünlüğü ile iltibas yaratacak şekilde ve/veya birebir kullanılarak ya da adapte edilerek ve burada sayılan kısıtlamalarla sınırlı olmaksızın kullanılamaz. Hizmetleri bu şekilde kullanmak ya da başkaca bir Hizmet oluşturmak yasaktır. 
                    </p>  
                    <div class="title-side">
                        <p class="h3">
                            8-ONLINE SELF SERVİS
                        </p>
                    </div>
                    <p>Vodafone bireysel abonesiyseniz, Siteden "Online Self Servis" Hizmetine kayıt olabilirsiniz. </br>
                    Vodafone kurumsal abonesiyseniz, Vodafone abonelik işlemlerinizi kurumsal hesabımı kullanarak gerçekleştirebilirsiniz.</br>
                    Kaydolmuş olduğunuz Hizmetleri görüntüleyebilecek, yeni Hizmetlere kayıt olabilecek ya da kaydınızı iptal edebilecek ve kişisel bilgilerinizi güncelleyebileceksiniz.</br>
                    Kurumsal Hesap aracılığıyla, kurumsal müşterilerin çalışanları tarafından kurum adına yapılacak işlemlere ait yetkiler, kullanıcı statüsü ve ürün kullanımına paralel değişiklik gösterir.</p>
                    
                    <div class="title-side">
                        <p class="h3">
                           8-BİZE SORUN 
                        </p>
                    </div>
                    <p>Vodafone’un Bize Sorun uygulaması ile sorularınızı web sitesi üzerinden iletebilir ve anlık olarak tarife ve kampanyalarımıza ilişkin bilgi alabilirsiniz.Tarife ve kampanyalarımıza ilişkin sorularınız anlık yanıtlanacak olup, verilecek bilgiler web sitesi içeriğinde de yer almaktadır. Hattınız ile ilgili yardım talepleriniz veya sorularınız için online self servisi kullanabilir veya Müşteri Hizmetleri birimimizle bağlantı kurabilirsiniz. </br></br>

                    Web sitesi üzerinden yapılacak görüşmelerin müşteri memnuniyeti sağlamak amacıyla kaydedileceğini, Bize Sorun uygulamasını kullanırken uygunsuz, veya suç unsuru içeren ifadeler kullanmamanızı önemle hatırlatırız </p> 


                    <div class="title-side">
                        <p class="h3">
                           9-SERVİS VE/VEYA İÇERİKLE İLGİLİ YASAKLI KULLANIMLAR
                        </p>
                    </div>
                    <p>Siz ve Hizmete erişim sağlamak suretiyle, Hizmet ve İçeriği kullanma hakkı verdiğiniz kişiler, aşağıdaki işlemleri yerine getiremezler: </br>
                    İçeriği ve/veya Hizmeti ya da bunların herhangi bir kısmını bu Sözleşme'de açıklanandan farklı bir şekilde kopyalama, ifşa etme, değiştirme, işleme, yeniden formatlama, görüntüleme, dağıtma, lisans verme, yayma, satma, yerine getirme, transfer etme, bunlara hiperlink sağlama, tersine mühendislik işlemi yapma ya da parçalara ayırma ya da İçeriği ve/veya Hizmetleri ya da herhangi bir parçasını bu Sözleşme'de belirtilenden farklı bir şekilde kullandırma</br>
                    "İçerik" ve/veya Hizmetten hiperlinkler (deep-linkler dahil) sağlama ya da yaratma; 
                    Vodafone ana sayfasını kopyalama ya da Hizmetinin ya da İçeriğin herhangi bir kısmının çevresinde ayrı bir çerçeve oluşturma ("çerçeveleme" olarak biliniyor); </br>
                    Hizmet ya da İçeriği herhangi bir ticari amaçla kullanma;</br>
                    Hizmeti ve Hizmet aracılığıyla ulaşılan herhangi bir bilgiyi yasadışı amaçlarla kullanma;</br>
                    Müstehcen, pornografik, tehdit edici, ırkçı, bölücü, küçük düşürücü, milli güvenliğe aykırı, devletin ülkesi ve milletiyle bölünmez bütünlüğüne aykırı, üçüncü kişileri tahkir edici, teşhirci, uygunsuz, güven sarsıcı ya da başka herhangi bir surette yasa dışı olan herhangi bir mesaj, bilgi ya da resmi yayınlamak, yüklemek ya da iletmek için Hizmeti kullanma; </br>
                    Gizlilik hakları dahil, başkalarının haklarını taciz etme, tehdit etme, bir başkasını taklit etme ya da başka bir şekilde ihlal etme; </br>
                    Diğer kullanıcıların Hizmeti ya da başka herhangi bir websitesini kullanmasını ve bunlardan faydalanmasını engellemek amacıyla başka bilgisayarları hack'leme, aşırı trafik taleplerinde bulunma, probe ya da port scan yapmak, virüs, mail bomb, chain letters ya da piramit şemaları bulaştırma; </br>
                    Mevzuata aykırı şekilde diğer kişilerin kişisel bilgilerini toplama ve işleme; </br>
                    Ürün ya da Hizmet satışı için reklam yapma ya da teklifte bulunma; </br>
                    Telif hakkı dahil başkalarının fikri mülkiyet haklarını ihlal etme; </br>
                    Hizmetin kullanıcıları hakkında bilgi toplamak ya da yetkisiz ya da izinsiz olarak junk ya da bulk ("spam" olarak da bilinen) e-mail göndermek ya da başka bir şekilde dağıtmak amacıyla Hizmeti kullanma;</br>
                    Kendi münhasır ve mutlak takdirimize göre uygunsuz ya da kabul edilemez olduğunu ya da marka ve itibarımıza zarar verme olasılığı bulunduğunu düşündüğümüz bir şekilde, Hizmeti ya da İçeriği kullanma.</br> 
                    Başka birinin Hizmete ya da İçeriğe erişiminizi kullanmasından kaynaklanmış olsa bile, Hizmetin ya da İçeriğin kötüye kullanımından siz sorumlu olacaksınız. Sizin ya da üçüncü kişilerin Hizmete ilişkin olarak koyduğu ya da koymaya çalıştığı herhangi bir materyali silme, çıkarma, değiştirme ya da reddetme, Hizmete erişiminizi bloke etme ya da durdurma ve bu Hüküm ve Koşulların herhangi bir şekilde ihlalini engellemek ya da gidermek için takdiri bize ait olmak üzere gerekli gördüğümüz diğer her türlü aksiyonu alma hakkımız saklıdır. "İçerik"te ya da Hizmette bu Hüküm ve Koşulları ihlal edeceğini makul surette düşündüğünüz herhangi bir "İçerik" ya da üçüncü kişi materyalini bize bildirmek isterseniz, lütfen bildiriniz.</br>
                    (Gizlilik Politikamıza uygun olarak) herhangi bir soruşturma ya da şebeke güvenliği ihlali konusunda yasalar kapsamında ve diğer yetkili ilgili resmi kurumlar ile işbirliği yapılacak ve yasalar kapsamında kişisel bilgileriniz resmi kurumlar ve/veya adli makamlarla paylaşılabilecektir. </p>         



                    <div class="title-side">
                        <p class="h3">
                           10-KİŞİSEL BİLGİLERİNİZ
                        </p>
                    </div>
                    <p>Vodafone için kişisel bilgilerin gizliliği konusu çok önemlidir. Bireysel/kurumsal kişisel bilgilerinizin güvenliği, genel hükümler ve Telekomünikasyon Mevzuatı kapsamında Vodafone tarafından koruma altına alınmıştır. Kişisel bilgiler yasalara uygun olarak verilmiş Mahkeme/Savcılık kararları ve kişinin açık yazılı onayı dışında hiçbir şekilde üçüncü kişiler tarafından kullanılamayacak, kopyalanmayacak, işlenemeyecek, dağıtılamayacak ve yayınlanmayacaktır.</br>
                    Kişisel bilgi kullanımımız, bu Sözleşme'nin bir parçasını oluşturan Gizlilik Politikasına tabi olacaktır. LÜTFEN GİZLİLİK POLİTİKASINI DİKKATLİCE OKUYUNUZ. Bu politika, kişisel bilgileri nasıl kullanacağımız ve belli koşullarda kimlere vereceğimiz konusu da dahil, kişisel bilgileriniz ile ilgili olarak sizlerin haklarını ve bizlerin yükümlülüklerini ele almaktadır. </p>

                    <div class="title-side">
                        <p class="h3">
                           11-İÇERİK YÜKLEME ve SORUMLULUK 
                        </p>
                    </div>
                    <p>Herhangi bir Hizmetimiz cep telefonunuza, kişisel bilgisayarınıza, kişisel dijital asistanınıza ya da diğer erişim araçlarına, "İçerik" yüklemenize imkan sağlıyorsa, aşağıdaki koşullara uymanız gerekir.
                    Bu İçeriği erişim cihazınıza kaydedebilirsiniz ancak (açıkça izin verilmedikçe) bu İçeriği başka bir yere kaydetmeniz, İçeriği değiştirmeniz, kopyalamanız, dağıtmanız, işlemeniz bir ya da daha fazla üçüncü kişiye iletmeniz ya da üçüncü kişilerin İçeriğe erişimine izin vermeniz tümüyle yasaktır. </br>
                    Seçmiş olduğunuz İçeriği alabilmeniz için erişim cihazınızdaki kişisel ayarları uygun bir şekilde ayarlamanız gerekmektedir. Hizmetlere kayıt olmak suretiyle, erişim cihazınızın ilgili İçeriğin indirilmesini desteklediğini teyit ediyorsunuz. Eğer bundan emin değilseniz, Sitedeki bilgileri kontrol etmeli, cihazınızın el kitapçığınıza bakmalı ya da erişim cihazınızın imalatçısı ile irtibat kurmalısınız. Uygun olmayan bir erişim cihazına "İçerik" indirmeye çalışmanız halinde bu durumdan sorumlu olamayız ve sonuca bakılmaksızın, gerekli ücretin tarafınızca ödenmesi gerekir. </br>
                    Kısıtlama olmaksızın, hiçbir surette aşağıdaki sebeplerin biri ya da daha fazlasından kaynaklanan, İçeriğin teslimatında meydana gelen aksaklık, hata ya da gecikmelerden sorumlu olmayacağız:</br>
                    (a) "İçerik" siparişi vermeden önce yanlış telefon numarası ya da başka yanlış bilgi vermeniz;</br>
                    (b) mesaj gelen kutunuzun dolu olması ve ekstra mesaj alamamanız;</br>
                    (c) telefonunuzun kapalı olması, herhangi bir sebeple ulaşılamaz olması; ya da
                    (d) makul kontrolümüz dışında başka herhangi bir sebep. </br></br>
                    "Site" de yer alan Hizmetlerimizi kullanırken, sorumluluk tamamen size aittir. Vodafone; sitede arıza, hata, virüs ya da bilgisayarınızı etkileyebilecek hataların olmadığını/olmayacağını hiçbir zaman garanti edememektedir. Vodafone, internet üzerinden gönderilen e-postaların, herhangi bir durdurma, izleme, kayıp ya da değişmeye maruz kalabileceğinden dolayı tamamen güvenli olduğu konusunda size garanti veremez. Gönderilen bu e-posta mesajlarından ya da Vodafone'a gönderdiğiniz veya tarafımızdan size iletilen e-posta mesajlardan kaynaklanacak herhangi bir zarardan size veya herhangi birine karşı sorumluluk kabul edilmez.</br>
                    Size daha iyi bir hizmet ve daha etkili bir "Site" sunmak amacıyla, browser'ınızla etkileşimimizin parçası olarak "cookies" kullanılmaktadır. "Cookie", ziyaretçinin, web sitesini ziyareti sırasında bilgisayarına gönderilen bilgidir. Cookie'ler, bir ziyaretçinin Sitede izlediği navigasyonu takip edebilmemize olanak vermektedir. Bir kişi, Bize online olarak kişisel bilgilerini isteyerek vermediği sürece tarafımızca tanınamaz. Bu bilgiler, bağımsız kuruluşlarla pazarlama yapmaları amacıyla paylaşılamaz veya satılamaz. </p>

                    <div class="title-side">
                        <p class="h3">
                           12-GÜVENLİK 
                        </p>
                    </div>
                    <p>Bireysel/kurumsal abonelik işlemleriniz için belirlediğiniz şifrenizi güvende ve gizli tutmak için azami dikkati gösteriniz ve yetkisiz kullanımları engellemek amacıyla gerekli önlemleri mutlaka alınız. Şifrenizi bir yere not ederek, Vodafone personeli dahil olmak üzere üçüncü bir kişiye söyleyerek ve/veya üçüncü kişiler tarafından anlaşılmasına yol açacak şekilde bir yere kaydederek ya da "Site"ye giriş yaptıktan sonra bilgisayar ekranını gözetimsiz bırakarak ifşa etmeyin. Doğum tarihi, yıldönümleri, telefon numarası gibi kolay tahmin edilebilecek şifreler kullanmayınız. "Online Self Servis KULLANICI SÖZLEŞMESİ"ni ("Sözleşme") onaylayarak "Site"ye üye olduğunuzdan ayrıca "Sözleşme" hükümleri aynen geçerlidir.</br>
                    "Site" üzerinden adınıza herhangi bir yetkisiz girişin olması, şüphelendiğiniz veya bilginiz dahilinde yetkisiz bir emrin verilmesi veya birisinin şifrenizi bildiğinden şüphelenmeniz durumunu tarafımıza hemen bildirmelisiniz. Bunun için Vodafone Müşteri "Hizmet"lerini arayabilirsiniz. Bu tip durumlarda hemen şifrenizi değiştirmelisiniz. Herhangi bir kaybın telafi edilmesine çalışılırken ilgili bankalar ve emniyet birimlerinin yardımınıza ihtiyacı olabilecektir. Bu nedenle ve kayıpların telafi edilmesi veya önlenmesine yardımcı olacağına inandığımız durumlarda emniyet birimlerine veya ilgili üçüncü kişilere, kişisel bilgileriniz hakkında bilgi verilebilecektir. </p>      

                    <div class="title-side">
                        <p class="h3">
                           13-FİKRİ MÜLKİYET
                        </p>
                    </div>
                    <p>"Site"de bulunan sayfa ekranları, bilgi, her türlü "İçerik"le, tema ve materyallerin ve bunların düzenlenmesi konusundaki telif hakları, Vodafone'a ve/veya Vodafone ile sözleşmesi olan üçüncü kişilere aittir. "Site"nin içerdiği bilgi ve materyallere dair tüm telif hakları, tescilli marka, patent ve/veya diğer tüm fikri ve sınai mülkiyet hakları Vodafone adına saklıdır. Bu bağlamda, hiçbir açık veya imalı, tam ya da basit ruhsat-lisans verilmemektedir.</br>
                    Ürün ve "Hizmet"lerimizi kullanırken veya kişisel bilginiz için "Site"deki dosyaları basabilir, kopyalayabilir, indirebilir veya geçici olarak saklayabilirsiniz. Ancak "Site"deki hiçbir şey değiştirilemez. Aksi hal fikri ve sınai mülkiyet mevzuatına göre hukuki ve cezai işlem gerektirecektir. Vodafone'nun yazılı izni alınmadığı sürece, "Site"nin başka şekillerdeki kullanımı yasaktır. Hiç kimse, önceden Vodafone'nun yazılı iznini almadıkça, "Site"nin belli bir kısmını başka bir web sitesinde kullanamaz veya başka bir web sitesine bağlantı kuramaz. </br>
                    Vodafone ve Vodafone logosu ile markalaştırılmış hizmet ve ürünler bir bütün olarak, Vodafone Telekomünikasyon A.Ş.'nin tescilli markası olup, Vodafone'a ait tüm haklar Vodafone Telekomünikasyon A.Ş.'de saklıdır. Yukarıda belirtilen kapsamda ve belirtilen hallerin dışında, Vodafone tescilli markası, logo veya marka adı, izinsiz kullanılamaz veya çoğaltılamayacağı gibi, alan adı ve benzeri uzantılı alan ve alt alan adları, hiçbir şekilde kullanılamaz.  </p>      

                    <div class="title-side">
                        <p class="h3">
                           14-"SİTE"NİN KULLANIMI
                        </p>
                    </div>
                    <p>Vodafone için kişisel bilgilerin gizliliği konusu çok önemlidir. Bireysel/kurumsal kişisel bilgilerinizin güvenliği, genel hükümler ve Telekomünikasyon Mevzuatı kapsamında Vodafone tarafından koruma altına alınmıştır. Kişisel bilgiler yasalara uygun olarak verilmiş Mahkeme/Savcılık kararları ve kişinin açık yazılı onayı dışında hiçbir şekilde üçüncü kişiler tarafından kullanılamayacak, kopyalanmayacak, işlenemeyecek, dağıtılamayacak ve yayınlanmayacaktır.</br>
                    Kişisel bilgi kullanımımız, bu Sözleşme'nin bir parçasını oluşturan Gizlilik Politikasına tabi olacaktır. LÜTFEN GİZLİLİK POLİTİKASINI DİKKATLİCE OKUYUNUZ. Bu politika, kişisel bilgileri nasıl kullanacağımız ve belli koşullarda kimlere vereceğimiz konusu da dahil, kişisel bilgileriniz ile ilgili olarak sizlerin haklarını ve bizlerin yükümlülüklerini ele almaktadır. </p>      

                    <div class="title-side">
                        <p class="h3">
                           10-KİŞİSEL BİLGİLERİNİZ
                        </p>
                    </div>
                    <p>Şimdilik kaydıyla "Site"nin kullanımından belirli bir ücret talep edilmemektedir. Ancak ilerde Vodafone'nun bunu yapmak hakkı saklı tutulmuştur. Vodafone'nun, abonelik ile ilgili bireysel/kurumsal iş ve işlemlerini "Site" üzerinden yapmak amacıyla belirleyebileceği makul ücreti ödemeyi şimdiden kabul ve beyan etmektesiniz. Bununla birlikte, bu tarz bir ücretlendirme yapılmadan ve Vodafone'a herhangi bir ihbarda bulunmanızdan önce posta, e-posta, kısa mesaj veya diğer yollardan tarafınıza bu değişiklikle ilgili bilgi verilecektir. Bildirimi takiben, hizmeti kullanmaya devam etmeniz, teklif edilen ücret değişikliğini kabul ettiğiniz anlamına gelecektir. </p>      

                    <div class="title-side">
                        <p class="h3">
                           15-ÜÇÜNCÜ ŞAHIS SİTELERİ, YÜKÜMLÜLÜKLER VE YASAL UYARI
                        </p>
                    </div>
                    <p>Hizmet vasıtasıyla iletilen ya da erişilen üçüncü şahıslara ait içeriğin güvenliği ya da konusu üzerine kontrol gücümüzün olamayacağını kabul ediyorsunuz ve yasadışı ya da hukuka aykırı içeriğin iletiminden ya da alınmasından hiçbir surette sorumlu değiliz. 5651 Sayılı Yasanın 4.maddesi gereğince de içerik sağlayıcı, bağlantı sağladığı başkasına ait içeriklerden sorumlu değildir. Hizmetler, diğer websitelerine, kaynaklara ve/veya iletişim şebekelerine bağlanmak için tarafınızca kullanılabilir. Bu üçüncü kişilere ait sitelerin içeriğinden ya da Hizmetlerinden hiçbir surette sorumlu değiliz. İletişimlerinizin güvenliği temin etmek için elimizden gelen çabayı göstereceğiz; ancak iletişimleriniz, kontrolümüz altında olmayan üçüncü kişilere ait şebekelerden/hatlardan geçmektedir. İnternet güvenli bir ortam değildir. İstenmeyen programlar ya da materyaller, bilginiz olmadan yüklenebilir ve bu suretle, yetkisi olmayan kişiler, bilgisayarınıza ya da cep telefon cihazınızda, PDA ya da benzeri cihazlarınızdaki saklı bilgilere erişim sağlayabilir. Bu programlar, büyük bir ihtimalle bilginiz dahilinde olmadan, yetki vermediğiniz işlemleri yapabilir. "Site" üzerindeki başka yerlere sağladığımız hiperlink, sadece bilgilendirme amaçlıdır. Diğer web siteleri veya sayfalara giden bağlantıları takip etmenin riski tarafınıza ait olup bu bağlantı sebebiyle oluşan zararlardan Vodafone asla sorumluluk veya yükümlülük kabul etmez.</br> 
                    Yüklenebilir yazılım sitelerine bağlantılar olduğu takdirde, bunlar sadece kullanım kolaylığı sağlamak içindir. </br>Interneti ve/veya Hizmet tarafından erişim sağlanan üçüncü şahıslara ait websitelerini ya da içeriği kullanmanızdan kaynaklanan her türlü kayıp ya da zarardan dolayı hiçbir sorumluluk kabul etmiyoruz. </br>
                    Yazılımı indirmekle ilgili zorluklar veya sonuçlara dair herhangi bir sorumluluk veya yükümlülük taşımamaktayız. İndirilen herhangi bir yazılımın kullanımı, eğer varsa, yazılımla birlikte sağlanan veya yazılımın yanında yer alan lisans anlaşmasının maddelerine tabidir. </br>
                    Sitedeki hiçbir bilgi, üçüncü kişilerin kabulu veya onayını ya da bu kişilere ait tavsiye, düşünce, bilgi, ürün ya da Hizmeti ifade veya ima etmemektedir. </br>
                    Üçüncü kişilere ait bir web sitesinden, herhangi bir Vodafone web sitesine, herhangi bir biçimde hiperlink bağlantısı yaratılmadan önce, mutlaka yazılı iznimizin alınması gerekmektedir. Bu tarz bir kullanım ücrete tabi olabilir. Vodafone, bu tarz bir bağlantı nedeniyle Sizin veya üçüncü tarafın uğradığı hiçbir kayıp veya zarardan sorumlu değildir.</p>      

                    <div class="title-side">
                        <p class="h3">
                           16-TAZMİNAT YÜKÜMLÜLÜĞÜNÜZ
                        </p>
                    </div>
                    <p>Vodafone için kişisel bilgilerin gizliliği konusu çok önemlidir. Bireysel/kurumsal kişisel bilgilerinizin güvenliği, genel hükümler ve Telekomünikasyon Mevzuatı kapsamında Vodafone tarafından koruma altına alınmıştır. Kişisel bilgiler yasalara uygun olarak verilmiş Mahkeme/Savcılık kararları ve kişinin açık yazılı onayı dışında hiçbir şekilde üçüncü kişiler tarafından kullanılamayacak, kopyalanmayacak, işlenemeyecek, dağıtılamayacak ve yayınlanmayacaktır.</br>
                    Kişisel bilgi kullanımımız, bu Sözleşme'nin bir parçasını oluşturan Gizlilik Politikasına tabi olacaktır. LÜTFEN GİZLİLİK POLİTİKASINI DİKKATLİCE OKUYUNUZ. Bu politika, kişisel bilgileri nasıl kullanacağımız ve belli koşullarda kimlere vereceğimiz konusu da dahil, kişisel bilgileriniz ile ilgili olarak sizlerin haklarını ve bizlerin yükümlülüklerini ele almaktadır. </p>      

                    <div class="title-side">
                        <p class="h3">
                           17-HİZMETİN DURDURULMASI VE SONA ERDİRİLMESİ 
                        </p>
                    </div>
                    <p>"Site"de verilen "Hizmet"i;</br>
                    Bakım ya da tamir işleri için;</br> 
                    İçerikleri ya da "Hizmet"lerin işlevini zaman içinde güncellemek ya da yükseltmek için;</br> 
                    Sizin bu Koşulları ihlal ettiğinizi ya da ihlal edebileceğinizi düşünmemiz halinde durdurma hakkımız bulunmaktadır.</br> 
                    Bu Sözleşme'nin hüküm ve koşullarının muhtemel bir ihlalini araştırmak ya da engellemek için Hizmetlere erişiminizi durdurursak, bu Sözleşme bu durdurma süresinde de geçerli olmaya devam edecektir.</br></br>

                    Hizmetin tümü ya da bir kısmına erişiminizi sona erdirebiliriz:</br>
                    Hizmete erişiminizi sona erdirirsek, Hizmette depolamış olduğunuz tüm bilgileri, e-mailleri ve verileri silme hakkımız bulunmaktadır. Bu sebeple, tüm bilgilerin kopyalarını Hizmetten ayrı olarak başka herhangi bir depolama cihazında saklamanızı öneririz.</br>
                    Vodafone; teknik, ticari ya da işletimsel sebeplerle ya da kamu yararına ilişkin sebeplerle "Site"de sunduğu Hizmetleri her zaman genel olarak geri çekebilir ya da değiştirebilir. Hizmetlerin Vodafone tarafından kesin olarak durdurulması halinde, Hizmetlerin durdurulmasından makul bir süre önce bu durum size bildirilecektir.</br> Durdurma, geri alma ya da değişiklik sebebine bağlı olarak, önceden bildirimde bulunmak her zaman mümkün olmayabilir. Fesih ne sizin ne de bizim doğan haklarımızı ve yükümlülüklerimizi etkileyecektir.</br>
                    "Site"deki talimatları takip ederek ya da yukarıda 4.maddede açıklandığı şekilde bizimle bağlantı kurarak Hizmeti her zaman durdurabilirsiniz. Hizmetin durdurulması, tarafınızca kullanılan Hizmetlerin ücretini ya da Hizmetin kullanımı sırasında satın alınan üçüncü mallarının ya da Hizmetlerinin ücretini ödeme yükümlülüğünüzü etkilemeyecektir.</p>      

                    <div class="title-side">
                        <p class="h3">
                           18-UYGULANACAK HUKUK VE İHTİLAFIN ÇÖZÜMÜ
                        </p>
                    </div>
                    <p>Bu Hükümler Türk hukukuna tabi olacak ve Türk hukukuna göre yorumlanacaktır ve İstanbul Merkez Mahkemelerinin, ihtilafın çözümü konusunda münhasır olmayan yetkiye sahip olduğunu siz ve biz kabul ederiz. </br>SÖZLEŞMEYİ OKUDUM VE YUKARIDA YER ALAN TÜM HÜKÜMLERİ, AÇIK VE HÜR İRADE BEYANIM DOĞRULTUSUNDA KABUL EDİP ONAYLIYORUM.  </p> 

                    <div class="title-side">
                        <p class="h3">
                           II.GİZLİLİK POLİTİKASI
                        </p>
                    </div>
                    <p> 1. Aboneden istenen kişisel bilgiler, aboneye "Hizmet" verilebilmesi için gerekli olup, bu kişisel bilgiler Vodafone Telekomünikasyon A.Ş. bünyesinde muhafaza altındadır.</br>
                    2. Aboneye ait kişisel bilgiler; Telekomünikasyon mevzuatına uygun olarak ve Elektronik Haberleşme Sektöründe Kişisel Verileri İşlenmesi ve Gizliliğinin Korunması Hakkında Yönetmelik gereğince, Telekomünikasyon "Hizmet"lerini pazarlamak ya da katma değerli "Hizmet"leri sağlamak amacıyla; abone veya kullanıcı kişisel bilgilerinin kullanılmasına izin verdiği takdirde, Vodafone Telekomüniksyon A.Ş. tarafından, bu tür "Hizmet"ler ve pazarlama için gerekli kapsam ve sürede işlenebilir. Kullanıcı ve aboneler, kişisel bilgilerinin işlenmesi için verdikleri izinleri her zaman geri alabilirler.</br>
                    3. Vodafone Telekomünikasyon A.Ş.; abonenin veya kullanıcının onayını almak koşuluyla, telekomünikasyon "Hizmet"lerinin pazarlanması ya da katma değerli "Hizmet"lerin sağlanması amacıyla, işlenen kişisel bilgileri ve bu tür işlemin süresini abone ve kullanıcılara bildirecektir. </br>
                    4. Afet ve acil durum halleri ile kolluk güçleri, ambülans ve itfaiye "Hizmet"leri dahil tüm acil aramalara ilişkin acil yardım çağrılara cevap vermek amacıyla; abonenin veya kullanıcının rızası olmasa bile abonenin yer verisini ve kimliğini, kullanıcının ise yer verisini içeren bilgiler Telekomünikasyon Mevzuatı gereğince erişilebilir tutacaktır. </br>
                    5. Abone kişisel bilgileri, yasalara uygun olarak verilmiş Mahkeme/Savcılık kararları, yasal istisnalar dışında, hiçbir şekilde üçüncü kişilere verilmez. </br>
                    6. Vodafone Telekomünikasyon A.Ş.'nin hedefi, abone bilgilerini güncel tutmaktır.Bu nedenle belirli zaman aralıkları ile abonelerden kişisel bilgilerinin güncellenmesi talep edilebilecektir.</br>
                    7. Vodafone Telekomünikasyon A.Ş., kendi personeli de dahil olmak üzere, abone bilgilerine hiç kimsenin izinsiz ulaşamaması için bilişim sistemleri üzerinde sıkı bir güvenlik politikası uygulamaktadır.</br>
                    8. Vodafone Telekomünikasyon A.Ş., meydana gelebilecek bir sahtecilik/dolandırıcılık ya da herhangi bir soruşturma ya da şebeke güvenliği ihlali konusunda yasal merciler ve diğer ilgili kurumlar ile işbirliği yapabilir ve yasalar tarafından gerekli görülen hallerde ya da adli makamların talebini yerine getirilmesi halinde, elde edilen her türlü bilgiyi (kişisel veriler dahil) ifşa etme hakkı da saklıdır.</br>
                    9. Abone bilgilerine ulaşma izni olan yetkili Vodafone Grubu'na dahil tüm şirketler, tüm Vodafone grubu personeli ve tüm üçüncü şahıslar, gizlilik mecburiyeti uygulamasına özellikle uymak zorunluluğundadırlar. </p>                   
                </div>
            </div>
        </div>
        <div id="esaslar" class="pop-up esaslar" >
            <div class="container">
                <span class="close"></span>
                <div class="row">
                    
                    <div class="title-side">
                        <p class="h3">
                            1-GENEL AÇIKLAMALAR 
                        </p>
                    </div>
                    <p>Bu Hüküm ve Koşullar, (ister web'de, isterse de WAP ile ya da PDA'de erişim sağlayacağınız) bu internet sitesinde ("Site") sizlere sunulacak "İçerik" ve "Hizmet"lere (bundan sonra tek başına "Hizmet" ve birlikte "Hizmet"ler" olarak anılacaktır) erişiminize ve bu "İçerik" ve "Hizmet"leri kullanımınıza uygulanacak genel hüküm ve koşullardır. Bu Site ve "Hizmet"ler Vodafone Telekomünikasyon A.Ş. (Vodafone) (bundan sonra "biz," "bizim", "bize" ya da Vodafone olarak anılacaktır) tarafından ya da adına işletilmektedir. "Siz" ve "sizin" sözcükleri, size yani "Hizmet"in kullanıcısına, atıfta bulunmaktadır. </p>
                    <p>Lütfen bu hüküm ve koşulları dikkatlice okuyunuz. </p>
                    
                    <div class="title-side">
                        <p class="h3">
                            2-BİZİMLE OLAN SÖZLEŞMENİZ
                        </p>
                    </div>
                    <p>Bizimle olan sözleşmeniz aşağıdaki işlemlerden hangisi daha önce gerçekleşirse, bu tarihte başlayacaktır:</p>  
                    <p>Kayıt sürecimizi tamamlamanız ve bu Hüküm ve Koşulları okuyup Kabul ettiğinizi teyit etmeniz; ya da Kayıt gerektirmeyen "Hizmet"lerimizden birini görüntülemeniz, bunlara erişim sağlamanız ya da kullanmanız. </p>
                    <p>Bu Hüküm ve Koşulları print ederek bir kopyasını kendi kayıtlarınız için saklamanızı tavsiye ederiz. Bu Hüküm ve Koşullar tüm ""Hizmet"ler" için geçerlidir. </p>
                    <p>Bu Hüküm ve Koşullara ilaveten, bu "Hizmet"e kayıt olurken kabul etmeniz gerekecek tek tek "Hizmet"lere uygulanacak ek hüküm ve koşullar da bulunabilir. </p>
                    <div class="title-side">
                        <p class="h3">
                            3-GENEL OLARAK
                        </p>
                    </div>
                    <p>Bu Hüküm ve Koşullardan kaynaklanan haklarımızı kaybetmeksizin ileride kullanmak için erteleyebiliriz. </br>
                    Size ihbarda bulunmadan, yükümlülüklerimizin herhangi bir kısmını alt taşeronlara ifa ettirebileceğimizi ya da bu Hüküm ve Koşulları veya haklarımızın ya da yükümlülüklerimizin bir kısmını temlik edebileceğimizi kabul ediyorsunuz. </br>
                    Bu Hüküm ve Koşullardan kaynaklanan haklarınızı ya da yükümlülüklerinizi temlik etmemeyi, satmamayı ya da başka herhangi bir şekilde devretmemeyi taahhüt ediyorsunuz. </br>
                    Kontrolumüz dışında gerçekleşen sebeplerden dolayı bu Hüküm ve Koşulların ihlali halinde size karşı sorumlu olmayacağız. </br>
                    Bu Hükümler ya da "Hizmet"in kullanımı sonucunda, sizin ve bizim aramızda herhangi bir ortak girişimin, ortaklığın, istihdam ya da vekillik ilişkisinin kurulmadığını kabul ediyorsunuz. </br>
                    Bu Hüküm ve Koşullar (ve uygulanabilirse, bir "Hizmet"e kayıt olurken kayıt sürecinin bir parçası olarak Kabul ettiğiniz ilgili ek hükümler ve Sağlayıcı'nın hüküm ve koşulları) "Hizmet"i kullanımınız konusunda siz ve biz arasındaki anlaşmanın tamamını teşkil eder ve "Hizmet" ile ilgili olarak yapılan tüm önceki sözleşmelerin yerine geçer. </br>
                    Bu Hüküm ve Koşullardan herhangi bir kısmının hukuken geçersiz ya da hükümsüz hale gelmesi halinde, geçersiz ya da hükümsüz maddenin yerine orijinal amaca en yakın geçerli bir madde konulacaktır ve Hüküm ve Koşulların geri kalan kısmı aynen yürürlükte kalmaya devam edecektir. </br>
                    Vodafone, yürürlükteki mevzuatı, yönetmelikleri, hukuki süreci ya da devlet kurumlarının taleplerini karşılamak için Vodafone'nun gerekli göreceği her türlü bilgiyi ifşa etme hakkını her zaman saklı tutar. </br>
                    Vodafone şebekesinde kayıtlı cep telefonunuz var ise, "Hizmet"i kullanırken Vodafone airtime Hizmetinin genel hüküm ve koşulları (ya da Hizmet sağlayıcınızın hüküm ve koşulları) ve (varsa) Vodafone ön-ödemeli Hizmetinin hüküm ve koşulları uygulanacaktır. </p>
                    
                    <div class="title-side">
                        <p class="h3">
                            4-YARDIM
                        </p>
                    </div>
                    <p>Bu "Hizmet" ile ilgili herhangi bir sorunuz ya da sorununuz olursa, Vodafone müşterisi iseniz Müşteri "Hizmet"leri hattı olan 0 (542) 542 00 00'ı ya da diğer telefonlardan 0212 448 70 00 numarasını (ücretli) arayınız ya da vodafone.com.tr adresinden "Yardım ve Destek" ve sonra "Bize Ulaşın" kısımlarına tıklamak ve ilgili formu doldurmak suretiyle bize mail atabilirsiniz. </p>  
                    <div class="title-side">
                        <p class="h3">
                            5-KULLANICI ADI VE ŞİFRE
                        </p>
                    </div>
                    <p>"Hizmet"e kayıt olurken doldurulması zorunlu tutulan alanlarda doğru, güncel ve tam bilgi vermeyi Kabul ediyorsunuz. Kayıdı müteakip, "Hizmet"e ve kayıt gerektiren sayfalara erişim sağlayabilmeniz için tarafınıza bir şifre verilecektir. Şifrenizle "Hizmet"e erişim sağlamanızın sonucunda gerçekleşen tüm aksiyonlardan siz sorumlusunuz. Şifrenizin ve "Hizmet"e erişimde bulunurken kullandığınız cihazın güvenliğini temin etmek sizin sorumluluğunuzdur. Bu Hüküm ve Koşulların şifrenizi ifşa ettiğiniz herhangi biri tarafından ihlali, sizin tarafınızdan yapılan bir ihlal olarak algılanacaktır. </br>
                    Şifrenizin yetkisiz bir kullanıcı tarafından öğrenilmesi durumunda, bizi bu hata ya da yanlışlıktan derhal haberdar edersiniz. Münhasır ve mutlak takdir yetkimiz ile, şifrenizi ve kullanıcı adınızı dilediğimiz zaman değiştirme hakkını saklı tutarız.</br>
                    Belli "Hizmet"ler için, bir kullanıcı adı ve şifre seçmeniz gerekebilir. Her türlü "Hizmet" için: </br></br>

                    Seçtiğiniz kullanıcı adı, müstehcen, tehdit edici, ırkçı, bölücü, küçük düşürücü, milli güvenliğe aykırı, devletin ülkesi ve milletiyle bölünmez bütünlüğüne aykırı ve üçüncü kişileri tahkir edici nitelikte olamaz ya da herhangi bir üçüncü kişinin fikri mülkiyet ya da müseccel haklarını ihlal edemez; ve </br></br>

                    Kendi münhasır ve mutlak takdirimizle tarafınızca seçilen kullanıcı adının uygunsuz olduğunu düşünmemiz halinde, tarafınıza bildirimde bulunarak ya da bulunmadan bu kullanıcı ismini kullanmanızı reddetme ve engelleme hakkımız saklıdır. </br>
                    Zaman zaman şifrenizi ve kullanıcı adınızı değiştirebiliriz ve bize sağladığınız irtibat bilgilerini kullanarak her türlü değişikliği size bildiririz.  </p>  
                    
                    <div class="title-side">
                        <p class="h3">
                            6-SERVİSLERİ KULLANIMINIZ
                        </p>
                    </div>
                    <p>Hizmetlerde ("İçerik") yer alan ya da Hizmetler aracılığıyla erişilebilen (yazılım, veri, uygulama, bilgi, metin, fotoğraf, müzik, ses, görüntü, grafik, logo, sembol, çizim ve diğer materyal ya da hareketli imgeler dahil, ancak bunlarla sınırlı olmamak üzere) her türlü materyal ya da "İçerik" ile ilgili tüm telif hakları, ticari markalar, patentler ve diğer fikri mülkiyet hakları ya bizim mülkiyetimizdedir ya da bunların lisansı/kullanım hakkı Hizmetlerin bir parçası olarak hak sahibi ya da sahipleri tarafından bize devredilmiş/verilmiştir. "İçerik" ile başka herhangi bir şey yapmak istemeniz halinde, öncelikle bu materyale ait hakların sahibinin yazılı izninizi almanız gerekir. Tüm haklar açıkça saklıdır. </br></br>

                    Sadece özel ve ticari olmayan bir amaçla ve bu Hüküm ve Koşullara uymanıza tabi olarak, size "Hizmet"i ve İçeriği bilgisayarınız, cep telefon cihazınız ya da diğer erişim araçlarıyla görüntülemeniz ve kullanmanız amacıyla, münhasır olmayan ve devredilemeyen bir hak veriyoruz. Kendi bilgisayarınız, cep telefon cihazınız ya da diğer erişim cihazlarınızda kişisel kullanım için ve "Hizmet"in ya da İçeriğin usulünce kullanımı için gerektiği ölçüde ve kopyalamaya telif hakkı sahibinin vermesi koşulu ile, değiştirmeden İçeriği kopyalayabilirsiniz.</br></br>

                    Herhangi bir İçeriği (tümüyle ya da kısmen):</br>
                    Açıkça izin verilmedikçe üçüncü şahıslara devredemez ya da üçüncü şahısların erişimine izin veremezsiniz; ya da 
                    Değiştiremez, işleyemez, yeniden formatlayamaz ya da başka herhangi bir şekilde adapte edemezsiniz.</br>
                    "Site" ve sitede sunulan Hizmet, Vodafone marka bütünlüğü ile iltibas yaratacak şekilde ve/veya birebir kullanılarak ya da adapte edilerek ve burada sayılan kısıtlamalarla sınırlı olmaksızın kullanılamaz. Hizmetleri bu şekilde kullanmak ya da başkaca bir Hizmet oluşturmak yasaktır. 
                    </p>  
                    <div class="title-side">
                        <p class="h3">
                            8-ONLINE SELF SERVİS
                        </p>
                    </div>
                    <p>Vodafone bireysel abonesiyseniz, Siteden "Online Self Servis" Hizmetine kayıt olabilirsiniz. </br>
                    Vodafone kurumsal abonesiyseniz, Vodafone abonelik işlemlerinizi kurumsal hesabımı kullanarak gerçekleştirebilirsiniz.</br>
                    Kaydolmuş olduğunuz Hizmetleri görüntüleyebilecek, yeni Hizmetlere kayıt olabilecek ya da kaydınızı iptal edebilecek ve kişisel bilgilerinizi güncelleyebileceksiniz.</br>
                    Kurumsal Hesap aracılığıyla, kurumsal müşterilerin çalışanları tarafından kurum adına yapılacak işlemlere ait yetkiler, kullanıcı statüsü ve ürün kullanımına paralel değişiklik gösterir.</p>
                    
                    <div class="title-side">
                        <p class="h3">
                           8-BİZE SORUN 
                        </p>
                    </div>
                    <p>Vodafone’un Bize Sorun uygulaması ile sorularınızı web sitesi üzerinden iletebilir ve anlık olarak tarife ve kampanyalarımıza ilişkin bilgi alabilirsiniz.Tarife ve kampanyalarımıza ilişkin sorularınız anlık yanıtlanacak olup, verilecek bilgiler web sitesi içeriğinde de yer almaktadır. Hattınız ile ilgili yardım talepleriniz veya sorularınız için online self servisi kullanabilir veya Müşteri Hizmetleri birimimizle bağlantı kurabilirsiniz. </br></br>

                    Web sitesi üzerinden yapılacak görüşmelerin müşteri memnuniyeti sağlamak amacıyla kaydedileceğini, Bize Sorun uygulamasını kullanırken uygunsuz, veya suç unsuru içeren ifadeler kullanmamanızı önemle hatırlatırız </p> 


                    <div class="title-side">
                        <p class="h3">
                           9-SERVİS VE/VEYA İÇERİKLE İLGİLİ YASAKLI KULLANIMLAR
                        </p>
                    </div>
                    <p>Siz ve Hizmete erişim sağlamak suretiyle, Hizmet ve İçeriği kullanma hakkı verdiğiniz kişiler, aşağıdaki işlemleri yerine getiremezler: </br>
                    İçeriği ve/veya Hizmeti ya da bunların herhangi bir kısmını bu Sözleşme'de açıklanandan farklı bir şekilde kopyalama, ifşa etme, değiştirme, işleme, yeniden formatlama, görüntüleme, dağıtma, lisans verme, yayma, satma, yerine getirme, transfer etme, bunlara hiperlink sağlama, tersine mühendislik işlemi yapma ya da parçalara ayırma ya da İçeriği ve/veya Hizmetleri ya da herhangi bir parçasını bu Sözleşme'de belirtilenden farklı bir şekilde kullandırma</br>
                    "İçerik" ve/veya Hizmetten hiperlinkler (deep-linkler dahil) sağlama ya da yaratma; 
                    Vodafone ana sayfasını kopyalama ya da Hizmetinin ya da İçeriğin herhangi bir kısmının çevresinde ayrı bir çerçeve oluşturma ("çerçeveleme" olarak biliniyor); </br>
                    Hizmet ya da İçeriği herhangi bir ticari amaçla kullanma;</br>
                    Hizmeti ve Hizmet aracılığıyla ulaşılan herhangi bir bilgiyi yasadışı amaçlarla kullanma;</br>
                    Müstehcen, pornografik, tehdit edici, ırkçı, bölücü, küçük düşürücü, milli güvenliğe aykırı, devletin ülkesi ve milletiyle bölünmez bütünlüğüne aykırı, üçüncü kişileri tahkir edici, teşhirci, uygunsuz, güven sarsıcı ya da başka herhangi bir surette yasa dışı olan herhangi bir mesaj, bilgi ya da resmi yayınlamak, yüklemek ya da iletmek için Hizmeti kullanma; </br>
                    Gizlilik hakları dahil, başkalarının haklarını taciz etme, tehdit etme, bir başkasını taklit etme ya da başka bir şekilde ihlal etme; </br>
                    Diğer kullanıcıların Hizmeti ya da başka herhangi bir websitesini kullanmasını ve bunlardan faydalanmasını engellemek amacıyla başka bilgisayarları hack'leme, aşırı trafik taleplerinde bulunma, probe ya da port scan yapmak, virüs, mail bomb, chain letters ya da piramit şemaları bulaştırma; </br>
                    Mevzuata aykırı şekilde diğer kişilerin kişisel bilgilerini toplama ve işleme; </br>
                    Ürün ya da Hizmet satışı için reklam yapma ya da teklifte bulunma; </br>
                    Telif hakkı dahil başkalarının fikri mülkiyet haklarını ihlal etme; </br>
                    Hizmetin kullanıcıları hakkında bilgi toplamak ya da yetkisiz ya da izinsiz olarak junk ya da bulk ("spam" olarak da bilinen) e-mail göndermek ya da başka bir şekilde dağıtmak amacıyla Hizmeti kullanma;</br>
                    Kendi münhasır ve mutlak takdirimize göre uygunsuz ya da kabul edilemez olduğunu ya da marka ve itibarımıza zarar verme olasılığı bulunduğunu düşündüğümüz bir şekilde, Hizmeti ya da İçeriği kullanma.</br> 
                    Başka birinin Hizmete ya da İçeriğe erişiminizi kullanmasından kaynaklanmış olsa bile, Hizmetin ya da İçeriğin kötüye kullanımından siz sorumlu olacaksınız. Sizin ya da üçüncü kişilerin Hizmete ilişkin olarak koyduğu ya da koymaya çalıştığı herhangi bir materyali silme, çıkarma, değiştirme ya da reddetme, Hizmete erişiminizi bloke etme ya da durdurma ve bu Hüküm ve Koşulların herhangi bir şekilde ihlalini engellemek ya da gidermek için takdiri bize ait olmak üzere gerekli gördüğümüz diğer her türlü aksiyonu alma hakkımız saklıdır. "İçerik"te ya da Hizmette bu Hüküm ve Koşulları ihlal edeceğini makul surette düşündüğünüz herhangi bir "İçerik" ya da üçüncü kişi materyalini bize bildirmek isterseniz, lütfen bildiriniz.</br>
                    (Gizlilik Politikamıza uygun olarak) herhangi bir soruşturma ya da şebeke güvenliği ihlali konusunda yasalar kapsamında ve diğer yetkili ilgili resmi kurumlar ile işbirliği yapılacak ve yasalar kapsamında kişisel bilgileriniz resmi kurumlar ve/veya adli makamlarla paylaşılabilecektir. </p>         



                    <div class="title-side">
                        <p class="h3">
                           10-KİŞİSEL BİLGİLERİNİZ
                        </p>
                    </div>
                    <p>Vodafone için kişisel bilgilerin gizliliği konusu çok önemlidir. Bireysel/kurumsal kişisel bilgilerinizin güvenliği, genel hükümler ve Telekomünikasyon Mevzuatı kapsamında Vodafone tarafından koruma altına alınmıştır. Kişisel bilgiler yasalara uygun olarak verilmiş Mahkeme/Savcılık kararları ve kişinin açık yazılı onayı dışında hiçbir şekilde üçüncü kişiler tarafından kullanılamayacak, kopyalanmayacak, işlenemeyecek, dağıtılamayacak ve yayınlanmayacaktır.</br>
                    Kişisel bilgi kullanımımız, bu Sözleşme'nin bir parçasını oluşturan Gizlilik Politikasına tabi olacaktır. LÜTFEN GİZLİLİK POLİTİKASINI DİKKATLİCE OKUYUNUZ. Bu politika, kişisel bilgileri nasıl kullanacağımız ve belli koşullarda kimlere vereceğimiz konusu da dahil, kişisel bilgileriniz ile ilgili olarak sizlerin haklarını ve bizlerin yükümlülüklerini ele almaktadır. </p>

                    <div class="title-side">
                        <p class="h3">
                           11-İÇERİK YÜKLEME ve SORUMLULUK 
                        </p>
                    </div>
                    <p>Herhangi bir Hizmetimiz cep telefonunuza, kişisel bilgisayarınıza, kişisel dijital asistanınıza ya da diğer erişim araçlarına, "İçerik" yüklemenize imkan sağlıyorsa, aşağıdaki koşullara uymanız gerekir.
                    Bu İçeriği erişim cihazınıza kaydedebilirsiniz ancak (açıkça izin verilmedikçe) bu İçeriği başka bir yere kaydetmeniz, İçeriği değiştirmeniz, kopyalamanız, dağıtmanız, işlemeniz bir ya da daha fazla üçüncü kişiye iletmeniz ya da üçüncü kişilerin İçeriğe erişimine izin vermeniz tümüyle yasaktır. </br>
                    Seçmiş olduğunuz İçeriği alabilmeniz için erişim cihazınızdaki kişisel ayarları uygun bir şekilde ayarlamanız gerekmektedir. Hizmetlere kayıt olmak suretiyle, erişim cihazınızın ilgili İçeriğin indirilmesini desteklediğini teyit ediyorsunuz. Eğer bundan emin değilseniz, Sitedeki bilgileri kontrol etmeli, cihazınızın el kitapçığınıza bakmalı ya da erişim cihazınızın imalatçısı ile irtibat kurmalısınız. Uygun olmayan bir erişim cihazına "İçerik" indirmeye çalışmanız halinde bu durumdan sorumlu olamayız ve sonuca bakılmaksızın, gerekli ücretin tarafınızca ödenmesi gerekir. </br>
                    Kısıtlama olmaksızın, hiçbir surette aşağıdaki sebeplerin biri ya da daha fazlasından kaynaklanan, İçeriğin teslimatında meydana gelen aksaklık, hata ya da gecikmelerden sorumlu olmayacağız:</br>
                    (a) "İçerik" siparişi vermeden önce yanlış telefon numarası ya da başka yanlış bilgi vermeniz;</br>
                    (b) mesaj gelen kutunuzun dolu olması ve ekstra mesaj alamamanız;</br>
                    (c) telefonunuzun kapalı olması, herhangi bir sebeple ulaşılamaz olması; ya da
                    (d) makul kontrolümüz dışında başka herhangi bir sebep. </br></br>
                    "Site" de yer alan Hizmetlerimizi kullanırken, sorumluluk tamamen size aittir. Vodafone; sitede arıza, hata, virüs ya da bilgisayarınızı etkileyebilecek hataların olmadığını/olmayacağını hiçbir zaman garanti edememektedir. Vodafone, internet üzerinden gönderilen e-postaların, herhangi bir durdurma, izleme, kayıp ya da değişmeye maruz kalabileceğinden dolayı tamamen güvenli olduğu konusunda size garanti veremez. Gönderilen bu e-posta mesajlarından ya da Vodafone'a gönderdiğiniz veya tarafımızdan size iletilen e-posta mesajlardan kaynaklanacak herhangi bir zarardan size veya herhangi birine karşı sorumluluk kabul edilmez.</br>
                    Size daha iyi bir hizmet ve daha etkili bir "Site" sunmak amacıyla, browser'ınızla etkileşimimizin parçası olarak "cookies" kullanılmaktadır. "Cookie", ziyaretçinin, web sitesini ziyareti sırasında bilgisayarına gönderilen bilgidir. Cookie'ler, bir ziyaretçinin Sitede izlediği navigasyonu takip edebilmemize olanak vermektedir. Bir kişi, Bize online olarak kişisel bilgilerini isteyerek vermediği sürece tarafımızca tanınamaz. Bu bilgiler, bağımsız kuruluşlarla pazarlama yapmaları amacıyla paylaşılamaz veya satılamaz. </p>

                    <div class="title-side">
                        <p class="h3">
                           12-GÜVENLİK 
                        </p>
                    </div>
                    <p>Bireysel/kurumsal abonelik işlemleriniz için belirlediğiniz şifrenizi güvende ve gizli tutmak için azami dikkati gösteriniz ve yetkisiz kullanımları engellemek amacıyla gerekli önlemleri mutlaka alınız. Şifrenizi bir yere not ederek, Vodafone personeli dahil olmak üzere üçüncü bir kişiye söyleyerek ve/veya üçüncü kişiler tarafından anlaşılmasına yol açacak şekilde bir yere kaydederek ya da "Site"ye giriş yaptıktan sonra bilgisayar ekranını gözetimsiz bırakarak ifşa etmeyin. Doğum tarihi, yıldönümleri, telefon numarası gibi kolay tahmin edilebilecek şifreler kullanmayınız. "Online Self Servis KULLANICI SÖZLEŞMESİ"ni ("Sözleşme") onaylayarak "Site"ye üye olduğunuzdan ayrıca "Sözleşme" hükümleri aynen geçerlidir.</br>
                    "Site" üzerinden adınıza herhangi bir yetkisiz girişin olması, şüphelendiğiniz veya bilginiz dahilinde yetkisiz bir emrin verilmesi veya birisinin şifrenizi bildiğinden şüphelenmeniz durumunu tarafımıza hemen bildirmelisiniz. Bunun için Vodafone Müşteri "Hizmet"lerini arayabilirsiniz. Bu tip durumlarda hemen şifrenizi değiştirmelisiniz. Herhangi bir kaybın telafi edilmesine çalışılırken ilgili bankalar ve emniyet birimlerinin yardımınıza ihtiyacı olabilecektir. Bu nedenle ve kayıpların telafi edilmesi veya önlenmesine yardımcı olacağına inandığımız durumlarda emniyet birimlerine veya ilgili üçüncü kişilere, kişisel bilgileriniz hakkında bilgi verilebilecektir. </p>      

                    <div class="title-side">
                        <p class="h3">
                           13-FİKRİ MÜLKİYET
                        </p>
                    </div>
                    <p>"Site"de bulunan sayfa ekranları, bilgi, her türlü "İçerik"le, tema ve materyallerin ve bunların düzenlenmesi konusundaki telif hakları, Vodafone'a ve/veya Vodafone ile sözleşmesi olan üçüncü kişilere aittir. "Site"nin içerdiği bilgi ve materyallere dair tüm telif hakları, tescilli marka, patent ve/veya diğer tüm fikri ve sınai mülkiyet hakları Vodafone adına saklıdır. Bu bağlamda, hiçbir açık veya imalı, tam ya da basit ruhsat-lisans verilmemektedir.</br>
                    Ürün ve "Hizmet"lerimizi kullanırken veya kişisel bilginiz için "Site"deki dosyaları basabilir, kopyalayabilir, indirebilir veya geçici olarak saklayabilirsiniz. Ancak "Site"deki hiçbir şey değiştirilemez. Aksi hal fikri ve sınai mülkiyet mevzuatına göre hukuki ve cezai işlem gerektirecektir. Vodafone'nun yazılı izni alınmadığı sürece, "Site"nin başka şekillerdeki kullanımı yasaktır. Hiç kimse, önceden Vodafone'nun yazılı iznini almadıkça, "Site"nin belli bir kısmını başka bir web sitesinde kullanamaz veya başka bir web sitesine bağlantı kuramaz. </br>
                    Vodafone ve Vodafone logosu ile markalaştırılmış hizmet ve ürünler bir bütün olarak, Vodafone Telekomünikasyon A.Ş.'nin tescilli markası olup, Vodafone'a ait tüm haklar Vodafone Telekomünikasyon A.Ş.'de saklıdır. Yukarıda belirtilen kapsamda ve belirtilen hallerin dışında, Vodafone tescilli markası, logo veya marka adı, izinsiz kullanılamaz veya çoğaltılamayacağı gibi, alan adı ve benzeri uzantılı alan ve alt alan adları, hiçbir şekilde kullanılamaz.  </p>      

                    <div class="title-side">
                        <p class="h3">
                           14-"SİTE"NİN KULLANIMI
                        </p>
                    </div>
                    <p>Vodafone için kişisel bilgilerin gizliliği konusu çok önemlidir. Bireysel/kurumsal kişisel bilgilerinizin güvenliği, genel hükümler ve Telekomünikasyon Mevzuatı kapsamında Vodafone tarafından koruma altına alınmıştır. Kişisel bilgiler yasalara uygun olarak verilmiş Mahkeme/Savcılık kararları ve kişinin açık yazılı onayı dışında hiçbir şekilde üçüncü kişiler tarafından kullanılamayacak, kopyalanmayacak, işlenemeyecek, dağıtılamayacak ve yayınlanmayacaktır.</br>
                    Kişisel bilgi kullanımımız, bu Sözleşme'nin bir parçasını oluşturan Gizlilik Politikasına tabi olacaktır. LÜTFEN GİZLİLİK POLİTİKASINI DİKKATLİCE OKUYUNUZ. Bu politika, kişisel bilgileri nasıl kullanacağımız ve belli koşullarda kimlere vereceğimiz konusu da dahil, kişisel bilgileriniz ile ilgili olarak sizlerin haklarını ve bizlerin yükümlülüklerini ele almaktadır. </p>      

                    <div class="title-side">
                        <p class="h3">
                           10-KİŞİSEL BİLGİLERİNİZ
                        </p>
                    </div>
                    <p>Şimdilik kaydıyla "Site"nin kullanımından belirli bir ücret talep edilmemektedir. Ancak ilerde Vodafone'nun bunu yapmak hakkı saklı tutulmuştur. Vodafone'nun, abonelik ile ilgili bireysel/kurumsal iş ve işlemlerini "Site" üzerinden yapmak amacıyla belirleyebileceği makul ücreti ödemeyi şimdiden kabul ve beyan etmektesiniz. Bununla birlikte, bu tarz bir ücretlendirme yapılmadan ve Vodafone'a herhangi bir ihbarda bulunmanızdan önce posta, e-posta, kısa mesaj veya diğer yollardan tarafınıza bu değişiklikle ilgili bilgi verilecektir. Bildirimi takiben, hizmeti kullanmaya devam etmeniz, teklif edilen ücret değişikliğini kabul ettiğiniz anlamına gelecektir. </p>      

                    <div class="title-side">
                        <p class="h3">
                           15-ÜÇÜNCÜ ŞAHIS SİTELERİ, YÜKÜMLÜLÜKLER VE YASAL UYARI
                        </p>
                    </div>
                    <p>Hizmet vasıtasıyla iletilen ya da erişilen üçüncü şahıslara ait içeriğin güvenliği ya da konusu üzerine kontrol gücümüzün olamayacağını kabul ediyorsunuz ve yasadışı ya da hukuka aykırı içeriğin iletiminden ya da alınmasından hiçbir surette sorumlu değiliz. 5651 Sayılı Yasanın 4.maddesi gereğince de içerik sağlayıcı, bağlantı sağladığı başkasına ait içeriklerden sorumlu değildir. Hizmetler, diğer websitelerine, kaynaklara ve/veya iletişim şebekelerine bağlanmak için tarafınızca kullanılabilir. Bu üçüncü kişilere ait sitelerin içeriğinden ya da Hizmetlerinden hiçbir surette sorumlu değiliz. İletişimlerinizin güvenliği temin etmek için elimizden gelen çabayı göstereceğiz; ancak iletişimleriniz, kontrolümüz altında olmayan üçüncü kişilere ait şebekelerden/hatlardan geçmektedir. İnternet güvenli bir ortam değildir. İstenmeyen programlar ya da materyaller, bilginiz olmadan yüklenebilir ve bu suretle, yetkisi olmayan kişiler, bilgisayarınıza ya da cep telefon cihazınızda, PDA ya da benzeri cihazlarınızdaki saklı bilgilere erişim sağlayabilir. Bu programlar, büyük bir ihtimalle bilginiz dahilinde olmadan, yetki vermediğiniz işlemleri yapabilir. "Site" üzerindeki başka yerlere sağladığımız hiperlink, sadece bilgilendirme amaçlıdır. Diğer web siteleri veya sayfalara giden bağlantıları takip etmenin riski tarafınıza ait olup bu bağlantı sebebiyle oluşan zararlardan Vodafone asla sorumluluk veya yükümlülük kabul etmez.</br> 
                    Yüklenebilir yazılım sitelerine bağlantılar olduğu takdirde, bunlar sadece kullanım kolaylığı sağlamak içindir. </br>Interneti ve/veya Hizmet tarafından erişim sağlanan üçüncü şahıslara ait websitelerini ya da içeriği kullanmanızdan kaynaklanan her türlü kayıp ya da zarardan dolayı hiçbir sorumluluk kabul etmiyoruz. </br>
                    Yazılımı indirmekle ilgili zorluklar veya sonuçlara dair herhangi bir sorumluluk veya yükümlülük taşımamaktayız. İndirilen herhangi bir yazılımın kullanımı, eğer varsa, yazılımla birlikte sağlanan veya yazılımın yanında yer alan lisans anlaşmasının maddelerine tabidir. </br>
                    Sitedeki hiçbir bilgi, üçüncü kişilerin kabulu veya onayını ya da bu kişilere ait tavsiye, düşünce, bilgi, ürün ya da Hizmeti ifade veya ima etmemektedir. </br>
                    Üçüncü kişilere ait bir web sitesinden, herhangi bir Vodafone web sitesine, herhangi bir biçimde hiperlink bağlantısı yaratılmadan önce, mutlaka yazılı iznimizin alınması gerekmektedir. Bu tarz bir kullanım ücrete tabi olabilir. Vodafone, bu tarz bir bağlantı nedeniyle Sizin veya üçüncü tarafın uğradığı hiçbir kayıp veya zarardan sorumlu değildir.</p>      

                    <div class="title-side">
                        <p class="h3">
                           16-TAZMİNAT YÜKÜMLÜLÜĞÜNÜZ
                        </p>
                    </div>
                    <p>Vodafone için kişisel bilgilerin gizliliği konusu çok önemlidir. Bireysel/kurumsal kişisel bilgilerinizin güvenliği, genel hükümler ve Telekomünikasyon Mevzuatı kapsamında Vodafone tarafından koruma altına alınmıştır. Kişisel bilgiler yasalara uygun olarak verilmiş Mahkeme/Savcılık kararları ve kişinin açık yazılı onayı dışında hiçbir şekilde üçüncü kişiler tarafından kullanılamayacak, kopyalanmayacak, işlenemeyecek, dağıtılamayacak ve yayınlanmayacaktır.</br>
                    Kişisel bilgi kullanımımız, bu Sözleşme'nin bir parçasını oluşturan Gizlilik Politikasına tabi olacaktır. LÜTFEN GİZLİLİK POLİTİKASINI DİKKATLİCE OKUYUNUZ. Bu politika, kişisel bilgileri nasıl kullanacağımız ve belli koşullarda kimlere vereceğimiz konusu da dahil, kişisel bilgileriniz ile ilgili olarak sizlerin haklarını ve bizlerin yükümlülüklerini ele almaktadır. </p>      

                    <div class="title-side">
                        <p class="h3">
                           17-HİZMETİN DURDURULMASI VE SONA ERDİRİLMESİ 
                        </p>
                    </div>
                    <p>"Site"de verilen "Hizmet"i;</br>
                    Bakım ya da tamir işleri için;</br> 
                    İçerikleri ya da "Hizmet"lerin işlevini zaman içinde güncellemek ya da yükseltmek için;</br> 
                    Sizin bu Koşulları ihlal ettiğinizi ya da ihlal edebileceğinizi düşünmemiz halinde durdurma hakkımız bulunmaktadır.</br> 
                    Bu Sözleşme'nin hüküm ve koşullarının muhtemel bir ihlalini araştırmak ya da engellemek için Hizmetlere erişiminizi durdurursak, bu Sözleşme bu durdurma süresinde de geçerli olmaya devam edecektir.</br></br>

                    Hizmetin tümü ya da bir kısmına erişiminizi sona erdirebiliriz:</br>
                    Hizmete erişiminizi sona erdirirsek, Hizmette depolamış olduğunuz tüm bilgileri, e-mailleri ve verileri silme hakkımız bulunmaktadır. Bu sebeple, tüm bilgilerin kopyalarını Hizmetten ayrı olarak başka herhangi bir depolama cihazında saklamanızı öneririz.</br>
                    Vodafone; teknik, ticari ya da işletimsel sebeplerle ya da kamu yararına ilişkin sebeplerle "Site"de sunduğu Hizmetleri her zaman genel olarak geri çekebilir ya da değiştirebilir. Hizmetlerin Vodafone tarafından kesin olarak durdurulması halinde, Hizmetlerin durdurulmasından makul bir süre önce bu durum size bildirilecektir.</br> Durdurma, geri alma ya da değişiklik sebebine bağlı olarak, önceden bildirimde bulunmak her zaman mümkün olmayabilir. Fesih ne sizin ne de bizim doğan haklarımızı ve yükümlülüklerimizi etkileyecektir.</br>
                    "Site"deki talimatları takip ederek ya da yukarıda 4.maddede açıklandığı şekilde bizimle bağlantı kurarak Hizmeti her zaman durdurabilirsiniz. Hizmetin durdurulması, tarafınızca kullanılan Hizmetlerin ücretini ya da Hizmetin kullanımı sırasında satın alınan üçüncü mallarının ya da Hizmetlerinin ücretini ödeme yükümlülüğünüzü etkilemeyecektir.</p>      

                    <div class="title-side">
                        <p class="h3">
                           18-UYGULANACAK HUKUK VE İHTİLAFIN ÇÖZÜMÜ
                        </p>
                    </div>
                    <p>Bu Hükümler Türk hukukuna tabi olacak ve Türk hukukuna göre yorumlanacaktır ve İstanbul Merkez Mahkemelerinin, ihtilafın çözümü konusunda münhasır olmayan yetkiye sahip olduğunu siz ve biz kabul ederiz. </br>SÖZLEŞMEYİ OKUDUM VE YUKARIDA YER ALAN TÜM HÜKÜMLERİ, AÇIK VE HÜR İRADE BEYANIM DOĞRULTUSUNDA KABUL EDİP ONAYLIYORUM.  </p> 

                    <div class="title-side">
                        <p class="h3">
                           II.GİZLİLİK POLİTİKASI
                        </p>
                    </div>
                    <p> 1. Aboneden istenen kişisel bilgiler, aboneye "Hizmet" verilebilmesi için gerekli olup, bu kişisel bilgiler Vodafone Telekomünikasyon A.Ş. bünyesinde muhafaza altındadır.</br>
                    2. Aboneye ait kişisel bilgiler; Telekomünikasyon mevzuatına uygun olarak ve Elektronik Haberleşme Sektöründe Kişisel Verileri İşlenmesi ve Gizliliğinin Korunması Hakkında Yönetmelik gereğince, Telekomünikasyon "Hizmet"lerini pazarlamak ya da katma değerli "Hizmet"leri sağlamak amacıyla; abone veya kullanıcı kişisel bilgilerinin kullanılmasına izin verdiği takdirde, Vodafone Telekomüniksyon A.Ş. tarafından, bu tür "Hizmet"ler ve pazarlama için gerekli kapsam ve sürede işlenebilir. Kullanıcı ve aboneler, kişisel bilgilerinin işlenmesi için verdikleri izinleri her zaman geri alabilirler.</br>
                    3. Vodafone Telekomünikasyon A.Ş.; abonenin veya kullanıcının onayını almak koşuluyla, telekomünikasyon "Hizmet"lerinin pazarlanması ya da katma değerli "Hizmet"lerin sağlanması amacıyla, işlenen kişisel bilgileri ve bu tür işlemin süresini abone ve kullanıcılara bildirecektir. </br>
                    4. Afet ve acil durum halleri ile kolluk güçleri, ambülans ve itfaiye "Hizmet"leri dahil tüm acil aramalara ilişkin acil yardım çağrılara cevap vermek amacıyla; abonenin veya kullanıcının rızası olmasa bile abonenin yer verisini ve kimliğini, kullanıcının ise yer verisini içeren bilgiler Telekomünikasyon Mevzuatı gereğince erişilebilir tutacaktır. </br>
                    5. Abone kişisel bilgileri, yasalara uygun olarak verilmiş Mahkeme/Savcılık kararları, yasal istisnalar dışında, hiçbir şekilde üçüncü kişilere verilmez. </br>
                    6. Vodafone Telekomünikasyon A.Ş.'nin hedefi, abone bilgilerini güncel tutmaktır.Bu nedenle belirli zaman aralıkları ile abonelerden kişisel bilgilerinin güncellenmesi talep edilebilecektir.</br>
                    7. Vodafone Telekomünikasyon A.Ş., kendi personeli de dahil olmak üzere, abone bilgilerine hiç kimsenin izinsiz ulaşamaması için bilişim sistemleri üzerinde sıkı bir güvenlik politikası uygulamaktadır.</br>
                    8. Vodafone Telekomünikasyon A.Ş., meydana gelebilecek bir sahtecilik/dolandırıcılık ya da herhangi bir soruşturma ya da şebeke güvenliği ihlali konusunda yasal merciler ve diğer ilgili kurumlar ile işbirliği yapabilir ve yasalar tarafından gerekli görülen hallerde ya da adli makamların talebini yerine getirilmesi halinde, elde edilen her türlü bilgiyi (kişisel veriler dahil) ifşa etme hakkı da saklıdır.</br>
                    9. Abone bilgilerine ulaşma izni olan yetkili Vodafone Grubu'na dahil tüm şirketler, tüm Vodafone grubu personeli ve tüm üçüncü şahıslar, gizlilik mecburiyeti uygulamasına özellikle uymak zorunluluğundadırlar. </p>                   
                </div>
            </div>
        </div>
        <div class="banner-pop-up" id="banner-video-holder">
             <div class="container">
                <span class="close"></span>
                <div class="row">
                    <video id="back-banner-video1" controls loop>
                        <source src="dist/red_web_idil.mp4" type="video/mp4">
                        <source src="dist/red_web_idil.mp4" type="video/ogg">
                    </video>
                </div>
            </div>
        </div>
    </div>
</body>
</html>   