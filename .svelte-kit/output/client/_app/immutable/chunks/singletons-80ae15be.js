import{B as d,s as v}from"./index-6b7eb8b0.js";const c=[];function b(e,t=d){let n;const s=new Set;function o(a){if(v(e,a)&&(e=a,n)){const u=!c.length;for(const i of s)i[1](),c.push(i,e);if(u){for(let i=0;i<c.length;i+=2)c[i][0](c[i+1]);c.length=0}}}function r(a){o(a(e))}function l(a,u=d){const i=[a,u];return s.add(i),s.size===1&&(n=t(o)||d),a(e),()=>{s.delete(i),s.size===0&&(n(),n=null)}}return{set:o,update:r,subscribe:l}}let h="",m="";function y(e){h=e.base,m=e.assets||h}let w="";function A(e){w=e}const S="sveltekit:scroll",T="sveltekit:index",p={tap:1,hover:2,viewport:3,eager:4,off:-1};function U(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function L(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const g={...p,"":p.hover};function E(e){var n;let t=(n=e.assignedSlot)!=null?n:e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function O(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A")return e;e=E(e)}}function V(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s={rel_external:(e.getAttribute("rel")||"").split(/\s+/).includes("external"),download:e.hasAttribute("download"),target:!!(e instanceof SVGAElement?e.target.baseVal:e.target)},o=!n||k(n,t)||s.rel_external||s.target||s.download;return{url:n,has:s,external:o}}function N(e){let t=null,n=null,s=null,o=null,r=e;for(;r&&r!==document.documentElement;)n===null&&(n=f(r,"preload-code")),s===null&&(s=f(r,"preload-data")),t===null&&(t=f(r,"noscroll")),o===null&&(o=f(r,"reload")),r=E(r);return{preload_code:g[n!=null?n:"off"],preload_data:g[s!=null?s:"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:o==="off"?!1:o===""?!0:null}}function _(e){const t=b(e);let n=!0;function s(){n=!0,t.update(l=>l)}function o(l){n=!1,t.set(l)}function r(l){let a;return t.subscribe(u=>{(a===void 0||n&&u!==a)&&l(a=u)})}return{notify:s,set:o,subscribe:r}}function R(){const{set:e,subscribe:t}=b(!1);let n;async function s(){clearTimeout(n);const o=await fetch(`${m}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const l=(await o.json()).version!==w;return l&&(e(!0),clearTimeout(n)),l}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:t,check:s}}function k(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let x;function $(e){x=e.client}const j={url:_({}),page:_({}),navigating:b(null),updated:R()};export{T as I,p as P,S,V as a,N as b,L as c,y as d,$ as e,O as f,U as g,A as h,k as i,x as j,j as s};
