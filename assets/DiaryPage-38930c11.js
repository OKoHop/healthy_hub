import{s as n,j as t,e as Y,h as K,E as J,k as W,l as Q,m as X,o as $,P as T,u as Z,r as I,p as ee,q as te,v as ne,w as re,x as ie,N as oe,y as ae,a as g}from"./index-57d80861.js";import{R as se,s as de,c as ce,e as le,f as me,g as pe,b as R,l as N,d as G,a as A}from"./statisticSelectors-fd304642.js";let y=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((o,r)=>(r&=63,r<36?o+=r.toString(36):r<62?o+=(r-26).toString(36).toUpperCase():r>62?o+="-":o+="_",o),"");const he=n.div`
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
`,xe=n.p`
  width: 100%;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 164px;
  }
`,ue=n.p`
  width: 92px;
`,ge=n.p`
  width: 66px;
`,D=n.span`
  color: ${e=>e.theme.colors.primaryGray};
  font-weight: ${e=>e.theme.fontWeights.medium};
`,w=({info:e})=>{const{carbonohidrates:o,protein:r,fat:c}=e;return t.jsxs(he,{children:[t.jsxs(xe,{children:["Carbonohidrates: ",t.jsx(D,{children:o})]}),t.jsxs(ue,{children:["Protein: ",t.jsx(D,{children:r})]}),t.jsxs(ge,{children:["Fat: ",t.jsx(D,{children:c})]})]})},be=n.div`
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
`,je=n.h1`
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
`;const $e=n(Y)`  
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,ye=n.div` 
  margin-bottom: 16px;  
`,we=n.ul`
  padding: 10px;  
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    height: calc(100% - 44px);
    gap: 24px;
  };
 
`,ke=n.li`
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
`,b=n.label`
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
`,f=n(K)`  
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
`,j=n(J)`
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
`;const Me=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    flex-direction: row-reverse;
  };
`,qe=n.button`
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
`,ve=n.button`  
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
`,ze=W({productList:Q().of(W().shape({mealName:X().required("Name is required").trim("Name cannot include leading and trailing spaces").strict(!0),carbonohidrates:$().required("Carbonohidrates is required").typeError("Must be a number").min(0,"Must be a positive number").max(100,"The maximum allowable value is 100").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",e=>/^\d+(\.\d{1})?$/.test(e)),protein:$().required("Protein is required").typeError("Must be a number").min(0,"Must be a positive number").max(100,"The maximum allowable value is 100").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",e=>/^\d+(\.\d{1})?$/.test(e)),fat:$().required("Fat is required").typeError("Must be a number").min(0,"Must be a positive number").max(100,"The maximum allowable value is 100").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",e=>/^\d+(\.\d{1})?$/.test(e)),calories:$().required("Calories is required").typeError("Must be a number").min(0,"Must a be positive number").max(1e3,"The maximum allowable value is 1000").integer("Must be an integer")}))}),Le=document.querySelector("#modal-root"),H=({onClose:e,mealType:o,item:r})=>{const c={productList:[{mealType:o,mealName:(r==null?void 0:r.mealName)??"",carbonohidrates:(r==null?void 0:r.carbohydrate)??"",protein:(r==null?void 0:r.protein)??"",fat:(r==null?void 0:r.fat)??"",calories:(r==null?void 0:r.calories)??""}]},m=Z(),l=a=>{a.code==="Escape"&&e()},u=a=>{a.currentTarget===a.target&&e()},p=async(a,{resetForm:h})=>{await a.productList.forEach(({mealType:i,mealName:x,carbonohidrates:d,protein:s,fat:E,calories:U})=>{const V={mealType:i.toString(),mealName:x.toString(),carbohydrate:d.toFixed(1).toString(),protein:s.toFixed(1).toString(),fat:E.toFixed(1).toString(),calories:U.toString()};m(re({foodId:r._id,data:V}))}),m(ie("today")),h(),e()};return I.useEffect(()=>(document.body.style.overflowY="hidden",window.addEventListener("keydown",l),()=>{document.body.style.overflowY="auto",window.removeEventListener("keydown",l)})),ee.createPortal(t.jsx(be,{onClick:u,children:t.jsxs(fe,{children:[t.jsx(je,{children:"Edit meal"}),t.jsx(te,{initialValues:c,onSubmit:p,validationSchema:ze,children:({values:a})=>t.jsxs($e,{autoComplete:"off",children:[t.jsx(ne,{name:"productList",render:()=>t.jsx(ye,{children:t.jsx(we,{children:a.productList.map((h,i)=>t.jsxs(ke,{children:[t.jsxs(b,{children:[t.jsx("span",{children:"Name"}),t.jsx(f,{type:"text",id:`productList.${i}.mealName`,name:`productList.${i}.mealName`,placeholder:"The name of the product or dish"}),t.jsx(j,{name:`productList.${i}.mealName`,component:"div"})]}),t.jsxs(b,{children:[t.jsx("span",{children:"Carbonoh."}),t.jsx(f,{type:"number",id:`productList.${i}.carbonohidrates`,name:`productList.${i}.carbonohidrates`,placeholder:"Carbonoh."}),t.jsx(j,{name:`productList.${i}.carbonohidrates`,component:"div"})]}),t.jsxs(b,{children:[t.jsx("span",{children:"Protein"}),t.jsx(f,{type:"number",id:`productList.${i}.protein`,name:`productList.${i}.protein`,placeholder:"Protein"}),t.jsx(j,{name:`productList.${i}.protein`,component:"div"})]}),t.jsxs(b,{children:[t.jsx("span",{children:"Fat"}),t.jsx(f,{type:"number",id:`productList.${i}.fat`,name:`productList.${i}.fat`,placeholder:"Fat"}),t.jsx(j,{name:`productList.${i}.fat`,component:"div"})]}),t.jsxs(b,{children:[t.jsx("span",{children:"Calories"}),t.jsx(f,{type:"number",id:`productList.${i}.calories`,name:`productList.${i}.calories`,placeholder:"Calories"}),t.jsx(j,{name:`productList.${i}.calories`,component:"div"})]})]},i))})})}),t.jsxs(Me,{children:[t.jsx(qe,{type:"submit",children:"Confirm"}),t.jsx(ve,{type:"button",onClick:e,children:"Cancel"})]})]})})]})}),Le)};H.propTypes={onClose:T.func.isRequired,mealType:T.string.isRequired};const Se="/healthy_hub/assets/edit-2-cb983d1b.svg",O=n.li`
  display: flex;
  column-gap: 16px;
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 20px;
`,_=n.span`
  min-width: 16px;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  text-align: center;
`,Ce=n.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  row-gap: 6px;
`,Fe=n.p`
  text-transform: capitalize;
  flex-grow: 1;
`,Be=n.button`
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
`,Ie=n.img`
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
`,P=n.p`
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
`,De=n(P)`
  width: 62px;
  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 80px;
  }
`,Pe=n(P)`
  width: 58px;
  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 80px;
  }
`,We=n.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: ${e=>e.theme.colors.primaryLiteGreen};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
`,k=({item:e,index:o,img:r})=>{const[c,m]=I.useState(!1),[l,u]=I.useState(!1),p=()=>m(!c),a=()=>u(!l),{carbohydrate:h,protein:i,fat:x,mealName:d,mealType:s,showButton:E}=e;return t.jsx(t.Fragment,{children:E?t.jsxs(O,{children:[t.jsx(_,{children:o+1}),t.jsx(We,{onClick:p,children:"+ Record your meal"}),c&&t.jsx(se,{onClose:p,image:r,mealType:s})]}):t.jsxs(O,{children:[t.jsx(_,{children:o+1}),s&&t.jsxs(Ce,{children:[t.jsx(Fe,{children:d}),t.jsxs(Be,{type:"button",onClick:a,children:[t.jsx(Ie,{src:Se,alt:"Edit"}),"Edit"]}),t.jsxs(Ee,{children:[t.jsxs(P,{children:[t.jsx("span",{children:"Carb."}),h]}),t.jsxs(De,{children:[t.jsx("span",{children:"Prot."}),i]}),t.jsxs(Pe,{children:[t.jsx("span",{children:"Fat."}),x]})]})]}),l&&t.jsx(H,{onClose:a,mealType:s,item:e})]})})},M=(e,o)=>e.length<=3?[...e,...Array(1).fill({mealType:o,showButton:!0}),...Array(3-e.length).fill({})]:[...e,...Array(1).fill({mealType:o,showButton:!0})],Te="/healthy_hub/assets/arrow-right-3924980b.svg",Re=n.main`
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
`,Ne=n.div`
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
`,Ge=n(oe)`
  display: flex;
  @media screen and (${e=>e.theme.mq.mobMin}) {
    margin-right: 8px;
  }
  @media screen and (${e=>e.theme.mq.tabMin}) {
    margin-right: 12px;
  }
`,Ae=n.img`
  @media screen and (${e=>e.theme.mq.mobMin}) {
    width: 16px;
  }
  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 24px;
  }
`,Oe=n.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    margin-bottom: 24px;

  }
  @media screen and (${e=>e.theme.mq.deskMin}) {
    margin-bottom: 16px;
  }
`,_e=n.h1`
  font-size: ${e=>e.theme.fontSizes.l2};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 1.25;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.xl};
    line-height: 1.2;
  }
`,He=n.ul`
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
`,q=n.li`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    gap: 6px;
  }

  @media screen and (${e=>e.theme.mq.deskMin}) {
    width: calc((100% - 20px) / 2);
  }
`,v=n.div`
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
`,S=n.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`,C=n.h2`
  font-size: ${e=>e.theme.fontSizes.m};
  line-height: 26px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.l};
    line-height: 32px;
  }
`,F=n.ul`
  background-color: ${e=>e.theme.colors.primaryBlack2};
  border-radius:12px;
  height: 232px;
  padding: 16px 12px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    height: 240px;
    padding: 32px 14px;
  }
`,B=n.ul`
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
`,Ye=()=>{var x;const e=ae(),o=I.useRef(((x=e.state)==null?void 0:x.from)??"/main"),r=g(de),c=g(ce),m=g(le),l=g(me),u=g(pe),{breakfast:p,lunch:a,dinner:h,snack:i}=r;return t.jsx(Re,{children:t.jsxs(Ne,{children:[t.jsxs(Oe,{children:[t.jsx(Ge,{to:o.current,children:t.jsx(Ae,{src:Te,alt:"arrow right"})}),t.jsx(_e,{children:"Diary"})]}),t.jsxs(He,{children:[t.jsxs(q,{children:[t.jsxs(v,{children:[t.jsxs(z,{children:[t.jsx(L,{children:t.jsx(S,{src:R,alt:"Plate"})}),t.jsx(C,{children:"Breakfast"})]}),t.jsx(w,{info:p})]}),t.jsx(F,{children:t.jsx(B,{children:M(c,"Breakfast").map((d,s)=>t.jsx(k,{item:d,index:s,img:R},y()))})})]}),t.jsxs(q,{children:[t.jsxs(v,{children:[t.jsxs(z,{children:[t.jsx(L,{children:t.jsx(S,{src:N,alt:"Plate"})}),t.jsx(C,{children:"Lunch"})]}),t.jsx(w,{info:a})]}),t.jsx(F,{children:t.jsx(B,{children:M(m,"Lunch").map((d,s)=>t.jsx(k,{item:d,index:s,img:N},y()))})})]}),t.jsxs(q,{children:[t.jsxs(v,{children:[t.jsxs(z,{children:[t.jsx(L,{children:t.jsx(S,{src:G,alt:"Plate"})}),t.jsx(C,{children:"Dinner"})]}),t.jsx(w,{info:h})]}),t.jsx(F,{children:t.jsx(B,{children:M(l,"Dinner").map((d,s)=>t.jsx(k,{item:d,index:s,img:G},y()))})})]}),t.jsxs(q,{children:[t.jsxs(v,{children:[t.jsxs(z,{children:[t.jsx(L,{children:t.jsx(S,{src:A,alt:"Plate"})}),t.jsx(C,{children:"Snack"})]}),t.jsx(w,{info:i})]}),t.jsx(F,{children:t.jsx(B,{children:M(u,"Snack").map((d,s)=>t.jsx(k,{item:d,index:s,img:A},y()))})})]})]})]})})};export{Ye as default};
