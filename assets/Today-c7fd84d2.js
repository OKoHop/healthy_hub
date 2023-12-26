import{s as i,u as j,a as h,r as g,f as J,j as t,g as A,N as K,M as E,b as Q,c as k,d as U,_ as X,P as u,L as G}from"./index-edbff4cb.js";import{C as y,A as v,p as D,a as $,D as S}from"./index-fda0aa9e.js";import{R as Y,b as Z,l as tt,d as et,s as it}from"./snack-ac003de3.js";import{s as nt}from"./statisticSelectors-3682735c.js";import{g as st,r as ot,R as at}from"./randomizeFood-29dbb293.js";const rt=i.div`
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
`,W=i.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #b6b6b6;
`,F=i.p`
  font-weight: 600;
  font-size: 34px;
  line-height: 1.12;
  display: flex;
  align-items: center;
  gap: 4px;
`,B=i.div`
  display: flex;
  gap: 20px;
`,dt=i.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`,z=i.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 1.33;
  margin-bottom: 6px;

  @media (max-width: 833px) {
    font-size: 18px;
  }
`,lt=i.div`
  @media (max-width: 833px) {
    width: 300px;
  }

  @media (min-width: 834px) {
    width: 380px;
  }

  @media (min-width: 1440px) {
    width: 328px;
  }
`,ct=i.svg`
  width: 80px;
  height: 80px;
  stroke: #45ffbc;
  fill: #0f0f0f;
`,xt=i.svg`
  width: 80px;
  height: 80px;
  stroke: #b6c3ff;
  fill: #0f0f0f;
`,w="/healthy_hub/assets/today-svg-sprite-29233aff.svg",O=e=>e.daily.calories,H=e=>e.daily.water,pt=()=>{const e=j(),o=h(O),a=h(H);return g.useEffect(()=>{e(J())},[e]),t.jsxs(lt,{children:[t.jsx(z,{children:"Daily goal"}),t.jsxs(rt,{children:[t.jsxs(B,{children:[t.jsx(ct,{children:t.jsx("use",{href:`${w}#bubble`})}),t.jsxs("div",{children:[t.jsx(W,{children:"Calories"}),t.jsx(F,{children:o?Math.round(o):0})]})]}),t.jsxs(B,{children:[t.jsx(xt,{children:t.jsx("use",{href:`${w}#water`})}),t.jsxs("div",{children:[t.jsx(W,{children:"Water"}),t.jsxs(F,{children:[a?Math.round(a):0," ",t.jsx(dt,{children:"ml"})]})]})]})]})]})},ht=e=>e.nutrients.carbonohidrates,ft=e=>e.nutrients.protein,mt=e=>e.nutrients.fat,gt=e=>e.nutrients.dailyNutrients.totalCalories,ut=e=>e.nutrients.dailyNutrients.totalCarbohidrates,bt=e=>e.nutrients.dailyNutrients.totalProtein,wt=e=>e.nutrients.dailyNutrients.totalFat,jt=e=>e.nutrients.dailyNutrients.waterIntake;y.register(v,D,$);const yt=()=>{const e=h(O),o=h(gt),a=(s,n)=>!n&&!s?0:n-s,r={datasets:[{data:[(s=>s||0)(o),a(o,e)],backgroundColor:["#45FFBC","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},x={id:"textCenter",beforeDatasetsDraw(s){const{ctx:n,data:f}=s,c=s.getDatasetMeta(0).data[0].x,p=s.getDatasetMeta(0).data[0].y;n.save(),n.font="500 32px sans-serif",n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.fillText(f.datasets[0].data[0],c,p-10),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.fillText("calories",c,p+20)}},l={id:"backgroundCirgle",beforeDatasetsDraw(s){const{ctx:n}=s;n.save();const f=s.getDatasetMeta(0).data[0].x,c=s.getDatasetMeta(0).data[0].y,p=s.getDatasetMeta(0).data[0].innerRadius,m=s.getDatasetMeta(0).data[0].outerRadius,M=m-p,V=Math.PI/180;n.beginPath(),n.strokeStyle="#292928",n.lineWidth=M,n.arc(f,c,m-M/2,0,V*360,!1),n.stroke()}};return t.jsx(S,{data:r,plugins:[x,l]})},vt=i.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`,Dt=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,$t=i.div`
  display: flex;
  gap: 12px;
`,St=i.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,P=i.p`
  font-size: 14px;
  line-height: 1.43;
`,R=i.span`
  color: #b6b6b6;
`;y.register(v,D,$);const Ct=()=>{const e=h(ht),o=h(ut)||0,a=(s,n)=>s-n===null?0:s-n,d=(s,n)=>isNaN(Math.round(n/s*100))?0:Math.round(n/s*100),r=s=>100-s,x={datasets:[{data:[d(e,o),r(d(e,o))],backgroundColor:["#FFC4F7","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},l={id:"textCenter",beforeDatasetsDraw(s){const{ctx:n,data:f}=s,c=s.getDatasetMeta(0).data[0].x,p=s.getDatasetMeta(0).data[0].y,m=f.datasets[0].data[0];n.save(),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.textAlign="center",n.textBaseline="middle",n.fillText(`${m}%`,c,p)}};return t.jsxs(vt,{children:[t.jsx(S,{data:x,plugins:[l]}),t.jsxs(Dt,{children:[t.jsx(St,{children:"Carbonohidrates"}),t.jsxs($t,{children:[t.jsxs(P,{children:["Goal: ",t.jsx(R,{children:"0"})]}),t.jsxs(P,{children:["left: ",t.jsx(R,{children:a(e,o)})]})]})]})]})},kt=i.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`,zt=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Mt=i.div`
  display: flex;
  gap: 12px;
`,Wt=i.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,I=i.p`
  font-size: 14px;
  line-height: 1.43;
`,T=i.span`
  color: #b6b6b6;
`;y.register(v,D,$);const Ft=()=>{const e=h(mt)||0,o=h(wt)||0,a=(s,n)=>s-n,d=(s,n)=>isNaN(Math.round(n/s*100))?0:Math.round(n/s*100),r=s=>100-s,x={datasets:[{data:[d(e,o),r(d(e,o))],backgroundColor:["#FFF3B7","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},l={id:"textCenter",beforeDatasetsDraw(s){const{ctx:n,data:f}=s,c=s.getDatasetMeta(0).data[0].x,p=s.getDatasetMeta(0).data[0].y,m=f.datasets[0].data[0];n.save(),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.textAlign="center",n.textBaseline="middle",n.fillText(`${m}%`,c,p)}};return t.jsxs(kt,{children:[t.jsx(S,{data:x,plugins:[l]}),t.jsxs(zt,{children:[t.jsx(Wt,{children:"Fat"}),t.jsxs(Mt,{children:[t.jsxs(I,{children:["Goal: ",t.jsx(T,{children:"0"})]}),t.jsxs(I,{children:["left: ",t.jsx(T,{children:a(e,o)})]})]})]})]})},Bt=i.div`
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
`,Pt=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Rt=i.div`
  width: 168px;
  height: 168px;
`,It=i.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`,Tt=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Nt=i.div`
  display: flex;
  gap: 12px;
`,Lt=i.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,N=i.p`
  font-size: 14px;
  line-height: 1.43;
`,L=i.span`
  color: #b6b6b6;
`;y.register(v,D,$);const qt=()=>{const e=h(ft)||0,o=h(bt)||0,a=(s,n)=>s-n,d=(s,n)=>isNaN(Math.round(n/s*100))?0:Math.round(n/s*100),r=s=>100-s,x={datasets:[{data:[d(e,o),r(d(e,o))],backgroundColor:["#B6B6B6","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},l={id:"textCenter",beforeDatasetsDraw(s){const{ctx:n,data:f}=s,c=s.getDatasetMeta(0).data[0].x,p=s.getDatasetMeta(0).data[0].y,m=f.datasets[0].data[0];n.save(),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.textAlign="center",n.textBaseline="middle",n.fillText(`${m}%`,c,p)}};return t.jsxs(It,{children:[t.jsx(S,{data:x,plugins:[l]}),t.jsxs(Tt,{children:[t.jsx(Lt,{children:"Protein"}),t.jsxs(Nt,{children:[t.jsxs(N,{children:["Goal: ",t.jsx(L,{children:"0"})]}),t.jsxs(N,{children:["left: ",t.jsx(L,{children:a(e,o)})]})]})]})]})},At=()=>{const e=j();return g.useEffect(()=>{e(A())}),t.jsxs("div",{children:[t.jsx(z,{children:"Food"}),t.jsxs(Bt,{children:[t.jsx(Rt,{children:t.jsx(yt,{})}),t.jsxs(Pt,{children:[t.jsx(Ct,{}),t.jsx(qt,{}),t.jsx(Ft,{})]})]})]})},Et=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`,Gt=i.div`
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
`,Ot=i.svg`
  width: 16px;
  height: 16px;
  stroke: #b6b6b6;
`,Ht=i.div`
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
`,_t=i.h1`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.25;

  @media (max-width: 834px) {
    font-size: 24px;
  }
`,Vt=i(K)`
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
`,Jt=i.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,Kt=i.section`
  position: relative;
  margin-top: 16px;

  @media (min-width: 834px) {
    margin-top: 24px;
  }

  @media (min-width: 1440px) {
    margin-top: 20px;
  }
`,Qt=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 834px) {
    flex-basis: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,Ut=i.div`
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
`,Xt=i.div`
  @media (min-width: 834px) {
    display: flex;
    gap: 40px;
    align-items: center;
    margin-bottom: 16px;
  }
`,Yt=i.p`
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
`,Zt=i.p`
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
`,q=i.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`,te=i.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`,ee=i.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  display: flex;
  gap: 4px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    margin-bottom: 0px;
  }
`,_=i.svg`
  width: 16px;
  height: 16px;
  stroke: #0f0f0f;

  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`,ie=i.button`
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
    & > ${_} {
      stroke: #ffffff;
    }
  }
`,ne=i.div`
  width: 80px;
  height: 192px;
  border-radius: 20px;
  background-color: #292928;
  padding: 8px;

  position: relative;
`,se=i.div`
  width: 64px;
  height: ${e=>`${(e.height===!1?0:e.height)/100*128}px`};
  max-height: 128px;
  border-radius: 20px;
  background-color: #b6c3ff;

  position: absolute;
  bottom: 8px;
`,oe=i.div`
  @media (max-width: 833px) {
    width: 300px;
  }

  @media (min-width: 834px) {
    width: 380px;
  }

  @media (min-width: 1440px) {
    width: 444px;
  }
`,ae=i.svg`
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
`,re=i.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.37;
  text-align: center;
  color: #b6c3ff;

  position: absolute;
  top: 28px;
  left: 22px;
`,de=i.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 24px;

  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,le=i.form`
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
`,ce=i.input`
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
`,xe=i.label`
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
`,pe=i.button`
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
`,he=i.p`
  margin-top: 16px;
  text-align: center;
  color: #b6b6b6;
  cursor: pointer;
`,fe=i(E)`
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
`;E.setAppElement("#root");const me=({open:e,close:o})=>{const a=j(),d=r=>{r.preventDefault();const l=r.currentTarget.elements.water.value;a(Q(l)),a(k()),o()};return t.jsxs(fe,{isOpen:e,onRequestClose:o,contentLabel:"Example Modal",overlayClassName:"Overlay",children:[t.jsx(de,{children:"Add water intake"}),t.jsxs("div",{children:[t.jsxs(le,{onSubmit:d,children:[t.jsxs(xe,{children:["How match water",t.jsx(ce,{type:"text",name:"water",placeholder:"Enter milliliters",autoComplete:"off"})]}),t.jsx(pe,{type:"submit",children:"Confirm"})]}),t.jsx(he,{onClick:o,children:"Cancel"})]})]})},ge=e=>e.water.waterIntake,ue=()=>{const[e,o]=g.useState(!1),a=h(H);h(ge);const d=j(),r=h(jt)||0;function x(){o(!0)}function l(){o(!1)}function s(c,p){return c-r<0?0:Math.round(c-r)}function n(c,p){return p/c*100>=100?100:Math.round(p/c*100)}function f(){d(U()),setTimeout(()=>{d(k())},100),X.success("WaterIntake has been successfuly reset")}return t.jsxs(t.Fragment,{children:[t.jsxs(oe,{children:[t.jsx(z,{children:"Water"}),t.jsxs(Ut,{children:[t.jsxs(ne,{children:[t.jsxs(re,{children:[n(a,r)," %"]}),t.jsx(se,{height:n(a,r)||0})]}),t.jsxs("div",{children:[t.jsx(ae,{onClick:f,children:t.jsx("use",{href:`${w}#trash`})}),t.jsx(Yt,{children:"Water consumption"}),t.jsxs(Xt,{children:[t.jsxs(Zt,{children:[r," ",t.jsx(q,{children:"ml"})]}),t.jsxs(ee,{children:["left: ",t.jsx(te,{children:s(a)})," ",t.jsx(q,{children:"ml"})]})]}),t.jsxs(ie,{onClick:x,children:[t.jsx(_,{children:t.jsx("use",{href:`${w}#add`})}),"Add water intake"]})]})]})]}),t.jsx(me,{open:e,close:l})]})},be=i.li`
  @media screen and (${e=>e.theme.mq.tabMin}) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,we=i.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: ${e=>e.theme.colors.primaryWhite};  

  @media screen and (${e=>e.theme.mq.tabMin}) {
    margin-bottom: 0px;
  }
`,je=i.h3`
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 24px;
`,ye=i.div`
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
`,ve=i.p`
  min-width: 190px;
`,De=i.p`
  width: 110px;
`,$e=i.p`
  width: 60px;
`,C=i.span`
  color: ${e=>e.theme.colors.primaryGray};
  font-weight: ${e=>e.theme.fontWeights.medium};
`,Se=i.img`
  width: 36px;
  height: 36px;
`,Ce=i.button`
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
`,b=({title:e,image:o,info:a})=>{const[d,r]=g.useState(!1),x=()=>r(!d),{carbonohidrates:l,protein:s,fat:n}=a;return t.jsxs(be,{children:[t.jsxs(we,{children:[t.jsx(Se,{src:o,alt:"Plate"}),t.jsx(je,{children:e})]}),l!==0||s!==0||n!==0?t.jsxs(ye,{children:[t.jsxs(ve,{children:["Carbonohidrates: ",t.jsx(C,{children:l})]}),t.jsxs(De,{children:["Protein: ",t.jsx(C,{children:s})]}),t.jsxs($e,{children:["Fat: ",t.jsx(C,{children:n})]})]}):t.jsx(Ce,{onClick:x,children:"+ Record your meal"}),d&&t.jsx(Y,{onClose:x,image:o,mealType:e})]})};b.propTypes={title:u.string.isRequired,image:u.string.isRequired,info:u.shape({carbonohidrates:u.number.isRequired,protein:u.number.isRequired,fat:u.number.isRequired})};const ke=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`,ze=i.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`,Me=i.h2`
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: ${e=>e.theme.fontSizes.m};
  line-height: 24px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.l};
    line-height: 32px;
  }
`,We=i(G)`
  color: ${e=>e.theme.colors.primaryGray};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.s};
    line-height: 22px;
  }
`,Fe=i.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`,Be=()=>{const e=h(nt),{breakfast:o,lunch:a,dinner:d,snack:r}=e;return t.jsxs(ke,{children:[t.jsxs(ze,{children:[t.jsx(Me,{children:"Diary"}),t.jsx(We,{to:"/diary",children:"See more"})]}),t.jsxs(Fe,{children:[t.jsx(b,{title:"Breakfast",image:Z,info:o}),t.jsx(b,{title:"Lunch",image:tt,info:a}),t.jsx(b,{title:"Dinner",image:et,info:d}),t.jsx(b,{title:"Snack",image:it,info:r})]})]})},Pe=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }
`,Re=i.h2`
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
`,Ie=i.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,Te=i(G)`
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
`,Ne=()=>{const[e,o]=g.useState([]);return g.useEffect(()=>{st().then(a=>{o(ot(a))}).catch(a=>console.log(a))},[]),t.jsxs(Pe,{children:[t.jsx(Re,{children:"Recommended food"}),t.jsx(Ie,{children:e.map(({_id:a,img:d,name:r,amount:x,calories:l})=>t.jsx(at,{id:a,img:d,name:r,amount:x,calories:l},a))}),t.jsx(Te,{to:"/recommended-food",children:"See more"})]})},Oe=()=>{const e=j();return g.useEffect(()=>{e(k()),e(A())},[e]),t.jsxs(Kt,{children:[t.jsxs("div",{className:"container",children:[t.jsxs(Ht,{children:[t.jsx(_t,{children:"Today"}),t.jsx(Vt,{to:"/dashboard",children:t.jsxs(Jt,{children:["On the way to the goal",t.jsx(Ot,{children:t.jsx("use",{href:`${w}#arrow-right`})})]})})]}),t.jsxs(Et,{children:[t.jsxs(Gt,{children:[t.jsx(pt,{}),t.jsx(ue,{})]}),t.jsx(At,{})]})]}),t.jsx("div",{className:"container",children:t.jsxs(Qt,{children:[t.jsx(Be,{}),t.jsx(Ne,{})]})})]})};export{Oe as default};
