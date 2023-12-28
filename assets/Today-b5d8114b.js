import{s as i,u as b,a as h,r as m,f as X,j as t,c as A,g as G,N as Y,M as O,b as Z,d as z,e as tt,_ as et,P as u,L as H,h as _}from"./index-0c4298a1.js";import{C as v,A as k,p as S,a as D,D as $}from"./index-885c0ee2.js";import{R as it,s as nt,b as st,c as y,l as ot,d as at,a as rt,t as V}from"./calculateTotalIngridients-86060a51.js";import{g as dt,r as lt,R as ct}from"./randomizeFood-1a6fa0c0.js";const xt=i.div`
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
`,I=i.p`
  font-weight: 600;
  font-size: 34px;
  line-height: 1.12;
  display: flex;
  align-items: center;
  gap: 4px;
`,B=i.div`
  display: flex;
  gap: 20px;
`,pt=i.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`,M=i.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 1.33;
  margin-bottom: 6px;

  @media (max-width: 833px) {
    font-size: 18px;
  }
`,ht=i.div`
  @media (max-width: 833px) {
    width: 300px;
  }

  @media (min-width: 834px) {
    width: 380px;
  }

  @media (min-width: 1440px) {
    width: 328px;
  }
`,ft=i.svg`
  width: 80px;
  height: 80px;
  stroke: #45ffbc;
  fill: #0f0f0f;
`,mt=i.svg`
  width: 80px;
  height: 80px;
  stroke: #b6c3ff;
  fill: #0f0f0f;
`,j="/healthy_hub/assets/today-svg-sprite-29233aff.svg",J=e=>e.daily.calories,K=e=>e.daily.water,gt=()=>{const e=b(),o=h(J),a=h(K);return m.useEffect(()=>{e(X())},[e]),t.jsxs(ht,{children:[t.jsx(M,{children:"Daily goal"}),t.jsxs(xt,{children:[t.jsxs(B,{children:[t.jsx(ft,{children:t.jsx("use",{href:`${j}#bubble`})}),t.jsxs("div",{children:[t.jsx(W,{children:"Calories"}),t.jsx(I,{children:o&&Math.round(o)})]})]}),t.jsxs(B,{children:[t.jsx(mt,{children:t.jsx("use",{href:`${j}#water`})}),t.jsxs("div",{children:[t.jsx(W,{children:"Water"}),t.jsxs(I,{children:[a&&Math.round(a)," ",t.jsx(pt,{children:"ml"})]})]})]})]})]})},ut=e=>e.nutrients.carbonohidrates,bt=e=>e.nutrients.protein,wt=e=>e.nutrients.fat,jt=e=>e.nutrients.dailyNutrients.totalCalories,yt=e=>e.nutrients.dailyNutrients.totalCarbohidrates,vt=e=>e.nutrients.dailyNutrients.totalProtein,kt=e=>e.nutrients.dailyNutrients.totalFat,St=e=>e.nutrients.dailyNutrients.waterIntake,Dt=e=>e.nutrients.dailyNutrients.foodIntake.breakfast,$t=A([yt],e=>e||0);A([Dt],e=>{let o=0;return e?(e.map(a=>o+=a.carbohidrates),o):0});v.register(k,S,D);const Ct=()=>{const e=h(J),o=h(jt),a=(s,n)=>!n&&!s?0:n-s,r={datasets:[{data:[(s=>s||0)(o),a(o,e)],backgroundColor:["#45FFBC","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},c={id:"textCenter",beforeDatasetsDraw(s){const{ctx:n,data:f}=s,x=s.getDatasetMeta(0).data[0].x,p=s.getDatasetMeta(0).data[0].y;n.save(),n.font="500 32px sans-serif",n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.fillText(f.datasets[0].data[0],x,p-10),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.fillText("calories",x,p+20)}},l={id:"backgroundCirgle",beforeDatasetsDraw(s){const{ctx:n}=s;n.save();const f=s.getDatasetMeta(0).data[0].x,x=s.getDatasetMeta(0).data[0].y,p=s.getDatasetMeta(0).data[0].innerRadius,g=s.getDatasetMeta(0).data[0].outerRadius,F=g-p,U=Math.PI/180;n.beginPath(),n.strokeStyle="#292928",n.lineWidth=F,n.arc(f,x,g-F/2,0,U*360,!1),n.stroke()}};return t.jsx($,{data:r,plugins:[c,l]})},zt=i.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`,Mt=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Ft=i.div`
  display: flex;
  gap: 12px;
`,Wt=i.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,R=i.p`
  font-size: 14px;
  line-height: 1.43;
`,P=i.span`
  color: #b6b6b6;
`;v.register(k,S,D);const It=()=>{const e=h(ut),o=h($t),a=(s,n)=>s-n===null?0:s-n,d=(s,n)=>isNaN(Math.round(n/s*100))?0:Math.round(n/s*100),r=s=>100-s,c={datasets:[{data:[d(e,o),r(d(e,o))],backgroundColor:["#FFC4F7","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},l={id:"textCenter",beforeDatasetsDraw(s){const{ctx:n,data:f}=s,x=s.getDatasetMeta(0).data[0].x,p=s.getDatasetMeta(0).data[0].y,g=f.datasets[0].data[0];n.save(),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.textAlign="center",n.textBaseline="middle",n.fillText(`${g}%`,x,p)}};return t.jsxs(zt,{children:[t.jsx($,{data:c,plugins:[l]}),t.jsxs(Mt,{children:[t.jsx(Wt,{children:"Carbonohidrates"}),t.jsxs(Ft,{children:[t.jsxs(R,{children:["Goal: ",t.jsx(P,{children:o})]}),t.jsxs(R,{children:["left: ",t.jsx(P,{children:a(e,o)})]})]})]})]})},Bt=i.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`,Rt=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Pt=i.div`
  display: flex;
  gap: 12px;
`,Tt=i.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,T=i.p`
  font-size: 14px;
  line-height: 1.43;
`,N=i.span`
  color: #b6b6b6;
`;v.register(k,S,D);const Nt=()=>{const e=h(wt)||0,o=h(kt)||0,a=(s,n)=>s-n,d=(s,n)=>isNaN(Math.round(n/s*100))?0:Math.round(n/s*100),r=s=>100-s,c={datasets:[{data:[d(e,o),r(d(e,o))],backgroundColor:["#FFF3B7","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},l={id:"textCenter",beforeDatasetsDraw(s){const{ctx:n,data:f}=s,x=s.getDatasetMeta(0).data[0].x,p=s.getDatasetMeta(0).data[0].y,g=f.datasets[0].data[0];n.save(),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.textAlign="center",n.textBaseline="middle",n.fillText(`${g}%`,x,p)}};return t.jsxs(Bt,{children:[t.jsx($,{data:c,plugins:[l]}),t.jsxs(Rt,{children:[t.jsx(Tt,{children:"Fat"}),t.jsxs(Pt,{children:[t.jsxs(T,{children:["Goal: ",t.jsx(N,{children:o})]}),t.jsxs(T,{children:["left: ",t.jsx(N,{children:a(e,o)})]})]})]})]})},Lt=i.div`
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
`,Et=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,qt=i.div`
  width: 168px;
  height: 168px;
`,At=i.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`,Gt=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Ot=i.div`
  display: flex;
  gap: 12px;
`,Ht=i.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,L=i.p`
  font-size: 14px;
  line-height: 1.43;
`,E=i.span`
  color: #b6b6b6;
`;v.register(k,S,D);const _t=()=>{const e=h(bt)||0,o=h(vt)||0,a=(s,n)=>s-n,d=(s,n)=>isNaN(Math.round(n/s*100))?0:Math.round(n/s*100),r=s=>100-s,c={datasets:[{data:[d(e,o),r(d(e,o))],backgroundColor:["#B6B6B6","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},l={id:"textCenter",beforeDatasetsDraw(s){const{ctx:n,data:f}=s,x=s.getDatasetMeta(0).data[0].x,p=s.getDatasetMeta(0).data[0].y,g=f.datasets[0].data[0];n.save(),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.textAlign="center",n.textBaseline="middle",n.fillText(`${g}%`,x,p)}};return t.jsxs(At,{children:[t.jsx($,{data:c,plugins:[l]}),t.jsxs(Gt,{children:[t.jsx(Ht,{children:"Protein"}),t.jsxs(Ot,{children:[t.jsxs(L,{children:["Goal: ",t.jsx(E,{children:o})]}),t.jsxs(L,{children:["left: ",t.jsx(E,{children:a(e,o)})]})]})]})]})},Vt=()=>{const e=b();return m.useEffect(()=>{e(G())}),t.jsxs("div",{children:[t.jsx(M,{children:"Food"}),t.jsxs(Lt,{children:[t.jsx(qt,{children:t.jsx(Ct,{})}),t.jsxs(Et,{children:[t.jsx(It,{}),t.jsx(_t,{}),t.jsx(Nt,{})]})]})]})},Jt=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`,Kt=i.div`
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
`,Qt=i.svg`
  width: 16px;
  height: 16px;
  stroke: #b6b6b6;
`,Ut=i.div`
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
`,Xt=i.h1`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.25;

  @media (max-width: 834px) {
    font-size: 24px;
  }
`,Yt=i(Y)`
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
`,Zt=i.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,te=i.section`
  position: relative;
  margin-top: 16px;

  @media (min-width: 834px) {
    margin-top: 24px;
  }

  @media (min-width: 1440px) {
    margin-top: 20px;
  }
`,ee=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 834px) {
    flex-basis: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,ie=i.div`
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
`,ne=i.div`
  @media (min-width: 834px) {
    display: flex;
    gap: 40px;
    align-items: center;
    margin-bottom: 16px;
  }
`,se=i.p`
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
`,oe=i.p`
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
`,ae=i.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`,re=i.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  display: flex;
  gap: 4px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    margin-bottom: 0px;
  }
`,Q=i.svg`
  width: 16px;
  height: 16px;
  stroke: #0f0f0f;

  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`,de=i.button`
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
    & > ${Q} {
      stroke: #ffffff;
    }
  }
`,le=i.div`
  width: 80px;
  height: 192px;
  border-radius: 20px;
  background-color: #292928;
  padding: 8px;

  position: relative;
`,ce=i.div`
  width: 64px;
  height: ${e=>`${(e.height===!1?0:e.height)/100*128}px`};
  max-height: 128px;
  border-radius: 20px;
  background-color: #b6c3ff;

  position: absolute;
  bottom: 8px;
`,xe=i.div`
  @media (max-width: 833px) {
    width: 300px;
  }

  @media (min-width: 834px) {
    width: 380px;
  }

  @media (min-width: 1440px) {
    width: 444px;
  }
`,pe=i.svg`
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
`,he=i.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.37;
  text-align: center;
  color: #b6c3ff;

  position: absolute;
  top: 28px;
  left: 22px;
`,fe=i.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 24px;

  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,me=i.form`
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
`,ge=i.input`
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
`,ue=i.label`
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
`,be=i.button`
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
`,we=i.p`
  margin-top: 16px;
  text-align: center;
  color: #b6b6b6;
  cursor: pointer;
`,je=i(O)`
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
`;O.setAppElement("#root");const ye=({open:e,close:o})=>{const a=b(),d=r=>{r.preventDefault();const l=r.currentTarget.elements.water.value;a(Z(l)),a(z()),o()};return t.jsxs(je,{isOpen:e,onRequestClose:o,contentLabel:"Example Modal",overlayClassName:"Overlay",children:[t.jsx(fe,{children:"Add water intake"}),t.jsxs("div",{children:[t.jsxs(me,{onSubmit:d,children:[t.jsxs(ue,{children:["How match water",t.jsx(ge,{type:"text",name:"water",placeholder:"Enter milliliters",autoComplete:"off"})]}),t.jsx(be,{type:"submit",children:"Confirm"})]}),t.jsx(we,{onClick:o,children:"Cancel"})]})]})},ve=e=>e.water.waterIntake,ke=()=>{const[e,o]=m.useState(!1),a=h(K)||0;h(ve);const d=b(),r=h(St)||0;function c(){o(!0)}function l(){o(!1)}function s(x,p){return x-r<0?0:Math.round(x-r)}function n(x,p){return p/x*100>=100?100:Math.round(p/x*100)}function f(){d(tt()),setTimeout(()=>{d(z())},100),et.success("WaterIntake has been successfuly reset")}return t.jsxs(t.Fragment,{children:[t.jsxs(xe,{children:[t.jsx(M,{children:"Water"}),t.jsxs(ie,{children:[t.jsxs(le,{children:[t.jsxs(he,{children:[n(a,r)," %"]}),t.jsx(ce,{height:n(a,r)||0})]}),t.jsxs("div",{children:[t.jsx(pe,{onClick:f,children:t.jsx("use",{href:`${j}#trash`})}),t.jsx(se,{children:"Water consumption"}),t.jsxs(ne,{children:[t.jsxs(oe,{children:[r," ",t.jsx(q,{children:"ml"})]}),t.jsxs(re,{children:["left: ",t.jsx(ae,{children:s(a)})," ",t.jsx(q,{children:"ml"})]})]}),t.jsxs(de,{onClick:c,children:[t.jsx(Q,{children:t.jsx("use",{href:`${j}#add`})}),"Add water intake"]})]})]})]}),t.jsx(ye,{open:e,close:l})]})},Se=i.li`
  @media screen and (${e=>e.theme.mq.tabMin}) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,De=i.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: ${e=>e.theme.colors.primaryWhite};  

  @media screen and (${e=>e.theme.mq.tabMin}) {
    margin-bottom: 0px;
  }
`,$e=i.h3`
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 24px;
`,Ce=i.div`
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
`,ze=i.p`
  min-width: 190px;
`,Me=i.p`
  width: 110px;
`,Fe=i.p`
  width: 60px;
`,C=i.span`
  color: ${e=>e.theme.colors.primaryGray};
  font-weight: ${e=>e.theme.fontWeights.medium};
`,We=i.img`
  width: 36px;
  height: 36px;
`,Ie=i.button`
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
`,w=({title:e,image:o,info:a})=>{const[d,r]=m.useState(!1),c=()=>r(!d),{carbohidrates:l,protein:s,fat:n}=a;return t.jsxs(Se,{children:[t.jsxs(De,{children:[t.jsx(We,{src:o,alt:"Plate"}),t.jsx($e,{children:e})]}),l!==0||s!==0||n!==0?t.jsxs(Ce,{children:[t.jsxs(ze,{children:["Carbonohidrates: ",t.jsx(C,{children:l})]}),t.jsxs(Me,{children:["Protein: ",t.jsx(C,{children:s})]}),t.jsxs(Fe,{children:["Fat: ",t.jsx(C,{children:n})]})]}):t.jsx(Ie,{onClick:c,children:"+ Record your meal"}),d&&t.jsx(it,{onClose:c,image:o,mealType:e})]})};w.propTypes={title:u.string.isRequired,image:u.string.isRequired,info:u.shape({carbohidrates:u.number.isRequired,protein:u.number.isRequired,fat:u.number.isRequired})};const Be=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`,Re=i.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`,Pe=i.h2`
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: ${e=>e.theme.fontSizes.m};
  line-height: 24px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.l};
    line-height: 32px;
  }
`,Te=i(H)`
  color: ${e=>e.theme.colors.primaryGray};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.s};
    line-height: 22px;
  }
`,Ne=i.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`,Le=()=>{const e=b(),o=h(nt),[a,d]=m.useState([]),[r,c]=m.useState([]),[l,s]=m.useState([]),[n,f]=m.useState([]);return m.useEffect(()=>{(async()=>{try{await e(_(V))}catch(p){toast.error(p)}})()},[e]),m.useEffect(()=>{o&&(d(o.foodIntake.lunch),c(o.foodIntake.breakfast),s(o.foodIntake.dinner),f(o.foodIntake.snack))},[o]),t.jsxs(Be,{children:[t.jsxs(Re,{children:[t.jsx(Pe,{children:"Diary"}),t.jsx(Te,{to:"/diary",children:"See more"})]}),t.jsxs(Ne,{children:[t.jsx(w,{title:"Breakfast",image:st,info:y(r)}),t.jsx(w,{title:"Lunch",image:ot,info:y(a)}),t.jsx(w,{title:"Dinner",image:at,info:y(l)}),t.jsx(w,{title:"Snack",image:rt,info:y(n)})]})]})},Ee=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }
`,qe=i.h2`
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
`,Ae=i.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,Ge=i(H)`
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
`,Oe=()=>{const[e,o]=m.useState([]);return m.useEffect(()=>{dt().then(a=>{o(lt(a))}).catch(a=>console.log(a))},[]),t.jsxs(Ee,{children:[t.jsx(qe,{children:"Recommended food"}),t.jsx(Ae,{children:e.map(({_id:a,img:d,name:r,amount:c,calories:l})=>t.jsx(ct,{id:a,img:d,name:r,amount:c,calories:l},a))}),t.jsx(Ge,{to:"/recommended-food",children:"See more"})]})},Ke=()=>{const e=b();return m.useEffect(()=>{e(z()),e(G()),e(_(V))},[e]),t.jsxs(te,{children:[t.jsxs("div",{className:"container",children:[t.jsxs(Ut,{children:[t.jsx(Xt,{children:"Today"}),t.jsx(Yt,{to:"/dashboard",children:t.jsxs(Zt,{children:["On the way to the goal",t.jsx(Qt,{children:t.jsx("use",{href:`${j}#arrow-right`})})]})})]}),t.jsxs(Jt,{children:[t.jsxs(Kt,{children:[t.jsx(gt,{}),t.jsx(ke,{})]}),t.jsx(Vt,{})]})]}),t.jsx("div",{className:"container",children:t.jsxs(ee,{children:[t.jsx(Le,{}),t.jsx(Oe,{})]})})]})};export{Ke as default};
