import{s as n,N as l,r as a,u as g,x as w,j as e,w as f}from"./index-31c285da.js";import{g as u,r as j,R as y}from"./randomizeFood-5dedabf8.js";const R="/healthy_hub/assets/Ketogenic-f362ff99.png",b=n.main`
  background-color: ${t=>t.theme.colors.primaryBlack};
  color: ${t=>t.theme.colors.primaryWhite};
  font-family: 'Poppins', sans-serif;

  padding-top: 16px;
  padding-bottom: 40px;

  @media screen and (min-width: 320px) {
    padding-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
  }
`,k=n.div`
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
`,F=n.header`
  display: flex;
  margin-bottom: 16px;
`,L=n(l)`
  display: flex;
  margin-right: 8px;

  @media screen and (min-width: 834px) {
    margin-right: 12px;
  }
`,v=n.img`
  width: 16px;
  @media screen and (min-width: 834px) {
    width: 24px;
  }
`,B=n.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`,C=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
  }
`,z=n.div`
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
`,E=n.img`
  display: block;
  max-width: 100%;
  height: auto;
`,P=n.ul`
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
`,A="/healthy_hub/assets/arrow-right-246ec13a.svg";function S(){var d;const[t,o]=a.useState([]),r=g(),s=w(),c=a.useRef(((d=s.state)==null?void 0:d.from)??"/main");return a.useEffect(()=>{u().then(i=>{o(j(i,10))}).catch(i=>console.error(i))},[]),e.jsx(b,{children:e.jsxs(k,{children:[e.jsxs(F,{children:[e.jsx(L,{to:c.current,onClick:()=>r(f("today")),children:e.jsx(v,{src:A,alt:"arrow right"})}),e.jsx(B,{children:"Recommended food"})]}),e.jsxs(C,{children:[e.jsx(z,{children:e.jsx(E,{src:R,alt:"Banner recommended food"})}),e.jsx(P,{children:t.map(({_id:i,img:p,name:m,amount:x,calories:h})=>e.jsx(y,{id:i,img:p,name:m,amount:x,calories:h},i))})]})]})})}export{S as default};
