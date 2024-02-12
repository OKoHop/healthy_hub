import{s as n,N as c,r as d,j as i,L as h}from"./index-5cd8b15c.js";import{g as l,r as g,R as f}from"./randomizeFood-c41cd8bc.js";import{B as w}from"./index-b08c1b17.js";const u="/healthy_hub/assets/Ketogenic-f362ff99.png",y=n.main`
  background-color: ${e=>e.theme.colors.primaryBlack};
  color: ${e=>e.theme.colors.primaryWhite};
  font-family: 'Poppins', sans-serif;

  padding-top: 16px;
  padding-bottom: 40px;

  @media screen and (min-width: 320px) {
    padding-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
  }
`,j=n.div`
  margin: 0 auto;
  width: 320px;
  padding: 0 10px;

  @media screen and (min-width: 834px) {
    width: 834px;
    padding: 0 27px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 34px;
  }
`,k=n.header`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;n(c)`
  display: flex;
  margin-right: 8px;

  @media screen and (min-width: 834px) {
    margin-right: 12px;
  }
`;n.img`
  width: 16px;
  svg {
    &:hover {
      stroke: ${e=>e.theme.colors.primaryWhite};
    }
  }
  transition: ${e=>e.theme.transition.customTrans};

  @media screen and (min-width: 834px) {
    width: 24px;
  }
`;const R=n.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`,b=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (${e=>e.theme.mq.deskMin}) {
    gap: 44px;
    flex-direction: row;
    margin-left: 116px;
  }
`;n.div`
  margin-bottom: 24px;
  width: 300px;
  height: 312px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 396px;
  }

  @media screen and (min-width: 1440px) {
    width: 536px;
    height: 560px;
    margin-bottom: 0;
  }
`;const F=n.img`
  display: block;
  max-width: 100%;
  height: auto;
`,v=n.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (1440px) {
    width: calc((100% - 44px) / 2);
  }
`;function z(){const[e,a]=d.useState(!1),[o,r]=d.useState([]);return d.useEffect(()=>{a(!0),l().then(t=>{r(g(t,10))}).catch(t=>console.error(t)).finally(()=>{a(!1)})},[]),i.jsxs(y,{children:[e&&i.jsx(h,{}),i.jsxs(j,{children:[i.jsxs(k,{children:[i.jsx(w,{}),i.jsx(R,{children:"Recommended food"})]}),i.jsxs(b,{children:[i.jsx(F,{src:u,alt:"Banner recommended food"}),i.jsx(v,{children:o.map(({_id:t,img:s,name:p,amount:m,calories:x})=>i.jsx(f,{id:t,img:s,name:p,amount:m,calories:x},t))})]})]})]})}export{z as default};
