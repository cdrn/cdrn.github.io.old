import{S as V,i as q,s as C,k as p,q as U,a as b,l as _,m as v,r as g,c as E,h as f,b as D,C as a,u as x,B as G,w as H,I as A,x as S,n as y,y as z,f as B,t as M,z as T}from"../../../chunks/index-1b46ca89.js";function F(d){let e,r,t,s,m,o,h;return{c(){e=p("div"),r=p("div"),t=U(d[0]),s=b(),m=U(d[1]),o=b(),h=U(d[2])},l(l){e=_(l,"DIV",{});var n=v(e);r=_(n,"DIV",{});var c=v(r);t=g(c,d[0]),s=E(c),m=g(c,d[1]),o=E(c),h=g(c,d[2]),c.forEach(f),n.forEach(f)},m(l,n){D(l,e,n),a(e,r),a(r,t),a(r,s),a(r,m),a(r,o),a(r,h)},p(l,[n]){n&1&&x(t,l[0]),n&2&&x(m,l[1]),n&4&&x(h,l[2])},i:G,o:G,d(l){l&&f(e)}}}function J(d,e,r){let{projectName:t=""}=e,{deployedProjectUrl:s=""}=e,{projectGithubUrl:m=""}=e;return d.$$set=o=>{"projectName"in o&&r(0,t=o.projectName),"deployedProjectUrl"in o&&r(1,s=o.deployedProjectUrl),"projectGithubUrl"in o&&r(2,m=o.projectGithubUrl)},[t,s,m]}class K extends V{constructor(e){super(),q(this,e,J,F,C,{projectName:0,deployedProjectUrl:1,projectGithubUrl:2})}}function L(d){let e,r,t,s,m,o,h,l,n,c,u,w;return u=new K({props:{projectName:"hello world",projectDeployedUrl:"https://github.com",projectGithubUrl:"https://github.com"}}),{c(){e=p("meta"),r=b(),t=p("div"),s=p("h1"),m=U("Projects"),o=b(),h=p("p"),l=U("Here's a list of personal projects i've worked on"),n=b(),c=p("div"),H(u.$$.fragment),this.h()},l(i){const P=A("svelte-g7q2io",document.head);e=_(P,"META",{name:!0,content:!0}),P.forEach(f),r=E(i),t=_(i,"DIV",{class:!0});var j=v(t);s=_(j,"H1",{class:!0});var I=v(s);m=g(I,"Projects"),I.forEach(f),o=E(j),h=_(j,"P",{});var N=v(h);l=g(N,"Here's a list of personal projects i've worked on"),N.forEach(f),n=E(j),c=_(j,"DIV",{});var k=v(c);S(u.$$.fragment,k),k.forEach(f),j.forEach(f),this.h()},h(){document.title="Projects",y(e,"name","description"),y(e,"content","A list of the projects i've worked on"),y(s,"class","mb-6 text-3xl"),y(t,"class","flex flex-col max-w-[1000px] mt-10 items-start")},m(i,P){a(document.head,e),D(i,r,P),D(i,t,P),a(t,s),a(s,m),a(t,o),a(t,h),a(h,l),a(t,n),a(t,c),z(u,c,null),w=!0},p:G,i(i){w||(B(u.$$.fragment,i),w=!0)},o(i){M(u.$$.fragment,i),w=!1},d(i){f(e),i&&f(r),i&&f(t),T(u)}}}class Q extends V{constructor(e){super(),q(this,e,null,L,C,{})}}export{Q as default};
