/**
$('document').ready(function(){
	//banner2
		var onSaleteamStoreBox = $('.teamStoreBox');
		var onSaleteamStoreBoxBg = $('.teamStoreBoxBg');
	    var onSale = $('.onSale');
	    var onSaleItem_1 = $('.onSaleItem_1');
	    var onSaleItem_2 = $('.onSaleItem_2');
	    var onSaleItem_3 = $('.onSaleItem_3');
	    var onSaleItem_4 = $('.onSaleItem_4');
	  
	    var onSaleText = $('.onSaleText');
	  
	  tl = new TimelineLite();
	  
	  tl
	    .add('intro')
	    .fromTo(onSaleteamStoreBoxBg, 1.8, { opacity: "0"}, { opacity: "1"}, 'intro+=0.5') 
	    .to(onSaleText,1.5,{transform:'scale(1)',ease: Expo.easeOut}, 'intro')
	    .fromTo(onSale,1.5,{transform:'rotate(-90deg)'},{y: 0,transform:'rotate(0deg)',ease: Elastic.easeOut.config(1, 0.5)})
	    .to(onSaleItem_1,0.1,{opacity:1})
	    .to(onSaleItem_2,0.1,{opacity:1})
	    .to(onSaleItem_3,0.1,{opacity:1})
	    .to(onSaleItem_4,0.1,{opacity:1})
	//banner2


	//banner3
		
		.fromTo("#digi_bg", 1.9, { opacity: "0"}, { opacity: "1"}, 'intro+=0.5') 
		.fromTo("#digi_mac", 0.75, { marginLeft: "-50%", marginBottom: "-30%"}, { marginLeft: "0", marginBottom: "0",  ease: Back.easeOut.config(1), y: 0} ,'intro+=0.15') 
		.fromTo("#digi_paketi", 0.75, { marginLeft: "-50%", marginBottom: "-30%"}, { marginLeft: "0", marginBottom: "0",  ease: Back.easeOut.config(1), y: 0} ,'intro+=0.1') 
		.fromTo("#digi_play", .55, { transform: "scale(0.0)"}, { transform: "scale(1.1)",  ease: Back.easeOut.config(1), y: 0} ,'intro+=0.32') 
		
	//banner3
})

**/


$('document').ready(function(){
	//banner1
		var teamUniformBox = $('.teamUniformBox');
		var uniformMain = $('.teamUniformBox .uniformBox');
		var ball= $('.teamUniformBall');
		var ballEffect = $('.teamUniformItemMain');
		var teamUniformText = $('.teamUniformText');
		var teamUniforScarf = $('.teamUniforScarf');

		var whiteStroke = $('.whiteStroke');
		var uniform = $('.uniform');
		var uniformItem1 = $('.uniformItem1');
		var uniformItem2 = $('.uniformItem2');
		var uniformItem3 = $('.uniformItem3');




	//banner2
		var onSaleteamStoreBox = $('.teamStoreBox');
		var onSaleteamStoreBoxBg = $('.teamStoreBoxBg');
	    var onSale = $('.onSale');
	    var onSaleItem_1 = $('.onSaleItem_1');
	    var onSaleItem_2 = $('.onSaleItem_2');
	    var onSaleItem_3 = $('.onSaleItem_3');
	    var onSaleItem_4 = $('.onSaleItem_4');
	  
	    var onSaleText = $('.onSaleText');
	  
	  tl = new TimelineMax();
	  tl1 =  new TimelineMax({});
	  tl2 =  new TimelineLite({paused:true});
	  tl3 =  new TimelineLite({paused:true});
	  tl4 = new TimelineLite({paused:true});
	  tl5 = new TimelineLite({paused:true});
	  


	tl1.add('intro');
	
	tl1.add('uniformIntro');
	tl1.set(uniform,{display:'block'});
	
	tl1.fromTo(teamUniformText,0.5,{left:'500vw'},{left:'8.7vw', ease: Expo.easeOut},'intro');
	tl1.fromTo(uniformMain,0.35,{top:'-19vw'},{top:'-33vw',ease: Circ.easeIn},'intro+=0.45');
	tl1.from(teamUniforScarf,0.30,{transform:'scale(0,0)', ease: Expo.easeOut},'intro+=0.5');

	tl1.fromTo(ball,0.90,{left:'6.29vw',bottom:'28vw',transform:'rotate(-90deg)'},{left:'12.3vw',bottom:'9vw',transform:'rotate(90deg)',ease: Elastic.easeOut.config(0.75, 0.5)},'intro+=0.35');
	tl1.fromTo(ballEffect,0.40,{top:'-33.2vw'},{top:'-27.85vw', ease: Expo.easeOut},'intro+=0.65');
	
	tl1.to(uniformItem1,0.65,{opacity:'1'},'intro+=0.75');
	tl1.to(uniformItem2,0.65,{opacity:'1'},'intro+=0.90');
	tl1.to(uniformItem3,0.65,{opacity:'1'},'intro+=1');
	tl1.to(whiteStroke,1,{opacity:'1'},'uniformIntro+=1.10');
	
	
	
	
	
	  
	  //banner2
	  tl2.insert(TweenLite.fromTo(onSaleteamStoreBoxBg, 1, { opacity: "0"}, { opacity: "1"}));
	  tl2.insert(TweenLite.to(onSaleText,0.4,{transform:'scale(1)',ease: Expo.easeOut}));
	  tl2.insert(TweenLite.fromTo(onSale,1,{transform:'rotate(-90deg)', marginRight: '-2.6vw'},{y: 0,transform:'rotate(0deg)', marginRight: '0px',ease: Elastic.easeOut.config(1, 0.5), delay: 0.2}));
	  tl2.insert(TweenLite.to(onSaleItem_1,0.1,{opacity:1, delay: 0.8}));
	  tl2.insert(TweenLite.to(onSaleItem_2,0.1,{opacity:1, delay: 0.85}));
	  tl2.insert(TweenLite.to(onSaleItem_3,0.1,{opacity:1, delay: 0.9}));
	  tl2.insert(TweenLite.to(onSaleItem_4,0.1,{opacity:1, delay: 0.95}));
	    

	//banner3
	tl3.insert(TweenLite.fromTo("#digi_bg", 1.9, { opacity: "0"}, { opacity: "1"}, 'intro+=1'));
	tl3.insert(TweenLite.fromTo("#digi_haftalik", 0.5, { marginLeft: "-50%", marginBottom: "-30%"}, { marginLeft: "0", marginBottom: "0", ease: Back.easeOut.config(1), y: 0} ));
	tl3.insert(TweenLite.fromTo("#digi_mac", 0.5, { marginLeft: "-50%", marginBottom: "-30%"}, { marginLeft: "0", marginBottom: "0", delay:0.15, ease: Back.easeOut.config(1), y: 0} ));
	tl3.insert(TweenLite.fromTo("#digi_paketi", 0.5, { marginLeft: "-50%", marginBottom: "-30%"}, { marginLeft: "0", marginBottom: "0", delay: 0.1, ease: Back.easeOut.config(1), y: 0} ));
	tl3.insert(TweenLite.fromTo("#digi_play", .3, { transform: "scale(0.0)"}, { transform: "scale(1.1)", delay: 0.32, ease: Back.easeOut.config(1), y: 0},'intro+=0.32' ));
	tl3.insert(TweenMax.staggerFromTo($('#digi_arrows').children(), 0.1, {transform: "scale(0.0)", opacity: "0"}, {transform: "scale(0.9)", opacity: "1", delay:0.4}, 0.05));
	

	//banner4
	tl4.insert( TweenMax.fromTo(".TD_bg", 1.9, { opacity: "0"}, { opacity: "1"}) );
	tl4.insert( TweenMax.fromTo(".TD_takimina", 0.3, { marginLeft: "-100%"}, { marginLeft: "0%"}) );
	tl4.insert( TweenMax.fromTo(".TD_takimina_golge", 0.3, { marginLeft: "-100%", opacity: "0"}, { marginLeft: "0%", opacity: "1", delay: 0.03}) );
	tl4.insert( TweenMax.fromTo(".TD_1tl_destek", 0.3, { marginLeft: "-100%"}, { marginLeft: "0%", delay: 0.14}) );
	tl4.insert( TweenMax.fromTo(".TD_1tl_destek_golge", 0.3, { marginLeft: "-100%", opacity: "0"}, { marginLeft: "0%", opacity: "1", delay: 0.17}) );
	tl4.insert( TweenMax.fromTo(".TD_1tl", 0.3, { marginTop: "100%"}, { marginTop: "0%", delay: 0.14, ease: Expo.easeOut}) );
	tl4.insert( TweenMax.fromTo(".TD_1tl_golge", 0.3, { marginBottom: "-100%", opacity: "0"}, { marginBottom: "0%", opacity:"1", delay: 0.16, ease: Expo.easeOut}) );
	tl4.insert( TweenMax.fromTo(".TD_tura", 0.8, { marginTop: "50%"}, { marginTop: "0%", delay: 0.05}) );


	//banner5
	tl5.insert( TweenMax.fromTo(".line1, .line3, .line5", 1, { left: "100%"}, { left: "0%",  ease: Power0.easeNone} ) );
	tl5.insert( TweenMax.fromTo(".line2, .line4, .line6", 1, { left: "-200%"}, { left: "-100%",  ease: Power0.easeNone} ) );
	tl5.insert( TweenMax.fromTo(".line1, .line3, .line5", 1, { left: "0%"}, { left: "-100%", ease: Power0.easeNone, repeat:4, yoyo:true, delay: 1}) );
	tl5.insert( TweenMax.fromTo(".line2, .line4, .line6", 1, { left: "-100%"}, { left: "0%", ease: Power0.easeNone,repeat:4, yoyo:true, delay: 1}) );
	tl5.insert( TweenMax.fromTo("#BY_bg", 1.9, { opacity: "0"}, { opacity: "1"}) );
	tl5.insert( TweenMax.fromTo(".byLines svg polygon", 1, { fill: "#e43e43"}, { fill: "#f46e72", repeat:4, yoyo:true, delay: 1}) );
	tl5.insert( TweenMax.fromTo(".BY_bos", 0.3, { marginTop: "-50%", marginLeft: "-5%"}, { marginTop: "0%", marginLeft: "0%", delay:0.15, ease: Back.easeOut.config(1)} ) );
	tl5.insert( TweenMax.fromTo(".BY_yok", 0.3, { marginTop: "-50%", marginLeft: "-5%"}, { marginTop: "0%", marginLeft: "0%", delay:0.5, ease: Back.easeOut.config(1)} ) );
	tl5.insert( TweenMax.fromTo(".BY_bos_golge", 0.3, { marginTop: "5%", marginLeft: "3%", transform: "scale(0.0)", opacity: "0"}, { marginTop: "0%", marginLeft: "0%", transform: "scale(1)", opacity: "1", delay:0.15, ease: Back.easeOut.config(1)} ) );
	tl5.insert( TweenMax.fromTo(".BY_yok_golge", 0.3, { marginTop: "5%", marginLeft: "3%", transform: "scale(0.0)", opacity: "0"}, { marginTop: "0%", marginLeft: "0%", transform: "scale(1)", opacity: "1", delay:0.5, ease: Back.easeOut.config(1)} ) );


	var cerez1Deger = getCookie("loader");

	if (cerez1Deger =! null) {
	    tl.add(tl1, 10.3, playTL1());
	    tl.add(tl2, 10.8, playTL2());
	    tl.add(tl3, 11.1, playTL3());
	    tl.add(tl4, 11.5, playTL4());
	    tl.add(tl5, 11.6, playTL5());
	    tl.play();
	}
	else {
	    tl.play();
	}


		 

});

function playTL1() {
     tl1.play();
}
function playTL2() {
     tl2.play();
}
function playTL3() {
     tl3.play();
}
function playTL4() {
     tl4.play();
}
function playTL5() {
     tl5.play();
}


$('.team-side .item').on('inview', function(event, isInView) {
    if (isInView) {
        $(this).addClass('reveal');
        TweenMax.staggerTo($('.reveal'),0.5, {y:'0px', opacity:1},0.03);
    } 
});
