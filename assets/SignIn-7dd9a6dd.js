import{x as m,z as a,u as d,a as p,J as _,O as g,a0 as h,j as s,Q as b,Z as x,I as j,L as i}from"./index-ccee6cb1.js";import{u as w}from"./useAuthResetError-525cf6a8.js";const f=()=>m({email:a().email("Invalid email address").required("Required field"),password:a().min(8).required("Required field")}),q="_wrapper_1oeub_2",N="_img_1oeub_9",S="_title_1oeub_15",B="_subtitle_1oeub_23",v="_form_1oeub_31",y="_error_1oeub_37",k="_signinBtn_1oeub_42",I="_forgotPassword_1oeub_63",E="_question_1oeub_76",F="_signupBtn_1oeub_83",P="_content_1oeub_107",R="_questionTrumb_1oeub_153",e={wrapper:q,img:N,title:S,subtitle:B,form:v,error:y,signinBtn:k,forgotPassword:I,question:E,signupBtn:F,content:P,questionTrumb:R},T=()=>{const c=d(),t=p(_),l=[{name:"email",placeholder:"E-mail",type:"text"},{name:"password",placeholder:"Password",type:"password"}],{resetAuthError:n}=w(),r=g({initialValues:{email:"",password:""},validationSchema:f(),onSubmit:o=>{try{c(h(o))}catch(u){console.error("Registration failed:",u.message)}}});return s.jsxs("div",{className:"container",children:[t&&t.type==="login"&&s.jsx(b,{children:t.message}),s.jsxs("div",{className:e.wrapper,children:[s.jsx("img",{className:e.img,src:x,alt:"illustration-sport-and-fitness-tracker"}),s.jsxs("div",{className:e.content,children:[s.jsx("h1",{className:e.title,children:"Sign in"}),s.jsx("h2",{className:e.subtitle,children:"You need to login to use the service"}),s.jsxs("form",{className:e.form,onSubmit:r.handleSubmit,children:[l.map(o=>s.jsx(j,{formik:r,id:o.name.toLowerCase(),type:o.type,placeholder:o.placeholder,label:o.label,onBlur:()=>r.handleBlur({target:{name:o.name}}),showError:!0},o.name)),s.jsx("button",{className:e.signinBtn,type:"submit",children:"Sign in"}),s.jsx(i,{className:e.forgotPassword,to:"/forgot-password",onClick:n,children:"Forgot your password?"})]}),s.jsxs("div",{className:e.questionTrumb,children:[s.jsx("p",{className:e.question,children:" If you don't have an account yet? "}),s.jsx(i,{className:e.signupBtn,to:"/signup",onClick:n,children:"Sign up"})]})]})]})]})},L=()=>s.jsx("div",{children:s.jsx(T,{})});export{L as default};
