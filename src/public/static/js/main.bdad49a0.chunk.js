(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var c,r,a,i,o,s,j,d,b,u,l,O,h=n(0),p=n.n(h),x=n(25),f=n.n(x),m=n(10),g=n(4),v=n.p+"static/media/logo.db397de1.png",E=n(3),R=n(12),w=n(13),y=n(8),P=n(9),S={WHTIE:"#ffffff",LIGHT_GREY:"#c8c8c8",DARK_GREY:"#484848",ORANGE:"rgb(238, 111, 45)",PALE_ORANGE:"rgb(238, 111, 45, 0.5)",GREEN:"#8ac926",YELLOW:"#ffca3a",RED:"#ff595e"},A=P.a.div(c||(c=Object(y.a)(["\n  color: ",";\n  background: ",";\n  padding: 10px;\n"])),S.DARK_GREY,S.PALE_ORANGE),C=P.a.div(r||(r=Object(y.a)(["\n  text-align: center;\n  font-family: Arial, Verdana, sans-serif;\n  display: grid;\n  grid-template-columns: 100px auto;\n  grid-template-rows: repeat(2, 40px);\n  grid-gap: 1em;\n"]))),k=P.a.button(a||(a=Object(y.a)(["\n  margin: 10px;\n  border: none;\n  padding: 10px;\n  border-radius: 10px;\n"]))),_=P.a.div(i||(i=Object(y.a)(["\n  margin: 10px;\n  padding: 10px;\n"]))),D=P.a.div(o||(o=Object(y.a)(["\n  margin: auto;\n  padding: 10px;\n  width: 40%;\n  align-content: center;\n  border-radius: 10px;\n  box-shadow: 0 0 5px 2px rgba(0, 0, 0, .3);\n\n  ","\n"])),(function(e){return e.showFront?"background: ".concat(S.WHITE,";\n    color: ").concat(S.DARK_GREY,";"):"background: ".concat(S.DARK_GREY,";\n    color: ").concat(S.WHTIE,";")})),I=P.a.ul(s||(s=Object(y.a)(["\n  list-style: none;\n"]))),T=P.a.input(j||(j=Object(y.a)(["\n  border: none;\n  margin: 10px;\n  padding: 10px;\n"]))),G=P.a.header(d||(d=Object(y.a)(["\n  grid-row: 1;\n  grid-column: 2;\n"]))),N=P.a.img(b||(b=Object(y.a)(["\n  width:50px\n"]))),H=P.a.nav(u||(u=Object(y.a)(["\n  text-align: left;\n  grid-row: 1;\n  grid-column: 1;\n"]))),F=P.a.section(l||(l=Object(y.a)(["\n  grid-row: 2;\n  grid-column: 2;\n"]))),Y=P.a.div(O||(O=Object(y.a)(["\n  background: ",";\n  color: ",";\n  margin: 20px auto;\n  padding: 10px;\n  width: 40%;\n  align-content: center;\n  border-radius: 10px;\n"])),S.LIGHT_GREY,S.DARK_GREY),K=function(e,t){var n=Object(h.useState)(localStorage.getItem(e)||t),c=Object(E.a)(n,2),r=c[0],a=c[1];return Object(h.useEffect)((function(){localStorage.setItem(e,r)}),[e,r]),[r,a]},L=n(1),q=function(e){var t=e.card,n=Object(h.useState)(!0),c=Object(E.a)(n,2),r=c[0],a=c[1],i=function(){a(!r)};return Object(L.jsx)(_,{children:r?Object(L.jsxs)("div",{children:[Object(L.jsx)("p",{children:"Question"}),Object(L.jsx)(D,{showFront:r,onClick:i,children:Object(L.jsx)("h3",{children:t.question})})]}):Object(L.jsxs)("div",{children:[Object(L.jsx)("p",{children:"Answer"}),Object(L.jsx)(D,{showFront:r,onClick:i,children:Object(L.jsx)("h3",{children:t.answer})})]})},t._id)},J=function(e){var t=e.topic;return Object(L.jsxs)(Y,{children:[Object(L.jsx)("h3",{children:t.name}),Object(L.jsx)("p",{children:t.description})]},t._id)},M=function(){var e=Object(h.useState)(!1),t=Object(E.a)(e,2),n=t[0],c=t[1];return Object(L.jsxs)(H,{children:[Object(L.jsx)(R.a,{onClick:function(){c(!n)},icon:w.a,size:"2x"}),n&&Object(L.jsxs)(I,{children:[Object(L.jsx)("li",{children:Object(L.jsx)(m.b,{to:"/",children:"Topics"})}),Object(L.jsx)("li",{children:Object(L.jsx)(m.b,{to:"/about",children:"About"})})]})]})};f.a.render(Object(L.jsx)(p.a.StrictMode,{children:Object(L.jsx)(C,{children:Object(L.jsxs)(m.a,{children:[Object(L.jsx)(G,{children:Object(L.jsx)(m.b,{to:"/",children:Object(L.jsx)(N,{src:v,alt:"Logo"})})}),Object(L.jsx)(M,{}),Object(L.jsx)(F,{children:Object(L.jsxs)(g.c,{children:[Object(L.jsx)(g.a,{path:"/",exact:!0,component:function(){var e=Object(h.useState)([]),t=Object(E.a)(e,2),n=t[0],c=t[1],r=Object(h.useReducer)((function(e){return e+1}),0),a=Object(E.a)(r,2)[1],i=Object(h.useState)(""),o=Object(E.a)(i,2),s=o[0],j=o[1],d=Object(h.useState)(""),b=Object(E.a)(d,2),u=b[0],l=b[1],O=Object(h.useState)(!1),p=Object(E.a)(O,2),x=p[0],f=p[1];Object(h.useEffect)((function(){fetch("/api/topics").then((function(e){return e.json()})).then(c)}),[]);return Object(L.jsxs)("div",{className:"topics",children:[Object(L.jsx)("h2",{children:"Topics"}),0!==n.length&&n.map((function(e){return Object(L.jsx)(m.b,{to:{pathname:"/cards",aboutProps:{topicId:e._id,topicName:e.name}},children:Object(L.jsx)(J,{topic:e})},e._id)})),Object(L.jsx)(k,{type:"submit",onClick:function(){return f(!x)},children:x?Object(L.jsxs)("span",{children:["Hide ",Object(L.jsx)(R.a,{icon:w.b})]}):Object(L.jsxs)("span",{children:["Add new topic ",Object(L.jsx)(R.a,{icon:w.c})]})}),x&&Object(L.jsx)(A,{children:Object(L.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/api/topics",{method:"PUT",body:JSON.stringify({name:s,description:u}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){n.push(e),c(n),j(""),l(""),f(!x),a()}))},children:[Object(L.jsx)("label",{htmlFor:"name",children:"Topic name: "}),Object(L.jsx)(T,{type:"text",name:"name",value:s,onChange:function(e){var t=e.target.value;return j(t)}}),Object(L.jsx)("br",{}),Object(L.jsx)("label",{htmlFor:"description",children:"Topic description: "}),Object(L.jsx)(T,{type:"text",name:"description",value:u,onChange:function(e){var t=e.target.value;return l(t)}}),Object(L.jsx)("br",{}),Object(L.jsx)(k,{type:"submit",disabled:!s,children:"OK"})]})})]})}}),Object(L.jsx)(g.a,{path:"/about",exact:!0,component:function(){return Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{children:"About"}),Object(L.jsx)("p",{children:"Maecenas eros metus, pellentesque id dolor id, semper aliquam leo."})]})}}),Object(L.jsx)(g.a,{path:"/cards",exact:!0,component:function(e){var t=Object(h.useState)([]),n=Object(E.a)(t,2),c=n[0],r=n[1],a=Object(h.useState)(""),i=Object(E.a)(a,2),o=i[0],s=i[1],j=Object(h.useState)(""),d=Object(E.a)(j,2),b=d[0],u=d[1],l=Object(h.useState)(!1),O=Object(E.a)(l,2),p=O[0],x=O[1],f=K("topicPath",null),g=Object(E.a)(f,2),v=g[0],y=g[1],P=K("topicName",null),S=Object(E.a)(P,2),C=S[0],_=S[1],D=Object(h.useReducer)((function(e){return e+1}),0),I=Object(E.a)(D,2)[1],G=Object(h.useState)(),N=Object(E.a)(G,2),H=N[0],F=N[1];Object(h.useEffect)((function(){y(void 0!==e.location.aboutProps?e.location.aboutProps.topicId:v),_(void 0!==e.location.aboutProps?e.location.aboutProps.topicName:C),fetch("/api/cards/".concat(v)).then((function(e){return e.json()})).then(r).catch((function(e){console.error("ERROR:",e)}))}),[e.location.aboutProps,v,C,y,_]);var Y=function(e,t){var n=Object(h.useState)(1),c=Object(E.a)(n,2),r=c[0],a=c[1],i=Math.ceil(e.length/t);return{next:function(){return a((function(e){return Math.min(e+1,i+1)}))},previous:function(){return a((function(e){return Math.max(e-1,1)}))},currentData:function(){var n=(r-1)*t,c=n+t;return e.slice(n,c)},currentPage:r,maxPage:i}}(c,1),J=function(e,t){e.preventDefault(),fetch("/api/cards",{method:"PATCH",body:JSON.stringify({_id:Y.currentData()[0]._id,updatedDate:new Date,status:e.target.title}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(){return Y.next(t)})).catch((function(e){console.error("ERROR:",e),F("Error")}))},M=0!==Y.currentData().length&&Y.currentPage<=Y.maxPage,W=0!==Y.maxPage&&Y.currentPage>Y.maxPage;return Object(L.jsxs)("div",{className:"cards",children:[Object(L.jsx)("h2",{children:C}),0!==c.length&&Y.currentData().map((function(e){return Object(L.jsx)(q,{card:e},e._id)})),M&&Object(L.jsxs)("div",{children:[Object(L.jsx)(k,{title:"unsure",onClick:J,children:"I don't remember this at all"}),Object(L.jsx)(k,{title:"neutral",onClick:J,children:"I barely know this "}),Object(L.jsx)(k,{title:"confident",onClick:J,children:"I'm confident I know this"})]}),W&&Object(L.jsxs)("div",{children:[Object(L.jsx)("div",{children:"Well done!"}),Object(L.jsxs)("p",{children:["Please return ",Object(L.jsx)(m.b,{to:"/",children:"Home"})]})]}),Object(L.jsx)(k,{type:"submit",onClick:function(){x(!p),F("")},children:p?Object(L.jsxs)("span",{children:["Hide ",Object(L.jsx)(R.a,{icon:w.b})]}):Object(L.jsxs)("span",{children:["Add new card ",Object(L.jsx)(R.a,{icon:w.c})]})}),p&&Object(L.jsx)(A,{children:Object(L.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/api/cards",{method:"PUT",body:JSON.stringify({type:"simple",topicId:v,question:o,answer:b}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){c.push(e),r(c),s(""),u(""),x(!p),I(),F("Card added")})).catch((function(e){console.error("ERROR:",e),F("Error - Card not added")}))},children:[Object(L.jsx)("label",{htmlFor:"question",children:"Question: "}),Object(L.jsx)(T,{type:"text",name:"question",value:o,onChange:function(e){var t=e.target.value;return s(t)}}),Object(L.jsx)("br",{}),Object(L.jsx)("label",{htmlFor:"answer",children:"Answer: "}),Object(L.jsx)(T,{type:"text",name:"answer",value:b,onChange:function(e){var t=e.target.value;return u(t)}}),Object(L.jsx)("br",{}),Object(L.jsx)(k,{type:"submit",disabled:!o||!b,children:"OK"})]})}),Object(L.jsx)("p",{children:H})]})}}),Object(L.jsx)(g.a,{component:function(){return Object(L.jsxs)("div",{children:[Object(L.jsx)("h3",{children:"Not Found"}),Object(L.jsxs)("p",{children:["Please return ",Object(L.jsx)(m.b,{to:"/",children:"Home"})]})]})}})]})})]})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.bdad49a0.chunk.js.map