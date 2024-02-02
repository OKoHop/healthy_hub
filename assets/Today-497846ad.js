import{s as f,u as Oe,j as c,a as _e,N as aa,e as t,m as ra,r as F,i as xt,M as jt,b as Te,L as dt,c as ia,d as na,_ as At,P as ge,f as sa,g as zt,h as Lt,k as Rt,l as oa}from"./index-8658c9f2.js";import{C as It,A as Bt,p as Dt,a as Pt,D as Wt}from"./index-a2d2ef36.js";import{s as je,R as la,t as De,b as ca,c as Re,l as da,d as ma,a as ua}from"./calculateTotalIngridients-5cc67300.js";import{s as pa}from"./Buttons.styled-0712eac9.js";import{g as fa,r as ha,R as ga}from"./randomizeFood-b8a99e30.js";const ba=f.div`
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
`,yt=f.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #b6b6b6;
`,vt=f.p`
  font-weight: 600;
  font-size: 34px;
  line-height: 1.12;
  display: flex;
  align-items: center;
  gap: 4px;
`,wt=f.div`
  display: flex;
  gap: 20px;
`,xa=f.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`,mt=f.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 1.33;
  margin-bottom: 6px;

  @media (max-width: 833px) {
    font-size: 18px;
  }
`,ya=f.div`
  @media (max-width: 833px) {
    width: 300px;
  }

  @media (min-width: 834px) {
    width: 380px;
  }

  @media (min-width: 1440px) {
    width: 328px;
  }
`,va=f.svg`
  width: 80px;
  height: 80px;
  stroke: #45ffbc;
  fill: #0f0f0f;
`,wa=f.svg`
  width: 80px;
  height: 80px;
  stroke: #b6c3ff;
  fill: #0f0f0f;
`,xe="/healthy_hub/assets/today-svg-sprite-29233aff.svg",Ea=()=>{const{user:e}=Oe();return c.jsxs(ya,{children:[c.jsx(mt,{children:"Daily goal"}),c.jsxs(ba,{children:[c.jsxs(wt,{children:[c.jsx(va,{children:c.jsx("use",{href:`${xe}#bubble`})}),c.jsxs("div",{children:[c.jsx(yt,{children:"Calories"}),c.jsxs(vt,{children:[" ",Math.round(e.bmr)]})]})]}),c.jsxs(wt,{children:[c.jsx(wa,{children:c.jsx("use",{href:`${xe}#water`})}),c.jsxs("div",{children:[c.jsx(yt,{children:"Water"}),c.jsxs(vt,{children:[Math.round(e.water)," ",c.jsx(xa,{children:"ml"})]})]})]})]})]})};It.register(Bt,Dt,Pt);const ka=()=>{const{user:e}=Oe(),i=e==null?void 0:e.bmr,a=_e(je),r=(a==null?void 0:a.totalCalories)||0,o={datasets:[{data:[r,((p,m)=>!m&&!p?0:m-p)(r,i)],backgroundColor:["#45FFBC","#292928"],borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},s={id:"textCenter",beforeDatasetsDraw(p){const{ctx:m,data:$}=p,y=p.getDatasetMeta(0).data[0].x,M=p.getDatasetMeta(0).data[0].y;m.save(),m.font="500 32px sans-serif",m.fillStyle="#ffffff",m.textAlign="center",m.textBaseline="middle",m.fillText($.datasets[0].data[0],y,M-10),m.font="400 14px sans-serif",m.fillStyle="#B6B6B6",m.fillText("calories",y,M+20)}},d={id:"backgroundCircle",beforeDatasetsDraw(p){const{ctx:m}=p;m.save();const $=p.getDatasetMeta(0).data[0].x,y=p.getDatasetMeta(0).data[0].y,M=p.getDatasetMeta(0).data[0].innerRadius,A=p.getDatasetMeta(0).data[0].outerRadius,v=A-M,w=Math.PI/180;m.beginPath(),m.strokeStyle="#292928",m.lineWidth=v,m.arc($,y,A-v/2,0,w*360,!1),m.stroke()}};return c.jsx(Wt,{data:o,plugins:[s,d]})},Ca=f.div`
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
`,$a=f.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Na=f.div`
  width: 168px;
  height: 168px;
`,Sa=f.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`,Ma=f.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Ta=f.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`,ja=f.div`
  display: flex;
  gap: 12px;
  p{
    font-size: 14px;
  line-height: 1.43;
  }
  span{
    color: #b6b6b6;
  }
`;It.register(Bt,Dt,Pt);const ut=(e,i,a,r,n)=>()=>{const{user:s}=Oe(),d=s.nutrients[i],p=_e(a),m=p?p[r]:null,$=(w,x)=>!isNaN(w)&&!isNaN(x)?Math.max(w-x,0):0,y=(w,x)=>isNaN(Math.round(x/w*100))?0:Math.round(x/w*100),M=w=>100-w,A={datasets:[{data:[y(d,m),M(y(d,m))],backgroundColor:n,borderWidth:0,borderRadius:14,circumference:360,cutout:"80%"}]},v={id:"textCenter",beforeDatasetsDraw(w){const{ctx:x,data:P}=w,N=w.getDatasetMeta(0).data[0].x,_=w.getDatasetMeta(0).data[0].y,W=P.datasets[0].data[0];x.save(),x.font="400 14px sans-serif",x.fillStyle="#B6B6B6",x.textAlign="center",x.textBaseline="middle",x.fillText(`${W}%`,N,_)}};return c.jsxs(Sa,{children:[c.jsx(Wt,{data:A,plugins:[v]}),c.jsxs(Ma,{children:[c.jsx(Ta,{children:e}),c.jsxs(ja,{children:[c.jsxs("p",{children:["Goal: ",c.jsx("span",{children:d})]}),c.jsxs("p",{children:["left: ",c.jsx("span",{children:$(d,m)})]})]})]})]})},Aa=ut("Carbohydrates","carbonohidrates",je,"totalCarbohidrates",["#FFC4F7","#292928"]),za=ut("Protein","protein",je,"totalProtein",["#B6B6B6","#292928"]),La=ut("Fat","fat",je,"totalFat",["#FFF3B7","#292928"]),Ra=()=>c.jsxs("div",{children:[c.jsx(mt,{children:"Food"}),c.jsxs(Ca,{children:[c.jsx(Na,{children:c.jsx(ka,{})}),c.jsxs($a,{children:[c.jsx(Aa,{}),c.jsx(za,{}),c.jsx(La,{})]})]})]}),Ia=f.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`,Ba=f.div`
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
`,Da=f.svg`
  width: 16px;
  height: 16px;
  stroke: #b6b6b6;
  transition: ${e=>e.theme.transition.customTrans};
`,Pa=f.div`
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
`,Wa=f.h1`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.25;

  @media (max-width: 834px) {
    font-size: 24px;
  }
`,Fa=f(aa)`
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
`,Oa=f.div`
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
`,_a=f.section`
  position: relative;
  margin-top: 16px;

  @media (min-width: 834px) {
    margin-top: 24px;
  }

  @media (min-width: 1440px) {
    margin-top: 20px;
  }
`,Ga=f.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 834px) {
    flex-basis: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;var Ft={exports:{}},B={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pt=Symbol.for("react.element"),ft=Symbol.for("react.portal"),Ge=Symbol.for("react.fragment"),Ye=Symbol.for("react.strict_mode"),He=Symbol.for("react.profiler"),Ve=Symbol.for("react.provider"),Xe=Symbol.for("react.context"),Ya=Symbol.for("react.server_context"),qe=Symbol.for("react.forward_ref"),Ue=Symbol.for("react.suspense"),Ze=Symbol.for("react.suspense_list"),Qe=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),Ha=Symbol.for("react.offscreen"),Ot;Ot=Symbol.for("react.module.reference");function te(e){if(typeof e=="object"&&e!==null){var i=e.$$typeof;switch(i){case pt:switch(e=e.type,e){case Ge:case He:case Ye:case Ue:case Ze:return e;default:switch(e=e&&e.$$typeof,e){case Ya:case Xe:case qe:case Ke:case Qe:case Ve:return e;default:return i}}case ft:return i}}}B.ContextConsumer=Xe;B.ContextProvider=Ve;B.Element=pt;B.ForwardRef=qe;B.Fragment=Ge;B.Lazy=Ke;B.Memo=Qe;B.Portal=ft;B.Profiler=He;B.StrictMode=Ye;B.Suspense=Ue;B.SuspenseList=Ze;B.isAsyncMode=function(){return!1};B.isConcurrentMode=function(){return!1};B.isContextConsumer=function(e){return te(e)===Xe};B.isContextProvider=function(e){return te(e)===Ve};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===pt};B.isForwardRef=function(e){return te(e)===qe};B.isFragment=function(e){return te(e)===Ge};B.isLazy=function(e){return te(e)===Ke};B.isMemo=function(e){return te(e)===Qe};B.isPortal=function(e){return te(e)===ft};B.isProfiler=function(e){return te(e)===He};B.isStrictMode=function(e){return te(e)===Ye};B.isSuspense=function(e){return te(e)===Ue};B.isSuspenseList=function(e){return te(e)===Ze};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ge||e===He||e===Ye||e===Ue||e===Ze||e===Ha||typeof e=="object"&&e!==null&&(e.$$typeof===Ke||e.$$typeof===Qe||e.$$typeof===Ve||e.$$typeof===Xe||e.$$typeof===qe||e.$$typeof===Ot||e.getModuleId!==void 0)};B.typeOf=te;Ft.exports=B;var _t=Ft.exports;function Va(e){function i(b,h,g,k,l){for(var z=0,u=0,O=0,L=0,I,C,V=0,Q=0,j,U=j=I=0,R=0,X=0,Ce=0,q=0,Le=g.length,$e=Le-1,ie,E="",Y="",Je="",et="",me;R<Le;){if(C=g.charCodeAt(R),R===$e&&u+L+O+z!==0&&(u!==0&&(C=u===47?10:47),L=O=z=0,Le++,$e++),u+L+O+z===0){if(R===$e&&(0<X&&(E=E.replace(M,"")),0<E.trim().length)){switch(C){case 32:case 9:case 59:case 13:case 10:break;default:E+=g.charAt(R)}C=59}switch(C){case 123:for(E=E.trim(),I=E.charCodeAt(0),j=1,q=++R;R<Le;){switch(C=g.charCodeAt(R)){case 123:j++;break;case 125:j--;break;case 47:switch(C=g.charCodeAt(R+1)){case 42:case 47:e:{for(U=R+1;U<$e;++U)switch(g.charCodeAt(U)){case 47:if(C===42&&g.charCodeAt(U-1)===42&&R+2!==U){R=U+1;break e}break;case 10:if(C===47){R=U+1;break e}}R=U}}break;case 91:C++;case 40:C++;case 34:case 39:for(;R++<$e&&g.charCodeAt(R)!==C;);}if(j===0)break;R++}switch(j=g.substring(q,R),I===0&&(I=(E=E.replace(y,"").trim()).charCodeAt(0)),I){case 64:switch(0<X&&(E=E.replace(M,"")),C=E.charCodeAt(1),C){case 100:case 109:case 115:case 45:X=h;break;default:X=we}if(j=i(h,X,j,C,l+1),q=j.length,0<ee&&(X=a(we,E,Ce),me=d(3,j,X,h,ae,K,q,C,l,k),E=X.join(""),me!==void 0&&(q=(j=me.trim()).length)===0&&(C=0,j="")),0<q)switch(C){case 115:E=E.replace(ce,s);case 100:case 109:case 45:j=E+"{"+j+"}";break;case 107:E=E.replace(N,"$1 $2"),j=E+"{"+j+"}",j=Z===1||Z===2&&o("@"+j,3)?"@-webkit-"+j+"@"+j:"@"+j;break;default:j=E+j,k===112&&(j=(Y+=j,""))}else j="";break;default:j=i(h,a(h,E,Ce),j,k,l+1)}Je+=j,j=Ce=X=U=I=0,E="",C=g.charCodeAt(++R);break;case 125:case 59:if(E=(0<X?E.replace(M,""):E).trim(),1<(q=E.length))switch(U===0&&(I=E.charCodeAt(0),I===45||96<I&&123>I)&&(q=(E=E.replace(" ",":")).length),0<ee&&(me=d(1,E,h,b,ae,K,Y.length,k,l,k))!==void 0&&(q=(E=me.trim()).length)===0&&(E="\0\0"),I=E.charCodeAt(0),C=E.charCodeAt(1),I){case 0:break;case 64:if(C===105||C===99){et+=E+g.charAt(R);break}default:E.charCodeAt(q-1)!==58&&(Y+=n(E,I,C,E.charCodeAt(2)))}Ce=X=U=I=0,E="",C=g.charCodeAt(++R)}}switch(C){case 13:case 10:u===47?u=0:1+I===0&&k!==107&&0<E.length&&(X=1,E+="\0"),0<ee*he&&d(0,E,h,b,ae,K,Y.length,k,l,k),K=1,ae++;break;case 59:case 125:if(u+L+O+z===0){K++;break}default:switch(K++,ie=g.charAt(R),C){case 9:case 32:if(L+z+u===0)switch(V){case 44:case 58:case 9:case 32:ie="";break;default:C!==32&&(ie=" ")}break;case 0:ie="\\0";break;case 12:ie="\\f";break;case 11:ie="\\v";break;case 38:L+u+z===0&&(X=Ce=1,ie="\f"+ie);break;case 108:if(L+u+z+oe===0&&0<U)switch(R-U){case 2:V===112&&g.charCodeAt(R-3)===58&&(oe=V);case 8:Q===111&&(oe=Q)}break;case 58:L+u+z===0&&(U=R);break;case 44:u+O+L+z===0&&(X=1,ie+="\r");break;case 34:case 39:u===0&&(L=L===C?0:L===0?C:L);break;case 91:L+u+O===0&&z++;break;case 93:L+u+O===0&&z--;break;case 41:L+u+z===0&&O--;break;case 40:if(L+u+z===0){if(I===0)switch(2*V+3*Q){case 533:break;default:I=1}O++}break;case 64:u+O+L+z+U+j===0&&(j=1);break;case 42:case 47:if(!(0<L+z+O))switch(u){case 0:switch(2*C+3*g.charCodeAt(R+1)){case 235:u=47;break;case 220:q=R,u=42}break;case 42:C===47&&V===42&&q+2!==R&&(g.charCodeAt(q+2)===33&&(Y+=g.substring(q,R+1)),ie="",u=0)}}u===0&&(E+=ie)}Q=V,V=C,R++}if(q=Y.length,0<q){if(X=h,0<ee&&(me=d(2,Y,X,b,ae,K,q,k,l,k),me!==void 0&&(Y=me).length===0))return et+Y+Je;if(Y=X.join(",")+"{"+Y+"}",Z*oe!==0){switch(Z!==2||o(Y,2)||(oe=0),oe){case 111:Y=Y.replace(W,":-moz-$1")+Y;break;case 112:Y=Y.replace(_,"::-webkit-input-$1")+Y.replace(_,"::-moz-$1")+Y.replace(_,":-ms-input-$1")+Y}oe=0}}return et+Y+Je}function a(b,h,g){var k=h.trim().split(x);h=k;var l=k.length,z=b.length;switch(z){case 0:case 1:var u=0;for(b=z===0?"":b[0]+" ";u<l;++u)h[u]=r(b,h[u],g).trim();break;default:var O=u=0;for(h=[];u<l;++u)for(var L=0;L<z;++L)h[O++]=r(b[L]+" ",k[u],g).trim()}return h}function r(b,h,g){var k=h.charCodeAt(0);switch(33>k&&(k=(h=h.trim()).charCodeAt(0)),k){case 38:return h.replace(P,"$1"+b.trim());case 58:return b.trim()+h.replace(P,"$1"+b.trim());default:if(0<1*g&&0<h.indexOf("\f"))return h.replace(P,(b.charCodeAt(0)===58?"":"$1")+b.trim())}return b+h}function n(b,h,g,k){var l=b+";",z=2*h+3*g+4*k;if(z===944){b=l.indexOf(":",9)+1;var u=l.substring(b,l.length-1).trim();return u=l.substring(0,b).trim()+u+";",Z===1||Z===2&&o(u,1)?"-webkit-"+u+u:u}if(Z===0||Z===2&&!o(l,1))return l;switch(z){case 1015:return l.charCodeAt(10)===97?"-webkit-"+l+l:l;case 951:return l.charCodeAt(3)===116?"-webkit-"+l+l:l;case 963:return l.charCodeAt(5)===110?"-webkit-"+l+l:l;case 1009:if(l.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+l+l;case 978:return"-webkit-"+l+"-moz-"+l+l;case 1019:case 983:return"-webkit-"+l+"-moz-"+l+"-ms-"+l+l;case 883:if(l.charCodeAt(8)===45)return"-webkit-"+l+l;if(0<l.indexOf("image-set(",11))return l.replace(fe,"$1-webkit-$2")+l;break;case 932:if(l.charCodeAt(4)===45)switch(l.charCodeAt(5)){case 103:return"-webkit-box-"+l.replace("-grow","")+"-webkit-"+l+"-ms-"+l.replace("grow","positive")+l;case 115:return"-webkit-"+l+"-ms-"+l.replace("shrink","negative")+l;case 98:return"-webkit-"+l+"-ms-"+l.replace("basis","preferred-size")+l}return"-webkit-"+l+"-ms-"+l+l;case 964:return"-webkit-"+l+"-ms-flex-"+l+l;case 1023:if(l.charCodeAt(8)!==99)break;return u=l.substring(l.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+u+"-webkit-"+l+"-ms-flex-pack"+u+l;case 1005:return v.test(l)?l.replace(A,":-webkit-")+l.replace(A,":-moz-")+l:l;case 1e3:switch(u=l.substring(13).trim(),h=u.indexOf("-")+1,u.charCodeAt(0)+u.charCodeAt(h)){case 226:u=l.replace(G,"tb");break;case 232:u=l.replace(G,"tb-rl");break;case 220:u=l.replace(G,"lr");break;default:return l}return"-webkit-"+l+"-ms-"+u+l;case 1017:if(l.indexOf("sticky",9)===-1)break;case 975:switch(h=(l=b).length-10,u=(l.charCodeAt(h)===33?l.substring(0,h):l).substring(b.indexOf(":",7)+1).trim(),z=u.charCodeAt(0)+(u.charCodeAt(7)|0)){case 203:if(111>u.charCodeAt(8))break;case 115:l=l.replace(u,"-webkit-"+u)+";"+l;break;case 207:case 102:l=l.replace(u,"-webkit-"+(102<z?"inline-":"")+"box")+";"+l.replace(u,"-webkit-"+u)+";"+l.replace(u,"-ms-"+u+"box")+";"+l}return l+";";case 938:if(l.charCodeAt(5)===45)switch(l.charCodeAt(6)){case 105:return u=l.replace("-items",""),"-webkit-"+l+"-webkit-box-"+u+"-ms-flex-"+u+l;case 115:return"-webkit-"+l+"-ms-flex-item-"+l.replace(J,"")+l;default:return"-webkit-"+l+"-ms-flex-line-pack"+l.replace("align-content","").replace(J,"")+l}break;case 973:case 989:if(l.charCodeAt(3)!==45||l.charCodeAt(4)===122)break;case 931:case 953:if(de.test(b)===!0)return(u=b.substring(b.indexOf(":")+1)).charCodeAt(0)===115?n(b.replace("stretch","fill-available"),h,g,k).replace(":fill-available",":stretch"):l.replace(u,"-webkit-"+u)+l.replace(u,"-moz-"+u.replace("fill-",""))+l;break;case 962:if(l="-webkit-"+l+(l.charCodeAt(5)===102?"-ms-"+l:"")+l,g+k===211&&l.charCodeAt(13)===105&&0<l.indexOf("transform",10))return l.substring(0,l.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+l}return l}function o(b,h){var g=b.indexOf(h===1?":":"{"),k=b.substring(0,h!==3?g:10);return g=b.substring(g+1,b.length-1),Ee(h!==2?k:k.replace(se,"$1"),g,h)}function s(b,h){var g=n(h,h.charCodeAt(0),h.charCodeAt(1),h.charCodeAt(2));return g!==h+";"?g.replace(pe," or ($1)").substring(4):"("+h+")"}function d(b,h,g,k,l,z,u,O,L,I){for(var C=0,V=h,Q;C<ee;++C)switch(Q=re[C].call($,b,V,g,k,l,z,u,O,L,I)){case void 0:case!1:case!0:case null:break;default:V=Q}if(V!==h)return V}function p(b){switch(b){case void 0:case null:ee=re.length=0;break;default:if(typeof b=="function")re[ee++]=b;else if(typeof b=="object")for(var h=0,g=b.length;h<g;++h)p(b[h]);else he=!!b|0}return p}function m(b){return b=b.prefix,b!==void 0&&(Ee=null,b?typeof b!="function"?Z=1:(Z=2,Ee=b):Z=0),m}function $(b,h){var g=b;if(33>g.charCodeAt(0)&&(g=g.trim()),ke=g,g=[ke],0<ee){var k=d(-1,h,g,g,ae,K,0,0,0,0);k!==void 0&&typeof k=="string"&&(h=k)}var l=i(we,g,h,0,0);return 0<ee&&(k=d(-2,l,g,g,ae,K,l.length,0,0,0),k!==void 0&&(l=k)),ke="",oe=0,K=ae=1,l}var y=/^\0+/g,M=/[\0\r\f]/g,A=/: */g,v=/zoo|gra/,w=/([,: ])(transform)/g,x=/,\r+?/g,P=/([\t\r\n ])*\f?&/g,N=/@(k\w+)\s*(\S*)\s*/,_=/::(place)/g,W=/:(read-only)/g,G=/[svh]\w+-[tblr]{2}/,ce=/\(\s*(.*)\s*\)/g,pe=/([\s\S]*?);/g,J=/-self|flex-/g,se=/[^]*?(:[rp][el]a[\w-]+)[^]*/,de=/stretch|:\s*\w+\-(?:conte|avail)/,fe=/([^-])(image-set\()/,K=1,ae=1,oe=0,Z=1,we=[],re=[],ee=0,Ee=null,he=0,ke="";return $.use=p,$.set=m,e!==void 0&&m(e),$}var Xa={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function le(){return(le=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var Et=function(e,i){for(var a=[e[0]],r=0,n=i.length;r<n;r+=1)a.push(i[r],e[r+1]);return a},nt=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!_t.typeOf(e)},We=Object.freeze([]),ue=Object.freeze({});function Me(e){return typeof e=="function"}function kt(e){return e.displayName||e.name||"Component"}function ht(e){return e&&typeof e.styledComponentId=="string"}var ye=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",gt=typeof window<"u"&&"HTMLElement"in window,qa=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Ae(e){for(var i=arguments.length,a=new Array(i>1?i-1:0),r=1;r<i;r++)a[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(a.length>0?" Args: "+a.join(", "):""))}var Ua=function(){function e(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}var i=e.prototype;return i.indexOfGroup=function(a){for(var r=0,n=0;n<a;n++)r+=this.groupSizes[n];return r},i.insertRules=function(a,r){if(a>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,s=o;a>=s;)(s<<=1)<0&&Ae(16,""+a);this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var d=o;d<s;d++)this.groupSizes[d]=0}for(var p=this.indexOfGroup(a+1),m=0,$=r.length;m<$;m++)this.tag.insertRule(p,r[m])&&(this.groupSizes[a]++,p++)},i.clearGroup=function(a){if(a<this.length){var r=this.groupSizes[a],n=this.indexOfGroup(a),o=n+r;this.groupSizes[a]=0;for(var s=n;s<o;s++)this.tag.deleteRule(n)}},i.getGroup=function(a){var r="";if(a>=this.length||this.groupSizes[a]===0)return r;for(var n=this.groupSizes[a],o=this.indexOfGroup(a),s=o+n,d=o;d<s;d++)r+=this.tag.getRule(d)+`/*!sc*/
`;return r},e}(),Pe=new Map,Fe=new Map,Se=1,Ie=function(e){if(Pe.has(e))return Pe.get(e);for(;Fe.has(Se);)Se++;var i=Se++;return Pe.set(e,i),Fe.set(i,e),i},Za=function(e){return Fe.get(e)},Qa=function(e,i){i>=Se&&(Se=i+1),Pe.set(e,i),Fe.set(i,e)},Ka="style["+ye+'][data-styled-version="5.3.11"]',Ja=new RegExp("^"+ye+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),er=function(e,i,a){for(var r,n=a.split(","),o=0,s=n.length;o<s;o++)(r=n[o])&&e.registerName(i,r)},tr=function(e,i){for(var a=(i.textContent||"").split(`/*!sc*/
`),r=[],n=0,o=a.length;n<o;n++){var s=a[n].trim();if(s){var d=s.match(Ja);if(d){var p=0|parseInt(d[1],10),m=d[2];p!==0&&(Qa(m,p),er(e,m,d[3]),e.getTag().insertRules(p,r)),r.length=0}else r.push(s)}}},ar=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Gt=function(e){var i=document.head,a=e||i,r=document.createElement("style"),n=function(d){for(var p=d.childNodes,m=p.length;m>=0;m--){var $=p[m];if($&&$.nodeType===1&&$.hasAttribute(ye))return $}}(a),o=n!==void 0?n.nextSibling:null;r.setAttribute(ye,"active"),r.setAttribute("data-styled-version","5.3.11");var s=ar();return s&&r.setAttribute("nonce",s),a.insertBefore(r,o),r},rr=function(){function e(a){var r=this.element=Gt(a);r.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var o=document.styleSheets,s=0,d=o.length;s<d;s++){var p=o[s];if(p.ownerNode===n)return p}Ae(17)}(r),this.length=0}var i=e.prototype;return i.insertRule=function(a,r){try{return this.sheet.insertRule(r,a),this.length++,!0}catch{return!1}},i.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},i.getRule=function(a){var r=this.sheet.cssRules[a];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),ir=function(){function e(a){var r=this.element=Gt(a);this.nodes=r.childNodes,this.length=0}var i=e.prototype;return i.insertRule=function(a,r){if(a<=this.length&&a>=0){var n=document.createTextNode(r),o=this.nodes[a];return this.element.insertBefore(n,o||null),this.length++,!0}return!1},i.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},i.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},e}(),nr=function(){function e(a){this.rules=[],this.length=0}var i=e.prototype;return i.insertRule=function(a,r){return a<=this.length&&(this.rules.splice(a,0,r),this.length++,!0)},i.deleteRule=function(a){this.rules.splice(a,1),this.length--},i.getRule=function(a){return a<this.length?this.rules[a]:""},e}(),Ct=gt,sr={isServer:!gt,useCSSOMInjection:!qa},Yt=function(){function e(a,r,n){a===void 0&&(a=ue),r===void 0&&(r={}),this.options=le({},sr,{},a),this.gs=r,this.names=new Map(n),this.server=!!a.isServer,!this.server&&gt&&Ct&&(Ct=!1,function(o){for(var s=document.querySelectorAll(Ka),d=0,p=s.length;d<p;d++){var m=s[d];m&&m.getAttribute(ye)!=="active"&&(tr(o,m),m.parentNode&&m.parentNode.removeChild(m))}}(this))}e.registerId=function(a){return Ie(a)};var i=e.prototype;return i.reconstructWithOptions=function(a,r){return r===void 0&&(r=!0),new e(le({},this.options,{},a),this.gs,r&&this.names||void 0)},i.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},i.getTag=function(){return this.tag||(this.tag=(n=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,a=n?new nr(s):o?new rr(s):new ir(s),new Ua(a)));var a,r,n,o,s},i.hasNameForId=function(a,r){return this.names.has(a)&&this.names.get(a).has(r)},i.registerName=function(a,r){if(Ie(a),this.names.has(a))this.names.get(a).add(r);else{var n=new Set;n.add(r),this.names.set(a,n)}},i.insertRules=function(a,r,n){this.registerName(a,r),this.getTag().insertRules(Ie(a),n)},i.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},i.clearRules=function(a){this.getTag().clearGroup(Ie(a)),this.clearNames(a)},i.clearTag=function(){this.tag=void 0},i.toString=function(){return function(a){for(var r=a.getTag(),n=r.length,o="",s=0;s<n;s++){var d=Za(s);if(d!==void 0){var p=a.names.get(d),m=r.getGroup(s);if(p&&m&&p.size){var $=ye+".g"+s+'[id="'+d+'"]',y="";p!==void 0&&p.forEach(function(M){M.length>0&&(y+=M+",")}),o+=""+m+$+'{content:"'+y+`"}/*!sc*/
`}}}return o}(this)},e}(),or=/(a)(d)/gi,$t=function(e){return String.fromCharCode(e+(e>25?39:97))};function st(e){var i,a="";for(i=Math.abs(e);i>52;i=i/52|0)a=$t(i%52)+a;return($t(i%52)+a).replace(or,"$1-$2")}var be=function(e,i){for(var a=i.length;a;)e=33*e^i.charCodeAt(--a);return e},Ht=function(e){return be(5381,e)};function lr(e){for(var i=0;i<e.length;i+=1){var a=e[i];if(Me(a)&&!ht(a))return!1}return!0}var cr=Ht("5.3.11"),dr=function(){function e(i,a,r){this.rules=i,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&lr(i),this.componentId=a,this.baseHash=be(cr,a),this.baseStyle=r,Yt.registerId(a)}return e.prototype.generateAndInjectStyles=function(i,a,r){var n=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(i,a,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&a.hasNameForId(n,this.staticRulesId))o.push(this.staticRulesId);else{var s=ve(this.rules,i,a,r).join(""),d=st(be(this.baseHash,s)>>>0);if(!a.hasNameForId(n,d)){var p=r(s,"."+d,void 0,n);a.insertRules(n,d,p)}o.push(d),this.staticRulesId=d}else{for(var m=this.rules.length,$=be(this.baseHash,r.hash),y="",M=0;M<m;M++){var A=this.rules[M];if(typeof A=="string")y+=A;else if(A){var v=ve(A,i,a,r),w=Array.isArray(v)?v.join(""):v;$=be($,w+M),y+=w}}if(y){var x=st($>>>0);if(!a.hasNameForId(n,x)){var P=r(y,"."+x,void 0,n);a.insertRules(n,x,P)}o.push(x)}}return o.join(" ")},e}(),mr=/^\s*\/\/.*$/gm,ur=[":","[",".","#"];function pr(e){var i,a,r,n,o=e===void 0?ue:e,s=o.options,d=s===void 0?ue:s,p=o.plugins,m=p===void 0?We:p,$=new Va(d),y=[],M=function(w){function x(P){if(P)try{w(P+"}")}catch{}}return function(P,N,_,W,G,ce,pe,J,se,de){switch(P){case 1:if(se===0&&N.charCodeAt(0)===64)return w(N+";"),"";break;case 2:if(J===0)return N+"/*|*/";break;case 3:switch(J){case 102:case 112:return w(_[0]+N),"";default:return N+(de===0?"/*|*/":"")}case-2:N.split("/*|*/}").forEach(x)}}}(function(w){y.push(w)}),A=function(w,x,P){return x===0&&ur.indexOf(P[a.length])!==-1||P.match(n)?w:"."+i};function v(w,x,P,N){N===void 0&&(N="&");var _=w.replace(mr,""),W=x&&P?P+" "+x+" { "+_+" }":_;return i=N,a=x,r=new RegExp("\\"+a+"\\b","g"),n=new RegExp("(\\"+a+"\\b){2,}"),$(P||!x?"":x,W)}return $.use([].concat(m,[function(w,x,P){w===2&&P.length&&P[0].lastIndexOf(a)>0&&(P[0]=P[0].replace(r,A))},M,function(w){if(w===-2){var x=y;return y=[],x}}])),v.hash=m.length?m.reduce(function(w,x){return x.name||Ae(15),be(w,x.name)},5381).toString():"",v}var Vt=t.createContext();Vt.Consumer;var Xt=t.createContext(),fr=(Xt.Consumer,new Yt),ot=pr();function hr(){return F.useContext(Vt)||fr}function gr(){return F.useContext(Xt)||ot}var qt=function(){function e(i,a){var r=this;this.inject=function(n,o){o===void 0&&(o=ot);var s=r.name+o.hash;n.hasNameForId(r.id,s)||n.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return Ae(12,String(r.name))},this.name=i,this.id="sc-keyframes-"+i,this.rules=a}return e.prototype.getName=function(i){return i===void 0&&(i=ot),this.name+i.hash},e}(),br=/([A-Z])/,xr=/([A-Z])/g,yr=/^ms-/,vr=function(e){return"-"+e.toLowerCase()};function Nt(e){return br.test(e)?e.replace(xr,vr).replace(yr,"-ms-"):e}var St=function(e){return e==null||e===!1||e===""};function ve(e,i,a,r){if(Array.isArray(e)){for(var n,o=[],s=0,d=e.length;s<d;s+=1)(n=ve(e[s],i,a,r))!==""&&(Array.isArray(n)?o.push.apply(o,n):o.push(n));return o}if(St(e))return"";if(ht(e))return"."+e.styledComponentId;if(Me(e)){if(typeof(m=e)!="function"||m.prototype&&m.prototype.isReactComponent||!i)return e;var p=e(i);return ve(p,i,a,r)}var m;return e instanceof qt?a?(e.inject(a,r),e.getName(r)):e:nt(e)?function $(y,M){var A,v,w=[];for(var x in y)y.hasOwnProperty(x)&&!St(y[x])&&(Array.isArray(y[x])&&y[x].isCss||Me(y[x])?w.push(Nt(x)+":",y[x],";"):nt(y[x])?w.push.apply(w,$(y[x],x)):w.push(Nt(x)+": "+(A=x,(v=y[x])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||A in Xa||A.startsWith("--")?String(v).trim():v+"px")+";"));return M?[M+" {"].concat(w,["}"]):w}(e):e.toString()}var Mt=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ut(e){for(var i=arguments.length,a=new Array(i>1?i-1:0),r=1;r<i;r++)a[r-1]=arguments[r];return Me(e)||nt(e)?Mt(ve(Et(We,[e].concat(a)))):a.length===0&&e.length===1&&typeof e[0]=="string"?e:Mt(ve(Et(e,a)))}var wr=function(e,i,a){return a===void 0&&(a=ue),e.theme!==a.theme&&e.theme||i||a.theme},Er=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kr=/(^-|-$)/g;function tt(e){return e.replace(Er,"-").replace(kr,"")}var Zt=function(e){return st(Ht(e)>>>0)};function Be(e){return typeof e=="string"&&!0}var lt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Cr=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function $r(e,i,a){var r=e[a];lt(i)&&lt(r)?Qt(r,i):e[a]=i}function Qt(e){for(var i=arguments.length,a=new Array(i>1?i-1:0),r=1;r<i;r++)a[r-1]=arguments[r];for(var n=0,o=a;n<o.length;n++){var s=o[n];if(lt(s))for(var d in s)Cr(d)&&$r(e,s[d],d)}return e}var Kt=t.createContext();Kt.Consumer;var at={};function Jt(e,i,a){var r=ht(e),n=!Be(e),o=i.attrs,s=o===void 0?We:o,d=i.componentId,p=d===void 0?function(N,_){var W=typeof N!="string"?"sc":tt(N);at[W]=(at[W]||0)+1;var G=W+"-"+Zt("5.3.11"+W+at[W]);return _?_+"-"+G:G}(i.displayName,i.parentComponentId):d,m=i.displayName,$=m===void 0?function(N){return Be(N)?"styled."+N:"Styled("+kt(N)+")"}(e):m,y=i.displayName&&i.componentId?tt(i.displayName)+"-"+i.componentId:i.componentId||p,M=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,A=i.shouldForwardProp;r&&e.shouldForwardProp&&(A=i.shouldForwardProp?function(N,_,W){return e.shouldForwardProp(N,_,W)&&i.shouldForwardProp(N,_,W)}:e.shouldForwardProp);var v,w=new dr(a,y,r?e.componentStyle:void 0),x=w.isStatic&&s.length===0,P=function(N,_){return function(W,G,ce,pe){var J=W.attrs,se=W.componentStyle,de=W.defaultProps,fe=W.foldedComponentIds,K=W.shouldForwardProp,ae=W.styledComponentId,oe=W.target,Z=function(k,l,z){k===void 0&&(k=ue);var u=le({},l,{theme:k}),O={};return z.forEach(function(L){var I,C,V,Q=L;for(I in Me(Q)&&(Q=Q(u)),Q)u[I]=O[I]=I==="className"?(C=O[I],V=Q[I],C&&V?C+" "+V:C||V):Q[I]}),[u,O]}(wr(G,F.useContext(Kt),de)||ue,G,J),we=Z[0],re=Z[1],ee=function(k,l,z,u){var O=hr(),L=gr(),I=l?k.generateAndInjectStyles(ue,O,L):k.generateAndInjectStyles(z,O,L);return I}(se,pe,we),Ee=ce,he=re.$as||G.$as||re.as||G.as||oe,ke=Be(he),b=re!==G?le({},G,{},re):G,h={};for(var g in b)g[0]!=="$"&&g!=="as"&&(g==="forwardedAs"?h.as=b[g]:(K?K(g,xt,he):!ke||xt(g))&&(h[g]=b[g]));return G.style&&re.style!==G.style&&(h.style=le({},G.style,{},re.style)),h.className=Array.prototype.concat(fe,ae,ee!==ae?ee:null,G.className,re.className).filter(Boolean).join(" "),h.ref=Ee,F.createElement(he,h)}(v,N,_,x)};return P.displayName=$,(v=t.forwardRef(P)).attrs=M,v.componentStyle=w,v.displayName=$,v.shouldForwardProp=A,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):We,v.styledComponentId=y,v.target=r?e.target:e,v.withComponent=function(N){var _=i.componentId,W=function(ce,pe){if(ce==null)return{};var J,se,de={},fe=Object.keys(ce);for(se=0;se<fe.length;se++)J=fe[se],pe.indexOf(J)>=0||(de[J]=ce[J]);return de}(i,["componentId"]),G=_&&_+"-"+(Be(N)?N:tt(kt(N)));return Jt(N,le({},W,{attrs:M,componentId:G}),a)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(N){this._foldedDefaultProps=r?Qt({},e.defaultProps,N):N}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),n&&ra(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var ct=function(e){return function i(a,r,n){if(n===void 0&&(n=ue),!_t.isValidElementType(r))return Ae(1,String(r));var o=function(){return a(r,n,Ut.apply(void 0,arguments))};return o.withConfig=function(s){return i(a,r,le({},n,{},s))},o.attrs=function(s){return i(a,r,le({},n,{attrs:Array.prototype.concat(n.attrs,s).filter(Boolean)}))},o}(Jt,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ct[e]=ct(e)});function bt(e){for(var i=arguments.length,a=new Array(i>1?i-1:0),r=1;r<i;r++)a[r-1]=arguments[r];var n=Ut.apply(void 0,[e].concat(a)).join(""),o=Zt(n);return new qt(o,n)}const ze=ct;var Nr=function(i,a){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof r[i]<"u")return r[i];if(i&&i.indexOf(".")>0){for(var n=i.split("."),o=n.length,s=r[n[0]],d=1;s!=null&&d<o;)s=s[n[d]],d+=1;if(typeof s<"u")return s}return a}};function S(e,i,a,r){Object.defineProperty(e,i,{get:a,set:r,enumerable:!0,configurable:!0})}var Sr={};S(Sr,"Hourglass",()=>Mr);const D="#4fa94d",T={"aria-busy":!0,role:"status"};function Mr({visible:e=!0,width:i="80",height:a="80",wrapperClass:r="",wrapperStyle:n={},ariaLabel:o="hourglass-loading",colors:s=["#306cce","#72a1ed"]}){return e?t.createElement("svg",{width:i,height:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 350 350",preserveAspectRatio:"xMidYMid",className:r,style:n,"aria-label":o,"data-testid":"hourglass-svg",...T},t.createElement("animateTransform",{attributeName:"transform",type:"rotate",values:"0; 0; -30; 360; 360",keyTimes:"0; 0.40; 0.55; 0.65; 1",dur:"3s",begin:"0s",calcMode:"linear",repeatCount:"indefinite"}),t.createElement("g",null,t.createElement("path",{fill:s[0],stroke:s[0],d:"M324.658,20.572v-2.938C324.658,7.935,316.724,0,307.025,0H40.313c-9.699,0-17.635,7.935-17.635,17.634v2.938     c0,9.699,7.935,17.634,17.635,17.634h6.814c3.5,0,3.223,3.267,3.223,4.937c0,19.588,8.031,42.231,14.186,56.698     c12.344,29.012,40.447,52.813,63.516,69.619c4.211,3.068,3.201,5.916,0.756,7.875c-22.375,17.924-51.793,40.832-64.271,70.16     c-6.059,14.239-13.934,36.4-14.18,55.772c-0.025,1.987,0.771,5.862-3.979,5.862h-6.064c-9.699,0-17.635,7.936-17.635,17.634v2.94     c0,9.698,7.935,17.634,17.635,17.634h266.713c9.699,0,17.633-7.936,17.633-17.634v-2.94c0-9.698-7.934-17.634-17.633-17.634     h-3.816c-7,0-6.326-5.241-6.254-7.958c0.488-18.094-4.832-38.673-12.617-54.135c-17.318-34.389-44.629-56.261-61.449-68.915     c-3.65-2.745-4.018-6.143,0-8.906c17.342-11.929,44.131-34.526,61.449-68.916c8.289-16.464,13.785-38.732,12.447-57.621     c-0.105-1.514-0.211-4.472,3.758-4.472h6.482C316.725,38.206,324.658,30.272,324.658,20.572z M270.271,93.216     c-16.113,31.998-41.967,54.881-64.455,68.67c-1.354,0.831-3.936,2.881-3.936,8.602v6.838c0,6.066,2.752,7.397,4.199,8.286     c22.486,13.806,48.143,36.636,64.191,68.508c7.414,14.727,11.266,32.532,10.885,46.702c-0.078,2.947,1.053,8.308-6.613,8.308     H72.627c-6.75,0-6.475-3.37-6.459-5.213c0.117-12.895,4.563-30.757,12.859-50.255c14.404-33.854,44.629-54.988,64.75-67.577     c0.896-0.561,2.629-1.567,2.629-6.922v-10.236c0-5.534-2.656-7.688-4.057-8.57c-20.098-12.688-49.256-33.618-63.322-66.681     c-8.383-19.702-12.834-37.732-12.861-50.657c-0.002-1.694,0.211-4.812,3.961-4.812h206.582c4.168,0,4.127,3.15,4.264,4.829     C282.156,57.681,278.307,77.257,270.271,93.216z"}),t.createElement("g",null,t.createElement("path",{fill:s[1],stroke:s[1],d:"M169.541,196.2l-68.748,86.03c-2.27,2.842-1.152,5.166,2.484,5.166h140.781c3.637,0,4.756-2.324,2.484-5.166     l-68.746-86.03C175.525,193.358,171.811,193.358,169.541,196.2z"}),t.createElement("animate",{attributeName:"opacity",values:"0; 0; 1; 1; 0; 0",keyTimes:"0; 0.1; 0.4; 0.6; 0.61; 1",dur:"3s",repeatCount:"indefinite"})),t.createElement("g",null,t.createElement("path",{fill:s[1],stroke:s[1],d:"M168.986,156.219c2.576,2.568,6.789,2.568,9.363,0l34.576-34.489c2.574-2.568,1.707-4.67-1.932-4.67H136.34     c-3.637,0-4.506,2.102-1.932,4.67L168.986,156.219z"}),t.createElement("animate",{attributeName:"opacity",values:"1; 1; 0; 0; 1; 1",keyTimes:"0; 0.1; 0.4; 0.65; 0.66; 1",dur:"3s",repeatCount:"indefinite"})))):null}var Tr={};S(Tr,"Blocks",()=>jr);function jr({visible:e=!0,width:i="80",height:a="80",wrapperClass:r="",wrapperStyle:n={},ariaLabel:o="blocks-loading"}){return e?t.createElement("svg",{width:i,height:a,className:r,style:n,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid","aria-label":o,"data-testid":"blocks-svg",...T},t.createElement("rect",{x:"17",y:"17",width:"20",height:"20",fill:"#577c9b"},t.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0s",calcMode:"discrete"})),t.createElement("rect",{x:"40",y:"17",width:"20",height:"20",fill:"#577c9b"},t.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.125s",calcMode:"discrete"})),t.createElement("rect",{x:"63",y:"17",width:"20",height:"20",fill:"#577c9b"},t.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.25s",calcMode:"discrete"})),t.createElement("rect",{x:"17",y:"40",width:"20",height:"20",fill:"#577c9b"},t.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.875s",calcMode:"discrete"})),t.createElement("rect",{x:"63",y:"40",width:"20",height:"20",fill:"#577c9b"},t.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.375s",calcMode:"discrete"})),t.createElement("rect",{x:"17",y:"63",width:"20",height:"20",fill:"#577c9b"},t.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.75s",calcMode:"discrete"})),t.createElement("rect",{x:"40",y:"63",width:"20",height:"20",fill:"#577c9b"},t.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.625s",calcMode:"discrete"})),t.createElement("rect",{x:"63",y:"63",width:"20",height:"20",fill:"#577c9b"},t.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.5s",calcMode:"discrete"}))):null}var Ar={};S(Ar,"Comment",()=>zr);function zr({visible:e=!0,width:i="80",height:a="80",backgroundColor:r="#ff6d00",color:n="#fff",wrapperClass:o="",wrapperStyle:s={},ariaLabel:d="comment-loading"}){return e?t.createElement("svg",{width:i,height:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:o,style:s,"aria-label":d,"data-testid":"comment-svg",...T},t.createElement("path",{d:"M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z","ng-attr-fill":"{{config.c1}}",fill:r}),t.createElement("circle",{cx:"30",cy:"47",r:"5","ng-attr-fill":"{{config.c2}}",fill:n},t.createElement("animate",{attributeName:"opacity",calcMode:"linear",values:"0;1;1",keyTimes:"0;0.2;1",dur:"1",begin:"0s",repeatCount:"indefinite"})),t.createElement("circle",{cx:"50",cy:"47",r:"5","ng-attr-fill":"{{config.c3}}",fill:n},t.createElement("animate",{attributeName:"opacity",calcMode:"linear",values:"0;0;1;1",keyTimes:"0;0.2;0.4;1",dur:"1",begin:"0s",repeatCount:"indefinite"})),t.createElement("circle",{cx:"70",cy:"47",r:"5","ng-attr-fill":"{{config.c4}}",fill:n},t.createElement("animate",{attributeName:"opacity",calcMode:"linear",values:"0;0;1;1",keyTimes:"0;0.4;0.6;1",dur:"1",begin:"0s",repeatCount:"indefinite"}))):null}var Lr={};S(Lr,"ColorRing",()=>Rr);function Rr({visible:e=!0,width:i="80",height:a="80",colors:r=["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"],wrapperClass:n="",wrapperStyle:o={},ariaLabel:s="color-ring-loading"}){return e?t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:i,height:a,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:n,style:o,"aria-label":s,"data-testid":"color-ring-svg",...T},t.createElement("defs",null,t.createElement("mask",{id:"ldio-4offds5dlws-mask"},t.createElement("circle",{cx:"50",cy:"50",r:"26",stroke:"#fff",strokeLinecap:"round",strokeDasharray:"122.52211349000194 40.840704496667314",strokeWidth:"9",transform:"rotate(198.018 50 50)"},t.createElement("animateTransform",{attributeName:"transform",type:"rotate",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"})))),t.createElement("g",{mask:"url(#ldio-4offds5dlws-mask)"},t.createElement("rect",{x:"14.5",y:"0",width:"15",height:"100",fill:r[0]},t.createElement("animate",{attributeName:"fill",values:r.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.8s"})),t.createElement("rect",{x:"28.5",y:"0",width:"15",height:"100",fill:r[1]},t.createElement("animate",{attributeName:"fill",values:r.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.6s"})),t.createElement("rect",{x:"42.5",y:"0",width:"15",height:"100",fill:r[2]},t.createElement("animate",{attributeName:"fill",values:r.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.4s"})),t.createElement("rect",{x:"56.5",y:"0",width:"15",height:"100",fill:r[3]},t.createElement("animate",{attributeName:"fill",values:r.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.2s"})),t.createElement("rect",{x:"70.5",y:"0",width:"15",height:"100",fill:r[4]},t.createElement("animate",{attributeName:"fill",values:r.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"0s"})))):null}var Ir={};S(Ir,"Discuss",()=>Br);function Br({visible:e=!0,width:i="80",height:a="80",wrapperClass:r="",wrapperStyle:n={},ariaLabel:o="discuss-loading",colors:s=["#ff727d","#ff727d"]}){return e?t.createElement("svg",{width:i,height:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:r,style:n,"aria-label":o,"data-testid":"discuss-svg",...T},t.createElement("path",{"ng-attr-d":"{{config.d}}","ng-attr-stroke-width":"{{config.width}}","ng-attr-stroke":"{{config.stroke}}",fill:"none",d:"M82 50A32 32 0 1 1 23.533421623214014 32.01333190873183 L21.71572875253809 21.7157287525381 L32.013331908731814 23.53342162321403 A32 32 0 0 1 82 50",strokeWidth:"5",stroke:s[0]}),t.createElement("circle",{cx:"50",cy:"50","ng-attr-r":"{{config.radius2}}","ng-attr-stroke-width":"{{config.width}}","ng-attr-stroke":"{{config.stroke}}","ng-attr-stroke-dasharray":"{{config.dasharray}}",fill:"none",strokeLinecap:"round",r:"20",strokeWidth:"5",stroke:s[1],strokeDasharray:"31.41592653589793 31.41592653589793",transform:"rotate(96 50 50)"},t.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}))):null}var Dr={};S(Dr,"FidgetSpinner",()=>Pr);function Pr({width:e="80",height:i="80",backgroundColor:a=D,ballColors:r=["#fc636b","#6a67ce","#ffb900"],wrapperClass:n="",wrapperStyle:o={},ariaLabel:s="fidget-spinner-loader",visible:d=!0}){return d?t.createElement("svg",{width:e,height:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:n,style:o,"aria-label":s,"data-testid":"fidget-spinner-svg",...T},t.createElement("g",{transform:"rotate(6 50 50)"},t.createElement("g",{transform:"translate(50 50)"},t.createElement("g",{"ng-attr-transform":"scale({{config.r}})",transform:"scale(0.9)"},t.createElement("g",{transform:"translate(-50 -58)"},t.createElement("path",{"ng-attr-fill":"{{config.c2}}",d:"M27.1,79.4c-1.1,0.6-2.4,1-3.7,1c-2.6,0-5.1-1.4-6.4-3.7c-2-3.5-0.8-8,2.7-10.1c1.1-0.6,2.4-1,3.7-1c2.6,0,5.1,1.4,6.4,3.7 C31.8,72.9,30.6,77.4,27.1,79.4z",fill:r[0]}),t.createElement("path",{"ng-attr-fill":"{{config.c3}}",d:"M72.9,79.4c1.1,0.6,2.4,1,3.7,1c2.6,0,5.1-1.4,6.4-3.7c2-3.5,0.8-8-2.7-10.1c-1.1-0.6-2.4-1-3.7-1c-2.6,0-5.1,1.4-6.4,3.7 C68.2,72.9,69.4,77.4,72.9,79.4z",fill:r[1]}),t.createElement("circle",{"ng-attr-fill":"{{config.c4}}",cx:"50",cy:"27",r:"7.4",fill:r[2]}),t.createElement("path",{"ng-attr-fill":"{{config.c1}}",d:"M86.5,57.5c-3.1-1.9-6.4-2.8-9.8-2.8c-0.5,0-0.9,0-1.4,0c-0.4,0-0.8,0-1.1,0c-2.1,0-4.2-0.4-6.2-1.2 c-0.8-3.6-2.8-6.9-5.4-9.3c0.4-2.5,1.3-4.8,2.7-6.9c2-2.9,3.2-6.5,3.2-10.4c0-10.2-8.2-18.4-18.4-18.4c-0.3,0-0.6,0-0.9,0 C39.7,9,32,16.8,31.6,26.2c-0.2,4.1,1,7.9,3.2,11c1.4,2.1,2.3,4.5,2.7,6.9c-2.6,2.5-4.6,5.7-5.4,9.3c-1.9,0.7-4,1.1-6.1,1.1 c-0.4,0-0.8,0-1.2,0c-0.5,0-0.9-0.1-1.4-0.1c-3.1,0-6.3,0.8-9.2,2.5c-9.1,5.2-12,17-6.3,25.9c3.5,5.4,9.5,8.4,15.6,8.4 c2.9,0,5.8-0.7,8.5-2.1c3.6-1.9,6.3-4.9,8-8.3c1.1-2.3,2.7-4.2,4.6-5.8c1.7,0.5,3.5,0.8,5.4,0.8c1.9,0,3.7-0.3,5.4-0.8 c1.9,1.6,3.5,3.5,4.6,5.7c1.5,3.2,4,6,7.4,8c2.9,1.7,6.1,2.5,9.2,2.5c6.6,0,13.1-3.6,16.4-10C97.3,73.1,94.4,62.5,86.5,57.5z M29.6,83.7c-1.9,1.1-4,1.6-6.1,1.6c-4.2,0-8.4-2.2-10.6-6.1c-3.4-5.9-1.4-13.4,4.5-16.8c1.9-1.1,4-1.6,6.1-1.6 c4.2,0,8.4,2.2,10.6,6.1C37.5,72.8,35.4,80.3,29.6,83.7z M50,39.3c-6.8,0-12.3-5.5-12.3-12.3S43.2,14.7,50,14.7 c6.8,0,12.3,5.5,12.3,12.3S56.8,39.3,50,39.3z M87.2,79.2c-2.3,3.9-6.4,6.1-10.6,6.1c-2.1,0-4.2-0.5-6.1-1.6 c-5.9-3.4-7.9-10.9-4.5-16.8c2.3-3.9,6.4-6.1,10.6-6.1c2.1,0,4.2,0.5,6.1,1.6C88.6,65.8,90.6,73.3,87.2,79.2z",fill:a})))),t.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}))):null}var Wr={};S(Wr,"MagnifyingGlass",()=>Fr);function Fr({visible:e=!0,height:i="80",width:a="80",wrapperClass:r="",wrapperStyle:n={},ariaLabel:o="magnifying-glass-loading",glassColor:s="#c0efff",color:d="#e15b64"}){return e?t.createElement("svg",{width:a,height:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:r,style:n,"aria-label":o,"data-testid":"magnifying-glass-svg",...T},t.createElement("g",{transform:"translate(50,50)"},t.createElement("g",{"ng-attr-transform":"scale({{config.scale}})",transform:"scale(0.82)"},t.createElement("g",{transform:"translate(-50,-50)"},t.createElement("g",{transform:"translate(16.3636 -20)"},t.createElement("animateTransform",{attributeName:"transform",type:"translate",calcMode:"linear",values:"-20 -20;20 -20;0 20;-20 -20",keyTimes:"0;0.33;0.66;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}),t.createElement("path",{"ng-attr-fill":"{{config.glass}}",d:"M44.19,26.158c-4.817,0-9.345,1.876-12.751,5.282c-3.406,3.406-5.282,7.934-5.282,12.751 c0,4.817,1.876,9.345,5.282,12.751c3.406,3.406,7.934,5.282,12.751,5.282s9.345-1.876,12.751-5.282 c3.406-3.406,5.282-7.934,5.282-12.751c0-4.817-1.876-9.345-5.282-12.751C53.536,28.033,49.007,26.158,44.19,26.158z",fill:s}),t.createElement("path",{"ng-attr-fill":"{{config.frame}}",d:"M78.712,72.492L67.593,61.373l-3.475-3.475c1.621-2.352,2.779-4.926,3.475-7.596c1.044-4.008,1.044-8.23,0-12.238 c-1.048-4.022-3.146-7.827-6.297-10.979C56.572,22.362,50.381,20,44.19,20C38,20,31.809,22.362,27.085,27.085 c-9.447,9.447-9.447,24.763,0,34.21C31.809,66.019,38,68.381,44.19,68.381c4.798,0,9.593-1.425,13.708-4.262l9.695,9.695 l4.899,4.899C73.351,79.571,74.476,80,75.602,80s2.251-0.429,3.11-1.288C80.429,76.994,80.429,74.209,78.712,72.492z M56.942,56.942 c-3.406,3.406-7.934,5.282-12.751,5.282s-9.345-1.876-12.751-5.282c-3.406-3.406-5.282-7.934-5.282-12.751 c0-4.817,1.876-9.345,5.282-12.751c3.406-3.406,7.934-5.282,12.751-5.282c4.817,0,9.345,1.876,12.751,5.282 c3.406,3.406,5.282,7.934,5.282,12.751C62.223,49.007,60.347,53.536,56.942,56.942z",fill:d})))))):null}var Or={};S(Or,"ProgressBar",()=>_r);function _r({visible:e=!0,height:i="80",width:a="80",wrapperClass:r="",wrapperStyle:n={},ariaLabel:o="progress-bar-loading",borderColor:s="#F4442E",barColor:d="#51E5FF"}){return e?t.createElement("svg",{width:a,height:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:r,style:n,"aria-label":o,"data-testid":"progress-bar-svg",...T},t.createElement("defs",null,t.createElement("clipPath",{"ng-attr-id":"{{config.cpid}}",x:"0",y:"0",width:"100",height:"100",id:"lds-progress-cpid-5009611b8a418"},t.createElement("rect",{x:"0",y:"0",width:"66.6667",height:"100"},t.createElement("animate",{attributeName:"width",calcMode:"linear",values:"0;100;100",keyTimes:"0;0.5;1",dur:"1",begin:"0s",repeatCount:"indefinite"}),t.createElement("animate",{attributeName:"x",calcMode:"linear",values:"0;0;100",keyTimes:"0;0.5;1",dur:"1",begin:"0s",repeatCount:"indefinite"})))),t.createElement("path",{fill:"none","ng-attr-stroke":"{{config.c1}}",strokeWidth:"2.7928",d:"M82,63H18c-7.2,0-13-5.8-13-13v0c0-7.2,5.8-13,13-13h64c7.2,0,13,5.8,13,13v0C95,57.2,89.2,63,82,63z",stroke:s}),t.createElement("path",{"ng-attr-fill":"{{config.c2}}","ng-attr-clip-path":"url(#{{config.cpid}})",d:"M81.3,58.7H18.7c-4.8,0-8.7-3.9-8.7-8.7v0c0-4.8,3.9-8.7,8.7-8.7h62.7c4.8,0,8.7,3.9,8.7,8.7v0C90,54.8,86.1,58.7,81.3,58.7z",fill:d,clipPath:"url(#lds-progress-cpid-5009611b8a418)"})):null}var Gr={};S(Gr,"Radio",()=>Yr);function Yr({visible:e=!0,height:i="80",width:a="80",wrapperClass:r="",wrapperStyle:n={},ariaLabel:o="radio-loading",colors:s=[D,D,D]}){return e?t.createElement("svg",{width:a,height:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:r,style:n,"aria-label":o,"data-testid":"radio-bar-svg",...T},t.createElement("circle",{cx:"28",cy:"75",r:"11","ng-attr-fill":"{{config.c1}}",fill:s[0]},t.createElement("animate",{attributeName:"fill-opacity",calcMode:"linear",values:"0;1;1",keyTimes:"0;0.2;1",dur:"1",begin:"0s",repeatCount:"indefinite"})),t.createElement("path",{d:"M28 47A28 28 0 0 1 56 75",fill:"none","ng-attr-stroke":"{{config.c2}}",strokeWidth:"10",stroke:s[1]},t.createElement("animate",{attributeName:"stroke-opacity",calcMode:"linear",values:"0;1;1",keyTimes:"0;0.2;1",dur:"1",begin:"0.1s",repeatCount:"indefinite"})),t.createElement("path",{d:"M28 25A50 50 0 0 1 78 75",fill:"none","ng-attr-stroke":"{{config.c3}}",strokeWidth:"10",stroke:s[2]},t.createElement("animate",{attributeName:"stroke-opacity",calcMode:"linear",values:"0;1;1",keyTimes:"0;0.2;1",dur:"1",begin:"0.2s",repeatCount:"indefinite"}))):null}var Hr={};S(Hr,"RotatingTriangles",()=>Vr);function Vr({visible:e=!0,height:i="80",width:a="80",wrapperClass:r="",wrapperStyle:n={},ariaLabel:o="rotating-triangle-loading",colors:s=["#1B5299","#EF8354","#DB5461"]}){return e?t.createElement("svg",{width:a,height:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:r,style:n,"aria-label":o,"data-testid":"rotating-triangle-svg",...T},t.createElement("g",{transform:"translate(50,42)"},t.createElement("g",{transform:"scale(0.8)"},t.createElement("g",{transform:"translate(-50,-50)"},t.createElement("polygon",{"ng-attr-fill":"{{config.c1}}",points:"72.5,50 50,11 27.5,50 50,50",fill:s[0],transform:"rotate(186 50 38.5)"},t.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 38.5;360 50 38.5",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})),t.createElement("polygon",{"ng-attr-fill":"{{config.c2}}",points:"5,89 50,89 27.5,50",fill:s[1],transform:"rotate(186 27.5 77.5)"},t.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 27.5 77.5;360 27.5 77.5",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})),t.createElement("polygon",{"ng-attr-fill":"{{config.c3}}",points:"72.5,50 50,89 95,89",fill:s[2],transform:"rotate(186 72.2417 77.5)"},t.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 72.5 77.5;360 72 77.5",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})))))):null}var Xr={};S(Xr,"Vortex",()=>qr);const qr=({visible:e=!0,height:i="80",width:a="80",ariaLabel:r="vortex-loading",wrapperStyle:n,wrapperClass:o,colors:s=["#1B5299","#EF8354","#DB5461","#1B5299","#EF8354","#DB5461"]})=>e?t.createElement("svg",{height:i,width:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid","data-testid":"vortex-svg","aria-label":r,style:n,className:o,...T},t.createElement("g",{transform:"translate(50,50)"},t.createElement("g",{transform:"scale(0.7)"},t.createElement("g",{transform:"translate(-50,-50)"},t.createElement("g",{transform:"rotate(137.831 50 50)"},t.createElement("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",values:"360 50 50;0 50 50",keyTimes:"0;1",dur:"1",keySplines:"0.5 0.5 0.5 0.5",calcMode:"spline"}),t.createElement("path",{fill:s[0],d:"M30.4,9.7c-7.4,10.9-11.8,23.8-12.3,37.9c0.2,1,0.5,1.9,0.7,2.8c1.4-5.2,3.4-10.3,6.2-15.1 c2.6-4.4,5.6-8.4,9-12c0.7-0.7,1.4-1.4,2.1-2.1c7.4-7,16.4-12,26-14.6C51.5,3.6,40.2,4.9,30.4,9.7z"}),t.createElement("path",{fill:s[1],d:"M24.8,64.2c-2.6-4.4-4.5-9.1-5.9-13.8c-0.3-0.9-0.5-1.9-0.7-2.8c-2.4-9.9-2.2-20.2,0.4-29.8 C10.6,25.5,6,36,5.3,46.8C11,58.6,20,68.9,31.9,76.3c0.9,0.3,1.9,0.5,2.8,0.8C31,73.3,27.6,69,24.8,64.2z"}),t.createElement("path",{fill:s[2],d:"M49.6,78.9c-5.1,0-10.1-0.6-14.9-1.8c-1-0.2-1.9-0.5-2.8-0.8c-9.8-2.9-18.5-8.2-25.6-15.2 c2.8,10.8,9.5,20,18.5,26c13.1,0.9,26.6-1.7,38.9-8.3c0.7-0.7,1.4-1.4,2.1-2.1C60.7,78.2,55.3,78.9,49.6,78.9z"}),t.createElement("path",{fill:s[3],d:"M81.1,49.6c-1.4,5.2-3.4,10.3-6.2,15.1c-2.6,4.4-5.6,8.4-9,12c-0.7,0.7-1.4,1.4-2.1,2.1 c-7.4,7-16.4,12-26,14.6c10.7,3,22.1,1.7,31.8-3.1c7.4-10.9,11.8-23.8,12.3-37.9C81.6,51.5,81.4,50.6,81.1,49.6z"}),t.createElement("path",{fill:s[4],d:"M75.2,12.9c-13.1-0.9-26.6,1.7-38.9,8.3c-0.7,0.7-1.4,1.4-2.1,2.1c5.2-1.4,10.6-2.2,16.2-2.2 c5.1,0,10.1,0.6,14.9,1.8c1,0.2,1.9,0.5,2.8,0.8c9.8,2.9,18.5,8.2,25.6,15.2C90.9,28.1,84.2,18.9,75.2,12.9z"}),t.createElement("path",{fill:s[5],d:"M94.7,53.2C89,41.4,80,31.1,68.1,23.7c-0.9-0.3-1.9-0.5-2.8-0.8c3.8,3.8,7.2,8.1,10,13 c2.6,4.4,4.5,9.1,5.9,13.8c0.3,0.9,0.5,1.9,0.7,2.8c2.4,9.9,2.2,20.2-0.4,29.8C89.4,74.5,94,64,94.7,53.2z"})))))):null;var Ur={};S(Ur,"FallingLines",()=>Zr);const Zr=({color:e=D,width:i="100",visible:a=!0})=>a?t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 100 100","data-testid":"falling-lines",...T},t.createElement("rect",{y:"25",width:"10",height:"50",rx:"4",ry:"4",fill:e,"data-testid":"falling-lines-rect-1"},t.createElement("animate",{attributeName:"x",values:"10;100",dur:"1.2s",repeatCount:"indefinite"}),t.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 10 70",to:"-60 100 70",dur:"1.2s",repeatCount:"indefinite"}),t.createElement("animate",{attributeName:"opacity",values:"0;1;0",dur:"1.2s",repeatCount:"indefinite"})),t.createElement("rect",{y:"25",width:"10",height:"50",rx:"4",ry:"4",fill:e},t.createElement("animate",{attributeName:"x",values:"10;100",dur:"1.2s",begin:"0.4s",repeatCount:"indefinite"}),t.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 10 70",to:"-60 100 70",dur:"1.2s",begin:"0.4s",repeatCount:"indefinite"}),t.createElement("animate",{attributeName:"opacity",values:"0;1;0",dur:"1.2s",begin:"0.4s",repeatCount:"indefinite"})),t.createElement("rect",{y:"25",width:"10",height:"50",rx:"4",ry:"4",fill:e,"data-testid":"falling-lines-rect-2"},t.createElement("animate",{attributeName:"x",values:"10;100",dur:"1.2s",begin:"0.8s",repeatCount:"indefinite"}),t.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 10 70",to:"-60 100 70",dur:"1.2s",begin:"0.8s",repeatCount:"indefinite"}),t.createElement("animate",{attributeName:"opacity",values:"0;1;0",dur:"1.2s",begin:"0.8s",repeatCount:"indefinite"}))):null;var Qr={};S(Qr,"Watch",()=>Kr);const H=e=>({display:e?"flex":"none"}),Kr=({height:e=80,width:i=80,radius:a=48,color:r=D,ariaLabel:n="watch-loading",wrapperStyle:o,wrapperClass:s,visible:d=!0})=>t.createElement("div",{style:{...H(d),...o},className:s,"data-testid":"watch-loading","aria-label":n,...T},t.createElement("svg",{width:i,height:e,version:"1.1",id:"L2",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve","data-testid":"watch-svg"},t.createElement("circle",{fill:"none",stroke:r,strokeWidth:"4",strokeMiterlimit:"10",cx:"50",cy:"50",r:a}),t.createElement("line",{fill:"none",strokeLinecap:"round",stroke:r,strokeWidth:"4",strokeMiterlimit:"10",x1:"50",y1:"50",x2:"85",y2:"50.5"},t.createElement("animateTransform",{attributeName:"transform",dur:"2s",type:"rotate",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})),t.createElement("line",{fill:"none",strokeLinecap:"round",stroke:r,strokeWidth:"4",strokeMiterlimit:"10",x1:"50",y1:"50",x2:"49.5",y2:"74"},t.createElement("animateTransform",{attributeName:"transform",dur:"15s",type:"rotate",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"}))));var Jr={};S(Jr,"Triangle",()=>ri);const ei=bt`
 to {
    stroke-dashoffset: 136;
  }
`,ti=ze.polygon`
  stroke-dasharray: 17;
  animation: ${ei} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`,ai=ze.svg`
  transform-origin: 50% 65%;
`,ri=({height:e=80,width:i=80,color:a=D,ariaLabel:r="triangle-loading",wrapperStyle:n,wrapperClass:o,visible:s=!0})=>t.createElement("div",{style:{...H(s),...n},className:`${o}`,"data-testid":"triangle-loading","aria-label":r,...T},t.createElement(ai,{id:"triangle",width:i,height:e,viewBox:"-3 -4 39 39","data-testid":"triangle-svg"},t.createElement(ti,{fill:"transparent",stroke:a,strokeWidth:"1",points:"16,0 32,32 0,32"})));var ii={};S(ii,"ThreeDots",()=>ni);const ni=({height:e=80,width:i=80,radius:a=9,color:r=D,ariaLabel:n="three-dots-loading",wrapperStyle:o,wrapperClass:s,visible:d=!0})=>t.createElement("div",{style:{...H(d),...o},className:s,"data-testid":"three-dots-loading","aria-label":n,...T},t.createElement("svg",{width:i,height:e,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:r,"data-testid":"three-dots-svg"},t.createElement("circle",{cx:"15",cy:"15",r:Number(a)+6},t.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),t.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("circle",{cx:"60",cy:"15",r:a,attributeName:"fill-opacity",from:"1",to:"0.3"},t.createElement("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),t.createElement("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("circle",{cx:"105",cy:"15",r:Number(a)+6},t.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),t.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}))));var si={};S(si,"ThreeCircles",()=>oi);const oi=({wrapperStyle:e={},visible:i=!0,wrapperClass:a="",height:r=100,width:n=100,color:o=D,ariaLabel:s="three-circles-loading",outerCircleColor:d,innerCircleColor:p,middleCircleColor:m})=>t.createElement("div",{style:{...H(i),...e},className:a,"data-testid":"three-circles-wrapper","aria-label":s,...T},t.createElement("svg",{version:"1.1",height:`${r}`,width:`${n}`,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve","data-testid":"three-circles-svg"},t.createElement("path",{fill:d||o,d:"M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"},t.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})),t.createElement("path",{fill:m||o,d:"M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"},t.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"-360 50 50",repeatCount:"indefinite"})),t.createElement("path",{fill:p||o,d:"M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z"},t.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"}))));var li={};S(li,"TailSpin",()=>ci);const ci=({height:e=80,width:i=80,strokeWidth:a=2,radius:r=1,color:n=D,ariaLabel:o="tail-spin-loading",wrapperStyle:s,wrapperClass:d,visible:p=!0})=>{const m=parseInt(String(a)),$=m+36,y=m/2,M=y+parseInt(String(r))-1;return t.createElement("div",{style:{...H(p),...s},className:d,"data-testid":"tail-spin-loading","aria-label":o,...T},t.createElement("svg",{width:i,height:e,viewBox:`0 0 ${$} ${$}`,xmlns:"http://www.w3.org/2000/svg","data-testid":"tail-spin-svg"},t.createElement("defs",null,t.createElement("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},t.createElement("stop",{stopColor:n,stopOpacity:"0",offset:"0%"}),t.createElement("stop",{stopColor:n,stopOpacity:".631",offset:"63.146%"}),t.createElement("stop",{stopColor:n,offset:"100%"}))),t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("g",{transform:`translate(${y} ${y})`},t.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:n,strokeWidth:a},t.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})),t.createElement("circle",{fill:"#fff",cx:"36",cy:"18",r:M},t.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"}))))))};var di={};S(di,"RotatingLines",()=>hi);const mi=bt`
 to {
    transform: rotate(360deg);
  }
`,ui=[0,30,60,90,120,150,180,210,240,270,300,330],pi=ze.svg`
  animation: ${mi} 0.75s steps(12, end) infinite;
  animation-duration: ${Nr("speed","0.75")}s;
`,fi=ze.polyline`
  stroke-width: ${e=>e.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;function hi({strokeColor:e=D,strokeWidth:i="5",animationDuration:a="0.75",width:r="96",visible:n=!0,ariaLabel:o="rotating-lines-loading"}){const s=F.useCallback(()=>ui.map(d=>t.createElement(fi,{key:d,points:"24,12 24,4",width:i,transform:`rotate(${d}, 24, 24)`})),[i]);return n?t.createElement(pi,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:r,stroke:e,speed:a,"data-testid":"rotating-lines-svg","aria-label":o,...T},s()):null}var gi={};S(gi,"RotatingSquare",()=>bi);const bi=({wrapperClass:e="",color:i=D,height:a=100,width:r=100,strokeWidth:n=4,ariaLabel:o="rotating-square-loading",wrapperStyle:s={},visible:d=!0})=>t.createElement("div",{style:{...H(d),...s},className:e,"data-testid":"rotating-square-wrapper","aria-label":o,...T},t.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",height:`${a}`,width:`${r}`,"data-testid":"rotating-square-svg",xmlSpace:"preserve"},t.createElement("rect",{fill:"none",stroke:i,strokeWidth:n,x:"25",y:"25",width:"50",height:"50"},t.createElement("animateTransform",{attributeName:"transform",dur:"0.5s",from:"0 50 50",to:"180 50 50",type:"rotate",id:"strokeBox",attributeType:"XML",begin:"rectBox.end"})),t.createElement("rect",{x:"27",y:"27",fill:i,width:"46",height:"50"},t.createElement("animate",{attributeName:"height",dur:"1.3s",attributeType:"XML",from:"50",to:"0",id:"rectBox",fill:"freeze",begin:"0s;strokeBox.end"}))));var xi={};S(xi,"Rings",()=>yi);const yi=({height:e=80,width:i=80,radius:a=6,color:r=D,ariaLabel:n="rings-loading",wrapperStyle:o,wrapperClass:s,visible:d=!0})=>t.createElement("div",{style:{...H(d),...o},className:s,"data-testid":"rings-loading","aria-label":n,...T},t.createElement("svg",{width:i,height:e,viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:r,"data-testid":"rings-svg"},t.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2"},t.createElement("circle",{cx:"22",cy:"22",r:a,strokeOpacity:"0"},t.createElement("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),t.createElement("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),t.createElement("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("circle",{cx:"22",cy:"22",r:a,strokeOpacity:"0"},t.createElement("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),t.createElement("animate",{attributeName:"strokeOpacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),t.createElement("animate",{attributeName:"strokeWidth",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("circle",{cx:"22",cy:"22",r:Number(a)+2},t.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})))));var vi={};S(vi,"RevolvingDot",()=>wi);const wi=({radius:e=45,strokeWidth:i=5,color:a=D,secondaryColor:r,ariaLabel:n="revolving-dot-loading",wrapperStyle:o,wrapperClass:s,visible:d=!0})=>t.createElement("div",{style:{...H(d),...o},className:s,"aria-label":n,"data-testid":"revolving-dot-loading",...T},t.createElement("svg",{version:"1.1",width:`calc(${e} * 2.5)`,height:`calc(${e} * 2.5)`,xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px","data-testid":"revolving-dot-svg"},t.createElement("circle",{fill:"none",stroke:r||a,strokeWidth:i,cx:`calc(${e} * 1.28)`,cy:`calc(${e} * 1.28)`,r:e,style:{opacity:.5}}),t.createElement("circle",{fill:a,stroke:a,strokeWidth:"3",cx:`calc(${e} * 1.28)`,cy:`calc(${e} / 3.5)`,r:`calc(${e} / 5)`,style:{transformOrigin:"50% 50%"}},t.createElement("animateTransform",{attributeName:"transform",dur:"2s",type:"rotate",from:"0",to:"360",repeatCount:"indefinite"}))));var Ei={};S(Ei,"Puff",()=>ki);const ki=({height:e=80,width:i=80,radius:a=1,color:r=D,ariaLabel:n="puff-loading",wrapperStyle:o,wrapperClass:s,visible:d=!0})=>t.createElement("div",{style:{...H(d),...o},className:s,"data-testid":"puff-loading","aria-label":n,...T},t.createElement("svg",{width:i,height:e,viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",stroke:r,"data-testid":"puff-svg"},t.createElement("g",{fill:"none",fillRule:"evenodd",strokeWidth:"2"},t.createElement("circle",{cx:"22",cy:"22",r:a},t.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),t.createElement("animate",{attributeName:"strokeOpacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})),t.createElement("circle",{cx:"22",cy:"22",r:a},t.createElement("animate",{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),t.createElement("animate",{attributeName:"strokeOpacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})))));var Ci={};S(Ci,"Oval",()=>Si);const rt=20,$i=e=>["M"+e+" 0c0-9.94-8.06",e,e,e].join("-"),Ni=(e,i,a)=>{const r=Math.max(e,i),n=-a-r/2+1,o=a*2+r;return[n,n,o,o].join(" ")},Si=({height:e=80,width:i=80,color:a=D,secondaryColor:r=D,ariaLabel:n="oval-loading",wrapperStyle:o,wrapperClass:s,visible:d=!0,strokeWidth:p=2,strokeWidthSecondary:m})=>t.createElement("div",{style:{...H(d),...o},className:s,"data-testid":"oval-loading","aria-label":n,...T},t.createElement("svg",{width:i,height:e,viewBox:Ni(Number(p),Number(m||p),rt),xmlns:"http://www.w3.org/2000/svg",stroke:a,"data-testid":"oval-svg"},t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("g",{transform:"translate(1 1)",strokeWidth:Number(m||p),"data-testid":"oval-secondary-group"},t.createElement("circle",{strokeOpacity:".5",cx:"0",cy:"0",r:rt,stroke:r,strokeWidth:p}),t.createElement("path",{d:$i(rt)},t.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 0 0",to:"360 0 0",dur:"1s",repeatCount:"indefinite"}))))));var Mi={};S(Mi,"MutatingDots",()=>Ti);const Ti=({height:e=90,width:i=80,radius:a=12.5,color:r=D,secondaryColor:n=D,ariaLabel:o="mutating-dots-loading",wrapperStyle:s,wrapperClass:d,visible:p=!0})=>t.createElement("div",{style:{...H(p),...s},className:d,"data-testid":"mutating-dots-loading","aria-label":o,...T},t.createElement("svg",{id:"goo-loader",width:i,height:e,"data-testid":"mutating-dots-svg"},t.createElement("filter",{id:"fancy-goo"},t.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"6",result:"blur"}),t.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"goo"}),t.createElement("feComposite",{in:"SourceGraphic",in2:"goo",operator:"atop"})),t.createElement("g",{filter:"url(#fancy-goo)"},t.createElement("animateTransform",{id:"mainAnim",attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 50 50",to:"359 50 50",dur:"1.2s",repeatCount:"indefinite"}),t.createElement("circle",{cx:"50%",cy:"40",r:a,fill:r},t.createElement("animate",{id:"cAnim1",attributeType:"XML",attributeName:"cy",dur:"0.6s",begin:"0;cAnim1.end+0.2s",calcMode:"spline",values:"40;20;40",keyTimes:"0;0.3;1",keySplines:"0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"})),t.createElement("circle",{cx:"50%",cy:"60",r:a,fill:n},t.createElement("animate",{id:"cAnim2",attributeType:"XML",attributeName:"cy",dur:"0.6s",begin:"0.4s;cAnim2.end+0.2s",calcMode:"spline",values:"60;80;60",keyTimes:"0;0.3;1",keySplines:"0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"})))));var ji={};S(ji,"LineWave",()=>Ai);const Ai=({wrapperStyle:e={},visible:i=!0,wrapperClass:a="",height:r=100,width:n=100,color:o=D,ariaLabel:s="line-wave-loading",firstLineColor:d,middleLineColor:p,lastLineColor:m})=>t.createElement("div",{style:{...H(i),...e},className:a,"data-testid":"line-wave-wrapper","aria-label":s,...T},t.createElement("svg",{version:"1.1",height:`${r}`,width:`${n}`,xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0",xmlSpace:"preserve","data-testid":"line-wave-svg"},t.createElement("rect",{x:"20",y:"50",width:"4",height:"10",fill:d||o},t.createElement("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0",dur:"0.6s",repeatCount:"indefinite"})),t.createElement("rect",{x:"30",y:"50",width:"4",height:"10",fill:p||o},t.createElement("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0.2s",dur:"0.6s",repeatCount:"indefinite"})),t.createElement("rect",{x:"40",y:"50",width:"4",height:"10",fill:m||o},t.createElement("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0.4s",dur:"0.6s",repeatCount:"indefinite"}))));var zi={};S(zi,"InfinitySpin",()=>Bi);const ne=242.776657104492,Li=1.6,Ri=bt`
  12.5% {
    stroke-dasharray: ${ne*.14}px, ${ne}px;
    stroke-dashoffset: -${ne*.11}px;
  }
  43.75% {
    stroke-dasharray: ${ne*.35}px, ${ne}px;
    stroke-dashoffset: -${ne*.35}px;
  }
  100% {
    stroke-dasharray: ${ne*.01}px, ${ne}px;
    stroke-dashoffset: -${ne*.99}px;
  }
`,Ii=ze.path`
  stroke-dasharray: ${ne*.01}px, ${ne};
  stroke-dashoffset: 0;
  animation: ${Ri} ${Li}s linear infinite;
`,Bi=({color:e=D,width:i="200"})=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:`${i}`,height:`${Number(i)*.5}`,viewBox:`0 0 ${i} 100`,"data-testid":"infinity-spin"},t.createElement(Ii,{"data-testid":"infinity-spin-path-1",stroke:e,fill:"none",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"}),t.createElement("path",{"data-testid":"infinity-spin-path-2",opacity:"0.07",fill:"none",stroke:e,strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"}));var Di={};S(Di,"Hearts",()=>Pi);const Pi=({height:e=80,width:i=80,color:a=D,ariaLabel:r="hearts-loading",wrapperStyle:n,wrapperClass:o,visible:s=!0})=>t.createElement("div",{style:{...H(s),...n},className:o,"data-testid":"hearts-loading","aria-label":r,...T},t.createElement("svg",{width:i,height:e,viewBox:"0 0 140 64",xmlns:"http://www.w3.org/2000/svg",fill:a,"data-testid":"hearts-svg"},t.createElement("path",{d:"M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",attributeName:"fill-opacity",from:"0",to:".5"},t.createElement("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1.4s",values:"0.5;1;0.5",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("path",{d:"M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",attributeName:"fill-opacity",from:"0",to:".5"},t.createElement("animate",{attributeName:"fill-opacity",begin:"0.7s",dur:"1.4s",values:"0.5;1;0.5",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("path",{d:"M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"})));var Wi={};S(Wi,"Grid",()=>Fi);const Fi=({height:e=80,width:i=80,radius:a=12.5,color:r=D,ariaLabel:n="grid-loading",wrapperStyle:o,wrapperClass:s,visible:d=!0})=>t.createElement("div",{style:{...H(d),...o},className:s,"data-testid":"grid-loading","aria-label":n,...T},t.createElement("svg",{width:i,height:e,viewBox:"0 0 105 105",fill:r,"data-testid":"grid-svg"},t.createElement("circle",{cx:"12.5",cy:"12.5",r:`${a}`},t.createElement("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("circle",{cx:"12.5",cy:"52.5",r:`${a}`},t.createElement("animate",{attributeName:"fill-opacity",begin:"100ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("circle",{cx:"52.5",cy:"12.5",r:`${a}`},t.createElement("animate",{attributeName:"fill-opacity",begin:"300ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("circle",{cx:"52.5",cy:"52.5",r:`${a}`},t.createElement("animate",{attributeName:"fill-opacity",begin:"600ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("circle",{cx:"92.5",cy:"12.5",r:`${a}`},t.createElement("animate",{attributeName:"fill-opacity",begin:"800ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("circle",{cx:"92.5",cy:"52.5",r:`${a}`},t.createElement("animate",{attributeName:"fill-opacity",begin:"400ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("circle",{cx:"12.5",cy:"92.5",r:`${a}`},t.createElement("animate",{attributeName:"fill-opacity",begin:"700ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("circle",{cx:"52.5",cy:"92.5",r:`${a}`},t.createElement("animate",{attributeName:"fill-opacity",begin:"500ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("circle",{cx:"92.5",cy:"92.5",r:`${a}`},t.createElement("animate",{attributeName:"fill-opacity",begin:"200ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"}))));var Oi={};S(Oi,"CirclesWithBar",()=>_i);const _i=({wrapperStyle:e={},visible:i=!0,wrapperClass:a="",height:r=100,width:n=100,color:o=D,outerCircleColor:s,innerCircleColor:d,barColor:p,ariaLabel:m="circles-with-bar-loading"})=>t.createElement("div",{style:{...H(i),...e},className:a,"aria-label":m,...T,"data-testid":"circles-with-bar-wrapper"},t.createElement("svg",{version:"1.1",id:"L1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",height:`${r}`,width:`${n}`,viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve","data-testid":"circles-with-bar-svg"},t.createElement("circle",{fill:"none",stroke:`${s||o}`,strokeWidth:"6",strokeMiterlimit:"15",strokeDasharray:"14.2472,14.2472",cx:"50",cy:"50",r:"47"},t.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"5s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})),t.createElement("circle",{fill:"none",stroke:`${d||o}`,strokeWidth:"1",strokeMiterlimit:"10",strokeDasharray:"10,10",cx:"50",cy:"50",r:"39"},t.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"5s",from:"0 50 50",to:"-360 50 50",repeatCount:"indefinite"})),t.createElement("g",{fill:`${p||o}`,"data-testid":"circles-with-bar-svg-bar"},t.createElement("rect",{x:"30",y:"35",width:"5",height:"30"},t.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.1"})),t.createElement("rect",{x:"40",y:"35",width:"5",height:"30"},t.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.2"})),t.createElement("rect",{x:"50",y:"35",width:"5",height:"30"},t.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.3"})),t.createElement("rect",{x:"60",y:"35",width:"5",height:"30"},t.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.4"})),t.createElement("rect",{x:"70",y:"35",width:"5",height:"30"},t.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.5"})))));var Gi={};S(Gi,"Circles",()=>Yi);const Yi=({height:e=80,width:i=80,color:a=D,ariaLabel:r="circles-loading",wrapperStyle:n,wrapperClass:o,visible:s=!0})=>t.createElement("div",{style:{...H(s),...n},className:o,"aria-label":r,"data-testid":"circles-loading",...T},t.createElement("svg",{width:i,height:e,viewBox:"0 0 135 135",xmlns:"http://www.w3.org/2000/svg",fill:a,"data-testid":"circles-svg"},t.createElement("path",{d:"M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z"},t.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 67 67",to:"-360 67 67",dur:"2.5s",repeatCount:"indefinite"})),t.createElement("path",{d:"M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z"},t.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 67 67",to:"360 67 67",dur:"8s",repeatCount:"indefinite"}))));var Hi={};S(Hi,"Bars",()=>Vi);const Vi=({height:e=80,width:i=80,color:a=D,ariaLabel:r="bars-loading",wrapperStyle:n,wrapperClass:o,visible:s=!0})=>t.createElement("div",{style:{...H(s),...n},className:o,"data-testid":"bars-loading","aria-label":r,...T},t.createElement("svg",{width:i,height:e,fill:a,viewBox:"0 0 135 140",xmlns:"http://www.w3.org/2000/svg","data-testid":"bars-svg"},t.createElement("rect",{y:"10",width:"15",height:"120",rx:"6"},t.createElement("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),t.createElement("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("rect",{x:"30",y:"10",width:"15",height:"120",rx:"6"},t.createElement("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),t.createElement("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("rect",{x:"60",width:"15",height:"140",rx:"6"},t.createElement("animate",{attributeName:"height",begin:"0s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),t.createElement("animate",{attributeName:"y",begin:"0s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("rect",{x:"90",y:"10",width:"15",height:"120",rx:"6"},t.createElement("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),t.createElement("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("rect",{x:"120",y:"10",width:"15",height:"120",rx:"6"},t.createElement("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),t.createElement("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"}))));var Xi={};S(Xi,"BallTriangle",()=>qi);const qi=({height:e=100,width:i=100,radius:a=5,color:r=D,ariaLabel:n="ball-triangle-loading",wrapperClass:o,wrapperStyle:s,visible:d=!0})=>t.createElement("div",{style:{...H(d),...s},className:o,"data-testid":"ball-triangle-loading","aria-label":n,...T},t.createElement("svg",{height:e,width:i,stroke:r,viewBox:"0 0 57 57",xmlns:"http://www.w3.org/2000/svg","data-testid":"ball-triangle-svg"},t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("g",{transform:"translate(1 1)",strokeWidth:"2"},t.createElement("circle",{cx:"5",cy:"50",r:a},t.createElement("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),t.createElement("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("circle",{cx:"27",cy:"5",r:a},t.createElement("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),t.createElement("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("circle",{cx:"49",cy:"50",r:a},t.createElement("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),t.createElement("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"}))))));var Ui={};S(Ui,"Audio",()=>Zi);const Zi=({height:e="100",width:i="100",color:a=D,ariaLabel:r="audio-loading",wrapperStyle:n={},wrapperClass:o,visible:s=!0})=>t.createElement("div",{style:{...H(s),...n},className:o,"data-testid":"audio-loading","aria-label":r,...T},t.createElement("svg",{height:`${e}`,width:`${i}`,fill:a,viewBox:"0 0 55 80",xmlns:"http://www.w3.org/2000/svg","data-testid":"audio-svg"},t.createElement("g",{transform:"matrix(1 0 0 -1 0 80)"},t.createElement("rect",{width:"10",height:"20",rx:"3"},t.createElement("animate",{attributeName:"height",begin:"0s",dur:"4.3s",values:"20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("rect",{x:"15",width:"10",height:"80",rx:"3"},t.createElement("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"80;55;33;5;75;23;73;33;12;14;60;80",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("rect",{x:"30",width:"10",height:"50",rx:"3"},t.createElement("animate",{attributeName:"height",begin:"0s",dur:"1.4s",values:"50;34;78;23;56;23;34;76;80;54;21;50",calcMode:"linear",repeatCount:"indefinite"})),t.createElement("rect",{x:"45",width:"10",height:"30",rx:"3"},t.createElement("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"30;45;13;80;56;72;45;76;34;23;67;30",calcMode:"linear",repeatCount:"indefinite"})))));var Qi={};S(Qi,"DNA",()=>Ki);const Ki=({visible:e=!0,width:i="80",height:a="80",wrapperClass:r="",wrapperStyle:n={},ariaLabel:o="dna-loading"})=>e?t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:i,height:a,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:r,style:n,"aria-label":o,"data-testid":"dna-svg",...T},t.createElement("circle",{cx:"6.451612903225806",cy:"60.6229",r:"3.41988",fill:"rgba(233, 12, 89, 0.5125806451612902)"},t.createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-0.5s"}),t.createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"0s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t.createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-0.5s"})),t.createElement("circle",{cx:"6.451612903225806",cy:"39.3771",r:"2.58012",fill:"#46dff0"},t.createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.5s"}),t.createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t.createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-0.5s"})),t.createElement("circle",{cx:"16.129032258064512",cy:"68.1552",r:"3.17988",fill:"rgba(233, 12, 89, 0.5125806451612902)"},t.createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-0.7s"}),t.createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-0.2s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t.createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-0.7s"})),t.createElement("circle",{cx:"16.129032258064512",cy:"31.8448",r:"2.82012",fill:"#46dff0"},t.createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.7s"}),t.createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.2s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t.createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-0.7s"})),t.createElement("circle",{cx:"25.806451612903224",cy:"69.3634",r:"2.93988",fill:"rgba(233, 12, 89, 0.5125806451612902)"},t.createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-0.9s"}),t.createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-0.4s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t.createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-0.9s"})),t.createElement("circle",{cx:"25.806451612903224",cy:"30.6366",r:"3.06012",fill:"#46dff0"},t.createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.9s"}),t.createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.4s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t.createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-0.9s"})),t.createElement("circle",{cx:"35.48387096774193",cy:"65.3666",r:"2.69988",fill:"rgba(233, 12, 89, 0.5125806451612902)"},t.createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.1s"}),t.createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-0.6s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t.createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-1.1s"})),t.createElement("circle",{cx:"35.48387096774193",cy:"34.6334",r:"3.30012",fill:"#46dff0"},t.createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-2.1s"}),t.createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.6s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t.createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-1.1s"})),t.createElement("circle",{cx:"45.16129032258064",cy:"53.8474",r:"2.45988",fill:"rgba(233, 12, 89, 0.5125806451612902)"},t.createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.3s"}),t.createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-0.8s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t.createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-1.3s"})),t.createElement("circle",{cx:"45.16129032258064",cy:"46.1526",r:"3.54012",fill:"#46dff0"},t.createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-2.3s"}),t.createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.8s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t.createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-1.3s"})),t.createElement("circle",{cx:"54.838709677419345",cy:"39.3771",r:"2.58012",fill:"rgba(233, 12, 89, 0.5125806451612902)"},t.createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.5s"}),t.createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t.createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-1.5s"})),t.createElement("circle",{cx:"54.838709677419345",cy:"60.6229",r:"3.41988",fill:"#46dff0"},t.createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-2.5s"}),t.createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-2s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t.createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-1.5s"})),t.createElement("circle",{cx:"64.51612903225805",cy:"31.8448",r:"2.82012",fill:"rgba(233, 12, 89, 0.5125806451612902)"},t.createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.7s"}),t.createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.2s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t.createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-1.7s"})),t.createElement("circle",{cx:"64.51612903225805",cy:"68.1552",r:"3.17988",fill:"#46dff0"},t.createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-2.7s"}),t.createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-2.2s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t.createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-1.7s"})),t.createElement("circle",{cx:"74.19354838709677",cy:"30.6366",r:"3.06012",fill:"rgba(233, 12, 89, 0.5125806451612902)"},t.createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.9s"}),t.createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.4s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t.createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-1.9s"})),t.createElement("circle",{cx:"74.19354838709677",cy:"69.3634",r:"2.93988",fill:"#46dff0"},t.createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-2.9s"}),t.createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-2.4s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t.createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-1.9s"})),t.createElement("circle",{cx:"83.87096774193547",cy:"34.6334",r:"3.30012",fill:"rgba(233, 12, 89, 0.5125806451612902)"},t.createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-2.1s"}),t.createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.6s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t.createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-2.1s"})),t.createElement("circle",{cx:"83.87096774193547",cy:"65.3666",r:"2.69988",fill:"#46dff0"},t.createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-3.1s"}),t.createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-2.6s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t.createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-2.1s"})),t.createElement("circle",{cx:"93.54838709677418",cy:"46.1526",r:"3.54012",fill:"rgba(233, 12, 89, 0.5125806451612902)"},t.createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-2.3s"}),t.createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.8s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t.createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-2.3s"})),t.createElement("circle",{cx:"93.54838709677418",cy:"53.8474",r:"2.45988",fill:"#46dff0"},t.createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-3.3s"}),t.createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-2.8s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t.createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-2.3s"}))):null,Ji=f.div`
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
`,en=f.div`
  @media (min-width: 834px) {
    display: flex;
    gap: 40px;
    align-items: center;
    margin-bottom: 16px;
  }
`,tn=f.p`
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
`,an=f.p`
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
`,Tt=f.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`,rn=f.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`,nn=f.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  display: flex;
  gap: 4px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    margin-bottom: 0px;
  }
`,ea=f.svg`
  width: 16px;
  height: 16px;
  stroke: #0f0f0f;

  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`,sn=f.button`
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
    & > ${ea} {
      stroke: #ffffff;
    }
  }
`,on=f.div`
  width: 80px;
  height: 192px;
  border-radius: 20px;
  background-color: #292928;
  padding: 8px;

  position: relative;
`,ln=f.div`
  width: 64px;
  height: ${e=>`${(e.height===!1?0:e.height)/100*128}px`};
  max-height: 128px;
  border-radius: 20px;
  background-color: #b6c3ff;

  position: absolute;
  bottom: 8px;
`,cn=f.div`
  @media (max-width: 833px) {
    width: 300px;
  }

  @media (min-width: 834px) {
    width: 380px;
  }

  @media (min-width: 1440px) {
    width: 444px;
  }
`,dn=f.svg`
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
`,mn=f.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.37;
  text-align: center;
  color: #b6c3ff;

  position: absolute;
  top: 28px;
  left: 22px;
`,un=f.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 24px;

  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,pn=f.form`
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
`,fn=f.input`
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
`,hn=f.label`
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
`,gn=f.button`
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
`,bn=f.button`
  ${pa}
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
`,xn=f(jt)`
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
`;jt.setAppElement("#root");const yn=({open:e,close:i})=>{const[a,r]=F.useState(!1),n=Te(),o=async s=>{s.preventDefault(),r(!0);const p=s.currentTarget.elements.water.value;if(p.trim()===""){r(!1);return}await n(ia(p)),i(),r(!1)};return c.jsxs(xn,{isOpen:e,onRequestClose:i,contentLabel:"Example Modal",overlayClassName:"Overlay",children:[c.jsx(un,{children:"Add water intake"}),c.jsxs("div",{children:[c.jsxs(pn,{onSubmit:o,children:[c.jsxs(hn,{children:["How much water",c.jsx(fn,{type:"number",name:"water",placeholder:"Enter milliliters",autoComplete:"off",max:7e3})]}),c.jsx(gn,{type:"submit",children:"Confirm"})]}),c.jsx(bn,{onClick:i,children:"Cancel"})]}),a&&c.jsx(dt,{})]})},vn=e=>e.water.waterIntake,wn=()=>{const e=Te(),[i,a]=F.useState(!1),[r,n]=F.useState(!1),{user:o}=Oe(),s=_e(vn),d=o.water;function p(){n(!0)}function m(){n(!1)}function $(A,v){return A-v<0?0:Math.round(A-v)}function y(A,v){return v/A*100>=100?100:Math.round(v/A*100)}async function M(){try{a(!0),await e(na()),At.success("Water consumption has been successfully reset")}finally{a(!1)}}return c.jsxs(c.Fragment,{children:[c.jsxs(cn,{children:[c.jsx(mt,{children:"Water"}),c.jsxs(Ji,{children:[c.jsxs(on,{children:[c.jsxs(mn,{children:[y(d,s)," %"]}),c.jsx(ln,{height:y(d,s)||0})]}),c.jsxs("div",{children:[c.jsx(dn,{onClick:M,children:c.jsx("use",{href:`${xe}#trash`})}),i&&c.jsx(dt,{}),c.jsx(tn,{children:"Water consumption"}),c.jsxs(en,{children:[c.jsxs(an,{children:[s," ",c.jsx(Tt,{children:"ml"})]}),c.jsxs(nn,{children:["left:"," ",c.jsx(rn,{children:$(d,s)})," ",c.jsx(Tt,{children:"ml"})]})]}),c.jsxs(sn,{onClick:p,disabled:i,children:[c.jsx(ea,{children:c.jsx("use",{href:`${xe}#add`})}),"Add water intake"]})]})]})]}),c.jsx(yn,{open:r,close:m})]})},En=f.li`
  @media screen and (${e=>e.theme.mq.tabMin}) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,kn=f.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: ${e=>e.theme.colors.primaryWhite};

  @media screen and (${e=>e.theme.mq.tabMin}) {
    margin-bottom: 0px;
  }
`,Cn=f.h3`
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 24px;
`,$n=f.div`
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
`,Nn=f.p`
  min-width: 190px;
`,Sn=f.p`
  width: 110px;
`,Mn=f.p`
  width: 60px;
`,it=f.span`
  color: ${e=>e.theme.colors.primaryGray};
  font-weight: ${e=>e.theme.fontWeights.medium};
`,Tn=f.img`
  width: 36px;
  height: 36px;
`,jn=f.button`
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
`,An=f.svg`
  width: 20px;
  height: 20px;
  stroke: #e3ffa8;
  cursor: pointer;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  :focus {
    transform: scale(1.2);
  }
`,Ne=({title:e,image:i,info:a})=>{const[r,n]=F.useState(!1),[o,s]=F.useState(!1),d=Te(),p=()=>s(!o),m=e.toLowerCase();async function $(v){n(!0),await d(sa(v)),await d(zt()),await d(Lt(De)),At.success("The meal intake has been successfully removed."),n(!1)}const{carbohidrates:y,protein:M,fat:A}=a;return c.jsxs(En,{children:[r&&c.jsx(dt,{}),c.jsxs(kn,{children:[c.jsx(Tn,{src:i,alt:"Plate"}),c.jsx(Cn,{children:e})]}),y!==0||M!==0||A!==0?c.jsxs($n,{children:[c.jsxs(Nn,{children:["Carbonohidrates: ",c.jsx(it,{children:y})]}),c.jsxs(Sn,{children:["Protein: ",c.jsx(it,{children:M})]}),c.jsxs(Mn,{children:["Fat: ",c.jsx(it,{children:A})]}),c.jsx(An,{onClick:()=>{$(m)},children:c.jsx("use",{href:`${xe}#trash`})})]}):c.jsx(jn,{onClick:p,children:"+ Record your meal"}),o&&c.jsx(la,{onClose:p,image:i,mealType:e})]})};Ne.propTypes={title:ge.string.isRequired,image:ge.string.isRequired,info:ge.shape({carbohidrates:ge.number.isRequired,protein:ge.number.isRequired,fat:ge.number.isRequired})};const zn=f.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`,Ln=f.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`,Rn=f.h2`
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: ${e=>e.theme.fontSizes.m};
  line-height: 24px;

  @media screen and (${e=>e.theme.mq.tabMin}) {
    font-size: ${e=>e.theme.fontSizes.l};
    line-height: 32px;
  }
`,In=f(Rt)`
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
`,Bn=f.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`,Dn=()=>{Te();const e=_e(je),[i,a]=F.useState([]),[r,n]=F.useState([]),[o,s]=F.useState([]),[d,p]=F.useState([]);return F.useEffect(()=>{e&&(a(e.foodIntake.lunch),n(e.foodIntake.breakfast),s(e.foodIntake.dinner),p(e.foodIntake.snack))},[e]),c.jsxs(zn,{children:[c.jsxs(Ln,{children:[c.jsx(Rn,{children:"Diary"}),c.jsx(In,{to:"/diary",children:"See more"})]}),c.jsxs(Bn,{children:[c.jsx(Ne,{title:"Breakfast",image:ca,info:Re(r)}),c.jsx(Ne,{title:"Lunch",image:da,info:Re(i)}),c.jsx(Ne,{title:"Dinner",image:ma,info:Re(o)}),c.jsx(Ne,{title:"Snack",image:ua,info:Re(d)})]})]})},Pn=e=>F.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},F.createElement("g",{id:"vuesax/linear/arrow-right"},F.createElement("g",{id:"arrow-right"},F.createElement("path",{id:"Vector",d:"M9.62012 3.95312L13.6668 7.99979L9.62012 12.0465",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),F.createElement("path",{id:"Vector_2",d:"M2.33301 8H13.553",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"})))),Wn=f.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }
`,Fn=f.h2`
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
`,On=f.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,ta=f(Rt)`
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
`,_n=f(Pn)`
  stroke: ${e=>e.theme.colors.primaryGray};
  transition: ${e=>e.theme.transition.customTrans};

  ${ta}:hover & {
    stroke: ${e=>e.theme.colors.primaryWhite};
  }
`,Gn=()=>{const[e,i]=F.useState([]);return F.useEffect(()=>{fa().then(a=>{i(ha(a))}).catch(a=>console.log(a))},[]),c.jsxs(Wn,{children:[c.jsx(Fn,{children:"Recommended food"}),c.jsx(On,{children:e.map(({_id:a,img:r,name:n,amount:o,calories:s})=>c.jsx(ga,{id:a,img:r,name:n,amount:o,calories:s},a))}),c.jsxs(ta,{to:"/recommended-food",children:["See more",c.jsx(_n,{})]})]})},Un=()=>{const e=Te();return F.useEffect(()=>{e(zt(De)),e(oa(De)),e(Lt(De))},[e]),c.jsxs(_a,{children:[c.jsxs("div",{className:"container",children:[c.jsxs(Pa,{children:[c.jsx(Wa,{children:"Today"}),c.jsx(Fa,{to:"/dashboard",children:c.jsxs(Oa,{children:["On the way to the goal",c.jsx(Da,{children:c.jsx("use",{href:`${xe}#arrow-right`})})]})})]}),c.jsxs(Ia,{children:[c.jsxs(Ba,{children:[c.jsx(Ea,{}),c.jsx(wn,{})]}),c.jsx(Ra,{})]})]}),c.jsx("div",{className:"container",children:c.jsxs(Ga,{children:[c.jsx(Dn,{}),c.jsx(Gn,{})]})})]})};export{Un as default};
