import{F as i,E as r,G as s,_ as p,H as f,I as h}from"./entry.4ee9a191.js";const m=async e=>{let t=e;typeof(t==null?void 0:t.params)=="function"&&(t=t.params());const n=i(t?`/navigation/${r(t)}.json`:"/navigation");if(s())return(await p(()=>import("./client-db.68378479.js"),["client-db.68378479.js","entry.4ee9a191.js","entry.8e071ff5.css"],import.meta.url).then(o=>o.generateNavigation))(t||{});const a=await $fetch(n,{method:"GET",responseType:"json",params:{_params:f(t||{}),previewToken:h("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};export{m as f};
