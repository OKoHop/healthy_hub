import{s as i,u as j,a as h,r as g,f as J,j as t,g as q,N as K,M as A,b as Q,c as E,d as U,_ as X,P as u,L as G}from"./index-ccee6cb1.js";import{C as y,A as v,p as D,a as $,D as S}from"./index-b784104e.js";import{R as Y,b as Z,l as tt,d as et,s as it}from"./snack-8c18cdc8.js";import{s as nt}from"./statisticSelectors-e4210e56.js";import{g as st,r as ot,R as at}from"./randomizeFood-f1ae8367.js";const rt=i.div`
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
`,M=i.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #b6b6b6;
`,W=i.p`
  font-weight: 600;
  font-size: 34px;
  line-height: 1.12;
  display: flex;
  align-items: center;
  gap: 4px;
`,F=i.div`
  display: flex;
  gap: 20px;
`,dt=i.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`,k=i.p`
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
`,w="/healthy_hub/assets/today-svg-sprite-29233aff.svg",O=e=>e.daily.calories,H=e=>e.daily.water,pt=()=>{const e=j(),o=h(O),a=h(H);return g.useEffect(()=>{e(J())},[e]),t.jsxs(lt,{children:[t.jsx(k,{children:"Daily goal"}),t.jsxs(rt,{children:[t.jsxs(F,{children:[t.jsx(ct,{children:t.jsx("use",{href:`${w}#bubble`})}),t.jsxs("div",{children:[t.jsx(M,{children:"Calories"}),t.jsx(W,{children:o?Math.round(o):0})]})]}),t.jsxs(F,{children:[t.jsx(xt,{children:t.jsx("use",{href:`${w}#water`})}),t.jsxs("div",{children:[t.jsx(M,{children:"Water"}),t.jsxs(W,{children:[a?Math.round(a):0," ",t.jsx(dt,{children:"ml"})]})]})]})]})]})},ht=e=>e.nutrients.carbonohidrates,ft=e=>e.nutrients.protein,mt=e=>e.nutrients.fat,gt=e=>e.nutrients.dailyNutrients.totalCalories,ut=e=>e.nutrients.dailyNutrients.totalCarbohidrates,bt=e=>e.nutrients.dailyNutrients.totalProtein,wt=e=>e.nutrients.dailyNutrients.totalFat;y.register(v,D,$);const jt=()=>{const e=h(O),o=h(gt),a=(s,n)=>!n&&!s?0:n-s,d={datasets:[{data:[(s=>s||0)(o),a(o,e)],backgroundColor:["#45FFBC","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},x={id:"textCenter",beforeDatasetsDraw(s){const{ctx:n,data:p}=s,c=s.getDatasetMeta(0).data[0].x,f=s.getDatasetMeta(0).data[0].y;n.save(),n.font="500 32px sans-serif",n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.fillText(p.datasets[0].data[0],c,f-10),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.fillText("calories",c,f+20)}},l={id:"backgroundCirgle",beforeDatasetsDraw(s){const{ctx:n}=s;n.save();const p=s.getDatasetMeta(0).data[0].x,c=s.getDatasetMeta(0).data[0].y,f=s.getDatasetMeta(0).data[0].innerRadius,m=s.getDatasetMeta(0).data[0].outerRadius,z=m-f,V=Math.PI/180;n.beginPath(),n.strokeStyle="#292928",n.lineWidth=z,n.arc(p,c,m-z/2,0,V*360,!1),n.stroke()}};return t.jsx(S,{data:d,plugins:[x,l]})},yt=i.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`,vt=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Dt=i.div`
  display: flex;
  gap: 12px;
`,$t=i.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,B=i.p`
  font-size: 14px;
  line-height: 1.43;
`,P=i.span`
  color: #b6b6b6;
`;y.register(v,D,$);const St=()=>{const e=h(ht),o=h(ut)||0,a=(s,n)=>s-n===null?0:s-n,r=(s,n)=>isNaN(Math.round(n/s*100))?0:Math.round(n/s*100),d=s=>100-s,x={datasets:[{data:[r(e,o),d(r(e,o))],backgroundColor:["#FFC4F7","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},l={id:"textCenter",beforeDatasetsDraw(s){const{ctx:n,data:p}=s,c=s.getDatasetMeta(0).data[0].x,f=s.getDatasetMeta(0).data[0].y,m=p.datasets[0].data[0];n.save(),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.textAlign="center",n.textBaseline="middle",n.fillText(`${m}%`,c,f)}};return t.jsxs(yt,{children:[t.jsx(S,{data:x,plugins:[l]}),t.jsxs(vt,{children:[t.jsx($t,{children:"Carbonohidrates"}),t.jsxs(Dt,{children:[t.jsxs(B,{children:["Goal: ",t.jsx(P,{children:"0"})]}),t.jsxs(B,{children:["left: ",t.jsx(P,{children:a(e,o)})]})]})]})]})},Ct=i.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`,kt=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,zt=i.div`
  display: flex;
  gap: 12px;
`,Mt=i.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,R=i.p`
  font-size: 14px;
  line-height: 1.43;
`,I=i.span`
  color: #b6b6b6;
`;y.register(v,D,$);const Wt=()=>{const e=h(mt)||0,o=h(wt)||0,a=(s,n)=>s-n,r=(s,n)=>isNaN(Math.round(n/s*100))?0:Math.round(n/s*100),d=s=>100-s,x={datasets:[{data:[r(e,o),d(r(e,o))],backgroundColor:["#FFF3B7","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},l={id:"textCenter",beforeDatasetsDraw(s){const{ctx:n,data:p}=s,c=s.getDatasetMeta(0).data[0].x,f=s.getDatasetMeta(0).data[0].y,m=p.datasets[0].data[0];n.save(),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.textAlign="center",n.textBaseline="middle",n.fillText(`${m}%`,c,f)}};return t.jsxs(Ct,{children:[t.jsx(S,{data:x,plugins:[l]}),t.jsxs(kt,{children:[t.jsx(Mt,{children:"Fat"}),t.jsxs(zt,{children:[t.jsxs(R,{children:["Goal: ",t.jsx(I,{children:"0"})]}),t.jsxs(R,{children:["left: ",t.jsx(I,{children:a(e,o)})]})]})]})]})},Ft=i.div`
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
`,Bt=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Pt=i.div`
  width: 168px;
  height: 168px;
`,Rt=i.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`,It=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Tt=i.div`
  display: flex;
  gap: 12px;
`,Lt=i.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,T=i.p`
  font-size: 14px;
  line-height: 1.43;
`,L=i.span`
  color: #b6b6b6;
`;y.register(v,D,$);const Nt=()=>{const e=h(ft)||0,o=h(bt)||0,a=(s,n)=>s-n,r=(s,n)=>isNaN(Math.round(n/s*100))?0:Math.round(n/s*100),d=s=>100-s,x={datasets:[{data:[r(e,o),d(r(e,o))],backgroundColor:["#B6B6B6","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},l={id:"textCenter",beforeDatasetsDraw(s){const{ctx:n,data:p}=s,c=s.getDatasetMeta(0).data[0].x,f=s.getDatasetMeta(0).data[0].y,m=p.datasets[0].data[0];n.save(),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.textAlign="center",n.textBaseline="middle",n.fillText(`${m}%`,c,f)}};return t.jsxs(Rt,{children:[t.jsx(S,{data:x,plugins:[l]}),t.jsxs(It,{children:[t.jsx(Lt,{children:"Protein"}),t.jsxs(Tt,{children:[t.jsxs(T,{children:["Goal: ",t.jsx(L,{children:"0"})]}),t.jsxs(T,{children:["left: ",t.jsx(L,{children:a(e,o)})]})]})]})]})},qt=()=>{const e=j();return g.useEffect(()=>{e(q())}),t.jsxs("div",{children:[t.jsx(k,{children:"Food"}),t.jsxs(Ft,{children:[t.jsx(Pt,{children:t.jsx(jt,{})}),t.jsxs(Bt,{children:[t.jsx(St,{}),t.jsx(Nt,{}),t.jsx(Wt,{})]})]})]})},At=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`,Et=i.div`
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
`,Gt=i.svg`
  width: 16px;
  height: 16px;
  stroke: #b6b6b6;
`,Ot=i.div`
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
`,Ht=i.h1`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.25;

  @media (max-width: 834px) {
    font-size: 24px;
  }
`,_t=i(K)`
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
`,Vt=i.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,Jt=i.section`
  position: relative;
  margin-top: 16px;

  @media (min-width: 834px) {
    margin-top: 24px;
  }

  @media (min-width: 1440px) {
    margin-top: 20px;
  }
`,Kt=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 834px) {
    flex-basis: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,Qt=i.div`
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
`,Ut=i.div`
  @media (min-width: 834px) {
    display: flex;
    gap: 40px;
    align-items: center;
    margin-bottom: 16px;
  }
`,Xt=i.p`
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
`,Yt=i.p`
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
`,N=i.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`,Zt=i.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`,te=i.p`
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
`,ee=i.button`
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
`,ie=i.div`
  width: 80px;
  height: 192px;
  border-radius: 20px;
  background-color: #292928;
  padding: 8px;

  position: relative;
`,ne=i.div`
  width: 64px;
  height: ${e=>`${(e.height===!1?0:e.height)/100*128}px`};
  max-height: 128px;
  border-radius: 20px;
  background-color: #b6c3ff;

  position: absolute;
  bottom: 8px;
`,se=i.div`
  @media (max-width: 833px) {
    width: 300px;
  }

  @media (min-width: 834px) {
    width: 380px;
  }

  @media (min-width: 1440px) {
    width: 444px;
  }
`,oe=i.svg`
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
`,ae=i.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.37;
  text-align: center;
  color: #b6c3ff;

  position: absolute;
  top: 28px;
  left: 22px;
`,re=i.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 24px;

  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,de=i.form`
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
`,le=i.input`
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
`,ce=i.label`
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
`,xe=i.button`
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
`,pe=i.p`
  margin-top: 16px;
  text-align: center;
  color: #b6b6b6;
  cursor: pointer;
`,he=i(A)`
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
`;A.setAppElement("#root");const fe=({open:e,close:o})=>{const a=j(),r=d=>{d.preventDefault();const l=d.currentTarget.elements.water.value;a(Q(l)),a(E()),o()};return t.jsxs(he,{isOpen:e,onRequestClose:o,contentLabel:"Example Modal",overlayClassName:"Overlay",children:[t.jsx(re,{children:"Add water intake"}),t.jsxs("div",{children:[t.jsxs(de,{onSubmit:r,children:[t.jsxs(ce,{children:["How match water",t.jsx(le,{type:"text",name:"water",placeholder:"Enter milliliters",autoComplete:"off"})]}),t.jsx(xe,{type:"submit",children:"Confirm"})]}),t.jsx(pe,{onClick:o,children:"Cancel"})]})]})},me=e=>e.water.waterIntake,ge=()=>{const[e,o]=g.useState(!1),a=h(H),r=h(me),d=j();function x(){o(!0)}function l(){o(!1)}function s(p,c){return p-c<0?0:Math.round(p-c)}function n(p,c){return c/p*100>=100?100:Math.round(c/p*100)}return t.jsxs(t.Fragment,{children:[t.jsxs(se,{children:[t.jsx(k,{children:"Water"}),t.jsxs(Qt,{children:[t.jsxs(ie,{children:[t.jsxs(ae,{children:[n(a,r)," %"]}),t.jsx(ne,{height:n(a,r)||0})]}),t.jsxs("div",{children:[t.jsx(oe,{onClick:()=>{d(U()),X.success("WaterIntake has been successfuly reset")},children:t.jsx("use",{href:`${w}#trash`})}),t.jsx(Xt,{children:"Water consumption"}),t.jsxs(Ut,{children:[t.jsxs(Yt,{children:[r," ",t.jsx(N,{children:"ml"})]}),t.jsxs(te,{children:["left: ",t.jsx(Zt,{children:s(a,r)})," ",t.jsx(N,{children:"ml"})]})]}),t.jsxs(ee,{onClick:x,children:[t.jsx(_,{children:t.jsx("use",{href:`${w}#add`})}),"Add water intake"]})]})]})]}),t.jsx(fe,{open:e,close:l})]})},ue=i.li`
  @media screen and (${e=>e.theme.mq.tabMin}) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,be=i.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: ${e=>e.theme.colors.primaryWhite};  

  @media screen and (${e=>e.theme.mq.tabMin}) {
    margin-bottom: 0px;
  }
`,we=i.h3`
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 24px;
`,je=i.div`
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
`,ye=i.p`
  min-width: 190px;
`,ve=i.p`
  width: 110px;
`,De=i.p`
  width: 60px;
`,C=i.span`
  color: ${e=>e.theme.colors.primaryGray};
  font-weight: ${e=>e.theme.fontWeights.medium};
`,$e=i.img`
  width: 36px;
  height: 36px;
`,Se=i.button`
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
`,b=({title:e,image:o,info:a})=>{const[r,d]=g.useState(!1),x=()=>d(!r),{carbonohidrates:l,protein:s,fat:n}=a;return t.jsxs(ue,{children:[t.jsxs(be,{children:[t.jsx($e,{src:o,alt:"Plate"}),t.jsx(we,{children:e})]}),l!==0||s!==0||n!==0?t.jsxs(je,{children:[t.jsxs(ye,{children:["Carbonohidrates: ",t.jsx(C,{children:l})]}),t.jsxs(ve,{children:["Protein: ",t.jsx(C,{children:s})]}),t.jsxs(De,{children:["Fat: ",t.jsx(C,{children:n})]})]}):t.jsx(Se,{onClick:x,children:"+ Record your meal"}),r&&t.jsx(Y,{onClose:x,image:o,mealType:e})]})};b.propTypes={title:u.string.isRequired,image:u.string.isRequired,info:u.shape({carbonohidrates:u.number.isRequired,protein:u.number.isRequired,fat:u.number.isRequired})};const Ce=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`,ke=i.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`,ze=i.h2`
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: ${e=>e.theme.fontSizes.m};
  line-height: 24px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.l};
    line-height: 32px;
  }
`,Me=i(G)`
  color: ${e=>e.theme.colors.primaryGray};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.s};
    line-height: 22px;
  }
`,We=i.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`,Fe=()=>{const e=h(nt),{breakfast:o,lunch:a,dinner:r,snack:d}=e;return t.jsxs(Ce,{children:[t.jsxs(ke,{children:[t.jsx(ze,{children:"Diary"}),t.jsx(Me,{to:"/diary",children:"See more"})]}),t.jsxs(We,{children:[t.jsx(b,{title:"Breakfast",image:Z,info:o}),t.jsx(b,{title:"Lunch",image:tt,info:a}),t.jsx(b,{title:"Dinner",image:et,info:r}),t.jsx(b,{title:"Snack",image:it,info:d})]})]})},Be=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }
`,Pe=i.h2`
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
`,Re=i.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,Ie=i(G)`
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
`,Te=()=>{const[e,o]=g.useState([]);return g.useEffect(()=>{st().then(a=>{o(ot(a))}).catch(a=>console.log(a))},[]),t.jsxs(Be,{children:[t.jsx(Pe,{children:"Recommended food"}),t.jsx(Re,{children:e.map(({_id:a,img:r,name:d,amount:x,calories:l})=>t.jsx(at,{id:a,img:r,name:d,amount:x,calories:l},a))}),t.jsx(Ie,{to:"/recommended-food",children:"See more"})]})},Ge=()=>{const e=j();return g.useEffect(()=>{e(E()),e(q())},[e]),t.jsxs(Jt,{children:[t.jsxs("div",{className:"container",children:[t.jsxs(Ot,{children:[t.jsx(Ht,{children:"Today"}),t.jsx(_t,{to:"/dashboard",children:t.jsxs(Vt,{children:["On the way to the goal",t.jsx(Gt,{children:t.jsx("use",{href:`${w}#arrow-right`})})]})})]}),t.jsxs(At,{children:[t.jsxs(Et,{children:[t.jsx(pt,{}),t.jsx(ge,{})]}),t.jsx(qt,{})]})]}),t.jsx("div",{className:"container",children:t.jsxs(Kt,{children:[t.jsx(Fe,{}),t.jsx(Te,{})]})})]})};export{Ge as default};
