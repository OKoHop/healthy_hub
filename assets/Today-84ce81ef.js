import{s as i,u,a as f,r as p,f as Z,j as e,c as O,g as H,N as tt,M as V,b as et,d as j,e as it,_,P as b,h as nt,i as M,L as J}from"./index-53213d88.js";import{C as k,A as $,p as S,a as D,D as C}from"./index-5a33a0df.js";import{s as ot}from"./Buttons.styled-fe334e2d.js";import{R as st,t as W,s as rt,b as at,c as v,l as dt,d as lt,a as ct}from"./calculateTotalIngridients-43f08a99.js";import{g as pt,r as xt,R as ht}from"./randomizeFood-8b7b5b68.js";const mt=i.div`
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
`,L=i.p`
  font-weight: 600;
  font-size: 34px;
  line-height: 1.12;
  display: flex;
  align-items: center;
  gap: 4px;
`,R=i.div`
  display: flex;
  gap: 20px;
`,ft=i.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`,F=i.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 1.33;
  margin-bottom: 6px;

  @media (max-width: 833px) {
    font-size: 18px;
  }
`,gt=i.div`
  @media (max-width: 833px) {
    width: 300px;
  }

  @media (min-width: 834px) {
    width: 380px;
  }

  @media (min-width: 1440px) {
    width: 328px;
  }
`,ut=i.svg`
  width: 80px;
  height: 80px;
  stroke: #45ffbc;
  fill: #0f0f0f;
`,bt=i.svg`
  width: 80px;
  height: 80px;
  stroke: #b6c3ff;
  fill: #0f0f0f;
`,w="/healthy_hub/assets/today-svg-sprite-29233aff.svg",K=t=>t.daily.calories,Q=t=>t.daily.water,wt=()=>{const t=u(),s=f(K),r=f(Q);return p.useEffect(()=>{t(Z())},[t]),e.jsxs(gt,{children:[e.jsx(F,{children:"Daily goal"}),e.jsxs(mt,{children:[e.jsxs(R,{children:[e.jsx(ut,{children:e.jsx("use",{href:`${w}#bubble`})}),e.jsxs("div",{children:[e.jsx(B,{children:"Calories"}),e.jsx(L,{children:s&&Math.round(s)})]})]}),e.jsxs(R,{children:[e.jsx(bt,{children:e.jsx("use",{href:`${w}#water`})}),e.jsxs("div",{children:[e.jsx(B,{children:"Water"}),e.jsxs(L,{children:[r&&Math.round(r)," ",e.jsx(ft,{children:"ml"})]})]})]})]})]})},yt=t=>t.nutrients.carbonohidrates,jt=t=>t.nutrients.protein,vt=t=>t.nutrients.fat,kt=t=>t.nutrients.dailyNutrients.totalCalories,$t=t=>t.nutrients.dailyNutrients.totalCarbohidrates,St=t=>t.nutrients.dailyNutrients.totalProtein,Dt=t=>t.nutrients.dailyNutrients.totalFat,Ct=t=>t.nutrients.dailyNutrients.waterIntake,zt=t=>t.nutrients.dailyNutrients.foodIntake.breakfast,Mt=O([$t],t=>t||0);O([zt],t=>{let s=0;return t?(t.map(r=>s+=r.carbohidrates),s):0});k.register($,S,D);const Wt=()=>{const t=f(K),s=f(kt),r=(o,n)=>!n&&!o?0:n-o,a={datasets:[{data:[(o=>o||0)(s),r(s,t)],backgroundColor:["#45FFBC","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},x={id:"textCenter",beforeDatasetsDraw(o){const{ctx:n,data:m}=o,l=o.getDatasetMeta(0).data[0].x,c=o.getDatasetMeta(0).data[0].y;n.save(),n.font="500 32px sans-serif",n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.fillText(m.datasets[0].data[0],l,c-10),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.fillText("calories",l,c+20)}},h={id:"backgroundCirgle",beforeDatasetsDraw(o){const{ctx:n}=o;n.save();const m=o.getDatasetMeta(0).data[0].x,l=o.getDatasetMeta(0).data[0].y,c=o.getDatasetMeta(0).data[0].innerRadius,g=o.getDatasetMeta(0).data[0].outerRadius,I=g-c,Y=Math.PI/180;n.beginPath(),n.strokeStyle="#292928",n.lineWidth=I,n.arc(m,l,g-I/2,0,Y*360,!1),n.stroke()}};return e.jsx(C,{data:a,plugins:[x,h]})},Ft=i.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`,It=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Bt=i.div`
  display: flex;
  gap: 12px;
`,Lt=i.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,T=i.p`
  font-size: 14px;
  line-height: 1.43;
`,P=i.span`
  color: #b6b6b6;
`;k.register($,S,D);const Rt=()=>{const t=f(yt),s=f(Mt),r=(o,n)=>o-n===null?0:o-n,d=(o,n)=>isNaN(Math.round(n/o*100))?0:Math.round(n/o*100),a=o=>100-o,x={datasets:[{data:[d(t,s),a(d(t,s))],backgroundColor:["#FFC4F7","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},h={id:"textCenter",beforeDatasetsDraw(o){const{ctx:n,data:m}=o,l=o.getDatasetMeta(0).data[0].x,c=o.getDatasetMeta(0).data[0].y,g=m.datasets[0].data[0];n.save(),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.textAlign="center",n.textBaseline="middle",n.fillText(`${g}%`,l,c)}};return e.jsxs(Ft,{children:[e.jsx(C,{data:x,plugins:[h]}),e.jsxs(It,{children:[e.jsx(Lt,{children:"Carbonohidrates"}),e.jsxs(Bt,{children:[e.jsxs(T,{children:["Goal: ",e.jsx(P,{children:t})]}),e.jsxs(T,{children:["left: ",e.jsx(P,{children:r(t,s)})]})]})]})]})},Tt=i.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`,Pt=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Nt=i.div`
  display: flex;
  gap: 12px;
`,Et=i.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,N=i.p`
  font-size: 14px;
  line-height: 1.43;
`,E=i.span`
  color: #b6b6b6;
`;k.register($,S,D);const Gt=()=>{const t=f(vt)||0,s=f(Dt)||0,r=(o,n)=>o-n,d=(o,n)=>isNaN(Math.round(n/o*100))?0:Math.round(n/o*100),a=o=>100-o,x={datasets:[{data:[d(t,s),a(d(t,s))],backgroundColor:["#FFF3B7","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},h={id:"textCenter",beforeDatasetsDraw(o){const{ctx:n,data:m}=o,l=o.getDatasetMeta(0).data[0].x,c=o.getDatasetMeta(0).data[0].y,g=m.datasets[0].data[0];n.save(),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.textAlign="center",n.textBaseline="middle",n.fillText(`${g}%`,l,c)}};return e.jsxs(Tt,{children:[e.jsx(C,{data:x,plugins:[h]}),e.jsxs(Pt,{children:[e.jsx(Et,{children:"Fat"}),e.jsxs(Nt,{children:[e.jsxs(N,{children:["Goal: ",e.jsx(E,{children:t})]}),e.jsxs(N,{children:["left: ",e.jsx(E,{children:r(t,s)})]})]})]})]})},At=i.div`
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
`,Ot=i.div`
  width: 168px;
  height: 168px;
`,Ht=i.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`,Vt=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,_t=i.div`
  display: flex;
  gap: 12px;
`,Jt=i.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,G=i.p`
  font-size: 14px;
  line-height: 1.43;
`,A=i.span`
  color: #b6b6b6;
`;k.register($,S,D);const Kt=()=>{const t=f(jt)||0,s=f(St)||0,r=(o,n)=>o-n,d=(o,n)=>isNaN(Math.round(n/o*100))?0:Math.round(n/o*100),a=o=>100-o,x={datasets:[{data:[d(t,s),a(d(t,s))],backgroundColor:["#B6B6B6","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},h={id:"textCenter",beforeDatasetsDraw(o){const{ctx:n,data:m}=o,l=o.getDatasetMeta(0).data[0].x,c=o.getDatasetMeta(0).data[0].y,g=m.datasets[0].data[0];n.save(),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.textAlign="center",n.textBaseline="middle",n.fillText(`${g}%`,l,c)}};return e.jsxs(Ht,{children:[e.jsx(C,{data:x,plugins:[h]}),e.jsxs(Vt,{children:[e.jsx(Jt,{children:"Protein"}),e.jsxs(_t,{children:[e.jsxs(G,{children:["Goal: ",e.jsx(A,{children:t})]}),e.jsxs(G,{children:["left: ",e.jsx(A,{children:r(t,s)})]})]})]})]})},Qt=()=>{const t=u();return p.useEffect(()=>{t(H())}),e.jsxs("div",{children:[e.jsx(F,{children:"Food"}),e.jsxs(At,{children:[e.jsx(Ot,{children:e.jsx(Wt,{})}),e.jsxs(qt,{children:[e.jsx(Rt,{}),e.jsx(Kt,{}),e.jsx(Gt,{})]})]})]})},Ut=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`,Xt=i.div`
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
`,Yt=i.svg`
  width: 16px;
  height: 16px;
  stroke: #b6b6b6;
  transition: ${t=>t.theme.transition.customTrans};
`,Zt=i.div`
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
`,te=i.h1`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.25;

  @media (max-width: 834px) {
    font-size: 24px;
  }
`,ee=i(tt)`
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
`,ie=i.div`
  display: flex;
  gap: 6px;
  align-items: center;
  transition: ${t=>t.theme.transition.customTrans};
  &:hover {
    svg {
      stroke: ${t=>t.theme.colors.primaryWhite};
    }

    color: ${t=>t.theme.colors.primaryWhite};
  }
`,ne=i.section`
  position: relative;
  margin-top: 16px;

  @media (min-width: 834px) {
    margin-top: 24px;
  }

  @media (min-width: 1440px) {
    margin-top: 20px;
  }
`,oe=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 834px) {
    flex-basis: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,se=i.div`
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
`,re=i.div`
  @media (min-width: 834px) {
    display: flex;
    gap: 40px;
    align-items: center;
    margin-bottom: 16px;
  }
`,ae=i.p`
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
`,de=i.p`
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
`,le=i.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`,ce=i.p`
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
`,pe=i.button`
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
`,xe=i.div`
  width: 80px;
  height: 192px;
  border-radius: 20px;
  background-color: #292928;
  padding: 8px;

  position: relative;
`,he=i.div`
  width: 64px;
  height: ${t=>`${(t.height===!1?0:t.height)/100*128}px`};
  max-height: 128px;
  border-radius: 20px;
  background-color: #b6c3ff;

  position: absolute;
  bottom: 8px;
`,me=i.div`
  @media (max-width: 833px) {
    width: 300px;
  }

  @media (min-width: 834px) {
    width: 380px;
  }

  @media (min-width: 1440px) {
    width: 444px;
  }
`,fe=i.svg`
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
    transform: scale(1.1);
  }
`,ge=i.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.37;
  text-align: center;
  color: #b6c3ff;

  position: absolute;
  top: 28px;
  left: 22px;
`,ue=i.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 24px;

  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,be=i.form`
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
`,we=i.input`
  width: 276px;
  max-width: 100%;
  height: 34px;
  border: 1px solid ${t=>t.theme.colors.primaryGreenLite};
  border-radius: 12px;
  padding: 8px 10px;
  background-color: #0f0f0f;
  color: #b6b6b6;
  transition: ${t=>t.theme.transition.customTrans};
  outline: none;
  cursor: pointer;
  &::placeholder {
    color: #b6b6b6;
  }
  &:hover,
  &:focus {
    border: 1px solid ${t=>t.theme.colors.primaryWhite};
  }
  @media (min-width: 834px) {
    width: 212px;
    height: 36px;
    margin-left: auto;
    margin-right: auto;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`,ye=i.label`
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
`,je=i.button`
  width: 276px;
  height: 36px;
  border: 1px solid ${t=>t.theme.colors.primaryGreenLite};
  border-radius: 12px;
  background: ${t=>t.theme.colors.primaryGreenLite};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  font-size: 14px;
  @media (min-width: 834px) {
    width: 212px;
    height: 36px;
  }

  &:hover {
    background-color: transparent;
    border: 1px solid ${t=>t.theme.colors.primaryGreenLite};
    color: ${t=>t.theme.colors.primaryWhite};
  }
`,ve=i.button`
  ${ot}
  display: block;
  color: ${t=>t.theme.colors.primaryGray};
  border: 1px solid transparent;
  background-color: transparent;
  width: 100px;
  margin-top: 16px;
  margin-inline: auto;
  &:hover {
    border-color: ${t=>t.theme.colors.primaryGreenLite};
    width: 100%;
    @media (min-width: 834px) {
      width: 212px;
    }
  }
`,ke=i(V)`
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
`;V.setAppElement("#root");const $e=({open:t,close:s})=>{const r=u(),d=a=>{a.preventDefault();const h=a.currentTarget.elements.water.value;r(et(h)),r(j()),s()};return e.jsxs(ke,{isOpen:t,onRequestClose:s,contentLabel:"Example Modal",overlayClassName:"Overlay",children:[e.jsx(ue,{children:"Add water intake"}),e.jsxs("div",{children:[e.jsxs(be,{onSubmit:d,children:[e.jsxs(ye,{children:["How much water",e.jsx(we,{type:"text",name:"water",placeholder:"Enter milliliters",autoComplete:"off"})]}),e.jsx(je,{type:"submit",children:"Confirm"})]}),e.jsx(ve,{onClick:s,children:"Cancel"})]})]})},Se=t=>t.water.waterIntake,De=()=>{const[t,s]=p.useState(!1),r=f(Q)||0;f(Se);const d=u(),a=f(Ct)||0;function x(){s(!0)}function h(){s(!1)}function o(l,c){return l-a<0?0:Math.round(l-a)}function n(l,c){return c/l*100>=100?100:Math.round(c/l*100)}function m(){d(it()),setTimeout(()=>{d(j())},100),_.success("WaterIntake has been successfuly reset")}return p.useEffect(()=>{d(j())},[a]),e.jsxs(e.Fragment,{children:[e.jsxs(me,{children:[e.jsx(F,{children:"Water"}),e.jsxs(se,{children:[e.jsxs(xe,{children:[e.jsxs(ge,{children:[n(r,a)," %"]}),e.jsx(he,{height:n(r,a)||0})]}),e.jsxs("div",{children:[e.jsx(fe,{onClick:m,children:e.jsx("use",{href:`${w}#trash`})}),e.jsx(ae,{children:"Water consumption"}),e.jsxs(re,{children:[e.jsxs(de,{children:[a&&a," ",e.jsx(q,{children:"ml"})]}),e.jsxs(ce,{children:["left: ",e.jsx(le,{children:o(r)})," ",e.jsx(q,{children:"ml"})]})]}),e.jsxs(pe,{onClick:x,children:[e.jsx(U,{children:e.jsx("use",{href:`${w}#add`})}),"Add water intake"]})]})]})]}),e.jsx($e,{open:t,close:h})]})},Ce=i.li`
  @media screen and (${t=>t.theme.mq.tabMin}) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,ze=i.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: ${t=>t.theme.colors.primaryWhite};

  @media screen and (${t=>t.theme.mq.tabMin}) {
    margin-bottom: 0px;
  }
`,Me=i.h3`
  font-size: ${t=>t.theme.fontSizes.m};
  font-weight: ${t=>t.theme.fontWeights.medium};
  line-height: 24px;
`,We=i.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  color: ${t=>t.theme.colors.primaryWhite};
  font-size: ${t=>t.theme.fontSizes.xs};
  line-height: 20px;

  @media screen and (${t=>t.theme.mq.tabMin}) {
    flex-direction: row;
    column-gap: 20px;
  }
`,Fe=i.p`
  min-width: 190px;
`,Ie=i.p`
  width: 110px;
`,Be=i.p`
  width: 60px;
`,z=i.span`
  color: ${t=>t.theme.colors.primaryGray};
  font-weight: ${t=>t.theme.fontWeights.medium};
`,Le=i.img`
  width: 36px;
  height: 36px;
`,Re=i.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: ${t=>t.theme.colors.primaryGreenLite};
  font-size: ${t=>t.theme.fontSizes.xs};
  font-weight: ${t=>t.theme.fontWeights.medium};
  line-height: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
  transition: ${t=>t.theme.transition.customTrans};
  &:hover {
    text-decoration: underline;
  }
`,Te=i.svg`
  width: 20px;
  height: 20px;
  stroke: #e3ffa8;
  cursor: pointer;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  :focus {
    transform: scale(1.2);
  }
`,y=({title:t,image:s,info:r})=>{const[d,a]=p.useState(!1),x=u(),h=()=>a(!d),o=t.toLowerCase();function n(g){x(nt(g)),setTimeout(()=>{x(j()),x(M(W))},100),_.success("FoodIntake has been successfuly delete")}const{carbohidrates:m,protein:l,fat:c}=r;return e.jsxs(Ce,{children:[e.jsxs(ze,{children:[e.jsx(Le,{src:s,alt:"Plate"}),e.jsx(Me,{children:t})]}),m!==0||l!==0||c!==0?e.jsxs(We,{children:[e.jsxs(Fe,{children:["Carbonohidrates: ",e.jsx(z,{children:m})]}),e.jsxs(Ie,{children:["Protein: ",e.jsx(z,{children:l})]}),e.jsxs(Be,{children:["Fat: ",e.jsx(z,{children:c})]}),e.jsx(Te,{onClick:()=>{n(o)},children:e.jsx("use",{href:`${w}#trash`})})]}):e.jsx(Re,{onClick:h,children:"+ Record your meal"}),d&&e.jsx(st,{onClose:h,image:s,mealType:t})]})};y.propTypes={title:b.string.isRequired,image:b.string.isRequired,info:b.shape({carbohidrates:b.number.isRequired,protein:b.number.isRequired,fat:b.number.isRequired})};const Pe=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`,Ne=i.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`,Ee=i.h2`
  color: ${t=>t.theme.colors.primaryWhite};
  font-size: ${t=>t.theme.fontSizes.m};
  line-height: 24px;

  @media screen and (${t=>t.theme.mq.tabMin}) {
    font-size: ${t=>t.theme.fontSizes.l};
    line-height: 32px;
  }
`,Ge=i(J)`
  color: ${t=>t.theme.colors.primaryGray};
  font-size: ${t=>t.theme.fontSizes.xs};
  font-weight: ${t=>t.theme.fontWeights.medium};
  line-height: 20px;
  transition: ${t=>t.theme.transition.customTrans};
  &:hover {
    color: ${t=>t.theme.colors.primaryWhite};
  }
  @media screen and (${t=>t.theme.mq.tabMin}) {
    font-size: ${t=>t.theme.fontSizes.s};
    line-height: 22px;
  }
`,Ae=i.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`,qe=()=>{const t=u(),s=f(rt),[r,d]=p.useState([]),[a,x]=p.useState([]),[h,o]=p.useState([]),[n,m]=p.useState([]);return p.useEffect(()=>{(async()=>{try{await t(M(W))}catch(c){toast.error(c)}})()},[t]),p.useEffect(()=>{s&&(d(s.foodIntake.lunch),x(s.foodIntake.breakfast),o(s.foodIntake.dinner),m(s.foodIntake.snack))},[s]),e.jsxs(Pe,{children:[e.jsxs(Ne,{children:[e.jsx(Ee,{children:"Diary"}),e.jsx(Ge,{to:"/diary",children:"See more"})]}),e.jsxs(Ae,{children:[e.jsx(y,{title:"Breakfast",image:at,info:v(a)}),e.jsx(y,{title:"Lunch",image:dt,info:v(r)}),e.jsx(y,{title:"Dinner",image:lt,info:v(h)}),e.jsx(y,{title:"Snack",image:ct,info:v(n)})]})]})},Oe=t=>p.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},p.createElement("g",{id:"vuesax/linear/arrow-right"},p.createElement("g",{id:"arrow-right"},p.createElement("path",{id:"Vector",d:"M9.62012 3.95312L13.6668 7.99979L9.62012 12.0465",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{id:"Vector_2",d:"M2.33301 8H13.553",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"})))),He=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }
`,Ve=i.h2`
  margin-top: 16px;
  margin-bottom: 16px;
  font-family: 'Poppins', sans-serif;
  color: ${t=>t.theme.colors.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,_e=i.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,X=i(J)`
  margin-top: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${t=>t.theme.colors.primaryGray};
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  transition: ${t=>t.theme.transition.customTrans};
  &:hover {
    color: ${t=>t.theme.colors.primaryWhite};
  }
  @media screen and (min-width: 834px) {
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 22px;
  }
`,Je=i(Oe)`
  stroke: ${t=>t.theme.colors.primaryGray};
  transition: ${t=>t.theme.transition.customTrans};

  ${X}:hover & {
    stroke: ${t=>t.theme.colors.primaryWhite};
  }
`,Ke=()=>{const[t,s]=p.useState([]);return p.useEffect(()=>{pt().then(r=>{s(xt(r))}).catch(r=>console.log(r))},[]),e.jsxs(He,{children:[e.jsx(Ve,{children:"Recommended food"}),e.jsx(_e,{children:t.map(({_id:r,img:d,name:a,amount:x,calories:h})=>e.jsx(ht,{id:r,img:d,name:a,amount:x,calories:h},r))}),e.jsxs(X,{to:"/recommended-food",children:["See more",e.jsx(Je,{})]})]})},ti=()=>{const t=u();return p.useEffect(()=>{t(j()),t(H()),t(M(W))},[t]),e.jsxs(ne,{children:[e.jsxs("div",{className:"container",children:[e.jsxs(Zt,{children:[e.jsx(te,{children:"Today"}),e.jsx(ee,{to:"/dashboard",children:e.jsxs(ie,{children:["On the way to the goal",e.jsx(Yt,{children:e.jsx("use",{href:`${w}#arrow-right`})})]})})]}),e.jsxs(Ut,{children:[e.jsxs(Xt,{children:[e.jsx(wt,{}),e.jsx(De,{})]}),e.jsx(Qt,{})]})]}),e.jsx("div",{className:"container",children:e.jsxs(oe,{children:[e.jsx(qe,{}),e.jsx(Ke,{})]})})]})};export{ti as default};
