import{s as i,v as F,x as f,E as A,j as t,y as M,A as C,B as m,u as W,a as L,a2 as B,r as h,C as G,a3 as P,n as u,a4 as E}from"./index-79acc1e0.js";const R=i.main`
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
`,I=i.h1`
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
`,U=i.div`
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
`,D=i.button`
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
`,H=i.button`
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
`,N=i.div`
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
`,Y=i.div`
  width: 300px;
  margin-bottom: 24px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    width: 380px;
  }

  @media screen and (${e=>e.theme.mq.deskMin}) {
    width: 536px;
    margin-bottom: 0;
  }
`,T=i.img`
  display: block;
  max-width: 100%;
  height: auto;
`,Z=i(F)`
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
`,s=i(f)`
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
`,l=i(A)`
  font-size: 10px;
  line-height: 12px;
  color: ${e=>e.theme.colors.error};
`,_=i.div`
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
`,O=i.div`
  display: flex;
  gap: 16px;
  height: 100%;
`,J=i.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  margin-right: 12px;
  overflow: hidden;
`,K=i.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Q=i.div`
  display: flex;
  align-items: center;
  gap: 6px;

  & > img {
    width: 16px;
    height: 16px;
  }
`,X="/healthy_hub/assets/setings-page-b0655153.png",ee="/healthy_hub/assets/download-new-photo-eac1d45e.svg",te="/healthy_hub/assets/profile-circle-8b091608.svg",p=i.span`
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
`,ie=i(f)`
  appearance: none;

  &:checked + ${p} {
    &:before {
      display: block;
    }
  }
`,ae=i.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover > ${p} {
    border-color: ${e=>e.theme.colors.primaryGreenLite};
  }
`,r=({name:e,value:n,selectedValue:g,text:d})=>t.jsx(t.Fragment,{children:t.jsxs(ae,{children:[t.jsx(ie,{type:"radio",name:e,value:n,checked:g===n}),t.jsx(p,{}),d]})}),ne=M({name:C().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,"Name may contain only letters, apostrophe, dash and spaces.").min(2,"Name must be at least 2 characters long.").max(50,"Name must be no more than 50 characters.").required("Name is required").trim("Name cannot include leading and trailing spaces").strict(!0),age:m().min(18,"Age must be at least 18 years old").max(110,"Age must be no more than 110 years old").required("Age is required").integer("Age must be an integer"),height:m().min(120,"Height must be at least 120cm").max(220,"Height must be no more than 220cm").required("Height is required").integer("Height must be an integer"),weight:m().min(40,"Weight must be at least 40kg").max(200,"Weight must be no more than 200kg").required("Weight is required").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",e=>/^\d+(\.\d{1})?$/.test(e))}),se=()=>{var x;const e=W(),n=L(B),[g,d]=h.useState(!1),[re,v]=h.useState(null),[w,j]=h.useState(n.avatarURL),$={name:n.name,age:n.age,gender:n.gender,height:n.height,weight:n.weight,activity:((x=n==null?void 0:n.activity)==null?void 0:x.toString())||""},k=a=>{e(P(a)),e(u("today")),e(E())},S=()=>{d(!1),e(u("today"))},q=a=>{const c=a.target.files[0];if(!c)return;const z=URL.createObjectURL(c);v(c),j(z),d(!0)};return t.jsx(t.Fragment,{children:t.jsx(R,{children:t.jsxs(V,{children:[t.jsx(I,{children:"Profile setting"}),t.jsxs(N,{children:[t.jsx(Y,{children:t.jsx(T,{src:X,alt:"Banner setings page"})}),t.jsx(G,{initialValues:$,onSubmit:a=>k(a),validationSchema:ne,children:({values:a})=>t.jsxs(Z,{children:[t.jsxs(o,{children:["Your name",t.jsx(s,{type:"text",name:"name",placeholder:"Enter your name",required:!0}),t.jsx(l,{name:"name",component:"div"})]}),t.jsxs(_,{children:["Your photo",t.jsx(s,{type:"file",name:"userAvatarFile",id:"userAvatarFile",accept:"image/*",onChange:q}),t.jsxs(o,{htmlFor:"userAvatarFile",children:[t.jsx(J,{children:t.jsx(K,{src:w||te,alt:"userAvatar"})}),t.jsxs(Q,{children:[t.jsx("img",{src:ee,alt:"Select File"}),"Download new photo"]})]})]}),t.jsxs(o,{children:["Your age",t.jsx(s,{type:"number",name:"age",placeholder:"Enter your age",required:!0}),t.jsx(l,{name:"age",component:"div"})]}),t.jsxs(y,{role:"group","aria-labelledby":"gender-head",children:[t.jsx(b,{id:"gender-head",children:"Gender"}),t.jsxs(O,{children:[t.jsx(r,{type:"radio",name:"gender",value:"male",selectedValue:a.gender,text:"Male"}),t.jsx(r,{type:"radio",name:"gender",value:"female",selectedValue:a.gender,text:"Female"})]})]}),t.jsxs(o,{children:["Height",t.jsx(s,{type:"number",name:"height",placeholder:"Enter your height",required:!0}),t.jsx(l,{name:"height",component:"div"})]}),t.jsxs(o,{children:["Weight",t.jsx(s,{type:"number",name:"weight",placeholder:"Enter your weight",required:!0}),t.jsx(l,{name:"weight",component:"div"})]}),t.jsxs(y,{role:"group","aria-labelledby":"activity-head",children:[t.jsx(b,{id:"activity-head",children:"Your activity"}),t.jsx(r,{name:"activity",id:"activity1",value:"1.2",selectedValue:a.activity,text:"1.2 - if you do not have physical activity and sedentary work"}),t.jsx(r,{name:"activity",id:"activity2",value:"1.375",selectedValue:a.activity,text:"1.375 - if you do short runs or light gymnastics 1-3 times a week"}),t.jsx(r,{name:"activity",id:"activity3",value:"1.55",selectedValue:a.activity,text:"1.55 - if you play sports with average loads 3-5 times a week"}),t.jsx(r,{name:"activity",id:"activity4",value:"1.725",selectedValue:a.activity,text:"1.725 - if you train fully 6-7 times a week"}),t.jsx(r,{name:"activity",id:"activity5",value:"1.9",selectedValue:a.activity.toString(),text:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]}),t.jsxs(U,{children:[t.jsx(H,{type:"submit",children:"Save"}),t.jsx(D,{type:"button",onClick:S,children:"Cancel"})]})]})})]})]})})})};export{se as default};
