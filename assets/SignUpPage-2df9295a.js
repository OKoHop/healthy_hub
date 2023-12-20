import{s,h as T,l as $,m as h,j as t,A as N,u as B,B as C,a as E,C as F,r as u,D as G,G as P,L}from"./index-c71c4a86.js";import{g as o,i as x,e as D}from"./WelcomeImg-66fd6e1c.js";const z=s.div.attrs(e=>({hasbackbutton:e.hasbackbutton?"true":void 0}))`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: ${e=>e.hasbackbutton?"24px":"40px"};
  @media (${e=>e.theme.mq.deskMin}) {
    max-width: 328px;
  }
`,W=s.div.attrs(e=>({row:e.row?"true":void 0}))`
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
`,H=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  @media (${e=>e.theme.mq.deskMin}) {
    max-width: 212px;
  }
`,v={main:[{name:"Name",typeInput:"text",placeholder:"Name"},{name:"Email",typeInput:"email",placeholder:"Email"},{name:"Password",typeInput:"password",placeholder:"Password"}],parameters:[{name:"height",typeInput:"number",label:"Height",placeholder:"Enter your height"},{name:"weight",typeInput:"number",label:"Weight",placeholder:"Enter your weight"}],age:[{name:"age",typeInput:"number",label:"Your age",placeholder:"Enter your age"}]},b={goal:["Lose fat","Maintain","Gain Muscle"],gender:["Male","Female"],activity:["1.2 - If you do not have physical activity and sedentary work","1.375 - If you do short runs or light gymnastics 1-3 times a week","1.55 - If you play sports with average loads 3-5 times a week","1.725 - If you train fully 6-7 times a week","1.9 - If your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]},R=e=>T({name:$().required("Name is required field"),email:$().email("Invalid email address").required("Email is required field"),password:$().min(8,"Password must be at least 8 characters").required("Password is required field"),age:e===2?h().required("Age is required field").positive("Age must be a positive number").integer("Age must be an integer").min(12,"Age must be at least 12 years old").max(150,"Age must be at most 150 years old"):h(),weight:e===3?h().required("Weight is required field").positive("Weight must be a positive number").min(30,"Weight must be at least 30").max(500,"Weight must be at most 500"):h(),height:e===3?h().required("Height is required field").positive("Height must be a positive number").min(60,"Height must be at least 60").max(300,"Height must be at most 300"):h()}),Y=s.button`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  background: #e3ffa8;
  text-align: center;
  border: none;
  transition: ${e=>e.theme.transition.customTrans};
  &:hover {
    box-shadow: 0 0 10px rgba(227, 255, 168, 0.8);
  }
`,U=({btnName:e})=>t.jsx(Y,{children:e}),V=s.button`
  color: #b6b6b6;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 10px;
  border: 1px solid transparent;
  background-color: transparent;
  transition: ${e=>e.theme.transition.customTrans};
  border-radius: 12px;
  outline: none;
  &:hover {
    border-color: #e3ffa8;
  }
`,O=s.label`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  @media (${e=>e.theme.mq.tablet}) {
  }
  @media (${e=>e.theme.mq.desktop}) {
  }
`,Q=s.input`
  appearance: none;
  margin: 0;
  width: 12px;
  height: 12px;
  border: 1px solid #b6b6b6;
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
    background-color: #e3ffa8;
  }
  &:hover {
    border: 1px solid #e3ffa8;
  }
  &:focus {
    outline: none;
  }
`,J=({name:e,value:n,onChange:i,onBlur:c,checked:r,label:l})=>t.jsx(t.Fragment,{children:t.jsxs(O,{children:[t.jsx(Q,{type:"radio",name:e,value:n,onChange:i,onBlur:c,checked:r}),l]})}),I=(e,n,i,c=!1)=>t.jsx(W,{row:c,children:n.map((r,l)=>t.jsx(J,{name:e,value:r.toLowerCase(),onChange:i.handleChange,onBlur:()=>i.handleBlur({target:{name:e}}),checked:typeof i.values[e]=="string"&&i.values[e].toLowerCase()===r.toLowerCase(),label:r},l))}),w=(e,n,i=!1)=>e.map(({name:c,typeInput:r,label:l,placeholder:g})=>t.jsx("div",{children:t.jsx(N,{formik:n,id:c.toLowerCase(),type:r,placeholder:g,label:l,onBlur:()=>n.handleBlur({target:{name:c}}),showError:()=>i(!0)})},c)),K=e=>{const n=parseFloat(e);return isNaN(n)?0:n},X=({currentStep:e,setCurrentStep:n,onError:i})=>{const c=B();C();const r=E(F),[l,g]=u.useState({name:"",email:"",password:"",goal:b.goal[0].toLowerCase(),gender:b.gender[0].toLowerCase(),age:"",weight:"",height:"",activity:b.activity[0].toLowerCase()}),a={initialValues:l,validationSchema:R(e),onSubmit:async m=>{if(e===4){const p=d.values.activity;m.activity=K(m.activity);try{await c(G(m)),m.activity=p}catch{i(r||"An unexpected error occurred.")}}else n(p=>p+1),g(p=>({...p,...m}))}};(e===2||e===3)&&(a.validateOnChange=!1,a.validateOnBlur=!1);const d=P(a);u.useEffect(()=>{r&&i(r)},[r,i]);const A=()=>{e>0&&n(m=>m-1)};return t.jsxs("form",{onSubmit:d.handleSubmit,children:[t.jsxs(z,{hasbackbutton:e>0,children:[e===0&&t.jsx(t.Fragment,{children:w(v.main,d)}),e===1&&t.jsx(t.Fragment,{children:I("goal",b.goal,d)}),e===2&&t.jsxs(t.Fragment,{children:[I("gender",b.gender,d),w(v.age,d)]}),e===3&&t.jsx(t.Fragment,{children:w(v.parameters,d)}),e===4&&t.jsx(t.Fragment,{children:I("activity",b.activity,d,!0)})]}),t.jsxs(H,{children:[t.jsx(U,{type:"submit",btnName:e===4?"Submit":"Next",children:e===4?"Submit":"Next"}),e>0&&t.jsx(V,{type:"button",onClick:A,children:"Back"})]})]})},Z=s.main`
  width: 100%;
  padding-block: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (${e=>e.theme.mq.tabMin}) {
    width: 444px;
    margin: auto;
    gap: 60px;
    padding-block: 40px;
    align-items: center;
  }
  @media (${e=>e.theme.mq.deskMin}) {
    flex-direction: row;
    width: 100%;
    gap: 104px;
    text-align: start;
    align-items: flex-start;
  }
`,ee=s.div`
  width: 100%;
  @media (${e=>e.theme.mq.tabMin}) {
    width: 380px;
  }
  @media (${e=>e.theme.mq.deskMin}) {
    width: 592px;
  }
`,te=s.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  @media (${e=>e.theme.mq.tabMin}) {
    align-items: center;
  }
  @media (${e=>e.theme.mq.deskMin}) {
    padding-top: 80px;
    align-items: flex-start;
  }
`,ae=s.h2`
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 16px;
  text-align: center;
  @media (${e=>e.theme.mq.tabMin}) {
    font-size: 30px;
    line-height: 36px;
  }
`,se=s.p`
  color: #b6b6b6;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 24px;
  text-align: center;
  @media (${e=>e.theme.mq.tabMin}) {
    font-size: 22px;
    line-height: 32px;
  }
`,ie=s.div.attrs(e=>({issigninvisible:e.issigninvisible?"true":void 0}))`
  margin-bottom: ${e=>e.issigninvisible?"48px":"0"};
  @media (${e=>e.theme.mq.tabMin}) {
    margin-bottom: ${e=>e.issigninvisible?"206px":"0"};
    width: 380px;
  }
  @media (${e=>e.theme.mq.deskMin}) {
    max-width: 444px;
    margin-bottom: ${e=>e.issigninvisible?"168px":"0"};
  }
`,oe=s.div`
  @media (${e=>e.theme.mq.tabMin}) {
    display: flex;
    gap: 16px;
  }

  p {
    color: #b6b6b6;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 16px;
    @media (${e=>e.theme.mq.tabMin}) {
      margin-bottom: 0;
    }
  }
`,ne=s(L)`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  text-decoration: none;
  transition: ${e=>e.theme.transition.customTrans};
  &:hover {
    text-decoration: underline;
  }
`,re=s.div`
  border: 1px solid #e74a3b;
  font-size: 20px;
  padding: 10px;
  background-color: #e3ffa8;
  border-radius: 14px;
  margin-bottom: 30px;
`,M="/healthy_hub/assets/body_parameters_desk@1x-1c715572.png",de="/healthy_hub/assets/body_parameters_desk@2x-28117c28.png",ce="/healthy_hub/assets/body_parameters_tab@1x-c695adc6.png",le="/healthy_hub/assets/body_parameters_tab@2x-90001dc8.png",me="/healthy_hub/assets/body_parameters_mob@1x-98e56b9f.png",ge="/healthy_hub/assets/body_parameters_mob@2x-0f8a4fd8.png",y={desk:{png:[`${M}`,`${de}`]},tab:{png:[`${ce}`,`${le}`]},mob:{png:[`${me}`,`${ge}`]}},he=M.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),be=o(y,"desk"),pe=o(y,"tab"),xe=o(y,"mob"),ue=`${y.desk.png[0]}`,ye=he,S="/healthy_hub/assets/gender_and_age_desk@1x-20ef5e41.png",fe="/healthy_hub/assets/gender_and_age_desk@2x-45c6a53e.png",_e="/healthy_hub/assets/gender_and_age_tab@1x-77482e77.png",ke="/healthy_hub/assets/gender_and_age_tab@2x-10e03a0d.png",$e="/healthy_hub/assets/gender_and_age_mob@1x-8a050d10.png",ve="/healthy_hub/assets/gender_and_age_mob@2x-bfdf5d0b.png",f={desk:{png:[`${S}`,`${fe}`]},tab:{png:[`${_e}`,`${ke}`]},mob:{png:[`${$e}`,`${ve}`]}},Ie=S.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),we=o(f,"desk"),Me=o(f,"tab"),Se=o(f,"mob"),je=`${f.desk.png[0]}`,qe=Ie,j="/healthy_hub/assets/activity_desk@1x-3938b1bf.png",Ae="/healthy_hub/assets/activity_desk@2x-f0e9f5cb.png",Te="/healthy_hub/assets/activity_tab@1x-b19b7244.png",Ne="/healthy_hub/assets/activity_tab@2x-2d24ebb8.png",Be="/healthy_hub/assets/activity_mob@1x-6e9825c8.png",Ce="/healthy_hub/assets/activity_mob@2x-8945770f.png",_={desk:{png:[`${j}`,`${Ae}`]},tab:{png:[`${Te}`,`${Ne}`]},mob:{png:[`${Be}`,`${Ce}`]}},Ee=j.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),Fe=o(_,"desk"),Ge=o(_,"tab"),Pe=o(_,"mob"),Le=`${_.desk.png[0]}`,De=Ee,q="/healthy_hub/assets/summer_hiking_desk@1x-a71ef474.png",ze="/healthy_hub/assets/summer_hiking_desk@2x-10ca5519.png",We="/healthy_hub/assets/summer_hiking_tab@1x-31b23b5f.png",He="/healthy_hub/assets/summer_hiking_tab@2x-fa3fa793.png",Re="/healthy_hub/assets/summer_hiking_mob@1x-91b8a54a.png",Ye="/healthy_hub/assets/summer_hiking_mob@2x-2eda95f6.png",k={desk:{png:[`${q}`,`${ze}`]},tab:{png:[`${We}`,`${He}`]},mob:{png:[`${Re}`,`${Ye}`]}},Ue=q.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),Ve=o(k,"desk"),Oe=o(k,"tab"),Qe=o(k,"mob"),Je=`${k.desk.png[0]}`,Ke=Ue,Xe={0:{media:{srcDesk:o(x,"desk"),srcTab:o(x,"tab"),srcMob:o(x,"mob"),imgSrc:`${x.desk.png[0]}`,alt:D},info:{title:"Sign up",text:"You need to register to use the service"}},1:{media:{srcDesk:Ve,srcTab:Oe,srcMob:Qe,imgSrc:Je,alt:Ke},info:{title:"Your goal",text:"Choose a goal so that we can help you effectively"}},2:{media:{srcDesk:we,srcTab:Me,srcMob:Se,imgSrc:je,alt:qe},info:{title:"Select gender, Age",text:"Choose a goal so that we can help you effectively"}},3:{media:{srcDesk:be,srcTab:pe,srcMob:xe,imgSrc:ue,alt:ye},info:{title:"Body parameters",text:"Enter your parameters for correct performance tracking"}},4:{media:{srcDesk:Fe,srcTab:Ge,srcMob:Pe,imgSrc:Le,alt:De},info:{title:"Your Activity",text:"To correctly calculate calorie and water intake"}}},st=()=>{const[e,n]=u.useState(0),[i,c]=u.useState(null),r=d=>{n(d),c(null)},l=d=>{console.error("Error:",d),c(d)},g=e===0,a=Xe[e];return t.jsx("div",{className:"container",children:t.jsxs(Z,{children:[t.jsx(ee,{children:t.jsxs("picture",{children:[a==null?void 0:a.media.srcDesk,a==null?void 0:a.media.srcTab,a==null?void 0:a.media.srcMob,t.jsx("img",{src:a==null?void 0:a.media.imgSrc,alt:a==null?void 0:a.media.alt})]})}),t.jsxs(te,{children:[i&&t.jsx(re,{style:{color:"red"},children:i}),t.jsx(ae,{children:a==null?void 0:a.info.title}),t.jsx(se,{children:a==null?void 0:a.info.text}),t.jsx(ie,{issigninvisible:g,children:t.jsx(X,{onError:l,currentStep:e,setCurrentStep:r})}),g&&t.jsxs(oe,{children:[t.jsx("p",{children:"Do you already have an account?"}),t.jsx(ne,{to:"/signin",children:"Sign in"})]})]})]})})};export{st as default};
