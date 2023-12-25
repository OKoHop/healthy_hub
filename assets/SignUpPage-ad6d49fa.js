import{s as l,k as T,m as I,o as g,j as t,B as C,u as N,a as L,C as q,r as x,D as E,G as F,H as P,S as D,I as W,J as H,T as R,K as V,O as U,Q as Y,U as O}from"./index-f377eed7.js";import{s as j,g as r,i as y,e as z}from"./Buttons.styled-c0780d29.js";import{u as Q}from"./useAuthResetError-9130f167.js";const J=l.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: ${e=>e.$hasBackButton?"24px":"40px"};
  @media (${e=>e.theme.mq.deskMin}) {
    max-width: 328px;
  }
`,K=l.div.attrs(e=>({row:e.row?"true":void 0}))`
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
`,X=l.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  @media (${e=>e.theme.mq.deskMin}) {
    max-width: 212px;
  }
`,Z=l.span`
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: -8px;
`,v={main:[{name:"Name",typeInput:"text",placeholder:"Name"},{name:"Email",typeInput:"email",placeholder:"Email"},{name:"Password",typeInput:"password",placeholder:"Password"}],parameters:[{name:"height",typeInput:"number",label:"Height",placeholder:"Enter your height"},{name:"weight",typeInput:"number",label:"Weight",placeholder:"Enter your weight"}],age:[{name:"age",typeInput:"number",label:"Your age",placeholder:"Enter your age"}]},h={goal:["Lose fat","Maintain","Gain Muscle"],gender:["Male","Female"],activity:["1.2 - If you do not have physical activity and sedentary work","1.375 - If you do short runs or light gymnastics 1-3 times a week","1.55 - If you play sports with average loads 3-5 times a week","1.725 - If you train fully 6-7 times a week","1.9 - If your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]},ee=e=>T({name:I().required("Name is required field"),email:I().email("Invalid email address").required("Email is required field"),password:I().min(8,"Password must be at least 8 characters").required("Password is required field"),age:e===2?g().required("Age is required field").positive("Age must be a positive number").integer("Age must be an integer").min(1,"Age must be at least 12 years old").max(150,"Age must be at most 150 years old"):g(),weight:e===3?g().required("Weight is required field").positive("Weight must be a positive number").min(5,"Weight must be at least 30").max(400,"Weight must be at most 500"):g(),height:e===3?g().required("Height is required field").positive("Height must be a positive number").min(50,"Height must be at least 60").max(300,"Height must be at most 300"):g()}),te=l.button`
  ${j}
  width: 100%;
  background: ${e=>e.theme.colors.primaryGreenLite};
  border: 1px solid ${e=>e.theme.colors.primaryGreenLite};
  &:hover {
    background-color: transparent;
    border: 1px solid ${e=>e.theme.colors.primaryGreenLite};
    color: ${e=>e.theme.colors.primaryGray};
  }
`,se=({btnName:e})=>t.jsx(te,{children:e}),ae=l.button`
  ${j}
  color: ${e=>e.theme.colors.primaryGray};
  border: 1px solid transparent;
  background-color: transparent;
  width: 100px;
  margin: auto;
  &:hover {
    border-color: ${e=>e.theme.colors.primaryGreenLite};
    width: 100%;
  }
`,oe=l.label`
  display: flex;
  align-items: center;
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
`,re=l.input`
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
`,ie=({name:e,value:a,onChange:i,onBlur:n,checked:o,label:c})=>t.jsx(t.Fragment,{children:t.jsxs(oe,{children:[t.jsx(re,{type:"radio",name:e,value:a,onChange:i,onBlur:n,checked:o}),c]})}),S=(e,a,i,n=!1)=>t.jsx(K,{row:n,children:a.map((o,c)=>t.jsx(ie,{name:e,value:o.toLowerCase(),onChange:i.handleChange,onBlur:()=>i.handleBlur({target:{name:e}}),checked:typeof i.values[e]=="string"&&i.values[e].toLowerCase()===o.toLowerCase(),label:o},c))}),w=(e,a,i=!1)=>e.map(({name:n,typeInput:o,label:c,placeholder:b})=>t.jsx("div",{children:t.jsx(C,{formik:a,id:n.toLowerCase(),type:o,placeholder:b,label:c,onBlur:()=>a.handleBlur({target:{name:n}}),showError:()=>i(!0)})},n)),ne=e=>{const a=parseFloat(e);return isNaN(a)?0:a},ce=({currentStep:e,setCurrentStep:a,onError:i})=>{const n=N(),o=L(q),[c,b]=x.useState({name:"",email:"",password:"",goal:h.goal[0].toLowerCase(),gender:h.gender[0].toLowerCase(),age:"",weight:"",height:"",activity:h.activity[0].toLowerCase()}),d={initialValues:c,validationSchema:ee(e),onSubmit:async m=>{if(e===4){const u=s.values.activity;m.activity=ne(m.activity);try{await n(E(m)),m.activity=u}catch{i(o||"An unexpected error occurred.")}}else a(u=>u+1),b(u=>({...u,...m}))}};(e===2||e===3)&&(d.validateOnChange=!1,d.validateOnBlur=!1);const s=F(d);x.useEffect(()=>{o&&i(o)},[o,i]);const p=()=>{e>0&&a(m=>m-1)};return t.jsxs("form",{onSubmit:s.handleSubmit,children:[t.jsxs(J,{$hasBackButton:e>0,children:[e===0&&t.jsx(t.Fragment,{children:w(v.main,s)}),e===1&&t.jsx(t.Fragment,{children:S("goal",h.goal,s)}),e===2&&t.jsxs(t.Fragment,{children:[t.jsx(Z,{children:"Gender"}),S("gender",h.gender,s),w(v.age,s)]}),e===3&&t.jsx(t.Fragment,{children:w(v.parameters,s)}),e===4&&t.jsx(t.Fragment,{children:S("activity",h.activity,s,!0)})]}),t.jsxs(X,{children:[t.jsx(se,{type:"submit",btnName:e===4?"Submit":"Next"}),e>0&&t.jsx(ae,{type:"button",onClick:p,children:"Back"})]})]})},A="/healthy_hub/assets/body_parameters_desk@1x-1c715572.png",le="/healthy_hub/assets/body_parameters_desk@2x-28117c28.png",me="/healthy_hub/assets/body_parameters_tab@1x-c695adc6.png",de="/healthy_hub/assets/body_parameters_tab@2x-90001dc8.png",ge="/healthy_hub/assets/body_parameters_mob@1x-98e56b9f.png",he="/healthy_hub/assets/body_parameters_mob@2x-0f8a4fd8.png",_={desk:{png:[`${A}`,`${le}`]},tab:{png:[`${me}`,`${de}`]},mob:{png:[`${ge}`,`${he}`]}},be=A.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),pe=r(_,"desk"),ue=r(_,"tab"),ye=r(_,"mob"),xe=`${_.desk.png[0]}`,_e=be,M="/healthy_hub/assets/gender_and_age_desk@1x-20ef5e41.png",fe="/healthy_hub/assets/gender_and_age_desk@2x-45c6a53e.png",ke="/healthy_hub/assets/gender_and_age_tab@1x-77482e77.png",$e="/healthy_hub/assets/gender_and_age_tab@2x-10e03a0d.png",Ie="/healthy_hub/assets/gender_and_age_mob@1x-8a050d10.png",ve="/healthy_hub/assets/gender_and_age_mob@2x-bfdf5d0b.png",f={desk:{png:[`${M}`,`${fe}`]},tab:{png:[`${ke}`,`${$e}`]},mob:{png:[`${Ie}`,`${ve}`]}},Se=M.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),we=r(f,"desk"),je=r(f,"tab"),Ae=r(f,"mob"),Me=`${f.desk.png[0]}`,Ge=Se,G="/healthy_hub/assets/activity_desk@1x-3938b1bf.png",Be="/healthy_hub/assets/activity_desk@2x-f0e9f5cb.png",Te="/healthy_hub/assets/activity_tab@1x-b19b7244.png",Ce="/healthy_hub/assets/activity_tab@2x-2d24ebb8.png",Ne="/healthy_hub/assets/activity_mob@1x-6e9825c8.png",Le="/healthy_hub/assets/activity_mob@2x-8945770f.png",k={desk:{png:[`${G}`,`${Be}`]},tab:{png:[`${Te}`,`${Ce}`]},mob:{png:[`${Ne}`,`${Le}`]}},qe=G.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),Ee=r(k,"desk"),Fe=r(k,"tab"),Pe=r(k,"mob"),De=`${k.desk.png[0]}`,We=qe,B="/healthy_hub/assets/summer_hiking_desk@1x-a71ef474.png",He="/healthy_hub/assets/summer_hiking_desk@2x-10ca5519.png",Re="/healthy_hub/assets/summer_hiking_tab@1x-31b23b5f.png",Ve="/healthy_hub/assets/summer_hiking_tab@2x-fa3fa793.png",Ue="/healthy_hub/assets/summer_hiking_mob@1x-91b8a54a.png",Ye="/healthy_hub/assets/summer_hiking_mob@2x-2eda95f6.png",$={desk:{png:[`${B}`,`${He}`]},tab:{png:[`${Re}`,`${Ve}`]},mob:{png:[`${Ue}`,`${Ye}`]}},Oe=B.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),ze=r($,"desk"),Qe=r($,"tab"),Je=r($,"mob"),Ke=`${$.desk.png[0]}`,Xe=Oe,Ze={0:{media:{srcDesk:r(y,"desk"),srcTab:r(y,"tab"),srcMob:r(y,"mob"),imgSrc:`${y.desk.png[0]}`,alt:z},info:{title:"Sign up",text:"You need to register to use the service"}},1:{media:{srcDesk:ze,srcTab:Qe,srcMob:Je,imgSrc:Ke,alt:Xe},info:{title:"Your goal",text:"Choose a goal so that we can help you effectively"}},2:{media:{srcDesk:we,srcTab:je,srcMob:Ae,imgSrc:Me,alt:Ge},info:{title:"Select gender, Age",text:"Choose a goal so that we can help you effectively"}},3:{media:{srcDesk:pe,srcTab:ue,srcMob:ye,imgSrc:xe,alt:_e},info:{title:"Body parameters",text:"Enter your parameters for correct performance tracking"}},4:{media:{srcDesk:Ee,srcTab:Fe,srcMob:Pe,imgSrc:De,alt:We},info:{title:"Your Activity",text:"To correctly calculate calorie and water intake"}}},rt=()=>{const{resetAuthError:e}=Q(),[a,i]=x.useState(0),[n,o]=x.useState(null),c=p=>{i(p),o(null)},b=p=>{o(p)},d=a===0,s=Ze[a];return t.jsxs("div",{className:"container",children:[n&&n.type==="register"&&t.jsx(P,{children:n.message}),t.jsxs(D,{children:[t.jsx(W,{children:t.jsxs("picture",{children:[s==null?void 0:s.media.srcDesk,s==null?void 0:s.media.srcTab,s==null?void 0:s.media.srcMob,t.jsx("img",{src:s==null?void 0:s.media.imgSrc,alt:s==null?void 0:s.media.alt})]})}),t.jsxs(H,{children:[t.jsx(R,{children:s==null?void 0:s.info.title}),t.jsx(V,{children:s==null?void 0:s.info.text}),t.jsx(U,{$isSigninVisible:d,children:t.jsx(ce,{onError:b,currentStep:a,setCurrentStep:c})}),d&&t.jsxs(Y,{children:[t.jsx("p",{children:"Do you already have an account?"}),t.jsx(O,{to:"/signin",onClick:e,children:"Sign in"})]})]})]})]})};export{rt as default};
