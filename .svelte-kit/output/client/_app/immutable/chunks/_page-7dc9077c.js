import{_ as t}from"./preload-helper-9b728935.js";import{_ as m}from"./dynamic-import-helper-24e4f478.js";import{m as a}from"./manifest-b48f1968.js";async function i({params:_}){try{const o=a.map(r=>m(Object.assign({"./blog/first-post.md":()=>t(()=>import("./first-post-2ab060dc.js"),["./first-post-2ab060dc.js","./index-6b7eb8b0.js"],import.meta.url),"./blog/internet-delenda-est.md":()=>t(()=>import("./internet-delenda-est-9fcc644b.js"),["./internet-delenda-est-9fcc644b.js","./index-6b7eb8b0.js"],import.meta.url),"./blog/second-post.md":()=>t(()=>import("./second-post-de5b7e31.js"),["./second-post-de5b7e31.js","./index-6b7eb8b0.js"],import.meta.url)}),`./blog/${r}.md`).then(s=>({...s,filename:r})));console.log("promises constructed");const e=await Promise.all(o);return console.log({posts:e}),e}catch(o){console.error("WRONG dynamic import - update the manifest",o)}}const n=!0,d=Object.freeze(Object.defineProperty({__proto__:null,load:i,prerender:n},Symbol.toStringTag,{value:"Module"}));export{d as _,i as l,n as p};
