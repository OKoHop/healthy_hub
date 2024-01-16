import{s as o,p as n,j as t,F as w,q as j,N as q,t as i,W as M}from"./index-9a561cf5.js";import{S as k}from"./Buttons.styled-d154cf06.js";const v=o.div`
  ${e=>n`
    background-color: ${e.theme.colors.primaryBlack};
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (${e.theme.mq.deskMin}) {
      flex-direction: row;
    }
  `}
`,C=o.div`
  ${e=>n`
    @media (${e.theme.mq.mobMin}) and (${e.theme.mq.mobMax}) {
      width: 300px;
      margin: 0 auto;
    }

    @media (${e.theme.mq.tabMin}) and (${e.theme.mq.tabMax}) {
      width: 444px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    @media (${e.theme.mq.deskMin}) {
      width: 444px;
      margin-top: 120px;
    }
  `}
`,B=o.h1`
  ${e=>n`
    margin-bottom: 16px;
    color: ${e.theme.colors.primaryWhite};
    ont-family: Poppins;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.25;

    @media (${e.theme.mq.mobMin}) and (${e.theme.mq.mobMax}) {
      font-size: 30px;
      line-height: 1.2;
    }

    @media (${e.theme.mq.tabMin}) and (${e.theme.mq.tabMax}) {
      text-align: center;
      align-self: center;
    }
  `}
`,W=o.h2`
  ${e=>n`
    margin-bottom: 24px;
    color: ${e.theme.colors.primaryGray};
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.33;

    @media (${e.theme.mq.tabMin}) and (${e.theme.mq.tabMax}) {
      width: 410px;
      font-size: 22px;
      line-height: 1.45;
      text-align: center;
    }

    @media (${e.theme.mq.deskMin}) {
      text-align: left;
    }
  `}
`,S=o.div`
  ${e=>n`
    display: flex;
    text-decoration: none;
    list-style: none;
    margin-bottom: 40px;

    @media (${e.theme.mq.tabMin}) and (${e.theme.mq.tabMax}) {
      width: 350px;
      margin: 0 auto 80px auto;
    }
    @media (${e.theme.mq.deskMin}) {
      margin-bottom: 80px;
    }
  `}
`,G=o.ul`
  margin-bottom: 16px;

  ${e=>n`
    @media (${e.theme.mq.mobMin}) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }

    @media (${e.theme.mq.tabMin}) {
      width: 444px;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: baseline;
      justify-content: space-between;
    }

    @media (${e.theme.mq.deskMin}) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }
    @media ${e.theme.mq.mobMin} {
      width: 100%;
      text-align: left;

      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  `}
`,H=o.span`
  margin-right: 8px;
`,L=o.li`
  color: ${e=>e.theme.colors.primaryWhite};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
`;function m({text:e,to:r,onClick:a,width:l,textColor:s,backGrColor:c,borderColor:h,widthTab:d,widthDesk:x,backGrColorHov:p,borderColorHov:g,textColorHov:f,widthTabHov:y,widthDeskHov:b,type:u}){return t.jsx(w,{shouldForwardProp:$=>j($),children:t.jsx(k,{as:q,to:r,text:e,onClick:a,type:u,width:l,textColor:s,backGrColor:c,borderColor:h,widthTab:d,widthDesk:x,backGrColorHov:p,textColorHov:f,borderColorHov:g,widthTabHov:y,widthDeskHov:b,children:e})})}const F=()=>{const e=["Set goals","Watch your calories","Keep track of your water intake","Control your weight"],r=t.jsxs(C,{children:[t.jsx(B,{children:"Set goals and achieve them"}),t.jsx(W,{children:"The service will help you set goals and follow them."}),t.jsxs(S,{children:[t.jsx(m,{to:"/signin",text:"Sign In",width:"122px",textColor:i.colors.primaryBlack2,backGrColor:i.colors.primaryGreenLite,borderColor:"transparent",widthTab:"192px",backGrColorHov:i.colors.primaryBlack2,borderColorHov:i.colors.primaryGreenLite,textColorHov:i.colors.primaryWhite,type:"submit"}),t.jsx(m,{to:"/signup",text:"Sign Up",width:"122px",textColor:i.colors.primaryWhite,backGrColor:i.colors.primaryBlack2,borderColor:i.colors.primaryBlack2,backGrColorHov:i.colors.primaryBlack2,borderColorHov:i.colors.primaryGreenLite,textColorHov:i.colors.primaryWhite,widthTabHov:"192px",type:"submit"})]}),t.jsx(G,{children:e.map((a,l)=>t.jsxs(L,{children:[t.jsx(H,{children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"8",fill:"none",children:t.jsx("circle",{cx:"4",cy:"4",r:"4",fill:"#E3FFA8"})})}),a]},l))})]});return t.jsx("div",{className:"container",children:t.jsx(v,{children:t.jsx(M,{children:r})})})};export{F as default};
