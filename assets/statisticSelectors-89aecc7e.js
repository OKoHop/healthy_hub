import{s,c as M,e as I,E as Q,h as F,k as v,l as O,m as b,P as B,u as L,r as J,o as q,j as r,p as V,q as D,v as W,y as Y,w as T,z as o}from"./index-ecf01c0c.js";const G=s.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,U=s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 558px; 
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  background-color: ${e=>e.theme.colors.primaryBlack2};  
  border-radius: 12px;  
  transform: translate(-50%, -50%) scale(1);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 676px;
    height: 408px;
    padding: 24px;
  };
`,H=s.h1`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 30px;
  letter-spacing: 0em;  
  color: ${e=>e.theme.colors.primaryWhite};

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.xl};
    line-height: 36px;
  };
`,Z=s.div`
  display: flex; 
  gap: 12px;
  margin-bottom: 16px;
`,$=s.img`
  width: 32px;
  height: 32px;
`,_=s.h2`
  font-size: ${e=>e.theme.fontSizes.m};
  line-height: 26px;
  letter-spacing: 0em;  
  color: ${e=>e.theme.colors.primaryWhite};
  
  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.l};
    line-height: 32px;
  };
`,ee=s(M)`  
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,re=s.div`
  max-height: 300px; 
  margin-bottom: 16px;

   @media screen and (${e=>e.theme.mq.tabMin}) {
   max-height: 200px;
  };  
`,te=s.ul`
  padding: 10px;
  overflow-y: auto;
  height: 210px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    height: calc(100% - 44px);
    gap: 24px;
  };
  
  &::-webkit-scrollbar {
    width: 7px;   
  };

  &::-webkit-scrollbar-thumb {
    background-color: rgba(41, 41, 40, 0.2);
    border-radius: 12px;
    border: 1px solid  rgba(227, 255, 168, 0.2);    

    &:hover {
      background-color: rgba(227, 255, 168, 0.2);
    };
  };
`,oe=s.li`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(2, 1fr);

  & > div:nth-child(-n + 3){
    grid-column-start: 1;
    grid-column-end: 4;
  };

  @media screen and (${e=>e.theme.mq.tabMin}) {
    grid-template-columns: 40.5% 15.3% 11.5% 7.5% 13% 2.5%;

    & > div:nth-child(1){
      grid-column-start: 1;
      grid-column-end: 2;
    };

    & > div:nth-child(2){
      grid-column-start: 2;
      grid-column-end: 3;
    };

    & > div:nth-child(3){
      grid-column-start: 3;
      grid-column-end: 4;
    };
  }; 
`,l=s.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,g=s(I)`  
  padding: 8px 10px;
  width: 100%;  
  border: 1px solid ${e=>e.theme.colors.primaryGreenLite};
  border-radius: 12px;
  background-color: ${e=>e.theme.colors.primaryBlack2};  
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 20px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.primaryWhite};
  
  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  };       

  &::placeholder {
    color: ${e=>e.theme.colors.primaryGray};
  };  
`,u=s(Q)`
  padding: 0 5px;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0em;
  color: #E74A3B;  
`,ne=s.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;  
`,se=s.button`
  border: none;
  background-color: transparent;
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  letter-spacing: 0em;  
  color: ${e=>e.theme.colors.primaryGreenLite};
  cursor: pointer; 
`,ae=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    flex-direction: row-reverse;
  };
`,ie=s.button`
  padding: 8px 10px;  
  width: 100%;
  background-color: ${e=>e.theme.colors.primaryGreenLite};
  color: ${e=>e.theme.colors.primaryBlack2};
  border: 1px solid transparent;
  border-radius: 12px;
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  letter-spacing: 0em;
  cursor: pointer;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 212px;
  };
`,ce=s.button`  
  padding: 8px 10px;
  width: 100%;
  background-color: transparent;  
  border: 1px solid transparent;
  border-radius: 12px;
  font-size: ${e=>e.theme.fontSizes.xs};;
  line-height: 20px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.primaryGray};
  cursor: pointer;

  &:hover {
    border: 1px solid ${e=>e.theme.colors.primaryGreenLite};
  }

  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 212px;
  };
`,K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZRdTsJAEIBnWow8SZ8NansDOIEcAWNiIL7AETyB3gCPwIsRSIzhBnoCuQFFGn2tT/jTdpztbpMW+mOJzEN3d36+nZ3ZLcA/C+YZHbprEGjGuv4Iu0+lgQ5NGBa8pNk88JsWXs5KAYUsaXK6CYMPCy9mkJfhO92bHuCApwZsKR6szizsu5pYfELVFTCmmzy2SnBaMgY5vrqZzJLG10saEfxRhK+Iieu0+IKbsBDjGz2cFMHmXCYV5cb1lbygVxq3OWDgw6opyluB7zkB9Y6xM418MDxuRoa8DI0++KZcB2Fd9+GgxpXmGpGhARoqE1OeCu1MIELgSqdg624ngHzHbKnEQiCpDHXQ7UxgGUHQa2n6BNDCrh3fXQN9xvPhIZ4vhI3ntz8QPKscw1MIW5yR0mV0STnX5RPrRxbu7lU0p/AhJK9MKlA5NaBA1AuxC4F8DYb8vXFoNOBMpxm8Fvu0RQlSNkrKnB6NPfhiGPQgP8NhHTv9QmAk8g+kpz5BcVXWm7Ez+QWxMYesx/CgzQAAAABJRU5ErkJggg==",de="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKASURBVHgB7VdBclJBEH0NP6UrJUurjMIJjDfAG+jKZCU5gfEG3CS6kbiwNCdIjpAbQMTSZb4uTKifTzsT8vkNQ/2ZPzNWYSpvAQN097zf/aanAe5wy0HwxDce9AiNpy62apPRY3r9AR7wIjgjRwd1fJR9z4dkA2uOtS/x2sPIYJ3MxMaqTC8Q9BF/bCwfpv/vkCyWmPvCtI+oMGNbS7yMMR9ysd6iHe8THxLbUmJKi9WQD1qIhCF/EbE4rbKtJEjC+R4ePEQ0XM4JskjCKlQSlM4TXG4iEhKgXay17qpsLSUuM5hgw8jgdz7cH/Onc/VutCalsWOtszP+uI8AWEpcPp0qd3v5d5XhN+q1pdTe+8Gf5819yANt2535Nd6afg2pZ/8S26BIex6cqdAggjQ4KtelbkIhr1ISe6zC2t8klgxOz8q1qUFfSD0HnuJ/AyWduQanYY1anuJ4GoQ4XEqPIQSb0jnaVVcHlQQz5HOCHJGgrEYTzVGVrUWD99MyqNnz+EYC+n2C37+kn5DHielXanDRrybBDr0SJSaDoBqTXjCaL3NcPO/QXir9muDit3dm5PJhpd8qWGc8fdcWAa9wsWkLaIMetRJMzmefON2i3cohxNpmYo9cG8jaxdo2amlYCbJoNVfIthEIRi5aTHWT1nAgSKdlQAomSNcTUBEbpzZ7hxJPj8pP3B/zoAtPaF89momvTmw+Tn+E9PCJm/muCKyfnhw0pKHu8ZbaaFvG0NJ5Qjsdm28CByTgvRx0LEauLl1vxi7uRhY0uVy1ITjAaVh4RLsj3dfURu8RDPqqyXVUTCdr1MRPNc5nSJ7NRibXiZpS3a4y/DkK7aN3uHX4CwKp7z58HKkzAAAAAElFTkSuQmCC",Ae=F({productList:v().of(F().shape({mealName:O().required("Name is required").trim("Name cannot include leading and trailing spaces").strict(!0),carbonohidrates:b().required("Carbonohidrates is required").typeError("Must be a number").min(0,"Must be a positive number").max(100,"The maximum allowable value is 100").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",e=>/^\d+(\.\d{1})?$/.test(e)),protein:b().required("Protein is required").typeError("Must be a number").min(0,"Must be a positive number").max(100,"The maximum allowable value is 100").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",e=>/^\d+(\.\d{1})?$/.test(e)),fat:b().required("Fat is required").typeError("Must be a number").min(0,"Must be a positive number").max(100,"The maximum allowable value is 100").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",e=>/^\d+(\.\d{1})?$/.test(e)),calories:b().required("Calories is required").typeError("Must be a number").min(0,"Must a be positive number").max(1e3,"The maximum allowable value is 1000").integer("Must be an integer")}))}),me=document.querySelector("#modal-root"),pe=({onClose:e,image:A,mealType:i,item:t})=>{const C={productList:[{mealType:i,mealName:(t==null?void 0:t.mealName)??"",carbonohidrates:(t==null?void 0:t.carbohydrate)??"",protein:(t==null?void 0:t.protein)??"",fat:(t==null?void 0:t.fat)??"",calories:(t==null?void 0:t.calories)??""}]},p=L(),h=c=>{c.code==="Escape"&&e()},S=c=>{c.currentTarget===c.target&&e()},j=async(c,{resetForm:x})=>{await c.productList.forEach(({mealType:m,mealName:y,carbonohidrates:X,protein:k,fat:n,calories:z})=>{const N={mealType:m.toString(),mealName:y.toString(),carbohydrate:X.toFixed(1).toString(),protein:k.toFixed(1).toString(),fat:n.toFixed(1).toString(),calories:z.toString()};p(t?W({foodId:t._id,data:N}):Y(N))}),p(T("today")),x(),e()};return J.useEffect(()=>(document.body.style.overflowY="hidden",window.addEventListener("keydown",h),()=>{document.body.style.overflowY="auto",window.removeEventListener("keydown",h)})),q.createPortal(r.jsx(G,{onClick:S,children:r.jsxs(U,{children:[r.jsx(H,{children:"Record your meal"}),r.jsxs(Z,{children:[r.jsx($,{src:A,alt:"Plate"}),r.jsx(_,{children:i})]}),r.jsx(V,{initialValues:C,onSubmit:j,validationSchema:Ae,children:({errors:c,touched:x,values:m})=>r.jsxs(ee,{autoComplete:"off",children:[r.jsx(D,{name:"productList",render:({insert:y,remove:X})=>r.jsxs(re,{children:[r.jsx(te,{children:m.productList.map((k,n)=>r.jsxs(oe,{children:[r.jsxs(l,{children:[r.jsx(g,{type:"text",id:`productList.${n}.mealName`,name:`productList.${n}.mealName`,placeholder:"The name of the product or dish"}),r.jsx(u,{name:`productList.${n}.mealName`,component:"div"})]}),r.jsxs(l,{children:[r.jsx(g,{type:"number",id:`productList.${n}.carbonohidrates`,name:`productList.${n}.carbonohidrates`,placeholder:"Carbonoh."}),r.jsx(u,{name:`productList.${n}.carbonohidrates`,component:"div"})]}),r.jsxs(l,{children:[r.jsx(g,{type:"number",id:`productList.${n}.protein`,name:`productList.${n}.protein`,placeholder:"Protein"}),r.jsx(u,{name:`productList.${n}.protein`,component:"div"})]}),r.jsxs(l,{children:[r.jsx(g,{type:"number",id:`productList.${n}.fat`,name:`productList.${n}.fat`,placeholder:"Fat"}),r.jsx(u,{name:`productList.${n}.fat`,component:"div"})]}),r.jsxs(l,{children:[r.jsx(g,{type:"number",id:`productList.${n}.calories`,name:`productList.${n}.calories`,placeholder:"Calories"}),r.jsx(u,{name:`productList.${n}.calories`,component:"div"})]}),m.productList.length>1&&r.jsx(ne,{type:"button",onClick:()=>X(n),children:r.jsx("img",{srcSet:`${K} 1x, ${de} 2x`,width:20,height:20,src:K,alt:"Trash"})})]},n))}),!t&&r.jsx(se,{type:"button",onClick:()=>{y(m.productList.length+1,{mealType:i,mealName:"",carbonohidrates:"",protein:"",fat:"",calories:""})},children:"+ Add more"})]})}),r.jsxs(ae,{children:[r.jsx(ie,{type:"submit",children:"Confirm"}),r.jsx(ce,{type:"button",onClick:e,children:"Cancel"})]})]})})]})}),me)};pe.propTypes={onClose:B.func.isRequired,image:B.string.isRequired,mealType:B.string.isRequired};const Re="data:image/png;base64,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",we="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgbSURBVHgBnVdtbFPnFX58fX19/RFsxw6JA3GctFCCIB8gWKHQjGofldZOaKqUarDR/ei6btLgR39NmqC/9qN/Vk3buj8T1Yo2NGnLpkqtRkeBQIFOpZAQPgYhdihOCEn8fX3ta/vunDfYxNigjCOZmOv3vue8z3nOc85rwTItHo97rVbrbvoMzmWN/mi8EM4WSl7+zSiZib52Z8TvlC/Sf08ahjHs8/kSy9nXsgzHYZvNtv/4zdRr2YLpHZvW6C0LXurxIJkrijVT8QJMejYVzyPktaOz2YadXU2HKZC3KZDIEwXAJybHB0djuQPRRB5JvYyX13vEbx7VWl1XNPKQbXbxPamXKKgSEvT3d2dmsaPbjR9sDhxyuVxv/18B8KnThuXT987eC4d8dvS1ObCx3VG3TtfSGP1sGJ3PbEFrx7q630duZRAlVLaF3ZHQCmlXIzSkBs77p1Jl4Xxj0Im9m5obOmcb//wjwESdc4tpolwysJMQ8DpkHL24EOY9M5lMPx6HAJ+cF/ILlEOxwVIzaeNcLgciIpLzMVwa+RvWDLyAtlDPYirMDIq5BLTUXdgcAfhW94r3OCVHvpjHi+s8dUjUIFBxzidf6pwd67qOYrEIp9MJu92O+N1JOFxNCD21AaY+C23mC8xOnCfnC7D71sAT7Km+7yXO7Nnsx8fXkuFsSfqU+VUXQDabPXg2kg17VLlKNrZSqQRN06CqKoiU1efzM5PwNTcjNv4xZm6cQ04roHXNTqykjyfQAT1viHeXBvE8oUrk5Ko6WJMChv7oaGpyKlHAz55bWWU5b5DP58Wpl1py7g6mb34Gt9OOhbk5BEKb0P50XXpRKBREuvhTsQ+vJBHyKegJyF2cCoEAR3R6MsO1W1NijZwXDR0lbQZOuxWJeBKdfS82dM6mKApIC0QKKxbyKkI3ZFk+IFLA+RiZTL+2o7uWdAz7w87TsxHEro4gMx/F3TtfYSIyDY+/Hdl8BsPnf4/4wu26IDh1jETFeqmiSEVxYiK7j31LdPrd0bhRVTXch/5hM7QkMol7kK0lFAiZdDYHB/FFrDdyiKVjMLNpNDJJkmpQ2LO5GSzj7JtTMCgk1GevLmC2qzYrpseO49onfxTPFm5fgaSoKBY0cfo8xWi1Shj7/N+InfsnNrRshuppRS4xja++/AhGXqvux+TlPSvGxBslSbdYLIPyvFbsZwl9fgn8jMDU6b+gWCqja/v3xDPFHcB/z3+IYFcnbFSG/qYVVJoarp8/hsz4NVJF4FLuD9j63a0kzRY0d2+hdc6GiDDPWBu4qckUSTi6UKgh373rZ7CiYyNa126BlpzDxJm/wukLYn70HORiDqrPj+mJ6xg9dhbxySjMYhllgljihnR1NbYNDcHpCeBx9vJ6L5HRCMuyZPH2LpHaErG8kImjc+CbSJHY8HfOXjGbxML4Fdy5MAq7w4580YSS1onpwHTGgJ3SoRNilz85gW17f17nsFwu1z3LEA/qeoFBjkzKEpPONMtEuCxsigPJmTuYzxqYiWvQsjpsZgketw0txB2nbKWykuBXbSjoBbz7o1dx5fi/HjgnmZ4eO4Ybp/5cF4TkVuQEc6BiqrcVFmoks5Fx2FU3FqKX0RRcCz0WA6tkwOOAqiyyX9MNFIhcKaNIvDGRLVI7zhepGlL404HXMXvrunB+89QR2ncVPK3dVT/cJSlzCTnks0USuRJPOOgkhWLr3P6KEBG2Z17YJ8g0MnZOwOi475xNoUqxUIm1eRSUK6VOP+fLiyWnxedw49ZpBAe+A+1eBN5wb/VdCy3pDaoRyadKl9gxiVHDfFWYPLj/V5CsFswlddyeXVxrsB/JglDQBa1cEhyIUw+gqhekTE1fRrDv21SGMlXFJijq4l6MeDRhgEc45sCJXup+LI/Vk92X0KXmXTOA1lAYLpcCl1NBjqDWKQV2iWMw0R5QRH0zH2yEikpl2vvSG1jRshqKy1fTDxjtkFc0tpMS1fywS7EKHlS4wMq1FAUtv3jiVb1fEw4dCm1GrPc4bWC0DUqmjdJhSiVRMWlZxeodu2oOsDQAkeZmOx9yWObpNZ1Ov0/SuP8DGhq4GwroSb14BmAtjyWv0ilpA1cAKc1AOkddjoJ02Oik1BGdxP5kJgPT7obs8WPw1R/iW0PfF/twQ+P5YanxvPjeK52H3W53QpQhyeSvuUuJ3NxPBaPAQXAjeXrlVvxn4jT8W3ehZHViQ3cA7X4XndgKPWfgbkFFKpNHcN16vHX4KHa//iacKzxC/ytkrhjPidz4eGIWfvgf7ssbg+q7/P3Ihfka2PjDSAw9ux+rwj0YfPMXuHBtlk6sI01CNDOXwdTkFNp6n8WP3/kN2jpC1ZOzkd4/cE5E5wl7z4CvOq5Xf+XWSJPwlzyMsixXUlExJiWjwgH9451f0uiVgkJVkUun0LZ2Pb7xxltiHfcR5g/1+xrnjO5vCfqh/uZIX6e/q/L8kUMpTy17N/lrgqi0af7LgXCH46AqKWvkuOL8g0cMpXX3Ah6dJ+bzf+cg+MWfbl9ZFagnMbrYCOgbOW8YAFsFibPRbJgHld6HpuTlOuZ8j03n8JPnWiJNVrPhxeSxd0Mqz0NHLsRpXkyLa1YyV6aRShWzYyPjHp+iq9mpW2l46EISpsraQOSmVB161GV1WZdTyvehM1FtHzeQKR7f9KIYLj2OB+LCSsrNinoLXIqU2PVU0/tc3k98OW0QiJjhiGhfX9DLfWMxLSxbJXHBcJPDDp8SaXHZLhJBT7K6Lvd6/j9fJx76zWLtnAAAAABJRU5ErkJggg==",Ee="data:image/png;base64,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",Pe="data:image/png;base64,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",d=e=>e.stats.info.food,f=(e,A)=>e.filter(({mealType:i})=>i===A),R=o([d],e=>!e||e.length===0?[]:f(e,"Breakfast")),w=o([d],e=>!e||e.length===0?[]:f(e,"Lunch")),E=o([d],e=>!e||e.length===0?[]:f(e,"Dinner")),P=o([d],e=>!e||e.length===0?[]:f(e,"Snack")),a=(e,A)=>e.reduce((i,t)=>i+=t[A],0),le=o([R],e=>a(e,"carbohydrate")),ge=o([R],e=>a(e,"protein")),ue=o([R],e=>a(e,"fat")),he=o([w],e=>a(e,"carbohydrate")),xe=o([w],e=>a(e,"protein")),be=o([w],e=>a(e,"fat")),fe=o([E],e=>a(e,"carbohydrate")),Ce=o([E],e=>a(e,"protein")),Se=o([E],e=>a(e,"fat")),je=o([P],e=>a(e,"carbohydrate")),ye=o([P],e=>a(e,"protein")),Xe=o([P],e=>a(e,"fat"));o([d],e=>a(e,"carbohydrate"));o([d],e=>a(e,"protein"));o([d],e=>a(e,"fat"));o([d],e=>a(e,"calories"));const ke=o([le,ge,ue,he,xe,be,fe,Ce,Se,je,ye,Xe],(e,A,i,t,C,p,h,S,j,c,x,m)=>({breakfast:{carbonohidrates:e,protein:A,fat:i},lunch:{carbonohidrates:t,protein:C,fat:p},dinner:{carbonohidrates:h,protein:S,fat:j},snack:{carbonohidrates:c,protein:x,fat:m}}));export{pe as R,Pe as a,Re as b,R as c,we as d,w as e,E as f,P as g,Ee as l,ke as s};
