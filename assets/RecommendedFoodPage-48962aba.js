import{s as n,N as x,r as o,u as g,o as f,j as t,y as u}from"./index-4adb9a73.js";import{g as w,r as b,R as y}from"./randomizeFood-1d33401a.js";const j="/healthy_hub/assets/Ketogenic-f362ff99.png",k=n.main`
  background-color: ${e=>e.theme.colors.primaryBlack};
  color: ${e=>e.theme.colors.primaryWhite};
  font-family: 'Poppins', sans-serif;

  padding-top: 16px;
  padding-bottom: 40px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    padding-top: 24px;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    padding-top: 20px;
  }
`,$=n.div`
  margin: 0 auto;
  width: 320px;
  padding: 0 10px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 834px;
    padding: 0 27px;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    width: 1440px;
    padding: 0 34px;
  }
`,R=n.header`
  display: flex;
  margin-bottom: 16px;
`,q=n(x)`
  display: flex;
  margin-right: 8px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    margin-right: 12px;
  }
`,F=n.img`
  width: 16px;
  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 24px;
  }
`,L=n.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;

  @media screen and (${e=>e.theme.mq.tablet}) {
    font-size: 30px;
    line-height: 36px;
  }
`,v=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (${e=>e.theme.mq.desktop}) {
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
  }
`,B=n.div`
  margin-bottom: 24px;
  width: 300px;
  height: 312px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 380px;
    height: 396px;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    width: 536px;
    height: 560px;
    margin-bottom: 0;
  }
`,C=n.img`
  display: block;
  max-width: 100%;
  height: auto;
`,z=n.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (${e=>e.theme.mq.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    width: calc((100% - 44px) / 2);
  }
`,E="/healthy_hub/assets/arrow-right-246ec13a.svg";function I(){var i;const[e,s]=o.useState([]),d=g(),r=f(),m=o.useRef(((i=r.state)==null?void 0:i.from)??"/main");return o.useEffect(()=>{w().then(a=>{s(b(a,10))}).catch(a=>console.error(a))},[]),t.jsx(k,{children:t.jsxs($,{children:[t.jsxs(R,{children:[t.jsx(q,{to:m.current,onClick:()=>d(u("today")),children:t.jsx(F,{src:E,alt:"arrow right"})}),t.jsx(L,{children:"Recommended food"})]}),t.jsxs(v,{children:[t.jsx(B,{children:t.jsx(C,{src:j,alt:"Banner recommended food"})}),t.jsx(z,{children:e.map(({_id:a,img:c,name:p,amount:h,calories:l})=>t.jsx(y,{id:a,img:c,name:p,amount:h,calories:l},a))})]})]})})}export{I as default};
