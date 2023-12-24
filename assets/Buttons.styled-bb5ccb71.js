import{j as g,S as i,n as m,t as s,s as u}from"./index-fbfa66e3.js";const c=(e,t)=>{const r=t==="mob"?"(max-width: 833px)":`(min-width: ${$(t)})`;return Object.keys(e[t]).map((o,n)=>g.jsx("source",{media:r,srcSet:`${e[t][o][0]} 1x, ${e[t][o][1]} 2x`,type:`image/${o}`},n))},$=e=>{switch(e){case"desk":return"1440px";case"tab":return"834px";case"mob":return"833px";default:return"1440px"}},_="/healthy_hub/assets/sport_fit_tracker_desk@2x-a4191530.png",w="/healthy_hub/assets/sport_fit_tracker_tab@1x-e660733f.png",k="/healthy_hub/assets/sport_fit_tracker_tab@2x-66eecfd8.png",f="/healthy_hub/assets/sport_fit_tracker_mob@1x-52c9f1ea.png",y="/healthy_hub/assets/sport_fit_tracker_mob@2x-0a0612c8.png",a={desk:{png:[`${i}`,`${_}`]},tab:{png:[`${w}`,`${k}`]},mob:{png:[`${f}`,`${y}`]}},S=i.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),T=c(a,"desk"),j=c(a,"tab"),q=c(a,"mob"),v=`${a.desk.png[0]}`,B=S,I=m`
  padding: 8px 10px;
  border-radius: 12px;
  text-decoration: none;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
  text-align: center;
  transition: ${s.transition.customTrans};
`,D=u.button`
  ${I}
  ${({width:e,textColor:t,backGrColor:r,borderColor:o,widthTab:n,widthDesk:p,backGrColorHov:d,borderColorHov:l,textColorHov:h,widthTabHov:b,widthDeskHov:x})=>m`
    width: ${e};
    color: ${t};
    background-color: ${r};
    margin-right: 16px;
    cursor: pointer;
    padding: 8px 10px;
    border-radius: 12px;
    text-align: center;
    border: 1px solid ${o};

    @media (${s.mq.tabMin}) {
      width: ${n};
    }

    @media (${s.mq.deskMin}) {
      width: ${p};
    }

    &&:hover,
    &&:focus {
      background-color: ${d};
      border: 1px solid ${l};
      color: ${h};
      animation: ${s.transition.customTrans};
    }

    @media (${s.mq.tabMin}) {
      &&:hover,
      &&:focus {
        width: ${b};
      }
    }

    @media (${s.mq.deskMin}) {
      &&:hover,
      &&:focus {
        width: ${x};
      }
    }
  `}
`;export{D as S,j as a,T as b,v as c,B as d,S as e,c as g,a as i,I as s,q as w};
