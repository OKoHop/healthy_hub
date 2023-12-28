import{s as i,u,a as m,r as f,f as Y,j as t,c as O,g as H,N as Z,M as _,b as tt,d as y,e as et,_ as V,P as b,h as it,i as M,L as J}from"./index-4c2933a5.js";import{C as k,A as S,p as D,a as $,D as C}from"./index-f904e8ab.js";import{R as nt,t as F,s as st,b as ot,c as v,l as at,d as rt,a as dt}from"./calculateTotalIngridients-b7b14b9d.js";import{g as lt,r as ct,R as xt}from"./randomizeFood-9289dcd6.js";const pt=i.div`
  border-radius: 12px;
  background-color: #0f0f0f;
  display: flex;
  flex-direction: column;

  @media (max-width: 833px) {
    width: 300px;
    height: 212px;
    padding: 16px 12px;
    gap: 20px;
  }

  @media (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 40px;
    gap: 32px;
  }

  @media (min-width: 1440px) {
    width: 328px;
    height: 240px;
    padding: 24px 40px;
    gap: 32px;
  }
`,B=i.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #b6b6b6;
`,R=i.p`
  font-weight: 600;
  font-size: 34px;
  line-height: 1.12;
  display: flex;
  align-items: center;
  gap: 4px;
`,P=i.div`
  display: flex;
  gap: 20px;
`,ht=i.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`,I=i.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 1.33;
  margin-bottom: 6px;

  @media (max-width: 833px) {
    font-size: 18px;
  }
`,ft=i.div`
  @media (max-width: 833px) {
    width: 300px;
  }

  @media (min-width: 834px) {
    width: 380px;
  }

  @media (min-width: 1440px) {
    width: 328px;
  }
`,mt=i.svg`
  width: 80px;
  height: 80px;
  stroke: #45ffbc;
  fill: #0f0f0f;
`,gt=i.svg`
  width: 80px;
  height: 80px;
  stroke: #b6c3ff;
  fill: #0f0f0f;
`,w="/healthy_hub/assets/today-svg-sprite-29233aff.svg",K=e=>e.daily.calories,Q=e=>e.daily.water,ut=()=>{const e=u(),o=m(K),a=m(Q);return f.useEffect(()=>{e(Y())},[e]),t.jsxs(ft,{children:[t.jsx(I,{children:"Daily goal"}),t.jsxs(pt,{children:[t.jsxs(P,{children:[t.jsx(mt,{children:t.jsx("use",{href:`${w}#bubble`})}),t.jsxs("div",{children:[t.jsx(B,{children:"Calories"}),t.jsx(R,{children:o&&Math.round(o)})]})]}),t.jsxs(P,{children:[t.jsx(gt,{children:t.jsx("use",{href:`${w}#water`})}),t.jsxs("div",{children:[t.jsx(B,{children:"Water"}),t.jsxs(R,{children:[a&&Math.round(a)," ",t.jsx(ht,{children:"ml"})]})]})]})]})]})},bt=e=>e.nutrients.carbonohidrates,wt=e=>e.nutrients.protein,jt=e=>e.nutrients.fat,yt=e=>e.nutrients.dailyNutrients.totalCalories,vt=e=>e.nutrients.dailyNutrients.totalCarbohidrates,kt=e=>e.nutrients.dailyNutrients.totalProtein,St=e=>e.nutrients.dailyNutrients.totalFat,Dt=e=>e.nutrients.dailyNutrients.waterIntake,$t=e=>e.nutrients.dailyNutrients.foodIntake.breakfast,Ct=O([vt],e=>e||0);O([$t],e=>{let o=0;return e?(e.map(a=>o+=a.carbohidrates),o):0});k.register(S,D,$);const zt=()=>{const e=m(K),o=m(yt),a=(s,n)=>!n&&!s?0:n-s,r={datasets:[{data:[(s=>s||0)(o),a(o,e)],backgroundColor:["#45FFBC","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},x={id:"textCenter",beforeDatasetsDraw(s){const{ctx:n,data:h}=s,l=s.getDatasetMeta(0).data[0].x,c=s.getDatasetMeta(0).data[0].y;n.save(),n.font="500 32px sans-serif",n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.fillText(h.datasets[0].data[0],l,c-10),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.fillText("calories",l,c+20)}},p={id:"backgroundCirgle",beforeDatasetsDraw(s){const{ctx:n}=s;n.save();const h=s.getDatasetMeta(0).data[0].x,l=s.getDatasetMeta(0).data[0].y,c=s.getDatasetMeta(0).data[0].innerRadius,g=s.getDatasetMeta(0).data[0].outerRadius,W=g-c,X=Math.PI/180;n.beginPath(),n.strokeStyle="#292928",n.lineWidth=W,n.arc(h,l,g-W/2,0,X*360,!1),n.stroke()}};return t.jsx(C,{data:r,plugins:[x,p]})},Mt=i.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`,Ft=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,It=i.div`
  display: flex;
  gap: 12px;
`,Wt=i.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,T=i.p`
  font-size: 14px;
  line-height: 1.43;
`,N=i.span`
  color: #b6b6b6;
`;k.register(S,D,$);const Bt=()=>{const e=m(bt),o=m(Ct),a=(s,n)=>s-n===null?0:s-n,d=(s,n)=>isNaN(Math.round(n/s*100))?0:Math.round(n/s*100),r=s=>100-s,x={datasets:[{data:[d(e,o),r(d(e,o))],backgroundColor:["#FFC4F7","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},p={id:"textCenter",beforeDatasetsDraw(s){const{ctx:n,data:h}=s,l=s.getDatasetMeta(0).data[0].x,c=s.getDatasetMeta(0).data[0].y,g=h.datasets[0].data[0];n.save(),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.textAlign="center",n.textBaseline="middle",n.fillText(`${g}%`,l,c)}};return t.jsxs(Mt,{children:[t.jsx(C,{data:x,plugins:[p]}),t.jsxs(Ft,{children:[t.jsx(Wt,{children:"Carbonohidrates"}),t.jsxs(It,{children:[t.jsxs(T,{children:["Goal: ",t.jsx(N,{children:e})]}),t.jsxs(T,{children:["left: ",t.jsx(N,{children:a(e,o)})]})]})]})]})},Rt=i.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`,Pt=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Tt=i.div`
  display: flex;
  gap: 12px;
`,Nt=i.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,L=i.p`
  font-size: 14px;
  line-height: 1.43;
`,E=i.span`
  color: #b6b6b6;
`;k.register(S,D,$);const Lt=()=>{const e=m(jt)||0,o=m(St)||0,a=(s,n)=>s-n,d=(s,n)=>isNaN(Math.round(n/s*100))?0:Math.round(n/s*100),r=s=>100-s,x={datasets:[{data:[d(e,o),r(d(e,o))],backgroundColor:["#FFF3B7","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},p={id:"textCenter",beforeDatasetsDraw(s){const{ctx:n,data:h}=s,l=s.getDatasetMeta(0).data[0].x,c=s.getDatasetMeta(0).data[0].y,g=h.datasets[0].data[0];n.save(),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.textAlign="center",n.textBaseline="middle",n.fillText(`${g}%`,l,c)}};return t.jsxs(Rt,{children:[t.jsx(C,{data:x,plugins:[p]}),t.jsxs(Pt,{children:[t.jsx(Nt,{children:"Fat"}),t.jsxs(Tt,{children:[t.jsxs(L,{children:["Goal: ",t.jsx(E,{children:e})]}),t.jsxs(L,{children:["left: ",t.jsx(E,{children:a(e,o)})]})]})]})]})},Et=i.div`
  background-color: #0f0f0f;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 833px) {
    width: 300px;
    height: 380px;
    padding: 16px 12px;
  }

  @media (min-width: 834px) {
    width: 780px;
    height: 240px;
    padding: 36px 40px;

    flex-direction: row;
    gap: 40px;
  }

  @media (min-width: 1440px) {
    width: 560px;
    height: 240px;
    padding: 36px 40px;

    flex-direction: row;
    gap: 40px;
  }
`,qt=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,At=i.div`
  width: 168px;
  height: 168px;
`,Gt=i.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`,Ot=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Ht=i.div`
  display: flex;
  gap: 12px;
`,_t=i.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,q=i.p`
  font-size: 14px;
  line-height: 1.43;
`,A=i.span`
  color: #b6b6b6;
`;k.register(S,D,$);const Vt=()=>{const e=m(wt)||0,o=m(kt)||0,a=(s,n)=>s-n,d=(s,n)=>isNaN(Math.round(n/s*100))?0:Math.round(n/s*100),r=s=>100-s,x={datasets:[{data:[d(e,o),r(d(e,o))],backgroundColor:["#B6B6B6","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},p={id:"textCenter",beforeDatasetsDraw(s){const{ctx:n,data:h}=s,l=s.getDatasetMeta(0).data[0].x,c=s.getDatasetMeta(0).data[0].y,g=h.datasets[0].data[0];n.save(),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.textAlign="center",n.textBaseline="middle",n.fillText(`${g}%`,l,c)}};return t.jsxs(Gt,{children:[t.jsx(C,{data:x,plugins:[p]}),t.jsxs(Ot,{children:[t.jsx(_t,{children:"Protein"}),t.jsxs(Ht,{children:[t.jsxs(q,{children:["Goal: ",t.jsx(A,{children:e})]}),t.jsxs(q,{children:["left: ",t.jsx(A,{children:a(e,o)})]})]})]})]})},Jt=()=>{const e=u();return f.useEffect(()=>{e(H())}),t.jsxs("div",{children:[t.jsx(I,{children:"Food"}),t.jsxs(Et,{children:[t.jsx(At,{children:t.jsx(zt,{})}),t.jsxs(qt,{children:[t.jsx(Bt,{}),t.jsx(Vt,{}),t.jsx(Lt,{})]})]})]})},Kt=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`,Qt=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 834px) {
    display: flex;
    gap: 20px;
    flex-direction: row;
    justify-content: flex-start;
  }

  @media (min-width: 1440px) {
    display: flex;
    gap: 20px;
    justify-content: flex-start;
  }
`,Ut=i.svg`
  width: 16px;
  height: 16px;
  stroke: #b6b6b6;
`,Xt=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: 834px) {
    margin-bottom: 24px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 16px;
  }
`,Yt=i.h1`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.25;

  @media (max-width: 834px) {
    font-size: 24px;
  }
`,Zt=i(Z)`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;

  &:visited {
    color: #b6b6b6;
  }

  @media (min-width: 834px) {
    font-size: 16px;
    line-height: 1.375;
  }

  @media (min-width: 1140px) {
    font-size: 16px;
    line-height: 1.375;
  }
`,te=i.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,ee=i.section`
  position: relative;
  margin-top: 16px;

  @media (min-width: 834px) {
    margin-top: 24px;
  }

  @media (min-width: 1440px) {
    margin-top: 20px;
  }
`,ie=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 834px) {
    flex-basis: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,ne=i.div`
  border-radius: 12px;
  background-color: #0f0f0f;
  display: flex;
  position: relative;

  @media (max-width: 833px) {
    width: 300px;
    height: 224px;
    padding: 16px 12px;
    gap: 20px;
  }

  @media (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 22px;
    gap: 40px;
  }

  @media (min-width: 1440px) {
    width: 444px;
    height: 240px;
    padding: 24px 40px;
  }
`,se=i.div`
  @media (min-width: 834px) {
    display: flex;
    gap: 40px;
    align-items: center;
    margin-bottom: 16px;
  }
`,oe=i.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  margin-top: 22px;
  margin-bottom: 12px;

  @media (max-width: 833px) {
    margin-top: 22px;
    margin-bottom: 12px;
  }

  @media (min-width: 834px) {
    margin-top: 33px;
    margin-bottom: 12px;
  }

  @media (min-width: 1440px) {
    margin-top: 33px;
    margin-bottom: 12px;
  }
`,ae=i.p`
  font-weight: 500;
  font-size: 28px;
  line-height: 1.21;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;

  @media (min-width: 810px) {
    margin-bottom: 0px;
  }
`,G=i.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`,re=i.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`,de=i.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  display: flex;
  gap: 4px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    margin-bottom: 0px;
  }
`,U=i.svg`
  width: 16px;
  height: 16px;
  stroke: #0f0f0f;

  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`,le=i.button`
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 8px 10px;
  background-color: #e3ffa8;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: #0f0f0f;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  display: flex;
  gap: 8px;
  align-items: center;

  &:hover,
  :focus {
    background-color: transparent;
    border: 1px solid #e3ffa8;
    color: #ffffff;
    & > ${U} {
      stroke: #ffffff;
    }
  }
`,ce=i.div`
  width: 80px;
  height: 192px;
  border-radius: 20px;
  background-color: #292928;
  padding: 8px;

  position: relative;
`,xe=i.div`
  width: 64px;
  height: ${e=>`${(e.height===!1?0:e.height)/100*128}px`};
  max-height: 128px;
  border-radius: 20px;
  background-color: #b6c3ff;

  position: absolute;
  bottom: 8px;
`,pe=i.div`
  @media (max-width: 833px) {
    width: 300px;
  }

  @media (min-width: 834px) {
    width: 380px;
  }

  @media (min-width: 1440px) {
    width: 444px;
  }
`,he=i.svg`
  width: 20px;
  height: 20px;
  stroke: #e3ffa8;
  cursor: pointer;

  position: absolute;
  top: 24px;
  right: 24px;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  @media (max-width: 833px) {
    top: 12px;
    right: 12px;
  }

  &:hover,
  :focus {
    transform: scale(1.2);
  }
`,fe=i.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.37;
  text-align: center;
  color: #b6c3ff;

  position: absolute;
  top: 28px;
  left: 22px;
`,me=i.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 24px;

  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,ge=i.form`
  @media (min-width: 834px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,ue=i.input`
  width: 276px;
  height: 34px;
  border: 1px solid #e3ffa8;
  border-radius: 12px;
  padding: 8px 10px;
  background-color: #0f0f0f;
  color: #b6b6b6;

  &::placeholder {
    color: #b6b6b6;
  }

  @media (min-width: 834px) {
    width: 212px;
    height: 36px;
    margin-left: auto;
    margin-right: auto;
  }
`,be=i.label`
  margin-bottom: 32px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;

  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 834px) {
    text-align: center;
  }
`,we=i.button`
  width: 276px;
  height: 36px;
  border: inherit;
  border-radius: 12px;
  background-color: #e3ffa8;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  @media (min-width: 834px) {
    width: 212px;
    height: 36px;
  }

  &:hover,
  :focus {
    background-color: transparent;
    border: 1px solid #e3ffa8;
    color: #ffffff;
  }
`,je=i.p`
  margin-top: 16px;
  text-align: center;
  color: #b6b6b6;
  cursor: pointer;
`,ye=i(_)`
  width: 300px;
  height: 266px;
  border: inherit;
  border-radius: 12px;
  padding: 16px 12px 24px;
  background-color: #0f0f0f;

  position: absolute;
  top: 30%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  @media (min-width: 834px) {
    width: 338px;
    height: 280px;
    padding: 24px 40px;
  }
`;_.setAppElement("#root");const ve=({open:e,close:o})=>{const a=u(),d=r=>{r.preventDefault();const p=r.currentTarget.elements.water.value;a(tt(p)),setTimeout(()=>{a(y())},1),o()};return t.jsxs(ye,{isOpen:e,onRequestClose:o,contentLabel:"Example Modal",overlayClassName:"Overlay",children:[t.jsx(me,{children:"Add water intake"}),t.jsxs("div",{children:[t.jsxs(ge,{onSubmit:d,children:[t.jsxs(be,{children:["How match water",t.jsx(ue,{type:"text",name:"water",placeholder:"Enter milliliters",autoComplete:"off"})]}),t.jsx(we,{type:"submit",children:"Confirm"})]}),t.jsx(je,{onClick:o,children:"Cancel"})]})]})},ke=e=>e.water.waterIntake,Se=()=>{const[e,o]=f.useState(!1),a=m(Q)||0;m(ke);const d=u(),r=m(Dt)||0;function x(){o(!0)}function p(){o(!1)}function s(l,c){return l-r<0?0:Math.round(l-r)}function n(l,c){return c/l*100>=100?100:Math.round(c/l*100)}function h(){d(et()),setTimeout(()=>{d(y())},100),V.success("WaterIntake has been successfuly reset")}return f.useEffect(()=>{d(y())},[r]),t.jsxs(t.Fragment,{children:[t.jsxs(pe,{children:[t.jsx(I,{children:"Water"}),t.jsxs(ne,{children:[t.jsxs(ce,{children:[t.jsxs(fe,{children:[n(a,r)," %"]}),t.jsx(xe,{height:n(a,r)||0})]}),t.jsxs("div",{children:[t.jsx(he,{onClick:h,children:t.jsx("use",{href:`${w}#trash`})}),t.jsx(oe,{children:"Water consumption"}),t.jsxs(se,{children:[t.jsxs(ae,{children:[r&&r," ",t.jsx(G,{children:"ml"})]}),t.jsxs(de,{children:["left: ",t.jsx(re,{children:s(a)})," ",t.jsx(G,{children:"ml"})]})]}),t.jsxs(le,{onClick:x,children:[t.jsx(U,{children:t.jsx("use",{href:`${w}#add`})}),"Add water intake"]})]})]})]}),t.jsx(ve,{open:e,close:p})]})},De=i.li`
  @media screen and (${e=>e.theme.mq.tabMin}) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,$e=i.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: ${e=>e.theme.colors.primaryWhite};

  @media screen and (${e=>e.theme.mq.tabMin}) {
    margin-bottom: 0px;
  }
`,Ce=i.h3`
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 24px;
`,ze=i.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 20px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    flex-direction: row;
    column-gap: 20px;
  }
`,Me=i.p`
  min-width: 190px;
`,Fe=i.p`
  width: 110px;
`,Ie=i.p`
  width: 60px;
`,z=i.span`
  color: ${e=>e.theme.colors.primaryGray};
  font-weight: ${e=>e.theme.fontWeights.medium};
`,We=i.img`
  width: 36px;
  height: 36px;
`,Be=i.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: ${e=>e.theme.colors.primaryGreenLite};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
`,Re=i.svg`
  width: 20px;
  height: 20px;
  stroke: #e3ffa8;
  cursor: pointer;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  :focus {
    transform: scale(1.2);
  }
`,j=({title:e,image:o,info:a})=>{const[d,r]=f.useState(!1),x=u(),p=()=>r(!d),s=e.toLowerCase();function n(g){x(it(g)),setTimeout(()=>{x(y()),x(M(F))},100),V.success("FoodIntake has been successfuly delete")}const{carbohidrates:h,protein:l,fat:c}=a;return t.jsxs(De,{children:[t.jsxs($e,{children:[t.jsx(We,{src:o,alt:"Plate"}),t.jsx(Ce,{children:e})]}),h!==0||l!==0||c!==0?t.jsxs(ze,{children:[t.jsxs(Me,{children:["Carbonohidrates: ",t.jsx(z,{children:h})]}),t.jsxs(Fe,{children:["Protein: ",t.jsx(z,{children:l})]}),t.jsxs(Ie,{children:["Fat: ",t.jsx(z,{children:c})]}),t.jsx(Re,{onClick:()=>{n(s)},children:t.jsx("use",{href:`${w}#trash`})})]}):t.jsx(Be,{onClick:p,children:"+ Record your meal"}),d&&t.jsx(nt,{onClose:p,image:o,mealType:e})]})};j.propTypes={title:b.string.isRequired,image:b.string.isRequired,info:b.shape({carbohidrates:b.number.isRequired,protein:b.number.isRequired,fat:b.number.isRequired})};const Pe=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`,Te=i.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`,Ne=i.h2`
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: ${e=>e.theme.fontSizes.m};
  line-height: 24px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.l};
    line-height: 32px;
  }
`,Le=i(J)`
  color: ${e=>e.theme.colors.primaryGray};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.s};
    line-height: 22px;
  }
`,Ee=i.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`,qe=()=>{const e=u(),o=m(st),[a,d]=f.useState([]),[r,x]=f.useState([]),[p,s]=f.useState([]),[n,h]=f.useState([]);return f.useEffect(()=>{(async()=>{try{await e(M(F))}catch(c){toast.error(c)}})()},[e]),f.useEffect(()=>{o&&(d(o.foodIntake.lunch),x(o.foodIntake.breakfast),s(o.foodIntake.dinner),h(o.foodIntake.snack))},[o]),t.jsxs(Pe,{children:[t.jsxs(Te,{children:[t.jsx(Ne,{children:"Diary"}),t.jsx(Le,{to:"/diary",children:"See more"})]}),t.jsxs(Ee,{children:[t.jsx(j,{title:"Breakfast",image:ot,info:v(r)}),t.jsx(j,{title:"Lunch",image:at,info:v(a)}),t.jsx(j,{title:"Dinner",image:rt,info:v(p)}),t.jsx(j,{title:"Snack",image:dt,info:v(n)})]})]})},Ae=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }
`,Ge=i.h2`
  margin-top: 16px;
  margin-bottom: 16px;
  font-family: 'Poppins', sans-serif;
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,Oe=i.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,He=i(J)`
  margin-top: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${e=>e.theme.colors.primaryGray};
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 22px;
  }
`,_e=()=>{const[e,o]=f.useState([]);return f.useEffect(()=>{lt().then(a=>{o(ct(a))}).catch(a=>console.log(a))},[]),t.jsxs(Ae,{children:[t.jsx(Ge,{children:"Recommended food"}),t.jsx(Oe,{children:e.map(({_id:a,img:d,name:r,amount:x,calories:p})=>t.jsx(xt,{id:a,img:d,name:r,amount:x,calories:p},a))}),t.jsx(He,{to:"/recommended-food",children:"See more"})]})},Ue=()=>{const e=u();return f.useEffect(()=>{e(y()),e(H()),e(M(F))},[e]),t.jsxs(ee,{children:[t.jsxs("div",{className:"container",children:[t.jsxs(Xt,{children:[t.jsx(Yt,{children:"Today"}),t.jsx(Zt,{to:"/dashboard",children:t.jsxs(te,{children:["On the way to the goal",t.jsx(Ut,{children:t.jsx("use",{href:`${w}#arrow-right`})})]})})]}),t.jsxs(Kt,{children:[t.jsxs(Qt,{children:[t.jsx(ut,{}),t.jsx(Se,{})]}),t.jsx(Jt,{})]})]}),t.jsx("div",{className:"container",children:t.jsxs(ie,{children:[t.jsx(qe,{}),t.jsx(_e,{})]})})]})};export{Ue as default};
