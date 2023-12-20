import{s as n,e as D,h as q,i as b,j as t,u as z,p as W,r as k,q as T,v as L,w as R,L as H}from"./index-3c9e1900.js";import{g as s,i as _,e as Y}from"./WelcomeImg-3a5489ba.js";const U=n.div.attrs(e=>({hasbackbutton:e.hasbackbutton?"true":void 0}))`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: ${e=>e.hasbackbutton?"24px":"40px"};
  @media (${e=>e.theme.mq.deskMin}) {
    max-width: 328px;
  }
`,V=n.div.attrs(e=>({row:e.row?"true":void 0}))`
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
`,O=n.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  @media (${e=>e.theme.mq.deskMin}) {
    max-width: 212px;
  }
`,A={main:[{name:"Name",typeInput:"text",placeholder:"Name"},{name:"Email",typeInput:"email",placeholder:"Email"},{name:"Password",typeInput:"password",placeholder:"Password"}],parameters:[{name:"height",typeInput:"number",label:"Height",placeholder:"Enter your height"},{name:"weight",typeInput:"number",label:"Weight",placeholder:"Enter your weight"}],age:[{name:"age",typeInput:"number",label:"Your age",placeholder:"Enter your age"}]},p={goal:["Lose fat","Maintain","Gain Muscle"],gender:["Male","Female"],activity:["1.2 - If you do not have physical activity and sedentary work","1.375 - If you do short runs or light gymnastics 1-3 times a week","1.55 - If you play sports with average loads 3-5 times a week","1.725 - If you train fully 6-7 times a week","1.9 - If your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]},Q=e=>D({name:q().required("Name is required field"),email:q().email("Invalid email address").required("Email is required field"),password:q().min(8).required("Password is required field"),age:e===2?b().required("Age is required field").positive("Age must be a positive number").integer("Age must be an integer").min(12,"Age must be at least 12 years old").max(150,"Age must be at most 150 years old"):b(),weight:e===3?b().required("Weight is required field").positive("Weight must be a positive number").min(30,"Weight must be at least 30").max(500,"Weight must be at most 500"):b(),height:e===3?b().required("Height is required field").positive("Height must be a positive number").min(60,"Height must be at least 60").max(300,"Height must be at most 300"):b()}),J=n.label`
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
`,K=n.input`
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
`,X=({name:e,value:d,onChange:l,onBlur:c,checked:x,label:y})=>t.jsx(t.Fragment,{children:t.jsxs(J,{children:[t.jsx(K,{type:"radio",name:e,value:d,onChange:l,onBlur:c,checked:x}),y]})}),Z=n.button`
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
`,ee=({btnName:e})=>t.jsx(Z,{children:e}),te=n.button`
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
`,ae=({currentStep:e,setCurrentStep:d,onError:l})=>{const c=z(),x=W(),[y,f]=k.useState(!1),[a,u]=k.useState({name:"",email:"",password:"",goal:p.goal[0],gender:p.gender[0],age:"",weight:"",height:"",activity:p.activity[0]}),M={initialValues:a,validationSchema:Q(e),onSubmit:async i=>{var o,h,m;if(e===4){i.goal=i.goal.toLowerCase(),i.gender=i.gender.toLowerCase(),i.activity=P(i.activity);const r=await c(T(i));if(T.fulfilled.match(r))x("/signin");else{const E=((m=(h=(o=r.payload)==null?void 0:o.response)==null?void 0:h.data)==null?void 0:m.message)||"Registration failed. Please check your information and try again.";l(E)}}else d(r=>r+1),u(r=>({...r,...i}))}};(e===2||e===3)&&(M.validateOnChange=!1,M.validateOnBlur=!1);const g=L(M),G=()=>{e>0&&d(i=>i-1)},S=(i,o,h=!1)=>t.jsx(V,{row:h,children:o.map((m,r)=>t.jsx(X,{name:i,value:m,onChange:g.handleChange,onBlur:()=>g.handleBlur({target:{name:i}}),checked:g.values[i]===m,label:m},r))}),j=i=>i.map(({name:o,typeInput:h,label:m,placeholder:r})=>t.jsx("div",{children:t.jsx(R,{formik:g,id:o.toLowerCase(),type:h,placeholder:r,label:m,onBlur:()=>g.handleBlur({target:{name:o}}),showError:()=>f(!0)})},o)),P=i=>{const o=parseFloat(i);return isNaN(o)?0:o};return t.jsxs("form",{onSubmit:g.handleSubmit,children:[t.jsxs(U,{hasbackbutton:e>0,children:[e===0&&t.jsx(t.Fragment,{children:j(A.main)}),e===1&&t.jsx(t.Fragment,{children:S("goal",p.goal)}),e===2&&t.jsxs(t.Fragment,{children:[S("gender",p.gender),j(A.age)]}),e===3&&t.jsx(t.Fragment,{children:j(A.parameters)}),e===4&&t.jsx(t.Fragment,{children:S("activity",p.activity,!0)})]}),t.jsxs(O,{children:[t.jsx(ee,{type:"submit",btnName:e===4?"Submit":"Next",children:e===4?"Submit":"Next"}),e>0&&t.jsx(te,{type:"button",onClick:G,children:"Back"})]})]})},ie=n.main`
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
`,se=n.div`
  width: 100%;
  @media (${e=>e.theme.mq.tabMin}) {
    width: 380px;
  }
  @media (${e=>e.theme.mq.deskMin}) {
    width: 592px;
  }
`,ne=n.div`
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
`,oe=n.h2`
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
`,re=n.p`
  color: #b6b6b6;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 24px;
  text-align: center;
  @media (${e=>e.theme.mq.tabMin}) {
    font-size: 22px;
    line-height: 32px;
  }
`,me=n.div.attrs(e=>({issigninvisible:e.issigninvisible?"true":void 0}))`
  margin-bottom: ${e=>e.issigninvisible?"48px":"0"};
  @media (${e=>e.theme.mq.tabMin}) {
    margin-bottom: ${e=>e.issigninvisible?"206px":"0"};
    width: 380px;
  }
  @media (${e=>e.theme.mq.deskMin}) {
    max-width: 444px;
    margin-bottom: ${e=>e.issigninvisible?"168px":"0"};
  }
`,de=n.div`
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
`,le=n(H)`
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
`,N="/healthy_hub/assets/body_parameters_desk@1x-1c715572.png",ce="/healthy_hub/assets/body_parameters_desk@2x-28117c28.png",ge="/healthy_hub/assets/body_parameters_tab@1x-c695adc6.png",he="/healthy_hub/assets/body_parameters_tab@2x-90001dc8.png",be="/healthy_hub/assets/body_parameters_mob@1x-98e56b9f.png",pe="/healthy_hub/assets/body_parameters_mob@2x-0f8a4fd8.png",$={desk:{png:[`${N}`,`${ce}`]},tab:{png:[`${ge}`,`${he}`]},mob:{png:[`${be}`,`${pe}`]}},xe=N.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),ue=s($,"desk"),ye=s($,"tab"),fe=s($,"mob"),_e=`${$.desk.png[0]}`,ke=xe,B="/healthy_hub/assets/gender_and_age_desk@1x-20ef5e41.png",$e="/healthy_hub/assets/gender_and_age_desk@2x-45c6a53e.png",ve="/healthy_hub/assets/gender_and_age_tab@1x-77482e77.png",Ie="/healthy_hub/assets/gender_and_age_tab@2x-10e03a0d.png",we="/healthy_hub/assets/gender_and_age_mob@1x-8a050d10.png",Me="/healthy_hub/assets/gender_and_age_mob@2x-bfdf5d0b.png",v={desk:{png:[`${B}`,`${$e}`]},tab:{png:[`${ve}`,`${Ie}`]},mob:{png:[`${we}`,`${Me}`]}},Se=B.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),je=s(v,"desk"),qe=s(v,"tab"),Ae=s(v,"mob"),Te=`${v.desk.png[0]}`,Ne=Se,F="/healthy_hub/assets/activity_desk@1x-3938b1bf.png",Be="/healthy_hub/assets/activity_desk@2x-f0e9f5cb.png",Fe="/healthy_hub/assets/activity_tab@1x-b19b7244.png",Ce="/healthy_hub/assets/activity_tab@2x-2d24ebb8.png",Ge="/healthy_hub/assets/activity_mob@1x-6e9825c8.png",Pe="/healthy_hub/assets/activity_mob@2x-8945770f.png",I={desk:{png:[`${F}`,`${Be}`]},tab:{png:[`${Fe}`,`${Ce}`]},mob:{png:[`${Ge}`,`${Pe}`]}},Ee=F.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),De=s(I,"desk"),ze=s(I,"tab"),We=s(I,"mob"),Le=`${I.desk.png[0]}`,Re=Ee,C="/healthy_hub/assets/summer_hiking_desk@1x-a71ef474.png",He="/healthy_hub/assets/summer_hiking_desk@2x-10ca5519.png",Ye="/healthy_hub/assets/summer_hiking_tab@1x-31b23b5f.png",Ue="/healthy_hub/assets/summer_hiking_tab@2x-fa3fa793.png",Ve="/healthy_hub/assets/summer_hiking_mob@1x-91b8a54a.png",Oe="/healthy_hub/assets/summer_hiking_mob@2x-2eda95f6.png",w={desk:{png:[`${C}`,`${He}`]},tab:{png:[`${Ye}`,`${Ue}`]},mob:{png:[`${Ve}`,`${Oe}`]}},Qe=C.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),Je=s(w,"desk"),Ke=s(w,"tab"),Xe=s(w,"mob"),Ze=`${w.desk.png[0]}`,et=Qe,tt={0:{media:{srcDesk:s(_,"desk"),srcTab:s(_,"tab"),srcMob:s(_,"mob"),imgSrc:`${_.desk.png[0]}`,alt:Y},info:{title:"Sign up",text:"You need to register to use the service"}},1:{media:{srcDesk:Je,srcTab:Ke,srcMob:Xe,imgSrc:Ze,alt:et},info:{title:"Your goal",text:"Choose a goal so that we can help you effectively"}},2:{media:{srcDesk:je,srcTab:qe,srcMob:Ae,imgSrc:Te,alt:Ne},info:{title:"Select gender, Age",text:"Choose a goal so that we can help you effectively"}},3:{media:{srcDesk:ue,srcTab:ye,srcMob:fe,imgSrc:_e,alt:ke},info:{title:"Body parameters",text:"Enter your parameters for correct performance tracking"}},4:{media:{srcDesk:De,srcTab:ze,srcMob:We,imgSrc:Le,alt:Re},info:{title:"Your Activity",text:"To correctly calculate calorie and water intake"}}},st=()=>{const[e,d]=k.useState(0),[l,c]=k.useState(null),x=u=>{d(u),c(null)},y=u=>{c(u)},f=e===0,a=tt[e];return t.jsx("div",{className:"container",children:t.jsxs(ie,{children:[t.jsx(se,{children:t.jsxs("picture",{children:[a==null?void 0:a.media.srcDesk,a==null?void 0:a.media.srcTab,a==null?void 0:a.media.srcMob,t.jsx("img",{src:a==null?void 0:a.media.imgSrc,alt:a==null?void 0:a.media.alt})]})}),t.jsxs(ne,{children:[t.jsx(oe,{children:a==null?void 0:a.info.title}),t.jsx(re,{children:a==null?void 0:a.info.text}),t.jsx(me,{issigninvisible:f,children:t.jsx(ae,{onError:y,currentStep:e,setCurrentStep:x})}),l&&t.jsx("div",{style:{color:"red"},children:l}),f&&t.jsxs(de,{children:[t.jsx("p",{children:"Do you already have an account?"}),t.jsx(le,{to:"/signin",children:"Sign in"})]})]})]})})};export{st as default};
