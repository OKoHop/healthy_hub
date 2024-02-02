import{s as d,z as L,B as I,C as b,j as t,O as N,r as y,b as q,a as E,Q as F,R as P,S as W,L as D,T as o,U as _,V as R,X as V,Y as H,Z as Y,$ as U,a0 as z,a1 as O,a2 as Q,a3 as X,a4 as Z}from"./index-8658c9f2.js";import{s as A}from"./Buttons.styled-0712eac9.js";import{u as J}from"./useAuthResetError-5b474f8e.js";const K=d.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: ${e=>e.$hasBackButton?"24px":"40px"};
  @media (${e=>e.theme.mq.deskMin}) {
    max-width: 328px;
  }
`,ee=d.div.attrs(e=>({row:e.row?"true":void 0}))`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (${e=>e.theme.mq.tabMin}) {
    flex-direction: ${e=>e.row?"column":"row"};
  }

  @media (${e=>e.theme.mq.deskMin}) {
    max-width: 444px;
    flex-direction: column;
  }
`,te=d.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  @media (${e=>e.theme.mq.deskMin}) {
    max-width: 212px;
  }
`,se=d.span`
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: -8px;
`,S={main:[{name:"Name",typeInput:"text",placeholder:"Name"},{name:"Email",typeInput:"email",placeholder:"Email"},{name:"Password",typeInput:"password",placeholder:"Password"}],parameters:[{name:"height",typeInput:"number",label:"Height",placeholder:"Enter your height"},{name:"weight",typeInput:"number",label:"Weight",placeholder:"Enter your weight"}],age:[{name:"age",typeInput:"number",label:"Your age",placeholder:"Enter your age"}]},p={goal:["Lose fat","Maintain","Gain Muscle"],gender:["Male","Female"],activity:["1.2 - If you do not have physical activity and sedentary work","1.375 - If you do short runs or light gymnastics 1-3 times a week","1.55 - If you play sports with average loads 3-5 times a week","1.725 - If you train fully 6-7 times a week","1.9 - If your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]},ae=e=>L({name:I().required("Name is required field"),email:I().email("Invalid email address").required("Email is required field"),password:I().min(8,"Password must be at least 8 characters").required("Password is required field"),age:e===2?b().required("Age is required field").positive("Age must be a positive number").integer("Age must be an integer").min(1,"Age must be at least 12 years old").max(150,"Age must be at most 150 years old"):b(),weight:e===3?b().required("Weight is required field").positive("Weight must be a positive number").min(5,"Weight must be at least 30").max(400,"Weight must be at most 500"):b(),height:e===3?b().required("Height is required field").positive("Height must be a positive number").min(50,"Height must be at least 60").max(300,"Height must be at most 300"):b()}),oe=d.button`
  ${A}
  width: 100%;
  background: ${e=>e.theme.colors.primaryGreenLite};
  border: 1px solid ${e=>e.theme.colors.primaryGreenLite};
  &:hover {
    background-color: transparent;
    border: 1px solid ${e=>e.theme.colors.primaryGreenLite};
    color: ${e=>e.theme.colors.primaryGray};
  }
`,re=({btnName:e})=>t.jsx(oe,{children:e}),ie=d.button`
  ${A}
  color: ${e=>e.theme.colors.primaryGray};
  border: 1px solid transparent;
  background-color: transparent;
  width: 100px;
  margin: auto;
  &:hover {
    border-color: ${e=>e.theme.colors.primaryGreenLite};
    width: 100%;
  }
`,ne=d.label`
  display: flex;
  align-items: center;
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
`,ce=d.input`
  appearance: none;
  margin: 0;
  width: 12px;
  height: 12px;
  border: 1px solid ${e=>e.theme.colors.primaryGray};
  border-radius: 50%;
  margin-right: 8px;
  transition: ${e=>e.theme.transition.customTrans};
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    margin: 2px;
    transition: ${e=>e.theme.transition.customTrans};
  }
  &:checked::after {
    background-color: ${e=>e.theme.colors.primaryGreenLite};
  }
  &:hover {
    border: 1px solid ${e=>e.theme.colors.primaryGreenLite};
  }
  &:focus {
    outline: none;
  }
`,le=({name:e,value:a,onChange:r,onBlur:i,checked:n,label:c})=>t.jsx(t.Fragment,{children:t.jsxs(ne,{children:[t.jsx(ce,{type:"radio",name:e,value:a,onChange:r,onBlur:i,checked:n}),c]})}),w=(e,a,r,i=!1)=>t.jsx(ee,{row:i,children:a.map((n,c)=>t.jsx(le,{name:e,value:n.toLowerCase(),onChange:r.handleChange,onBlur:()=>r.handleBlur({target:{name:e}}),checked:typeof r.values[e]=="string"&&r.values[e].toLowerCase()===n.toLowerCase(),label:n},c))}),j=(e,a,r=!1)=>e.map(({name:i,typeInput:n,label:c,placeholder:l})=>t.jsx("div",{children:t.jsx(N,{formik:a,id:i.toLowerCase(),type:n,placeholder:l,label:c,onBlur:()=>a.handleBlur({target:{name:i}}),showError:()=>r(!0)})},i)),me=e=>{const a=parseFloat(e);return isNaN(a)?0:a},de=({currentStep:e,setCurrentStep:a,onError:r})=>{const[i,n]=y.useState(!1),c=q(),l=E(F),[x,s]=y.useState({name:"",email:"",password:"",goal:p.goal[0].toLowerCase(),gender:p.gender[0].toLowerCase(),age:"",weight:"",height:"",activity:p.activity[0].toLowerCase()}),g={initialValues:x,validationSchema:ae(e),onSubmit:async h=>{if(e===4){n(!0);const u=m.values.activity;h.activity=me(h.activity);try{await c(P(h)),h.activity=u,n(!1)}catch{r(l||"An unexpected error occurred.")}}else a(u=>u+1),s(u=>({...u,...h}))}};(e===2||e===3)&&(g.validateOnChange=!1,g.validateOnBlur=!1);const m=W(g);y.useEffect(()=>{l&&r(l)},[l,r]);const C=()=>{e>0&&a(h=>h-1)};return t.jsxs("form",{onSubmit:m.handleSubmit,children:[i&&t.jsx(D,{}),t.jsxs(K,{$hasBackButton:e>0,children:[e===0&&t.jsx(t.Fragment,{children:j(S.main,m)}),e===1&&t.jsx(t.Fragment,{children:w("goal",p.goal,m)}),e===2&&t.jsxs(t.Fragment,{children:[t.jsx(se,{children:"Gender"}),w("gender",p.gender,m),j(S.age,m)]}),e===3&&t.jsx(t.Fragment,{children:j(S.parameters,m)}),e===4&&t.jsx(t.Fragment,{children:w("activity",p.activity,m,!0)})]}),t.jsxs(te,{children:[t.jsx(re,{type:"submit",btnName:e===4?"Submit":"Next"}),e>0&&t.jsx(ie,{type:"button",onClick:C,children:"Back"})]})]})},M="/healthy_hub/assets/body_parameters_desk@1x-1c715572.png",ge="/healthy_hub/assets/body_parameters_desk@2x-28117c28.png",he="/healthy_hub/assets/body_parameters_tab@1x-c695adc6.png",be="/healthy_hub/assets/body_parameters_tab@2x-90001dc8.png",pe="/healthy_hub/assets/body_parameters_mob@1x-98e56b9f.png",ue="/healthy_hub/assets/body_parameters_mob@2x-0f8a4fd8.png",f={desk:{png:[`${M}`,`${ge}`]},tab:{png:[`${he}`,`${be}`]},mob:{png:[`${pe}`,`${ue}`]}},ye=M.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),xe=o(f,"desk"),_e=o(f,"tab"),fe=o(f,"mob"),ke=`${f.desk.png[0]}`,$e=ye,B="/healthy_hub/assets/gender_and_age_desk@1x-20ef5e41.png",ve="/healthy_hub/assets/gender_and_age_desk@2x-45c6a53e.png",Ie="/healthy_hub/assets/gender_and_age_tab@1x-77482e77.png",Se="/healthy_hub/assets/gender_and_age_tab@2x-10e03a0d.png",we="/healthy_hub/assets/gender_and_age_mob@1x-8a050d10.png",je="/healthy_hub/assets/gender_and_age_mob@2x-bfdf5d0b.png",k={desk:{png:[`${B}`,`${ve}`]},tab:{png:[`${Ie}`,`${Se}`]},mob:{png:[`${we}`,`${je}`]}},Ae=B.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),Me=o(k,"desk"),Be=o(k,"tab"),Ge=o(k,"mob"),Te=`${k.desk.png[0]}`,Ce=Ae,G="/healthy_hub/assets/activity_desk@1x-3938b1bf.png",Le="/healthy_hub/assets/activity_desk@2x-f0e9f5cb.png",Ne="/healthy_hub/assets/activity_tab@1x-b19b7244.png",qe="/healthy_hub/assets/activity_tab@2x-2d24ebb8.png",Ee="/healthy_hub/assets/activity_mob@1x-6e9825c8.png",Fe="/healthy_hub/assets/activity_mob@2x-8945770f.png",$={desk:{png:[`${G}`,`${Le}`]},tab:{png:[`${Ne}`,`${qe}`]},mob:{png:[`${Ee}`,`${Fe}`]}},Pe=G.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),We=o($,"desk"),De=o($,"tab"),Re=o($,"mob"),Ve=`${$.desk.png[0]}`,He=Pe,T="/healthy_hub/assets/summer_hiking_desk@1x-a71ef474.png",Ye="/healthy_hub/assets/summer_hiking_desk@2x-10ca5519.png",Ue="/healthy_hub/assets/summer_hiking_tab@1x-31b23b5f.png",ze="/healthy_hub/assets/summer_hiking_tab@2x-fa3fa793.png",Oe="/healthy_hub/assets/summer_hiking_mob@1x-91b8a54a.png",Qe="/healthy_hub/assets/summer_hiking_mob@2x-2eda95f6.png",v={desk:{png:[`${T}`,`${Ye}`]},tab:{png:[`${Ue}`,`${ze}`]},mob:{png:[`${Oe}`,`${Qe}`]}},Xe=T.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),Ze=o(v,"desk"),Je=o(v,"tab"),Ke=o(v,"mob"),et=`${v.desk.png[0]}`,tt=Xe,st={0:{media:{srcDesk:o(_,"desk"),srcTab:o(_,"tab"),srcMob:o(_,"mob"),imgSrc:`${_.desk.png[0]}`,alt:R},info:{title:"Sign up",text:"You need to register to use the service"}},1:{media:{srcDesk:Ze,srcTab:Je,srcMob:Ke,imgSrc:et,alt:tt},info:{title:"Your goal",text:"Choose a goal so that we can help you effectively"}},2:{media:{srcDesk:Me,srcTab:Be,srcMob:Ge,imgSrc:Te,alt:Ce},info:{title:"Select gender, Age",text:"Choose a goal so that we can help you effectively"}},3:{media:{srcDesk:xe,srcTab:_e,srcMob:fe,imgSrc:ke,alt:$e},info:{title:"Body parameters",text:"Enter your parameters for correct performance tracking"}},4:{media:{srcDesk:We,srcTab:De,srcMob:Re,imgSrc:Ve,alt:He},info:{title:"Your Activity",text:"To correctly calculate calorie and water intake"}}},ct=()=>{const{resetAuthError:e}=J(),[a,r]=y.useState(0),[i,n]=y.useState(null),c=g=>{r(g),n(null)},l=g=>{n(g)},x=a===0,s=st[a];return t.jsxs("div",{className:"container",children:[i&&i.type==="register"&&t.jsx(V,{children:i.message}),t.jsxs(H,{children:[t.jsx(Y,{children:t.jsxs("picture",{children:[s==null?void 0:s.media.srcDesk,s==null?void 0:s.media.srcTab,s==null?void 0:s.media.srcMob,t.jsx("img",{src:s==null?void 0:s.media.imgSrc,alt:s==null?void 0:s.media.alt})]})}),t.jsxs(U,{children:[t.jsx(z,{children:s==null?void 0:s.info.title}),t.jsx(O,{children:s==null?void 0:s.info.text}),t.jsx(Q,{$isSigninVisible:x,children:t.jsx(de,{onError:l,currentStep:a,setCurrentStep:c})}),x&&t.jsxs(X,{children:[t.jsx("p",{children:"Do you already have an account?"}),t.jsx(Z,{to:"/signin",onClick:e,children:"Sign in"})]})]})]})]})};export{ct as default};
