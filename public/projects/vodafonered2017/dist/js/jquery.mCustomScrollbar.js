!function(a,b,c){!function(b){var d="function"==typeof define&&define.amd,e="https:"==c.location.protocol?"https:":"http:",f="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";d||a.event.special.mousewheel||a("head").append(decodeURI("%3Cscript src="+e+"//"+f+"%3E%3C/script%3E")),b()}(function(){var l,d="mCustomScrollbar",e="mCS",f=".mCustomScrollbar",g={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:!0},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},h=0,i={},j=b.attachEvent&&!b.addEventListener?1:0,k=!1,m=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],n={init:function(b){var b=a.extend(!0,{},g,b),c=o.call(this);if(b.live){var d=b.liveSelector||this.selector||f,j=a(d);if("off"===b.live)return void q(d);i[d]=setTimeout(function(){j.mCustomScrollbar(b),"once"===b.live&&j.length&&q(d)},500)}else q(d);return b.setWidth=b.set_width?b.set_width:b.setWidth,b.setHeight=b.set_height?b.set_height:b.setHeight,b.axis=b.horizontalScroll?"x":r(b.axis),b.scrollInertia=b.scrollInertia>0&&b.scrollInertia<17?17:b.scrollInertia,"object"!=typeof b.mouseWheel&&1==b.mouseWheel&&(b.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),b.mouseWheel.scrollAmount=b.mouseWheelPixels?b.mouseWheelPixels:b.mouseWheel.scrollAmount,b.mouseWheel.normalizeDelta=b.advanced.normalizeMouseWheelDelta?b.advanced.normalizeMouseWheelDelta:b.mouseWheel.normalizeDelta,b.scrollButtons.scrollType=s(b.scrollButtons.scrollType),p(b),a(c).each(function(){var c=a(this);if(!c.data(e)){c.data(e,{idx:++h,opt:b,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:c.css("direction"),cbOffsets:null,trigger:null});var d=c.data(e),f=d.opt,g=c.data("mcs-axis"),i=c.data("mcs-scrollbar-position"),j=c.data("mcs-theme");g&&(f.axis=g),i&&(f.scrollbarPosition=i),j&&(f.theme=j,p(f)),t.call(this),a("#mCSB_"+d.idx+"_container img:not(."+m[2]+")").addClass(m[2]),n.update.call(null,c)}})},update:function(b,c){var d=b||o.call(this);return a(d).each(function(){var b=a(this);if(b.data(e)){var d=b.data(e),f=d.opt,g=a("#mCSB_"+d.idx+"_container"),h=[a("#mCSB_"+d.idx+"_dragger_vertical"),a("#mCSB_"+d.idx+"_dragger_horizontal")];if(!g.length)return;d.tweenRunning&&W(b),b.hasClass(m[3])&&b.removeClass(m[3]),b.hasClass(m[4])&&b.removeClass(m[4]),x.call(this),v.call(this),"y"===f.axis||f.advanced.autoExpandHorizontalScroll||g.css("width",u(g.children())),d.overflowed=B.call(this),F.call(this),f.autoDraggerLength&&y.call(this),z.call(this),D.call(this);var i=[Math.abs(g[0].offsetTop),Math.abs(g[0].offsetLeft)];"x"!==f.axis&&(d.overflowed[0]?h[0].height()>h[0].parent().height()?C.call(this):(X(b,i[0].toString(),{dir:"y",dur:0,overwrite:"none"}),d.contentReset.y=null):(C.call(this),"y"===f.axis?E.call(this):"yx"===f.axis&&d.overflowed[1]&&X(b,i[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==f.axis&&(d.overflowed[1]?h[1].width()>h[1].parent().width()?C.call(this):(X(b,i[1].toString(),{dir:"x",dur:0,overwrite:"none"}),d.contentReset.x=null):(C.call(this),"x"===f.axis?E.call(this):"yx"===f.axis&&d.overflowed[0]&&X(b,i[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),c&&d&&(2===c&&f.callbacks.onImageLoad&&"function"==typeof f.callbacks.onImageLoad?f.callbacks.onImageLoad.call(this):3===c&&f.callbacks.onSelectorChange&&"function"==typeof f.callbacks.onSelectorChange?f.callbacks.onSelectorChange.call(this):f.callbacks.onUpdate&&"function"==typeof f.callbacks.onUpdate&&f.callbacks.onUpdate.call(this)),U.call(this)}})},scrollTo:function(b,c){if("undefined"!=typeof b&&null!=b){var d=o.call(this);return a(d).each(function(){var d=a(this);if(d.data(e)){var f=d.data(e),g=f.opt,h={trigger:"external",scrollInertia:g.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},i=a.extend(!0,{},h,c),j=S.call(this,b),k=i.scrollInertia>0&&i.scrollInertia<17?17:i.scrollInertia;j[0]=T.call(this,j[0],"y"),j[1]=T.call(this,j[1],"x"),i.moveDragger&&(j[0]*=f.scrollRatio.y,j[1]*=f.scrollRatio.x),i.dur=k,setTimeout(function(){null!==j[0]&&"undefined"!=typeof j[0]&&"x"!==g.axis&&f.overflowed[0]&&(i.dir="y",i.overwrite="all",X(d,j[0].toString(),i)),null!==j[1]&&"undefined"!=typeof j[1]&&"y"!==g.axis&&f.overflowed[1]&&(i.dir="x",i.overwrite="none",X(d,j[1].toString(),i))},i.timeout)}})}},stop:function(){var b=o.call(this);return a(b).each(function(){var b=a(this);b.data(e)&&W(b)})},disable:function(b){var c=o.call(this);return a(c).each(function(){var c=a(this);if(c.data(e)){c.data(e);U.call(this,"remove"),E.call(this),b&&C.call(this),F.call(this,!0),c.addClass(m[3])}})},destroy:function(){var b=o.call(this);return a(b).each(function(){var c=a(this);if(c.data(e)){var f=c.data(e),g=f.opt,h=a("#mCSB_"+f.idx),i=a("#mCSB_"+f.idx+"_container"),j=a(".mCSB_"+f.idx+"_scrollbar");g.live&&q(g.liveSelector||a(b).selector),U.call(this,"remove"),E.call(this),C.call(this),c.removeData(e),_(this,"mcs"),j.remove(),i.find("img."+m[2]).removeClass(m[2]),h.replaceWith(i.contents()),c.removeClass(d+" _"+e+"_"+f.idx+" "+m[6]+" "+m[7]+" "+m[5]+" "+m[3]).addClass(m[4])}})}},o=function(){return"object"!=typeof a(this)||a(this).length<1?f:this},p=function(b){var c=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],d=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],e=["minimal","minimal-dark"],f=["minimal","minimal-dark"],g=["minimal","minimal-dark"];b.autoDraggerLength=!(a.inArray(b.theme,c)>-1)&&b.autoDraggerLength,b.autoExpandScrollbar=!(a.inArray(b.theme,d)>-1)&&b.autoExpandScrollbar,b.scrollButtons.enable=!(a.inArray(b.theme,e)>-1)&&b.scrollButtons.enable,b.autoHideScrollbar=a.inArray(b.theme,f)>-1||b.autoHideScrollbar,b.scrollbarPosition=a.inArray(b.theme,g)>-1?"outside":b.scrollbarPosition},q=function(a){i[a]&&(clearTimeout(i[a]),_(i,a))},r=function(a){return"yx"===a||"xy"===a||"auto"===a?"yx":"x"===a||"horizontal"===a?"x":"y"},s=function(a){return"stepped"===a||"pixels"===a||"step"===a||"click"===a?"stepped":"stepless"},t=function(){var b=a(this),c=b.data(e),f=c.opt,g=f.autoExpandScrollbar?" "+m[1]+"_expand":"",h=["<div id='mCSB_"+c.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+c.idx+"_scrollbar mCS-"+f.theme+" mCSB_scrollTools_vertical"+g+"'><div class='"+m[12]+"'><div id='mCSB_"+c.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+c.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+c.idx+"_scrollbar mCS-"+f.theme+" mCSB_scrollTools_horizontal"+g+"'><div class='"+m[12]+"'><div id='mCSB_"+c.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],i="yx"===f.axis?"mCSB_vertical_horizontal":"x"===f.axis?"mCSB_horizontal":"mCSB_vertical",j="yx"===f.axis?h[0]+h[1]:"x"===f.axis?h[1]:h[0],k="yx"===f.axis?"<div id='mCSB_"+c.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",l=f.autoHideScrollbar?" "+m[6]:"",n="x"!==f.axis&&"rtl"===c.langDir?" "+m[7]:"";f.setWidth&&b.css("width",f.setWidth),f.setHeight&&b.css("height",f.setHeight),f.setLeft="y"!==f.axis&&"rtl"===c.langDir?"989999px":f.setLeft,b.addClass(d+" _"+e+"_"+c.idx+l+n).wrapInner("<div id='mCSB_"+c.idx+"' class='mCustomScrollBox mCS-"+f.theme+" "+i+"'><div id='mCSB_"+c.idx+"_container' class='mCSB_container' style='position:relative; top:"+f.setTop+"; left:"+f.setLeft+";' dir="+c.langDir+" /></div>");var o=a("#mCSB_"+c.idx),p=a("#mCSB_"+c.idx+"_container");"y"===f.axis||f.advanced.autoExpandHorizontalScroll||p.css("width",u(p.children())),"outside"===f.scrollbarPosition?("static"===b.css("position")&&b.css("position","relative"),b.css("overflow","visible"),o.addClass("mCSB_outside").after(j)):(o.addClass("mCSB_inside").append(j),p.wrap(k)),w.call(this);var q=[a("#mCSB_"+c.idx+"_dragger_vertical"),a("#mCSB_"+c.idx+"_dragger_horizontal")];q[0].css("min-height",q[0].height()),q[1].css("min-width",q[1].width())},u=function(b){return Math.max.apply(Math,b.map(function(){return a(this).outerWidth(!0)}).get())},v=function(){var b=a(this),c=b.data(e),d=c.opt,f=a("#mCSB_"+c.idx+"_container");d.advanced.autoExpandHorizontalScroll&&"y"!==d.axis&&f.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(f[0].getBoundingClientRect().right+.4)-Math.floor(f[0].getBoundingClientRect().left),position:"relative"}).unwrap()},w=function(){var b=a(this),c=b.data(e),d=c.opt,f=a(".mCSB_"+c.idx+"_scrollbar:first"),g=ca(d.scrollButtons.tabindex)?"tabindex='"+d.scrollButtons.tabindex+"'":"",h=["<a href='#' class='"+m[13]+"' oncontextmenu='return false;' "+g+" />","<a href='#' class='"+m[14]+"' oncontextmenu='return false;' "+g+" />","<a href='#' class='"+m[15]+"' oncontextmenu='return false;' "+g+" />","<a href='#' class='"+m[16]+"' oncontextmenu='return false;' "+g+" />"],i=["x"===d.axis?h[2]:h[0],"x"===d.axis?h[3]:h[1],h[2],h[3]];d.scrollButtons.enable&&f.prepend(i[0]).append(i[1]).next(".mCSB_scrollTools").prepend(i[2]).append(i[3])},x=function(){var b=a(this),c=b.data(e),d=a("#mCSB_"+c.idx),f=b.css("max-height")||"none",g=f.indexOf("%")!==-1,h=b.css("box-sizing");if("none"!==f){var i=g?b.parent().height()*parseInt(f)/100:parseInt(f);"border-box"===h&&(i-=b.innerHeight()-b.height()+(b.outerHeight()-b.innerHeight())),d.css("max-height",Math.round(i))}},y=function(){var b=a(this),c=b.data(e),d=a("#mCSB_"+c.idx),f=a("#mCSB_"+c.idx+"_container"),g=[a("#mCSB_"+c.idx+"_dragger_vertical"),a("#mCSB_"+c.idx+"_dragger_horizontal")],h=[d.height()/f.outerHeight(!1),d.width()/f.outerWidth(!1)],i=[parseInt(g[0].css("min-height")),Math.round(h[0]*g[0].parent().height()),parseInt(g[1].css("min-width")),Math.round(h[1]*g[1].parent().width())],k=j&&i[1]<i[0]?i[0]:i[1],l=j&&i[3]<i[2]?i[2]:i[3];g[0].css({height:k,"max-height":g[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":i[0]+"px"}),g[1].css({width:l,"max-width":g[1].parent().width()-10})},z=function(){var b=a(this),c=b.data(e),d=a("#mCSB_"+c.idx),f=a("#mCSB_"+c.idx+"_container"),g=[a("#mCSB_"+c.idx+"_dragger_vertical"),a("#mCSB_"+c.idx+"_dragger_horizontal")],h=[f.outerHeight(!1)-d.height(),f.outerWidth(!1)-d.width()],i=[h[0]/(g[0].parent().height()-g[0].height()),h[1]/(g[1].parent().width()-g[1].width())];c.scrollRatio={y:i[0],x:i[1]}},A=function(a,b,c){var d=c?m[0]+"_expanded":"",e=a.closest(".mCSB_scrollTools");"active"===b?(a.toggleClass(m[0]+" "+d),e.toggleClass(m[1]),a[0]._draggable=a[0]._draggable?0:1):a[0]._draggable||("hide"===b?(a.removeClass(m[0]),e.removeClass(m[1])):(a.addClass(m[0]),e.addClass(m[1])))},B=function(){var b=a(this),c=b.data(e),d=a("#mCSB_"+c.idx),f=a("#mCSB_"+c.idx+"_container"),g=null==c.overflowed?f.height():f.outerHeight(!1),h=null==c.overflowed?f.width():f.outerWidth(!1);return[g>d.height(),h>d.width()]},C=function(){var b=a(this),c=b.data(e),d=c.opt,f=a("#mCSB_"+c.idx),g=a("#mCSB_"+c.idx+"_container"),h=[a("#mCSB_"+c.idx+"_dragger_vertical"),a("#mCSB_"+c.idx+"_dragger_horizontal")];if(W(b),("x"!==d.axis&&!c.overflowed[0]||"y"===d.axis&&c.overflowed[0])&&(h[0].add(g).css("top",0),X(b,"_resetY")),"y"!==d.axis&&!c.overflowed[1]||"x"===d.axis&&c.overflowed[1]){var i=dx=0;"rtl"===c.langDir&&(i=f.width()-g.outerWidth(!1),dx=Math.abs(i/c.scrollRatio.x)),g.css("left",i),h[1].css("left",dx),X(b,"_resetX")}},D=function(){function f(){g=setTimeout(function(){a.event.special.mousewheel?(clearTimeout(g),K.call(b[0])):f()},100)}var b=a(this),c=b.data(e),d=c.opt;if(!c.bindEvents){if(H.call(this),d.contentTouchScroll&&I.call(this),J.call(this),d.mouseWheel.enable){var g;f()}M.call(this),O.call(this),d.advanced.autoScrollOnFocus&&N.call(this),d.scrollButtons.enable&&P.call(this),d.keyboard.enable&&Q.call(this),c.bindEvents=!0}},E=function(){var b=a(this),d=b.data(e),f=d.opt,g=e+"_"+d.idx,h=".mCSB_"+d.idx+"_scrollbar",i=a("#mCSB_"+d.idx+",#mCSB_"+d.idx+"_container,#mCSB_"+d.idx+"_container_wrapper,"+h+" ."+m[12]+",#mCSB_"+d.idx+"_dragger_vertical,#mCSB_"+d.idx+"_dragger_horizontal,"+h+">a"),j=a("#mCSB_"+d.idx+"_container");f.advanced.releaseDraggableSelectors&&i.add(a(f.advanced.releaseDraggableSelectors)),d.bindEvents&&(a(c).unbind("."+g),i.each(function(){a(this).unbind("."+g)}),clearTimeout(b[0]._focusTimeout),_(b[0],"_focusTimeout"),clearTimeout(d.sequential.step),_(d.sequential,"step"),clearTimeout(j[0].onCompleteTimeout),_(j[0],"onCompleteTimeout"),d.bindEvents=!1)},F=function(b){var c=a(this),d=c.data(e),f=d.opt,g=a("#mCSB_"+d.idx+"_container_wrapper"),h=g.length?g:a("#mCSB_"+d.idx+"_container"),i=[a("#mCSB_"+d.idx+"_scrollbar_vertical"),a("#mCSB_"+d.idx+"_scrollbar_horizontal")],j=[i[0].find(".mCSB_dragger"),i[1].find(".mCSB_dragger")];"x"!==f.axis&&(d.overflowed[0]&&!b?(i[0].add(j[0]).add(i[0].children("a")).css("display","block"),h.removeClass(m[8]+" "+m[10])):(f.alwaysShowScrollbar?(2!==f.alwaysShowScrollbar&&j[0].css("display","none"),h.removeClass(m[10])):(i[0].css("display","none"),h.addClass(m[10])),h.addClass(m[8]))),"y"!==f.axis&&(d.overflowed[1]&&!b?(i[1].add(j[1]).add(i[1].children("a")).css("display","block"),h.removeClass(m[9]+" "+m[11])):(f.alwaysShowScrollbar?(2!==f.alwaysShowScrollbar&&j[1].css("display","none"),h.removeClass(m[11])):(i[1].css("display","none"),h.addClass(m[11])),h.addClass(m[9]))),d.overflowed[0]||d.overflowed[1]?c.removeClass(m[5]):c.addClass(m[5])},G=function(a){var b=a.type;switch(b){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return[a.originalEvent.pageY,a.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var c=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0],d=a.originalEvent.touches.length||a.originalEvent.changedTouches.length;return[c.pageY,c.pageX,d>1];default:return[a.pageY,a.pageX,!1]}},H=function(){function q(a){var b=i.find("iframe");if(b.length){var c=a?"auto":"none";b.css("pointer-events",c)}}function r(a,c,e,g){if(i[0].idleTimer=f.scrollInertia<233?250:0,m.attr("id")===h[1])var j="x",k=(m[0].offsetLeft-c+g)*d.scrollRatio.x;else var j="y",k=(m[0].offsetTop-a+e)*d.scrollRatio.y;X(b,k.toString(),{dir:j,drag:!0})}var m,n,o,b=a(this),d=b.data(e),f=d.opt,g=e+"_"+d.idx,h=["mCSB_"+d.idx+"_dragger_vertical","mCSB_"+d.idx+"_dragger_horizontal"],i=a("#mCSB_"+d.idx+"_container"),l=a("#"+h[0]+",#"+h[1]),p=f.advanced.releaseDraggableSelectors?l.add(a(f.advanced.releaseDraggableSelectors)):l;l.bind("mousedown."+g+" touchstart."+g+" pointerdown."+g+" MSPointerDown."+g,function(d){if(d.stopImmediatePropagation(),d.preventDefault(),aa(d)){k=!0,j&&(c.onselectstart=function(){return!1}),q(!1),W(b),m=a(this);var e=m.offset(),g=G(d)[0]-e.top,h=G(d)[1]-e.left,i=m.height()+e.top,l=m.width()+e.left;g<i&&g>0&&h<l&&h>0&&(n=g,o=h),A(m,"active",f.autoExpandScrollbar)}}).bind("touchmove."+g,function(a){a.stopImmediatePropagation(),a.preventDefault();var b=m.offset(),c=G(a)[0]-b.top,d=G(a)[1]-b.left;r(n,o,c,d)}),a(c).bind("mousemove."+g+" pointermove."+g+" MSPointerMove."+g,function(a){if(m){var b=m.offset(),c=G(a)[0]-b.top,d=G(a)[1]-b.left;if(n===c)return;r(n,o,c,d)}}).add(p).bind("mouseup."+g+" touchend."+g+" pointerup."+g+" MSPointerUp."+g,function(a){m&&(A(m,"active",f.autoExpandScrollbar),m=null),k=!1,j&&(c.onselectstart=null),q(!0)})},I=function(){function D(a,b){var c=[1.5*b,2*b,b/1.5,b/2];return a>90?b>4?c[0]:c[3]:a>60?b>3?c[3]:c[2]:a>30?b>8?c[1]:b>6?c[0]:b>4?b:c[2]:b>8?b:c[3]}function E(a,c,d,e,f,g){a&&X(b,a.toString(),{dur:c,scrollEasing:d,dir:e,overwrite:f,drag:g})}var j,m,n,o,r,s,t,u,v,w,y,B,C,b=a(this),c=b.data(e),d=c.opt,f=e+"_"+c.idx,g=a("#mCSB_"+c.idx),h=a("#mCSB_"+c.idx+"_container"),i=[a("#mCSB_"+c.idx+"_dragger_vertical"),a("#mCSB_"+c.idx+"_dragger_horizontal")],p=[],q=[],x=0,z="yx"===d.axis?"none":"all",A=[];h.bind("touchstart."+f+" pointerdown."+f+" MSPointerDown."+f,function(a){if(!ba(a)||k||G(a)[2])return void(l=0);l=1,B=0,C=0;var b=h.offset();j=G(a)[0]-b.top,m=G(a)[1]-b.left,A=[G(a)[0],G(a)[1]]}).bind("touchmove."+f+" pointermove."+f+" MSPointerMove."+f,function(a){if(ba(a)&&!k&&!G(a)[2]&&(a.stopImmediatePropagation(),!C||B)){s=Z();var b=g.offset(),e=G(a)[0]-b.top,f=G(a)[1]-b.left,l="mcsLinearOut";if(p.push(e),q.push(f),A[2]=Math.abs(G(a)[0]-A[0]),A[3]=Math.abs(G(a)[1]-A[1]),c.overflowed[0])var n=i[0].parent().height()-i[0].height(),o=j-e>0&&e-j>-(n*c.scrollRatio.y)&&(2*A[3]<A[2]||"yx"===d.axis);if(c.overflowed[1])var r=i[1].parent().width()-i[1].width(),t=m-f>0&&f-m>-(r*c.scrollRatio.x)&&(2*A[2]<A[3]||"yx"===d.axis);o||t?(a.preventDefault(),B=1):C=1,w="yx"===d.axis?[j-e,m-f]:"x"===d.axis?[null,m-f]:[j-e,null],h[0].idleTimer=250,c.overflowed[0]&&E(w[0],x,l,"y","all",!0),c.overflowed[1]&&E(w[1],x,l,"x",z,!0)}}),g.bind("touchstart."+f+" pointerdown."+f+" MSPointerDown."+f,function(a){if(!ba(a)||k||G(a)[2])return void(l=0);l=1,a.stopImmediatePropagation(),W(b),r=Z();var c=g.offset();n=G(a)[0]-c.top,o=G(a)[1]-c.left,p=[],q=[]}).bind("touchend."+f+" pointerup."+f+" MSPointerUp."+f,function(a){if(ba(a)&&!k&&!G(a)[2]){a.stopImmediatePropagation(),B=0,C=0,t=Z();var b=g.offset(),e=G(a)[0]-b.top,f=G(a)[1]-b.left;if(!(t-s>30)){v=1e3/(t-r);var i="mcsEaseOut",j=v<2.5,l=j?[p[p.length-2],q[q.length-2]]:[0,0];u=j?[e-l[0],f-l[1]]:[e-n,f-o];var m=[Math.abs(u[0]),Math.abs(u[1])];v=j?[Math.abs(u[0]/4),Math.abs(u[1]/4)]:[v,v];var x=[Math.abs(h[0].offsetTop)-u[0]*D(m[0]/v[0],v[0]),Math.abs(h[0].offsetLeft)-u[1]*D(m[1]/v[1],v[1])];w="yx"===d.axis?[x[0],x[1]]:"x"===d.axis?[null,x[1]]:[x[0],null],y=[4*m[0]+d.scrollInertia,4*m[1]+d.scrollInertia];var A=parseInt(d.contentTouchScroll)||0;w[0]=m[0]>A?w[0]:0,w[1]=m[1]>A?w[1]:0,c.overflowed[0]&&E(w[0],y[0],i,"y",z,!1),c.overflowed[1]&&E(w[1],y[1],i,"x",z,!1)}}})},J=function(){function o(){return b.getSelection?b.getSelection().toString():c.selection&&"Control"!=c.selection.type?c.selection.createRange().text:0}function p(a,b,c){h.type=c&&n?"stepped":"stepless",h.scrollAmount=10,R(d,a,b,"mcsLinearOut",c?60:null)}var n,d=a(this),f=d.data(e),g=f.opt,h=f.sequential,i=e+"_"+f.idx,j=a("#mCSB_"+f.idx+"_container"),m=j.parent();j.bind("mousedown."+i,function(a){l||n||(n=1,k=!0)}).add(c).bind("mousemove."+i,function(a){if(!l&&n&&o()){var b=j.offset(),c=G(a)[0]-b.top+j[0].offsetTop,d=G(a)[1]-b.left+j[0].offsetLeft;c>0&&c<m.height()&&d>0&&d<m.width()?h.step&&p("off",null,"stepped"):("x"!==g.axis&&f.overflowed[0]&&(c<0?p("on",38):c>m.height()&&p("on",40)),"y"!==g.axis&&f.overflowed[1]&&(d<0?p("on",37):d>m.width()&&p("on",39)))}}).bind("mouseup."+i,function(a){l||(n&&(n=0,p("off",null)),k=!1)})},K=function(){function l(a){var b=null;try{var c=a.contentDocument||a.contentWindow.document;b=c.body.innerHTML}catch(a){}return null!==b}var b=a(this),c=b.data(e);if(c){var d=c.opt,f=e+"_"+c.idx,g=a("#mCSB_"+c.idx),h=[a("#mCSB_"+c.idx+"_dragger_vertical"),a("#mCSB_"+c.idx+"_dragger_horizontal")],i=a("#mCSB_"+c.idx+"_container").find("iframe"),k=g;i.length&&i.each(function(){var b=this;l(b)&&(k=k.add(a(b).contents().find("body")))}),k.bind("mousewheel."+f,function(e,f){if(W(b),!L(b,e.target)){var i="auto"!==d.mouseWheel.deltaFactor?parseInt(d.mouseWheel.deltaFactor):j&&e.deltaFactor<100?100:e.deltaFactor||100;if("x"===d.axis||"x"===d.mouseWheel.axis)var k="x",l=[Math.round(i*c.scrollRatio.x),parseInt(d.mouseWheel.scrollAmount)],m="auto"!==d.mouseWheel.scrollAmount?l[1]:l[0]>=g.width()?.9*g.width():l[0],n=Math.abs(a("#mCSB_"+c.idx+"_container")[0].offsetLeft),o=h[1][0].offsetLeft,p=h[1].parent().width()-h[1].width(),q=e.deltaX||e.deltaY||f;else var k="y",l=[Math.round(i*c.scrollRatio.y),parseInt(d.mouseWheel.scrollAmount)],m="auto"!==d.mouseWheel.scrollAmount?l[1]:l[0]>=g.height()?.9*g.height():l[0],n=Math.abs(a("#mCSB_"+c.idx+"_container")[0].offsetTop),o=h[0][0].offsetTop,p=h[0].parent().height()-h[0].height(),q=e.deltaY||f;"y"===k&&!c.overflowed[0]||"x"===k&&!c.overflowed[1]||(d.mouseWheel.invert&&(q=-q),d.mouseWheel.normalizeDelta&&(q=q<0?-1:1),(q>0&&0!==o||q<0&&o!==p||d.mouseWheel.preventDefault)&&(e.stopImmediatePropagation(),e.preventDefault()),X(b,(n-q*m).toString(),{dir:k}))}})}},L=function(b,c){var d=c.nodeName.toLowerCase(),f=b.data(e).opt.mouseWheel.disableOver,g=["select","textarea"];return a.inArray(d,f)>-1&&!(a.inArray(d,g)>-1&&!a(c).is(":focus"))},M=function(){var b=a(this),c=b.data(e),d=e+"_"+c.idx,f=a("#mCSB_"+c.idx+"_container"),g=f.parent(),h=a(".mCSB_"+c.idx+"_scrollbar ."+m[12]);h.bind("touchstart."+d+" pointerdown."+d+" MSPointerDown."+d,function(a){k=!0}).bind("touchend."+d+" pointerup."+d+" MSPointerUp."+d,function(a){k=!1}).bind("click."+d,function(d){if(a(d.target).hasClass(m[12])||a(d.target).hasClass("mCSB_draggerRail")){W(b);var e=a(this),h=e.find(".mCSB_dragger");if(e.parent(".mCSB_scrollTools_horizontal").length>0){if(!c.overflowed[1])return;var i="x",j=d.pageX>h.offset().left?-1:1,k=Math.abs(f[0].offsetLeft)-j*(.9*g.width())}else{if(!c.overflowed[0])return;var i="y",j=d.pageY>h.offset().top?-1:1,k=Math.abs(f[0].offsetTop)-j*(.9*g.height())}X(b,k.toString(),{dir:i,scrollEasing:"mcsEaseInOut"})}})},N=function(){var b=a(this),d=b.data(e),f=d.opt,g=e+"_"+d.idx,h=a("#mCSB_"+d.idx+"_container"),i=h.parent();h.bind("focusin."+g,function(d){var e=a(c.activeElement),g=h.find(".mCustomScrollBox").length,j=0;e.is(f.advanced.autoScrollOnFocus)&&(W(b),clearTimeout(b[0]._focusTimeout),b[0]._focusTimer=g?(j+17)*g:0,b[0]._focusTimeout=setTimeout(function(){var a=[da(e)[0],da(e)[1]],c=[h[0].offsetTop,h[0].offsetLeft],d=[c[0]+a[0]>=0&&c[0]+a[0]<i.height()-e.outerHeight(!1),c[1]+a[1]>=0&&c[0]+a[1]<i.width()-e.outerWidth(!1)],g="yx"!==f.axis||d[0]||d[1]?"all":"none";"x"===f.axis||d[0]||X(b,a[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:g,dur:j}),"y"===f.axis||d[1]||X(b,a[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:g,dur:j})},b[0]._focusTimer))})},O=function(){var b=a(this),c=b.data(e),d=e+"_"+c.idx,f=a("#mCSB_"+c.idx+"_container").parent();f.bind("scroll."+d,function(b){0===f.scrollTop()&&0===f.scrollLeft()||a(".mCSB_"+c.idx+"_scrollbar").css("visibility","hidden")})},P=function(){var b=a(this),c=b.data(e),d=c.opt,f=c.sequential,g=e+"_"+c.idx,h=".mCSB_"+c.idx+"_scrollbar",i=a(h+">a");i.bind("mousedown."+g+" touchstart."+g+" pointerdown."+g+" MSPointerDown."+g+" mouseup."+g+" touchend."+g+" pointerup."+g+" MSPointerUp."+g+" mouseout."+g+" pointerout."+g+" MSPointerOut."+g+" click."+g,function(e){function h(a,c){f.scrollAmount=d.snapAmount||d.scrollButtons.scrollAmount,R(b,a,c)}if(e.preventDefault(),aa(e)){var g=a(this).attr("class");switch(f.type=d.scrollButtons.scrollType,e.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===f.type)return;k=!0,c.tweenRunning=!1,h("on",g);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===f.type)return;k=!1,f.dir&&h("off",g);break;case"click":if("stepped"!==f.type||c.tweenRunning)return;h("on",g)}}})},Q=function(){var b=a(this),d=b.data(e),f=d.opt,g=d.sequential,h=e+"_"+d.idx,i=a("#mCSB_"+d.idx),j=a("#mCSB_"+d.idx+"_container"),k=j.parent(),l="input,textarea,select,datalist,keygen,[contenteditable='true']";i.attr("tabindex","0").bind("blur."+h+" keydown."+h+" keyup."+h,function(e){function p(a,c){g.type=f.keyboard.scrollType,g.scrollAmount=f.snapAmount||f.keyboard.scrollAmount,"stepped"===g.type&&d.tweenRunning||R(b,a,c)}switch(e.type){case"blur":d.tweenRunning&&g.dir&&p("off",null);break;case"keydown":case"keyup":var h=e.keyCode?e.keyCode:e.which,i="on";if("x"!==f.axis&&(38===h||40===h)||"y"!==f.axis&&(37===h||39===h)){if((38===h||40===h)&&!d.overflowed[0]||(37===h||39===h)&&!d.overflowed[1])return;"keyup"===e.type&&(i="off"),a(c.activeElement).is(l)||(e.preventDefault(),e.stopImmediatePropagation(),p(i,h))}else if(33===h||34===h){if((d.overflowed[0]||d.overflowed[1])&&(e.preventDefault(),e.stopImmediatePropagation()),"keyup"===e.type){W(b);var m=34===h?-1:1;if("x"===f.axis||"yx"===f.axis&&d.overflowed[1]&&!d.overflowed[0])var n="x",o=Math.abs(j[0].offsetLeft)-m*(.9*k.width());else var n="y",o=Math.abs(j[0].offsetTop)-m*(.9*k.height());X(b,o.toString(),{dir:n,scrollEasing:"mcsEaseInOut"})}}else if((35===h||36===h)&&!a(c.activeElement).is(l)&&((d.overflowed[0]||d.overflowed[1])&&(e.preventDefault(),e.stopImmediatePropagation()),"keyup"===e.type)){if("x"===f.axis||"yx"===f.axis&&d.overflowed[1]&&!d.overflowed[0])var n="x",o=35===h?Math.abs(k.width()-j.outerWidth(!1)):0;else var n="y",o=35===h?Math.abs(k.height()-j.outerHeight(!1)):0;X(b,o.toString(),{dir:n,scrollEasing:"mcsEaseInOut"})}}})},R=function(b,c,d,f,g){function p(a){var c="stepped"!==j.type,d=g?g:a?c?n/1.5:o:1e3/60,e=a?c?7.5:40:2.5,i=[Math.abs(k[0].offsetTop),Math.abs(k[0].offsetLeft)],l=[h.scrollRatio.y>10?10:h.scrollRatio.y,h.scrollRatio.x>10?10:h.scrollRatio.x],m="x"===j.dir[0]?i[1]+j.dir[1]*(l[1]*e):i[0]+j.dir[1]*(l[0]*e),q="x"===j.dir[0]?i[1]+j.dir[1]*parseInt(j.scrollAmount):i[0]+j.dir[1]*parseInt(j.scrollAmount),r="auto"!==j.scrollAmount?q:m,s=f?f:a?c?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",t=!!a;return a&&d<17&&(r="x"===j.dir[0]?i[1]:i[0]),X(b,r.toString(),{dir:j.dir[0],scrollEasing:s,dur:d,onComplete:t}),a?void(j.dir=!1):(clearTimeout(j.step),void(j.step=setTimeout(function(){p()},d)))}function q(){clearTimeout(j.step),_(j,"step"),W(b)}var h=b.data(e),i=h.opt,j=h.sequential,k=a("#mCSB_"+h.idx+"_container"),l="stepped"===j.type,n=i.scrollInertia<26?26:i.scrollInertia,o=i.scrollInertia<1?17:i.scrollInertia;switch(c){case"on":if(j.dir=[d===m[16]||d===m[15]||39===d||37===d?"x":"y",d===m[13]||d===m[15]||38===d||37===d?-1:1],W(b),ca(d)&&"stepped"===j.type)return;p(l);break;case"off":q(),(l||h.tweenRunning&&j.dir)&&p(!0)}},S=function(b){var c=a(this).data(e).opt,d=[];return"function"==typeof b&&(b=b()),b instanceof Array?d=b.length>1?[b[0],b[1]]:"x"===c.axis?[null,b[0]]:[b[0],null]:(d[0]=b.y?b.y:b.x||"x"===c.axis?null:b,d[1]=b.x?b.x:b.y||"y"===c.axis?null:b),"function"==typeof d[0]&&(d[0]=d[0]()),"function"==typeof d[1]&&(d[1]=d[1]()),d},T=function(b,c){if(null!=b&&"undefined"!=typeof b){var d=a(this),f=d.data(e),g=f.opt,h=a("#mCSB_"+f.idx+"_container"),i=h.parent(),j=typeof b;c||(c="x"===g.axis?"x":"y");var k="x"===c?h.outerWidth(!1):h.outerHeight(!1),l="x"===c?h[0].offsetLeft:h[0].offsetTop,m="x"===c?"left":"top";switch(j){case"function":return b();case"object":var o=b.jquery?b:a(b);if(!o.length)return;return"x"===c?da(o)[1]:da(o)[0];case"string":case"number":if(ca(b))return Math.abs(b);if(b.indexOf("%")!==-1)return Math.abs(k*parseInt(b)/100);if(b.indexOf("-=")!==-1)return Math.abs(l-parseInt(b.split("-=")[1]));if(b.indexOf("+=")!==-1){var p=l+parseInt(b.split("+=")[1]);return p>=0?0:Math.abs(p)}if(b.indexOf("px")!==-1&&ca(b.split("px")[0]))return Math.abs(b.split("px")[0]);if("top"===b||"left"===b)return 0;if("bottom"===b)return Math.abs(i.height()-h.outerHeight(!1));if("right"===b)return Math.abs(i.width()-h.outerWidth(!1));if("first"===b||"last"===b){var o=h.find(":"+b);return"x"===c?da(o)[1]:da(o)[0]}return a(b).length?"x"===c?da(a(b))[1]:da(a(b))[0]:(h.css(m,b),void n.update.call(null,d[0]))}}},U=function(b){function s(){clearTimeout(g[0].autoUpdate),g[0].autoUpdate=setTimeout(function(){return f.advanced.updateOnSelectorChange&&(l=v(),l!==k)?(w(3),void(k=l)):(f.advanced.updateOnContentResize&&(p=[g.outerHeight(!1),g.outerWidth(!1),h.height(),h.width(),j()[0],j()[1]],p[0]===o[0]&&p[1]===o[1]&&p[2]===o[2]&&p[3]===o[3]&&p[4]===o[4]&&p[5]===o[5]||(w(p[0]!==o[0]||p[1]!==o[1]),o=p)),f.advanced.updateOnImageLoad&&(r=t(),r!==q&&(g.find("img").each(function(){u(this)}),q=r)),void((f.advanced.updateOnSelectorChange||f.advanced.updateOnContentResize||f.advanced.updateOnImageLoad)&&s()))},60)}function t(){var a=0;return f.advanced.updateOnImageLoad&&(a=g.find("img").length),a}function u(b){function d(a,b){return function(){return b.apply(a,arguments)}}function e(){this.onload=null,a(b).addClass(m[2]),w(2)}if(a(b).hasClass(m[2]))return void w();var c=new Image;c.onload=d(c,e),c.src=b.src}function v(){f.advanced.updateOnSelectorChange===!0&&(f.advanced.updateOnSelectorChange="*");var b=0,c=g.find(f.advanced.updateOnSelectorChange);return f.advanced.updateOnSelectorChange&&c.length>0&&c.each(function(){b+=a(this).height()+a(this).width()}),b}function w(a){clearTimeout(g[0].autoUpdate),n.update.call(null,c[0],a)}var c=a(this),d=c.data(e),f=d.opt,g=a("#mCSB_"+d.idx+"_container");if(b)return clearTimeout(g[0].autoUpdate),void _(g[0],"autoUpdate");var l,p,r,h=g.parent(),i=[a("#mCSB_"+d.idx+"_scrollbar_vertical"),a("#mCSB_"+d.idx+"_scrollbar_horizontal")],j=function(){return[i[0].is(":visible")?i[0].outerHeight(!0):0,i[1].is(":visible")?i[1].outerWidth(!0):0]},k=v(),o=[g.outerHeight(!1),g.outerWidth(!1),h.height(),h.width(),j()[0],j()[1]],q=t();s()},V=function(a,b,c){return Math.round(a/b)*b-c},W=function(b){var c=b.data(e),d=a("#mCSB_"+c.idx+"_container,#mCSB_"+c.idx+"_container_wrapper,#mCSB_"+c.idx+"_dragger_vertical,#mCSB_"+c.idx+"_dragger_horizontal");d.each(function(){$.call(this)})},X=function(b,c,d){function x(a){return f&&g.callbacks[a]&&"function"==typeof g.callbacks[a]}function y(){return[g.callbacks.alwaysTriggerOffsets||q>=r[0]+t,g.callbacks.alwaysTriggerOffsets||q<=-u]}function z(){var a=[k[0].offsetTop,k[0].offsetLeft],c=[o[0].offsetTop,o[0].offsetLeft],e=[k.outerHeight(!1),k.outerWidth(!1)],f=[j.height(),j.width()];b[0].mcs={content:k,top:a[0],left:a[1],draggerTop:c[0],draggerLeft:c[1],topPct:Math.round(100*Math.abs(a[0])/(Math.abs(e[0])-f[0])),leftPct:Math.round(100*Math.abs(a[1])/(Math.abs(e[1])-f[1])),direction:d.dir}}var f=b.data(e),g=f.opt,h={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:g.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},d=a.extend(h,d),i=[d.dur,d.drag?0:d.dur],j=a("#mCSB_"+f.idx),k=a("#mCSB_"+f.idx+"_container"),l=k.parent(),m=g.callbacks.onTotalScrollOffset?S.call(b,g.callbacks.onTotalScrollOffset):[0,0],n=g.callbacks.onTotalScrollBackOffset?S.call(b,g.callbacks.onTotalScrollBackOffset):[0,0];if(f.trigger=d.trigger,0===l.scrollTop()&&0===l.scrollLeft()||(a(".mCSB_"+f.idx+"_scrollbar").css("visibility","visible"),l.scrollTop(0).scrollLeft(0)),"_resetY"!==c||f.contentReset.y||(x("onOverflowYNone")&&g.callbacks.onOverflowYNone.call(b[0]),f.contentReset.y=1),"_resetX"!==c||f.contentReset.x||(x("onOverflowXNone")&&g.callbacks.onOverflowXNone.call(b[0]),f.contentReset.x=1),"_resetY"!==c&&"_resetX"!==c){switch(!f.contentReset.y&&b[0].mcs||!f.overflowed[0]||(x("onOverflowY")&&g.callbacks.onOverflowY.call(b[0]),f.contentReset.x=null),!f.contentReset.x&&b[0].mcs||!f.overflowed[1]||(x("onOverflowX")&&g.callbacks.onOverflowX.call(b[0]),f.contentReset.x=null),g.snapAmount&&(c=V(c,g.snapAmount,g.snapOffset)),d.dir){case"x":var o=a("#mCSB_"+f.idx+"_dragger_horizontal"),p="left",q=k[0].offsetLeft,r=[j.width()-k.outerWidth(!1),o.parent().width()-o.width()],s=[c,0===c?0:c/f.scrollRatio.x],t=m[1],u=n[1],v=t>0?t/f.scrollRatio.x:0,w=u>0?u/f.scrollRatio.x:0;
break;case"y":var o=a("#mCSB_"+f.idx+"_dragger_vertical"),p="top",q=k[0].offsetTop,r=[j.height()-k.outerHeight(!1),o.parent().height()-o.height()],s=[c,0===c?0:c/f.scrollRatio.y],t=m[0],u=n[0],v=t>0?t/f.scrollRatio.y:0,w=u>0?u/f.scrollRatio.y:0}s[1]<0||0===s[0]&&0===s[1]?s=[0,0]:s[1]>=r[1]?s=[r[0],r[1]]:s[0]=-s[0],b[0].mcs||(z(),x("onInit")&&g.callbacks.onInit.call(b[0])),clearTimeout(k[0].onCompleteTimeout),!f.tweenRunning&&(0===q&&s[0]>=0||q===r[0]&&s[0]<=r[0])||(Y(o[0],p,Math.round(s[1]),i[1],d.scrollEasing),Y(k[0],p,Math.round(s[0]),i[0],d.scrollEasing,d.overwrite,{onStart:function(){d.callbacks&&d.onStart&&!f.tweenRunning&&(x("onScrollStart")&&(z(),g.callbacks.onScrollStart.call(b[0])),f.tweenRunning=!0,A(o),f.cbOffsets=y())},onUpdate:function(){d.callbacks&&d.onUpdate&&x("whileScrolling")&&(z(),g.callbacks.whileScrolling.call(b[0]))},onComplete:function(){if(d.callbacks&&d.onComplete){"yx"===g.axis&&clearTimeout(k[0].onCompleteTimeout);var a=k[0].idleTimer||0;k[0].onCompleteTimeout=setTimeout(function(){x("onScroll")&&(z(),g.callbacks.onScroll.call(b[0])),x("onTotalScroll")&&s[1]>=r[1]-v&&f.cbOffsets[0]&&(z(),g.callbacks.onTotalScroll.call(b[0])),x("onTotalScrollBack")&&s[1]<=w&&f.cbOffsets[1]&&(z(),g.callbacks.onTotalScrollBack.call(b[0])),f.tweenRunning=!1,k[0].idleTimer=0,A(o,"hide")},a)}}}))}},Y=function(a,c,d,e,f,g,h){function t(){r.stop||(n||i.call(),n=Z()-l,u(),n>=r.time&&(r.time=n>r.time?n+m-(n-r.time):n+m-1,r.time<n+1&&(r.time=n+1)),r.time<e?r.id=q(t):k.call())}function u(){e>0?(r.currVal=x(r.time,o,s,e,f),p[c]=Math.round(r.currVal)+"px"):p[c]=d+"px",j.call()}function v(){m=1e3/60,r.time=n+m,q=b.requestAnimationFrame?b.requestAnimationFrame:function(a){return u(),setTimeout(a,.01)},r.id=q(t)}function w(){null!=r.id&&(b.requestAnimationFrame?b.cancelAnimationFrame(r.id):clearTimeout(r.id),r.id=null)}function x(a,b,c,d,e){switch(e){case"linear":case"mcsLinear":return c*a/d+b;case"mcsLinearOut":return a/=d,a--,c*Math.sqrt(1-a*a)+b;case"easeInOutSmooth":return a/=d/2,a<1?c/2*a*a+b:(a--,-c/2*(a*(a-2)-1)+b);case"easeInOutStrong":return a/=d/2,a<1?c/2*Math.pow(2,10*(a-1))+b:(a--,c/2*(-Math.pow(2,-10*a)+2)+b);case"easeInOut":case"mcsEaseInOut":return a/=d/2,a<1?c/2*a*a*a+b:(a-=2,c/2*(a*a*a+2)+b);case"easeOutSmooth":return a/=d,a--,-c*(a*a*a*a-1)+b;case"easeOutStrong":return c*(-Math.pow(2,-10*a/d)+1)+b;case"easeOut":case"mcsEaseOut":default:var f=(a/=d)*a,g=f*a;return b+c*(.499999999999997*g*f+-2.5*f*f+5.5*g+-6.5*f+4*a)}}a._mTween||(a._mTween={top:{},left:{}});var m,q,h=h||{},i=h.onStart||function(){},j=h.onUpdate||function(){},k=h.onComplete||function(){},l=Z(),n=0,o=a.offsetTop,p=a.style,r=a._mTween[c];"left"===c&&(o=a.offsetLeft);var s=d-o;r.stop=0,"none"!==g&&w(),v()},Z=function(){return b.performance&&b.performance.now?b.performance.now():b.performance&&b.performance.webkitNow?b.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},$=function(){var a=this;a._mTween||(a._mTween={top:{},left:{}});for(var c=["top","left"],d=0;d<c.length;d++){var e=c[d];a._mTween[e].id&&(b.requestAnimationFrame?b.cancelAnimationFrame(a._mTween[e].id):clearTimeout(a._mTween[e].id),a._mTween[e].id=null,a._mTween[e].stop=1)}},_=function(a,b){try{delete a[b]}catch(c){a[b]=null}},aa=function(a){return!(a.which&&1!==a.which)},ba=function(a){var b=a.originalEvent.pointerType;return!(b&&"touch"!==b&&2!==b)},ca=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},da=function(a){var b=a.parents(".mCSB_container");return[a.offset().top-b.offset().top,a.offset().left-b.offset().left]};a.fn[d]=function(b){return n[b]?n[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist"):n.init.apply(this,arguments)},a[d]=function(b){return n[b]?n[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist"):n.init.apply(this,arguments)},a[d].defaults=g,b[d]=!0,a(b).load(function(){a(f)[d](),a.extend(a.expr[":"],{mcsInView:a.expr[":"].mcsInView||function(b){var e,f,c=a(b),d=c.parents(".mCSB_container");if(d.length)return e=d.parent(),f=[d[0].offsetTop,d[0].offsetLeft],f[0]+da(c)[0]>=0&&f[0]+da(c)[0]<e.height()-c.outerHeight(!1)&&f[1]+da(c)[1]>=0&&f[1]+da(c)[1]<e.width()-c.outerWidth(!1)},mcsOverflow:a.expr[":"].mcsOverflow||function(b){var c=a(b).data(e);if(c)return c.overflowed[0]||c.overflowed[1]}})})})}(jQuery,window,document);