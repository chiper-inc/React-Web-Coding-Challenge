(this.webpackJsonpbicycle_recovery=this.webpackJsonpbicycle_recovery||[]).push([[0],{16:function(e,n,t){e.exports=t.p+"static/media/bike.71bbec9d.png"},17:function(e,n,t){e.exports=t(28)},27:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(11),i=t.n(c),l=t(1),o=t(2),u=t(3);function d(){var e=Object(o.a)(["\n    margin: 0.6rem 0;\n    color: #777;\n    font-size: 0.9rem;\n"]);return d=function(){return e},e}var m=u.a.p(d()),s=function(e){var n=e.setCategories,t=Object(a.useState)(""),c=Object(l.a)(t,2),i=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n((function(){return[i]}))}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}}),r.a.createElement(m,null,"Including results for '",i,"'"))};function p(){var e=Object(o.a)(["\n  display: inline-block;\n  border-radius: 6px;\n  padding: 0.5rem 0;\n  margin: 0.5rem 0 0.5rem 1rem;\n  width: 11rem;\n  background: #00264a;\n  color: white;\n  border: 2px solid white;\n  cursor: pointer;\n"]);return p=function(){return e},e}var f=u.a.button(p()),b=function(e){var n=e.handlerNext,t=e.handlerPrev;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{onClick:function(){return t()}},"Prev"),r.a.createElement(f,{onClick:function(){return n()}},"Next"))},E=t(6),g=t.n(E),h=t(15),v=function(){var e=Object(h.a)(g.a.mark((function e(n,t){var a,r,c,i,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://bikewise.org:443/api/v2/incidents?page=".concat(t,"&per_page=10&occurred_after=1597036687&incident_type=theft&proximity_square=100&query=").concat(encodeURI(n)),e.next=3,fetch(a);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,i=c.incidents,l=i.map((function(e){return{id:e.id,title:e.title,description:e.description,dateTheft:e.occurred_at,dateReported:e.updated_at,location:e.address,url:e.media.image_url_thumb}})),e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),x=t(7),j=t.n(x),_=t(16),y=t.n(_),O=function(e){var n=e.title,t=e.url,a=e.description,c=e.dateTheft,i=e.dateReported,l=e.location;return null===t&&(t=y.a),null===a&&(a="--- No description ---"),r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("picture",null,r.a.createElement("img",{src:t,alt:n})),r.a.createElement("div",{className:"info-wrapper"},r.a.createElement("h2",null,n),r.a.createElement("div",{className:"info"},r.a.createElement("label",null,"Location:"),r.a.createElement("p",null,l)),r.a.createElement("div",{className:"info"},r.a.createElement("label",null,"Date of the Theft:"),r.a.createElement("p",null,c)),r.a.createElement("div",{className:"info"},r.a.createElement("label",null,"Date of the Report:"),r.a.createElement("p",null,i)),r.a.createElement("div",{className:"info description"},r.a.createElement("label",null,"Description:"),r.a.createElement("p",null,a))))};function k(){var e=Object(o.a)(["\n    padding: 20px;\n    margin: 0 20px;\n    color: #fff;\n    background: #00264a;\n    border-radius: 3px;\n    text-align: center;\n    font-size: 1.5rem;\n"]);return k=function(){return e},e}function N(){var e=Object(o.a)(["\n    border: 4px solid #f3f3f3;\n    border-top: 4px solid #00264a;\n    border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    animation: "," 1.3s linear infinite;\n    display: inline-block;\n    margin: 0 0 -5px;\n"]);return N=function(){return e},e}function w(){var e=Object(o.a)(["\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n"]);return w=function(){return e},e}O.defaultProps={description:null===j.a.description?"---":j.a.description};var S=Object(u.b)(w()),P=u.a.p(N(),S),C=u.a.div(k()),D=function(e){var n=e.category,t=Object(a.useState)(1),c=Object(l.a)(t,2),i=c[0],o=c[1],u=function(){i>1&&o(i-1)},d=function(){o(i+1)},m=function(e,n){var t=Object(a.useState)({data:[],loading:!0}),r=Object(l.a)(t,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){v(e,n).then((function(e){i({data:e,loading:!1})}))}),[e,n]),c}(n,i),s=m.data,p=m.loading;return r.a.createElement(r.a.Fragment,null,p&&r.a.createElement(C,{className:"animate__animated animate__flash"},"Loading ",r.a.createElement(P,null)),s.length>0&&r.a.createElement(b,{handlerNext:d,handlerPrev:u}),r.a.createElement("div",{className:"card-grid"},s.map((function(e){return r.a.createElement(O,Object.assign({key:e.id},e))}))),s.length>0&&r.a.createElement(b,{handlerNext:d,handlerPrev:u}))},I=t(8),R=t.n(I),B=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement("img",{src:R.a,alt:R.a})),r.a.createElement("h2",null,"Police Department Berlin"),r.a.createElement("h4",null,"Stolen Bykes"))},F=function(){var e=Object(a.useState)(["Stolen"]),n=Object(l.a)(e,2),t=n[0],c=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement(s,{setCategories:c}),t.map((function(e){return r.a.createElement(D,{key:e,category:e})})))};t(27);i.a.render(r.a.createElement(F,null),document.getElementById("root"))},8:function(e,n,t){e.exports=t.p+"static/media/logo-app.a3f30599.png"}},[[17,1,2]]]);
//# sourceMappingURL=main.7974569a.chunk.js.map