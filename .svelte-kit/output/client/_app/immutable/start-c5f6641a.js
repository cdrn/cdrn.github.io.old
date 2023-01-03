import{S as ot,i as st,s as it,a as lt,e as C,c as ct,b as K,g as me,t as F,d as _e,f as B,h as J,j as ft,o as $e,k as ut,l as dt,m as pt,n as Se,p as V,q as ht,r as mt,u as _t,v as W,w as Y,x as Ue,y as X,z as Z,A as fe}from"./chunks/index-6b7eb8b0.js";import{S as nt,I as q,g as We,f as Ye,a as Re,b as ue,s as G,i as Xe,c as he,P as Ze,d as gt,e as wt,h as yt}from"./chunks/singletons-80ae15be.js";import{_ as H}from"./chunks/preload-helper-9b728935.js";function bt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function vt(r){return r.split("%25").map(decodeURI).join("%25")}function Et(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const kt=["href","pathname","search","searchParams","toString","toJSON"];function St(r,e){const n=new URL(r);for(const i of kt){let s=n[i];Object.defineProperty(n,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return Rt(n),n}function Rt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const It="/__data.json";function Ot(r){return r.replace(/\/$/,"")+It}function Lt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ge=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const i=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ne.delete(i)}return ge(r,e)};const ne=new Map;function Pt(r,e){const n=rt(r,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:s,...m}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&ne.set(n,{body:s,init:m,ttl:1e3*Number(t)}),Promise.resolve(new Response(s,m))}return ge(r,e)}function $t(r,e,n){if(ne.size>0){const i=rt(r,n),s=ne.get(i);if(s){if(performance.now()<s.ttl)return new Response(s.body,s.init);ne.delete(i)}}return ge(e,n)}function rt(r,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${Lt(e.body)}"]`),i}const jt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function At(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${Ut(r).map(i=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const m=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(m)return e.push({name:m[1],matcher:m[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((h,_)=>{if(_%2){if(h.startsWith("x+"))return Ie(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return Ie(String.fromCharCode(...h.slice(2).split("-").map($=>parseInt($,16))));const w=jt.exec(h);if(!w)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,k,S,U,D]=w;return e.push({name:U,matcher:D,optional:!!k,rest:!!S,chained:S?_===1&&t[0]==="":!1}),S?"(.*?)":k?"([^/]*)?":"([^/]+?)"}return Ie(h)}).join("")}).join("")}/?$`),params:e}}function Nt(r){return!/^\([^)]+\)$/.test(r)}function Ut(r){return r.slice(1).split("/").filter(Nt)}function Tt(r,e,n){const i={},s=r.slice(1);let m="";for(let t=0;t<e.length;t+=1){const f=e[t];let h=s[t];if(f.chained&&f.rest&&m&&(h=h?m+"/"+h:m),m="",h===void 0)f.rest&&(i[f.name]="");else{if(f.matcher&&!n[f.matcher](h)){if(f.optional&&f.chained){let _=s.indexOf(void 0,t);if(_===-1){const w=e[t+1];if((w==null?void 0:w.rest)&&w.chained)m=h;else return}for(;_>=t;)s[_]=s[_-1],_-=1;continue}return}i[f.name]=h}}if(!m)return i}function Ie(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Dt(r,e,n,i){const s=new Set(e);return Object.entries(n).map(([f,[h,_,w]])=>{const{pattern:k,params:S}=At(f),U={id:f,exec:D=>{const $=k.exec(D);if($)return Tt($,S,i)},errors:[1,...w||[]].map(D=>r[D]),layouts:[0,..._||[]].map(t),leaf:m(h)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function m(f){const h=f<0;return h&&(f=~f),[h,r[f]]}function t(f){return f===void 0?f:[s.has(f),r[f]]}}function Vt(r){let e,n,i;var s=r[0][0];function m(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=W(s,m(r))),{c(){e&&Y(e.$$.fragment),n=C()},l(t){e&&Ue(e.$$.fragment,t),n=C()},m(t,f){e&&X(e,t,f),K(t,n,f),i=!0},p(t,f){const h={};if(f&4&&(h.data=t[2]),f&2&&(h.form=t[1]),s!==(s=t[0][0])){if(e){me();const _=e;F(_.$$.fragment,1,0,()=>{Z(_,1)}),_e()}s?(e=W(s,m(t)),Y(e.$$.fragment),B(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else s&&e.$set(h)},i(t){i||(e&&B(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&J(n),e&&Z(e,t)}}}function qt(r){let e,n,i;var s=r[0][0];function m(t){return{props:{data:t[2],$$slots:{default:[Ct]},$$scope:{ctx:t}}}}return s&&(e=W(s,m(r))),{c(){e&&Y(e.$$.fragment),n=C()},l(t){e&&Ue(e.$$.fragment,t),n=C()},m(t,f){e&&X(e,t,f),K(t,n,f),i=!0},p(t,f){const h={};if(f&4&&(h.data=t[2]),f&523&&(h.$$scope={dirty:f,ctx:t}),s!==(s=t[0][0])){if(e){me();const _=e;F(_.$$.fragment,1,0,()=>{Z(_,1)}),_e()}s?(e=W(s,m(t)),Y(e.$$.fragment),B(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else s&&e.$set(h)},i(t){i||(e&&B(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&J(n),e&&Z(e,t)}}}function Ct(r){let e,n,i;var s=r[0][1];function m(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=W(s,m(r))),{c(){e&&Y(e.$$.fragment),n=C()},l(t){e&&Ue(e.$$.fragment,t),n=C()},m(t,f){e&&X(e,t,f),K(t,n,f),i=!0},p(t,f){const h={};if(f&8&&(h.data=t[3]),f&2&&(h.form=t[1]),s!==(s=t[0][1])){if(e){me();const _=e;F(_.$$.fragment,1,0,()=>{Z(_,1)}),_e()}s?(e=W(s,m(t)),Y(e.$$.fragment),B(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else s&&e.$set(h)},i(t){i||(e&&B(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&J(n),e&&Z(e,t)}}}function Qe(r){let e,n=r[5]&&xe(r);return{c(){e=ut("div"),n&&n.c(),this.h()},l(i){e=dt(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=pt(e);n&&n.l(s),s.forEach(J),this.h()},h(){Se(e,"id","svelte-announcer"),Se(e,"aria-live","assertive"),Se(e,"aria-atomic","true"),V(e,"position","absolute"),V(e,"left","0"),V(e,"top","0"),V(e,"clip","rect(0 0 0 0)"),V(e,"clip-path","inset(50%)"),V(e,"overflow","hidden"),V(e,"white-space","nowrap"),V(e,"width","1px"),V(e,"height","1px")},m(i,s){K(i,e,s),n&&n.m(e,null)},p(i,s){i[5]?n?n.p(i,s):(n=xe(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&J(e),n&&n.d()}}}function xe(r){let e;return{c(){e=ht(r[6])},l(n){e=mt(n,r[6])},m(n,i){K(n,e,i)},p(n,i){i&64&&_t(e,n[6])},d(n){n&&J(e)}}}function Ft(r){let e,n,i,s,m;const t=[qt,Vt],f=[];function h(w,k){return w[0][1]?0:1}e=h(r),n=f[e]=t[e](r);let _=r[4]&&Qe(r);return{c(){n.c(),i=lt(),_&&_.c(),s=C()},l(w){n.l(w),i=ct(w),_&&_.l(w),s=C()},m(w,k){f[e].m(w,k),K(w,i,k),_&&_.m(w,k),K(w,s,k),m=!0},p(w,[k]){let S=e;e=h(w),e===S?f[e].p(w,k):(me(),F(f[S],1,1,()=>{f[S]=null}),_e(),n=f[e],n?n.p(w,k):(n=f[e]=t[e](w),n.c()),B(n,1),n.m(i.parentNode,i)),w[4]?_?_.p(w,k):(_=Qe(w),_.c(),_.m(s.parentNode,s)):_&&(_.d(1),_=null)},i(w){m||(B(n),m=!0)},o(w){F(n),m=!1},d(w){f[e].d(w),w&&J(i),_&&_.d(w),w&&J(s)}}}function Bt(r,e,n){let{stores:i}=e,{page:s}=e,{components:m}=e,{form:t}=e,{data_0:f=null}=e,{data_1:h=null}=e;ft(i.page.notify);let _=!1,w=!1,k=null;return $e(()=>{const S=i.page.subscribe(()=>{_&&(n(5,w=!0),n(6,k=document.title||"untitled page"))});return n(4,_=!0),S}),r.$$set=S=>{"stores"in S&&n(7,i=S.stores),"page"in S&&n(8,s=S.page),"components"in S&&n(0,m=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,f=S.data_0),"data_1"in S&&n(3,h=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&i.page.set(s)},[m,t,f,h,_,w,k,i,s]}class Jt extends ot{constructor(e){super(),st(this,e,Bt,Ft,it,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Mt={},we=[()=>H(()=>import("./chunks/0-d7ad1847.js"),["./chunks/0-d7ad1847.js","./components/pages/_layout.svelte-5231de63.js","./chunks/index-6b7eb8b0.js","./chunks/stores-ffd17511.js","./chunks/singletons-80ae15be.js","./assets/_layout-674a921c.css"],import.meta.url),()=>H(()=>import("./chunks/1-9f527738.js"),["./chunks/1-9f527738.js","./components/error.svelte-884e7960.js","./chunks/index-6b7eb8b0.js","./chunks/stores-ffd17511.js","./chunks/singletons-80ae15be.js"],import.meta.url),()=>H(()=>import("./chunks/2-7cf6610e.js"),["./chunks/2-7cf6610e.js","./chunks/_page-1340c2e2.js","./chunks/preload-helper-9b728935.js","./chunks/dynamic-import-helper-24e4f478.js","./chunks/manifest-1352445b.js","./components/pages/_page.svelte-2dcf0da7.js","./chunks/index-6b7eb8b0.js","./chunks/singletons-80ae15be.js"],import.meta.url),()=>H(()=>import("./chunks/3-53db080e.js"),["./chunks/3-53db080e.js","./chunks/_page-0b47f13d.js","./chunks/preload-helper-9b728935.js","./chunks/manifest-1352445b.js","./components/pages/blog/_page.svelte-97f00c05.js","./chunks/index-6b7eb8b0.js"],import.meta.url),()=>H(()=>import("./chunks/4-10546ba5.js"),["./chunks/4-10546ba5.js","./chunks/_page-ced4e5e7.js","./chunks/preload-helper-9b728935.js","./chunks/dynamic-import-helper-24e4f478.js","./components/pages/blog/_slug_/_page.svelte-00befe13.js","./chunks/index-6b7eb8b0.js"],import.meta.url),()=>H(()=>import("./chunks/5-16f5a910.js"),["./chunks/5-16f5a910.js","./chunks/_page-c8e60768.js","./components/pages/projects/_page.svelte-a8839c0f.js","./chunks/index-6b7eb8b0.js","./chunks/stores-ffd17511.js","./chunks/singletons-80ae15be.js"],import.meta.url)],Gt=[],Kt={"/":[2],"/blog":[3],"/blog/[slug]":[4],"/projects":[5]},zt={handleError:({error:r})=>{console.error(r)}};class je{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class et{constructor(e,n){this.status=e,this.location=n}}async function Ht(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([i,s])=>[i,await s])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Wt=-1,Yt=-2,Xt=-3,Zt=-4,Qt=-5,xt=-6;function en(r){if(typeof r=="number")return i(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function i(s,m=!1){if(s===Wt)return;if(s===Xt)return NaN;if(s===Zt)return 1/0;if(s===Qt)return-1/0;if(s===xt)return-0;if(m)throw new Error("Invalid input");if(s in n)return n[s];const t=e[s];if(!t||typeof t!="object")n[s]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[s]=new Date(t[1]);break;case"Set":const h=new Set;n[s]=h;for(let k=1;k<t.length;k+=1)h.add(i(t[k]));break;case"Map":const _=new Map;n[s]=_;for(let k=1;k<t.length;k+=2)_.set(i(t[k]),i(t[k+1]));break;case"RegExp":n[s]=new RegExp(t[1],t[2]);break;case"Object":n[s]=Object(t[1]);break;case"BigInt":n[s]=BigInt(t[1]);break;case"null":const w=Object.create(null);n[s]=w;for(let k=1;k<t.length;k+=2)w[t[k]]=i(t[k+1]);break}else{const f=new Array(t.length);n[s]=f;for(let h=0;h<t.length;h+=1){const _=t[h];_!==Yt&&(f[h]=i(_))}}else{const f={};n[s]=f;for(const h in t){const _=t[h];f[h]=i(_)}}return n[s]}return i(0)}const Oe=Dt(we,Gt,Kt,Mt),Ae=we[0],Ne=we[1];Ae();Ne();let re={};try{re=JSON.parse(sessionStorage[nt])}catch{}function Le(r){re[r]=he()}function tn({target:r,base:e}){var Ke;const n=document.documentElement,i=[];let s=null;const m={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,h=!1,_=!0,w=!1,k=!1,S=!1,U=!1,D,$=(Ke=history.state)==null?void 0:Ke[q];$||($=Date.now(),history.replaceState({...history.state,[q]:$},"",location.href));const ye=re[$];ye&&(history.scrollRestoration="manual",scrollTo(ye.x,ye.y));let M,Te,ae;async function De(){ae=ae||Promise.resolve(),await ae,ae=null;const a=new URL(location.href),o=ie(a,!0);s=null,await qe(o,a,[])}async function be(a,{noScroll:o=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:d=!1},u,E){return typeof a=="string"&&(a=new URL(a,We(document))),le({url:a,scroll:o?he():null,keepfocus:l,redirect_chain:u,details:{state:p,replaceState:c},nav_token:E,accepted:()=>{d&&(U=!0)},blocked:()=>{},type:"goto"})}async function Ve(a){const o=ie(a,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return s={id:o.id,promise:Be(o).then(c=>(c.type==="loaded"&&c.state.error&&(s=null),c))},s.promise}async function oe(...a){const c=Oe.filter(l=>a.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function qe(a,o,c,l,p={},d){var E,b;Te=p;let u=a&&await Be(a);if(u||(u=await Ge(o,{id:null},await te(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(a==null?void 0:a.url)||o,Te!==p)return!1;if(u.type==="redirect")if(c.length>10||c.includes(o.pathname))u=await se({status:500,error:await te(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return be(new URL(u.location,o).href,{},[...c,o.pathname],p),!1;else((b=(E=u.props)==null?void 0:E.page)==null?void 0:b.status)>=400&&await G.updated.check()&&await ce(o);if(i.length=0,U=!1,w=!0,l&&l.details){const{details:y}=l,v=y.replaceState?0:1;y.state[q]=$+=v,history[y.replaceState?"replaceState":"pushState"](y.state,"",o)}if(s=null,h){t=u.state,u.props.page&&(u.props.page.url=o);const y=pe();D.$set(u.props),y()}else Ce(u);if(l){const{scroll:y,keepfocus:v}=l;if(v||Pe(),await fe(),_){const I=o.hash&&document.getElementById(o.hash.slice(1));y?scrollTo(y.x,y.y):I?I.scrollIntoView():scrollTo(0,0)}}else await fe();_=!0,u.props.page&&(M=u.props.page),d&&d(),w=!1}function Ce(a){var p,d;t=a.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),M=a.props.page;const c=pe();D=new Jt({target:r,props:{...a.props,stores:G},hydrate:!0}),c();const l={from:null,to:de("to",{params:t.params,route:{id:(d=(p=t.route)==null?void 0:p.id)!=null?d:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};m.after_navigate.forEach(u=>u(l)),h=!0}async function Q({url:a,params:o,branch:c,status:l,error:p,route:d,form:u}){var A;const E=c.filter(Boolean);let b="never";for(const O of c)(O==null?void 0:O.slash)!==void 0&&(b=O.slash);a.pathname=bt(a.pathname,b),a.search=a.search;const y={type:"loaded",state:{url:a,params:o,branch:c,error:p,route:d},props:{components:E.map(O=>O.node.component)}};u!==void 0&&(y.props.form=u);let v={},I=!M;for(let O=0;O<E.length;O+=1){const j=E[O];v={...v,...j.data},(I||!t.branch.some(T=>T===j))&&(y.props[`data_${O}`]=v,I=I||Object.keys((A=j.data)!=null?A:{}).length>0)}if(I||(I=Object.keys(M.data).length!==Object.keys(v).length),!t.url||a.href!==t.url.href||t.error!==p||u!==void 0||I){y.props.page={error:p,params:o,route:d,status:l,url:new URL(a),form:u!=null?u:null,data:I?v:M.data},Object.defineProperty(y.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const O=(j,T)=>{Object.defineProperty(y.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${T}`)}})};O("origin","origin"),O("path","pathname"),O("query","searchParams")}return y}async function ve({loader:a,parent:o,url:c,params:l,route:p,server_data_node:d}){var y,v,I,N,A,O,j;let u=null;const E={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await a();if((y=b.shared)!=null&&y.load){let T=function(...g){for(const R of g){const{href:L}=new URL(R,c);E.dependencies.add(L)}};const x={route:{get id(){return E.route=!0,p.id}},params:new Proxy(l,{get:(g,R)=>(E.params.add(R),g[R])}),data:(v=d==null?void 0:d.data)!=null?v:null,url:St(c,()=>{E.url=!0}),async fetch(g,R){let L;g instanceof Request?(L=g.url,R={body:g.method==="GET"||g.method==="HEAD"?void 0:await g.blob(),cache:g.cache,credentials:g.credentials,headers:g.headers,integrity:g.integrity,keepalive:g.keepalive,method:g.method,mode:g.mode,redirect:g.redirect,referrer:g.referrer,referrerPolicy:g.referrerPolicy,signal:g.signal,...R}):L=g;const P=new URL(L,c).href;return T(P),h?$t(L,P,R):Pt(L,R)},setHeaders:()=>{},depends:T,parent(){return E.parent=!0,o()}};Object.defineProperties(x,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),u=(I=await b.shared.load.call(null,x))!=null?I:null,u=u?await Ht(u):null}return{node:b,loader:a,server:d,shared:(N=b.shared)!=null&&N.load?{type:"data",data:u,uses:E}:null,data:(A=u!=null?u:d==null?void 0:d.data)!=null?A:null,slash:(j=(O=b.shared)==null?void 0:O.trailingSlash)!=null?j:d==null?void 0:d.slash}}function Fe(a,o,c,l,p){if(U)return!0;if(!l)return!1;if(l.parent&&a||l.route&&o||l.url&&c)return!0;for(const d of l.params)if(p[d]!==t.params[d])return!0;for(const d of l.dependencies)if(i.some(u=>u(new URL(d))))return!0;return!1}function Ee(a,o){var c,l;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((c=a.uses.dependencies)!=null?c:[]),params:new Set((l=a.uses.params)!=null?l:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"&&o!=null?o:null}async function Be({id:a,invalidating:o,url:c,params:l,route:p}){var x;if((s==null?void 0:s.id)===a)return s.promise;const{errors:d,layouts:u,leaf:E}=p,b=[...u,E];d.forEach(g=>g==null?void 0:g().catch(()=>{})),b.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let y=null;const v=t.url?a!==t.url.pathname+t.url.search:!1,I=t.route?a!==t.route.id:!1,N=b.reduce((g,R,L)=>{var ee;const P=t.branch[L],z=!!(R!=null&&R[0])&&((P==null?void 0:P.loader)!==R[1]||Fe(g.some(Boolean),I,v,(ee=P.server)==null?void 0:ee.uses,l));return g.push(z),g},[]);if(N.some(Boolean)){try{y=await tt(c,N)}catch(g){return se({status:500,error:await te(g,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(y.type==="redirect")return y}const A=y==null?void 0:y.nodes;let O=!1;const j=b.map(async(g,R)=>{var ee;if(!g)return;const L=t.branch[R],P=A==null?void 0:A[R];if((!P||P.type==="skip")&&g[1]===(L==null?void 0:L.loader)&&!Fe(O,I,v,(ee=L.shared)==null?void 0:ee.uses,l))return L;if(O=!0,(P==null?void 0:P.type)==="error")throw P;return ve({loader:g[1],url:c,params:l,route:p,parent:async()=>{var He;const ze={};for(let ke=0;ke<R;ke+=1)Object.assign(ze,(He=await j[ke])==null?void 0:He.data);return ze},server_data_node:Ee(P===void 0&&g[0]?{type:"skip"}:P!=null?P:null,L==null?void 0:L.server)})});for(const g of j)g.catch(()=>{});const T=[];for(let g=0;g<b.length;g+=1)if(b[g])try{T.push(await j[g])}catch(R){if(R instanceof et)return{type:"redirect",location:R.location};let L=500,P;A!=null&&A.includes(R)?(L=(x=R.status)!=null?x:L,P=R.error):R instanceof je?(L=R.status,P=R.body):P=await te(R,{params:l,url:c,route:{id:p.id}});const z=await Je(g,T,d);return z?await Q({url:c,params:l,branch:T.slice(0,z.idx).concat(z.node),status:L,error:P,route:p}):await Ge(c,{id:p.id},P,L)}else T.push(void 0);return await Q({url:c,params:l,branch:T,status:200,error:null,route:p,form:o?void 0:null})}async function Je(a,o,c){for(;a--;)if(c[a]){let l=a;for(;!o[l];)l-=1;try{return{idx:l+1,node:{node:await c[a](),loader:c[a],data:{},server:null,shared:null}}}catch{continue}}}async function se({status:a,error:o,url:c,route:l}){var y;const p={},d=await Ae();let u=null;if(d.server)try{const v=await tt(c,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;u=(y=v.nodes[0])!=null?y:null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ce(c)}const E=await ve({loader:Ae,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:Ee(u)}),b={node:await Ne(),loader:Ne,shared:null,server:null,data:null};return await Q({url:c,params:p,branch:[E,b],status:a,error:o,route:null})}function ie(a,o){if(Xe(a,e))return;const c=vt(a.pathname.slice(e.length)||"/");for(const l of Oe){const p=l.exec(c);if(p)return{id:a.pathname+a.search,invalidating:o,route:l,params:Et(p),url:a}}}function Me({url:a,type:o,intent:c,delta:l}){var E,b,y,v,I;let p=!1;const d={from:de("from",{params:t.params,route:{id:(b=(E=t.route)==null?void 0:E.id)!=null?b:null},url:t.url}),to:de("to",{params:(y=c==null?void 0:c.params)!=null?y:null,route:{id:(I=(v=c==null?void 0:c.route)==null?void 0:v.id)!=null?I:null},url:a}),willUnload:!c,type:o};l!==void 0&&(d.delta=l);const u={...d,cancel:()=>{p=!0}};return k||m.before_navigate.forEach(N=>N(u)),p?null:d}async function le({url:a,scroll:o,keepfocus:c,redirect_chain:l,details:p,type:d,delta:u,nav_token:E,accepted:b,blocked:y}){const v=ie(a,!1),I=Me({url:a,type:d,delta:u,intent:v});if(!I){y();return}Le($),b(),k=!0,h&&G.navigating.set(I),await qe(v,a,l,{scroll:o,keepfocus:c,details:p},E,()=>{k=!1,m.after_navigate.forEach(N=>N(I)),G.navigating.set(null)})}async function Ge(a,o,c,l){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await se({status:l,error:c,url:a,route:o}):await ce(a)}function ce(a){return location.href=a.href,new Promise(()=>{})}function at(){let a;n.addEventListener("mousemove",d=>{const u=d.target;clearTimeout(a),a=setTimeout(()=>{l(u,2)},20)});function o(d){l(d.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(d=>{for(const u of d)u.isIntersecting&&(oe(new URL(u.target.href).pathname),c.unobserve(u.target))},{threshold:0});function l(d,u){const E=Ye(d,n);if(!E)return;const{url:b,external:y}=Re(E,e);if(y)return;const v=ue(E);v.reload||(u<=v.preload_data?Ve(b):u<=v.preload_code&&oe(b.pathname))}function p(){c.disconnect();for(const d of n.querySelectorAll("a")){const{url:u,external:E}=Re(d,e);if(E)continue;const b=ue(d);b.reload||(b.preload_code===Ze.viewport&&c.observe(d),b.preload_code===Ze.eager&&oe(u.pathname))}}m.after_navigate.push(p),p()}return{after_navigate:a=>{$e(()=>(m.after_navigate.push(a),()=>{const o=m.after_navigate.indexOf(a);m.after_navigate.splice(o,1)}))},before_navigate:a=>{$e(()=>(m.before_navigate.push(a),()=>{const o=m.before_navigate.indexOf(a);m.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(w||!h)&&(_=!1)},goto:(a,o={})=>{if("keepfocus"in o&&!("keepFocus"in o))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in o&&!("noScroll"in o))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return be(a,o,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")i.push(a);else{const{href:o}=new URL(a,location.href);i.push(c=>c.href===o)}return De()},invalidateAll:()=>(U=!0,De()),preload_data:async a=>{const o=new URL(a,We(document));await Ve(o)},preload_code:oe,apply_action:async a=>{if(a.type==="error"){const o=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await Je(t.branch.length,c,l.errors);if(p){const d=await Q({url:o,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:500,error:a.error,route:l});t=d.state;const u=pe();D.$set(d.props),u(),fe().then(Pe)}}else if(a.type==="redirect")be(a.location,{invalidateAll:!0},[]);else{const o={form:a.data,page:{...M,form:a.data,status:a.status}},c=pe();D.$set(o),c(),a.type==="success"&&fe().then(Pe)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var l,p;let c=!1;if(!k){const d={from:de("from",{params:t.params,route:{id:(p=(l=t.route)==null?void 0:l.id)!=null?p:null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};m.before_navigate.forEach(u=>u(d))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Le($);try{sessionStorage[nt]=JSON.stringify(re)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||at(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=Ye(o.composedPath()[0],n);if(!c)return;const{url:l,external:p,has:d}=Re(c,e),u=ue(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||d.download)return;if(p||u.reload){Me({url:l,type:"link"})||o.preventDefault(),k=!0;return}const[b,y]=l.href.split("#");if(y!==void 0&&b===location.href.split("#")[0]){S=!0,Le($),t.url=l,G.page.set({...M,url:l}),G.page.notify();return}le({url:l,scroll:u.noscroll?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{var b;if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),l=o.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const d=new URL(((b=o.submitter)==null?void 0:b.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(Xe(d,e))return;const{noscroll:u,reload:E}=ue(o.target);E||(o.preventDefault(),o.stopPropagation(),d.search=new URLSearchParams(new FormData(o.target)).toString(),le({url:d,scroll:u?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var c;if((c=o.state)!=null&&c[q]){if(o.state[q]===$)return;const l=o.state[q]-$;le({url:new URL(location.href),scroll:re[o.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{$=o.state[q]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{S&&(S=!1,history.replaceState({...history.state,[q]:++$},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&G.navigating.set(null)})},_hydrate:async({status:a=200,error:o,node_ids:c,params:l,route:p,data:d,form:u})=>{var y;f=!0;const E=new URL(location.href);({params:l={},route:p={id:null}}=ie(E,!1)||{});let b;try{const v=c.map(async(I,N)=>{const A=d[N];return ve({loader:we[I],url:E,params:l,route:p,parent:async()=>{const O={};for(let j=0;j<N;j+=1)Object.assign(O,(await v[j]).data);return O},server_data_node:Ee(A)})});b=await Q({url:E,params:l,branch:await Promise.all(v),status:a,error:o,form:u,route:(y=Oe.find(({id:I})=>I===p.id))!=null?y:null})}catch(v){if(v instanceof et){await ce(new URL(v.location,location.href));return}b=await se({status:v instanceof je?v.status:500,error:await te(v,{url:E,params:l,route:p}),url:E,route:p})}Ce(b)}}}async function tt(r,e){var m;const n=new URL(r);n.pathname=Ot(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await ge(n.href),s=await i.json();if(!i.ok)throw new Error(s);return(m=s.nodes)==null||m.forEach(t=>{var f,h;(t==null?void 0:t.type)==="data"&&(t.data=en(t.data),t.uses={dependencies:new Set((f=t.uses.dependencies)!=null?f:[]),params:new Set((h=t.uses.params)!=null?h:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),s}function te(r,e){var n;return r instanceof je?r.body:(n=zt.handleError({error:r,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}const nn=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function de(r,e){for(const n of nn)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function pe(){return()=>{}}function Pe(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function sn({env:r,hydrate:e,paths:n,target:i,version:s}){gt(n),yt(s);const m=tn({target:i,base:n.base});wt({client:m}),e?await m._hydrate(e):m.goto(location.href,{replaceState:!0}),m._start_router()}export{sn as start};