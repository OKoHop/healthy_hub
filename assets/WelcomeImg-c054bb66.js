import{j as n,S as o}from"./index-bb5e2678.js";const a=(e,s)=>{const r=s==="mob"?"(max-width: 833px)":`(min-width: ${p(s)})`;return Object.keys(e[s]).map((c,m)=>n.jsx("source",{media:r,srcSet:`${e[s][c][0]} 1x, ${e[s][c][1]} 2x`,type:`image/${c}`},m))},p=e=>{switch(e){case"desk":return"1440px";case"tab":return"834px";case"mob":return"833px";default:return"1440px"}},_="/healthy_hub/assets/sport_fit_tracker_desk@2x-a4191530.png",b="/healthy_hub/assets/sport_fit_tracker_tab@1x-e660733f.png",l="/healthy_hub/assets/sport_fit_tracker_tab@2x-66eecfd8.png",g="/healthy_hub/assets/sport_fit_tracker_mob@1x-52c9f1ea.png",h="/healthy_hub/assets/sport_fit_tracker_mob@2x-0a0612c8.png",t={desk:{png:[`${o}`,`${_}`]},tab:{png:[`${b}`,`${l}`]},mob:{png:[`${g}`,`${h}`]}},i=o.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),u=a(t,"desk"),d=a(t,"tab"),k=a(t,"mob"),w=`${t.desk.png[0]}`,$=i;export{d as a,u as b,w as c,$ as d,i as e,a as g,t as i,k as w};
