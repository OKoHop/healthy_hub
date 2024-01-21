import{s as i,u as z,j as t,a as D,N as Y,M as B,b as k,c as Z,r as d,d as ee,_ as N,P as y,e as te,g as P,f as E,t as C,L as G,h as ie}from"./index-61153e53.js";import{C as A,A as q,p as O,a as H,D as V}from"./index-73b17d94.js";import{s as $,R as ne,b as oe,c as S,l as se,d as re,a as ae}from"./calculateTotalIngridients-7481a188.js";import{s as de}from"./Buttons.styled-8035ff6a.js";import{g as le,r as pe,R as ce}from"./randomizeFood-d1a24066.js";const xe=i.div`
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
`,I=i.h3`
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
`,he=i.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`,W=i.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 1.33;
  margin-bottom: 6px;

  @media (max-width: 833px) {
    font-size: 18px;
  }
`,me=i.div`
  @media (max-width: 833px) {
    width: 300px;
  }

  @media (min-width: 834px) {
    width: 380px;
  }

  @media (min-width: 1440px) {
    width: 328px;
  }
`,fe=i.svg`
  width: 80px;
  height: 80px;
  stroke: #45ffbc;
  fill: #0f0f0f;
`,ge=i.svg`
  width: 80px;
  height: 80px;
  stroke: #b6c3ff;
  fill: #0f0f0f;
`,j="/healthy_hub/assets/today-svg-sprite-29233aff.svg",ue=()=>{const{user:e}=z();return t.jsxs(me,{children:[t.jsx(W,{children:"Daily goal"}),t.jsxs(xe,{children:[t.jsxs(R,{children:[t.jsx(fe,{children:t.jsx("use",{href:`${j}#bubble`})}),t.jsxs("div",{children:[t.jsx(I,{children:"Calories"}),t.jsxs(L,{children:[" ",Math.round(e.bmr)]})]})]}),t.jsxs(R,{children:[t.jsx(ge,{children:t.jsx("use",{href:`${j}#water`})}),t.jsxs("div",{children:[t.jsx(I,{children:"Water"}),t.jsxs(L,{children:[Math.round(e.water)," ",t.jsx(he,{children:"ml"})]})]})]})]})]})};A.register(q,O,H);const be=()=>{const{user:e}=z(),r=e==null?void 0:e.bmr,o=D($),l=(o==null?void 0:o.totalCalories)||0,x={datasets:[{data:[l,((s,n)=>!n&&!s?0:n-s)(l,r)],backgroundColor:["#45FFBC","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},a={id:"textCenter",beforeDatasetsDraw(s){const{ctx:n,data:g}=s,h=s.getDatasetMeta(0).data[0].x,u=s.getDatasetMeta(0).data[0].y;n.save(),n.font="500 32px sans-serif",n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.fillText(g.datasets[0].data[0],h,u-10),n.font="400 14px sans-serif",n.fillStyle="#B6B6B6",n.fillText("calories",h,u+20)}},c={id:"backgroundCircle",beforeDatasetsDraw(s){const{ctx:n}=s;n.save();const g=s.getDatasetMeta(0).data[0].x,h=s.getDatasetMeta(0).data[0].y,u=s.getDatasetMeta(0).data[0].innerRadius,b=s.getDatasetMeta(0).data[0].outerRadius,w=b-u,m=Math.PI/180;n.beginPath(),n.strokeStyle="#292928",n.lineWidth=w,n.arc(g,h,b-w/2,0,m*360,!1),n.stroke()}};return t.jsx(V,{data:x,plugins:[a,c]})},we=i.div`
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
`,ye=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,je=i.div`
  width: 168px;
  height: 168px;
`,ve=i.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`,ke=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,$e=i.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,Se=i.div`
  display: flex;
  gap: 12px;
  p{
    font-size: 14px;
  line-height: 1.43;
  }
  span{
    color: #b6b6b6;
  }
`;A.register(q,O,H);const F=(e,r,o,l,p)=>()=>{const{user:a}=z(),c=a.nutrients[r],s=D(o),n=s?s[l]:null,g=(m,f)=>!isNaN(m)&&!isNaN(f)?Math.max(m-f,0):0,h=(m,f)=>isNaN(Math.round(f/m*100))?0:Math.round(f/m*100),u=m=>100-m,b={datasets:[{data:[h(c,n),u(h(c,n))],backgroundColor:p,borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},w={id:"textCenter",beforeDatasetsDraw(m){const{ctx:f,data:K}=m,Q=m.getDatasetMeta(0).data[0].x,U=m.getDatasetMeta(0).data[0].y,X=K.datasets[0].data[0];f.save(),f.font="400 14px sans-serif",f.fillStyle="#B6B6B6",f.textAlign="center",f.textBaseline="middle",f.fillText(`${X}%`,Q,U)}};return t.jsxs(ve,{children:[t.jsx(V,{data:b,plugins:[w]}),t.jsxs(ke,{children:[t.jsx($e,{children:e}),t.jsxs(Se,{children:[t.jsxs("p",{children:["Goal: ",t.jsx("span",{children:c})]}),t.jsxs("p",{children:["left: ",t.jsx("span",{children:g(c,n)})]})]})]})]})},Ce=F("Carbohydrates","carbonohidrates",$,"totalCarbohidrates",["#FFC4F7","#292928"]),ze=F("Protein","protein",$,"totalProtein",["#B6B6B6","#292928"]),De=F("Fat","fat",$,"totalFat",["#FFF3B7","#292928"]),Me=()=>t.jsxs("div",{children:[t.jsx(W,{children:"Food"}),t.jsxs(we,{children:[t.jsx(je,{children:t.jsx(be,{})}),t.jsxs(ye,{children:[t.jsx(Ce,{}),t.jsx(ze,{}),t.jsx(De,{})]})]})]}),We=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`,Fe=i.div`
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
`,Ie=i.svg`
  width: 16px;
  height: 16px;
  stroke: #b6b6b6;
  transition: ${e=>e.theme.transition.customTrans};
`,Le=i.div`
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
`,Re=i.h1`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.25;

  @media (max-width: 834px) {
    font-size: 24px;
  }
`,Te=i(Y)`
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
`,Be=i.div`
  display: flex;
  gap: 6px;
  align-items: center;
  transition: ${e=>e.theme.transition.customTrans};
  &:hover {
    svg {
      stroke: ${e=>e.theme.colors.primaryWhite};
    }

    color: ${e=>e.theme.colors.primaryWhite};
  }
`,Ne=i.section`
  position: relative;
  margin-top: 16px;

  @media (min-width: 834px) {
    margin-top: 24px;
  }

  @media (min-width: 1440px) {
    margin-top: 20px;
  }
`,Pe=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 834px) {
    flex-basis: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,Ee=i.div`
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
`,Ge=i.div`
  @media (min-width: 834px) {
    display: flex;
    gap: 40px;
    align-items: center;
    margin-bottom: 16px;
  }
`,Ae=i.p`
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
`,qe=i.p`
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
`,T=i.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`,Oe=i.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`,He=i.p`
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
`,Ve=i.button`
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
`,_e=i.div`
  width: 80px;
  height: 192px;
  border-radius: 20px;
  background-color: #292928;
  padding: 8px;

  position: relative;
`,Je=i.div`
  width: 64px;
  height: ${e=>`${(e.height===!1?0:e.height)/100*128}px`};
  max-height: 128px;
  border-radius: 20px;
  background-color: #b6c3ff;

  position: absolute;
  bottom: 8px;
`,Ke=i.div`
  @media (max-width: 833px) {
    width: 300px;
  }

  @media (min-width: 834px) {
    width: 380px;
  }

  @media (min-width: 1440px) {
    width: 444px;
  }
`,Qe=i.svg`
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
`,Ue=i.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.37;
  text-align: center;
  color: #b6c3ff;

  position: absolute;
  top: 28px;
  left: 22px;
`,Xe=i.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 24px;

  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,Ye=i.form`
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
`,Ze=i.input`
  width: 276px;
  max-width: 100%;
  height: 34px;
  border: 1px solid ${e=>e.theme.colors.primaryGreenLite};
  border-radius: 12px;
  padding: 8px 10px;
  background-color: #0f0f0f;
  color: #b6b6b6;
  transition: ${e=>e.theme.transition.customTrans};
  outline: none;
  cursor: pointer;
  &::placeholder {
    color: #b6b6b6;
  }
  &:hover,
  &:focus {
    border: 1px solid ${e=>e.theme.colors.primaryWhite};
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
`,et=i.label`
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
`,tt=i.button`
  width: 276px;
  height: 36px;
  border: 1px solid ${e=>e.theme.colors.primaryGreenLite};
  border-radius: 12px;
  background: ${e=>e.theme.colors.primaryGreenLite};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  font-size: 14px;
  @media (min-width: 834px) {
    width: 212px;
    height: 36px;
  }

  &:hover {
    background-color: transparent;
    border: 1px solid ${e=>e.theme.colors.primaryGreenLite};
    color: ${e=>e.theme.colors.primaryWhite};
  }
`,it=i.button`
  ${de}
  display: block;
  color: ${e=>e.theme.colors.primaryGray};
  border: 1px solid transparent;
  background-color: transparent;
  width: 100px;
  margin-top: 16px;
  margin-inline: auto;
  &:hover {
    border-color: ${e=>e.theme.colors.primaryGreenLite};
    width: 100%;
    @media (min-width: 834px) {
      width: 212px;
    }
  }
`,nt=i(B)`
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
`;B.setAppElement("#root");const ot=({open:e,close:r})=>{const o=k(),l=async p=>{p.preventDefault();const a=p.currentTarget.elements.water.value;await o(Z(a)),r()};return t.jsxs(nt,{isOpen:e,onRequestClose:r,contentLabel:"Example Modal",overlayClassName:"Overlay",children:[t.jsx(Xe,{children:"Add water intake"}),t.jsxs("div",{children:[t.jsxs(Ye,{onSubmit:l,children:[t.jsxs(et,{children:["How much water",t.jsx(Ze,{type:"number",name:"water",placeholder:"Enter milliliters",autoComplete:"off",max:7e3})]}),t.jsx(tt,{type:"submit",children:"Confirm"})]}),t.jsx(it,{onClick:r,children:"Cancel"})]})]})},st=e=>e.water.waterIntake,rt=()=>{const e=k(),[r,o]=d.useState(!1),[l,p]=d.useState(!1),{user:x}=z(),a=D(st),c=x.water;function s(){p(!0)}function n(){p(!1)}function g(b,w){return b-w<0?0:Math.round(b-w)}function h(b,w){return w/b*100>=100?100:Math.round(w/b*100)}async function u(){try{o(!0),await e(ee()),N.success("Water consumption has been successfully reset")}finally{o(!1)}}return t.jsxs(t.Fragment,{children:[t.jsxs(Ke,{children:[t.jsx(W,{children:"Water"}),t.jsxs(Ee,{children:[t.jsxs(_e,{children:[t.jsxs(Ue,{children:[h(c,a)," %"]}),t.jsx(Je,{height:h(c,a)||0})]}),t.jsxs("div",{children:[t.jsx(Qe,{onClick:u,children:t.jsx("use",{href:`${j}#trash`})}),r&&t.jsx(t.Fragment,{children:t.jsx("span",{children:"loading"})}),t.jsx(Ae,{children:"Water consumption"}),t.jsxs(Ge,{children:[t.jsxs(qe,{children:[a," ",t.jsx(T,{children:"ml"})]}),t.jsxs(He,{children:["left:"," ",t.jsx(Oe,{children:g(c,a)})," ",t.jsx(T,{children:"ml"})]})]}),t.jsxs(Ve,{onClick:s,disabled:r,children:[t.jsx(_,{children:t.jsx("use",{href:`${j}#add`})}),"Add water intake"]})]})]})]}),t.jsx(ot,{open:l,close:n})]})},at=i.li`
  @media screen and (${e=>e.theme.mq.tabMin}) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,dt=i.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: ${e=>e.theme.colors.primaryWhite};

  @media screen and (${e=>e.theme.mq.tabMin}) {
    margin-bottom: 0px;
  }
`,lt=i.h3`
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 24px;
`,pt=i.div`
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
`,ct=i.p`
  min-width: 190px;
`,xt=i.p`
  width: 110px;
`,ht=i.p`
  width: 60px;
`,M=i.span`
  color: ${e=>e.theme.colors.primaryGray};
  font-weight: ${e=>e.theme.fontWeights.medium};
`,mt=i.img`
  width: 36px;
  height: 36px;
`,ft=i.button`
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
  transition: ${e=>e.theme.transition.customTrans};
  &:hover {
    text-decoration: underline;
  }
`,gt=i.svg`
  width: 20px;
  height: 20px;
  stroke: #e3ffa8;
  cursor: pointer;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  :focus {
    transform: scale(1.2);
  }
`,v=({title:e,image:r,info:o})=>{const[l,p]=d.useState(!1),x=k(),a=()=>p(!l),c=e.toLowerCase();async function s(u){await x(te(u)),await x(P()),await x(E(C)),N.success("The meal intake has been successfully removed.")}const{carbohidrates:n,protein:g,fat:h}=o;return t.jsxs(at,{children:[t.jsxs(dt,{children:[t.jsx(mt,{src:r,alt:"Plate"}),t.jsx(lt,{children:e})]}),n!==0||g!==0||h!==0?t.jsxs(pt,{children:[t.jsxs(ct,{children:["Carbonohidrates: ",t.jsx(M,{children:n})]}),t.jsxs(xt,{children:["Protein: ",t.jsx(M,{children:g})]}),t.jsxs(ht,{children:["Fat: ",t.jsx(M,{children:h})]}),t.jsx(gt,{onClick:()=>{s(c)},children:t.jsx("use",{href:`${j}#trash`})})]}):t.jsx(ft,{onClick:a,children:"+ Record your meal"}),l&&t.jsx(ne,{onClose:a,image:r,mealType:e})]})};v.propTypes={title:y.string.isRequired,image:y.string.isRequired,info:y.shape({carbohidrates:y.number.isRequired,protein:y.number.isRequired,fat:y.number.isRequired})};const ut=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`,bt=i.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`,wt=i.h2`
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: ${e=>e.theme.fontSizes.m};
  line-height: 24px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.l};
    line-height: 32px;
  }
`,yt=i(G)`
  color: ${e=>e.theme.colors.primaryGray};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  transition: ${e=>e.theme.transition.customTrans};
  &:hover {
    color: ${e=>e.theme.colors.primaryWhite};
  }
  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.s};
    line-height: 22px;
  }
`,jt=i.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`,vt=()=>{k();const e=D($),[r,o]=d.useState([]),[l,p]=d.useState([]),[x,a]=d.useState([]),[c,s]=d.useState([]);return d.useEffect(()=>{e&&(o(e.foodIntake.lunch),p(e.foodIntake.breakfast),a(e.foodIntake.dinner),s(e.foodIntake.snack))},[e]),t.jsxs(ut,{children:[t.jsxs(bt,{children:[t.jsx(wt,{children:"Diary"}),t.jsx(yt,{to:"/diary",children:"See more"})]}),t.jsxs(jt,{children:[t.jsx(v,{title:"Breakfast",image:oe,info:S(l)}),t.jsx(v,{title:"Lunch",image:se,info:S(r)}),t.jsx(v,{title:"Dinner",image:re,info:S(x)}),t.jsx(v,{title:"Snack",image:ae,info:S(c)})]})]})},kt=e=>d.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("g",{id:"vuesax/linear/arrow-right"},d.createElement("g",{id:"arrow-right"},d.createElement("path",{id:"Vector",d:"M9.62012 3.95312L13.6668 7.99979L9.62012 12.0465",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),d.createElement("path",{id:"Vector_2",d:"M2.33301 8H13.553",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"})))),$t=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }
`,St=i.h2`
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
`,Ct=i.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,J=i(G)`
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
  transition: ${e=>e.theme.transition.customTrans};
  &:hover {
    color: ${e=>e.theme.colors.primaryWhite};
  }
  @media screen and (min-width: 834px) {
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 22px;
  }
`,zt=i(kt)`
  stroke: ${e=>e.theme.colors.primaryGray};
  transition: ${e=>e.theme.transition.customTrans};

  ${J}:hover & {
    stroke: ${e=>e.theme.colors.primaryWhite};
  }
`,Dt=()=>{const[e,r]=d.useState([]);return d.useEffect(()=>{le().then(o=>{r(pe(o))}).catch(o=>console.log(o))},[]),t.jsxs($t,{children:[t.jsx(St,{children:"Recommended food"}),t.jsx(Ct,{children:e.map(({_id:o,img:l,name:p,amount:x,calories:a})=>t.jsx(ce,{id:o,img:l,name:p,amount:x,calories:a},o))}),t.jsxs(J,{to:"/recommended-food",children:["See more",t.jsx(zt,{})]})]})},Rt=()=>{const e=k();return d.useEffect(()=>{e(P(C)),e(ie(C)),e(E(C))},[e]),t.jsxs(Ne,{children:[t.jsxs("div",{className:"container",children:[t.jsxs(Le,{children:[t.jsx(Re,{children:"Today"}),t.jsx(Te,{to:"/dashboard",children:t.jsxs(Be,{children:["On the way to the goal",t.jsx(Ie,{children:t.jsx("use",{href:`${j}#arrow-right`})})]})})]}),t.jsxs(We,{children:[t.jsxs(Fe,{children:[t.jsx(ue,{}),t.jsx(rt,{})]}),t.jsx(Me,{})]})]}),t.jsx("div",{className:"container",children:t.jsxs(Pe,{children:[t.jsx(vt,{}),t.jsx(Dt,{})]})})]})};export{Rt as default};
