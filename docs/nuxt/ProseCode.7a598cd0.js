import i from"./UiIconCopy.37630346.js";import{a as u,o as t,e as a,f as n,h as s,i as d,t as p,j as m,r as f,k as g}from"./entry.4ee9a191.js";import{s as _}from"./ProseCode.vue_used_vue_type_style_index_1_lang.module.230a312a.js";const h={key:0},y=u({__name:"ProseCode",props:{code:null,language:{default:null},filename:{default:null},highlights:{default:()=>[]}},setup(o){const l=o,r=()=>{navigator.clipboard.writeText(l.code)};return(e,k)=>{const c=i;return t(),a("div",{class:s(e.$style.wrapper)},[n("button",{class:s(e.$style.language),onClick:r},[n("span",{class:s(e.$style.icon)},[d(c,{width:"12",height:"12",fill:"currentColor"})],2),o.language?(t(),a("span",h,p(o.language),1)):m("",!0)],2),f(e.$slots,"default")],2)}}}),C={$style:_},N=g(y,[["__cssModules",C]]);export{N as default};
