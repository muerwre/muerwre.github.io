import{k as c,Q as _,D as i,$ as u,o as m,c as p,w as d,f as h,h as f,i as y,u as w,a0 as v,a1 as x}from"./entry.ff078795.js";import{f as C}from"./navigation.7e427602.js";const g={__name:"HomeContentList",async setup(M){let e,n;const{data:a}=([e,n]=_(()=>i("navigation",()=>C())),e=await e,n(),e),o=a.value.filter(t=>t.children&&Array.isArray(t.children)&&t.children.length>0);return(t,$)=>{const r=x,l=u("masonry-wall");return m(),p(l,{items:w(o),"ssr-columns":1,"column-width":300,gap:10},{default:d(({item:s})=>[h("div",{class:f(t.$style.row)},[y(r,{title:s.title,url:s.url,children:s.children},null,8,["title","url","children"])],2)]),_:1},8,["items"])}}},A={$style:v},N=c(g,[["__cssModules",A]]);export{N as default};
