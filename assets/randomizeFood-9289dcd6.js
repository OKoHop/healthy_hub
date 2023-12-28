import{s as r,j as s,P as o,a1 as c}from"./index-4c2933a5.js";const l=r.li`
  flex-basis: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
  padding: 20px 24px;
  border-radius: 12px;
  background-color: ${e=>e.theme.colors.primaryBlack2};

  @media screen and (min-width: 834px) {
    flex-basis: calc((100% - 20px) / 2);
  }

    @media screen and (min-width: 1440px) {
      flex-basis: calc((676px - 20px) / 2);
  }
`,p=r.div`
  width: 46px;
  height: 46px;
`,m=r.img`
  display: block;
  max-width: 100%;
  height: auto;
`,x=r.div`
  display: flex;
  flex-direction: column;
  column-gap: 2px;
`,h=r.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
`,g=r.p`
  margin-right: 6px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;

  & > span {
    font-weight: 500;
    color: ${e=>e.theme.colors.primaryGray};
  }
`,d=({id:e,img:t,name:i,amount:n,calories:a})=>s.jsxs(l,{children:[s.jsx(p,{children:s.jsx(m,{src:t,alt:i})}),s.jsxs(x,{children:[s.jsx(h,{children:i}),s.jsxs(g,{children:[n," ",s.jsxs("span",{children:[a," calories"]})]})]})]},e);d.propTypes={id:o.string.isRequired,img:o.string.isRequired,name:o.string.isRequired,amount:o.string.isRequired,calories:o.number.isRequired};const f=d,b=async()=>{try{const{data:e}=await c.get("/api/recommended-food");return e}catch{}},w=(e,t=4)=>{const i=[];for(;i.length<t;){const n=Math.floor(Math.random()*e.length);i.includes(n)||i.push(n)}return e.filter((n,a)=>i.includes(a))};export{f as R,b as g,w as r};
