import{s as i,N as p,r as d,j as n}from"./index-9a561cf5.js";import{g as x,r as c,R as h}from"./randomizeFood-b5aad31b.js";import{B as l}from"./index-e8d1bfc9.js";const g="/healthy_hub/assets/Ketogenic-f362ff99.png",f=i.main`
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
`,w=i.div`
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
`,u=i.header`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;i(p)`
  display: flex;
  margin-right: 8px;

  @media screen and (min-width: 834px) {
    margin-right: 12px;
  }
`;i.img`
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
`;const y=i.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`,j=i.div`
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
`;i.div`
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
`;const R=i.img`
  display: block;
  max-width: 100%;
  height: auto;
`,k=i.ul`
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
`;function B(){const[e,a]=d.useState([]);return d.useEffect(()=>{x().then(t=>{a(c(t,10))}).catch(t=>console.error(t))},[]),n.jsx(f,{children:n.jsxs(w,{children:[n.jsxs(u,{children:[n.jsx(l,{}),n.jsx(y,{children:"Recommended food"})]}),n.jsxs(j,{children:[n.jsx(R,{src:g,alt:"Banner recommended food"}),n.jsx(k,{children:e.map(({_id:t,img:o,name:r,amount:s,calories:m})=>n.jsx(h,{id:t,img:o,name:r,amount:s,calories:m},t))})]})]})})}export{B as default};
