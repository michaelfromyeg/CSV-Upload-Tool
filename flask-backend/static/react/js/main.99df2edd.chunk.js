(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{14:function(e,t,n){e.exports=n(38)},19:function(e,t,n){},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(12),r=n.n(l),c=(n(19),n(20),n(2)),i=n(13),s=n.n(i);var u=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)("Choose file"),i=Object(c.a)(r,2),u=i[0],p=i[1],m=Object(a.useState)(""),d=Object(c.a)(m,2);return d[0],d[1],o.a.createElement("div",{className:"import"},o.a.createElement("h3",null,"Import steps"),o.a.createElement("p",null,"Download our csv templates and add all of your lot information"),o.a.createElement("div",{className:"input-group"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text",id:"inputGroupFileAddon01"},"Upload your file")),o.a.createElement("div",{className:"custom-file"},o.a.createElement("input",{type:"file",className:"custom-file-input",id:"inputGroupFile01","aria-describedby":"inputGroupFileAddon01",onChange:function(e){console.log("onChange"),l(e.target.files[0]),p(e.target.files[0].name)}}),o.a.createElement("label",{className:"custom-file-label",htmlFor:"inputGroupFile01"},u))),o.a.createElement("button",{onClick:function(e){console.log("submitFile");var t=new FormData;t.append("file",n),s.a.post("/upload",t).then((function(e){return console.log(e)})).catch((function(e){return console.warn(e)}))}},"Upload "),o.a.createElement("p",null,"Drag and drop the uploaded groupings to match our groupings"))};var p=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("p",null,"My token is ",window.token),o.a.createElement("h1",null,"User Import"),o.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.99df2edd.chunk.js.map