(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{102:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(21),o=t.n(r),c=(t(58),t(11)),s=t(22),i=t.n(s),u=["firstName","lastName","asset","createdOn"],m=["Download our csv templates and add all of your lot information.","Upload the csv file containing your lot's information.","Drag and drop the uploaded groupings to match our groupings."],p=t(103),d=t(110),E=t(111),v=t(104),f=function(e){var a=Object(n.useState)(!1),t=Object(c.a)(a,2),r=t[0],o=t[1];return l.a.createElement(p.a,{isOpen:r,toggle:function(){return o((function(e){return!e}))}},l.a.createElement(d.a,{caret:!0},e.value),l.a.createElement(E.a,null,e.options.map((function(a){return l.a.createElement(v.a,{id:e.id,value:a,onClick:e.onChange},a)}))))},h=t(105),b=t(106),g=t(50),x=t(19),O=t(20);var y=function(){var e=m[0];return l.a.createElement(h.a,null,l.a.createElement(b.a,null,l.a.createElement("div",{className:"ordered-list-icon"},"1"),"\u2003",e,"\u2003",l.a.createElement(g.a,{color:"primary"},"Download (csv)\xa0\xa0",l.a.createElement(x.a,{icon:O.a}))))},j=t(112),w=function(e){var a=Object(n.useState)(e.visible),t=Object(c.a)(a,2),r=t[0],o=t[1];return l.a.createElement(j.a,{color:e.color,isOpen:r,toggle:function(){return o(!1)}},e.text)},k=t(107),N=t(108),S=t(109),C=function(){var e=u,a=m[1],t=m[2],r={};e.map((function(e){r[e]="None"}));var o=Object(n.useState)(""),s=Object(c.a)(o,2),p=s[0],d=s[1],E=Object(n.useState)({options:["None"]}),v=Object(c.a)(E,2),j=v[0],C=v[1],F=Object(n.useState)(r),Y=Object(c.a)(F,2),A=Y[0],D=Y[1],G=Object(n.useState)({visible:!0,color:"info",text:"Upload your csv file before proceeding."}),T=Object(c.a)(G,2),U=T[0],q=T[1],B=Object(n.useState)({visible:!0,color:"info",text:"Then, upload your matches to our servers."}),I=Object(c.a)(B,2),J=I[0],P=I[1],W=function(e){A[e.target.getAttribute("id")]=e.target.value,D(A),C({options:j.options})},z=function(e){return new Set(e).size!==e.length};return l.a.createElement(k.a,{className:"import"},l.a.createElement(h.a,null,l.a.createElement(b.a,null,l.a.createElement("h3",null,"Import steps"))),l.a.createElement(y,null),l.a.createElement("div",{class:"spacer25"}),l.a.createElement(h.a,null,l.a.createElement(b.a,null,l.a.createElement("div",{className:"ordered-list-icon"},"2"),"\u2003",a,l.a.createElement("div",{class:"input-group"},l.a.createElement("div",{class:"input-group-prepend"},l.a.createElement("span",{onClick:function(e){var a=new FormData;a.append("file",p),i.a.post("/upload",a).then((function(e){C({options:e.data[0]}),q({visible:!0,color:"success",text:"Your upload has succeeded. You match proceed to match our fields to yours."})})).catch((function(e){console.warn("Error on the post request..."+e),q({visible:!0,color:"danger",text:"Your upload has failed. There appears to be an internal server error. Please try again later."})}))},class:"input-group-text",id:"inputGroupFileAddon01"},"Upload\xa0\xa0",l.a.createElement(x.a,{icon:O.c}))),l.a.createElement("div",{class:"custom-file"},l.a.createElement("input",{type:"file",accept:".xls,.xlsx,.csv",class:"custom-file-input",id:"inputGroupFile01","aria-describedby":"inputGroupFileAddon01",onChange:function(e){d(e.target.files[0])}}),l.a.createElement("label",{class:"custom-file-label",for:"inputGroupFile01"},""==p?"Choose file":p.name.split(/[\\/]/g).pop().split(".")[0]))))),l.a.createElement("div",{class:"spacer5"}),l.a.createElement(h.a,null,l.a.createElement(b.a,null,l.a.createElement(w,{visible:U.visible,color:U.color,text:U.text}))),l.a.createElement("div",{class:"spacer25"}),l.a.createElement(h.a,null,l.a.createElement(b.a,null,l.a.createElement("div",{className:"ordered-list-icon"},"3"),"\u2003",t)),l.a.createElement("div",{class:"spacer25"}),l.a.createElement("hr",null),l.a.createElement(h.a,{xs:"2"},l.a.createElement(b.a,{xs:"6"},l.a.createElement("h4",null,"Match our fields to yours"),e.map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{xs:"2"},l.a.createElement(b.a,{xs:"3"},e),l.a.createElement(b.a,{xs:"3"},l.a.createElement(f,{id:e,value:A[e],options:j.options,onChange:W}))),l.a.createElement("div",{class:"spacer10"}))}))),l.a.createElement(b.a,{xs:"6"},l.a.createElement(h.a,null,l.a.createElement(b.a,null,l.a.createElement("h4",null,"Uploaded fields"),l.a.createElement(N.a,null,j.options.map((function(e){return l.a.createElement(S.a,null,e)}))))))),l.a.createElement("div",{class:"spacer25"}),l.a.createElement(h.a,null,l.a.createElement(b.a,null,l.a.createElement(g.a,{color:"primary",onClick:function(e){var a=Object.values(A);if(z(a))P({visible:!0,color:"danger",text:"Your upload has failed. Check you have no duplicate matchings."});else{var t=A;i.a.post("/submit",t).then((function(e){console.log(e),P({visible:!0,color:"success",text:"Your upload has succeeded. Thank you for using our form."})})).catch((function(e){console.warn("Error on the post request..."+e),P({visible:!0,color:"danger",text:"Your upload has failed. There appears to be an internal server error. Please try again later."})}))}}},"Submit matches\xa0\xa0",l.a.createElement(x.a,{icon:O.b})))),l.a.createElement("div",{class:"spacer5"}),l.a.createElement(h.a,null,l.a.createElement(b.a,null,console.log(J),l.a.createElement(w,{visible:J.visible,color:J.color,text:J.text}))))};var F=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(101);o.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,a,t){e.exports=t(102)},58:function(e,a,t){}},[[53,1,2]]]);
//# sourceMappingURL=main.403a9366.chunk.js.map