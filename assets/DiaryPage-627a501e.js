import{s as t,j as n,c as r,N as M,u as q,r as H,d as m}from"./index-e8452305.js";let A=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((s,i)=>(i&=63,i<36?s+=i.toString(36):i<62?s+=(i-26).toString(36).toUpperCase():i>62?s+="-":s+="_",s),"");const U=t.div`
  display: flex;
  row-gap: 12px;
  column-gap: 20px;
  flex-wrap: wrap;

  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 20px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    margin-right: 60px;
    flex-wrap: nowrap;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    margin-right: 25px;
  }
`,G=t.p`
  width: 100%;

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 164px;
  }
`,T=t.p`
  width: 92px;
`,Z=t.p`
  width: 66px;
`,V=t.span`
  color: ${e=>e.theme.colors.gray};
  font-weight: ${e=>e.theme.fontWeights.medium};
`,f=({info:e})=>{const{carbonohidrates:s,protein:i,fat:a}=e;return n.jsxs(U,{children:[n.jsxs(G,{children:["Carbonohidrates: ",n.jsx(V,{children:s})]}),n.jsxs(T,{children:["Protein: ",n.jsx(V,{children:i})]}),n.jsxs(Z,{children:["Fat: ",n.jsx(V,{children:a})]})]})},$="/healthy_hub/assets/edit-2-cb983d1b.svg",D=t.li`
  display: flex;
  column-gap: 16px;
  color: ${e=>e.theme.colors.white};
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 20px;
`,W=t.span`
  min-width: 16px;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  text-align: center;
`,_=t.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  row-gap: 6px;
`,ee=t.p`
  text-transform: capitalize;
  flex-grow: 1;
`,ne=t.button`
  padding: 0;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  column-gap: 6px;
  color: ${e=>e.theme.colors.gray};
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 20px;
  cursor: pointer;

  @media screen and (${e=>e.theme.mq.tablet}) {
    order: 1;
  }
`,te=t.img`
  width: 16px;
  height: 16px;
`,se=t.div`
  display: flex;
  column-gap: 12px;
  font-size: 12px;
  line-height: 18px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    font-size: ${e=>e.theme.fontSizes.xs};
    line-height: 20px;
  }
`,Q=t.p`
  display: flex;
  width: 70px;
  column-gap: 6px;

  & > span {
    color: ${e=>e.theme.colors.gray};
  }
  
  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 80px;

    & > span {
      display: none;
    }
  }
`,ie=t(Q)`
  width: 62px;
  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 80px;
  }
`,re=t(Q)`
  width: 58px;
  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 80px;
  }
`,oe=t.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: ${e=>e.theme.colors.greenLite};
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
`,j=({item:e,index:s})=>{const{carbohydrate:i,protein:a,fat:x,mealName:h,mealType:l,showButton:p}=e;return n.jsx(n.Fragment,{children:p?n.jsxs(D,{children:[n.jsx(W,{children:s+1}),n.jsx(oe,{onClick:!0,children:"+ Record your meal"})]}):n.jsxs(D,{children:[n.jsx(W,{children:s+1}),l&&n.jsxs(_,{children:[n.jsx(ee,{children:h}),n.jsxs(ne,{type:"button",onClick:!0,children:[n.jsx(te,{src:$,alt:"Edit"}),"Edit"]}),n.jsxs(se,{children:[n.jsxs(Q,{children:[n.jsx("span",{children:"Carb."}),i]}),n.jsxs(ie,{children:[n.jsx("span",{children:"Prot."}),a]}),n.jsxs(re,{children:[n.jsx("span",{children:"Fat."}),x]})]})]})]})})},P=(e,s)=>e.filter(({mealType:i})=>i===s),y=e=>e.stats.info.food,I=r([y],e=>P(e,"Breakfast")),o=(e,s)=>e.reduce((i,a)=>i+=a[s],0),ae=r([I],e=>o(e,"carbohydrate")),ce=r([I],e=>o(e,"protein")),de=r([I],e=>o(e,"fat")),R=r([y],e=>P(e,"Lunch")),xe=r([R],e=>o(e,"carbohydrate")),he=r([R],e=>o(e,"protein")),le=r([R],e=>o(e,"fat")),O=r([y],e=>P(e,"Dinner")),pe=r([O],e=>o(e,"carbohydrate")),me=r([O],e=>o(e,"protein")),ge=r([O],e=>o(e,"fat")),K=r([y],e=>P(e,"Snack")),Ae=r([K],e=>o(e,"carbohydrate")),fe=r([K],e=>o(e,"protein")),je=r([K],e=>o(e,"fat")),ue=r([ae,ce,de,xe,he,le,pe,me,ge,Ae,fe,je],(e,s,i,a,x,h,l,p,E,z,N,g)=>({breakfast:{carbonohidrates:e,protein:s,fat:i},lunch:{carbonohidrates:a,protein:x,fat:h},dinner:{carbonohidrates:l,protein:p,fat:E},snack:{carbonohidrates:z,protein:N,fat:g}})),u=(e,s)=>e.length<=3?[...e,...Array(1).fill({mealType:s,showButton:!0}),...Array(3-e.length).fill({})]:[...e,...Array(1).fill({mealType:s,showButton:!0})],L="data:image/png;base64,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",J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgbSURBVHgBnVdtbFPnFX58fX19/RFsxw6JA3GctFCCIB8gWKHQjGofldZOaKqUarDR/ei6btLgR39NmqC/9qN/Vk3buj8T1Yo2NGnLpkqtRkeBQIFOpZAQPgYhdihOCEn8fX3ta/vunDfYxNigjCOZmOv3vue8z3nOc85rwTItHo97rVbrbvoMzmWN/mi8EM4WSl7+zSiZib52Z8TvlC/Sf08ahjHs8/kSy9nXsgzHYZvNtv/4zdRr2YLpHZvW6C0LXurxIJkrijVT8QJMejYVzyPktaOz2YadXU2HKZC3KZDIEwXAJybHB0djuQPRRB5JvYyX13vEbx7VWl1XNPKQbXbxPamXKKgSEvT3d2dmsaPbjR9sDhxyuVxv/18B8KnThuXT987eC4d8dvS1ObCx3VG3TtfSGP1sGJ3PbEFrx7q630duZRAlVLaF3ZHQCmlXIzSkBs77p1Jl4Xxj0Im9m5obOmcb//wjwESdc4tpolwysJMQ8DpkHL24EOY9M5lMPx6HAJ+cF/ILlEOxwVIzaeNcLgciIpLzMVwa+RvWDLyAtlDPYirMDIq5BLTUXdgcAfhW94r3OCVHvpjHi+s8dUjUIFBxzidf6pwd67qOYrEIp9MJu92O+N1JOFxNCD21AaY+C23mC8xOnCfnC7D71sAT7Km+7yXO7Nnsx8fXkuFsSfqU+VUXQDabPXg2kg17VLlKNrZSqQRN06CqKoiU1efzM5PwNTcjNv4xZm6cQ04roHXNTqykjyfQAT1viHeXBvE8oUrk5Ko6WJMChv7oaGpyKlHAz55bWWU5b5DP58Wpl1py7g6mb34Gt9OOhbk5BEKb0P50XXpRKBREuvhTsQ+vJBHyKegJyF2cCoEAR3R6MsO1W1NijZwXDR0lbQZOuxWJeBKdfS82dM6mKApIC0QKKxbyKkI3ZFk+IFLA+RiZTL+2o7uWdAz7w87TsxHEro4gMx/F3TtfYSIyDY+/Hdl8BsPnf4/4wu26IDh1jETFeqmiSEVxYiK7j31LdPrd0bhRVTXch/5hM7QkMol7kK0lFAiZdDYHB/FFrDdyiKVjMLNpNDJJkmpQ2LO5GSzj7JtTMCgk1GevLmC2qzYrpseO49onfxTPFm5fgaSoKBY0cfo8xWi1Shj7/N+InfsnNrRshuppRS4xja++/AhGXqvux+TlPSvGxBslSbdYLIPyvFbsZwl9fgn8jMDU6b+gWCqja/v3xDPFHcB/z3+IYFcnbFSG/qYVVJoarp8/hsz4NVJF4FLuD9j63a0kzRY0d2+hdc6GiDDPWBu4qckUSTi6UKgh373rZ7CiYyNa126BlpzDxJm/wukLYn70HORiDqrPj+mJ6xg9dhbxySjMYhllgljihnR1NbYNDcHpCeBx9vJ6L5HRCMuyZPH2LpHaErG8kImjc+CbSJHY8HfOXjGbxML4Fdy5MAq7w4580YSS1onpwHTGgJ3SoRNilz85gW17f17nsFwu1z3LEA/qeoFBjkzKEpPONMtEuCxsigPJmTuYzxqYiWvQsjpsZgketw0txB2nbKWykuBXbSjoBbz7o1dx5fi/HjgnmZ4eO4Ybp/5cF4TkVuQEc6BiqrcVFmoks5Fx2FU3FqKX0RRcCz0WA6tkwOOAqiyyX9MNFIhcKaNIvDGRLVI7zhepGlL404HXMXvrunB+89QR2ncVPK3dVT/cJSlzCTnks0USuRJPOOgkhWLr3P6KEBG2Z17YJ8g0MnZOwOi475xNoUqxUIm1eRSUK6VOP+fLiyWnxedw49ZpBAe+A+1eBN5wb/VdCy3pDaoRyadKl9gxiVHDfFWYPLj/V5CsFswlddyeXVxrsB/JglDQBa1cEhyIUw+gqhekTE1fRrDv21SGMlXFJijq4l6MeDRhgEc45sCJXup+LI/Vk92X0KXmXTOA1lAYLpcCl1NBjqDWKQV2iWMw0R5QRH0zH2yEikpl2vvSG1jRshqKy1fTDxjtkFc0tpMS1fywS7EKHlS4wMq1FAUtv3jiVb1fEw4dCm1GrPc4bWC0DUqmjdJhSiVRMWlZxeodu2oOsDQAkeZmOx9yWObpNZ1Ov0/SuP8DGhq4GwroSb14BmAtjyWv0ilpA1cAKc1AOkddjoJ02Oik1BGdxP5kJgPT7obs8WPw1R/iW0PfF/twQ+P5YanxvPjeK52H3W53QpQhyeSvuUuJ3NxPBaPAQXAjeXrlVvxn4jT8W3ehZHViQ3cA7X4XndgKPWfgbkFFKpNHcN16vHX4KHa//iacKzxC/ytkrhjPidz4eGIWfvgf7ssbg+q7/P3Ihfka2PjDSAw9ux+rwj0YfPMXuHBtlk6sI01CNDOXwdTkFNp6n8WP3/kN2jpC1ZOzkd4/cE5E5wl7z4CvOq5Xf+XWSJPwlzyMsixXUlExJiWjwgH9451f0uiVgkJVkUun0LZ2Pb7xxltiHfcR5g/1+xrnjO5vCfqh/uZIX6e/q/L8kUMpTy17N/lrgqi0af7LgXCH46AqKWvkuOL8g0cMpXX3Ah6dJ+bzf+cg+MWfbl9ZFagnMbrYCOgbOW8YAFsFibPRbJgHld6HpuTlOuZ8j03n8JPnWiJNVrPhxeSxd0Mqz0NHLsRpXkyLa1YyV6aRShWzYyPjHp+iq9mpW2l46EISpsraQOSmVB161GV1WZdTyvehM1FtHzeQKR7f9KIYLj2OB+LCSsrNinoLXIqU2PVU0/tc3k98OW0QiJjhiGhfX9DLfWMxLSxbJXHBcJPDDp8SaXHZLhJBT7K6Lvd6/j9fJx76zWLtnAAAAABJRU5ErkJggg==",v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhLSURBVHgBpVdrbFP3Ff/5+tr3+nntOBASktgB2gIdIQyNVwm0Y1I3lQkqrUNambpO6zRt0kq1D5MmTdAvqNqXjUnb+m2tBC1MmjYNBFRbYRAQ1VZGmjDKo4ntkDghD/teP659/dw5N9jYeUwpPdJVfP/5///nd875nce1YImSSCR8Vqt1Pz27pzOFnmgiH8rkSz7+X6FUUTe2OSMBp9hPr5cKhcJf/X6/upR7LUtQHLLZbK9f+Cz5vUy+4hsc1+mUBXvXKdCyRXOPZpShZksYSRjo9EkINtnQ2+V5h4C8SUAijwWALSbFhwdi2UNR1aDLCzi4ucn8nyJbFzyj5UoEqgSV/v7+6iR2rnLju5ubj7hcrjc/FwC2OlWwXHz72lSo0y/hm+uVRZX+PxmMZfEJeWx7yB3p9ArPLeQNywLKe0aS5b+cv50MbWh1YBdZ8UXkynDaBPH1tUpkdUB60e129y8KgC0n5RdZObt7rtWVSgXFYhHlcplo8Ogo/y6VSuZfURRBRG04xyE5cX3GBDHXE0L9RlZ+qj8+TzkrNgzDVE68QCkTR6z/A9jtdvPhNVmWIUmSCSSXyzUA8NFdL28O4PxtLZQpCReZX/MAZDKZw9ciGXK7s0E5X8jK+XJWVNA1ZOIxWO1ygxJDVzE28KEJiMHoum6erQexq8vD5OSsOlzzXtX1pwaS4SARrrcu5nwBW83KU5NheJZ3YSZ8A8V8Dq6WNXD7lqFcMCDYJEwNXYfT3wZXUyuMjArJ5UM+nzfDUR+SM7c008BtHVIXh0LkRUZ0JZymNAs0WkWWO51ODPe9B9g9KBkpPLj1D2Qm7sDXuhrlCluewbK1u1G2SJAVSsOx27h//SyCzxyAJ7DSDIcgCDXOsIHHr8exs8t1iF4PWTgeH43mEoosoptYXxU+yK6cvHMV2sQw9LGPkbh3AV6vhELOILJVUIJseiNPYZECT8HftRm5vAMVmxPrn3+NvOCvGcJerMrRD8exPehRdwalLpGs3z8QS2Dvel+D6xl1KtKH8Uu/gpCNoaBF4UEOFt2OcjqPNPHMt8KNUjoND9FBFmPIhyeQUycgr9xB9fkA8WXWasHmms2grIbw399Cz6XjGPna+z7bmt79HILdI2oePsdsnNjNUzf/Bj16FRP9ZyFWppGmqu4gaji8HrKmBKuYRyC4gvamwVwUpACS4yMoUWX2NLthjF7AzWNPI18AihYfNn7/fWTSBQye/CmidyLIEvjRynFYXti1W5zRiz2dPrtJjHxiCP/9889gxEfhpJA4lGXQRhNQmkuwyWSt2AIx/xlEbzP0lAFrOQ3JF4Q+c59AAf7OJ6EnJkxDRNovENCMquLGb78BPQk80GY97OAE8rWDm5owMK6HFIeI7NQ93PvTj5DT6AKryU1YbVYqOk7TsorcifTMkAlEEO2kPAG7tw0GucdqLcPR1AZ1chqVQhIixbtSsSBHoWLF/AhEYtCaJFGxslmwqWcz95eQKAoWX5A8MHH9PdoYh0QpQ4uPMiFXJk54UE7chqJQHMsCKsmYCUJ7MA2HI49s3o5CQoWR1cH9sZg3KDsME7jNqWDljpfQvO0gnm1/AiP/PoP43T5o7SGkqZ1bzg2OVxgZp0fs8q8x3X+qpjybzGLy7hCKldl3SXxYPAif8BCjUZxdLxUb34s2BVMzGvxP9uKFX54kd8oNmdBHaW+Gym0X1VEtb6ZA26430LL1B0jFblFIwkhEhyEqA2b1y06P0BN9pLA8exFjEuwKnG1BeDs3QOnoxsqdB03Ljcxs0CX6TbMB6mUgpmP9CqcqdvptkXOfqj3ccs24Sx44V26Cr2srWrc0nEFycgTXjh/F3aun0bqmG/sOnzQVLSaSS2lIbS7lVeEE7W6VI6JfFj6htx4eJqo9oL7TVSVjjONm8o9Q9q3BV/a9AYe9CcOp0yipNngdHeaecpnqBKy4He5HInMX+3a8BcnmmXcn64qqBfAIxx78Z3er85V6ZVy72WX1iKMzl/Gv4T/AJTdBpkqnZcfocgkepxvT6gwkoQVqogwbESRJib77Sz+uKedKyG26Kjy+KbJJoktmKb4SNcLXoinfL/a01jbNLZ9GMYkx7QPIEtvoxcd3z2Jw6DIm4+OUOTZkizoC3hZsWfsqdj39Qzgkb+1staxXpUrAbe2SX+TpNZVKvXvrgf46Dw6+h2Fg6+sPSqIXqwIvUcppOHpiKzR9hppRGc3e5Whv2YANXc9D8fhRLqUwMnMeT7V92zzHbZkbWr3wcPL2t4Lv0HSk1trxR/eNcJRK8sEvN9U2MnH44R7PMjR1DqdvvErAKrBaRPgVhXpCnMIgU2qKSFLatrh6seWJ17B6xZ6a6+vbcR+NaKznwAaP2Y7NQPAPao/HeKymKbiBC/ywFSxeuQNtynbqDy5qPgpSWgrJRAWTY03QxkNwVb4KWWhHPDFmem+e8nDKfF7e5K+N6zVqMhdoEr7Bk/BPnlk+bx7kC5nJzIt46r65xu9+d3vDPiYvz4zstbnM/x2N6gd6miIbg4Gu6voiQ6kW4uFkLojqhMStlS1jRVUgvMYtnK2em8as/PgiQ+lCY3moOpzS103DiPY4wiE986lqWk7KXyTli4/lC4HYu86H7jYHPq+wYo43zxo/37Mi4rFWlvZhUi+UnkdO/CdB82IK36Hs8NOM0NFkr6XqXOE05gs51iy9qzzYGXIdo7AdWexjdUkfpxTvI1ej+it9wykznuYAQxMUt3EWTquB8SwBE80Kt65FVp9b7XmXFP/msT9OFwDCH6v7iXjPxnPljYMxPSRaBbOLuu2C2uG3R5a5bP1E1Ev0LPnz/H/aERO5LsYgSQAAAABJRU5ErkJggg==",Y="data:image/png;base64,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",be="/healthy_hub/assets/arrow-right-3924980b.svg",we=t.main`
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
`,ke=t.div`
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
`,Se=t(M)`
  display: flex;
  @media screen and (min-width: 320px) {
    margin-right: 8px;
  }
  @media screen and (min-width: 834px) {
    margin-right: 12px;
  }
`,Fe=t.img`
  @media screen and (min-width: 320px) {
    width: 16px;
  }
  @media screen and (min-width: 834px) {
    width: 24px;
  }
`,Xe=t.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    margin-bottom: 24px;

  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }
`,Be=t.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,Ce=t.ul`
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
`,b=t.li`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 834px) {
    gap: 6px;
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 20px) / 2);
  }
`,w=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`,k=t.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0;
  }

`,S=t.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`,F=t.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`,X=t.h2`
  font-size: 18px;
  line-height: 26px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,B=t.ul`
  background-color: #0f0f0f;
  border-radius: 12px;
  height: 232px;
  padding: 16px 12px;

  @media screen and (min-width: 834px) {
    height: 240px;
    padding: 32px 14px;
  }
`,C=t.ul`
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
`,ye=()=>{var g;const e=q(),s=H.useRef(((g=e.state)==null?void 0:g.from)??"/main"),i=m(ue),a=m(I),x=m(R),h=m(O),l=m(K),{breakfast:p,lunch:E,dinner:z,snack:N}=i;return n.jsx(we,{children:n.jsxs(ke,{children:[n.jsxs(Xe,{children:[n.jsx(Se,{to:s.current,children:n.jsx(Fe,{src:be,alt:"arrow right"})}),n.jsx(Be,{children:"Diary"})]}),n.jsxs(Ce,{children:[n.jsxs(b,{children:[n.jsxs(w,{children:[n.jsxs(k,{children:[n.jsx(S,{children:n.jsx(F,{src:L,alt:"Breakfast on a plate"})}),n.jsx(X,{children:"Breakfast"})]}),n.jsx(f,{info:p})]}),n.jsx(B,{children:n.jsx(C,{children:u(a,"Breakfast").map((c,d)=>n.jsx(j,{item:c,index:d,img:L},A()))})})]}),n.jsxs(b,{children:[n.jsxs(w,{children:[n.jsxs(k,{children:[n.jsx(S,{children:n.jsx(F,{src:v,alt:"Lunch on a plate"})}),n.jsx(X,{children:"Lunch"})]}),n.jsx(f,{info:E})]}),n.jsx(B,{children:n.jsx(C,{children:u(x,"Lunch").map((c,d)=>n.jsx(j,{item:c,index:d,img:v},A()))})})]}),n.jsxs(b,{children:[n.jsxs(w,{children:[n.jsxs(k,{children:[n.jsx(S,{children:n.jsx(F,{src:J,alt:"Dinner on a plate"})}),n.jsx(X,{children:"Dinner"})]}),n.jsx(f,{info:z})]}),n.jsx(B,{children:n.jsx(C,{children:u(h,"Dinner").map((c,d)=>n.jsx(j,{item:c,index:d,img:J},A()))})})]}),n.jsxs(b,{children:[n.jsxs(w,{children:[n.jsxs(k,{children:[n.jsx(S,{children:n.jsx(F,{src:Y,alt:"Snack on a plate"})}),n.jsx(X,{children:"Snack"})]}),n.jsx(f,{info:N})]}),n.jsx(B,{children:n.jsx(C,{children:u(l,"Snack").map((c,d)=>n.jsx(j,{item:c,index:d,img:Y},A()))})})]})]})]})})};export{ye as default};
