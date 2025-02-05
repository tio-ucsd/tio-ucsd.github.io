/*!
 * (c) @ajlkn
 * 
 * util.js is used on all .html pages of the TIO website.
 *
 * VSCode Dev Note: 
 * Shift+Option+F (Mac) or Shift+Alt+F (Windows) to format code for readability.
 * When done editing, please minify code again to reduce file size!
 */
(function ($) {
  /*!
   * Generate an indented list of links from a nav. Meant for use with panel().
   * @return {jQuery} jQuery object.
   */
  $.fn.navList=function(){var t=$(this);return $a=t.find("a"),b=[],$a.each((function(){var t=$(this),a=Math.max(0,t.parents("li").length-1),n=t.attr("href"),i=t.attr("target");b.push('<a class="link depth-'+a+'"'+(void 0!==i&&""!=i?' target="'+i+'"':"")+(void 0!==n&&""!=n?' href="'+n+'"':"")+'><span class="indent-'+a+'"></span>'+t.text()+"</a>")})),b.join("")};

  /*!
   * Panel-ify an element.
   * @param {object} userConfig User config.
   * @return {jQuery} jQuery object.
   */
  $.fn.panel=function(t){if(0==this.length)return i;if(this.length>1){for(var e=0;e<this.length;e++)$(this[e]).panel(t);return i}var o,i=$(this),n=$("body"),s=$(window),a=i.attr("id");return"jQuery"!=typeof(o=$.extend({delay:0,hideOnClick:!1,hideOnEscape:!1,hideOnSwipe:!1,resetScroll:!1,resetForms:!1,side:null,target:i,visibleClass:"visible"},t)).target&&(o.target=$(o.target)),i._hide=function(t){o.target.hasClass(o.visibleClass)&&(t&&(t.preventDefault(),t.stopPropagation()),o.target.removeClass(o.visibleClass),window.setTimeout((function(){o.resetScroll&&i.scrollTop(0),o.resetForms&&i.find("form").each((function(){this.reset()}))}),o.delay))},i.css("-ms-overflow-style","-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling","touch"),o.hideOnClick&&(i.find("a").css("-webkit-tap-highlight-color","rgba(0,0,0,0)"),i.on("click","a",(function(t){var e=$(this),n=e.attr("href"),s=e.attr("target");n&&"#"!=n&&""!=n&&n!="#"+a&&(t.preventDefault(),t.stopPropagation(),i._hide(),window.setTimeout((function(){"_blank"==s?window.open(n):window.location.href=n}),o.delay+10))}))),i.on("touchstart",(function(t){i.touchPosX=t.originalEvent.touches[0].pageX,i.touchPosY=t.originalEvent.touches[0].pageY})),i.on("touchmove",(function(t){if(null!==i.touchPosX&&null!==i.touchPosY){var e=i.touchPosX-t.originalEvent.touches[0].pageX,n=i.touchPosY-t.originalEvent.touches[0].pageY,s=i.outerHeight(),a=i.get(0).scrollHeight-i.scrollTop();if(o.hideOnSwipe){var r=!1,l=20;switch(o.side){case"left":r=n<l&&n>-20&&e>50;break;case"right":r=n<l&&n>-20&&e<-50;break;case"top":r=e<l&&e>-20&&n>50;break;case"bottom":r=e<l&&e>-20&&n<-50;break;default:break}if(r)return i.touchPosX=null,i.touchPosY=null,i._hide(),!1}(i.scrollTop()<0&&n<0||a>s-2&&a<s+2&&n>0)&&(t.preventDefault(),t.stopPropagation())}})),i.on("click touchend touchstart touchmove",(function(t){t.stopPropagation()})),i.on("click",'a[href="#'+a+'"]',(function(t){t.preventDefault(),t.stopPropagation(),o.target.removeClass(o.visibleClass)})),n.on("click touchend",(function(t){i._hide(t)})),n.on("click",'a[href="#'+a+'"]',(function(t){t.preventDefault(),t.stopPropagation(),o.target.toggleClass(o.visibleClass)})),o.hideOnEscape&&s.on("keydown",(function(t){27==t.keyCode&&i._hide(t)})),i};

  /*!
   * Apply "placeholder" attribute polyfill to one or more forms.
   * @return {jQuery} jQuery object.
   */
  $.fn.placeholder=function(){if(void 0!==document.createElement("input").placeholder)return $(this);if(0==this.length)return a;if(this.length>1){for(var e=0;e<this.length;e++)$(this[e]).placeholder();return a}var a=$(this);return a.find("input[type=text],textarea").each((function(){var e=$(this);""!=e.val()&&e.val()!=e.attr("placeholder")||e.addClass("polyfill-placeholder").val(e.attr("placeholder"))})).on("blur",(function(){var e=$(this);e.attr("name").match(/-polyfill-field$/)||""==e.val()&&e.addClass("polyfill-placeholder").val(e.attr("placeholder"))})).on("focus",(function(){var e=$(this);e.attr("name").match(/-polyfill-field$/)||e.val()==e.attr("placeholder")&&e.removeClass("polyfill-placeholder").val("")})),a.find("input[type=password]").each((function(){var e=$(this),a=$($("<div>").append(e.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,"type=text"));""!=e.attr("id")&&a.attr("id",e.attr("id")+"-polyfill-field"),""!=e.attr("name")&&a.attr("name",e.attr("name")+"-polyfill-field"),a.addClass("polyfill-placeholder").val(a.attr("placeholder")).insertAfter(e),""==e.val()?e.hide():a.hide(),e.on("blur",(function(a){a.preventDefault();var t=e.parent().find("input[name="+e.attr("name")+"-polyfill-field]");""==e.val()&&(e.hide(),t.show())})),a.on("focus",(function(e){e.preventDefault();var t=a.parent().find("input[name="+a.attr("name").replace("-polyfill-field","")+"]");a.hide(),t.show().focus()})).on("keypress",(function(e){e.preventDefault(),a.val("")}))})),a.on("submit",(function(){a.find("input[type=text],input[type=password],textarea").each((function(e){var a=$(this);a.attr("name").match(/-polyfill-field$/)&&a.attr("name",""),a.val()==a.attr("placeholder")&&(a.removeClass("polyfill-placeholder"),a.val(""))}))})).on("reset",(function(e){e.preventDefault(),a.find("select").val($("option:first").val()),a.find("input,textarea").each((function(){var e,a=$(this);switch(a.removeClass("polyfill-placeholder"),this.type){case"submit":case"reset":break;case"password":a.val(a.attr("defaultValue")),e=a.parent().find("input[name="+a.attr("name")+"-polyfill-field]"),""==a.val()?(a.hide(),e.show()):(a.show(),e.hide());break;case"checkbox":case"radio":a.attr("checked",a.attr("defaultValue"));break;case"text":case"textarea":a.val(a.attr("defaultValue")),""==a.val()&&(a.addClass("polyfill-placeholder"),a.val(a.attr("placeholder")));break;default:a.val(a.attr("defaultValue"));break}}))})),a};

  /*!
   * Moves elements to/from the first positions of their respective parents.
   * @param {jQuery} $elements Elements (or selector) to move.
   * @param {bool} condition If true, moves elements to the top. Otherwise, moves elements back to their original locations.
   */
  $.prioritize=function(e,r){var t="__prioritize";"jQuery"!=typeof e&&(e=$(e)),e.each((function(){var e,i=$(this),a=i.parent();if(0!=a.length)if(i.data(t)){if(r)return;e=i.data(t),i.insertAfter(e),i.removeData(t)}else{if(!r)return;if(0==(e=i.prev()).length)return;i.prependTo(a),i.data(t,e)}}))};
})(jQuery);
