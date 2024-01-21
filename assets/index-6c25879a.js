import{r as t,s as r,N as a,ac as o,j as n}from"./index-61153e53.js";const s=e=>t.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},t.createElement("path",{d:"M9.57001 5.93018L3.50001 12.0002L9.57001 18.0702",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),t.createElement("path",{d:"M20.5 12H3.67",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"})),m=r(a)`
  display: flex;
  @media screen and (${e=>e.theme.mq.mobMin}) {
    margin-right: 8px;
  }
  @media screen and (${e=>e.theme.mq.tabMin}) {
    margin-right: 12px;
  }
`,c=r(s)`
  stroke: ${e=>e.theme.colors.primaryGray};
  transition: ${e=>e.theme.transition.customTrans};
  &:hover {
    stroke: ${e=>e.theme.colors.primaryWhite};
  }
  @media screen and (${e=>e.theme.mq.mobMin}) {
    width: 16px;
  }
  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 24px;
  }
`,d=()=>{const e=o(),i=()=>{e(-1)};return n.jsx(m,{onClick:i,children:n.jsx(c,{})})},k=d;export{k as B};
