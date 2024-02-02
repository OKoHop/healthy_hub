import{t as o,v as t,s as h}from"./index-8658c9f2.js";const l=o`
  padding: 8px 10px;
  border-radius: 12px;
  text-decoration: none;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
  text-align: center;
  transition: ${t.transition.customTrans};
`,u=h.button`
  ${l}
  ${({width:i,textColor:n,backGrColor:r,borderColor:e,widthTab:s,widthDesk:a,backGrColorHov:d,borderColorHov:$,textColorHov:c,widthTabHov:m,widthDeskHov:p})=>o`
    width: ${i};
    color: ${n};
    background-color: ${r};
    margin-right: 16px;
    cursor: pointer;
    padding: 8px 10px;
    border-radius: 12px;
    text-align: center;
    border: 1px solid ${e};

    @media (${t.mq.tabMin}) {
      width: ${s};
    }

    @media (${t.mq.deskMin}) {
      width: ${a};
    }

    &&:hover,
    &&:focus {
      background-color: ${d};
      border: 1px solid ${$};
      color: ${c};
      animation: ${t.transition.customTrans};
    }

    @media (${t.mq.tabMin}) {
      &&:hover,
      &&:focus {
        width: ${m};
      }
    }

    @media (${t.mq.deskMin}) {
      &&:hover,
      &&:focus {
        width: ${p};
      }
    }
  `}
`;export{u as S,l as s};
