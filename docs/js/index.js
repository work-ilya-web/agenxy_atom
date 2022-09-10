"use strict";if($(".all-access").length>0)var swiper=new Swiper(".all-access-nft__swiper",{slidesPerView:4,spaceBetween:91,slidesPerGroup:1,loop:!1,loopFillGroupWithBlank:!1,speed:1e3,iOSEdgeSwipeDetection:!0,breakpoints:{370:{slidesPerView:1.4,spaceBetween:16,slidesPerGroup:1},680:{slidesPerView:2.2,spaceBetween:24,slidesPerGroup:1},760:{slidesPerView:3,spaceBetween:24,slidesPerGroup:1},1010:{slidesPerView:3,slidesPerGroup:1},1320:{slidesPerView:4,slidesPerGroup:1,spaceBetween:91}},scrollbar:{el:".swiper-scrollbar",draggable:!0,hide:!1,dragSize:115,snapOnRelease:!1}});$("body").on("click",".list-view",(function(e){e.preventDefault(),$(this).toggleClass("active"),$(".cases-grid__body").toggleClass("active"),$(".cases-grid__list").toggleClass("active")})),$(".footer__link").on("click",(function(){var e=$(this).attr("href"),t=$(e).offset().top;return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:t},600),!1})),gsap.to("*",{duration:.1});var modalVideo,blockHover=document.querySelector(".hoverBlock"),MenuHover=document.querySelector(".hoverMenu");if(blockHover){var clientX=-100,clientY=-100,index=0,videos=document.querySelectorAll(".image"),render=function e(){videos.forEach((function(e){TweenMax.to(e,{duration:.1,x:clientX,y:clientY})})),requestAnimationFrame(e)};blockHover.addEventListener("mousemove",(function(e){clientX=e.clientX,clientY=e.clientY;var t=e.target.closest(".hoverBlock__item");if(render(),t){var s=t.dataset.index;videos[index=s].classList.add("active"),videos[index].style.position="fixed"}})),blockHover.addEventListener("mouseout",(function(e){clientX=e.clientX,clientY=e.clientY;var t=e.target.closest(".hoverBlock__item");if(t){var s=t.dataset.index;videos[index=s].classList.remove("active"),videos[index].style.position="absolute"}}))}if(MenuHover){var _clientX=-100,_clientY=-100,menu=0,images=document.querySelectorAll(".image-menu"),renderMenu=function e(){images.forEach((function(e){TweenMax.to(e,{duration:.1,x:_clientX,y:_clientY})})),requestAnimationFrame(e)};MenuHover.addEventListener("mousemove",(function(e){_clientX=e.clientX,_clientY=e.clientY;var t=e.target.closest(".hoverMenu__item");if(renderMenu(),t){var s=t.dataset.menu;images[menu=s].classList.add("active"),images[menu].style.position="fixed"}})),MenuHover.addEventListener("mouseout",(function(e){_clientX=e.clientX,_clientY=e.clientY;var t=e.target.closest(".hoverMenu__item");if(t){var s=t.dataset.menu;images[menu=s].classList.remove("active"),images[menu].style.position="absolute"}}))}function _defineProperty(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}if($(".main-services").length>0){var _breakpoints;swiper=new Swiper(".main-services__row",{slidesPerView:3,slidesPerGroup:1,spaceBetween:24,loop:!1,loopFillGroupWithBlank:!1,speed:1e3,iOSEdgeSwipeDetection:!0,breakpoints:(_breakpoints={200:{slidesPerView:1,spaceBetween:20,slidesPerGroup:1},370:{slidesPerView:1.1,spaceBetween:20,slidesPerGroup:1},680:{slidesPerView:1.8,spaceBetween:20,slidesPerGroup:1},760:{slidesPerView:2,spaceBetween:24,slidesPerGroup:1},1010:{slidesPerView:2,slidesPerGroup:1}},_defineProperty(_breakpoints,"1010",{slidesPerView:2.4,slidesPerGroup:1}),_defineProperty(_breakpoints,1320,{slidesPerView:3,slidesPerGroup:1,spaceBetween:24}),_breakpoints),scrollbar:{el:".swiper-scrollbar",draggable:!0,hide:!1,dragSize:115,snapOnRelease:!1}})}if($("body").on("click",".burger--js:not(.open)",(function(){$(this).addClass("open lock"),$("body").addClass("lock"),$(".header, .menu").addClass("visible"),$(".menu__bg").addClass("visible"),setTimeout((function(){$(".menu__logo").addClass("visible")}),500),setTimeout((function(){$(".menu__list").addClass("visible")}),1e3),setTimeout((function(){$(".menu__list").addClass("open"),$(".menu__list").removeClass("visible")}),2300),setTimeout((function(){$(".burger--js").removeClass("lock")}),2500)})),$("body").on("click",".burger--js.open:not(.lock)",(function(){$(".menu__list").addClass("hidden"),setTimeout((function(){$(".menu__logo").removeClass("visible")}),500),setTimeout((function(){$(".menu__bg").removeClass("visible"),$(".menu__list").removeClass("hidden open")}),1e3),setTimeout((function(){$(".header, .menu").removeClass("visible"),$(".burger--js.open").removeClass("open"),$("body").removeClass("lock")}),1500)})),function(){if(document.querySelector(".video-modal")){var e=document.querySelector(".video-modal"),t=document.querySelector(".modal-cursor"),s=e.offsetWidth/2-t.offsetWidth/2,n=e.offsetHeight/2-t.offsetHeight/2;gsap.set(t,{x:s,y:n,duration:.3}),e.addEventListener("mousemove",(function(s){var n=e.getBoundingClientRect(),o=s.clientX-n.left,i=s.clientY-n.top,r=e.offsetWidth-t.offsetWidth/2,a=e.offsetHeight-t.offsetHeight/2;o<0&&(o=0),o>r&&(o=r),i<0&&(i=0),i>a&&(i=a),gsap.to(t,{x:o,y:i,duration:.3})})),e.addEventListener("mouseleave",(function(s){var n=e.offsetWidth/2-t.offsetWidth/2,o=e.offsetHeight/2-t.offsetHeight/2;gsap.to(t,{x:n,y:o,duration:.3})}))}}(),$(document).ready((function(){modalVideo=document.getElementById("video-modal")})),$("body").on("click",".video-modal-controls",(function(){$(".video-modal__preview").addClass("hidden"),modalVideo.play(),$(".video-modal-controls").addClass("visible")})),$("body").on("click",".video-modal__preview",(function(){$(".video-modal__preview").addClass("hidden"),modalVideo.play(),$(".video-modal-box").addClass("play"),$(".video-modal-box").removeClass("step"),$(".modal-cursor").addClass("cursor--active")})),$("body").on("click",".video-modal-box",(function(){$(".video-modal-box").hasClass("play")?($(".video-modal-box").removeClass("play"),$(".video-modal-box").addClass("step"),$(".video-modal-controls").removeClass("visible"),$(".modal-cursor").removeClass("cursor--active").addClass("cursor--hidden"),modalVideo.pause()):($(".video-modal-box").addClass("play"),$(".video-modal-box").removeClass("step"),$(".modal-cursor").addClass("cursor--active"),modalVideo.play())})),$("body").on("click",".play--js",(function(){$(".video-modal-box").addClass("play"),$(".video-modal-box").removeClass("step"),$(".video-modal-controls").removeClass("visible"),$(".modal-cursor").removeClass("cursor--hidden").addClass("cursor--active"),modalVideo.play()})),$("body").on("click",".skip--js",(function(){$(".modal-video-window").addClass("hidden"),modalVideo.pause(),$("#video-modal").remove(),$(".video-modal__preview").removeClass("hidden"),setTimeout((function(){$(".modal-video-window").remove()}),320)})),$("body").on("click",".modal--js",(function(e){e.preventDefault(),$("body").addClass("lock"),$(".modal, .modal__bg, .modal__closed").addClass("visible"),setTimeout((function(){$(".modal__content").addClass("visible")}),300)})),$("body").on("click",".closed--js",(function(e){e.preventDefault(),$(".modal__content").removeClass("visible"),setTimeout((function(){$("body").removeClass("lock"),$(".modal, .modal__bg, .modal__closed").removeClass("visible")}),300)})),$(".form-select").click((function(e){$(this).hasClass("disabled")||($(".form-select").not(this).removeClass("active").find(".form-select-options").slideUp(50),$(this).toggleClass("active"),$(this).find(".form-select-options").slideToggle(50))})),$(".form-select-options__value").click((function(){$(this).parents(".form-select").find(".form-select-title__value").html($(this).html()),""!=$.trim($(this).data("value"))?$(this).parents(".form-select").find("input").val($(this).data("value")):$(this).parents(".form-select").find("input").val($(this).html())})),$(document).click((function(e){$(e.target).is(".form-select *")||($(".form-select").removeClass("active"),$(".form-select-options").slideUp(50))})),$(".music-signature").length>0)swiper=new Swiper(".music-signature__swiper",{slidesPerView:4,spaceBetween:24,slidesPerGroup:1,loop:!1,loopFillGroupWithBlank:!1,speed:1e3,iOSEdgeSwipeDetection:!0,breakpoints:{200:{slidesPerView:1,spaceBetween:16,slidesPerGroup:1},370:{slidesPerView:1.35,spaceBetween:16,slidesPerGroup:1},760:{slidesPerView:2.2,spaceBetween:24,slidesPerGroup:1},1010:{slidesPerView:3,slidesPerGroup:1},1320:{slidesPerView:4,slidesPerGroup:1}}}),swiper=new Swiper(".music-about__swiper",{slidesPerView:4,spaceBetween:24,slidesPerGroup:1,loop:!1,loopFillGroupWithBlank:!1,speed:1e3,iOSEdgeSwipeDetection:!0,breakpoints:{200:{slidesPerView:1,spaceBetween:16,slidesPerGroup:1},370:{slidesPerView:1.085,spaceBetween:16,slidesPerGroup:1},760:{slidesPerView:2.2,spaceBetween:24,slidesPerGroup:1},1010:{slidesPerView:3,slidesPerGroup:1},1320:{slidesPerView:4,slidesPerGroup:1}}});function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}(function(){var e,t,s,n,o,i,r,a,l,c,u,d,p,f,h,m,v,g,y,w,b,$,_,C,k,P,S,x,T,q,L,V,G,B,E,j,H,M,R,W,O,X,A,F,U,Y,D,N,I=[].slice,z={}.hasOwnProperty,Q=function(e,t){for(var s in t)z.call(t,s)&&(e[s]=t[s]);function n(){this.constructor=e}return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e},J=[].indexOf||function(e){for(var t=0,s=this.length;t<s;t++)if(t in this&&this[t]===e)return t;return-1};for(b={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},T=function(){var e;return null!=(e="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?e:+new Date},L=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,w=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==L&&(L=function(e){return setTimeout(e,50)},w=function(e){return clearTimeout(e)}),G=function(e){var t,s;return t=T(),(s=function(){var n;return(n=T()-t)>=33?(t=T(),e(n,(function(){return L(s)}))):setTimeout(s,33-n)})()},V=function(){var e,t,s;return s=arguments[0],t=arguments[1],e=3<=arguments.length?I.call(arguments,2):[],"function"==typeof s[t]?s[t].apply(s,e):s[t]},$=function(){var e,t,s,n,o,i,r;for(t=arguments[0],i=0,r=(n=2<=arguments.length?I.call(arguments,1):[]).length;i<r;i++)if(s=n[i])for(e in s)z.call(s,e)&&(o=s[e],null!=t[e]&&"object"===_typeof(t[e])&&null!=o&&"object"===_typeof(o)?$(t[e],o):t[e]=o);return t},v=function(e){var t,s,n,o,i;for(s=t=0,o=0,i=e.length;o<i;o++)n=e[o],s+=Math.abs(n),t++;return s/t},C=function(e,t){var s,n,o;if(null==e&&(e="options"),null==t&&(t=!0),o=document.querySelector("[data-pace-"+e+"]")){if(s=o.getAttribute("data-pace-"+e),!t)return s;try{return JSON.parse(s)}catch(e){return n=e,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",n):void 0}}},r=function(){function e(){}return e.prototype.on=function(e,t,s,n){var o;return null==n&&(n=!1),null==this.bindings&&(this.bindings={}),null==(o=this.bindings)[e]&&(o[e]=[]),this.bindings[e].push({handler:t,ctx:s,once:n})},e.prototype.once=function(e,t,s){return this.on(e,t,s,!0)},e.prototype.off=function(e,t){var s,n,o;if(null!=(null!=(n=this.bindings)?n[e]:void 0)){if(null==t)return delete this.bindings[e];for(s=0,o=[];s<this.bindings[e].length;)this.bindings[e][s].handler===t?o.push(this.bindings[e].splice(s,1)):o.push(s++);return o}},e.prototype.trigger=function(){var e,t,s,n,o,i,r,a,l;if(s=arguments[0],e=2<=arguments.length?I.call(arguments,1):[],null!=(r=this.bindings)?r[s]:void 0){for(o=0,l=[];o<this.bindings[s].length;)n=(a=this.bindings[s][o]).handler,t=a.ctx,i=a.once,n.apply(null!=t?t:this,e),i?l.push(this.bindings[s].splice(o,1)):l.push(o++);return l}},e}(),c=window.Pace||{},window.Pace=c,$(c,r.prototype),q=c.options=$({},b,window.paceOptions,C()),A=0,U=(D=["ajax","document","eventLag","elements"]).length;A<U;A++)!0===q[H=D[A]]&&(q[H]=b[H]);l=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return Q(t,e),t}(Error),t=function(){function e(){this.progress=0}return e.prototype.getElement=function(){var e;if(null==this.el){if(!(e=document.querySelector(q.target)))throw new l;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=e.firstChild?e.insertBefore(this.el,e.firstChild):e.appendChild(this.el)}return this.el},e.prototype.finish=function(){var e;return(e=this.getElement()).className=e.className.replace("pace-active",""),e.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},e.prototype.update=function(e){return this.progress=e,this.render()},e.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(e){l=e}return this.el=void 0},e.prototype.render=function(){var e,t,s,n,o,i,r;if(null==document.querySelector(q.target))return!1;for(e=this.getElement(),n="translate3d("+this.progress+"%, 0, 0)",o=0,i=(r=["webkitTransform","msTransform","transform"]).length;o<i;o++)t=r[o],e.children[0].style[t]=n;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(e.children[0].setAttribute("data-progress-text",(0|this.progress)+"%"),this.progress>=100?s="99":(s=this.progress<10?"0":"",s+=0|this.progress),c.trigger("update",this.progress),e.children[0].setAttribute("data-progress",""+s)),this.lastRenderedProgress=this.progress},e.prototype.done=function(){return this.progress>=100},e}(),a=function(){function e(){this.bindings={}}return e.prototype.trigger=function(e,t){var s,n,o,i,r;if(null!=this.bindings[e]){for(r=[],n=0,o=(i=this.bindings[e]).length;n<o;n++)s=i[n],r.push(s.call(this,t));return r}},e.prototype.on=function(e,t){var s;return null==(s=this.bindings)[e]&&(s[e]=[]),this.bindings[e].push(t)},e}(),X=window.XMLHttpRequest,O=window.XDomainRequest,W=window.WebSocket,_=function(e,t){var s,n;for(s in n=[],t.prototype)try{null==e[s]&&"function"!=typeof t[s]?"function"==typeof Object.defineProperty?n.push(Object.defineProperty(e,s,{get:function(){return t.prototype[s]},configurable:!0,enumerable:!0})):n.push(e[s]=t.prototype[s]):n.push(void 0)}catch(e){e}return n},S=[],c.ignore=function(){var e,t,s;return t=arguments[0],e=2<=arguments.length?I.call(arguments,1):[],S.unshift("ignore"),s=t.apply(null,e),S.shift(),s},c.track=function(){var e,t,s;return t=arguments[0],e=2<=arguments.length?I.call(arguments,1):[],S.unshift("track"),s=t.apply(null,e),S.shift(),s},j=function(e){var t;if(null==e&&(e="GET"),"track"===S[0])return"force";if(!S.length&&q.ajax){if("socket"===e&&q.ajax.trackWebSockets)return!0;if(t=e.toUpperCase(),J.call(q.ajax.trackMethods,t)>=0)return!0}return!1},u=function(e){function t(){var e,s=this;t.__super__.constructor.apply(this,arguments),e=function(e){var t;return t=e.open,e.open=function(n,o,i){return j(n)&&s.trigger("request",{type:n,url:o,request:e}),t.apply(e,arguments)}},window.XMLHttpRequest=function(t){var s;return s=new X(t),e(s),s};try{_(window.XMLHttpRequest,X)}catch(e){}if(null!=O){window.XDomainRequest=function(){var t;return t=new O,e(t),t};try{_(window.XDomainRequest,O)}catch(e){}}if(null!=W&&q.ajax.trackWebSockets){window.WebSocket=function(e,t){var n;return n=null!=t?new W(e,t):new W(e),j("socket")&&s.trigger("request",{type:"socket",url:e,protocols:t,request:n}),n};try{_(window.WebSocket,W)}catch(e){}}}return Q(t,e),t}(a),F=null,E=function(e){var t,s,n,o;for(s=0,n=(o=q.ajax.ignoreURLs).length;s<n;s++)if("string"==typeof(t=o[s])){if(-1!==e.indexOf(t))return!0}else if(t.test(e))return!0;return!1},(k=function(){return null==F&&(F=new u),F})().on("request",(function(t){var s,n,o,i,r;if(i=t.type,o=t.request,r=t.url,!E(r))return c.running||!1===q.restartOnRequestAfter&&"force"!==j(i)?void 0:(n=arguments,"boolean"==typeof(s=q.restartOnRequestAfter||0)&&(s=0),setTimeout((function(){var t,s,r,a,l;if("socket"===i?o.readyState<2:0<(r=o.readyState)&&r<4){for(c.restart(),l=[],t=0,s=(a=c.sources).length;t<s;t++){if((H=a[t])instanceof e){H.watch.apply(H,n);break}l.push(void 0)}return l}}),s))})),e=function(){function e(){var e=this;this.elements=[],k().on("request",(function(){return e.watch.apply(e,arguments)}))}return e.prototype.watch=function(e){var t,s,n,o;if(n=e.type,t=e.request,o=e.url,!E(o))return s="socket"===n?new f(t):new h(t),this.elements.push(s)},e}(),h=function(e){var t,s,n,o,i,r=this;if(this.progress=0,null!=window.ProgressEvent)for(e.addEventListener("progress",(function(e){return e.lengthComputable?r.progress=100*e.loaded/e.total:r.progress=r.progress+(100-r.progress)/2}),!1),s=0,n=(i=["load","abort","timeout","error"]).length;s<n;s++)t=i[s],e.addEventListener(t,(function(){return r.progress=100}),!1);else o=e.onreadystatechange,e.onreadystatechange=function(){var t;return 0===(t=e.readyState)||4===t?r.progress=100:3===e.readyState&&(r.progress=50),"function"==typeof o?o.apply(null,arguments):void 0}},f=function(e){var t,s,n,o,i=this;for(this.progress=0,s=0,n=(o=["error","open"]).length;s<n;s++)t=o[s],e.addEventListener(t,(function(){return i.progress=100}),!1)},n=function(e){var t,s,n,i;for(null==e&&(e={}),this.elements=[],null==e.selectors&&(e.selectors=[]),s=0,n=(i=e.selectors).length;s<n;s++)t=i[s],this.elements.push(new o(t))},o=function(){function e(e){this.selector=e,this.progress=0,this.check()}return e.prototype.check=function(){var e=this;return document.querySelector(this.selector)?this.done():setTimeout((function(){return e.check()}),q.elements.checkInterval)},e.prototype.done=function(){return this.progress=100},e}(),s=function(){function e(){var e,t,s=this;this.progress=null!=(t=this.states[document.readyState])?t:100,e=document.onreadystatechange,document.onreadystatechange=function(){return null!=s.states[document.readyState]&&(s.progress=s.states[document.readyState]),"function"==typeof e?e.apply(null,arguments):void 0}}return e.prototype.states={loading:0,interactive:50,complete:100},e}(),i=function(){var e,t,s,n,o,i=this;this.progress=0,e=0,o=[],n=0,s=T(),t=setInterval((function(){var r;return r=T()-s-50,s=T(),o.push(r),o.length>q.eventLag.sampleCount&&o.shift(),e=v(o),++n>=q.eventLag.minSamples&&e<q.eventLag.lagThreshold?(i.progress=100,clearInterval(t)):i.progress=3/(e+3)*100}),50)},p=function(){function e(e){this.source=e,this.last=this.sinceLastUpdate=0,this.rate=q.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=V(this.source,"progress"))}return e.prototype.tick=function(e,t){var s;return null==t&&(t=V(this.source,"progress")),t>=100&&(this.done=!0),t===this.last?this.sinceLastUpdate+=e:(this.sinceLastUpdate&&(this.rate=(t-this.last)/this.sinceLastUpdate),this.catchup=(t-this.progress)/q.catchupTime,this.sinceLastUpdate=0,this.last=t),t>this.progress&&(this.progress+=this.catchup*e),s=1-Math.pow(this.progress/100,q.easeFactor),this.progress+=s*this.rate*e,this.progress=Math.min(this.lastProgress+q.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},e}(),M=null,B=null,g=null,R=null,m=null,y=null,c.running=!1,P=function(){if(q.restartOnPushState)return c.restart()},null!=window.history.pushState&&(Y=window.history.pushState,window.history.pushState=function(){return P(),Y.apply(window.history,arguments)}),null!=window.history.replaceState&&(N=window.history.replaceState,window.history.replaceState=function(){return P(),N.apply(window.history,arguments)}),d={ajax:e,elements:n,document:s,eventLag:i},(x=function(){var e,s,n,o,i,r,a,l;for(c.sources=M=[],s=0,o=(r=["ajax","elements","document","eventLag"]).length;s<o;s++)!1!==q[e=r[s]]&&M.push(new d[e](q[e]));for(n=0,i=(l=null!=(a=q.extraSources)?a:[]).length;n<i;n++)H=l[n],M.push(new H(q));return c.bar=g=new t,B=[],R=new p})(),c.stop=function(){return c.trigger("stop"),c.running=!1,g.destroy(),y=!0,null!=m&&("function"==typeof w&&w(m),m=null),x()},c.restart=function(){return c.trigger("restart"),c.stop(),c.start()},c.go=function(){var e;return c.running=!0,g.render(),e=T(),y=!1,m=G((function(t,s){var n,o,i,r,a,l,u,d,f,h,m,v,w,b,$;for(100-g.progress,o=h=0,i=!0,l=m=0,w=M.length;m<w;l=++m)for(H=M[l],f=null!=B[l]?B[l]:B[l]=[],u=v=0,b=(a=null!=($=H.elements)?$:[H]).length;v<b;u=++v)r=a[u],i&=(d=null!=f[u]?f[u]:f[u]=new p(r)).done,d.done||(o++,h+=d.tick(t));return n=h/o,g.update(R.tick(t,n)),g.done()||i||y?(g.update(100),c.trigger("done"),setTimeout((function(){return g.finish(),c.running=!1,c.trigger("hide")}),Math.max(q.ghostTime,Math.max(q.minTime-(T()-e),0)))):s()}))},c.start=function(e){$(q,e),c.running=!0;try{g.render()}catch(e){l=e}return document.querySelector(".pace")?(c.trigger("start"),c.go()):setTimeout(c.start,50)},"function"==typeof define&&define.amd?define(["pace"],(function(){return c})):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=c:q.startOnPageLoad&&c.start()}).call(void 0),Pace.on("start",(function(){})),Pace.on("done",(function(){setTimeout((function(){$(".preloader").addClass("hidden")}),5100)}));var video,display,mainSliderRemoveHidden=setTimeout((function(){$(".preloader").addClass("hidden")}),5100);($(".privacy-page-accordion__top").length>0&&($(".privacy-page-accordion__top").click((function(){$(this).parent().toggleClass("active"),$(this).parent().hasClass("active")?$(this).next().slideDown():($(".privacy-page-accordion__container").slideUp(),$(".privacy-page-accordion").removeClass("active"))})),$((function(e){e(document).mouseup((function(t){var s=e(".privacy-page-accordion.active");s.is(t.target)||0!==s.has(t.target).length||s.removeClass("active")}))})),$((function(e){e(document).mouseup((function(t){var s=e(".privacy-page-accordion__container");s.is(t.target)||0!==s.has(t.target).length||s.slideUp()}))}))),$(".select").click((function(e){$(this).hasClass("disabled")||($(".select").not(this).removeClass("active").find(".select-options").slideUp(50),$(this).toggleClass("active"),$(this).find(".select-options").slideToggle(50))})),$(".select-options__value").click((function(){$(this).parents(".select").find(".select-title__value").html($(this).html()),""!=$.trim($(this).data("value"))?$(this).parents(".select").find("input").val($(this).data("value")):$(this).parents(".select").find("input").val($(this).html())})),$(document).click((function(e){$(e.target).is(".select *")||($(".select").removeClass("active"),$(".select-options").slideUp(50))})),$(".services-accordion__top").length>0&&($(".services-accordion__top").click((function(){$(this).parent().toggleClass("active");var e=$(this);setTimeout((function(){var t=e.parent().offset().top;jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:t},300)}),300),$(this).parent().hasClass("active")?$(this).next().slideDown(150):($(".services-accordion__container").slideUp(150),$(".services-accordion").removeClass("active"))})),$((function(e){e(document).mouseup((function(t){var s=e(".services-accordion.active");s.is(t.target)||0!==s.has(t.target).length||s.removeClass("active")}))})),$((function(e){e(document).mouseup((function(t){var s=e(".services-accordion__container");s.is(t.target)||0!==s.has(t.target).length||s.slideUp(150)}))}))),function(){if(document.querySelector(".video")){var e=document.querySelector(".video"),t=document.querySelector(".cursor"),s=e.offsetWidth/2-t.offsetWidth/2,n=e.offsetHeight/2-t.offsetHeight/2;gsap.set(t,{x:s,y:n,duration:.3}),e.addEventListener("mousemove",(function(s){var n=e.getBoundingClientRect(),o=s.clientX-n.left,i=s.clientY-n.top,r=e.offsetWidth-t.offsetWidth/2,a=e.offsetHeight-t.offsetHeight/2;o<0&&(o=0),o>r&&(o=r),i<0&&(i=0),i>a&&(i=a),gsap.to(t,{x:o,y:i,duration:.3})})),e.addEventListener("mouseleave",(function(s){var n=e.offsetWidth/2-t.offsetWidth/2,o=e.offsetHeight/2-t.offsetHeight/2;gsap.to(t,{x:n,y:o,duration:.3})}))}}(),$(".video--js").length>0)&&(window.onload=function(){video=document.getElementById("video")},$("body").on("click",".video--js",(function(){$(".video__preview").addClass("hidden"),video.play(),$(".video-box").hasClass("play")?($(".video-box").removeClass("play"),$(".video-box").addClass("step"),$(this).find(".cursor").removeClass("cursor--active"),video.pause()):($(".video-box").addClass("play"),$(".video-box").removeClass("step"),$(this).find(".cursor").addClass("cursor--active"),video.play())})));