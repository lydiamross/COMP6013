(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(e,t,n){"use strict";n.r(t);var c,r,i,a,o,s,j,d,b,u,l,h,O,p=n(1),x=n.n(p),f=n(26),m=n.n(f),g=n(6),v=n(4),w=n.p+"static/media/logo.db397de1.png",y=n(3),S=n(13),k=n(14),P=n(12),C=n.n(P),R=n(7),T=n(8),N="#000",I="#fff",_="#484848",E="rgb(12, 201, 94)",A="rgb(255,202,58)",B="rgb(238, 111, 45)",D="rgb(238, 111, 45, 0.5)",F=T.a.div(c||(c=Object(R.a)(["\n  color: ",";\n  background: ",";\n  padding: 10px;\n"])),_,D),q=T.a.div(r||(r=Object(R.a)(["\n  text-align: center;\n  font-family: Arial, Verdana, sans-serif;\n  display: grid;\n  grid-template-columns: 100px auto;\n  grid-template-rows: repeat(2, 40px);\n  grid-gap: 1em;\n"]))),H=T.a.button(i||(i=Object(R.a)(["\n  margin: 10px;\n  border: none;\n  padding: 10px;\n  border-radius: 10px;\n"]))),J=T.a.div(a||(a=Object(R.a)(["\n  margin: 10px;\n  padding: 10px;\n"]))),M=T.a.div(o||(o=Object(R.a)(["\n  margin: auto;\n  padding: 10px;\n  width: 40%;\n  align-content: center;\n  border-radius: 10px;\n  box-shadow: 0 0 5px 2px rgba(0, 0, 0, .3);\n\n  ","\n"])),(function(e){return e.showFront?"background: ".concat(I,";\n    color: ").concat(_,";"):"background: ".concat(_,";\n    color: ").concat(I,";")})),W=T.a.ul(s||(s=Object(R.a)(["\n  list-style: none;\n"]))),K=T.a.input(j||(j=Object(R.a)(["\n  border: none;\n  margin: 10px;\n  padding: 10px;\n"]))),Q=T.a.header(d||(d=Object(R.a)(["\n  grid-row: 1;\n  grid-column: 2;\n"]))),U=T.a.img(b||(b=Object(R.a)(["\n  width: 50px;\n"]))),z=T.a.nav(u||(u=Object(R.a)(["\n  text-align: left;\n  grid-row: 1;\n  grid-column: 1;\n"]))),L=T.a.section(l||(l=Object(R.a)(["\n  grid-row: 2;\n  grid-column: 2;\n"]))),V=T.a.div(h||(h=Object(R.a)(["\n  color: ",";\n  align-content: center;\n  border-radius: 10px;\n  margin: 20px;\n  padding: 10px;\n\n  a {\n    color: ","\n  }\n\n  ","\n"])),N,N,(function(e){return"now"===e.topicStatus&&"background: ".concat(B,";")||"thisWeek"===e.topicStatus&&"background: ".concat(A,";")||"nextWeek"===e.topicStatus&&"background: ".concat(E,";")})),G=T.a.div(O||(O=Object(R.a)(["\n  margin: 10px auto;\n  padding: 10px;\n  width: 40%;\n  align-content: center;\n  border-radius: 10px;\n  border-color: ",";\n  border-style: dashed;\n\n  &:hover {\n    color: ",";\n  }\n"])),I,I),X=function(e,t){var n=Object(p.useState)(1),c=Object(y.a)(n,2),r=c[0],i=c[1],a=Math.ceil(e.length/t);return{next:function(){return i((function(e){return Math.min(e+1,a+1)}))},previous:function(){return i((function(e){return Math.max(e-1,1)}))},currentData:function(){var n=(r-1)*t,c=n+t;return e.slice(n,c)},currentPage:r,maxPage:a}},Y=function(e,t){var n=Object(p.useState)(localStorage.getItem(e)||t),c=Object(y.a)(n,2),r=c[0],i=c[1];return Object(p.useEffect)((function(){localStorage.setItem(e,r)}),[e,r]),[r,i]},Z=n(0),$=function(e){var t=e.card,n=Object(p.useState)(!0),c=Object(y.a)(n,2),r=c[0],i=c[1],a=function(){i(!r)};return Object(Z.jsx)(J,{children:r?Object(Z.jsxs)("div",{children:[Object(Z.jsx)("p",{children:"Question"}),Object(Z.jsx)(M,{showFront:r,onClick:a,children:Object(Z.jsx)("h3",{children:t.question})})]}):Object(Z.jsxs)("div",{children:[Object(Z.jsx)("p",{children:"Answer"}),Object(Z.jsx)(M,{showFront:r,onClick:a,children:Object(Z.jsx)("h3",{children:t.answer})})]})},t._id)},ee=function(e){var t=e.topic;return Object(Z.jsxs)(G,{children:[Object(Z.jsx)("h4",{children:t.name}),Object(Z.jsx)("p",{children:t.description})]},t._id)},te=function(){var e=Object(p.useState)(!1),t=Object(y.a)(e,2),n=t[0],c=t[1];return Object(Z.jsxs)(z,{children:[Object(Z.jsx)(S.a,{onClick:function(){c(!n)},icon:k.a,size:"2x"}),n&&Object(Z.jsxs)(W,{children:[Object(Z.jsx)("li",{children:Object(Z.jsx)(g.b,{to:"/",children:"Topics"})}),Object(Z.jsx)("li",{children:Object(Z.jsx)(g.b,{to:"/about",children:"About"})})]})]})};m.a.render(Object(Z.jsx)(x.a.StrictMode,{children:Object(Z.jsx)(q,{children:Object(Z.jsxs)(g.a,{children:[Object(Z.jsx)(Q,{children:Object(Z.jsx)(g.b,{to:"/",children:Object(Z.jsx)(U,{src:w,alt:"Logo"})})}),Object(Z.jsx)(te,{}),Object(Z.jsx)(L,{children:Object(Z.jsxs)(v.c,{children:[Object(Z.jsx)(v.a,{path:"/",exact:!0,component:function(){var e=Object(p.useState)([]),t=Object(y.a)(e,2),n=t[0],c=t[1],r=Object(p.useState)(""),i=Object(y.a)(r,2),a=i[0],o=i[1],s=Object(p.useState)(""),j=Object(y.a)(s,2),d=j[0],b=j[1],u=Object(p.useState)(!1),l=Object(y.a)(u,2),h=l[0],O=l[1],x=Object(p.useReducer)((function(e){return e+1}),0),f=Object(y.a)(x,2)[1];Object(p.useEffect)((function(){fetch("/api/topics").then((function(e){return e.json()})).catch((function(e){return console.error("ERROR:",e)})).then(c)}),[]);var m=C()(),v=C()().add(7,"days"),w=n.filter((function(e){return C()(e.dateToNextBeRevised).isBefore(m)})),P=n.filter((function(e){return C()(e.dateToNextBeRevised).isBetween(m,v)})),R=n.filter((function(e){return C()(e.dateToNextBeRevised).isAfter(v)}));return Object(Z.jsxs)("div",{className:"topics",children:[Object(Z.jsxs)(V,{topicStatus:"now",children:[Object(Z.jsx)("h3",{children:"These topics need revision now"}),0!==w.length&&w.map((function(e){return Object(Z.jsx)(g.b,{to:{pathname:"/cards",aboutProps:{topicId:e._id,topicName:e.name}},children:Object(Z.jsx)(ee,{topic:e})},e._id)}))]}),Object(Z.jsxs)(V,{topicStatus:"thisWeek",children:[Object(Z.jsx)("h3",{children:"These topics will need revision this week"}),0!==P.length&&P.map((function(e){return Object(Z.jsx)(g.b,{to:{pathname:"/cards",aboutProps:{topicId:e._id,topicName:e.name}},children:Object(Z.jsx)(ee,{topic:e})},e._id)}))]}),Object(Z.jsxs)(V,{topicStatus:"nextWeek",children:[Object(Z.jsx)("h3",{children:"These topics don't need revising for now"}),0!==R.length&&R.map((function(e){return Object(Z.jsx)(g.b,{to:{pathname:"/cards",aboutProps:{topicId:e._id,topicName:e.name}},children:Object(Z.jsx)(ee,{topic:e})},e._id)}))]}),Object(Z.jsx)(H,{type:"submit",onClick:function(){return O(!h)},children:h?Object(Z.jsxs)("span",{children:["Hide ",Object(Z.jsx)(S.a,{icon:k.b})]}):Object(Z.jsxs)("span",{children:["Add new topic ",Object(Z.jsx)(S.a,{icon:k.c})]})}),h&&Object(Z.jsx)(F,{children:Object(Z.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/api/topics",{method:"PUT",body:JSON.stringify({name:a,description:d}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){n.push(e),c(n),o(""),b(""),O(!h),f()}))},children:[Object(Z.jsx)("label",{htmlFor:"name",children:"Topic name: "}),Object(Z.jsx)(K,{type:"text",name:"name",value:a,onChange:function(e){var t=e.target.value;return o(t)}}),Object(Z.jsx)("br",{}),Object(Z.jsx)("label",{htmlFor:"description",children:"Topic description: "}),Object(Z.jsx)(K,{type:"text",name:"description",value:d,onChange:function(e){var t=e.target.value;return b(t)}}),Object(Z.jsx)("br",{}),Object(Z.jsx)(H,{type:"submit",disabled:!a,children:"OK"})]})})]})}}),Object(Z.jsx)(v.a,{path:"/about",exact:!0,component:function(){return Object(Z.jsxs)("div",{children:[Object(Z.jsx)("h2",{children:"About"}),Object(Z.jsx)("p",{children:"Maecenas eros metus, pellentesque id dolor id, semper aliquam leo."})]})}}),Object(Z.jsx)(v.a,{path:"/cards",exact:!0,component:function(e){var t=Object(p.useState)([]),n=Object(y.a)(t,2),c=n[0],r=n[1],i=Object(p.useState)(""),a=Object(y.a)(i,2),o=a[0],s=a[1],j=Object(p.useState)(""),d=Object(y.a)(j,2),b=d[0],u=d[1],l=Object(p.useState)(!1),h=Object(y.a)(l,2),O=h[0],x=h[1],f=Y("topicPath",null),m=Object(y.a)(f,2),v=m[0],w=m[1],P=Y("topicName",null),R=Object(y.a)(P,2),T=R[0],N=R[1],I=Object(p.useReducer)((function(e){return e+1}),0),_=Object(y.a)(I,2)[1],E=Object(p.useState)(),A=Object(y.a)(E,2),B=A[0],D=A[1],q=Object(p.useState)(!1),J=Object(y.a)(q,2),M=J[0],W=J[1];Object(p.useEffect)((function(){w(void 0!==e.location.aboutProps?e.location.aboutProps.topicId:v),N(void 0!==e.location.aboutProps?e.location.aboutProps.topicName:T),fetch("/api/cards/".concat(v)).then((function(e){return e.json()})).then(r).catch((function(e){console.error("ERROR:",e)}))}),[e.location.aboutProps,v,T,w,N]);var Q=function(e,t){e.preventDefault(),fetch("/api/spaced",{method:"PATCH",body:JSON.stringify({_id:V.currentData()[0]._id,status:e.target.title}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(){return V.next(t)})).catch((function(e){console.error("ERROR:",e),D("Error")}))},U=c.filter((function(e){return C()(e.dateToNextBeRevised).isBefore(C()())})),z=X(U,1),L=X(c,1),V=M?L:z,G=0!==V.currentData().length&&V.currentPage<=V.maxPage,ee=0!==V.maxPage&&V.currentPage>V.maxPage,te=0===V.currentData().length&&!ee;return Object(Z.jsxs)("div",{className:"cards",children:[Object(Z.jsx)("h2",{children:T}),0!==c.length&&V.currentData().map((function(e){return Object(Z.jsx)($,{card:e},e._id)})),te&&Object(Z.jsxs)("div",{children:[Object(Z.jsx)("p",{children:"There are no cards that need revising at the moment, but you can revise anyway if you like"}),Object(Z.jsx)(H,{onClick:function(){return W(!0)},children:"Show all cards"})]}),G&&Object(Z.jsxs)("div",{children:[Object(Z.jsx)(H,{title:"unsure",onClick:Q,children:"I don't remember this at all"}),Object(Z.jsx)(H,{title:"neutral",onClick:Q,children:"I barely know this "}),Object(Z.jsx)(H,{title:"confident",onClick:Q,children:"I'm confident I know this"})]}),ee&&Object(Z.jsxs)("div",{children:[Object(Z.jsx)("div",{children:"Well done!"}),Object(Z.jsxs)("p",{children:["Please return ",Object(Z.jsx)(g.b,{to:"/",children:"Home"})]})]}),Object(Z.jsx)(H,{type:"submit",onClick:function(){x(!O),D("")},children:O?Object(Z.jsxs)("span",{children:["Hide ",Object(Z.jsx)(S.a,{icon:k.b})]}):Object(Z.jsxs)("span",{children:["Add new card ",Object(Z.jsx)(S.a,{icon:k.c})]})}),O&&Object(Z.jsx)(F,{children:Object(Z.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/api/cards",{method:"PUT",body:JSON.stringify({type:"simple",topicId:v,question:o,answer:b}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){c.push(e),r(c),s(""),u(""),x(!O),_(),D("Card added")})).catch((function(e){console.error("ERROR:",e),D("Error - Card not added")}))},children:[Object(Z.jsx)("label",{htmlFor:"question",children:"Question: "}),Object(Z.jsx)(K,{type:"text",name:"question",value:o,onChange:function(e){var t=e.target.value;return s(t)}}),Object(Z.jsx)("br",{}),Object(Z.jsx)("label",{htmlFor:"answer",children:"Answer: "}),Object(Z.jsx)(K,{type:"text",name:"answer",value:b,onChange:function(e){var t=e.target.value;return u(t)}}),Object(Z.jsx)("br",{}),Object(Z.jsx)(H,{type:"submit",disabled:!o||!b,children:"OK"})]})}),Object(Z.jsx)("p",{children:B})]})}}),Object(Z.jsx)(v.a,{component:function(){return Object(Z.jsxs)("div",{children:[Object(Z.jsx)("h3",{children:"Not Found"}),Object(Z.jsxs)("p",{children:["Please return ",Object(Z.jsx)(g.b,{to:"/",children:"Home"})]})]})}})]})})]})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.00c17b14.chunk.js.map