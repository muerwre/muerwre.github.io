import{a as l,q as f,s as g,v as L,e as S,x as I,m as h,y as P,z as D,d as e,_ as r,A as R,B as V,C as y,D as c,E as b,l as B,b as x}from"./entry.a1162545.js";import{f as N}from"./navigation.c88a11e6.js";import"./ProseCode.vue_used_vue_type_style_index_1_lang.module.230a312a.js";import"./BioSkills.vue_used_vue_type_style_index_0_lang.module.516c18c9.js";import"./UiCard.vue_used_vue_type_style_index_0_lang.module.a0027dfd.js";import"./ContactInformation.vue_used_vue_type_style_index_0_lang.module.80c3b839.js";import"./LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.5f1b7ee4.js";import"./LayoutHeader.vue_used_vue_type_style_index_0_lang.module.57d4f89f.js";import"./LayoutMainMenuToggle.vue_used_vue_type_style_index_0_lang.module.fbcd3219.js";import"./ContentList.aa5fabfc.js";import"./ContentSlot.017eac9c.js";import"./DocumentDrivenEmpty.901ae14d.js";import"./DocumentDrivenNotFound.ac941741.js";import"./Markdown.ca979d4c.js";const j=l({emits:{error(t){return!0}},setup(t,{slots:i,emit:o}){const n=f(null),_=g();return L(a=>{if(!_.isHydrating)return o("error",a),n.value=a,!1}),()=>{var a,u;return n.value?(a=i.error)==null?void 0:a.call(i,{error:n}):(u=i.default)==null?void 0:u.call(i)}}}),C=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),k=l({name:"ServerPlaceholder",render(){return S("div")}}),q=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),z=l({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:i}){const o=M({duration:t.duration,throttle:t.throttle}),n=g();return n.hook("page:start",o.start),n.hook("page:finish",o.finish),I(()=>o.clear),()=>h("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},i)}});function M(t){const i=f(0),o=f(!1),n=P(()=>1e4/t.duration);let _=null,a=null;function u(){p(),i.value=0,o.value=!0,t.throttle?a=setTimeout(v,t.throttle):v()}function E(){i.value=100,O()}function p(){clearInterval(_),clearTimeout(a),_=null,a=null}function A(T){i.value=Math.min(100,i.value+T)}function O(){p(),setTimeout(()=>{o.value=!1,setTimeout(()=>{i.value=0},400)},500)}function v(){_=setInterval(()=>{A(n.value)},100)}return{progress:i,isLoading:o,start:u,finish:E,clear:p}}const H=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),$=t=>Object.fromEntries(Object.entries(t).filter(([,i])=>i!==void 0)),d=(t,i)=>(o,n)=>(D(()=>t({...$(o),...n.attrs},n)),()=>{var _,a;return i?(a=(_=n.slots).default)==null?void 0:a.call(_):null}),s={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},w=l({name:"Script",inheritAttrs:!1,props:{...s,async:Boolean,crossorigin:{type:[Boolean,String],default:void 0},defer:Boolean,fetchpriority:String,integrity:String,nomodule:Boolean,nonce:String,referrerpolicy:String,src:String,type:String,charset:String,language:String,body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:i})=>{var _;const o={...t},n=(((_=i.default)==null?void 0:_.call(i))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return n&&(o.children=n),{script:[o]}})}),U=l({name:"NoScript",inheritAttrs:!1,props:{...s,title:String,body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:i})=>{var _;const o={...t},n=(((_=i.default)==null?void 0:_.call(i))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return n&&(o.children=n),{noscript:[o]}})}),F=l({name:"Link",inheritAttrs:!1,props:{...s,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>({link:[t]}))}),G=l({name:"Base",inheritAttrs:!1,props:{...s,href:String,target:String},setup:d(t=>({base:t}))}),J=l({name:"Title",inheritAttrs:!1,setup:d((t,{slots:i})=>{var n,_,a;return{title:((a=(_=(n=i.default)==null?void 0:n.call(i))==null?void 0:_[0])==null?void 0:a.children)||null}})}),K=l({name:"Meta",inheritAttrs:!1,props:{...s,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>{const i={...t};return i.httpEquiv&&(i["http-equiv"]=i.httpEquiv,delete i.httpEquiv),{meta:[i]}})}),Q=l({name:"Style",inheritAttrs:!1,props:{...s,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:i})=>{var _,a,u;const o={...t},n=(u=(a=(_=i.default)==null?void 0:_.call(i))==null?void 0:a[0])==null?void 0:u.children;return n&&(o.children=n),{style:[o]}})}),W=l({name:"Head",inheritAttrs:!1,setup:(t,i)=>()=>{var o,n;return(n=(o=i.slots).default)==null?void 0:n.call(o)}}),X=l({name:"Html",inheritAttrs:!1,props:{...s,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:d(t=>({htmlAttrs:t}),!0)}),Y=l({name:"Body",inheritAttrs:!1,props:{...s,renderPriority:[String,Number]},setup:d(t=>({bodyAttrs:t}),!0)}),m=Object.freeze(Object.defineProperty({__proto__:null,Script:w,NoScript:U,Link:F,Base:G,Title:J,Meta:K,Style:Q,Head:W,Html:X,Body:Y},Symbol.toStringTag,{value:"Module"}));e(()=>r(()=>import("./ProseA.125f5d24.js"),["ProseA.125f5d24.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCode.6beb51eb.js"),["ProseCode.6beb51eb.js","UiIconCopy.bfce4552.js","entry.a1162545.js","entry.10eae4ea.css","ProseCode.vue_used_vue_type_style_index_1_lang.module.230a312a.js","ProseCode.vue_used_vue_type_style_index_1_lang.24930a5d.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./BioCareer.56fc554f.js"),["BioCareer.56fc554f.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./BioHeading.1e2de442.js"),["BioHeading.1e2de442.js","IconsSend.9f60ece7.js","entry.a1162545.js","entry.10eae4ea.css","UiActionButton.dd6e6d76.js","IconsGithub.c47cbd38.js","UiButtonGroup.03df9d51.js","BioSkills.vue_used_vue_type_style_index_0_lang.module.516c18c9.js","BioSkills.vue_used_vue_type_style_index_0_lang.4d0cadf8.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./BioProjectCard.92964127.js"),["BioProjectCard.92964127.js","entry.a1162545.js","entry.10eae4ea.css","IconsCode.f19221b0.js","UiActionButton.dd6e6d76.js","ArrowRight.14964609.js","UiCard.30356a36.js","UiCard.vue_used_vue_type_style_index_0_lang.module.a0027dfd.js","UiCard.vue_used_vue_type_style_index_0_lang.7760099e.css","BioSkills.vue_used_vue_type_style_index_0_lang.module.516c18c9.js","BioSkills.vue_used_vue_type_style_index_0_lang.4d0cadf8.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./BioProjects.59ee94c3.js"),["BioProjects.59ee94c3.js","BioProjectCard.92964127.js","entry.a1162545.js","entry.10eae4ea.css","IconsCode.f19221b0.js","UiActionButton.dd6e6d76.js","ArrowRight.14964609.js","UiCard.30356a36.js","UiCard.vue_used_vue_type_style_index_0_lang.module.a0027dfd.js","UiCard.vue_used_vue_type_style_index_0_lang.7760099e.css","BioSkills.vue_used_vue_type_style_index_0_lang.module.516c18c9.js","BioSkills.vue_used_vue_type_style_index_0_lang.4d0cadf8.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./BioSkills.8a45295a.js"),["BioSkills.8a45295a.js","BioSkillsCard.9eb3a7e8.js","UiStars.f80344a8.js","IconStar.856ef9b4.js","entry.a1162545.js","entry.10eae4ea.css","BioSkills.vue_used_vue_type_style_index_0_lang.module.516c18c9.js","BioSkills.vue_used_vue_type_style_index_0_lang.4d0cadf8.css","UiCard.30356a36.js","UiCard.vue_used_vue_type_style_index_0_lang.module.a0027dfd.js","UiCard.vue_used_vue_type_style_index_0_lang.7760099e.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./BioSkillsCard.9eb3a7e8.js"),["BioSkillsCard.9eb3a7e8.js","UiStars.f80344a8.js","IconStar.856ef9b4.js","entry.a1162545.js","entry.10eae4ea.css","BioSkills.vue_used_vue_type_style_index_0_lang.module.516c18c9.js","BioSkills.vue_used_vue_type_style_index_0_lang.4d0cadf8.css","UiCard.30356a36.js","UiCard.vue_used_vue_type_style_index_0_lang.module.a0027dfd.js","UiCard.vue_used_vue_type_style_index_0_lang.7760099e.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContactInformation.23c7ad7c.js").then(t=>t.C),["ContactInformation.23c7ad7c.js","IconsTelegram.783c99b0.js","entry.a1162545.js","entry.10eae4ea.css","ContactRow.c1c5e4b6.js","UiCard.30356a36.js","UiCard.vue_used_vue_type_style_index_0_lang.module.a0027dfd.js","UiCard.vue_used_vue_type_style_index_0_lang.7760099e.css","ContactInformation.vue_used_vue_type_style_index_0_lang.module.80c3b839.js","ContactInformation.vue_used_vue_type_style_index_0_lang.826cd7fe.css","IconsGithub.c47cbd38.js","IconsLinkedin.125a3758.js","IconsSend.9f60ece7.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContactRow.c1c5e4b6.js"),["ContactRow.c1c5e4b6.js","entry.a1162545.js","entry.10eae4ea.css","UiCard.30356a36.js","UiCard.vue_used_vue_type_style_index_0_lang.module.a0027dfd.js","UiCard.vue_used_vue_type_style_index_0_lang.7760099e.css","ContactInformation.vue_used_vue_type_style_index_0_lang.module.80c3b839.js","ContactInformation.vue_used_vue_type_style_index_0_lang.826cd7fe.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./HomeContentList.46e326e2.js"),["HomeContentList.46e326e2.js","entry.a1162545.js","entry.10eae4ea.css","navigation.c88a11e6.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./HomeHeader.27ad4cc1.js"),["HomeHeader.27ad4cc1.js","entry.a1162545.js","entry.10eae4ea.css","IconsSend.9f60ece7.js","UiActionButton.dd6e6d76.js","IconsBook.a1725b46.js","UiButtonGroup.03df9d51.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./HomeReference.bf6fb900.js"),["HomeReference.bf6fb900.js","entry.a1162545.js","entry.10eae4ea.css","navigation.c88a11e6.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ArrowRight.14964609.js"),["ArrowRight.14964609.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconStar.856ef9b4.js"),["IconStar.856ef9b4.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconsBook.a1725b46.js"),["IconsBook.a1725b46.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconsCode.f19221b0.js"),["IconsCode.f19221b0.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconsGithub.c47cbd38.js"),["IconsGithub.c47cbd38.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconsLinkedin.125a3758.js"),["IconsLinkedin.125a3758.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconsSend.9f60ece7.js"),["IconsSend.9f60ece7.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconsTelegram.783c99b0.js"),["IconsTelegram.783c99b0.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.5f1b7ee4.js").then(t=>t.M),["LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.5f1b7ee4.js","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.cfa40af4.css","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.5f1b7ee4.js").then(t=>t.S),["LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.5f1b7ee4.js","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.cfa40af4.css","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./LayoutFooter.92ed5906.js"),["LayoutFooter.92ed5906.js","entry.a1162545.js","entry.10eae4ea.css","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.5f1b7ee4.js","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.cfa40af4.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./LayoutHeader.85946555.js"),["LayoutHeader.85946555.js","entry.a1162545.js","entry.10eae4ea.css","LayoutHeader.vue_used_vue_type_style_index_0_lang.module.57d4f89f.js","LayoutHeader.vue_used_vue_type_style_index_0_lang.b2295632.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./LayoutMainMenu.8e9bb43b.js"),["LayoutMainMenu.8e9bb43b.js","entry.a1162545.js","entry.10eae4ea.css","navigation.c88a11e6.js","LayoutMainMenuToggle.vue_used_vue_type_style_index_0_lang.module.fbcd3219.js","LayoutMainMenuToggle.vue_used_vue_type_style_index_0_lang.17e7aae7.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.a1162545.js").then(t=>t.ap),["entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./LayoutMainMenuToggle.62cc3970.js"),["LayoutMainMenuToggle.62cc3970.js","entry.a1162545.js","entry.10eae4ea.css","LayoutMainMenuToggle.vue_used_vue_type_style_index_0_lang.module.fbcd3219.js","LayoutMainMenuToggle.vue_used_vue_type_style_index_0_lang.17e7aae7.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./LayoutThemeToggle.0b8ad036.js"),["LayoutThemeToggle.0b8ad036.js","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.5f1b7ee4.js","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.cfa40af4.css","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./UiActionButton.dd6e6d76.js"),["UiActionButton.dd6e6d76.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./UiButtonGroup.03df9d51.js"),["UiButtonGroup.03df9d51.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./UiCard.30356a36.js"),["UiCard.30356a36.js","UiCard.vue_used_vue_type_style_index_0_lang.module.a0027dfd.js","UiCard.vue_used_vue_type_style_index_0_lang.7760099e.css","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./UiIconCopy.bfce4552.js"),["UiIconCopy.bfce4552.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./UiStars.f80344a8.js"),["UiStars.f80344a8.js","IconStar.856ef9b4.js","entry.a1162545.js","entry.10eae4ea.css","BioSkills.vue_used_vue_type_style_index_0_lang.module.516c18c9.js","BioSkills.vue_used_vue_type_style_index_0_lang.4d0cadf8.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.a1162545.js").then(t=>t.ao),["entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentList.aa5fabfc.js"),["ContentList.aa5fabfc.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>tt),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.a1162545.js").then(t=>t.an),["entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.a1162545.js").then(t=>t.am),["entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.a1162545.js").then(t=>t.al),["entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentSlot.017eac9c.js"),["ContentSlot.017eac9c.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenEmpty.901ae14d.js"),["DocumentDrivenEmpty.901ae14d.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenNotFound.ac941741.js"),["DocumentDrivenNotFound.ac941741.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Markdown.ca979d4c.js"),["Markdown.ca979d4c.js","ContentSlot.017eac9c.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseBlockquote.cf38769b.js"),["ProseBlockquote.cf38769b.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCodeInline.4d9c4a74.js"),["ProseCodeInline.4d9c4a74.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseEm.f76a6875.js"),["ProseEm.f76a6875.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH1.84254f6d.js"),["ProseH1.84254f6d.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH2.7bcea41b.js"),["ProseH2.7bcea41b.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH3.a0130b89.js"),["ProseH3.a0130b89.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH4.f11e985d.js"),["ProseH4.f11e985d.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH5.9093445b.js"),["ProseH5.9093445b.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH6.b0d8f665.js"),["ProseH6.b0d8f665.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseHr.96616888.js"),["ProseHr.96616888.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseImg.092ce6d9.js"),["ProseImg.092ce6d9.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseLi.03d0a4b8.js"),["ProseLi.03d0a4b8.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseOl.abb4941e.js"),["ProseOl.abb4941e.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseP.b6cc34ce.js"),["ProseP.b6cc34ce.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseStrong.157fed42.js"),["ProseStrong.157fed42.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTable.71457587.js"),["ProseTable.71457587.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTbody.fe1f05e0.js"),["ProseTbody.fe1f05e0.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTd.63f8da62.js"),["ProseTd.63f8da62.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTh.1dca9060.js"),["ProseTh.1dca9060.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseThead.c70e04b7.js"),["ProseThead.c70e04b7.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTr.fcd995d6.js"),["ProseTr.fcd995d6.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseUl.a662ccb8.js"),["ProseUl.a662ccb8.js","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./welcome.02c4460f.js"),["welcome.02c4460f.js","entry.a1162545.js","entry.10eae4ea.css","navigation.c88a11e6.js","ProseCode.vue_used_vue_type_style_index_1_lang.module.230a312a.js","ProseCode.vue_used_vue_type_style_index_1_lang.24930a5d.css","BioSkills.vue_used_vue_type_style_index_0_lang.module.516c18c9.js","BioSkills.vue_used_vue_type_style_index_0_lang.4d0cadf8.css","UiCard.vue_used_vue_type_style_index_0_lang.module.a0027dfd.js","UiCard.vue_used_vue_type_style_index_0_lang.7760099e.css","ContactInformation.vue_used_vue_type_style_index_0_lang.module.80c3b839.js","ContactInformation.vue_used_vue_type_style_index_0_lang.826cd7fe.css","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.5f1b7ee4.js","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.cfa40af4.css","LayoutHeader.vue_used_vue_type_style_index_0_lang.module.57d4f89f.js","LayoutHeader.vue_used_vue_type_style_index_0_lang.b2295632.css","LayoutMainMenuToggle.vue_used_vue_type_style_index_0_lang.module.fbcd3219.js","LayoutMainMenuToggle.vue_used_vue_type_style_index_0_lang.17e7aae7.css","ContentList.aa5fabfc.js","ContentSlot.017eac9c.js","DocumentDrivenEmpty.901ae14d.js","DocumentDrivenNotFound.ac941741.js","Markdown.ca979d4c.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.a1162545.js").then(t=>t.ar),["entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>C),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.5f1b7ee4.js").then(t=>t.c),["LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.5f1b7ee4.js","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.cfa40af4.css","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>q),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.a1162545.js").then(t=>t.ak),["entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>H),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./component.vue3.979a266c.js"),["component.vue3.979a266c.js","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.module.5f1b7ee4.js","LayoutThemeToggle.vue_used_vue_type_style_index_0_lang.cfa40af4.css","entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.a1162545.js").then(t=>t.aq),["entry.a1162545.js","entry.10eae4ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Script));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.NoScript));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Link));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Base));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Title));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Meta));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Style));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Head));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Html));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Body));const Z=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:i}=R(t),o=P(()=>{var _;return typeof((_=i.value)==null?void 0:_.params)=="function"?i.value.params():i.value});if(!o.value&&V("dd-navigation").value){const{navigation:_}=y();return{navigation:_}}const{data:n}=await c(`content-navigation-${b(o.value)}`,()=>N(o.value));return{navigation:n}},render(t){const i=B(),{navigation:o}=t,n=u=>h(x,{to:u._path},()=>u.title),_=(u,E)=>h("ul",E?{"data-level":E}:null,u.map(p=>p.children?h("li",null,[n(p),_(p.children,E+1)]):h("li",null,n(p)))),a=u=>_(u,0);return i!=null&&i.default?i.default({navigation:o,...this.$attrs}):a(o)}}),tt=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{Z as default};
