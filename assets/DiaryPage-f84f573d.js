import{s as t,j as e,N as E,v as A,r as T,n as d}from"./index-1493111e.js";import{s as M,c as N,e as H,f as _,g as O,b as v,l as S,d as D,a as L}from"./snack-fddd89bd.js";let c=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((i,s)=>(s&=63,s<36?i+=s.toString(36):s<62?i+=(s-26).toString(36).toUpperCase():s>62?i+="-":i+="_",i),"");const U=t.div`
  display: flex;
  row-gap: 12px;
  column-gap: 20px;
  flex-wrap: wrap;

  font-size: ${n=>n.theme.fontSizes.xs};
  font-weight: ${n=>n.theme.fontWeights.regular};
  line-height: 20px;

  @media screen and (${n=>n.theme.mq.tablet}) {
    margin-right: 60px;
    flex-wrap: nowrap;
  }

  @media screen and (${n=>n.theme.mq.desktop}) {
    margin-right: 25px;
  }
`,V=t.p`
  width: 100%;

  @media screen and (${n=>n.theme.mq.tablet}) {
    width: 164px;
  }
`,G=t.p`
  width: 92px;
`,J=t.p`
  width: 66px;
`,I=t.span`
  color: ${n=>n.theme.colors.gray};
  font-weight: ${n=>n.theme.fontWeights.medium};
`,l=({info:n})=>{const{carbonohidrates:i,protein:s,fat:o}=n;return e.jsxs(U,{children:[e.jsxs(V,{children:["Carbonohidrates: ",e.jsx(I,{children:i})]}),e.jsxs(G,{children:["Protein: ",e.jsx(I,{children:s})]}),e.jsxs(J,{children:["Fat: ",e.jsx(I,{children:o})]})]})},K="/healthy_hub/assets/edit-2-cb983d1b.svg",W=t.li`
  display: flex;
  column-gap: 16px;
  color: ${n=>n.theme.colors.white};
  font-family: ${n=>n.theme.fontFamily.poppins};
  font-size: ${n=>n.theme.fontSizes.xs};
  font-weight: ${n=>n.theme.fontWeights.regular};
  line-height: 20px;
`,P=t.span`
  min-width: 16px;
  font-weight: ${n=>n.theme.fontWeights.semiBold};
  text-align: center;
`,Q=t.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  row-gap: 6px;
`,X=t.p`
  text-transform: capitalize;
  flex-grow: 1;
`,Y=t.button`
  padding: 0;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  column-gap: 6px;
  color: ${n=>n.theme.colors.gray};
  font-family: ${n=>n.theme.fontFamily.poppins};
  font-size: ${n=>n.theme.fontSizes.xs};
  font-weight: ${n=>n.theme.fontWeights.regular};
  line-height: 20px;
  cursor: pointer;

  @media screen and (${n=>n.theme.mq.tablet}) {
    order: 1;
  }
`,Z=t.img`
  width: 16px;
  height: 16px;
`,ee=t.div`
  display: flex;
  column-gap: 12px;
  font-size: 12px;
  line-height: 18px;

  @media screen and (${n=>n.theme.mq.tablet}) {
    font-size: ${n=>n.theme.fontSizes.xs};
    line-height: 20px;
  }
`,z=t.p`
  display: flex;
  width: 70px;
  column-gap: 6px;

  & > span {
    color: ${n=>n.theme.colors.gray};
  }
  
  @media screen and (${n=>n.theme.mq.tablet}) {
    width: 80px;

    & > span {
      display: none;
    }
  }
`,ne=t(z)`
  width: 62px;
  @media screen and (${n=>n.theme.mq.tablet}) {
    width: 80px;
  }
`,te=t(z)`
  width: 58px;
  @media screen and (${n=>n.theme.mq.tablet}) {
    width: 80px;
  }
`,ie=t.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: ${n=>n.theme.colors.greenLite};
  font-family: ${n=>n.theme.fontFamily.poppins};
  font-size: ${n=>n.theme.fontSizes.xs};
  font-weight: ${n=>n.theme.fontWeights.medium};
  line-height: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
`,h=({item:n,index:i})=>{const{carbohydrate:s,protein:o,fat:k,mealName:y,mealType:$,showButton:F}=n;return e.jsx(e.Fragment,{children:F?e.jsxs(W,{children:[e.jsx(P,{children:i+1}),e.jsx(ie,{onClick:!0,children:"+ Record your meal"})]}):e.jsxs(W,{children:[e.jsx(P,{children:i+1}),$&&e.jsxs(Q,{children:[e.jsx(X,{children:y}),e.jsxs(Y,{type:"button",onClick:!0,children:[e.jsx(Z,{src:K,alt:"Edit"}),"Edit"]}),e.jsxs(ee,{children:[e.jsxs(z,{children:[e.jsx("span",{children:"Carb."}),s]}),e.jsxs(ne,{children:[e.jsx("span",{children:"Prot."}),o]}),e.jsxs(te,{children:[e.jsx("span",{children:"Fat."}),k]})]})]})]})})},p=(n,i)=>n.length<=3?[...n,...Array(1).fill({mealType:i,showButton:!0}),...Array(3-n.length).fill({})]:[...n,...Array(1).fill({mealType:i,showButton:!0})],se="/healthy_hub/assets/arrow-right-3924980b.svg",re=t.main`
  background-color: #050505;
  color: #FFFFFF;
  padding-top: 16px;
  padding-bottom: 60px;

  @media screen and (min-width: 834px) {
    padding-top: 24px;
    padding-bottom: 20px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 20px;
  }
`,ae=t.div`
  margin: 0 auto;
  width: 320px;
  padding: 0 10px;

  @media screen and (min-width: 834px) {
    width: 834px;
    padding: 0 27px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 34px;
  }
`,oe=t(E)`
  display: flex;
  @media screen and (min-width: 320px) {
    margin-right: 8px;
  }
  @media screen and (min-width: 834px) {
    margin-right: 12px;
  }
`,de=t.img`
  @media screen and (min-width: 320px) {
    width: 16px;
  }
  @media screen and (min-width: 834px) {
    width: 24px;
  }
`,ce=t.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    margin-bottom: 24px;

  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }
`,le=t.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,he=t.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;

    & > li:nth-child(2) {
      order: 2;
    }

    & > li:nth-child(3) {
      order: 1;
    }

    & > li:nth-child(4) {
      order: 3;
    }
  }
`,x=t.li`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 834px) {
    gap: 6px;
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 20px) / 2);
  }
`,m=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`,g=t.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0;
  }

`,f=t.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`,u=t.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`,j=t.h2`
  font-size: 18px;
  line-height: 26px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,w=t.ul`
  background-color: #0f0f0f;
  border-radius: 12px;
  height: 232px;
  padding: 16px 12px;

  @media screen and (min-width: 834px) {
    height: 240px;
    padding: 32px 14px;
  }
`,b=t.ul`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  height: 200px;
  overflow-y: auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(41, 41, 40, 0.2);
    border-radius: 12px;
    border: 1px solid rgba(227, 255, 168, 0.2);

    &:hover {
      background-color: rgba(227, 255, 168, 0.2);
    }
  }

  @media screen and (min-width: 834px) {
    height: 176px;
    row-gap: 32px;
  }
`,me=()=>{var B;const n=A(),i=T.useRef(((B=n.state)==null?void 0:B.from)??"/main"),s=d(M),o=d(N),k=d(H),y=d(_),$=d(O),{breakfast:F,lunch:q,dinner:C,snack:R}=s;return e.jsx(re,{children:e.jsxs(ae,{children:[e.jsxs(ce,{children:[e.jsx(oe,{to:i.current,children:e.jsx(de,{src:se,alt:"arrow right"})}),e.jsx(le,{children:"Diary"})]}),e.jsxs(he,{children:[e.jsxs(x,{children:[e.jsxs(m,{children:[e.jsxs(g,{children:[e.jsx(f,{children:e.jsx(u,{src:v,alt:"Breakfast on a plate"})}),e.jsx(j,{children:"Breakfast"})]}),e.jsx(l,{info:F})]}),e.jsx(w,{children:e.jsx(b,{children:p(o,"Breakfast").map((r,a)=>e.jsx(h,{item:r,index:a,img:v},c()))})})]}),e.jsxs(x,{children:[e.jsxs(m,{children:[e.jsxs(g,{children:[e.jsx(f,{children:e.jsx(u,{src:S,alt:"Lunch on a plate"})}),e.jsx(j,{children:"Lunch"})]}),e.jsx(l,{info:q})]}),e.jsx(w,{children:e.jsx(b,{children:p(k,"Lunch").map((r,a)=>e.jsx(h,{item:r,index:a,img:S},c()))})})]}),e.jsxs(x,{children:[e.jsxs(m,{children:[e.jsxs(g,{children:[e.jsx(f,{children:e.jsx(u,{src:D,alt:"Dinner on a plate"})}),e.jsx(j,{children:"Dinner"})]}),e.jsx(l,{info:C})]}),e.jsx(w,{children:e.jsx(b,{children:p(y,"Dinner").map((r,a)=>e.jsx(h,{item:r,index:a,img:D},c()))})})]}),e.jsxs(x,{children:[e.jsxs(m,{children:[e.jsxs(g,{children:[e.jsx(f,{children:e.jsx(u,{src:L,alt:"Snack on a plate"})}),e.jsx(j,{children:"Snack"})]}),e.jsx(l,{info:R})]}),e.jsx(w,{children:e.jsx(b,{children:p($,"Snack").map((r,a)=>e.jsx(h,{item:r,index:a,img:L},c()))})})]})]})]})})};export{me as default};
