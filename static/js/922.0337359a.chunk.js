"use strict";(self.webpackChunkweb_studio_react=self.webpackChunkweb_studio_react||[]).push([[922],{6587:function(e,a,o){o.d(a,{$:function(){return t}});var n=o(184),t=function(e){var a=e.children,o=e.className;return(0,n.jsx)("section",{className:o,children:a})}},8922:function(e,a,o){o.r(a),o.d(a,{default:function(){return x}});var n=o(2791),t=o(9439),c=o(6587),s=o(6123),l=o(9442),r=o(8506),m=o(1138),i=o(8402),d={form:"Form_form__e1yzW",formHeader:"Form_formHeader__D1ihv",formLabel:"Form_formLabel__alHO0",labelSpan:"Form_labelSpan__irQI0",modalFormInput:"Form_modalFormInput__gudz2",placeholderShown:"Form_placeholderShown__X5oux",modalFormIcon:"Form_modalFormIcon__JzBeq",labelComment:"Form_labelComment__Uzn03",textarea:"Form_textarea__TD5sz",labelCheckbox:"Form_labelCheckbox__JQx9a","input\u0421heckbox":"Form_input\u0421heckbox__tPhD4","icon\u0421heckbox":"Form_icon\u0421heckbox__0Wdoy",iconUse:"Form_iconUse__yOlQ3",blankCheckBox:"Form_blankCheckBox__R2ttP",checkBox:"Form_checkBox__hGDHc",spanContract:"Form_spanContract__AZd3p",ButtonSubmit:"Form_ButtonSubmit__q9Pxs",buttonDisabled:"Form_buttonDisabled__fCRfL"},h=o(184),_=function(e){var a=e.userName,o=e.setUserName,n=e.telephone,t=e.setTelephone,c=e.mail,l=e.postContent,_=e.setPostContent,u=e.setMail,b=e.agreed,x=e.setAgreed,p=e.loader,k=e.setLoader,f=e.disabled,j=e.setDisabled,N=e.onSubmit,C=function(e){var a=e.target,n=a.name,c=a.value,s=a.checked;switch(n){case"name":o(c);break;case"tel":t(c);break;case"email":u(c);break;case"comment":_(c);break;case"agreed":x(s);break;default:return}};return(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),k(!0),j(!0),N()},className:d.form,children:[(0,h.jsx)("b",{className:d.formHeader,children:"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u0438 \u0434\u0430\u043d\u043d\u044b\u0435, \u043c\u044b \u0432\u0430\u043c \u043f\u0435\u0440\u0435\u0437\u0432\u043e\u043d\u0438\u043c"}),(0,h.jsxs)("label",{className:d.formLabel,children:[(0,h.jsx)("span",{className:d.labelSpan,children:"\u0418\u043c\u044f"}),(0,h.jsx)("input",{className:"".concat(d.modalFormInput," ").concat(a?d.placeholderShown:""),type:"text",name:"name",value:a,onChange:C}),(0,h.jsx)(r.e,{className:d.modalFormIcon,iconId:"person",width:"18",height:"18"})]}),(0,h.jsxs)("label",{className:d.formLabel,children:[(0,h.jsx)("span",{className:d.labelSpan,children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),(0,h.jsx)("input",{className:"".concat(d.modalFormInput," ").concat(n?d.placeholderShown:""),type:"tel",name:"tel",value:n,onChange:C}),(0,h.jsx)(r.e,{className:d.modalFormIcon,iconId:"phone",width:"18",height:"18"})]}),(0,h.jsxs)("label",{className:d.formLabel,children:[(0,h.jsx)("span",{className:d.labelSpan,children:"\u041f\u043e\u0447\u0442\u0430"}),(0,h.jsx)("input",{className:"".concat(d.modalFormInput," ").concat(c?d.placeholderShown:""),type:"email",name:"email",value:c,onChange:C}),(0,h.jsx)(r.e,{className:d.modalFormIcon,iconId:"email",width:"18",height:"18"})]}),(0,h.jsxs)("label",{className:"".concat(d.formLabel," ").concat(d.labelComment),children:[(0,h.jsx)("span",{className:d.labelSpan,children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}),(0,h.jsx)("textarea",{className:"".concat(d.textarea," ").concat(d.hoverFocus),name:"comment",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",value:l,onChange:C})]}),(0,h.jsx)("input",{id:"agreement",className:d["input\u0421heckbox"],type:"checkbox",name:"agreed",checked:b,onChange:C}),(0,h.jsxs)("label",{className:d.labelCheckbox,htmlFor:"agreement",children:[(0,h.jsxs)("svg",{className:d["icon\u0421heckbox"],width:"15",height:"16",children:[(0,h.jsx)("use",{className:"".concat(d.iconUse," ").concat(b?"":d.blankCheckBox),href:"".concat(m.Z,"#blank-check-box")}),(0,h.jsx)("use",{className:"".concat(d.iconUse," ").concat(b?d.checkBox:""),href:"".concat(m.Z,"#check-box")})]}),(0,h.jsxs)("span",{className:d.labelSpan,children:["\u0421\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c \u0441 \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u043e\u0439 \u0438 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e"," ",(0,h.jsx)("span",{className:d.spanContract,children:"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430"})]})]}),(0,h.jsx)(s.z,{type:"submit",disabled:!b||f,className:"".concat(d.ButtonSubmit," ").concat(!b||f?d.buttonDisabled:""),children:p?(0,h.jsx)(i.NB,{visible:!0,height:"50",width:"50",ariaLabel:"blocks-loading",wrapperClass:"blocks-wrapper",colors:["#b7d1e6","#6eb1e7","#2196f3","#6eb1e7","#b7d1e6"]}):"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})},u={heroSection:"Hero_heroSection__2JBV2",heroTitle:"Hero_heroTitle__edyX1",heroBtn:"Hero_heroBtn__yz-dP",modal__backdrop:"Hero_modal__backdrop__lQfAI",modal__content:"Hero_modal__content__SvC9y",beckdropIsHidden:"Hero_beckdropIsHidden__ig5u2",btnClose:"Hero_btnClose__6ju0H",icon:"Hero_icon__OlEJm"},b=function(){var e=(0,n.useState)(!1),a=(0,t.Z)(e,2),o=a[0],m=a[1],i=(0,n.useState)(!0),d=(0,t.Z)(i,2),b=d[0],x=d[1],p=(0,n.useState)(!1),k=(0,t.Z)(p,2),f=k[0],j=k[1],N=(0,n.useState)(""),C=(0,t.Z)(N,2),S=C[0],F=C[1],g=(0,n.useState)(""),w=(0,t.Z)(g,2),I=w[0],v=w[1],B=(0,n.useState)(""),H=(0,t.Z)(B,2),Z=H[0],y=H[1],D=(0,n.useState)(""),L=(0,t.Z)(D,2),z=L[0],T=L[1],U=(0,n.useState)(!1),P=(0,t.Z)(U,2),A=P[0],J=P[1],Q=(0,n.useState)(!1),O=(0,t.Z)(Q,2),q=O[0],M=O[1],R=(0,n.useState)(!1),W=(0,t.Z)(R,2),X=W[0],$=W[1],E=function(){f||(j(!0),!1===o&&(m(!0),setTimeout((function(){x(!1),j(!1)}),150)),!0===o&&(x(!0),setTimeout((function(){m(!1),j(!1)}),300)))},G=function(){F(""),v(""),y(""),T(""),J(!1),M(!1),$(!1)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(c.$,{className:u.heroSection,children:[(0,h.jsx)("h1",{className:u.heroTitle,children:"\u042d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0431\u0438\u0437\u043d\u0435\u0441\u0430"}),(0,h.jsx)(s.z,{className:u.heroBtn,handleBtnClick:E,children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0443"})]}),o&&(0,h.jsxs)(l.u,{className:u,isHidden:b,children:[(0,h.jsx)(s.z,{className:u.btnClose,handleBtnClick:E,children:(0,h.jsx)(r.e,{className:u.icon,iconId:"modalClose",width:"11",height:"11"})}),(0,h.jsx)(_,{userName:S,setUserName:F,telephone:I,setTelephone:v,mail:Z,setMail:y,postContent:z,setPostContent:T,agreed:A,setAgreed:J,loader:q,setLoader:M,disabled:X,setDisabled:$,onSubmit:function(){setTimeout((function(){console.log("name: ".concat(S,", tel: ").concat(I,", email: ").concat(Z,", comment: ").concat(z,", Agreed: ").concat(A)),G()}),1e4)}})]})]})},x=function(){return(0,h.jsx)("main",{children:(0,h.jsx)(b,{})})}}}]);
//# sourceMappingURL=922.0337359a.chunk.js.map