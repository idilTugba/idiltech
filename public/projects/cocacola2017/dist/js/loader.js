function setCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
$('document').ready(function () {


    //var cerez1Deger = getCookie("loader");

    if (cerez1Deger != null) {
        // loader animasyonu oynamasýn, direkt kýrmýzý ekrana geçsin
        $(".loader").hide();
        $('.header').removeClass('active2');
        setTimeout(function () {
            $(".mobile-title").addClass('active');
        }, 1000);

        tl1.restart(); tl2.restart(); tl3.restart(); tl4.restart(); tl5.restart();


    }

	tlLoader = new TimelineMax({delay:1, onComplete:displayNone});
	tlLoaderBall = new TimelineMax({repeat: -1});
	setTimeout(function(){
		$('.loader').addClass('active');
	},1200);
	
	
	tlLoaderBall.insert(TweenMax.from(".ld-wrap", .25, {top: "7vw", ease: Power2.easeOut}));
	tlLoaderBall.insert(TweenMax.from(".LB_shadow", .25,{scaleX:0.6, scaleY:0.6, opacity:0.6, ease: Power2.easeOut}));


	tlLoaderBall.insert(TweenMax.to(".ld-wrap", .25, {top: "7vw", ease: Power2.easeIn, delay:0.25}));
	tlLoaderBall.insert(TweenMax.to(".LB_shadow", .25, {scaleX:.6, scaleY:.6, opacity:0.25, ease: Power2.easeIn, delay:0.25}));

	tlLoaderBall.insert(TweenMax.fromTo(".ld-wrap img", .4, {rotation: "0px", transformOrigin:"center", ease: Power3.easeOut},{rotation: "-80px", transformOrigin:"center", ease: Power3.easeOut}));
	
	tlLoaderBall.insert(TweenMax.to(".ld-wrap", .4, {scaleX:1.2, scaleY:0.9, transformOrigin:"bottom 10%", ease: Back.easeOut.config(1)}));
	tlLoaderBall.insert(TweenMax.to(".ld-wrap", .4, {scaleX:1, scaleY:1, transformOrigin:"bottom 10%", ease: Back.easeOut.config(1), delay: .03}));

	tlLoader.insert(TweenMax.staggerFromTo(".loaderText1 p", 0.3, {x: "-100", opacity: "0"}, {x: "0", opacity:"1", delay: 1, ease: Power2.easeOut}, 0.08));
	tlLoader.insert( TweenMax.staggerTo(".loaderText1 p", 0.3, {x: "100", autoAlpha:"0", delay: 3, ease: Power2.easeOut}, 0.08));
	
	tlLoader.insert(TweenMax.staggerFromTo(".loaderText2 p", 0.3, {x: "-100", opacity: "0"}, {x: "0", opacity:"1", delay: 3.3, ease: Power2.easeOut}, 0.08));
	tlLoader.insert( TweenMax.staggerTo(".loaderText2 p", 0.3, {x: "100", autoAlpha:"0", delay: 5.5, ease: Power2.easeOut}, 0.08));
	
	tlLoader.insert(TweenMax.staggerFromTo(".loaderText3 p", 0.3, {x: "-100", opacity: "0"}, {x: "0", opacity:"1", delay: 5.8, ease: Power2.easeOut}, 0.08));
	tlLoader.insert( TweenMax.staggerTo(".loaderText3 p", 0.3, {x: "100", autoAlpha:"0", delay: 8, ease: Power2.easeOut}, 0.08));
	tlLoader.insert( TweenMax.staggerTo(".loaderText3 p", 0.3, {autoAlpha:"0", delay: 9, ease: Power2.easeOut}, 0.08));
	

	tlLoader.play();

	var cerez1Deger = getCookie("loader");

	if (cerez1Deger == null) {
	    setCookie("loader", "deger", 1);
	}
	
	$(".restart").click(function(e) {
        tlLoaderBall.restart();
    });
	
	function displayNone() {
	 	$(".loader").hide();
	  	$('.header').removeClass('active2');
	  	setTimeout(function(){
		  $(".mobile-title").addClass('active');
		},1000);
	}
	
});


