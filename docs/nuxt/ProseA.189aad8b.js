import{a as o,o as l,c as s,w as c,r as f,b as u}from"./entry.0ac1105a.js";const i=o({__name:"ProseA",props:{href:{default:""},blank:{type:Boolean,default:!1}},setup(t){const a=e=>!e.match(/^\w+\:\/\//),n=e=>a(e)?e.toLowerCase().replaceAll("%20"," ").replace(/\d+/g,"").trim().replaceAll(" ","-"):e;return(e,p)=>{const r=u;return l(),s(r,{href:n(t.href),target:a(t.href)?"":"_blank"},{default:c(()=>[f(e.$slots,"default")]),_:3},8,["href","target"])}}});export{i as default};
