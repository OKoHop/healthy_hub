import{H as g,J as w,s as i,e as C,h as j,E as L,j as t,k as B,m as P,o as m,u as R,K as V,a as E,O as U,r as p,q as G,x as b}from"./index-fbfa66e3.js";g.defaults.baseURL="https://health-en-app.onrender.com";const D=w("auth/updateAvatar",async(e,r)=>{try{const a=await g.patch("/users/avatars",e,{headers:{"Content-Type":"multipart/form-data"}});return console.log("updated avatarUrl: ",a.data,"this log is for checking data from the backend"),a.data}catch(a){return r.rejectWithValue(a.message)}}),I=w("auth/updateUser",async(e,r)=>{try{return(await g.patch("/users/update",e)).data}catch(a){return r.rejectWithValue(a.message)}}),H=i.main`
  background-color: ${e=>e.theme.colors.primaryBlack};
  color: ${e=>e.theme.colors.primaryWhite};
  padding-top: 16px;
  padding-bottom: 20px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    padding-top: 24px;
    padding-bottom: 20px;
  }

  @media screen and (${e=>e.theme.mq.deskMin}) {
    padding-top: 20px;
  }
`,N=i.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 10px;
  width: 320px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 834px;
    padding: 0 27px;
    position: relative;
  }

  @media screen and (${e=>e.theme.mq.deskMin}) {
    width: 1440px;
    padding: 0 34px;
  }
`,T=i.h1`
  font-weight: ${e=>e.theme.fontWeights.medium};
  font-size: ${e=>e.theme.fontSizes.l};
  line-height: 30px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.xl};
    line-height: 36px;
  }

  @media screen and (${e=>e.theme.mq.deskMin}) {
    font-size: ${e=>e.theme.fontSizes.xl};
    line-height: 36px;
  }
`,Y=i.div`
  gap: 12px;
  margin-top: 40px;
  padding-bottom: 40pxa;

  @media screen and (min-width: ${e=>e.theme.mq.tabMin}) {
    display: flex;
    top: 0;
    right: 0;
    margin-top: 0;
    margin-right: 27px;
    padding-bottom: 174px;
  }

  @media screen and (${e=>e.theme.mq.deskMin}) {
    margin-right: 34px;
    padding-bottom: 72px;
  }
`,Z=i.button`
  background-color: ${e=>e.theme.colors.primaryBlack};
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 20px;

  width: 100%;
  padding: 8px 12px;
  border: 1px solid transparent;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${e=>e.theme.colors.primaryGreenLite};
  }

  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 212px;
  }
`,_=i.button`
  background-color: ${e=>e.theme.colors.primaryGreenLite};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;

  width: 212px;
  border: 1px solid ${e=>e.theme.colors.primaryGreenLite};
  border-radius: 12px;
  padding: 8px;
  cursor: pointer;

  @media screen and (max-width: 833px) {
    width: 100%;
  }
`,O=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    margin-top: 20px;
  }

  @media screen and (${e=>e.theme.mq.deskMin}) {
    flex-direction: row;
    align-items: start;
    justify-content: center;
    gap: 100px;
    margin-top: 16px;
  }
`,J=i.div`
  width: 300px;
  margin-bottom: 24px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 380px;
  }

  @media screen and (${e=>e.theme.mq.deskMin}) {
    width: 536px;
    margin-bottom: 0;
  }
`,K=i.img`
  display: block;
  max-width: 100%;
  height: auto;
`,Q=i(C)`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 100%;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 60px;
    width: 499px;

    & > :not(div[aria-labelledby='activity-head']) {
      /* width: calc((100% - 60px) / 2); */
    }
  }
`,d=i.label`
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  &[for='userAvatarFile'] {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }
`,l=i(j)`
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 20px;
  background-color: ${e=>e.theme.colors.primaryBlack};
  color: ${e=>e.theme.colors.primaryWhite};

  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid ${e=>e.theme.colors.gray};

  &:hover {
    border-color: ${e=>e.theme.colors.primaryGreenLite};
  }

  &[type='file'] {
    visibility: hidden;
    pointer-events: none;
    display: none;
  }
  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${e=>e.theme.colors.primaryGray};
  }
`,c=i(L)`
  font-size: 10px;
  line-height: 12px;
  color: ${e=>e.theme.colors.error};
`,X=i.div`
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;

  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,f=i.div`
  display: flex;
  flex-direction: column;

  & > label {
    font-size: ${e=>e.theme.fontSizes.xs};
    font-weight: ${e=>e.theme.fontWeights.medium};
    line-height: 20px;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`,v=i.p`
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  margin-bottom: 12px;
`,ee=i.div`
  display: flex;
  gap: 16px;
  height: 100%;
`,te=i.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  margin-right: 12px;
  overflow: hidden;
`,ie=i.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ae=i.div`
  display: flex;
  align-items: center;
  gap: 6px;

  & > img {
    width: 16px;
    height: 16px;
  }
`,ne="/healthy_hub/assets/setings-page-b0655153.png",re="/healthy_hub/assets/download-new-photo-eac1d45e.svg",oe="/healthy_hub/assets/profile-circle-8b091608.svg",x=i.span`
  min-width: 12px;
  min-height: 12px;
  border: 1px solid rgba(182, 182, 182, 1);
  border-radius: 50%;
  position: relative;

  &:after {
    content: '';
    min-width: 6px;
    min-height: 6px;
    background-color: ${e=>e.theme.colors.yellow};
    border-radius: 50%;
    position: absolute;
    opacity: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,se=i(j)`
  display: none;
  margin-right: 8px;

  &:checked + ${x} {
    &:after {
      opacity: 1;
    }
  }
`,de=i.label`
  display: flex;
  align-items: center;
  gap: 10px;
  /* width: 100%; */
  cursor: pointer;

  &:hover > ${x} {
    border-color: ${e=>e.theme.colors.greenLite};
  }
`,o=({name:e,value:r,selectedValue:a,text:h})=>t.jsx(t.Fragment,{children:t.jsxs(de,{children:[t.jsx(se,{type:"radio",name:e,value:r,checked:a===r}),t.jsx(x,{}),h]})}),le=B({name:P().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,"Name may contain only letters, apostrophe, dash and spaces.").min(2,"Name must be at least 2 characters long.").max(50,"Name must be no more than 50 characters.").required("Name is required").trim("Name cannot include leading and trailing spaces").strict(!0),age:m().min(18,"Age must be at least 18 years old").max(110,"Age must be no more than 110 years old").required("Age is required").integer("Age must be an integer"),height:m().min(120,"Height must be at least 120cm").max(220,"Height must be no more than 220cm").required("Height is required").integer("Height must be an integer"),weight:m().min(40,"Weight must be at least 40kg").max(200,"Weight must be no more than 200kg").required("Weight is required").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",e=>/^\d+(\.\d{1})?$/.test(e))}),he=()=>{var y;const e=R(),r=V(),a=E(U),[h,u]=p.useState(!1),[$,k]=p.useState(null),[S,q]=p.useState(a.avatarURL),z={name:a.name,age:a.age,gender:a.gender,height:a.height,weight:a.weight,activity:((y=a==null?void 0:a.activity)==null?void 0:y.toString())||""},F=n=>{if(e(I(n)),h){const s=new FormData;s.append("avatar",$),e(D(s))}e(b("today")),r("/main")},A=()=>{u(!1),r("/main"),e(b("today"))},M=n=>{const s=n.target.files[0];if(!s)return;const W=URL.createObjectURL(s);k(s),q(W),u(!0)};return t.jsx(t.Fragment,{children:t.jsx(H,{children:t.jsxs(N,{children:[t.jsx(T,{children:"Profile setting"}),t.jsxs(O,{children:[t.jsx(J,{children:t.jsx(K,{src:ne,alt:"Banner setings page"})}),t.jsx(G,{initialValues:z,onSubmit:F,validationSchema:le,children:({values:n})=>t.jsxs(Q,{children:[t.jsxs(d,{children:["Your name",t.jsx(l,{type:"text",name:"name",placeholder:"Enter your name",required:!0}),t.jsx(c,{name:"name",component:"div"})]}),t.jsxs(X,{children:["Your photo",t.jsx(l,{type:"file",name:"userAvatarFile",id:"userAvatarFile",accept:"image/*",onChange:M}),t.jsxs(d,{htmlFor:"userAvatarFile",children:[t.jsx(te,{children:t.jsx(ie,{src:S||oe,alt:"userAvatar"})}),t.jsxs(ae,{children:[t.jsx("img",{src:re,alt:"Select File"}),"Download new photo"]})]})]}),t.jsxs(d,{children:["Your age",t.jsx(l,{type:"number",name:"age",placeholder:"Enter your age",required:!0}),t.jsx(c,{name:"age",component:"div"})]}),t.jsxs(f,{role:"group","aria-labelledby":"gender-head",children:[t.jsx(v,{id:"gender-head",children:"Gender"}),t.jsxs(ee,{children:[t.jsx(o,{name:"gender",value:"Male",selectedValue:n.gender,text:"Male"}),t.jsx(o,{name:"gender",value:"Female",selectedValue:n.gender,text:"Female"})]})]}),t.jsxs(d,{children:["Height",t.jsx(l,{type:"number",name:"height",placeholder:"Enter your height",required:!0}),t.jsx(c,{name:"height",component:"div"})]}),t.jsxs(d,{children:["Weight",t.jsx(l,{type:"number",name:"weight",placeholder:"Enter your weight",required:!0}),t.jsx(c,{name:"weight",component:"div"})]}),t.jsxs(f,{role:"group","aria-labelledby":"activity-head",children:[t.jsx(v,{id:"activity-head",children:"Your activity"}),t.jsx(o,{name:"activity",id:"activity1",value:"1.2",selectedValue:n.activity,text:"1.2 - if you do not have physical activity and sedentary work"}),t.jsx(o,{name:"activity",id:"activity2",value:"1.375",selectedValue:n.activity,text:"1,375 - if you do short runs or light gymnastics 1-3 times a week"}),t.jsx(o,{name:"activity",id:"activity3",value:"1.55",selectedValue:n.activity,text:"1.55 - if you play sports with average loads 3-5 times a week"}),t.jsx(o,{name:"activity",id:"activity4",value:"1.725",selectedValue:n.activity,text:"1,725 - if you train fully 6-7 times a week"}),t.jsx(o,{name:"activity",id:"activity5",value:"1.9",selectedValue:n.activity.toString(),text:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]}),t.jsxs(Y,{children:[t.jsx(_,{type:"submit",children:"Save"}),t.jsx(Z,{type:"button",onClick:A,children:"Cancel"})]})]})})]})]})})})};export{he as default};
