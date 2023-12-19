import{s as n,c as R,d as C,e as h,j as t,k as Y,l as H,r as j,m as A,o as W,p as G,L as U}from"./index-e866bdd6.js";import{g as s,e as w,i as S,f as V}from"./WelcomeImg-27db080f.js";const D=n.div.attrs(e=>({hasbackbutton:e.hasbackbutton?"true":void 0}))`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: ${e=>e.hasbackbutton?"24px":"40px"};
  @media (${e=>e.theme.mq.desktop}) {
    max-width: 328px;
  }
`,O=n.div.attrs(e=>({row:e.row?"true":void 0}))`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (${e=>e.theme.mq.tablet}) {
    flex-direction: ${e=>e.row?"column":"row"};
  }

  @media (${e=>e.theme.mq.desktop}) {
    max-width: 444px;
    flex-direction: column;
  }
`,Q=n.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  @media (${e=>e.theme.mq.desktop}) {
    max-width: 212px;
  }
`,E={main:[{name:"Name",typeInput:"text",placeholder:"Name"},{name:"Email",typeInput:"email",placeholder:"Email"},{name:"Password",typeInput:"password",placeholder:"Password"}],parameters:[{name:"height",typeInput:"number",label:"Height",placeholder:"Enter your height"},{name:"weight",typeInput:"number",label:"Weight",placeholder:"Enter your weight"}],age:[{name:"age",typeInput:"number",label:"Your age",placeholder:"Enter your age"}]},b={goal:["Lose fat","Maintain","Gain Muscle"],gender:["Male","Female"],activity:["1.2 - If you do not have physical activity and sedentary work","1.375 - If you do short runs or light gymnastics 1-3 times a week","1.55 - If you play sports with average loads 3-5 times a week","1.725 - If you train fully 6-7 times a week","1.9 - If your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]},J=e=>R({name:C().required("Name is required field"),email:C().email("Invalid email address").required("Email is required field"),password:C().min(8).required("Password is required field"),age:e===2?h().required("Age is required field").positive("Age must be a positive number").integer("Age must be an integer").min(12,"Age must be at least 12 years old").max(150,"Age must be at most 150 years old"):h(),weight:e===3?h().required("Weight is required field").positive("Weight must be a positive number").min(30,"Weight must be at least 30").max(500,"Weight must be at most 500"):h(),height:e===3?h().required("Height is required field").positive("Height must be a positive number").min(60,"Height must be at least 60").max(300,"Height must be at most 300"):h()}),K=n.label`
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
`,X=n.input`
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
`,Z=({name:e,value:m,onChange:l,onBlur:c,checked:x,label:v})=>t.jsx(t.Fragment,{children:t.jsxs(K,{children:[t.jsx(X,{type:"radio",name:e,value:m,onChange:l,onBlur:c,checked:x}),v]})}),ee=n.button`
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
`,te=({btnName:e})=>t.jsx(ee,{children:e}),ie=n.button`
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
`,ae=({currentStep:e,setCurrentStep:m,onError:l})=>{const c=Y(),x=H(),[v,$]=j.useState(!1),[i,u]=j.useState({name:"",email:"",password:"",goal:b.goal[0],gender:b.gender[0],age:"",weight:"",height:"",activity:b.activity[0]}),T={initialValues:i,validationSchema:J(e),onSubmit:async a=>{var o,p,d;if(e===4){a.goal=a.goal.toLowerCase(),a.gender=a.gender.toLowerCase(),a.activity=L(a.activity);const r=await c(A(a));if(A.fulfilled.match(r))x("/signin");else{const P=((d=(p=(o=r.payload)==null?void 0:o.response)==null?void 0:p.data)==null?void 0:d.message)||"Registration failed. Please check your information and try again.";l(P)}}else m(r=>r+1),u(r=>({...r,...a}))}};(e===2||e===3)&&(T.validateOnChange=!1,T.validateOnBlur=!1);const g=W(T),z=()=>{e>0&&m(a=>a-1)},M=(a,o,p=!1)=>t.jsx(O,{row:p,children:o.map((d,r)=>t.jsx(Z,{name:a,value:d,onChange:g.handleChange,onBlur:()=>g.handleBlur({target:{name:a}}),checked:g.values[a]===d,label:d},r))}),F=a=>a.map(({name:o,typeInput:p,label:d,placeholder:r})=>t.jsx("div",{children:t.jsx(G,{formik:g,id:o.toLowerCase(),type:p,placeholder:r,label:d,onBlur:()=>g.handleBlur({target:{name:o}}),showError:()=>$(!0)})},o)),L=a=>{const o=parseFloat(a);return isNaN(o)?0:o};return t.jsxs("form",{onSubmit:g.handleSubmit,children:[t.jsxs(D,{hasbackbutton:e>0,children:[e===0&&t.jsx(t.Fragment,{children:F(E.main)}),e===1&&t.jsx(t.Fragment,{children:M("goal",b.goal)}),e===2&&t.jsxs(t.Fragment,{children:[M("gender",b.gender),F(E.age)]}),e===3&&t.jsx(t.Fragment,{children:F(E.parameters)}),e===4&&t.jsx(t.Fragment,{children:M("activity",b.activity,!0)})]}),t.jsxs(Q,{children:[t.jsx(te,{type:"submit",btnName:e===4?"Submit":"Next",children:e===4?"Submit":"Next"}),e>0&&t.jsx(ie,{type:"button",onClick:z,children:"Back"})]})]})},se=n.main`
  width: 100%;
  padding-block: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (${e=>e.theme.mq.tablet}) {
    width: 444px;
    margin: auto;
    gap: 60px;
    padding-block: 40px;
    align-items: center;
  }
  @media (${e=>e.theme.mq.desktop}) {
    flex-direction: row;
    width: 100%;
    gap: 104px;
    text-align: start;
    align-items: flex-start;
  }
`,ne=n.div`
  width: 100%;
  @media (${e=>e.theme.mq.tablet}) {
    width: 380px;
  }
  @media (${e=>e.theme.mq.desktop}) {
    width: 592px;
  }
`,oe=n.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  @media (${e=>e.theme.mq.tablet}) {
    align-items: center;
  }
  @media (${e=>e.theme.mq.desktop}) {
    padding-top: 80px;
    align-items: flex-start;
  }
`,re=n.h2`
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 16px;
  text-align: center;
  @media (${e=>e.theme.mq.tablet}) {
    font-size: 30px;
    line-height: 36px;
  }
`,de=n.p`
  color: #b6b6b6;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 24px;
  text-align: center;
  @media (${e=>e.theme.mq.tablet}) {
    font-size: 22px;
    line-height: 32px;
  }
`,me=n.div.attrs(e=>({issigninvisible:e.issigninvisible?"true":void 0}))`
  margin-bottom: ${e=>e.issigninvisible?"48px":"0"};
  @media (${e=>e.theme.mq.tablet}) {
    margin-bottom: ${e=>e.issigninvisible?"206px":"0"};
    width: 380px;
  }
  @media (${e=>e.theme.mq.desktop}) {
    max-width: 444px;
    margin-bottom: ${e=>e.issigninvisible?"168px":"0"};
  }
`,le=n.div`
  @media (${e=>e.theme.mq.tablet}) {
    display: flex;
    gap: 16px;
  }

  p {
    color: #b6b6b6;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 16px;
    @media (${e=>e.theme.mq.tablet}) {
      margin-bottom: 0;
    }
  }
`,ce=n(U)`
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
`,f={desk:{png:["body_parameters_desk@1x.png","body_parameters_desk@2x.png"]},tab:{png:["body_parameters_tab@1x.png","body_parameters_tab@2x.png"]},mob:{png:["body_parameters_mob@1x.png","body_parameters_mob@2x.png"]}},ge=f.desk.png[0].split("_d")[0].replace(/_/g," "),q="/healthy_hub/src/images/Illustrations/BodyParameters",pe=s(q,"desk",f),he=s(q,"tab",f),be=s(q,"mob",f),xe=`${q}/${f.desk.png[0]}`,ue=ge,y={desk:{png:["gender_and_age_desk@1x.png","gender_and_age_desk@2x.png"]},tab:{png:["gender_and_age_tab@1x.png","gender_and_age_tab@2x.png"]},mob:{png:["gender_and_age_mob@1x.png","gender_and_age_mob@2x.png"]}},fe=y.desk.png[0].split("_d")[0].replace(/_/g," "),I="/healthy_hub/src/images/Illustrations/GenderAge",ye=s(I,"desk",y),ke=s(I,"tab",y),_e=s(I,"mob",y),ve=`${I}/${y.desk.png[0]}`,$e=fe,k={desk:{png:["activity_desk@1x.png","activity_desk@2x.png"]},tab:{png:["activity_tab@1x.png","activity_tab@2x.png"]},mob:{png:["activity_mob@1x.png","activity_mob@2x.png"]}},we=k.desk.png[0].split("_d")[0].replace(/_/g," "),N="/healthy_hub/src/images/Illustrations/YourActivity",Se=s(N,"desk",k),je=s(N,"tab",k),qe=s(N,"mob",k),Ie=`${N}/${k.desk.png[0]}`,Ne=we,_={desk:{png:["summer_hiking_desk@1x.png","summer_hiking_desk@2x.png"]},tab:{png:["summer_hiking_tab@1x.png","summer_hiking_tab@2x.png"]},mob:{png:["summer_hiking_mob@1x.png","summer_hiking_mob@2x.png"]}},Be=_.desk.png[0].split("_d")[0].replace(/_/g," "),B="/healthy_hub/src/images/Illustrations/YourGoal",Te=s(B,"desk",_),Me=s(B,"tab",_),Fe=s(B,"mob",_),Ce=`${B}/${_.desk.png[0]}`,Ee=Be,Ae={0:{media:{srcDesk:s(w,"desk",S),srcTab:s(w,"tab",S),srcMob:s(w,"mob",S),imgSrc:`${w}/${S.desk.png[0]}`,alt:V},info:{title:"Sign up",text:"You need to register to use the service"}},1:{media:{srcDesk:Te,srcTab:Me,srcMob:Fe,imgSrc:Ce,alt:Ee},info:{title:"Your goal",text:"Choose a goal so that we can help you effectively"}},2:{media:{srcDesk:ye,srcTab:ke,srcMob:_e,imgSrc:ve,alt:$e},info:{title:"Select gender, Age",text:"Choose a goal so that we can help you effectively"}},3:{media:{srcDesk:pe,srcTab:he,srcMob:be,imgSrc:xe,alt:ue},info:{title:"Body parameters",text:"Enter your parameters for correct performance tracking"}},4:{media:{srcDesk:Se,srcTab:je,srcMob:qe,imgSrc:Ie,alt:Ne},info:{title:"Your Activity",text:"To correctly calculate calorie and water intake"}}},Pe=()=>{const[e,m]=j.useState(0),[l,c]=j.useState(null),x=u=>{m(u),c(null)},v=u=>{c(u)},$=e===0,i=Ae[e];return t.jsx("div",{className:"container",children:t.jsxs(se,{children:[t.jsx(ne,{children:t.jsxs("picture",{children:[i==null?void 0:i.media.srcDesk,i==null?void 0:i.media.srcTab,i==null?void 0:i.media.srcMob,t.jsx("img",{src:i==null?void 0:i.media.imgSrc,alt:i==null?void 0:i.media.alt})]})}),t.jsxs(oe,{children:[t.jsx(re,{children:i==null?void 0:i.info.title}),t.jsx(de,{children:i==null?void 0:i.info.text}),t.jsx(me,{issigninvisible:$,children:t.jsx(ae,{onError:v,currentStep:e,setCurrentStep:x})}),l&&t.jsx("div",{style:{color:"red"},children:l}),$&&t.jsxs(le,{children:[t.jsx("p",{children:"Do you already have an account?"}),t.jsx(ce,{to:"/signin",children:"Sign in"})]})]})]})})};export{Pe as default};
