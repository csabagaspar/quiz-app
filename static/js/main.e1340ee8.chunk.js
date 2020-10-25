(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{82:function(e,t,a){e.exports=a(93)},93:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(0),c=a.n(r),l=a(8),u=a.n(l),i=a(18),o=a(143),m=a(144),s=a(131),d=a(141),f=a(142),E=a(72),v=a.n(E),g=a(71),p=a.n(g),h=a(54),b=a(43),C=Object(h.b)({name:"questions",initialState:{value:[]},reducers:{addQuestion:function(e,t){return{value:[].concat(Object(b.a)(e.value),[t.payload])}},removeQuestion:function(e,t){return{value:e.value.filter((function(e){return t.payload!==e.id}))}},loadQuestions:function(e,t){return{value:t.payload}}}}),x=C.actions,y=x.addQuestion,j=x.removeQuestion,w=function(e){return e.questions.value},A=C.reducer,O=function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log("error",a)}},q=function(e){return function(t){return function(a){var n=a.type,r=a.payload;if(n===y.type){var c=e.getState().questions.value;O({questions:{value:[].concat(Object(b.a)(c),[r])}})}if(n===j.type){var l=e.getState().questions.value.filter((function(e){return r!==e.id}));O({questions:{value:Object(b.a)(l)}})}return t(a)}}},k=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log("error",t)}}(),Q=Object(h.a)({reducer:{questions:A},middleware:function(e){return e({thunk:!1,immutableCheck:!1,serializableCheck:!1}).concat(q)},preloadedState:k}),S=a(129),W=c.a.createContext({username:null,updateUsername:function(e){},score:0,incrementScore:function(){},hasAnsweredCurrent:!1,toggleAnsweredCurrent:function(){},currentQuestionIndex:0,incrementCurrentQuestionIndex:function(){},restart:function(){}}),I=function(e){var t=e.children,a=c.a.useState((function(){return null})),r=Object(n.a)(a,2),l=r[0],u=r[1],i=c.a.useState((function(){return 0})),o=Object(n.a)(i,2),m=o[0],s=o[1],d=c.a.useState((function(){return!1})),f=Object(n.a)(d,2),E=f[0],v=f[1],g=c.a.useState((function(){return 0})),p=Object(n.a)(g,2),h=p[0],b=p[1],C=function(){v((function(e){return!e}))};return c.a.createElement(W.Provider,{value:{username:l,updateUsername:function(e){u((function(){return e}))},score:m,incrementScore:function(){s((function(e){return++e}))},hasAnsweredCurrent:E,toggleAnsweredCurrent:C,currentQuestionIndex:h,incrementCurrentQuestionIndex:function(){C(),b((function(e){return++e}))},restart:function(){s(0),b(0),v(!1)}}},t)},D=a(134),F=a(132),M=a(133),V=a(148),z=a(126),N=Object(z.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)}}})),T=function(){var e=N(),t=c.a.useContext(W).updateUsername,a=c.a.useState((function(){return""})),r=Object(n.a)(a,2),l=r[0],u=r[1];return c.a.createElement(S.a,{component:"main",maxWidth:"xs"},c.a.createElement("div",{className:e.paper},c.a.createElement(s.a,{component:"h1",variant:"h5"},"Username"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(l)},className:e.form},c.a.createElement(F.a,{margin:"normal",required:!0,fullWidth:!0},c.a.createElement(V.a,{htmlFor:"username"},"Username"),c.a.createElement(M.a,{id:"username",name:"username",autoComplete:"username",autoFocus:!0,onChange:function(e){var t=e.currentTarget.value;u((function(){return t}))},value:l})),c.a.createElement(D.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Set"))))},B=a(149),U=a(136),J=a(135),G=Object(z.a)((function(e){return Object(B.a)({root:{display:"flex","& > *":{margin:e.spacing(1),width:e.spacing(20),height:e.spacing(10)}}})})),R=function(e){var t=e.value;return c.a.createElement(s.a,{variant:"subtitle1",component:"h2",align:"center"},"Username: ",t)},L=function(e){var t=e.value;return c.a.createElement(s.a,{variant:"subtitle2",component:"h2",align:"center"},"Score: ",t)},P=c.a.memo((function(){var e=G(),t=c.a.useContext(W),a=t.username,n=t.score;return c.a.useMemo((function(){return c.a.createElement(J.a,{container:!0,spacing:3,justify:"flex-end"},c.a.createElement(J.a,{item:!0,xs:3},c.a.createElement("div",{className:e.root},c.a.createElement(U.a,{variant:"outlined"},c.a.createElement(R,{value:a}),c.a.createElement(L,{value:n})))))}),[a,n])})),H=function(){var e=c.a.useContext(W).restart,t=c.a.useCallback((function(){return e()}),[e]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(J.a,{container:!0,spacing:3,justify:"center"},c.a.createElement(J.a,{item:!0,xs:5,style:{textAlign:"center"}},c.a.createElement(s.a,{component:"h1",variant:"h4"},"No more questions"))),c.a.createElement(J.a,{container:!0,spacing:3,justify:"center"},c.a.createElement(J.a,{item:!0,xs:3,style:{textAlign:"center"}},c.a.createElement(D.a,{onClick:t,variant:"contained",color:"primary",fullWidth:!0},"Restart"))))},K=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(J.a,{container:!0,spacing:3,justify:"center"},c.a.createElement(J.a,{item:!0,xs:5,style:{textAlign:"center"}},c.a.createElement(s.a,{component:"h1",variant:"h4"},"No questions"))))},X=a(145),Y=function(e){var t=e.answers,a=e.correct,r=c.a.useContext(W),l=r.hasAnsweredCurrent,u=r.toggleAnsweredCurrent,i=r.incrementScore,o=c.a.useState((function(){return""})),m=Object(n.a)(o,2),s=m[0],d=m[1],f=c.a.useCallback((function(e){var t=e.currentTarget.dataset.answer;d((function(){return t})),t===a&&i(),u()}),[a,i,u]);return c.a.createElement(c.a.Fragment,null,t.map((function(e,t){var n;return n=s&&e===a&&s===a?"rgba(0, 128, 0, 0.7)":s&&e===a&&s!==a?"rgba(255, 0, 0, 0.7)":s===e?"rgba(0, 0, 255, 0.7)":"rgba(0, 0, 0, 0.12)",c.a.createElement(J.a,{item:!0,xs:3,key:t,style:{textAlign:"center"}},l?c.a.createElement(D.a,{variant:"contained",disabled:!0,fullWidth:!0,style:{backgroundColor:"".concat(n)}},e):c.a.createElement(D.a,{variant:"contained","data-answer":e,fullWidth:!0,onClick:f},e))})))},Z=function(e){var t=e.questions,a=c.a.useContext(W),n=a.hasAnsweredCurrent,r=a.currentQuestionIndex,l=a.incrementCurrentQuestionIndex,u=c.a.useCallback((function(e){l()}),[l]);return c.a.createElement(J.a,{container:!0,spacing:3,alignItems:"center",justify:"center"},c.a.createElement(J.a,{item:!0,xs:12},c.a.createElement(X.a,{label:"Question",variant:"outlined",value:t[r].question,name:"question",fullWidth:!0})),c.a.createElement(Y,{answers:t[r].answers,correct:t[r].correct}),n&&c.a.createElement(J.a,{item:!0,xs:3,style:{textAlign:"center"}},c.a.createElement(D.a,{variant:"contained",onClick:u,color:"primary"},"Next")))},$=function(){var e=Object(i.c)(w),t=null===e||void 0===e?void 0:e.length,a=c.a.useContext(W),n=a.currentQuestionIndex,r=a.username,l=c.a.useMemo((function(){return n>=t}),[n,t]);return c.a.useMemo((function(){return c.a.createElement(S.a,{component:"main",maxWidth:"md"},c.a.createElement(s.a,{component:"h1",variant:"h4"},"Quiz game"),r?c.a.createElement(c.a.Fragment,null,c.a.createElement(P,null),0===t?c.a.createElement(K,null,null):l?c.a.createElement(H,null,null):c.a.createElement(Z,{questions:e},null)):c.a.createElement(T,null))}),[r,e,l])},_=a(32),ee=a(61),te=a(147),ae=a(146),ne=c.a.memo((function(e){var t=e.label,a=e.inputValue,n=e.name,r=e.checked,l=e.radioValue,u=e.handleChange;return c.a.createElement(J.a,{item:!0,xs:3},c.a.createElement(F.a,{required:!0,fullWidth:!0},c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(ae.a,{checked:r,onChange:function(e){u({correct:Number(e.target.value)})},value:l}),c.a.createElement(M.a,{placeholder:t,value:a,onChange:function(e){var t=e.currentTarget.value;u(Object(_.a)({},e.currentTarget.name,t))},name:n}))))})),re=c.a.memo((function(e){var t=e.label,a=e.value,n=e.correct;return c.a.createElement(J.a,{item:!0,xs:3},c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(ae.a,{checked:n===a,disabled:!0}),c.a.createElement(X.a,{label:t,variant:"outlined",value:a,disabled:!0,fullWidth:!0})))}));function ce(){var e=Object(i.b)(),t=c.a.useReducer((function(e,t){return Object(ee.a)(Object(ee.a)({},e),t)}),{question:"",A:"",B:"",C:"",D:"",correct:0}),a=Object(n.a)(t,2),r=a[0],l=r.question,u=r.A,o=r.B,m=r.C,d=r.D,f=r.correct,E=a[1],v=c.a.useCallback((function(t){t.preventDefault();var a=[u,o,m,d];e(y({id:Object(te.a)(),question:l,answers:a,correct:a[f]})),E({question:"",A:"",B:"",C:"",D:"",correct:0})}),[e,l,u,o,m,d,f]),g=c.a.useCallback((function(e){E(e)}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{component:"h1",variant:"h6"},"Add question"),c.a.createElement("form",{onSubmit:v},c.a.createElement(J.a,{container:!0,spacing:3},c.a.createElement(J.a,{item:!0,xs:12},c.a.createElement(F.a,{required:!0,fullWidth:!0},c.a.createElement(M.a,{autoFocus:!0,placeholder:"Question",value:l,onChange:function(e){var t=e.currentTarget.value;E(Object(_.a)({},e.currentTarget.name,t))},name:"question"}))),c.a.createElement(ne,{label:"Answer A",inputValue:u,name:"A",checked:0===f,radioValue:0,handleChange:g}),c.a.createElement(ne,{label:"Answer B",inputValue:o,name:"B",checked:1===f,radioValue:1,handleChange:g}),c.a.createElement(ne,{label:"Answer C",inputValue:m,name:"C",checked:2===f,radioValue:2,handleChange:g}),c.a.createElement(ne,{label:"Answer D",inputValue:d,name:"D",checked:3===f,radioValue:3,handleChange:g})),c.a.createElement(J.a,{container:!0,spacing:3,justify:"flex-end"},c.a.createElement(J.a,{item:!0,xs:3},c.a.createElement(D.a,{type:"submit",variant:"contained",color:"primary",size:"medium",fullWidth:!0},"Add")))))}var le=a(137),ue=a(139),ie=a(140),oe=a(138),me=a(69),se=a.n(me);function de(){var e=Object(i.c)(w),t=Object(i.b)(),a=c.a.useCallback((function(e){var a=e.currentTarget.dataset.id;a&&t(j(a))}),[t]);return(null===e||void 0===e?void 0:e.length)>0?c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{component:"h1",variant:"h6"},"Questions"),c.a.createElement(le.a,{dense:!1},e.map((function(e){return c.a.createElement(ue.a,{key:e.id},c.a.createElement(J.a,{container:!0,spacing:3},c.a.createElement(J.a,{item:!0,xs:12},c.a.createElement(X.a,{label:"Question",variant:"outlined",value:e.question,disabled:!0,fullWidth:!0})),c.a.createElement(re,{label:"Answer A",value:e.answers[0],correct:e.correct}),c.a.createElement(re,{label:"Answer B",value:e.answers[1],correct:e.correct}),c.a.createElement(re,{label:"Answer C",value:e.answers[2],correct:e.correct}),c.a.createElement(re,{label:"Answer D",value:e.answers[3],correct:e.correct})),c.a.createElement(ie.a,{"data-id":e.id,onClick:a,style:{right:"0"}},c.a.createElement(oe.a,{"aria-label":"Delete"},c.a.createElement(se.a,null))))})))):null}var fe,Ee=function(){return c.a.createElement(S.a,{component:"main",maxWidth:"md"},c.a.createElement(s.a,{component:"h1",variant:"h4"},"Manage questions"),c.a.createElement(de,null),c.a.createElement(ce,null))},ve=a(70),ge=a.n(ve),pe=a(73),he=Object(pe.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:ge.a.A400},background:{default:"#fff"}}});function be(){var e=c.a.useState((function(){return fe.ManageQuestions})),t=Object(n.a)(e,2),a=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{component:"h1",variant:"h3",align:"center"},"Quiz Application"),c.a.createElement(d.a,{value:a,onChange:function(e,t){r(t)},showLabels:!0},c.a.createElement(f.a,{label:"Manage questions",icon:c.a.createElement(p.a,null)}),c.a.createElement(f.a,{label:"Quiz game",icon:c.a.createElement(v.a,null)})),a===fe.ManageQuestions?c.a.createElement(Ee,null):c.a.createElement(I,null,c.a.createElement($,null)))}!function(e){e[e.ManageQuestions=0]="ManageQuestions",e[e.QuizGame=1]="QuizGame"}(fe||(fe={})),u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,{store:Q},c.a.createElement(o.a,{theme:he},c.a.createElement(m.a,null),c.a.createElement(be,null)))),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.e1340ee8.chunk.js.map