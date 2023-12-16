import{s as i,n as o,N as d,j as t}from"./index-e8452305.js";const c=i.div`
  ${e=>o`
    background-color: ${e.theme.colors.primaryBlack2};
    display: flex;

    @media (${e.theme.mq.mobile}) and (max-width: 833px) {
      flex-direction: column;
      margin: 0 auto;
      padding: 24px 10px 40px 10px;
    }

    @media (${e.theme.mq.tablet}) and (max-width: 1439px) {
      flex-direction: column;
      width: 834px;
      padding: 40px 195px 286px 195px;
    }

    @media (${e.theme.mq.desktop}) {
      flex-direction: row;
      justify-content: center;
      width: 1440px;
      padding: 40px 150px 72px 150px;
    }
  `}
`,g=i.img`
  ${e=>o`
    margin-right: auto;
    margin-left: auto;
    margin-top: 40px;

    @media (${e.theme.mq.mobile}) and (max-width: 833px) {
      width: 300px;
      margin-top: 24px;
      margin-bottom: 24px;
    }

    @media (${e.theme.mq.tablet}) and (max-width: 1439px) {
      width: 380px;
      margin-bottom: 80px;
    }

    @media (${e.theme.mq.desktop}) {
      width: 592px;
      margin: 40px 104px 72px 0;
    }
  `}
`,$=i.div`
  ${e=>o`
    @media (${e.theme.mq.mobile}) and (max-width: 833px) {
      width: 300px;
      margin: 0 auto 40px;
    }

    @media (${e.theme.mq.tablet}) and (max-width: 1439px) {
      max-width: 444px;
      margin: 40px auto 286px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    @media (${e.theme.mq.desktop}) {
      margin-top: 120px;
    }
  `}
`,f=i.h1`
  ${e=>o`
    margin-bottom: 16px;
    color: ${e.theme.colors.primaryWhite};
    ont-family: Poppins;
    font-size: 24px;
    font-weight: 500;
    line-height: 30/24;

    @media (${e.theme.mq.mobile}) and (max-width: 833px) {
      font-size: 30px;
      line-height: 36/30;
    }

    @media (${e.theme.mq.tablet}) and (max-width: 1439px) {
      text-align: center;
      align-self: center;
    }
    @media (${e.theme.mq.tablet}) {
      font-size: 30px;
    }
  `}
`,b=i.h2`
  ${e=>o`
    margin-bottom: 24px;
    color: ${e.theme.colors.primaryGray};
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24/18;

    @media (${e.theme.mq.mobile}) and (max-width: 833px) {
      line-height: 24/18;
    }

    @media (${e.theme.mq.tablet}) and (max-width: 1439px) {
      width: 410px;
      font-size: 22px;
      line-height: 32/22;
      text-align: center;
    }

    @media (${e.theme.mq.desktop}) {
      width: 410px;
      font-size: 22px;
      line-height: 32/22;
      text-align: left;
    }
  `}
`,u=i.div`
  ${e=>o`
    display: flex;
    text-decoration: none;
    list-style: none;
    margin-bottom: 40px;
    @media (${e.theme.mq.mobile}) and (max-width: 833px) {
      margin-bottom: 40px;
    }

    @media (${e.theme.mq.tablet}) and (max-width: 1439px) {
      width: 350px;
      margin: 0 auto 80px auto;
    }
    @media (${e.theme.mq.desktop}) {
      margin-bottom: 80px;
    }
  `}
`,x=o`
  display: block;
  padding: 8px 10px;
  border-radius: 12px;
  text-decoration: none;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20/14;
  text-align: center;
  transition: ${e=>e.theme.transition.customTrans};
`,w=i(d)`
  ${x}
  ${e=>o`
    width: 142px;
    border: 1px solid transparent;
    background-color: ${e.theme.colors.primaryGreenLite};
    color: ${e.theme.colors.primaryBlack2};
    margin-right: 16px;

    &&:hover,
    &&:focus {
      cursor: pointer;
      color: ${e.theme.colors.primaryWhite};
      background-color: ${e.theme.colors.primaryBlack2};
      border: 1px solid ${e.theme.colors.primaryGreenLite};
      animation: ${e.theme.transition.customTrans};
    }

    @media (${e.theme.mq.mobile}) and (max-width: 833px) {
      &&:hover,
      &&:focus {
        width: 142px;
      }
    }

    @media (${e.theme.mq.tablet}) {
      width: 212px;
    }
  `}
`,y=i(d)`
  ${x}
  ${e=>o`
    width: 122px;
    border: none;
    background-color: ${e.theme.colors.primaryBlack2};
    color: ${e.theme.colors.primaryWhite};

    &&:hover,
    &&:focus {
      cursor: pointer;
      border: 1px solid ${e.theme.colors.primaryGreenLite};
      color: ${e.theme.colors.primaryWhite};
      animation: ${e.theme.transition.customTrans};
    }

    @media (${e.theme.mq.mobile}) and (max-width: 833px) {
      &&:hover,
      &&:focus {
        width: 132px; 
        margin-left: -10px; 
      }
    } 

    @media (${e.theme.mq.tablet}) {
      &&:hover,
      &&:focus {
        width: 212px;
      }
    }
  `}
`,k=i.ul`
  margin-bottom: 16px;

  ${e=>o`
    @media (${e.theme.mq.mobile}) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }

    @media (${e.theme.mq.tablet}) {
      width: 444px;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: baseline;
      justify-content: space-between;
    }

    @media (${e.theme.mq.desktop}) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }
    @media ${e.theme.mq.mobile} {
      width: 100%;
      text-align: left;

      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  `}
`,q=i.span`
  margin-right: 8px;
`,j=i.li`
  color: ${e=>e.theme.colors.primaryWhite};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20/14;
`,m={desk:{png:["sport_fit_tracker_desk@1x.png","sport_fit_tracker_desk@2x.png"]},tab:{png:["sport_fit_tracker_tab@1x.png","sport_fit_tracker_tab@2x.png"]},mob:{png:["sport_fit_tracker_mob@1x.png","sport_fit_tracker_mob@2x.png"]}},_=m.desk.png[0].split("_d")[0].replace(/_/g," "),r="/healthy_hub/src/images/Illustrations/Welcome",l=(e,n,a)=>{const h=n==="mob"?"(max-width: 767px)":`(min-width: ${v(n)})`;return Object.keys(a[n]).map((s,p)=>t.jsx("source",{media:h,srcSet:`${e}/${a[n][s][0]} 1x, ${e}/${a[n][s][1]} 2x`,type:`image/${s}`},p))},v=e=>{switch(e){case"desk":return"1440px";case"tab":return"768px";case"mob":return"767px";default:return"1440px"}},B=()=>{const e=["Set goals","Watch your calories","Keep track of your water intake","Control your weight"];return t.jsxs(c,{children:[t.jsxs("picture",{children:[l(r,"desk",m),l(r,"tab",m),l(r,"mob",m),t.jsx(g,{src:`${r}/${m.desk.png[0]}`,alt:`${_}`})]}),t.jsxs($,{children:[t.jsx(f,{children:"Set goals and achieve them"}),t.jsx(b,{children:"The service will help you set goals and follow them."}),t.jsxs(u,{children:[t.jsx(w,{to:"/signin",children:"Sign in"}),t.jsx(y,{to:"/signup",children:"Sign up"})]}),t.jsx(k,{children:e.map((n,a)=>t.jsxs(j,{children:[t.jsx(q,{children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"8",fill:"none",children:t.jsx("circle",{cx:"4",cy:"4",r:"4",fill:"#E3FFA8"})})}),n]},a))})]})]})};export{B as default};
