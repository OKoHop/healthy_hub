import{s as n,j as t,v as Q,x as X,E as Z,y as W,z as ee,A as te,B as $,P,u as _,r as p,l as ne,C as re,D as ie,G as ae,i as U,N as oe,a as se,H as de}from"./index-53213d88.js";import{t as V,R as ce,s as le,b as A,c as y,l as G,d as N,a as R}from"./calculateTotalIngridients-43f08a99.js";import{B as pe}from"./index-c679a9c7.js";let w=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((a,r)=>(r&=63,r<36?a+=r.toString(36):r<62?a+=(r-26).toString(36).toUpperCase():r>62?a+="-":a+="_",a),"");const he=n.div`
  display: flex;
  row-gap: 12px;
  column-gap: 20px;
  flex-wrap: wrap;

  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 20px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    margin-right: 60px;
    flex-wrap: nowrap;
  }

  @media screen and (${e=>e.theme.mq.deskMin}) {
    margin-right: 25px;
  }
`,me=n.p`
  width: 100%;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 164px;
  }
`,xe=n.p`
  width: 92px;
`,ue=n.p`
  width: 66px;
`,D=n.span`
  color: ${e=>e.theme.colors.primaryGray};
  font-weight: ${e=>e.theme.fontWeights.medium};
`,k=({info:e})=>{const{carbohidrates:a,protein:r,fat:l}=e;return t.jsxs(he,{children:[t.jsxs(me,{children:["Carbonohidrates: ",t.jsx(D,{children:a})]}),t.jsxs(xe,{children:["Protein: ",t.jsx(D,{children:r})]}),t.jsxs(ue,{children:["Fat: ",t.jsx(D,{children:l})]})]})},ge=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,fe=n.div`
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
    height: auto;
    padding: 24px;
  };
`,be=n.h1`
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
`;n.div`
  display: flex; 
  gap: 12px;
  margin-bottom: 16px;
`;n.img`
  width: 32px;
  height: 32px;
`;n.h2`
  font-size: ${e=>e.theme.fontSizes.m};
  line-height: 26px;
  letter-spacing: 0em;  
  color: ${e=>e.theme.colors.primaryWhite};
  
  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.l};
    line-height: 32px;
  };
`;const je=n(Q)`  
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,$e=n.div` 
  margin-bottom: 16px;  
`,ye=n.ul`
  padding: 10px;  
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    height: calc(100% - 44px);
    gap: 24px;
  };
 
`,we=n.li`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(2, 1fr);

  & > label:nth-child(-n + 3){
    grid-column-start: 1;
    grid-column-end: 3;
  };

  @media screen and (${e=>e.theme.mq.tabMin}) {
    grid-template-columns: 41.5% 15% 12.5% 10% 13%;

    & > label:nth-child(1){
      grid-column-start: 1;
      grid-column-end: 2;
    };

    & > label:nth-child(2){
      grid-column-start: 2;
      grid-column-end: 3;
    };

    & > label:nth-child(3){
      grid-column-start: 3;
      grid-column-end: 4;
    };
  }; 
`,f=n.label`
  display: flex;
  flex-direction: column;
  gap: 5px;    

  & > span {
    margin-left: 5px;
    font-size: ${e=>e.theme.fontSizes.xs};
    line-height: 26px;
    letter-spacing: 0em;  
    color: ${e=>e.theme.colors.primaryWhite};
  }
`,b=n(X)`  
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
`,j=n(Z)`
  padding: 0 5px;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0em;
  color: #E74A3B;  
`;n.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;  
`;n.button`
  border: none;
  background-color: transparent;
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  letter-spacing: 0em;  
  color: ${e=>e.theme.colors.primaryGreenLite};
  cursor: pointer; 
`;const ke=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    flex-direction: row-reverse;
  };
`,Me=n.button`
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
`,qe=n.button`  
  padding: 8px 10px;
  width: 100%;
  background-color: transparent;  
  border: 1px solid transparent;
  border-radius: 12px;
  font-size: ${e=>e.theme.fontSizes.xs};
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
`,ve=W({productList:ee().of(W().shape({mealName:te().required("Name is required").trim("Name cannot include leading and trailing spaces").strict(!0),carbonohidrates:$().required("Carbonohidrates is required").typeError("Must be a number").min(0,"Must be a positive number").max(100,"The maximum allowable value is 100").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",e=>/^\d+(\.\d{1})?$/.test(e)),protein:$().required("Protein is required").typeError("Must be a number").min(0,"Must be a positive number").max(100,"The maximum allowable value is 100").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",e=>/^\d+(\.\d{1})?$/.test(e)),fat:$().required("Fat is required").typeError("Must be a number").min(0,"Must be a positive number").max(100,"The maximum allowable value is 100").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",e=>/^\d+(\.\d{1})?$/.test(e)),calories:$().required("Calories is required").typeError("Must be a number").min(0,"Must a be positive number").max(1e3,"The maximum allowable value is 1000").integer("Must be an integer")}))}),Se=document.querySelector("#modal-root"),Y=({onClose:e,mealType:a,item:r})=>{const l={productList:[{mealType:(r==null?void 0:r.type)??"",mealName:(r==null?void 0:r.dish)??"",carbonohidrates:(r==null?void 0:r.carbohidrates)??"",protein:(r==null?void 0:r.protein)??"",fat:(r==null?void 0:r.fat)??"",calories:(r==null?void 0:r.calories)??""}]},x=_(),h=d=>{d.code==="Escape"&&e()},g=d=>{d.currentTarget===d.target&&e()},m=async(d,{resetForm:c})=>{await d.productList.forEach(({mealType:i,mealName:s,carbonohidrates:o,protein:u,fat:C,calories:K})=>{const J={type:i.toString(),dish:s.toString(),carbohidrates:o.toFixed(1).toString(),protein:u.toFixed(1).toString(),fat:C.toFixed(1).toString(),calories:K.toString()};x(ae({foodId:r._id,data:J}))}),x(U(V)),c(),e()};return p.useEffect(()=>(document.body.style.overflowY="hidden",window.addEventListener("keydown",h),()=>{document.body.style.overflowY="auto",window.removeEventListener("keydown",h)})),ne.createPortal(t.jsx(ge,{onClick:g,children:t.jsxs(fe,{children:[t.jsx(be,{children:"Edit meal"}),t.jsx(re,{initialValues:l,onSubmit:m,validationSchema:ve,children:({values:d})=>t.jsxs(je,{autoComplete:"off",children:[t.jsx(ie,{name:"productList",render:()=>t.jsx($e,{children:t.jsx(ye,{children:d.productList.map((c,i)=>t.jsxs(we,{children:[t.jsxs(f,{children:[t.jsx("span",{children:"Name"}),t.jsx(b,{type:"text",id:`productList.${i}.mealName`,name:`productList.${i}.mealName`,placeholder:"The name of the product or dish"}),t.jsx(j,{name:`productList.${i}.mealName`,component:"div"})]}),t.jsxs(f,{children:[t.jsx("span",{children:"Carbonoh."}),t.jsx(b,{type:"number",id:`productList.${i}.carbonohidrates`,name:`productList.${i}.carbonohidrates`,placeholder:"Carbonoh."}),t.jsx(j,{name:`productList.${i}.carbonohidrates`,component:"div"})]}),t.jsxs(f,{children:[t.jsx("span",{children:"Protein"}),t.jsx(b,{type:"number",id:`productList.${i}.protein`,name:`productList.${i}.protein`,placeholder:"Protein"}),t.jsx(j,{name:`productList.${i}.protein`,component:"div"})]}),t.jsxs(f,{children:[t.jsx("span",{children:"Fat"}),t.jsx(b,{type:"number",id:`productList.${i}.fat`,name:`productList.${i}.fat`,placeholder:"Fat"}),t.jsx(j,{name:`productList.${i}.fat`,component:"div"})]}),t.jsxs(f,{children:[t.jsx("span",{children:"Calories"}),t.jsx(b,{type:"number",id:`productList.${i}.calories`,name:`productList.${i}.calories`,placeholder:"Calories"}),t.jsx(j,{name:`productList.${i}.calories`,component:"div"})]})]},i))})})}),t.jsxs(ke,{children:[t.jsx(Me,{type:"submit",children:"Confirm"}),t.jsx(qe,{type:"button",onClick:e,children:"Cancel"})]})]})})]})}),Se)};Y.propTypes={onClose:P.func.isRequired,mealType:P.string.isRequired};const ze="/healthy_hub/assets/edit-2-cb983d1b.svg",O=n.li`
  display: flex;
  column-gap: 16px;
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 20px;
`,H=n.span`
  min-width: 16px;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  text-align: center;
`,Le=n.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  row-gap: 6px;
`,Ie=n.p`
  text-transform: capitalize;
  flex-grow: 1;
`,Fe=n.button`
  padding: 0;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  column-gap: 6px;
  color: ${e=>e.theme.colors.primaryGray};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 20px;
  cursor: pointer;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    order: 1;
  }
`,Be=n.img`
  width: 16px;
  height: 16px;
`,Ee=n.div`
  display: flex;
  column-gap: 12px;
  font-size: 12px;
  line-height: 18px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.xs};
    line-height: 20px;
  }
`,T=n.p`
  display: flex;
  width: 70px;
  column-gap: 6px;

  & > span {
    color: ${e=>e.theme.colors.primaryGray};
  }

  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 80px;

    & > span {
      display: none;
    }
  }
`,Ce=n(T)`
  width: 62px;
  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 80px;
  }
`,De=n(T)`
  width: 58px;
  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 80px;
  }
`,Te=n.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: ${e=>e.theme.colors.primaryGreenLite};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
  transition: ${e=>e.theme.transition.customTrans};
  &:hover {
    text-decoration: underline;
  }
`,M=({item:e,index:a,img:r})=>{const[l,x]=p.useState(!1),[h,g]=p.useState(!1),m=()=>{x(!l)},d=()=>g(!h),{carbohidrates:c,protein:i,fat:s,dish:o,mealType:u,showButton:C}=e;return t.jsx(t.Fragment,{children:C?t.jsxs(O,{children:[t.jsx(H,{children:a+1}),t.jsx(Te,{onClick:m,children:"+ Record your meal"}),l&&t.jsx(ce,{onClose:m,image:r,mealType:u})]}):t.jsxs(O,{children:[t.jsx(H,{children:a+1}),t.jsxs(Le,{children:[t.jsx(Ie,{children:o}),o&&c&&t.jsxs(Fe,{type:"button",onClick:d,children:[t.jsx(Be,{src:ze,alt:"Edit"}),"Edit"]}),t.jsxs(Ee,{children:[t.jsxs(T,{children:[t.jsx("span",{children:"Carb."}),c]}),t.jsxs(Ce,{children:[t.jsx("span",{children:"Prot."}),i]}),t.jsxs(De,{children:[t.jsx("span",{children:"Fat."}),s]})]})]}),h&&t.jsx(Y,{onClose:d,mealType:u,item:e})]})})},q=(e,a)=>e.length<=3?[...e,...Array(1).fill({mealType:a,showButton:!0}),...Array(3-e.length).fill({})]:[...e,...Array(1).fill({mealType:a,showButton:!0})],We=n.main`
  background-color: ${e=>e.theme.colors.primaryBlack};
  color: ${e=>e.theme.colors.primaryWhite};
  padding-top: 16px;
  padding-bottom: 60px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    padding-top: 24px;
    padding-bottom: 20px;
  }
  @media screen and (${e=>e.theme.mq.deskMin}) {
    padding-top: 20px;
  }
`,Pe=n.div`
  margin: 0 auto;
  width: 320px;
  padding: 0 10px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 834px;
    padding: 0 27px;
  }
  @media screen and (${e=>e.theme.mq.deskMin}) {
    width: 1440px;
    padding: 0 34px;
  }
`;n(oe)`
  display: flex;
  @media screen and (${e=>e.theme.mq.mobMin}) {
    margin-right: 8px;
  }
  @media screen and (${e=>e.theme.mq.tabMin}) {
    margin-right: 12px;
  }
`;n.img`
  @media screen and (${e=>e.theme.mq.mobMin}) {
    width: 16px;
  }
  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 24px;
  }
`;const Ae=n.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    margin-bottom: 24px;
  }
  @media screen and (${e=>e.theme.mq.deskMin}) {
    margin-bottom: 16px;
  }
`,Ge=n.h1`
  font-size: ${e=>e.theme.fontSizes.l2};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 1.25;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.xl};
    line-height: 1.2;
  }
`,Ne=n.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (${e=>e.theme.mq.deskMin}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding-bottom: 52px;

    & > li:nth-child(2) {
      order: 2;
    }

    & > li:nth-child(3) {
      order: 1;
    }

    & > li:nth-child(4) {
      order: 3;
    }
  }
`,v=n.li`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    gap: 6px;
  }

  @media screen and (${e=>e.theme.mq.deskMin}) {
    width: calc((100% - 20px) / 2);
  }
`,S=n.div`
  @media screen and (${e=>e.theme.mq.tabMin}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`,z=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    margin-bottom: 0;
  }
`,L=n.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`,I=n.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`,F=n.h2`
  font-size: ${e=>e.theme.fontSizes.m};
  line-height: 26px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.l};
    line-height: 32px;
  }
`,B=n.ul`
  background-color: ${e=>e.theme.colors.primaryBlack2};
  border-radius: 12px;
  height: 232px;
  padding: 16px 12px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    height: 240px;
    padding: 32px 14px;
  }
`,E=n.ul`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  height: 200px;
  overflow-y: auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(41, 41, 40, 0.2);
    border-radius: 12px;
    border: 1px solid rgba(227, 255, 168, 0.2);

    &:hover {
      background-color: rgba(227, 255, 168, 0.2);
    }
  }

  @media screen and (${e=>e.theme.mq.tabMin}) {
    height: 176px;
    row-gap: 32px;
  }
`,_e=()=>{const e=_(),[a,r]=p.useState([]),[l,x]=p.useState([]),[h,g]=p.useState([]),[m,d]=p.useState([]),c=se(le);p.useEffect(()=>{(async()=>{try{await e(U(V))}catch(o){de.error(o)}})()},[e]),p.useEffect(()=>{c&&(r(c.foodIntake.lunch),x(c.foodIntake.breakfast),g(c.foodIntake.dinner),d(c.foodIntake.snack))},[c]);const i=s=>s.filter(u=>u.dish!==null);return t.jsx(We,{children:t.jsxs(Pe,{children:[t.jsxs(Ae,{children:[t.jsx(pe,{}),t.jsx(Ge,{children:"Diary"})]}),t.jsxs(Ne,{children:[t.jsxs(v,{children:[t.jsxs(S,{children:[t.jsxs(z,{children:[t.jsx(L,{children:t.jsx(I,{src:A,alt:"Plate"})}),t.jsx(F,{children:"Breakfast"})]}),t.jsx(k,{info:y(l)})]}),t.jsx(B,{children:t.jsx(E,{children:q(i(l),"Breakfast").map((s,o)=>t.jsx(M,{item:s,index:o,img:A},w()))})})]}),t.jsxs(v,{children:[t.jsxs(S,{children:[t.jsxs(z,{children:[t.jsx(L,{children:t.jsx(I,{src:G,alt:"Plate"})}),t.jsx(F,{children:"Lunch"})]}),t.jsx(k,{info:y(a)})]}),t.jsx(B,{children:t.jsx(E,{children:q(a,"Lunch").map((s,o)=>t.jsx(M,{item:s,index:o,img:G},w()))})})]}),t.jsxs(v,{children:[t.jsxs(S,{children:[t.jsxs(z,{children:[t.jsx(L,{children:t.jsx(I,{src:N,alt:"Plate"})}),t.jsx(F,{children:"Dinner"})]}),t.jsx(k,{info:y(h)})]}),t.jsx(B,{children:t.jsx(E,{children:q(h,"Dinner").map((s,o)=>t.jsx(M,{item:s,index:o,img:N},w()))})})]}),t.jsxs(v,{children:[t.jsxs(S,{children:[t.jsxs(z,{children:[t.jsx(L,{children:t.jsx(I,{src:R,alt:"Plate"})}),t.jsx(F,{children:"Snack"})]}),t.jsx(k,{info:y(m)})]}),t.jsx(B,{children:t.jsx(E,{children:q(m,"Snack").map((s,o)=>t.jsx(M,{item:s,index:o,img:R},w()))})})]})]})]})})};export{_e as default};
