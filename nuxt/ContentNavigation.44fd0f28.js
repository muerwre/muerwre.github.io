import{a as l,q as f,s as g,v as L,e as S,x as I,m as h,y as P,z as D,d as e,_ as r,A as R,B as V,C as c,D as y,E as b,l as B,b as x}from"./entry.b21f669a.js";import{f as N}from"./navigation.eb65b47a.js";import"./ProseCode.vue_used_vue_type_style_index_1_lang.module.230a312a.js";import"./BioSkills.vue_used_vue_type_style_index_0_lang.module.516c18c9.js";import"./UiCard.vue_used_vue_type_style_index_0_lang.module.a0027dfd.js";import"./ContactInformation.vue_used_vue_type_style_index_0_lang.module.739bc2ff.js";import"./LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.ad62d97c.js";import"./LayoutHeader.vue_used_vue_type_style_index_0_lang.module.0c694d46.js";import"./LayoutMainMenuToggle.vue_used_vue_type_style_index_0_lang.module.ab60ac3f.js";import"./ContentList.489dcf5a.js";import"./ContentSlot.082b4ac2.js";import"./DocumentDrivenEmpty.3496e04a.js";import"./DocumentDrivenNotFound.2d25f4d1.js";import"./Markdown.4a247ea3.js";const j=l({emits:{error(t){return!0}},setup(t,{slots:i,emit:o}){const n=f(null),_=g();return L(a=>{if(!_.isHydrating)return o("error",a),n.value=a,!1}),()=>{var a,u;return n.value?(a=i.error)==null?void 0:a.call(i,{error:n}):(u=i.default)==null?void 0:u.call(i)}}}),C=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),k=l({name:"ServerPlaceholder",render(){return S("div")}}),q=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),z=l({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:i}){const o=M({duration:t.duration,throttle:t.throttle}),n=g();return n.hook("page:start",o.start),n.hook("page:finish",o.finish),I(()=>o.clear),()=>h("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},i)}});function M(t){const i=f(0),o=f(!1),n=P(()=>1e4/t.duration);let _=null,a=null;function u(){p(),i.value=0,o.value=!0,t.throttle?a=setTimeout(v,t.throttle):v()}function E(){i.value=100,O()}function p(){clearInterval(_),clearTimeout(a),_=null,a=null}function A(T){i.value=Math.min(100,i.value+T)}function O(){p(),setTimeout(()=>{o.value=!1,setTimeout(()=>{i.value=0},400)},500)}function v(){_=setInterval(()=>{A(n.value)},100)}return{progress:i,isLoading:o,start:u,finish:E,clear:p}}const H=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),$=t=>Object.fromEntries(Object.entries(t).filter(([,i])=>i!==void 0)),d=(t,i)=>(o,n)=>(D(()=>t({...$(o),...n.attrs},n)),()=>{var _,a;return i?(a=(_=n.slots).default)==null?void 0:a.call(_):null}),s={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},w=l({name:"Script",inheritAttrs:!1,props:{...s,async:Boolean,crossorigin:{type:[Boolean,String],default:void 0},defer:Boolean,fetchpriority:String,integrity:String,nomodule:Boolean,nonce:String,referrerpolicy:String,src:String,type:String,charset:String,language:String,body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:i})=>{var _;const o={...t},n=(((_=i.default)==null?void 0:_.call(i))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return n&&(o.children=n),{script:[o]}})}),U=l({name:"NoScript",inheritAttrs:!1,props:{...s,title:String,body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:i})=>{var _;const o={...t},n=(((_=i.default)==null?void 0:_.call(i))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return n&&(o.children=n),{noscript:[o]}})}),F=l({name:"Link",inheritAttrs:!1,props:{...s,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>({link:[t]}))}),G=l({name:"Base",inheritAttrs:!1,props:{...s,href:String,target:String},setup:d(t=>({base:t}))}),J=l({name:"Title",inheritAttrs:!1,setup:d((t,{slots:i})=>{var n,_,a;return{title:((a=(_=(n=i.default)==null?void 0:n.call(i))==null?void 0:_[0])==null?void 0:a.children)||null}})}),K=l({name:"Meta",inheritAttrs:!1,props:{...s,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>{const i={...t};return i.httpEquiv&&(i["http-equiv"]=i.httpEquiv,delete i.httpEquiv),{meta:[i]}})}),Q=l({name:"Style",inheritAttrs:!1,props:{...s,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:i})=>{var _,a,u;const o={...t},n=(u=(a=(_=i.default)==null?void 0:_.call(i))==null?void 0:a[0])==null?void 0:u.children;return n&&(o.children=n),{style:[o]}})}),W=l({name:"Head",inheritAttrs:!1,setup:(t,i)=>()=>{var o,n;return(n=(o=i.slots).default)==null?void 0:n.call(o)}}),X=l({name:"Html",inheritAttrs:!1,props:{...s,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:d(t=>({htmlAttrs:t}),!0)}),Y=l({name:"Body",inheritAttrs:!1,props:{...s,renderPriority:[String,Number]},setup:d(t=>({bodyAttrs:t}),!0)}),m=Object.freeze(Object.defineProperty({__proto__:null,Script:w,NoScript:U,Link:F,Base:G,Title:J,Meta:K,Style:Q,Head:W,Html:X,Body:Y},Symbol.toStringTag,{value:"Module"}));e(()=>r(()=>import("./ProseA.427508c0.js"),["ProseA.427508c0.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCode.dcb84949.js"),["ProseCode.dcb84949.js","UiIconCopy.8e61b593.js","entry.b21f669a.js","entry.0fc56112.css","ProseCode.vue_used_vue_type_style_index_1_lang.module.230a312a.js","ProseCode.vue_used_vue_type_style_index_1_lang.24930a5d.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./BioCareer.0e5702da.js"),["BioCareer.0e5702da.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./BioHeading.8a6ffde0.js"),["BioHeading.8a6ffde0.js","IconsSend.f309c01e.js","entry.b21f669a.js","entry.0fc56112.css","UiActionButton.f34bf030.js","IconsGithub.d663f47e.js","UiButtonGroup.4ba88187.js","BioSkills.vue_used_vue_type_style_index_0_lang.module.516c18c9.js","BioSkills.vue_used_vue_type_style_index_0_lang.4d0cadf8.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./BioProjectCard.afb78dfb.js"),["BioProjectCard.afb78dfb.js","entry.b21f669a.js","entry.0fc56112.css","IconsCode.e019fe74.js","UiActionButton.f34bf030.js","ArrowRight.1ab7bc1e.js","UiCard.92509f36.js","UiCard.vue_used_vue_type_style_index_0_lang.module.a0027dfd.js","UiCard.vue_used_vue_type_style_index_0_lang.7760099e.css","BioSkills.vue_used_vue_type_style_index_0_lang.module.516c18c9.js","BioSkills.vue_used_vue_type_style_index_0_lang.4d0cadf8.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./BioProjects.3337b52b.js"),["BioProjects.3337b52b.js","BioProjectCard.afb78dfb.js","entry.b21f669a.js","entry.0fc56112.css","IconsCode.e019fe74.js","UiActionButton.f34bf030.js","ArrowRight.1ab7bc1e.js","UiCard.92509f36.js","UiCard.vue_used_vue_type_style_index_0_lang.module.a0027dfd.js","UiCard.vue_used_vue_type_style_index_0_lang.7760099e.css","BioSkills.vue_used_vue_type_style_index_0_lang.module.516c18c9.js","BioSkills.vue_used_vue_type_style_index_0_lang.4d0cadf8.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./BioSkills.19205f7d.js"),["BioSkills.19205f7d.js","BioSkillsCard.087f84a0.js","UiStars.32674dd5.js","IconStar.4e6f97e6.js","entry.b21f669a.js","entry.0fc56112.css","BioSkills.vue_used_vue_type_style_index_0_lang.module.516c18c9.js","BioSkills.vue_used_vue_type_style_index_0_lang.4d0cadf8.css","UiCard.92509f36.js","UiCard.vue_used_vue_type_style_index_0_lang.module.a0027dfd.js","UiCard.vue_used_vue_type_style_index_0_lang.7760099e.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./BioSkillsCard.087f84a0.js"),["BioSkillsCard.087f84a0.js","UiStars.32674dd5.js","IconStar.4e6f97e6.js","entry.b21f669a.js","entry.0fc56112.css","BioSkills.vue_used_vue_type_style_index_0_lang.module.516c18c9.js","BioSkills.vue_used_vue_type_style_index_0_lang.4d0cadf8.css","UiCard.92509f36.js","UiCard.vue_used_vue_type_style_index_0_lang.module.a0027dfd.js","UiCard.vue_used_vue_type_style_index_0_lang.7760099e.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContactInformation.d1220bf0.js").then(t=>t.C),["ContactInformation.d1220bf0.js","IconsTelegram.d9350e72.js","entry.b21f669a.js","entry.0fc56112.css","ContactRow.588e0140.js","UiCard.92509f36.js","UiCard.vue_used_vue_type_style_index_0_lang.module.a0027dfd.js","UiCard.vue_used_vue_type_style_index_0_lang.7760099e.css","ContactInformation.vue_used_vue_type_style_index_0_lang.module.739bc2ff.js","ContactInformation.vue_used_vue_type_style_index_0_lang.1e51a0d4.css","IconsGithub.d663f47e.js","IconsSend.f309c01e.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContactRow.588e0140.js"),["ContactRow.588e0140.js","entry.b21f669a.js","entry.0fc56112.css","UiCard.92509f36.js","UiCard.vue_used_vue_type_style_index_0_lang.module.a0027dfd.js","UiCard.vue_used_vue_type_style_index_0_lang.7760099e.css","ContactInformation.vue_used_vue_type_style_index_0_lang.module.739bc2ff.js","ContactInformation.vue_used_vue_type_style_index_0_lang.1e51a0d4.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./HomeContentList.af8603f9.js"),["HomeContentList.af8603f9.js","entry.b21f669a.js","entry.0fc56112.css","navigation.eb65b47a.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./HomeHeader.04d8d26e.js"),["HomeHeader.04d8d26e.js","entry.b21f669a.js","entry.0fc56112.css","IconsSend.f309c01e.js","UiActionButton.f34bf030.js","IconsBook.d889187c.js","UiButtonGroup.4ba88187.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./HomeReference.0c989a2c.js"),["HomeReference.0c989a2c.js","entry.b21f669a.js","entry.0fc56112.css","navigation.eb65b47a.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ArrowRight.1ab7bc1e.js"),["ArrowRight.1ab7bc1e.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconStar.4e6f97e6.js"),["IconStar.4e6f97e6.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconsBook.d889187c.js"),["IconsBook.d889187c.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconsCode.e019fe74.js"),["IconsCode.e019fe74.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconsGithub.d663f47e.js"),["IconsGithub.d663f47e.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconsSend.f309c01e.js"),["IconsSend.f309c01e.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconsTelegram.d9350e72.js"),["IconsTelegram.d9350e72.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.ad62d97c.js").then(t=>t.M),["LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.ad62d97c.js","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.cfa40af4.css","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.ad62d97c.js").then(t=>t.S),["LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.ad62d97c.js","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.cfa40af4.css","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./LayoutFooter.0fd0ffc8.js"),["LayoutFooter.0fd0ffc8.js","entry.b21f669a.js","entry.0fc56112.css","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.ad62d97c.js","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.cfa40af4.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./LayoutHeader.ea32da81.js"),["LayoutHeader.ea32da81.js","entry.b21f669a.js","entry.0fc56112.css","LayoutHeader.vue_used_vue_type_style_index_0_lang.module.0c694d46.js","LayoutHeader.vue_used_vue_type_style_index_0_lang.6c21f409.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./LayoutMainMenu.e04fe260.js"),["LayoutMainMenu.e04fe260.js","entry.b21f669a.js","entry.0fc56112.css","navigation.eb65b47a.js","LayoutMainMenuToggle.vue_used_vue_type_style_index_0_lang.module.ab60ac3f.js","LayoutMainMenuToggle.vue_used_vue_type_style_index_0_lang.5944fda9.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.b21f669a.js").then(t=>t.ap),["entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./LayoutMainMenuToggle.5745cbad.js"),["LayoutMainMenuToggle.5745cbad.js","entry.b21f669a.js","entry.0fc56112.css","LayoutMainMenuToggle.vue_used_vue_type_style_index_0_lang.module.ab60ac3f.js","LayoutMainMenuToggle.vue_used_vue_type_style_index_0_lang.5944fda9.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./LayoutThemeToggle.f25cfdab.js"),["LayoutThemeToggle.f25cfdab.js","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.ad62d97c.js","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.cfa40af4.css","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./UiActionButton.f34bf030.js"),["UiActionButton.f34bf030.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./UiButtonGroup.4ba88187.js"),["UiButtonGroup.4ba88187.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./UiCard.92509f36.js"),["UiCard.92509f36.js","UiCard.vue_used_vue_type_style_index_0_lang.module.a0027dfd.js","UiCard.vue_used_vue_type_style_index_0_lang.7760099e.css","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./UiIconCopy.8e61b593.js"),["UiIconCopy.8e61b593.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./UiStars.32674dd5.js"),["UiStars.32674dd5.js","IconStar.4e6f97e6.js","entry.b21f669a.js","entry.0fc56112.css","BioSkills.vue_used_vue_type_style_index_0_lang.module.516c18c9.js","BioSkills.vue_used_vue_type_style_index_0_lang.4d0cadf8.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.b21f669a.js").then(t=>t.ao),["entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentList.489dcf5a.js"),["ContentList.489dcf5a.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>tt),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.b21f669a.js").then(t=>t.an),["entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.b21f669a.js").then(t=>t.am),["entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.b21f669a.js").then(t=>t.al),["entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentSlot.082b4ac2.js"),["ContentSlot.082b4ac2.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenEmpty.3496e04a.js"),["DocumentDrivenEmpty.3496e04a.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenNotFound.2d25f4d1.js"),["DocumentDrivenNotFound.2d25f4d1.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Markdown.4a247ea3.js"),["Markdown.4a247ea3.js","ContentSlot.082b4ac2.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseBlockquote.84a6c0ac.js"),["ProseBlockquote.84a6c0ac.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCodeInline.8352e058.js"),["ProseCodeInline.8352e058.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseEm.efd3fd83.js"),["ProseEm.efd3fd83.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH1.fc258500.js"),["ProseH1.fc258500.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH2.4eeeed5a.js"),["ProseH2.4eeeed5a.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH3.3386e6f4.js"),["ProseH3.3386e6f4.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH4.949baf5f.js"),["ProseH4.949baf5f.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH5.a8ab39c9.js"),["ProseH5.a8ab39c9.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH6.7d1aeec9.js"),["ProseH6.7d1aeec9.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseHr.2fa77143.js"),["ProseHr.2fa77143.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseImg.fa30cacb.js"),["ProseImg.fa30cacb.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseLi.80eff195.js"),["ProseLi.80eff195.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseOl.45b297af.js"),["ProseOl.45b297af.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseP.65283948.js"),["ProseP.65283948.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseStrong.6552fe7a.js"),["ProseStrong.6552fe7a.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTable.15f0150b.js"),["ProseTable.15f0150b.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTbody.b4ab5e38.js"),["ProseTbody.b4ab5e38.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTd.d1454768.js"),["ProseTd.d1454768.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTh.f067fbe6.js"),["ProseTh.f067fbe6.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseThead.cf206b5c.js"),["ProseThead.cf206b5c.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTr.3268cc75.js"),["ProseTr.3268cc75.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseUl.f318c250.js"),["ProseUl.f318c250.js","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./welcome.b94365f4.js"),["welcome.b94365f4.js","entry.b21f669a.js","entry.0fc56112.css","navigation.eb65b47a.js","ProseCode.vue_used_vue_type_style_index_1_lang.module.230a312a.js","ProseCode.vue_used_vue_type_style_index_1_lang.24930a5d.css","BioSkills.vue_used_vue_type_style_index_0_lang.module.516c18c9.js","BioSkills.vue_used_vue_type_style_index_0_lang.4d0cadf8.css","UiCard.vue_used_vue_type_style_index_0_lang.module.a0027dfd.js","UiCard.vue_used_vue_type_style_index_0_lang.7760099e.css","ContactInformation.vue_used_vue_type_style_index_0_lang.module.739bc2ff.js","ContactInformation.vue_used_vue_type_style_index_0_lang.1e51a0d4.css","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.ad62d97c.js","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.cfa40af4.css","LayoutHeader.vue_used_vue_type_style_index_0_lang.module.0c694d46.js","LayoutHeader.vue_used_vue_type_style_index_0_lang.6c21f409.css","LayoutMainMenuToggle.vue_used_vue_type_style_index_0_lang.module.ab60ac3f.js","LayoutMainMenuToggle.vue_used_vue_type_style_index_0_lang.5944fda9.css","ContentList.489dcf5a.js","ContentSlot.082b4ac2.js","DocumentDrivenEmpty.3496e04a.js","DocumentDrivenNotFound.2d25f4d1.js","Markdown.4a247ea3.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.b21f669a.js").then(t=>t.ar),["entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>C),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.ad62d97c.js").then(t=>t.c),["LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.ad62d97c.js","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.cfa40af4.css","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>q),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.b21f669a.js").then(t=>t.ak),["entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>H),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./component.vue3.589269ae.js"),["component.vue3.589269ae.js","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.ad62d97c.js","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.cfa40af4.css","entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.b21f669a.js").then(t=>t.aq),["entry.b21f669a.js","entry.0fc56112.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Script));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.NoScript));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Link));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Base));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Title));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Meta));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Style));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Head));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Html));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Body));const Z=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:i}=R(t),o=P(()=>{var _;return typeof((_=i.value)==null?void 0:_.params)=="function"?i.value.params():i.value});if(!o.value&&V("dd-navigation").value){const{navigation:_}=c();return{navigation:_}}const{data:n}=await y(`content-navigation-${b(o.value)}`,()=>N(o.value));return{navigation:n}},render(t){const i=B(),{navigation:o}=t,n=u=>h(x,{to:u._path},()=>u.title),_=(u,E)=>h("ul",E?{"data-level":E}:null,u.map(p=>p.children?h("li",null,[n(p),_(p.children,E+1)]):h("li",null,n(p)))),a=u=>_(u,0);return i!=null&&i.default?i.default({navigation:o,...this.$attrs}):a(o)}}),tt=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{Z as default};