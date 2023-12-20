import{s as r,j as s,P as o,H as c}from"./index-e539cb58.js";const l=r.li`
  flex-basis: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
  padding: 20px 24px;
  border-radius: 12px;
  background-color: ${e=>e.theme.colors.primaryBlack2};

  @media screen and (${e=>e.theme.mq.tablet}) {
    flex-basis: calc((100% - 20px) / 2);
  }
`,m=r.div`
  width: 46px;
  height: 46px;
`,p=r.img`
  display: block;
  max-width: 100%;
  height: auto;
`,h=r.div`
  display: flex;
  flex-direction: column;
  column-gap: 2px;
`,x=r.p`
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
`,d=({id:e,img:n,name:i,amount:t,calories:a})=>s.jsxs(l,{children:[s.jsx(m,{children:s.jsx(p,{src:n,alt:i})}),s.jsxs(h,{children:[s.jsx(x,{children:i}),s.jsxs(g,{children:[t," ",s.jsxs("span",{children:[a," calories"]})]})]})]},e);d.propTypes={id:o.string.isRequired,img:o.string.isRequired,name:o.string.isRequired,amount:o.string.isRequired,calories:o.number.isRequired};const f=d,b=async()=>{try{const{data:e}=await c.get("/api/user/recommended-food");return e}catch{}},R=(e,n=4)=>{const i=[];for(;i.length<n;){const t=Math.floor(Math.random()*e.length);i.includes(t)||i.push(t)}return e.filter((t,a)=>i.includes(a))};export{f as R,b as g,R as r};
