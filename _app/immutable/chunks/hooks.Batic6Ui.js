import{V as a,A as l}from"./scheduler.ChmZQCZl.js";import{d as v,w as f}from"./index.b5e3vA-J.js";import{f as E,d as _,R as U,U as g,e as A,i as O,g as T,h as m,r as b}from"./routes.BbReXZSi.js";const r=e=>`@@svnav-ctx__${e}`,c=r("ROUTER"),R=r("ROUTE"),p=r("ROUTE_PARAMS");function u(e,t,n=c,s=U){a(n)||E(e,o=>`You cannot use ${o} outside of a ${_(s)}.`,t)}const S=e=>{const{subscribe:t}=a(e);return{subscribe:t}};function d(){const{history:e}=a(c);return e}function I(){const e=a(R);return e?v(e,t=>t.base):f("/")}function h(){u(g);const e=I(),{basepath:t}=a(c);return s=>b(s,l(e),t)}function y(){u(A);const e=h(),{navigate:t}=d();return(s,i)=>{const o=O(s)?s:e(s);return t(o,i)}}function B(){return u(m,null,R,T),S(p)}export{B as a,y as u};
