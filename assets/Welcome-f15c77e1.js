import{s as o,n as a,t,j as i,F as $,i as b,N as q}from"./index-023caa11.js";import{w as k,a as j,b as v,c as C,d as S}from"./WelcomeImg-77ff7dac.js";const B=o.div`
  ${e=>a`
    background-color: ${e.theme.colors.primaryBlack2};
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (${e.theme.mq.deskMin}) {
      flex-direction: row;
    }
  `}
`,T=o.div`
  ${e=>a`
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
`,G=o.h1`
  ${e=>a`
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
`,H=o.h2`
  ${e=>a`
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
`,P=o.div`
  ${e=>a`
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
`,W=o.ul`
  margin-bottom: 16px;

  ${e=>a`
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
`,z=o.span`
  margin-right: 8px;
`,F=o.li`
  color: ${e=>e.theme.colors.primaryWhite};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
`,I=a`
  padding: 8px 10px;
  border-radius: 12px;
  text-decoration: none;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
  text-align: center;
  transition: ${t.transition.customTrans};
`,L=o.button`
  ${I}
  ${({width:e,textColor:n,backGrColor:r,borderColor:m,widthTab:s,widthDesk:l,backGrColorHov:d,borderColorHov:c,textColorHov:h,widthTabHov:x,widthDeskHov:p})=>a`
    width: ${e};
    color: ${n};
    background-color: ${r};
    margin-right: 16px;
    cursor: pointer;
    padding: 8px 10px;
    border-radius: 12px;
    text-align: center;
    border: 1px solid ${m};

    @media (${t.mq.tabMin}) {
      width: ${s};
    }

    @media (${t.mq.deskMin}) {
      width: ${l};
    }

    &&:hover,
    &&:focus {
      background-color: ${d};
      border: 1px solid ${c};
      color: ${h};
      animation: ${t.transition.customTrans};
    }

    @media (${t.mq.tabMin}) {
      &&:hover,
      &&:focus {
        width: ${x};
      }
    }

    @media (${t.mq.deskMin}) {
      &&:hover,
      &&:focus {
        width: ${p};
      }
    }
  `}
`;function g({text:e,to:n,onClick:r,width:m,textColor:s,backGrColor:l,borderColor:d,widthTab:c,widthDesk:h,backGrColorHov:x,borderColorHov:p,textColorHov:f,widthTabHov:u,widthDeskHov:w,type:y}){return i.jsx($,{shouldForwardProp:M=>b(M),children:i.jsx(L,{as:q,to:n,text:e,onClick:r,type:y,width:m,textColor:s,backGrColor:l,borderColor:d,widthTab:c,widthDesk:h,backGrColorHov:x,textColorHov:f,borderColorHov:p,widthTabHov:u,widthDeskHov:w,children:e})})}const A=o.img`
  ${({widthMob:e,marginMob:n,widthTab:r,marginTab:m,widthDesk:s,marginDesk:l})=>a`
    
    @media (${t.mq.mobMin}) and (${t.mq.mobMax}) {
      width: ${e};
      margin: ${n};

    }

    @media (${t.mq.tabMin}) {
      width: ${r};
      margin: ${m};
      
    }

    @media (${t.mq.deskMin}) {
      width: ${s};
      margin: ${l};
    }
  `}
`;function D({src:e,alt:n,widthMob:r,marginMob:m,widthTab:s,marginTab:l,widthDesk:d,marginDesk:c}){return i.jsx($,{shouldForwardProp:h=>b(h),children:i.jsx(A,{src:e,alt:n,widthMob:r,marginMob:m,widthTab:s,marginTab:l,widthDesk:d,marginDesk:c})})}const K=()=>{const e=["Set goals","Watch your calories","Keep track of your water intake","Control your weight"];return i.jsxs(B,{children:[i.jsxs("picture",{children:[k,j,v,i.jsx(D,{src:C,alt:S,widthMob:"300px",marginMob:"24px auto",widthTab:"380px",marginTab:"40px auto 80px",widthDesk:"592px",marginDesk:"40px 104px 72px 150px"})]}),i.jsxs(T,{children:[i.jsx(G,{children:"Set goals and achieve them"}),i.jsx(H,{children:"The service will help you set goals and follow them."}),i.jsxs(P,{children:[i.jsx(g,{to:"/signin",text:"Sign In",width:"122px",textColor:t.colors.primaryBlack2,backGrColor:t.colors.primaryGreenLite,borderColor:"transparent",widthTab:"192px",backGrColorHov:t.colors.primaryBlack2,borderColorHov:t.colors.primaryGreenLite,textColorHov:t.colors.primaryWhite,type:"submit"}),i.jsx(g,{to:"/signup",text:"Sign Up",width:"122px",textColor:t.colors.primaryWhite,backGrColor:t.colors.primaryBlack2,borderColor:t.colors.primaryBlack2,backGrColorHov:t.colors.primaryBlack2,borderColorHov:t.colors.primaryGreenLite,textColorHov:t.colors.primaryWhite,widthTabHov:"192px",type:"submit"})]}),i.jsx(W,{children:e.map((n,r)=>i.jsxs(F,{children:[i.jsx(z,{children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"8",fill:"none",children:i.jsx("circle",{cx:"4",cy:"4",r:"4",fill:"#E3FFA8"})})}),n]},r))})]})]})};export{K as default};
