(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{82:function(e,t,a){e.exports=a(93)},93:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(0),c=a.n(r),l=a(8),u=a.n(l),i=a(18),o=a(143),s=a(144),m=a(131),d=a(141),f=a(142),E=a(72),v=a.n(E),g=a(71),p=a.n(g),h=a(53),b=a(42),C=Object(h.b)({name:"questions",initialState:{value:[]},reducers:{addQuestion:function(e,t){return{value:[].concat(Object(b.a)(e.value),[t.payload])}},removeQuestion:function(e,t){return{value:e.value.filter((function(e){return t.payload!==e.id}))}},loadQuestions:function(e,t){return{value:t.payload}}}}),x=C.actions,y=x.addQuestion,j=x.removeQuestion,w=function(e){return e.questions.value},A=C.reducer,q=function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log("error",a)}},O=function(e){return function(t){return function(a){var n=a.type,r=a.payload;if(n===y.type){var c=e.getState().questions.value;q({questions:{value:[].concat(Object(b.a)(c),[r])}})}if(n===j.type){var l=e.getState().questions.value.filter((function(e){return r!==e.id}));q({questions:{value:Object(b.a)(l)}})}return t(a)}}},Q=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log("error",t)}}(),S=Object(h.a)({reducer:{questions:A},middleware:function(e){return e({thunk:!1,immutableCheck:!1,serializableCheck:!1}).concat(O)},preloadedState:Q}),k=a(129),W=c.a.createContext({username:null,updateUsername:function(e){},score:0,incrementScore:function(){},hasAnsweredCurrent:!1,toggleAnsweredCurrent:function(){},currentQuestionIndex:0,incrementCurrentQuestionIndex:function(){},restart:function(){}}),D=function(e){var t=e.children,a=c.a.useState((function(){return null})),r=Object(n.a)(a,2),l=r[0],u=r[1],i=c.a.useState((function(){return 0})),o=Object(n.a)(i,2),s=o[0],m=o[1],d=c.a.useState((function(){return!1})),f=Object(n.a)(d,2),E=f[0],v=f[1],g=c.a.useState((function(){return 0})),p=Object(n.a)(g,2),h=p[0],b=p[1],C=function(){v((function(e){return!e}))};return c.a.createElement(W.Provider,{value:{username:l,updateUsername:function(e){u((function(){return e}))},score:s,incrementScore:function(){m((function(e){return++e}))},hasAnsweredCurrent:E,toggleAnsweredCurrent:C,currentQuestionIndex:h,incrementCurrentQuestionIndex:function(){C(),b((function(e){return++e}))},restart:function(){m(0),b(0),v(!1)}}},t)},I=a(134),V=a(132),B=a(133),T=a(148),N=a(126),z=Object(N.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)}}})),F=function(){var e=z(),t=c.a.useContext(W).updateUsername,a=c.a.useState((function(){return""})),r=Object(n.a)(a,2),l=r[0],u=r[1];return c.a.createElement(k.a,{component:"main",maxWidth:"xs"},c.a.createElement("div",{className:e.paper},c.a.createElement(m.a,{component:"h1",variant:"h5"},"Username"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(l)},className:e.form},c.a.createElement(V.a,{margin:"normal",required:!0,fullWidth:!0},c.a.createElement(T.a,{htmlFor:"username"},"Username"),c.a.createElement(B.a,{id:"username",name:"username",autoComplete:"username",autoFocus:!0,onChange:function(e){var t=e.currentTarget.value;u((function(){return t}))},value:l})),c.a.createElement(I.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Set"))))},M=a(149),U=a(136),J=a(135),G=Object(N.a)((function(e){return Object(M.a)({root:{display:"flex","& > *":{margin:e.spacing(1),width:e.spacing(20),height:e.spacing(10)}}})})),R=function(){var e=G(),t=c.a.useContext(W),a=t.username,n=t.score;return c.a.createElement(J.a,{container:!0,spacing:3,justify:"flex-end"},c.a.createElement(J.a,{item:!0,xs:3},c.a.createElement("div",{className:e.root},c.a.createElement(U.a,{variant:"outlined"},c.a.createElement(m.a,{variant:"subtitle1",component:"h2",align:"center"},"Username: ",a),c.a.createElement(m.a,{variant:"subtitle2",component:"h2",align:"center"},"Score: ",n)))))},L=function(){var e=c.a.useContext(W).restart;return c.a.createElement(c.a.Fragment,null,c.a.createElement(J.a,{container:!0,spacing:3,justify:"center"},c.a.createElement(J.a,{item:!0,xs:5,style:{textAlign:"center"}},c.a.createElement(m.a,{component:"h1",variant:"h4"},"No more questions"))),c.a.createElement(J.a,{container:!0,spacing:3,justify:"center"},c.a.createElement(J.a,{item:!0,xs:3,style:{textAlign:"center"}},c.a.createElement(I.a,{onClick:function(){return e()},variant:"contained",color:"primary",fullWidth:!0},"Restart"))))},P=a(145),H=function(e){var t=e.answers,a=e.correct,r=c.a.useContext(W),l=r.hasAnsweredCurrent,u=r.toggleAnsweredCurrent,i=r.incrementScore,o=c.a.useState((function(){return""})),s=Object(n.a)(o,2),m=s[0],d=s[1],f=function(e){var t=e.currentTarget.dataset.answer;d((function(){return t})),t===a&&i(),u()};return c.a.createElement(c.a.Fragment,null,t.map((function(e,t){var n;return n=m&&e===a&&m===a?"rgba(0, 128, 0, 0.7)":m&&e===a&&m!==a?"rgba(255, 0, 0, 0.7)":m===e?"rgba(0, 0, 255, 0.7)":"rgba(0, 0, 0, 0.12)",c.a.createElement(J.a,{item:!0,xs:3,key:t,style:{textAlign:"center"}},l?c.a.createElement(I.a,{variant:"contained",disabled:!0,fullWidth:!0,style:{backgroundColor:"".concat(n)}},e):c.a.createElement(I.a,{variant:"contained","data-answer":e,fullWidth:!0,onClick:f},e))})))},K=function(e){var t=e.questions,a=c.a.useContext(W),n=a.hasAnsweredCurrent,r=a.currentQuestionIndex,l=a.incrementCurrentQuestionIndex;return c.a.createElement(J.a,{container:!0,spacing:3,alignItems:"center",justify:"center"},c.a.createElement(J.a,{item:!0,xs:12},c.a.createElement(P.a,{label:"Question",variant:"outlined",value:t[r].question,name:"question",fullWidth:!0})),c.a.createElement(H,{answers:t[r].answers,correct:t[r].correct}),n&&c.a.createElement(J.a,{item:!0,xs:3,style:{textAlign:"center"}},c.a.createElement(I.a,{variant:"contained",onClick:function(e){l()},color:"primary"},"Next")))},X=function(){var e=Object(i.c)(w),t=c.a.useContext(W),a=t.currentQuestionIndex,n=t.username;return c.a.createElement(k.a,{component:"main",maxWidth:"md"},c.a.createElement(m.a,{component:"h1",variant:"h4"},"Quiz game"),n?c.a.createElement(c.a.Fragment,null,c.a.createElement(R,null),a>=e.length?c.a.createElement(L,null):c.a.createElement(K,{questions:e})):c.a.createElement(F,null))},Y=a(32),Z=a(62),$=a(147),_=a(146),ee=function(e){var t=e.label,a=e.inputValue,n=e.name,r=e.checked,l=e.radioValue,u=e.handleChange;return c.a.createElement(J.a,{item:!0,xs:3},c.a.createElement(V.a,{required:!0,fullWidth:!0},c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(_.a,{checked:r,onChange:function(e){u({correct:Number(e.target.value)})},value:l}),c.a.createElement(P.a,{label:t,variant:"outlined",value:a,onChange:function(e){var t=e.currentTarget.value;u(Object(Y.a)({},e.currentTarget.name,t))},name:n}))))},te=function(e){var t=e.label,a=e.value,n=e.correct;return c.a.createElement(J.a,{item:!0,xs:3},c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(_.a,{checked:n===a,disabled:!0}),c.a.createElement(P.a,{label:t,variant:"outlined",value:a,disabled:!0,fullWidth:!0})))};function ae(){var e=Object(i.b)(),t=c.a.useReducer((function(e,t){return Object(Z.a)(Object(Z.a)({},e),t)}),{question:"question",A:"A",B:"B",C:"C",D:"D",correct:0}),a=Object(n.a)(t,2),r=a[0],l=r.question,u=r.A,o=r.B,s=r.C,d=r.D,f=r.correct,E=a[1],v=function(e){E(e)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{component:"h1",variant:"h6"},"Add question"),c.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a=[u,o,s,d];e(y({id:Object($.a)(),question:l,answers:a,correct:a[f]})),E({question:"question",A:"A",B:"B",C:"C",D:"D",correct:0})},noValidate:!0,autoComplete:"off"},c.a.createElement(J.a,{container:!0,spacing:3},c.a.createElement(J.a,{item:!0,xs:12},c.a.createElement(V.a,{required:!0,fullWidth:!0},c.a.createElement(P.a,{label:"Question",variant:"outlined",value:l,onChange:function(e){var t=e.currentTarget.value;E(Object(Y.a)({},e.currentTarget.name,t))},name:"question"}))),c.a.createElement(ee,{label:"Answer A",inputValue:u,name:"A",checked:0===f,radioValue:0,handleChange:v}),c.a.createElement(ee,{label:"Answer B",inputValue:o,name:"B",checked:1===f,radioValue:1,handleChange:v}),c.a.createElement(ee,{label:"Answer C",inputValue:s,name:"C",checked:2===f,radioValue:2,handleChange:v}),c.a.createElement(ee,{label:"Answer D",inputValue:d,name:"D",checked:3===f,radioValue:3,handleChange:v})),c.a.createElement(J.a,{container:!0,spacing:3,justify:"flex-end"},c.a.createElement(J.a,{item:!0,xs:3},c.a.createElement(I.a,{type:"submit",variant:"contained",color:"primary",size:"medium",fullWidth:!0},"Add")))))}var ne=a(137),re=a(139),ce=a(140),le=a(138),ue=a(69),ie=a.n(ue);function oe(){var e=Object(i.c)(w),t=Object(i.b)(),a=function(e){var a=e.currentTarget.dataset.id;a&&t(j(a))};return(null===e||void 0===e?void 0:e.length)>0?c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{component:"h1",variant:"h6"},"Questions"),c.a.createElement(ne.a,{dense:!1},e.map((function(e){return c.a.createElement(re.a,{key:e.id},c.a.createElement(J.a,{container:!0,spacing:3},c.a.createElement(J.a,{item:!0,xs:12},c.a.createElement(P.a,{label:"Question",variant:"outlined",value:e.question,disabled:!0,fullWidth:!0})),c.a.createElement(te,{label:"Answer A",value:e.answers[0],correct:e.correct}),c.a.createElement(te,{label:"Answer B",value:e.answers[1],correct:e.correct}),c.a.createElement(te,{label:"Answer C",value:e.answers[2],correct:e.correct}),c.a.createElement(te,{label:"Answer D",value:e.answers[3],correct:e.correct})),c.a.createElement(ce.a,{"data-id":e.id,onClick:a},c.a.createElement(le.a,{"aria-label":"Delete"},c.a.createElement(ie.a,null))))})))):null}var se,me=function(){return c.a.createElement(k.a,{component:"main",maxWidth:"md"},c.a.createElement(m.a,{component:"h1",variant:"h4"},"Manage questions"),c.a.createElement(oe,null),c.a.createElement(ae,null))},de=a(70),fe=a.n(de),Ee=a(73),ve=Object(Ee.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:fe.a.A400},background:{default:"#fff"}}});function ge(){var e=c.a.useState((function(){return se.ManageQuestions})),t=Object(n.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",null,c.a.createElement(m.a,{component:"h1",variant:"h3",align:"center"},"Quiz Application"),c.a.createElement(d.a,{value:a,onChange:function(e,t){r(t)},showLabels:!0},c.a.createElement(f.a,{label:"Manage questions",icon:c.a.createElement(p.a,null)}),c.a.createElement(f.a,{label:"Quiz game",icon:c.a.createElement(v.a,null)})),a===se.ManageQuestions?c.a.createElement(me,null):c.a.createElement(D,null,c.a.createElement(X,null)))}!function(e){e[e.ManageQuestions=0]="ManageQuestions",e[e.Game=1]="Game"}(se||(se={})),u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,{store:S},c.a.createElement(o.a,{theme:ve},c.a.createElement(s.a,null),c.a.createElement(ge,null)))),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.75f0aa1c.chunk.js.map