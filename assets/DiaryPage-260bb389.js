import{s as n,j as t,v as Q,x as X,E as Z,y as A,z as ee,A as te,B as w,P as ne,r as l,b as P,k as re,C as ie,D as oe,G as ae,f as G,t as N,H as se,N as de,a as ce,I as le}from"./index-61153e53.js";import{R as pe,i as he,s as me,b as O,c as k,l as _,d as H,a as U}from"./calculateTotalIngridients-7481a188.js";import{B as xe}from"./index-6c25879a.js";let M=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((r,o)=>(o&=63,o<36?r+=o.toString(36):o<62?r+=(o-26).toString(36).toUpperCase():o>62?r+="-":r+="_",r),"");const ue=n.div`
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
`,ge=n.p`
  width: 100%;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 164px;
  }
`,fe=n.p`
  width: 92px;
`,be=n.p`
  width: 66px;
`,T=n.span`
  color: ${e=>e.theme.colors.primaryGray};
  font-weight: ${e=>e.theme.fontWeights.medium};
`,q=({info:e})=>{const{carbohidrates:r,protein:o,fat:s}=e;return t.jsxs(ue,{children:[t.jsxs(ge,{children:["Carbonohidrates: ",t.jsx(T,{children:r})]}),t.jsxs(fe,{children:["Protein: ",t.jsx(T,{children:o})]}),t.jsxs(be,{children:["Fat: ",t.jsx(T,{children:s})]})]})},je=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,$e=n.div`
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
  transition:
    transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 300ms;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 676px;
    height: auto;
    padding: 24px;
  }
`,ye=n.h1`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 30px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.primaryWhite};

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.xl};
    line-height: 36px;
  }
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
  }
`;const we=n(Q)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,ke=n.div`
  margin-bottom: 16px;
`,Me=n.ul`
  padding: 10px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    height: calc(100% - 44px);
    gap: 24px;
  }
`,qe=n.li`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(2, 1fr);

  & > label:nth-child(-n + 3) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  @media screen and (${e=>e.theme.mq.tabMin}) {
    grid-template-columns: 41.5% 15% 12.5% 10% 13%;

    & > label:nth-child(1) {
      grid-column-start: 1;
      grid-column-end: 2;
    }

    & > label:nth-child(2) {
      grid-column-start: 2;
      grid-column-end: 3;
    }

    & > label:nth-child(3) {
      grid-column-start: 3;
      grid-column-end: 4;
    }
  }
`,f=n.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
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
  outline: none;

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${e=>e.theme.colors.primaryGray};
  }

  &:focus {
    border: 1px solid ${e=>e.theme.colors.primaryWhite};
  }
`,j=n(Z)`
  padding: 0 5px;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0em;
  color: #e74a3b;
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
`;const ve=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    flex-direction: row-reverse;
  }
`,Se=n.button`
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
  transition: ${e=>e.theme.transition.customTrans};
  cursor: pointer;
  &:hover {
    color: ${e=>e.theme.colors.primaryWhite};
    background-color: transparent;
    border: 1px solid ${e=>e.theme.colors.primaryGreenLite};
  }

  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 212px;
  }
`,ze=n.button`
  padding: 8px 10px;
  width: 100%;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 12px;
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 20px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.primaryGray};
  transition: ${e=>e.theme.transition.customTrans};
  cursor: pointer;
  &:hover {
    border: 1px solid ${e=>e.theme.colors.primaryGreenLite};
  }

  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 212px;
  }
`,Le=A({productList:ee().of(A().shape({mealName:te().required("Name is required").trim("Name cannot include leading and trailing spaces").strict(!0),carbonohidrates:w().required("Carbohydrates is required").typeError("Must be a number").min(0,"Must be a positive number").max(500,"The maximum allowable value is 100").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",e=>/^\d+(\.\d{1})?$/.test(e)),protein:w().required("Protein is required").typeError("Must be a number").min(0,"Must be a positive number").max(500,"The maximum allowable value is 100").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",e=>/^\d+(\.\d{1})?$/.test(e)),fat:w().required("Fat is required").typeError("Must be a number").min(0,"Must be a positive number").max(500,"The maximum allowable value is 100").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",e=>/^\d+(\.\d{1})?$/.test(e)),calories:w().required("Calories is required").typeError("Must be a number").min(0,"Must a be positive number").max(2e3,"The maximum allowable value is 1000").integer("Must be an integer")}))}),Ie=document.querySelector("#modal-root"),K=({onClose:e,item:r,mealType:o})=>{const[s,m]=l.useState(!1),h={productList:[{mealName:(r==null?void 0:r.dish)??"",carbonohidrates:(r==null?void 0:r.carbohidrates)??"",protein:(r==null?void 0:r.protein)??"",fat:(r==null?void 0:r.fat)??"",calories:(r==null?void 0:r.calories)??""}]},x=P(),p=d=>{d.code==="Escape"&&e()},u=d=>{d.currentTarget===d.target&&e()},c=async(d,{resetForm:a})=>{m(!0),await d.productList.map(async({mealName:i,carbonohidrates:g,protein:$,fat:y,calories:W})=>{const J={type:o.toLowerCase(),dish:i.toString(),carbohidrates:g.toFixed(1).toString(),protein:$.toFixed(1).toString(),fat:y.toFixed(1).toString(),calories:W.toString()};await x(ae({foodId:r._id,data:J})),await x(G(N)),a(),e()})};return l.useEffect(()=>(document.body.style.overflowY="hidden",window.addEventListener("keydown",p),()=>{document.body.style.overflowY="auto",window.removeEventListener("keydown",p)})),re.createPortal(t.jsx(je,{onClick:u,children:t.jsxs($e,{children:[t.jsx(ye,{children:"Edit meal"}),t.jsx(ie,{initialValues:h,onSubmit:c,validationSchema:Le,children:({values:d})=>t.jsxs(we,{autoComplete:"off",children:[t.jsx(oe,{name:"productList",render:()=>t.jsx(ke,{children:t.jsx(Me,{children:d.productList.map((a,i)=>t.jsxs(qe,{children:[t.jsxs(f,{children:[t.jsx("span",{children:"Name"}),t.jsx(b,{type:"text",id:`productList.${i}.mealName`,name:`productList.${i}.mealName`,placeholder:"The name of the product or dish"}),t.jsx(j,{name:`productList.${i}.mealName`,component:"div"})]}),t.jsxs(f,{children:[t.jsx("span",{children:"Carbonoh."}),t.jsx(b,{type:"number",id:`productList.${i}.carbonohidrates`,name:`productList.${i}.carbonohidrates`,placeholder:"Carbonoh."}),t.jsx(j,{name:`productList.${i}.carbonohidrates`,component:"div"})]}),t.jsxs(f,{children:[t.jsx("span",{children:"Protein"}),t.jsx(b,{type:"number",id:`productList.${i}.protein`,name:`productList.${i}.protein`,placeholder:"Protein"}),t.jsx(j,{name:`productList.${i}.protein`,component:"div"})]}),t.jsxs(f,{children:[t.jsx("span",{children:"Fat"}),t.jsx(b,{type:"number",id:`productList.${i}.fat`,name:`productList.${i}.fat`,placeholder:"Fat"}),t.jsx(j,{name:`productList.${i}.fat`,component:"div"})]}),t.jsxs(f,{children:[t.jsx("span",{children:"Calories"}),t.jsx(b,{type:"number",id:`productList.${i}.calories`,name:`productList.${i}.calories`,placeholder:"Calories"}),t.jsx(j,{name:`productList.${i}.calories`,component:"div"})]})]},i))})})}),t.jsxs(ve,{children:[t.jsx(Se,{type:"submit",disabled:s,children:s?"Updating...":"Confirm"}),t.jsx(ze,{type:"button",onClick:e,children:"Cancel"})]})]})})]})}),Ie)};K.propTypes={onClose:ne.func.isRequired};const Fe="/healthy_hub/assets/edit-2-cb983d1b.svg",V=n.li`
  display: flex;
  column-gap: 16px;
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 20px;
`,Y=n.span`
  min-width: 16px;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  text-align: center;
`,Be=n.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  row-gap: 6px;
`,Ce=n.p`
  text-transform: capitalize;
  flex-grow: 1;
`,De=n.div`
  display: flex;
  align-items: flex-start;
  transition: ${e=>e.theme.transition.customTrans};
  img {
    width: 16px;
    height: 16px;
  }
  @media screen and (${e=>e.theme.mq.tabMin}) {
    order: 1;
  }
`,Ee=n.button`
  padding: 0;
  border: none;
  background-color: transparent;
  display: flex;
  column-gap: 6px;
  color: ${e=>e.theme.colors.primaryGray};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 20px;
  cursor: pointer;
  &:hover {
    color: ${e=>e.theme.colors.primaryWhite};
  }
`,We=n.button`
  border: none;
  background-color: transparent;
  @media screen and (${e=>e.theme.mq.tabMin}) {
    order: 1;
  }
  &:hover {
    transform: scale(1.1);
  }
`,Te=n.img`
  width: 16px;
  height: 16px;
`,Pe=n.div`
  display: flex;
  column-gap: 12px;
  font-size: 12px;
  line-height: 18px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.xs};
    line-height: 20px;
  }
`,R=n.p`
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
`,Ge=n(R)`
  width: 62px;
  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 80px;
  }
`,Ne=n(R)`
  width: 58px;
  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 80px;
  }
`,Re=n.button`
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
`,v=({item:e,index:r,img:o,mealType:s})=>{const m=P(),[h,x]=l.useState(!1),[p,u]=l.useState(!1),{carbohidrates:c,protein:d,fat:a,dish:i,showButton:g}=e,$=()=>{x(!h)},y=()=>{u(!p)},W=async()=>{console.log(e._id,s),e&&e._id&&(await m(se({foodId:e._id,foodIntakeName:s})),await m(G(N)))};return t.jsx(t.Fragment,{children:g?t.jsxs(V,{children:[t.jsx(Y,{children:r+1}),t.jsx(Re,{onClick:$,children:"+ Record your meal"}),h&&t.jsx(pe,{onClose:$,image:o,mealType:s})]}):t.jsxs(V,{children:[t.jsx(Y,{children:r+1}),t.jsxs(Be,{children:[t.jsx(Ce,{children:i}),i&&t.jsxs(De,{children:[t.jsxs(Ee,{type:"button",onClick:y,children:[t.jsx(Te,{src:Fe,alt:"Edit"}),"Edit"]}),t.jsx(We,{type:"button",onClick:W,children:t.jsx("img",{src:he,alt:"Trash"})})]}),t.jsxs(Pe,{children:[t.jsxs(R,{children:[t.jsx("span",{children:"Carb."}),c]}),t.jsxs(Ge,{children:[t.jsx("span",{children:"Prot."}),d]}),t.jsxs(Ne,{children:[t.jsx("span",{children:"Fat."}),a]})]})]}),p&&t.jsx(K,{onClose:y,item:e,mealType:s})]})})},S=(e,r)=>e.length<=3?[...e,...Array(1).fill({mealType:r,showButton:!0}),...Array(3-e.length).fill({})]:[...e,...Array(1).fill({mealType:r,showButton:!0})],Ae=n.main`
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
`,Oe=n.div`
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
`;n(de)`
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
`;const _e=n.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    margin-bottom: 24px;
  }
  @media screen and (${e=>e.theme.mq.deskMin}) {
    margin-bottom: 16px;
  }
`,He=n.h1`
  font-size: ${e=>e.theme.fontSizes.l2};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 1.25;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.xl};
    line-height: 1.2;
  }
`,Ue=n.ul`
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
`,z=n.li`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    gap: 6px;
  }

  @media screen and (${e=>e.theme.mq.deskMin}) {
    width: calc((100% - 20px) / 2);
  }
`,L=n.div`
  @media screen and (${e=>e.theme.mq.tabMin}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`,I=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    margin-bottom: 0;
  }
`,F=n.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`,B=n.img`
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
`,D=n.ul`
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
  row-gap: 20px;
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
`,Je=()=>{const e=P(),[r,o]=l.useState([]),[s,m]=l.useState([]),[h,x]=l.useState([]),[p,u]=l.useState([]),c=ce(me);l.useEffect(()=>{(async()=>{try{await e(G(N))}catch(i){le.error(i)}})()},[e]),l.useEffect(()=>{c&&(o(c.foodIntake.lunch),m(c.foodIntake.breakfast),x(c.foodIntake.dinner),u(c.foodIntake.snack))},[c]);const d=a=>a.filter(g=>g.dish!==null);return t.jsx(Ae,{children:t.jsxs(Oe,{children:[t.jsxs(_e,{children:[t.jsx(xe,{}),t.jsx(He,{children:"Diary"})]}),t.jsxs(Ue,{children:[t.jsxs(z,{children:[t.jsxs(L,{children:[t.jsxs(I,{children:[t.jsx(F,{children:t.jsx(B,{src:O,alt:"Plate"})}),t.jsx(C,{children:"Breakfast"})]}),t.jsx(q,{info:k(s)})]}),t.jsx(D,{children:t.jsx(E,{children:S(d(s),"Breakfast").map((a,i)=>t.jsx(v,{item:a,index:i,img:O,mealType:"breakfast"},M()))})})]}),t.jsxs(z,{children:[t.jsxs(L,{children:[t.jsxs(I,{children:[t.jsx(F,{children:t.jsx(B,{src:_,alt:"Plate"})}),t.jsx(C,{children:"Lunch"})]}),t.jsx(q,{info:k(r)})]}),t.jsx(D,{children:t.jsx(E,{children:S(r,"Lunch").map((a,i)=>t.jsx(v,{item:a,index:i,img:_,mealType:"lunch"},M()))})})]}),t.jsxs(z,{children:[t.jsxs(L,{children:[t.jsxs(I,{children:[t.jsx(F,{children:t.jsx(B,{src:H,alt:"Plate"})}),t.jsx(C,{children:"Dinner"})]}),t.jsx(q,{info:k(h)})]}),t.jsx(D,{children:t.jsx(E,{children:S(h,"Dinner").map((a,i)=>t.jsx(v,{item:a,index:i,img:H,mealType:"dinner"},M()))})})]}),t.jsxs(z,{children:[t.jsxs(L,{children:[t.jsxs(I,{children:[t.jsx(F,{children:t.jsx(B,{src:U,alt:"Plate"})}),t.jsx(C,{children:"Snack"})]}),t.jsx(q,{info:k(p)})]}),t.jsx(D,{children:t.jsx(E,{children:S(p,"Snack").map((a,i)=>t.jsx(v,{item:a,index:i,img:U,mealType:"snack"},M()))})})]})]})]})})};export{Je as default};
