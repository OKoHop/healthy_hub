import{s as i,h as T,l as k,m as h,j as t,A as G,u as B,B as N,a as C,C as L,r as u,D as E,G as F,L as W}from"./index-023caa11.js";import{g as o,i as x,e as z}from"./WelcomeImg-77ff7dac.js";const P=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: ${e=>e.$hasBackButton?"24px":"40px"};
  @media (${e=>e.theme.mq.deskMin}) {
    max-width: 328px;
  }
`,D=i.div.attrs(e=>({row:e.row?"true":void 0}))`
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
`,V=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  @media (${e=>e.theme.mq.deskMin}) {
    max-width: 212px;
  }
`,H=i.span`
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: -8px;
`,v={main:[{name:"Name",typeInput:"text",placeholder:"Name"},{name:"Email",typeInput:"email",placeholder:"Email"},{name:"Password",typeInput:"password",placeholder:"Password"}],parameters:[{name:"height",typeInput:"number",label:"Height",placeholder:"Enter your height"},{name:"weight",typeInput:"number",label:"Weight",placeholder:"Enter your weight"}],age:[{name:"age",typeInput:"number",label:"Your age",placeholder:"Enter your age"}]},p={goal:["Lose fat","Maintain","Gain Muscle"],gender:["Male","Female"],activity:["1.2 - If you do not have physical activity and sedentary work","1.375 - If you do short runs or light gymnastics 1-3 times a week","1.55 - If you play sports with average loads 3-5 times a week","1.725 - If you train fully 6-7 times a week","1.9 - If your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]},R=e=>T({name:k().required("Name is required field"),email:k().email("Invalid email address").required("Email is required field"),password:k().min(8,"Password must be at least 8 characters").required("Password is required field"),age:e===2?h().required("Age is required field").positive("Age must be a positive number").integer("Age must be an integer").min(12,"Age must be at least 12 years old").max(150,"Age must be at most 150 years old"):h(),weight:e===3?h().required("Weight is required field").positive("Weight must be a positive number").min(30,"Weight must be at least 30").max(500,"Weight must be at most 500"):h(),height:e===3?h().required("Height is required field").positive("Height must be a positive number").min(60,"Height must be at least 60").max(300,"Height must be at most 300"):h()}),Y=i.button`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  background: ${e=>e.theme.colors.primaryGreenLite};
  text-align: center;
  border: none;
  transition: ${e=>e.theme.transition.customTrans};
  &:hover {
    box-shadow: 0 0 10px rgba(227, 255, 168, 0.8);
  }
`,U=({btnName:e})=>t.jsx(Y,{children:e}),O=i.button`
  color: ${e=>e.theme.colors.primaryGray};
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 10px;
  border: 1px solid transparent;
  background-color: transparent;
  transition: ${e=>e.theme.transition.customTrans};
  border-radius: 12px;
  &:hover {
    border-color: ${e=>e.theme.colors.primaryGreenLite};
  }
`,Q=i.label`
  display: flex;
  align-items: center;
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
`,J=i.input`
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
`,K=({name:e,value:n,onChange:s,onBlur:l,checked:r,label:c})=>t.jsx(t.Fragment,{children:t.jsxs(Q,{children:[t.jsx(J,{type:"radio",name:e,value:n,onChange:s,onBlur:l,checked:r}),c]})}),w=(e,n,s,l=!1)=>t.jsx(D,{row:l,children:n.map((r,c)=>t.jsx(K,{name:e,value:r.toLowerCase(),onChange:s.handleChange,onBlur:()=>s.handleBlur({target:{name:e}}),checked:typeof s.values[e]=="string"&&s.values[e].toLowerCase()===r.toLowerCase(),label:r},c))}),I=(e,n,s=!1)=>e.map(({name:l,typeInput:r,label:c,placeholder:g})=>t.jsx("div",{children:t.jsx(G,{formik:n,id:l.toLowerCase(),type:r,placeholder:g,label:c,onBlur:()=>n.handleBlur({target:{name:l}}),showError:()=>s(!0)})},l)),X=e=>{const n=parseFloat(e);return isNaN(n)?0:n},Z=({currentStep:e,setCurrentStep:n,onError:s})=>{const l=B();N();const r=C(L),[c,g]=u.useState({name:"",email:"",password:"",goal:p.goal[0].toLowerCase(),gender:p.gender[0].toLowerCase(),age:"",weight:"",height:"",activity:p.activity[0].toLowerCase()}),a={initialValues:c,validationSchema:R(e),onSubmit:async d=>{if(e===4){const b=m.values.activity;d.activity=X(d.activity);try{await l(E(d)),d.activity=b}catch{s(r||"An unexpected error occurred.")}}else n(b=>b+1),g(b=>({...b,...d}))}};(e===2||e===3)&&(a.validateOnChange=!1,a.validateOnBlur=!1);const m=F(a);u.useEffect(()=>{r&&s(r)},[r,s]);const A=()=>{e>0&&n(d=>d-1)};return t.jsxs("form",{onSubmit:m.handleSubmit,children:[t.jsxs(P,{$hasBackButton:e>0,children:[e===0&&t.jsx(t.Fragment,{children:I(v.main,m)}),e===1&&t.jsx(t.Fragment,{children:w("goal",p.goal,m)}),e===2&&t.jsxs(t.Fragment,{children:[t.jsx(H,{children:"Gender"}),w("gender",p.gender,m),I(v.age,m)]}),e===3&&t.jsx(t.Fragment,{children:I(v.parameters,m)}),e===4&&t.jsx(t.Fragment,{children:w("activity",p.activity,m,!0)})]}),t.jsxs(V,{children:[t.jsx(U,{type:"submit",btnName:e===4?"Submit":"Next",children:e===4?"Submit":"Next"}),e>0&&t.jsx(O,{type:"button",onClick:A,children:"Back"})]})]})},ee=i.main`
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
`,te=i.div`
  width: 100%;
  @media (${e=>e.theme.mq.tabMin}) {
    width: 380px;
  }
  @media (${e=>e.theme.mq.deskMin}) {
    width: 592px;
  }
`,ae=i.div`
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
`,ie=i.h2`
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 16px;

  @media (${e=>e.theme.mq.tabMin}) {
    font-size: 30px;
    line-height: 36px;
    text-align: center;
  }
  @media (${e=>e.theme.mq.deskMin}) {
    text-align: start;
  }
`,se=i.p`
  color: ${e=>e.theme.colors.primaryGray};
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 24px;

  @media (${e=>e.theme.mq.tabMin}) {
    text-align: center;
    font-size: 22px;
    line-height: 32px;
  }
  @media (${e=>e.theme.mq.deskMin}) {
    text-align: start;
  }
`,oe=i.div`
  margin-bottom: ${e=>e.issigninvisible?"48px":"0"};
  @media (${e=>e.theme.mq.tabMin}) {
    margin-bottom: ${e=>e.$isSigninVisible?"206px":"0"};
    width: 380px;
  }
  @media (${e=>e.theme.mq.deskMin}) {
    max-width: 444px;
    margin-bottom: ${e=>e.$isSigninVisible?"168px":"0"};
  }
`,ne=i.div`
  @media (${e=>e.theme.mq.tabMin}) {
    display: flex;
    gap: 16px;
  }

  p {
    color: ${e=>e.theme.colors.primaryGray};
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 16px;
    @media (${e=>e.theme.mq.tabMin}) {
      margin-bottom: 0;
    }
  }
`,re=i(W)`
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  text-decoration: none;
  transition: ${e=>e.theme.transition.customTrans};
  &:hover {
    text-decoration: underline;
  }
`,me=i.div`
  max-width: 800px;
  border: 1px solid ${e=>e.theme.colors.error};
  font-size: 16px;
  padding: 5px;
  background-color: ${e=>e.theme.colors.primaryWhite};
  border-radius: 14px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-inline: auto;
  text-align: center;
  @media (${e=>e.theme.mq.tabMin}) {
    font-size: 20px;
    padding: 10px;
  }
`,M="/healthy_hub/assets/body_parameters_desk@1x-1c715572.png",le="/healthy_hub/assets/body_parameters_desk@2x-28117c28.png",ce="/healthy_hub/assets/body_parameters_tab@1x-c695adc6.png",de="/healthy_hub/assets/body_parameters_tab@2x-90001dc8.png",ge="/healthy_hub/assets/body_parameters_mob@1x-98e56b9f.png",he="/healthy_hub/assets/body_parameters_mob@2x-0f8a4fd8.png",y={desk:{png:[`${M}`,`${le}`]},tab:{png:[`${ce}`,`${de}`]},mob:{png:[`${ge}`,`${he}`]}},pe=M.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),be=o(y,"desk"),xe=o(y,"tab"),ue=o(y,"mob"),ye=`${y.desk.png[0]}`,_e=pe,S="/healthy_hub/assets/gender_and_age_desk@1x-20ef5e41.png",fe="/healthy_hub/assets/gender_and_age_desk@2x-45c6a53e.png",$e="/healthy_hub/assets/gender_and_age_tab@1x-77482e77.png",ke="/healthy_hub/assets/gender_and_age_tab@2x-10e03a0d.png",ve="/healthy_hub/assets/gender_and_age_mob@1x-8a050d10.png",we="/healthy_hub/assets/gender_and_age_mob@2x-bfdf5d0b.png",_={desk:{png:[`${S}`,`${fe}`]},tab:{png:[`${$e}`,`${ke}`]},mob:{png:[`${ve}`,`${we}`]}},Ie=S.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),Me=o(_,"desk"),Se=o(_,"tab"),je=o(_,"mob"),qe=`${_.desk.png[0]}`,Ae=Ie,j="/healthy_hub/assets/activity_desk@1x-3938b1bf.png",Te="/healthy_hub/assets/activity_desk@2x-f0e9f5cb.png",Ge="/healthy_hub/assets/activity_tab@1x-b19b7244.png",Be="/healthy_hub/assets/activity_tab@2x-2d24ebb8.png",Ne="/healthy_hub/assets/activity_mob@1x-6e9825c8.png",Ce="/healthy_hub/assets/activity_mob@2x-8945770f.png",f={desk:{png:[`${j}`,`${Te}`]},tab:{png:[`${Ge}`,`${Be}`]},mob:{png:[`${Ne}`,`${Ce}`]}},Le=j.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),Ee=o(f,"desk"),Fe=o(f,"tab"),We=o(f,"mob"),ze=`${f.desk.png[0]}`,Pe=Le,q="/healthy_hub/assets/summer_hiking_desk@1x-a71ef474.png",De="/healthy_hub/assets/summer_hiking_desk@2x-10ca5519.png",Ve="/healthy_hub/assets/summer_hiking_tab@1x-31b23b5f.png",He="/healthy_hub/assets/summer_hiking_tab@2x-fa3fa793.png",Re="/healthy_hub/assets/summer_hiking_mob@1x-91b8a54a.png",Ye="/healthy_hub/assets/summer_hiking_mob@2x-2eda95f6.png",$={desk:{png:[`${q}`,`${De}`]},tab:{png:[`${Ve}`,`${He}`]},mob:{png:[`${Re}`,`${Ye}`]}},Ue=q.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),Oe=o($,"desk"),Qe=o($,"tab"),Je=o($,"mob"),Ke=`${$.desk.png[0]}`,Xe=Ue,Ze={0:{media:{srcDesk:o(x,"desk"),srcTab:o(x,"tab"),srcMob:o(x,"mob"),imgSrc:`${x.desk.png[0]}`,alt:z},info:{title:"Sign up",text:"You need to register to use the service"}},1:{media:{srcDesk:Oe,srcTab:Qe,srcMob:Je,imgSrc:Ke,alt:Xe},info:{title:"Your goal",text:"Choose a goal so that we can help you effectively"}},2:{media:{srcDesk:Me,srcTab:Se,srcMob:je,imgSrc:qe,alt:Ae},info:{title:"Select gender, Age",text:"Choose a goal so that we can help you effectively"}},3:{media:{srcDesk:be,srcTab:xe,srcMob:ue,imgSrc:ye,alt:_e},info:{title:"Body parameters",text:"Enter your parameters for correct performance tracking"}},4:{media:{srcDesk:Ee,srcTab:Fe,srcMob:We,imgSrc:ze,alt:Pe},info:{title:"Your Activity",text:"To correctly calculate calorie and water intake"}}},st=()=>{const[e,n]=u.useState(0),[s,l]=u.useState(null),r=m=>{n(m),l(null)},c=m=>{console.error("Error:",m),l(m)},g=e===0,a=Ze[e];return t.jsxs("div",{className:"container",children:[s&&t.jsx(me,{style:{color:"red"},children:s}),t.jsxs(ee,{children:[t.jsx(te,{children:t.jsxs("picture",{children:[a==null?void 0:a.media.srcDesk,a==null?void 0:a.media.srcTab,a==null?void 0:a.media.srcMob,t.jsx("img",{src:a==null?void 0:a.media.imgSrc,alt:a==null?void 0:a.media.alt})]})}),t.jsxs(ae,{children:[t.jsx(ie,{children:a==null?void 0:a.info.title}),t.jsx(se,{children:a==null?void 0:a.info.text}),t.jsx(oe,{$isSigninVisible:g,children:t.jsx(Z,{onError:c,currentStep:e,setCurrentStep:r})}),g&&t.jsxs(ne,{children:[t.jsx("p",{children:"Do you already have an account?"}),t.jsx(re,{to:"/signin",children:"Sign in"})]})]})]})]})};export{st as default};
