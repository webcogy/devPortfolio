(this.webpackJsonpdevPortfolio=this.webpackJsonpdevPortfolio||[]).push([[0],{18:function(e){e.exports=JSON.parse('[{"title":"\uac1c\ubc1c \ud3ec\ud2b8\ud3f4\ub9ac\uc624","image":"","git":"https://github.com/webcogy/devPortfolio","viewUrl":"https://webcogy.github.io/devPortfolio/","work":"100%","kind1":"WEB","kind2":["react","redux","sass"]},{"title":"\uc2e4\uc2dc\uac04 \ucc44\ud305 (\uc2e4\ubb34 R&D)","image":"chat.jpg","git":"private","viewUrl":"","work":"VIEW\ub2e8 \uc791\uc5c5 100%","kind1":"WEB","kind2":["react","contextAPI","sass","websocket"]},{"title":"\ub85c\ud0c0\ub9ac\ud074\ub7fd","image":"rotary.jpg","git":"private","viewUrl":"","work":"\uc644\uc131\ub41c \uc6f9\uc744 \uc571\uc73c\ub85c \uac10\uc2f8\ub294 \uc791\uc5c5\ub9cc \ud568","kind1":"HYBRID","kind2":["webview"]},{"title":"e\ucf54\uc564\ucf54 (\uc720\uce58\uc6d0 \uad00\ub9ac, \uc2e4\ubb34 \ud504\ub85c\uc81d\ud2b8)","image":"conko.jpg","git":"private","viewUrl":"","work":"80%","kind1":"APP","kind2":["reactNative","styledComponent"]},{"title":"\uc601\ud654\uc18c\uac1c","image":"movie.png","git":"https://github.com/webcogy/React_MovieApp","viewUrl":"","work":"100% (\uc778\uac15 \ucc38\uace0)","kind1":"WEB","kind2":["react","api"]},{"title":"\uc138\uacc4\ub0a0\uc528","image":"weather.jpg","git":"https://github.com/webcogy/ReactNative_weatherApp","viewUrl":"","work":"100% (\uc778\uac15 \ucc38\uace0)","kind1":"APP","kind2":["reactNative","api","expo"]},{"title":"\ud560\uc77c\ubaa9\ub85d","image":"todolist.jpg","git":"https://github.com/webcogy/react_todoList","viewUrl":"https://webcogy.github.io/react_todoList/","work":"100% (\uc778\uac15 \ucc38\uace0)","kind1":"WEB","kind2":["react"]},{"title":"\ub3d9\uc790\uc2b9 \ub80c\ud130\uce74","image":"djs.png","git":"https://github.com/DaeguIT-MinSuKim/yi_java4st_2team_web","viewUrl":"http://dhweb.i234.me/portfolio/dev/djs/main/main.php","work":"\uc790\ubc14\ud559\uc6d0 \ud504\ub85c\uc81d\ud2b8, \ucd1d\uc778\uc6d05\uba85, \ucc38\uc5ec\ub3c4 30%","kind1":"WEB","kind2":["jsp","oracle","sql"]}]')},33:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),r=n(9),s=n.n(r),o=n(8),a=n(19),l=n.n(a),j=n(20),d=n.n(j),u=n(1);var b=function(e){var t=e.appRef,n=Object(i.useState)(!1),c=Object(o.a)(n,2),r=c[0],s=c[1];Object(i.useEffect)((function(){"dark"===localStorage.getItem("viewMode")&&a()}),[]);var a=function(){t.current.classList.add("darkMode"),localStorage.setItem("viewMode","dark"),s(!0)};return Object(u.jsx)("div",{className:"darkModeComponent",children:!1===r?Object(u.jsxs)("button",{class:"btn_light",onClick:a,children:[Object(u.jsx)(l.a,{}),Object(u.jsx)("span",{children:"Light"})]}):Object(u.jsxs)("button",{class:"btn_dark",onClick:function(){t.current.classList.remove("darkMode"),localStorage.removeItem("viewMode"),s(!1)},children:[Object(u.jsx)(d.a,{}),Object(u.jsx)("span",{children:"Dark"})]})})},O=n(21),h=n.n(O);var f=function(e){var t=e.clickGoTop,n=e.isShowGoTop;return Object(u.jsxs)("div",{className:"Footer",children:[Object(u.jsxs)("div",{className:"f_copyright",children:["@2021",Object(u.jsx)("strong",{children:"daehyun"})]}),!0===n&&Object(u.jsx)("button",{className:"goTop",onClick:t,children:Object(u.jsx)(h.a,{})})]})};var p=function(e){var t=e.fetchGoTopTrigger,n=Object(i.useState)(null),c=Object(o.a)(n,2),r=c[0],s=c[1],a=new IntersectionObserver((function(e){var t=Object(o.a)(e,1)[0].isIntersecting;s(!t)}));return Object(i.useEffect)((function(){return a.observe(t.current),function(){a.unobserve(t.current)}}),[]),Object(u.jsx)(f,{clickGoTop:function(){return window.scrollTo(0,0)},isShowGoTop:r})};var g=function(e){var t=e.kind1,n=e.clickButton;return Object(u.jsx)("div",{className:"kind1",children:t.map((function(e,t){return Object(u.jsx)("button",{className:0===t?"btn_kind1 on":"btn_kind1",onClick:n,kind:e,children:e},t)}))})},k=n(6),v="list/GET_LIST_ALL",x="list/GET_LIST_KIND1",m="list/GET_LIST_KIND2",w="list/USER_CHK_KIND2",_="list/GET_INPUT_REF",S="list/SET_LIST_COUNTING",N="list/IS_SHOW_BTN_MORE",E=function(e){return{type:v,list:e}},I=function(e){return{type:x,kind:e}},T=function(e){return{type:m,kinds:e}},L=function(e){return{type:w,kinds:e}},y=function(e){return{type:_,refs:e}},R=function(e){return{type:S,count:e}},B=function(e){return{type:N,isShow:e}};var M=function(){var e=Object(k.b)(),t=Object(k.c)((function(e){return e.listStates})),n=t.kind1,c=t.list_kind1,r=t.inputRef,s=function(){e(R(5))},o=function(t){e(I(t))},a=function(e){e.target.parentNode.childNodes.forEach((function(e){return e.classList.remove("on")})),e.target.classList.add("on")},l=function(){r.current.map((function(e){return e.checked=!1}))};return Object(i.useEffect)((function(){e(T(c))}),[c]),Object(u.jsx)(g,{kind1:n,clickButton:function(e){a(e),l(),o(e.target.attributes.kind.nodeValue),s()}})};var P=function(e){var t=e.kind2,n=e.clickButton,i=e.inputRef;return Object(u.jsx)("div",{className:"kind2",children:Object(u.jsx)("ul",{children:t.map((function(e,t){return Object(u.jsxs)("li",{onClick:n,children:[Object(u.jsx)("input",{type:"checkbox",name:"pf_item[]",value:e,id:"pf_".concat(e),ref:function(e){return i.current[t]=e}}),Object(u.jsx)("label",{htmlFor:"pf_".concat(e),children:Object(u.jsx)("span",{children:e})})]},t)}))})})};var U=function(){var e=Object(k.b)(),t=Object(k.c)((function(e){return e.listStates})),n=t.list_kind1,c=t.kind2,r=t.user_chk_kind2,s=Object(i.useRef)([]);Object(i.useEffect)((function(){return e(y(s))}),[s]);var o=function(e){if(void 0!=e.target.value){var t=r.slice(),n=t.indexOf(e.target.value);!0===e.target.checked&&-1===n?t.push(e.target.value):!1===e.target.checked&&-1!==n&&t.splice(n,1),a(t)}},a=function(t){try{for(var i=[],c=0;c<n.length;c++){for(var r=!1,s=0;s<t.length;s++){if(-1===n[c].kind2.indexOf(t[s])){r=!1;break}r=!0}!0===r&&i.push(n[c])}e(L(t)),function(t){e(T(t))}(i)}catch(o){console.log(o)}};return Object(u.jsx)(P,{kind2:c,clickButton:function(t){e(R(5)),o(t)},inputRef:s})};var C=function(e){var t=e.list,n=/[\"\[\]]/g;return Object(u.jsx)("div",{className:"contents",children:Object(u.jsx)("ul",{children:t.map((function(e,t){return Object(u.jsx)("li",{children:Object(u.jsxs)("div",{className:"cpl_wrap",children:[Object(u.jsxs)("div",{className:"cpl_info",children:[Object(u.jsxs)("div",{className:"cpli_title",children:[Object(u.jsx)("strong",{children:e.title}),Object(u.jsx)("span",{children:e.kind1})]}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:Object(u.jsx)("mark",{children:"SKILL"})}),Object(u.jsx)("span",{children:e.kind2?JSON.stringify(e.kind2).replace(n,""):""})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:Object(u.jsx)("mark",{children:"WORK"})}),Object(u.jsx)("span",{children:e.work})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:Object(u.jsx)("mark",{children:"GIT"})}),"private"===e.git?Object(u.jsx)("span",{children:"private"}):Object(u.jsx)("span",{children:Object(u.jsx)("a",{href:e.git,target:"_blank",children:e.git})})]}),""!==e.viewUrl&&Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:Object(u.jsx)("mark",{children:"VIEW"})}),Object(u.jsx)("span",{children:Object(u.jsx)("a",{href:e.viewUrl,className:"btn_view",target:"_blank",children:e.viewUrl})})]})]})]}),Object(u.jsxs)("div",{className:""!==e.viewUrl?"cpl_pic view":"cpl_pic",children:[""===e.image?Object(u.jsx)("img",{src:"../frontendPortfolio/images/portfolio.jpg",className:"view_img"}):Object(u.jsx)("img",{src:"../frontendPortfolio/images/".concat(e.image),className:"view_img"}),Object(u.jsx)("div",{className:"cplp_info",children:""!==e.viewUrl&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("a",{href:e.viewUrl,target:"_blank"}),Object(u.jsx)("strong",{children:"VIEW"})]})})]})]})},t)}))})})},A=n(18);var G=function(e){var t=e.isShowBtnMore,n=e.fetchMoreTrigger,i=e.onSetListCounting;return Object(u.jsx)("button",{className:!0===t?"btn_more on":"btn_more",ref:n,onClick:i,children:"MORE"})};var W=function(){var e=Object(k.b)(),t=Object(k.c)((function(e){return e.listStates})),n=t.list_kind2,c=t.listCounting,r=t.isShowBtnMore,s=function(t){return e(B(t))},a=function(){return e(R(c+5))};Object(i.useEffect)((function(){e(E(A)),e(I("ALL")),e(T(A))}),[]);var l=Object(i.useRef)(null),j=new IntersectionObserver((function(e){Object(o.a)(e,1)[0].isIntersecting&&a()}));return Object(i.useEffect)((function(){return j.observe(l.current),function(){j.unobserve(l.current)}}),[c]),Object(i.useEffect)((function(){n.length<c?s(!1):s(!0)}),[n,c]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h4",{children:["\ucd1d \uac1c\uc218 : ",n.length]}),Object(u.jsx)(C,{list:n.slice(0,c)}),Object(u.jsx)(G,{isShowBtnMore:r,fetchMoreTrigger:l,onSetListCounting:a})]})};n(33);var D=function(){var e=Object(i.useRef)(null),t=Object(i.useRef)(null);return Object(u.jsxs)("div",{className:"App",ref:t,children:[Object(u.jsx)(b,{appRef:t}),Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("h1",{ref:e,children:"\uae40\ub300\ud604 \ud3ec\ud2b8\ud3f4\ub9ac\uc624"})}),Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)("h2",{children:"DEVELOPER"}),Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)("h3",{children:"PORTFOLIO"}),Object(u.jsx)(M,{}),Object(u.jsx)(U,{}),Object(u.jsx)(W,{})]})]}),Object(u.jsx)(p,{fetchGoTopTrigger:e})]})},K=n(11),F=n(3),V={listState:{list:[],list_kind1:[],list_kind2:[],kind1:["ALL","WEB","APP","HYBRID"],kind2:["react","reactNative","webview","redux","contextAPI","sass","styledComponent","api","expo","websocket","jsp","oracle","sql"],user_chk_kind2:[],inputRef:[],listCounting:5,isShowBtnMore:!0}},H=Object(K.combineReducers)({listStates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V.listState,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(F.a)(Object(F.a)({},e),{},{list:t.list});case x:return Object(F.a)(Object(F.a)({},e),{},{list_kind2:[],user_chk_kind2:[],list_kind1:"ALL"===t.kind?e.list:e.list.filter((function(e){return e.kind1===t.kind}))});case m:return Object(F.a)(Object(F.a)({},e),{},{list_kind2:t.kinds});case w:return Object(F.a)(Object(F.a)({},e),{},{user_chk_kind2:t.kinds});case _:return Object(F.a)(Object(F.a)({},e),{},{inputRef:t.refs});case S:return Object(F.a)(Object(F.a)({},e),{},{listCounting:t.count});case N:return Object(F.a)(Object(F.a)({},e),{},{isShowBtnMore:t.isShow});default:return e}}}),J=n(22),q=Object(K.createStore)(H,Object(J.composeWithDevTools)());console.log(q.getState()),s.a.render(Object(u.jsx)(k.a,{store:q,children:Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(D,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.3c29a055.chunk.js.map