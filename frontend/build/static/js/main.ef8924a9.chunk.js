(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{20:function(e,t,n){},30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(21),s=n.n(o),i=(n(30),n(23)),r=n(2),l=n(0);var u=function(){var e=(new Date).getFullYear();return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",e," Mesto Russia"]})})},p=n.p+"static/media/logo.1f1e9591.svg",d=n(3),j=n(5);var b=function(e){var t,n=Object(d.h)(),a=Object(d.g)();function c(){localStorage.removeItem("token"),localStorage.removeItem("email"),a.push("/sign-in"),e.isLoginIn(!1)}return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)(j.b,{to:"/",children:Object(l.jsx)("img",{src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430",className:"header__logo"})}),(t=n,"/sign-in"===t.pathname?Object(l.jsx)(j.b,{to:"/sign-up",className:"header__sign",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}):"/sign-up"===t.pathname?Object(l.jsx)(j.b,{to:"/sign-in",className:"header__sign",children:"\u0412\u0445\u043e\u0434"}):"/"===t.pathname?Object(l.jsxs)("div",{children:[Object(l.jsx)(j.b,{to:"",className:"header__sign",children:localStorage.getItem("email")}),Object(l.jsx)(j.b,{to:"/sign-up",onClick:c,className:"header__sign header__sign_exit",children:"\u0412\u044b\u0439\u0442\u0438"})]}):void 0)]})},h=c.a.createContext();var m=function(e){var t=c.a.useContext(h),n=e.card.owner._id===t._id,a="".concat(n?"card__delete":"card__delete_hidden"),o=e.card.likes.some((function(e){return e._id===t._id})),s="card__like ".concat(o?"card__like_active":"");return Object(l.jsxs)("article",{className:"card__item",children:[Object(l.jsxs)("div",{className:"card__block-img",onClick:function(){e.onCardClick(e.card)},children:[Object(l.jsx)("img",{className:"card__img",alt:e.card.name,src:e.card.link}),Object(l.jsx)("button",{onClick:function(t){e.onCardDelete(e.card),t.stopPropagation()},className:a})]}),Object(l.jsxs)("div",{className:"card__signature-block",children:[Object(l.jsx)("h3",{className:"card__title",children:e.card.name}),Object(l.jsxs)("div",{className:"card__block-like",children:[Object(l.jsx)("button",{type:"button",onClick:function(){e.onCardLike(e.card,o)},className:s}),Object(l.jsx)("p",{className:"card__counter",children:e.card.likes.length})]})]})]})};function f(e){var t=c.a.useContext(h);return Object(l.jsxs)("main",{className:"main",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsx)("div",{className:"profile__avatar",onClick:e.onEditAvatar,style:{backgroundImage:"url(".concat(t.avatar,")")}}),Object(l.jsxs)("div",{className:"profile__profile-info",children:[Object(l.jsxs)("div",{className:"profile__name-block",children:[Object(l.jsx)("h1",{className:"profile__name",children:t.name}),Object(l.jsx)("button",{onClick:e.onEditProfile,"aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",type:"button",className:"profile__edit-button"})]}),Object(l.jsx)("p",{className:"profile__description",children:t.about})]}),Object(l.jsx)("button",{type:"button",className:"profile__add-button",onClick:e.onAddPlace})]}),Object(l.jsx)("section",{className:"card",children:e.cards.map((function(t){return Object(l.jsx)(m,{card:t,onCardDelete:e.onCardDelete,onCardLike:e.onCardLike,onCardClick:e.onCardClick},t._id)}))})]})}var _=function(e){return Object(l.jsx)("div",{className:"popup popup_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(l.jsxs)("div",{className:"popup__window",children:[Object(l.jsx)("button",{type:"button",className:"popup__button-close",onClick:e.onClose}),e.imgStatus&&Object(l.jsx)("h2",{children:"\u0432\u0441\u0435 \u043e\u043a"}),Object(l.jsx)("h2",{className:"popup__title",children:e.title}),Object(l.jsx)("form",{onSubmit:e.onSubmit,name:"popup_form-".concat(e.name),action:"#",className:"popup__form popup__".concat(e.name),children:Object(l.jsxs)("fieldset",{className:"popup__fieldset",children:[e.children,Object(l.jsx)("input",{type:"submit",className:"popup__save-button",value:e.buttonText})]})})]})})};var O=function(e){var t,n;return Object(l.jsx)("div",{className:"popup popup_img ".concat(e.card?"popup_opened":""),children:Object(l.jsxs)("div",{className:"popup__window-img",children:[Object(l.jsx)("img",{className:"popup__img",src:e.card?e.card.link:"",alt:null===(t=e.card)||void 0===t?void 0:t.name}),Object(l.jsx)("button",{type:"button",className:"popup__button-close popup__button-close_img",onClick:e.onClose}),Object(l.jsx)("figcaption",{className:"popup__figcaption",children:null===(n=e.card)||void 0===n?void 0:n.name})]})})},g=n(13),x=n(14),v=new(function(){function e(t){var n=t.baseUrl,a=t.token;Object(g.a)(this,e),this.baseUrl=n,this.token=a}return Object(x.a)(e,[{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cohort-28/cards"),{headers:{authorization:this.token}}).then(this._getResponse)}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this.baseUrl,"/cohort-28/cards"),{method:"POST",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:n})}).then(this._getResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cohort-28/cards/").concat(e),{method:"DELETE",headers:{authorization:this.token,"Content-Type":"application/json"}}).then(this._getResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/cohort-28/users/me"),{headers:{authorization:this.token}}).then(this._getResponse)}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this.baseUrl,"/cohort-28/users/me"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})}).then(this._getResponse)}},{key:"toogleLike",value:function(e,t){return fetch("".concat(this.baseUrl,"/cohort-28/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:{authorization:this.token,"Content-Type":"application/json"}}).then(this._getResponse)}},{key:"setUserAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this.baseUrl,"/cohort-28/users/me/avatar"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then(this._getResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1",token:"ed090d15-3957-4628-b8b0-5938578032af"});function N(e){var t=c.a.useContext(h),n=c.a.useState(""),a=Object(r.a)(n,2),o=a[0],s=a[1],i=c.a.useState(""),u=Object(r.a)(i,2),p=u[0],d=u[1];return c.a.useEffect((function(){s(t.name),d(t.about)}),[t,e.isOpen]),Object(l.jsxs)(_,{onClose:e.onClose,isOpen:e.isOpen,name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:o,about:p})},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(l.jsxs)("label",{htmlFor:"",className:"popup__label",children:[Object(l.jsx)("input",{type:"text",value:o||"",onChange:function(e){s(e.target.value)},name:"name",id:"name",className:"popup__input",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0}),Object(l.jsx)("span",{className:"popup__form-error name-error"})]}),Object(l.jsxs)("label",{htmlFor:"",className:"popup__label",children:[Object(l.jsx)("input",{type:"text",value:p||"",onChange:function(e){d(e.target.value)},name:"description",id:"description",className:"popup__input",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",required:!0}),Object(l.jsx)("span",{className:"popup__form-error description-error"})]})]})}function k(e){var t=c.a.useRef();return c.a.useEffect((function(){t.current.value=""}),[e.isOpen]),Object(l.jsx)(_,{onClose:e.onClose,isOpen:e.isOpen,name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:Object(l.jsxs)("label",{htmlFor:"",className:"popup__label",children:[Object(l.jsx)("input",{ref:t,type:"url",name:"src",id:"urlavatar",className:"popup__input popup__input_card",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0}),Object(l.jsx)("span",{className:"popup__form-error urlavatar-error"})]})})}function C(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],o=n[1],s=c.a.useState(""),i=Object(r.a)(s,2),u=i[0],p=i[1];return c.a.useEffect((function(){o(""),p("")}),[e.isOpen]),Object(l.jsxs)(_,{onClose:e.onClose,isOpen:e.isOpen,name:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",onSubmit:function(t){t.preventDefault(),e.onUpdateCards({name:a,link:u})},buttonText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",children:[Object(l.jsxs)("label",{htmlFor:"",className:"popup__label",children:[Object(l.jsx)("input",{type:"text",value:a,onChange:function(e){o(e.target.value)},name:"title",id:"title",className:"popup__input popup__input_card",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0}),Object(l.jsx)("span",{className:"popup__form-error title-error"})]}),Object(l.jsxs)("label",{htmlFor:"",className:"popup__label",children:[Object(l.jsx)("input",{type:"url",value:u,onChange:function(e){p(e.target.value)},name:"src",id:"src",className:"popup__input popup__input_card",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(l.jsx)("span",{className:"popup__form-error src-error"})]})]})}n(20);var y=new(function(){function e(t){var n=t.baseUrl;Object(g.a)(this,e),this.baseUrl=n}return Object(x.a)(e,[{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"register",value:function(e,t){return fetch("".concat(this.baseUrl,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(this._getResponse)}},{key:"authorize",value:function(e,t){return fetch("".concat(this.baseUrl,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(this._getResponse)}},{key:"checkToken",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(this._getResponse)}}]),e}())({baseUrl:"https://auth.nomoreparties.co"});function S(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),u=i[0],p=i[1],j=Object(d.g)();function b(e,t){t(e.target.value)}return Object(l.jsx)("main",{className:"main",children:Object(l.jsxs)("section",{className:"sign",children:[Object(l.jsx)("h2",{className:"sign__title",children:"\u0412\u0445\u043e\u0434"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),y.authorize(u,c).then((function(t){t.token&&(localStorage.setItem("token",t.token),p(""),o(""),e.setLogin(),j.push("/"))})).catch((function(e){console.log(e)}))},className:"sign__form",action:"",children:[Object(l.jsx)("input",{placeholder:"Email",value:c,onChange:function(e){return b(e,o)},className:"sign__form-input",type:"email"}),Object(l.jsx)("input",{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:u,onChange:function(e){return b(e,p)},className:"sign__form-input",type:"password"}),Object(l.jsx)("button",{className:"sign__button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})}function U(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),u=i[0],p=i[1];function d(e,t){t(e.target.value)}return Object(l.jsx)("main",{className:"main",children:Object(l.jsxs)("section",{className:"sign",children:[Object(l.jsx)("h2",{className:"sign__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.isRegistration({email:c,password:u})},className:"sign__form",children:[Object(l.jsx)("input",{placeholder:"Email",value:c,onChange:function(e){return d(e,o)},className:"sign__form-input",type:"email"}),Object(l.jsx)("input",{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:u,onChange:function(e){return d(e,p)},className:"sign__form-input",type:"password"}),Object(l.jsx)("button",{className:"sign__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(l.jsx)(j.b,{to:"/sign-in",className:"sign__signin",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c? \u0412\u043e\u0439\u0442\u0438"})]})})}var T=n(24),E=n(25),L=["component"],I=function(e){var t=e.component,n=Object(E.a)(e,L);return Object(l.jsx)(d.b,{children:function(){return n.loginIn?Object(l.jsx)(t,Object(T.a)({},n)):Object(l.jsx)(d.a,{to:"/sign-up"})}})};function w(e){return Object(l.jsx)("div",{className:"popup popup_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(l.jsxs)("div",{className:"popup__window",children:[Object(l.jsx)("button",{type:"button",className:"popup__button-close",onClick:e.onClose}),Object(l.jsxs)("div",{className:"popup__info-tool",children:[Object(l.jsx)("div",{className:"popup__info-tool_".concat(e.classStatus)}),Object(l.jsx)("h2",{className:"popup__title popup__title_infotool",children:e.title})]})]})})}var P=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],o=t[1],s=Object(a.useState)(!1),p=Object(r.a)(s,2),j=p[0],m=p[1],g=Object(a.useState)(!1),x=Object(r.a)(g,2),T=x[0],E=x[1],L=Object(a.useState)(null),P=Object(r.a)(L,2),R=P[0],D=P[1],A=Object(a.useState)({}),z=Object(r.a)(A,2),F=z[0],J=z[1],q=c.a.useState([]),B=Object(r.a)(q,2),H=B[0],M=B[1],G=c.a.useState(!1),Y=Object(r.a)(G,2),K=Y[0],Q=Y[1],V=Object(a.useState)(!1),W=Object(r.a)(V,2),X=W[0],Z=W[1],$=Object(a.useState)(""),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(""),ce=Object(r.a)(ae,2),oe=ce[0],se=ce[1],ie=Object(d.g)(),re=function(){o(!1),E(!1),m(!1),D(!1),D(null)},le=function(e){Q(e)},ue=Object(a.useCallback)((function(){if(localStorage.getItem("token")){var e=localStorage.getItem("token");y.checkToken(e).then((function(e){Q(!0),ie.push("/"),localStorage.setItem("email",e.data.email)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0442\u043e\u043a\u0435\u043d\u0430: ".concat(e))}))}}),[ie]);function pe(e){J(e),re()}return c.a.useEffect((function(){v.getUserInfo().then((function(e){J(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445: ".concat(e))})),v.getInitialCards().then((function(e){return M(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445: ".concat(e))})),ue()}),[K,ue]),c.a.useEffect((function(){var e=function(e){"Escape"===e.key&&re()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]),Object(l.jsx)("div",{className:"root__page",children:Object(l.jsxs)(h.Provider,{value:F,children:[Object(l.jsx)(b,{isLoginIn:le}),Object(l.jsxs)(d.d,{children:[Object(l.jsx)(I,{exact:!0,path:"/",loginIn:K,component:f,onEditProfile:function(){o(!0)},onAddPlace:function(){m(!0)},onEditAvatar:function(){E(!0)},onCardClick:function(e){D(e)},cards:H,onCardLike:function(e,t){v.toogleLike(e._id,!t).then((function(t){M((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043b\u0430\u0439\u043a\u0430: ".concat(e))}))},onCardDelete:function(e){v.deleteCard(e._id).then((function(t){M(H.filter((function(t){return t._id!==e._id})))})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))}))}}),Object(l.jsx)(d.b,{path:"/sign-up",children:Object(l.jsx)(U,{isRegistration:function(e){y.register(e).then((function(e){ne("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"),se("accept-status")})).catch((function(e){ne(e),se("error-status")})).finally((function(){Z(!0)}))}})}),Object(l.jsx)(d.b,{path:"/sign-in",children:Object(l.jsx)(S,{setLogin:le})})]}),Object(l.jsx)(u,{}),Object(l.jsx)(N,{onUpdateUser:function(e){v.setUserInfo(e).then((function(e){pe(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0435\u0442\u044f\u043b: ".concat(e))}))},isOpen:n,onClose:re}),Object(l.jsx)(C,{onUpdateCards:function(e){v.addCard(e).then((function(e){M([e].concat(Object(i.a)(H))),re()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))}))},isOpen:j,onClose:re}),Object(l.jsx)(k,{onUpdateAvatar:function(e){v.setUserAvatar(e).then((function(e){pe(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0430\u0432\u0430\u0442\u0430\u0440: ".concat(e))}))},isOpen:T,onClose:re}),Object(l.jsx)(w,{name:"infotool",onClose:function(){Z(!1)},isOpen:X,title:te,classStatus:oe}),Object(l.jsx)(_,{name:"delete-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430"}),Object(l.jsx)(O,{card:R,onClose:re})]})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(j.a,{children:Object(l.jsx)(P,{})})}),document.getElementById("root")),R()}},[[37,1,2]]]);
//# sourceMappingURL=main.ef8924a9.chunk.js.map