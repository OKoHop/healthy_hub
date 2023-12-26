import{s as o,o as n,j as t,F as p,p as g,N as q,t as i}from"./index-edbff4cb.js";import{S as j,w as k,a as v,b as C,c as S,d as B}from"./Buttons.styled-325e3d75.js";const G=o.div`
  ${e=>n`
    background-color: ${e.theme.colors.primaryBlack};
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (${e.theme.mq.deskMin}) {
      flex-direction: row;
    }
  `}
`,H=o.div`
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
`,T=o.h1`
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
`,F=o.div`
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
`,I=o.ul`
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
`,L=o.span`
  margin-right: 8px;
`,P=o.li`
  color: ${e=>e.theme.colors.primaryWhite};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
`;function x({text:e,to:a,onClick:r,width:m,textColor:l,backGrColor:s,borderColor:c,widthTab:d,widthDesk:h,backGrColorHov:b,borderColorHov:f,textColorHov:w,widthTabHov:$,widthDeskHov:y,type:u}){return t.jsx(p,{shouldForwardProp:M=>g(M),children:t.jsx(j,{as:q,to:a,text:e,onClick:r,type:u,width:m,textColor:l,backGrColor:s,borderColor:c,widthTab:d,widthDesk:h,backGrColorHov:b,textColorHov:w,borderColorHov:f,widthTabHov:$,widthDeskHov:y,children:e})})}const z=o.img`
  ${({widthMob:e,marginMob:a,widthTab:r,marginTab:m,widthDesk:l,marginDesk:s})=>n`
    
    @media (${i.mq.mobMin}) and (${i.mq.mobMax}) {
      width: ${e};
      margin: ${a};

    }

    @media (${i.mq.tabMin}) {
      width: ${r};
      margin: ${m};
      
    }

    @media (${i.mq.deskMin}) {
      width: ${l};
      margin: ${s};
    }
  `}
`;function A({src:e,alt:a,widthMob:r,marginMob:m,widthTab:l,marginTab:s,widthDesk:c,marginDesk:d}){return t.jsx(p,{shouldForwardProp:h=>g(h),children:t.jsx(z,{src:e,alt:a,widthMob:r,marginMob:m,widthTab:l,marginTab:s,widthDesk:c,marginDesk:d})})}const E=()=>{const e=["Set goals","Watch your calories","Keep track of your water intake","Control your weight"];return t.jsxs(G,{children:[t.jsxs("picture",{children:[k,v,C,t.jsx(A,{src:S,alt:B,widthMob:"300px",marginMob:"24px auto",widthTab:"380px",marginTab:"40px auto 80px",widthDesk:"592px",marginDesk:"40px 104px 72px 150px"})]}),t.jsxs(H,{children:[t.jsx(T,{children:"Set goals and achieve them"}),t.jsx(W,{children:"The service will help you set goals and follow them."}),t.jsxs(F,{children:[t.jsx(x,{to:"/signin",text:"Sign In",width:"122px",textColor:i.colors.primaryBlack2,backGrColor:i.colors.primaryGreenLite,borderColor:"transparent",widthTab:"192px",backGrColorHov:i.colors.primaryBlack2,borderColorHov:i.colors.primaryGreenLite,textColorHov:i.colors.primaryWhite,type:"submit"}),t.jsx(x,{to:"/signup",text:"Sign Up",width:"122px",textColor:i.colors.primaryWhite,backGrColor:i.colors.primaryBlack2,borderColor:i.colors.primaryBlack2,backGrColorHov:i.colors.primaryBlack2,borderColorHov:i.colors.primaryGreenLite,textColorHov:i.colors.primaryWhite,widthTabHov:"192px",type:"submit"})]}),t.jsx(I,{children:e.map((a,r)=>t.jsxs(P,{children:[t.jsx(L,{children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"8",fill:"none",children:t.jsx("circle",{cx:"4",cy:"4",r:"4",fill:"#E3FFA8"})})}),a]},r))})]})]})};export{E as default};
