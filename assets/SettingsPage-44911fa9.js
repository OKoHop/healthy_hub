import{s as i,x as k,y as v,E as q,j as t,z as F,B as S,C as p,r as z,u as M,a as A,a4 as W,D as C,a5 as L,a6 as B}from"./index-b3fc2949.js";const G=i.main`
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
`,V=i.div`
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
`,E=i.h1`
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
`,P=i.div`
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
`,R=i.button`
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
`,U=i.button`
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
`,D=i.div`
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
`,I=i.div`
  width: 300px;
  margin-bottom: 24px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 380px;
  }

  @media screen and (${e=>e.theme.mq.deskMin}) {
    width: 536px;
    margin-bottom: 0;
  }
`,H=i.img`
  display: block;
  max-width: 100%;
  height: auto;
`,N=i(k)`
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
`,o=i.label`
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
`,d=i(v)`
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
`,m=i(q)`
  font-size: 10px;
  line-height: 12px;
  color: ${e=>e.theme.colors.error};
`,Y=i.div`
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;

  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,y=i.div`
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
`,b=i.p`
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  margin-bottom: 12px;
`,T=i.div`
  display: flex;
  gap: 16px;
  height: 100%;
`,Z=i.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  margin-right: 12px;
  overflow: hidden;
`,_=i.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,O=i.div`
  display: flex;
  align-items: center;
  gap: 6px;

  & > img {
    width: 16px;
    height: 16px;
  }
`,J="/healthy_hub/assets/setings-page-b0655153.png",K="/healthy_hub/assets/download-new-photo-eac1d45e.svg",Q="/healthy_hub/assets/profile-circle-8b091608.svg",g=i.span`
  margin-right: 10px;
  min-width: 12px;
  height: 12px;
  border: 1px solid rgba(182, 182, 182, 1);
  border-radius: 50%;
  position: relative;

  &:before {
    content: '';
    width: 6px;
    height: 6px;
    background-color: ${e=>e.theme.colors.primaryGreenLite};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }

  input:checked + & {
    &:before {
      display: block;
    }
  }
`,X=i(v)`
  appearance: none;

  &:checked + ${g} {
    &:before {
      display: block;
    }
  }
`,ee=i.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover > ${g} {
    border-color: ${e=>e.theme.colors.primaryGreenLite};
  }
`,r=({name:e,value:l,selectedValue:c,text:n})=>t.jsx(t.Fragment,{children:t.jsxs(ee,{children:[t.jsx(X,{type:"radio",name:e,value:l,checked:c===l}),t.jsx(g,{}),n]})}),te=F({name:S().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,"Name may contain only letters, apostrophe, dash and spaces.").min(2,"Name must be at least 2 characters long.").max(50,"Name must be no more than 50 characters.").required("Name is required").trim("Name cannot include leading and trailing spaces").strict(!0),age:p().min(18,"Age must be at least 18 years old").max(110,"Age must be no more than 110 years old").required("Age is required").integer("Age must be an integer"),height:p().min(120,"Height must be at least 120cm").max(220,"Height must be no more than 220cm").required("Height is required").integer("Height must be an integer"),weight:p().min(40,"Weight must be at least 40kg").max(200,"Weight must be no more than 200kg").required("Weight is required").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",e=>/^\d+(\.\d{1})?$/.test(e))}),ae=()=>{var u;const[e,l]=z.useState(null),c=M(),n=A(W),x={name:n.name,age:n.age,gender:n.gender,height:n.height,weight:n.weight,activity:((u=n==null?void 0:n.activity)==null?void 0:u.toString())||""},f=a=>{({...a},c(L(a))),c(B())},w=a=>{a.resetForm({values:x})},j=(a,s)=>{const h=a.target.files[0];if(l(h),!h)return;const $=URL.createObjectURL(h);s.setFieldValue("userAvatarFile",h),s.setFieldValue("avatarPreview",$)};return t.jsx(G,{children:t.jsxs(V,{children:[t.jsx(E,{children:"Profile setting"}),t.jsxs(D,{children:[t.jsx(I,{children:t.jsx(H,{src:J,alt:"Banner setings page"})}),t.jsx(C,{initialValues:x,onSubmit:(a,s)=>f(a),validationSchema:te,children:a=>t.jsxs(N,{children:[t.jsxs(o,{children:["Your name",t.jsx(d,{type:"text",name:"name",placeholder:"Enter your name",required:!0}),t.jsx(m,{name:"name",component:"div"})]}),t.jsxs(Y,{children:["Your photo",t.jsx(d,{type:"file",name:"userAvatarFile",id:"userAvatarFile",accept:"image/*",onChange:s=>j(s,a),value:""}),t.jsxs(o,{htmlFor:"userAvatarFile",children:[t.jsx(Z,{children:t.jsx(_,{src:n.avatarURL||Q,alt:"userAvatar"})}),t.jsxs(O,{children:[t.jsx("img",{src:K,alt:"Select File"}),"Download new photo"]})]})]}),t.jsxs(o,{children:["Your age",t.jsx(d,{type:"number",name:"age",placeholder:"Enter your age",required:!0}),t.jsx(m,{name:"age",component:"div"})]}),t.jsxs(y,{role:"group","aria-labelledby":"gender-head",children:[t.jsx(b,{id:"gender-head",children:"Gender"}),t.jsxs(T,{children:[t.jsx(r,{type:"radio",name:"gender",value:"male",selectedValue:a.values.gender,text:"Male"}),t.jsx(r,{type:"radio",name:"gender",value:"female",selectedValue:a.values.gender,text:"Female"})]})]}),t.jsxs(o,{children:["Height",t.jsx(d,{type:"number",name:"height",placeholder:"Enter your height",required:!0}),t.jsx(m,{name:"height",component:"div"})]}),t.jsxs(o,{children:["Weight",t.jsx(d,{type:"number",name:"weight",placeholder:"Enter your weight",required:!0}),t.jsx(m,{name:"weight",component:"div"})]}),t.jsxs(y,{role:"group","aria-labelledby":"activity-head",children:[t.jsx(b,{id:"activity-head",children:"Your activity"}),t.jsx(r,{name:"activity",id:"activity1",value:"1.2",selectedValue:a.values.activity,text:"1.2 - if you do not have physical activity and sedentary work"}),t.jsx(r,{name:"activity",id:"activity2",value:"1.375",selectedValue:a.values.activity,text:"1.375 - if you do short runs or light gymnastics 1-3 times a week"}),t.jsx(r,{name:"activity",id:"activity3",value:"1.55",selectedValue:a.values.activity,text:"1.55 - if you play sports with average loads 3-5 times a week"}),t.jsx(r,{name:"activity",id:"activity4",value:"1.725",selectedValue:a.values.activity,text:"1.725 - if you train fully 6-7 times a week"}),t.jsx(r,{name:"activity",id:"activity5",value:"1.9",selectedValue:a.values.activity.toString(),text:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]}),t.jsxs(P,{children:[t.jsx(U,{type:"submit",children:"Save"}),t.jsx(R,{type:"button",onClick:()=>w(a),children:"Cancel"})]})]})})]})]})})};export{ae as default};
