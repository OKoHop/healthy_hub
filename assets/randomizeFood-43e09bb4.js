import{s as r,j as s,P as t,I as c}from"./index-8aeed758.js";const l=r.li`
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
`,m=r.div`
  width: 46px;
  height: 46px;
`,p=r.img`
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
`,a=({id:e,img:n,name:i,amount:o,calories:d})=>s.jsxs(l,{children:[s.jsx(m,{children:s.jsx(p,{src:n,alt:i})}),s.jsxs(x,{children:[s.jsx(h,{children:i}),s.jsxs(g,{children:[o," ",s.jsxs("span",{children:[d," calories"]})]})]})]},e);a.propTypes={id:t.string.isRequired,img:t.string.isRequired,name:t.string.isRequired,amount:t.string.isRequired,calories:t.number.isRequired};const f=a,R=async()=>{try{const{data:e}=await c.get("/api/recommended-food");return e}catch{}},b=(e,n=4)=>{const i=[];for(;i.length<n;){const o=Math.floor(Math.random()*e.length);i.includes(o)||i.push(o)}return e.filter((o,d)=>i.includes(d))};export{f as R,R as g,b as r};
