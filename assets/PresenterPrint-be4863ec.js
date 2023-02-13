import{h as _,j as d,k as p,ak as h,c as m,al as u,m as n,am as t,an as o,z as s,F as f,ao as v,ap as g,aq as x,q as l,ar as y,as as b,n as k,at as N,au as P,_ as j}from"./nav-59d685f9.js";import{N as w}from"./NoteDisplay-269b722e.js";import{u as S}from"./index-589859e7.js";const V={class:"m-4"},D={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},z={class:"text-lg"},B={class:"font-bold flex gap-2"},C={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),q={key:0,class:"border-gray-400/50 mb-8"},F=_({__name:"PresenterPrint",setup(M){d(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),S({title:`Notes - ${m.title}`});const i=u(()=>x.slice(0,-1).map(a=>{var r;return(r=a.meta)==null?void 0:r.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,r)=>(l(),n("div",{id:"page-root",style:g(s(P))},[t("div",V,[t("div",D,[t("h1",L,o(s(m).title),1),t("div",T,o(new Date().toLocaleString()),1)]),(l(!0),n(f,null,v(s(i),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",z,[t("div",B,[t("div",C,o(e==null?void 0:e.no)+"/"+o(s(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),H])]),k(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(i).length-1?(l(),n("hr",q)):N("v-if",!0)]))),128))])],4))}}),U=j(F,[["__file","/Users/chun/Develop/java-development/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{U as default};
