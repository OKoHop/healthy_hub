import{s as o,j as i,P as t,y as d}from"./index-38fd0f65.js";const l=o.li`
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
`,m=o.div`
  width: 46px;
  height: 46px;
`,p=o.img`
  display: block;
  max-width: 100%;
  height: auto;
`,h=o.div`
  display: flex;
  flex-direction: column;
  column-gap: 2px;
`,x=o.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
`,g=o.p`
  margin-right: 6px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;

  & > span {
    font-weight: 500;
    color: ${e=>e.theme.colors.primaryGray};
  }
`,c=({id:e,img:n,name:s,amount:r,calories:a})=>i.jsxs(l,{children:[i.jsx(m,{children:i.jsx(p,{src:n,alt:s})}),i.jsxs(h,{children:[i.jsx(x,{children:s}),i.jsxs(g,{children:[r," ",i.jsxs("span",{children:[a," calories"]})]})]})]},e);c.propTypes={id:t.string.isRequired,img:t.string.isRequired,name:t.string.isRequired,amount:t.string.isRequired,calories:t.number.isRequired};const f=c,b=async()=>{try{const{data:e}=await d.get("/api/user/recommended-food");return e}catch(e){console.log(e)}},y=(e,n=4)=>{const s=[];for(;s.length<n;){const r=Math.floor(Math.random()*e.length);s.includes(r)||s.push(r)}return e.filter((r,a)=>s.includes(a))};export{f as R,b as g,y as r};
