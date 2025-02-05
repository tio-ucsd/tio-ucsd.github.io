/*!
 * (c) @ajlkn
 *
 * carousel.js is used for the carousel of videos on /index.html
 *
 * VSCode Dev Note:
 * Shift+Option+F (Mac) or Shift+Alt+F (Windows) to format code for readability.
 * When done editing, please minify code again to reduce file size!
 */
!function(e){var n=e(window),o=(e("body"),{speed:4,fadeIn:!0,fadeDelay:250});e(".carousel").each((function(){var a,t,l,i,r=e(this),s=e('<span class="forward"></span>'),d=e('<span class="backward"></span>'),c=r.children(".reel"),f=c.children("article"),u=0;o.fadeIn&&(f.addClass("loading"),r.scrollex({mode:"middle",top:"-20vh",bottom:"-20vh",enter:function(){var e,a=f.length-Math.ceil(n.width()/void 0);e=window.setInterval((function(){var n=f.filter(".loading"),o=n.first();if(n.length<=a)return window.clearInterval(e),void f.removeClass("loading");o.removeClass("loading")}),o.fadeDelay)}})),r._update=function(){u=0,t=-1*l+n.width(),a=0,r._updatePos()},r._updatePos=function(){c.css("transform","translate("+u+"px, 0)")},s.appendTo(r).hide().mouseenter((function(e){i=window.setInterval((function(){(u-=o.speed)<=t&&(window.clearInterval(i),u=t),r._updatePos()}),10)})).mouseleave((function(e){window.clearInterval(i)})),d.appendTo(r).hide().mouseenter((function(e){i=window.setInterval((function(){(u+=o.speed)>=a&&(window.clearInterval(i),u=a),r._updatePos()}),10)})).mouseleave((function(e){window.clearInterval(i)})),n.on("load",(function(){l=c[0].scrollWidth,browser.mobile?(c.css("overflow-y","hidden").css("overflow-x","scroll").scrollLeft(0),s.hide(),d.hide()):(c.css("overflow","visible").scrollLeft(0),s.show(),d.show()),r._update(),n.on("resize",(function(){l=c[0].scrollWidth,r._update()})).trigger("resize")}))}))}(jQuery);