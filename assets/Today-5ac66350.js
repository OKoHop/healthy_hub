import{s as i,u as b,a as h,r as g,f as K,j as t,c as A,g as E,N as Q,M as G,b as U,d as k,e as X,_ as Y,P as u,L as O}from"./index-4fab0e4a.js";import{C as y,A as v,p as D,a as $,D as S}from"./index-b9ee5ef6.js";import{R as Z,b as tt,l as et,d as it,s as nt}from"./snack-a346976b.js";import{s as st}from"./statisticSelectors-4fc521b0.js";import{g as ot,r as at,R as rt}from"./randomizeFood-df5d02ce.js";const dt=i.div`
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
`,B=i.p`
  font-weight: 600;
  font-size: 34px;
  line-height: 1.12;
  display: flex;
  align-items: center;
  gap: 4px;
`,F=i.div`
  display: flex;
  gap: 20px;
`,lt=i.span`
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
`,ct=i.div`
  @media (max-width: 833px) {
    width: 300px;
  }

  @media (min-width: 834px) {
    width: 380px;
  }

  @media (min-width: 1440px) {
    width: 328px;
  }
`,xt=i.svg`
  width: 80px;
  height: 80px;
  stroke: #45ffbc;
  fill: #0f0f0f;
`,pt=i.svg`
  width: 80px;
  height: 80px;
  stroke: #b6c3ff;
  fill: #0f0f0f;
`,j="/healthy_hub/assets/today-svg-sprite-29233aff.svg",H=e=>e.daily.calories,_=e=>e.daily.water,ht=()=>{const e=b(),o=h(H),a=h(_);return g.useEffect(()=>{e(K())},[e]),t.jsxs(ct,{children:[t.jsx(z,{children:"Daily goal"}),t.jsxs(dt,{children:[t.jsxs(F,{children:[t.jsx(xt,{children:t.jsx("use",{href:`${j}#bubble`})}),t.jsxs("div",{children:[t.jsx(W,{children:"Calories"}),t.jsx(B,{children:o?Math.round(o):0})]})]}),t.jsxs(F,{children:[t.jsx(pt,{children:t.jsx("use",{href:`${j}#water`})}),t.jsxs("div",{children:[t.jsx(W,{children:"Water"}),t.jsxs(B,{children:[a?Math.round(a):0," ",t.jsx(lt,{children:"ml"})]})]})]})]})]})},ft=e=>e.nutrients.carbonohidrates,mt=e=>e.nutrients.protein,gt=e=>e.nutrients.fat,ut=e=>e.nutrients.dailyNutrients.totalCalories,bt=e=>e.nutrients.dailyNutrients.totalCarbohidrates,wt=e=>e.nutrients.dailyNutrients.totalProtein,jt=e=>e.nutrients.dailyNutrients.totalFat,yt=e=>e.nutrients.dailyNutrients.waterIntake,vt=e=>e.nutrients.dailyNutrients.foodIntake.breakfast,Dt=A([bt],e=>e||0);A([vt],e=>{let o=0;return e?(e.map(a=>o+=a.carbohidrates),o):0});y.register(v,D,$);const $t=()=>{const e=h(H),o=h(ut),a=(s,n)=>!n&&!s?0:n-s,r={datasets:[{data:[(s=>s||0)(o),a(o,e)],backgroundColor:["#45FFBC","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},x={id:"textCenter",beforeDatasetsDraw(s){const{ctx:n,data:f}=s,c=s.getDatasetMeta(0).data[0].x,p=s.getDatasetMeta(0).data[0].y;n.save(),n.font="500 32px sans-serif",n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.fillText(f.datasets[0].data[0],c,p-10),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.fillText("calories",c,p+20)}},l={id:"backgroundCirgle",beforeDatasetsDraw(s){const{ctx:n}=s;n.save();const f=s.getDatasetMeta(0).data[0].x,c=s.getDatasetMeta(0).data[0].y,p=s.getDatasetMeta(0).data[0].innerRadius,m=s.getDatasetMeta(0).data[0].outerRadius,M=m-p,J=Math.PI/180;n.beginPath(),n.strokeStyle="#292928",n.lineWidth=M,n.arc(f,c,m-M/2,0,J*360,!1),n.stroke()}};return t.jsx(S,{data:r,plugins:[x,l]})},St=i.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`,Ct=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,kt=i.div`
  display: flex;
  gap: 12px;
`,zt=i.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,P=i.p`
  font-size: 14px;
  line-height: 1.43;
`,R=i.span`
  color: #b6b6b6;
`;y.register(v,D,$);const Mt=()=>{const e=h(ft),o=h(Dt),a=(s,n)=>s-n===null?0:s-n,d=(s,n)=>isNaN(Math.round(n/s*100))?0:Math.round(n/s*100),r=s=>100-s,x={datasets:[{data:[d(e,o),r(d(e,o))],backgroundColor:["#FFC4F7","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},l={id:"textCenter",beforeDatasetsDraw(s){const{ctx:n,data:f}=s,c=s.getDatasetMeta(0).data[0].x,p=s.getDatasetMeta(0).data[0].y,m=f.datasets[0].data[0];n.save(),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.textAlign="center",n.textBaseline="middle",n.fillText(`${m}%`,c,p)}};return t.jsxs(St,{children:[t.jsx(S,{data:x,plugins:[l]}),t.jsxs(Ct,{children:[t.jsx(zt,{children:"Carbonohidrates"}),t.jsxs(kt,{children:[t.jsxs(P,{children:["Goal: ",t.jsx(R,{children:o})]}),t.jsxs(P,{children:["left: ",t.jsx(R,{children:a(e,o)})]})]})]})]})},Wt=i.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`,Bt=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Ft=i.div`
  display: flex;
  gap: 12px;
`,Pt=i.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,I=i.p`
  font-size: 14px;
  line-height: 1.43;
`,T=i.span`
  color: #b6b6b6;
`;y.register(v,D,$);const Rt=()=>{const e=h(gt)||0,o=h(jt)||0,a=(s,n)=>s-n,d=(s,n)=>isNaN(Math.round(n/s*100))?0:Math.round(n/s*100),r=s=>100-s,x={datasets:[{data:[d(e,o),r(d(e,o))],backgroundColor:["#FFF3B7","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},l={id:"textCenter",beforeDatasetsDraw(s){const{ctx:n,data:f}=s,c=s.getDatasetMeta(0).data[0].x,p=s.getDatasetMeta(0).data[0].y,m=f.datasets[0].data[0];n.save(),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.textAlign="center",n.textBaseline="middle",n.fillText(`${m}%`,c,p)}};return t.jsxs(Wt,{children:[t.jsx(S,{data:x,plugins:[l]}),t.jsxs(Bt,{children:[t.jsx(Pt,{children:"Fat"}),t.jsxs(Ft,{children:[t.jsxs(I,{children:["Goal: ",t.jsx(T,{children:o})]}),t.jsxs(I,{children:["left: ",t.jsx(T,{children:a(e,o)})]})]})]})]})},It=i.div`
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
`,Tt=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Nt=i.div`
  width: 168px;
  height: 168px;
`,Lt=i.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`,qt=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,At=i.div`
  display: flex;
  gap: 12px;
`,Et=i.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,N=i.p`
  font-size: 14px;
  line-height: 1.43;
`,L=i.span`
  color: #b6b6b6;
`;y.register(v,D,$);const Gt=()=>{const e=h(mt)||0,o=h(wt)||0,a=(s,n)=>s-n,d=(s,n)=>isNaN(Math.round(n/s*100))?0:Math.round(n/s*100),r=s=>100-s,x={datasets:[{data:[d(e,o),r(d(e,o))],backgroundColor:["#B6B6B6","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},l={id:"textCenter",beforeDatasetsDraw(s){const{ctx:n,data:f}=s,c=s.getDatasetMeta(0).data[0].x,p=s.getDatasetMeta(0).data[0].y,m=f.datasets[0].data[0];n.save(),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.textAlign="center",n.textBaseline="middle",n.fillText(`${m}%`,c,p)}};return t.jsxs(Lt,{children:[t.jsx(S,{data:x,plugins:[l]}),t.jsxs(qt,{children:[t.jsx(Et,{children:"Protein"}),t.jsxs(At,{children:[t.jsxs(N,{children:["Goal: ",t.jsx(L,{children:o})]}),t.jsxs(N,{children:["left: ",t.jsx(L,{children:a(e,o)})]})]})]})]})},Ot=()=>{const e=b();return g.useEffect(()=>{e(E())}),t.jsxs("div",{children:[t.jsx(z,{children:"Food"}),t.jsxs(It,{children:[t.jsx(Nt,{children:t.jsx($t,{})}),t.jsxs(Tt,{children:[t.jsx(Mt,{}),t.jsx(Gt,{}),t.jsx(Rt,{})]})]})]})},Ht=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`,_t=i.div`
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
`,Vt=i.svg`
  width: 16px;
  height: 16px;
  stroke: #b6b6b6;
`,Jt=i.div`
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
`,Kt=i.h1`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.25;

  @media (max-width: 834px) {
    font-size: 24px;
  }
`,Qt=i(Q)`
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
`,Ut=i.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,Xt=i.section`
  position: relative;
  margin-top: 16px;

  @media (min-width: 834px) {
    margin-top: 24px;
  }

  @media (min-width: 1440px) {
    margin-top: 20px;
  }
`,Yt=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 834px) {
    flex-basis: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,Zt=i.div`
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
`,te=i.div`
  @media (min-width: 834px) {
    display: flex;
    gap: 40px;
    align-items: center;
    margin-bottom: 16px;
  }
`,ee=i.p`
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
`,ie=i.p`
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
`,ne=i.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`,se=i.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  display: flex;
  gap: 4px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    margin-bottom: 0px;
  }
`,V=i.svg`
  width: 16px;
  height: 16px;
  stroke: #0f0f0f;

  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`,oe=i.button`
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
    & > ${V} {
      stroke: #ffffff;
    }
  }
`,ae=i.div`
  width: 80px;
  height: 192px;
  border-radius: 20px;
  background-color: #292928;
  padding: 8px;

  position: relative;
`,re=i.div`
  width: 64px;
  height: ${e=>`${(e.height===!1?0:e.height)/100*128}px`};
  max-height: 128px;
  border-radius: 20px;
  background-color: #b6c3ff;

  position: absolute;
  bottom: 8px;
`,de=i.div`
  @media (max-width: 833px) {
    width: 300px;
  }

  @media (min-width: 834px) {
    width: 380px;
  }

  @media (min-width: 1440px) {
    width: 444px;
  }
`,le=i.svg`
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
`,ce=i.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.37;
  text-align: center;
  color: #b6c3ff;

  position: absolute;
  top: 28px;
  left: 22px;
`,xe=i.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 24px;

  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,pe=i.form`
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
`,he=i.input`
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
`,fe=i.label`
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
`,me=i.button`
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
`,ge=i.p`
  margin-top: 16px;
  text-align: center;
  color: #b6b6b6;
  cursor: pointer;
`,ue=i(G)`
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
`;G.setAppElement("#root");const be=({open:e,close:o})=>{const a=b(),d=r=>{r.preventDefault();const l=r.currentTarget.elements.water.value;a(U(l)),a(k()),o()};return t.jsxs(ue,{isOpen:e,onRequestClose:o,contentLabel:"Example Modal",overlayClassName:"Overlay",children:[t.jsx(xe,{children:"Add water intake"}),t.jsxs("div",{children:[t.jsxs(pe,{onSubmit:d,children:[t.jsxs(fe,{children:["How match water",t.jsx(he,{type:"text",name:"water",placeholder:"Enter milliliters",autoComplete:"off"})]}),t.jsx(me,{type:"submit",children:"Confirm"})]}),t.jsx(ge,{onClick:o,children:"Cancel"})]})]})},we=e=>e.water.waterIntake,je=()=>{const[e,o]=g.useState(!1),a=h(_);h(we);const d=b(),r=h(yt)||0;function x(){o(!0)}function l(){o(!1)}function s(c,p){return c-r<0?0:Math.round(c-r)}function n(c,p){return p/c*100>=100?100:Math.round(p/c*100)}function f(){d(X()),setTimeout(()=>{d(k())},100),Y.success("WaterIntake has been successfuly reset")}return t.jsxs(t.Fragment,{children:[t.jsxs(de,{children:[t.jsx(z,{children:"Water"}),t.jsxs(Zt,{children:[t.jsxs(ae,{children:[t.jsxs(ce,{children:[n(a,r)," %"]}),t.jsx(re,{height:n(a,r)||0})]}),t.jsxs("div",{children:[t.jsx(le,{onClick:f,children:t.jsx("use",{href:`${j}#trash`})}),t.jsx(ee,{children:"Water consumption"}),t.jsxs(te,{children:[t.jsxs(ie,{children:[r," ",t.jsx(q,{children:"ml"})]}),t.jsxs(se,{children:["left: ",t.jsx(ne,{children:s(a)})," ",t.jsx(q,{children:"ml"})]})]}),t.jsxs(oe,{onClick:x,children:[t.jsx(V,{children:t.jsx("use",{href:`${j}#add`})}),"Add water intake"]})]})]})]}),t.jsx(be,{open:e,close:l})]})},ye=i.li`
  @media screen and (${e=>e.theme.mq.tabMin}) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,ve=i.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: ${e=>e.theme.colors.primaryWhite};  

  @media screen and (${e=>e.theme.mq.tabMin}) {
    margin-bottom: 0px;
  }
`,De=i.h3`
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 24px;
`,$e=i.div`
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
`,Se=i.p`
  min-width: 190px;
`,Ce=i.p`
  width: 110px;
`,ke=i.p`
  width: 60px;
`,C=i.span`
  color: ${e=>e.theme.colors.primaryGray};
  font-weight: ${e=>e.theme.fontWeights.medium};
`,ze=i.img`
  width: 36px;
  height: 36px;
`,Me=i.button`
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
`,w=({title:e,image:o,info:a})=>{const[d,r]=g.useState(!1),x=()=>r(!d),{carbonohidrates:l,protein:s,fat:n}=a;return t.jsxs(ye,{children:[t.jsxs(ve,{children:[t.jsx(ze,{src:o,alt:"Plate"}),t.jsx(De,{children:e})]}),l!==0||s!==0||n!==0?t.jsxs($e,{children:[t.jsxs(Se,{children:["Carbonohidrates: ",t.jsx(C,{children:l})]}),t.jsxs(Ce,{children:["Protein: ",t.jsx(C,{children:s})]}),t.jsxs(ke,{children:["Fat: ",t.jsx(C,{children:n})]})]}):t.jsx(Me,{onClick:x,children:"+ Record your meal"}),d&&t.jsx(Z,{onClose:x,image:o,mealType:e})]})};w.propTypes={title:u.string.isRequired,image:u.string.isRequired,info:u.shape({carbonohidrates:u.number.isRequired,protein:u.number.isRequired,fat:u.number.isRequired})};const We=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`,Be=i.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`,Fe=i.h2`
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: ${e=>e.theme.fontSizes.m};
  line-height: 24px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.l};
    line-height: 32px;
  }
`,Pe=i(O)`
  color: ${e=>e.theme.colors.primaryGray};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.s};
    line-height: 22px;
  }
`,Re=i.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`,Ie=()=>{b();const e=h(st),{breakfast:o,lunch:a,dinner:d,snack:r}=e;return t.jsxs(We,{children:[t.jsxs(Be,{children:[t.jsx(Fe,{children:"Diary"}),t.jsx(Pe,{to:"/diary",children:"See more"})]}),t.jsxs(Re,{children:[t.jsx(w,{title:"Breakfast",image:tt,info:o}),t.jsx(w,{title:"Lunch",image:et,info:a}),t.jsx(w,{title:"Dinner",image:it,info:d}),t.jsx(w,{title:"Snack",image:nt,info:r})]})]})},Te=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }
`,Ne=i.h2`
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
`,Le=i.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,qe=i(O)`
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
`,Ae=()=>{const[e,o]=g.useState([]);return g.useEffect(()=>{ot().then(a=>{o(at(a))}).catch(a=>console.log(a))},[]),t.jsxs(Te,{children:[t.jsx(Ne,{children:"Recommended food"}),t.jsx(Le,{children:e.map(({_id:a,img:d,name:r,amount:x,calories:l})=>t.jsx(rt,{id:a,img:d,name:r,amount:x,calories:l},a))}),t.jsx(qe,{to:"/recommended-food",children:"See more"})]})},Ve=()=>{const e=b();return g.useEffect(()=>{e(k()),e(E())},[e]),t.jsxs(Xt,{children:[t.jsxs("div",{className:"container",children:[t.jsxs(Jt,{children:[t.jsx(Kt,{children:"Today"}),t.jsx(Qt,{to:"/dashboard",children:t.jsxs(Ut,{children:["On the way to the goal",t.jsx(Vt,{children:t.jsx("use",{href:`${j}#arrow-right`})})]})})]}),t.jsxs(Ht,{children:[t.jsxs(_t,{children:[t.jsx(ht,{}),t.jsx(je,{})]}),t.jsx(Ot,{})]})]}),t.jsx("div",{className:"container",children:t.jsxs(Yt,{children:[t.jsx(Ie,{}),t.jsx(Ae,{})]})})]})};export{Ve as default};
