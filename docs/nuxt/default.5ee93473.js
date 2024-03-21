import $ from"./LayoutMainMenuToggle.16bf42cd.js";import T from"./LayoutMainMenu.25f8974f.js";import{k as M,a as B,q as P,J as L,a2 as V,y as A,a3 as k,o as C,e as E,i as p,h as r,f as u,w as H,r as I,a4 as D}from"./entry.0ac1105a.js";import"./LayoutMainMenuToggle.vue_used_vue_type_style_index_0_lang.module.fbcd3219.js";import"./navigation.249efedf.js";function O(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}else return Array.from(t)}var y=!1;if(typeof window<"u"){var w={get passive(){y=!0}};window.addEventListener("testPassive",null,w),window.removeEventListener("testPassive",null,w)}var c=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),l=[],f=!1,g=-1,d=void 0,s=void 0,a=void 0,h=function(e){return l.some(function(o){return!!(o.options.allowTouchMove&&o.options.allowTouchMove(e))})},m=function(e){var o=e||window.event;return h(o.target)||o.touches.length>1?!0:(o.preventDefault&&o.preventDefault(),!1)},F=function(e){if(a===void 0){var o=!!e&&e.reserveScrollBarGap===!0,i=window.innerWidth-document.documentElement.clientWidth;if(o&&i>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);a=document.body.style.paddingRight,document.body.style.paddingRight=n+i+"px"}}d===void 0&&(d=document.body.style.overflow,document.body.style.overflow="hidden")},R=function(){a!==void 0&&(document.body.style.paddingRight=a,a=void 0),d!==void 0&&(document.body.style.overflow=d,d=void 0)},Y=function(){return window.requestAnimationFrame(function(){if(s===void 0){s={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,o=e.scrollY,i=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-o,document.body.style.left=-i,setTimeout(function(){return window.requestAnimationFrame(function(){var v=n-window.innerHeight;v&&o>=n&&(document.body.style.top=-(o+v))})},300)}})},q=function(){if(s!==void 0){var e=-parseInt(document.body.style.top,10),o=-parseInt(document.body.style.left,10);document.body.style.position=s.position,document.body.style.top=s.top,document.body.style.left=s.left,window.scrollTo(o,e),s=void 0}},N=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},W=function(e,o){var i=e.targetTouches[0].clientY-g;return h(e.target)?!1:o&&o.scrollTop===0&&i>0||N(o)&&i<0?m(e):(e.stopPropagation(),!0)},z=function(e,o){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!l.some(function(n){return n.targetElement===e})){var i={targetElement:e,options:o||{}};l=[].concat(O(l),[i]),c?Y():F(o),c&&(e.ontouchstart=function(n){n.targetTouches.length===1&&(g=n.targetTouches[0].clientY)},e.ontouchmove=function(n){n.targetTouches.length===1&&W(n,e)},f||(document.addEventListener("touchmove",m,y?{passive:!1}:void 0),f=!0))}},J=function(){c&&(l.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),f&&(document.removeEventListener("touchmove",m,y?{passive:!1}:void 0),f=!1),g=-1),c?q():R(),l=[]};const U="_grid_1ipws_1",X="_main_1ipws_17",j="_sidebar_1ipws_26",G="_active_1ipws_39",K="_menu_1ipws_45",Q="_menu_toggle_1ipws_65",Z="_shifted_1ipws_82",x="_footer_1ipws_89",ee="_content_1ipws_93",te={grid:U,main:X,sidebar:j,active:G,menu:K,menu_toggle:Q,shifted:Z,footer:x,content:ee},oe=B({setup(){const t=P(0),e=()=>{t.value=window.scrollY};return L(()=>addEventListener("scroll",e)),V(()=>removeEventListener("scroll",e)),{menuShifted:A(()=>t.value>60),scrollTop:t}},data(){return{menuVisible:!1}},methods:{toggleMenu(){this.$data.menuVisible=!this.$data.menuVisible}},watch:{$route(){!this.menuVisible||k(()=>this.toggleMenu())},menuVisible(t){t&&z(this.$refs.sidebar),J()}}});function ne(t,e,o,i,n,v){const _=$,b=T,S=D;return C(),E("div",{class:r(t.$style.grid)},[p(_,{active:t.menuVisible,class:r([t.$style.menu_toggle,{[t.$style.shifted]:t.menuShifted,[t.$style.active]:t.menuVisible}]),onClick:t.toggleMenu},null,8,["active","class","onClick"]),u("div",{class:r([t.$style.sidebar,{[t.$style.active]:t.menuVisible}]),ref:"sidebar"},[u("div",{class:r(t.$style.menu)},[p(b)],2)],2),u("div",{class:r(t.$style.main)},[u("div",{class:r(t.$style.content)},[p(S,{name:"content"},{default:H(()=>[I(t.$slots,"default")]),_:3})],2)],2)],2)}const ie={$style:te},ue=M(oe,[["render",ne],["__cssModules",ie]]);export{ue as default};
