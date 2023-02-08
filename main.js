(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{Ht:()=>it,lH:()=>et,eY:()=>tt});var e=document.querySelector(".profile"),r=e.querySelector(".profile__btn-edit"),n=e.querySelector(".profile__btn-add"),o=e.querySelector(".profile__btn-avatar-edit");function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===i(o)?o:String(o)),n)}var o}var a=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._serverUrl=e.baseUrl,this._headers=e.headers}var e,r;return e=t,(r=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"_request",value:function(t,e){return fetch(t,e).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return this._request("".concat(this._serverUrl,"/users/me"),{headers:this._headers})}},{key:"sendUserInfo",value:function(t){return this._request("".concat(this._serverUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:"".concat(t.name),about:"".concat(t.about)})})}},{key:"setUserAvatar",value:function(t){return this._request("".concat(this._serverUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:"".concat(t.avatar)})})}},{key:"getInitialCards",value:function(){return this._request("".concat(this._serverUrl,"/cards"),{headers:this._headers})}},{key:"sendNewCardInfo",value:function(t){return this._request("".concat(this._serverUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:"".concat(t.name),link:"".concat(t.link)})})}},{key:"deleteCard",value:function(t){return this._request("".concat(this._serverUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers})}},{key:"setCardLike",value:function(t){return this._request("".concat(this._serverUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers})}},{key:"deleteCardLike",value:function(t){return this._request("".concat(this._serverUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers})}}])&&u(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-59",headers:{authorization:"1625a9d8-48f8-436e-897b-1626c226f4c0","Content-Type":"application/json"}}),l=function(t,e){et.open(t,e)},c=function(t){it.open(),it.handleFormSubmit((function(){return a.deleteCard(t.getCardId()).then((function(){t.deleteCard()})).catch((function(t){console.log(t)}))}))},s=function(t){t.cardData.likes.find((function(t){return t._id===tt.getUserId()}))?a.deleteCardLike(t.getCardId()).then((function(e){t.handleCardLikeUpdate(e)})).catch((function(t){console.log(t)})):a.setCardLike(t.getCardId()).then((function(e){t.handleCardLikeUpdate(e)})).catch((function(t){console.log(t)}))};function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===f(o)?o:String(o)),n)}var o}var y=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e.addItem(t)}))}},{key:"addItem",value:function(t){var e=this._renderer(t);this._container.prepend(e)}}])&&p(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===m(o)?o:String(o)),n)}var o}var h=function(){function t(e,r,n,o,i,u){var a=u.userId;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cardData=e,this._name=this.cardData.name,this._link=this.cardData.link,this._cardId=this.cardData._id,this._cardOwnerId=this.cardData.owner._id,this._likes=this.cardData.likes,this._templateSelector=r,this._userId=a,this._handleCardClick=n,this._handleDeleteClick=o,this._handleCardLike=i,this._element=this._getTemplate(),this._cardImageElement=this._element.querySelector(".card__img"),this._cardLikeButtonElement=this._element.querySelector(".card__btn-like"),this._cardLikeCounterElement=this._element.querySelector(".card__like-counter"),this._cardDeleteButtonElement=this._element.querySelector(".card__btn-del"),this._cardTitleElement=this._element.querySelector(".card__title")}var e,r;return e=t,(r=[{key:"_setEventListeners",value:function(){var t=this;this._cardImageElement.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)})),this._cardLikeButtonElement.addEventListener("click",(function(){t._handleCardLike(t)})),this._cardDeleteButtonElement.addEventListener("click",(function(){t._handleDeleteClick(t)}))}},{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){var t=this;return this._cardTitleElement.textContent=this._name,this._cardImageElement.src=this._link,this._cardImageElement.alt=this._name,this._cardLikeCounterElement.textContent=this._likes.length,this._cardOwnerId!==this._userId&&this._cardDeleteButtonElement.classList.toggle("card__btn-del_inactive"),this._likes.find((function(e){return e._id===t._userId}))&&this._handleLikeButton(),this._setEventListeners(),this._element}},{key:"getCardId",value:function(){return this._cardId}},{key:"_handleLikeButton",value:function(){this._cardLikeButtonElement.classList.toggle("card__btn-like_active")}},{key:"handleCardLikeUpdate",value:function(t){this.cardData=t,this._cardLikeCounterElement.textContent=t.likes.length,this._handleLikeButton()}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}}])&&d(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,g(n.key),n)}}function g(t){var e=function(t,e){if("object"!==v(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===v(e)?e:String(e)}var S=function(){function t(e,r){var n,o,i,u,a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,i=function(){a._toggleButtonState(),a._inputList.forEach((function(t){t.classList.contains(a._inputErrorClass)&&a._hideError(t)}))},(o=g(o="resetValidationsErrors"))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,this._formElement=r,this._inputSelector=e.inputSelector,this._inputList=function(t){if(Array.isArray(t))return b(t)}(u=this._formElement.querySelectorAll(this._inputSelector))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(u)||function(t,e){if(t){if("string"==typeof t)return b(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(t,e):void 0}}(u)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this._submitButtonElement=this._formElement.querySelector(e.submitButtonSelector),this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass}var e,r;return e=t,(r=[{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))})),this._formElement.addEventListener("reset",(function(){t._submitButtonElement.disabled=!0}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this._submitButtonElement.disabled=!0:this._submitButtonElement.disabled=!1}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideError(t):this._showError(t)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_hideError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_showError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),e.textContent=t.validationMessage,e.classList.add(this._errorClass)}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&_(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,k(n.key),n)}}function k(t){var e=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===E(e)?e:String(e)}var O=function(){function t(e){var r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"===t.key&&i.close()},(n=k(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(e),this._popupCloseButtonElement=this._popup.querySelector(".popup__btn-close")}var e,r;return e=t,(r=[{key:"setEventListeners",value:function(){var t=this;this._popupCloseButtonElement.addEventListener("click",(function(){t.close()})),this._popup.addEventListener("mousedown",(function(e){e.target===e.currentTarget&&t.close()}))}},{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_opened")}}])&&w(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function P(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=L(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},C.apply(this,arguments)}function L(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function T(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(n);if(o){var r=q(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return T(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._imgPopupElement=e._popup.querySelector(".popup__img"),e._captionImgPopupElement=e._popup.querySelector(".popup__img-caption"),e}return e=u,(r=[{key:"open",value:function(t,e){this._imgPopupElement.src=e,this._imgPopupElement.alt=t,this._captionImgPopupElement.textContent=t,C(q(u.prototype),"open",this).call(this)}}])&&P(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(O);function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function A(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===U(o)?o:String(o)),n)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=x(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},R.apply(this,arguments)}function x(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}function D(t,e){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},D(t,e)}function F(t,e){if(e&&("object"===U(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&D(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(n);if(o){var r=V(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return F(this,t)});function u(t,e){var r,n=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._handleFormSubmit=n,r._formElement=r._popup.querySelector(".popup__form"),r._inputList=r._formElement.querySelectorAll(".popup__form-input"),r._submitFormButtonElement=r._formElement.querySelector(".popup__btn-form-submit"),r._submitFormButtonText=r._submitFormButtonElement.textContent,r}return e=u,r=[{key:"setEventListeners",value:function(){var t=this;R(V(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._renderLoading(!0),t._handleFormSubmit(t._getInputValues()).then((function(){return t.close()})).catch((function(t){console.log(t)})).finally((function(){return t._renderLoading(!1)}))}))}},{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"close",value:function(){this._formElement.reset(),R(V(u.prototype),"close",this).call(this)}},{key:"_renderLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._submitFormButtonElement.textContent=t?e:this._submitFormButtonText}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}}],r&&A(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(O);function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function J(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==H(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==H(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===H(o)?o:String(o)),n)}var o}function M(){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=$(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},M.apply(this,arguments)}function $(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=G(t)););return t}function z(t,e){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},z(t,e)}function Y(t,e){if(e&&("object"===H(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function G(t){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},G(t)}var K=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&z(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=G(n);if(o){var r=G(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return Y(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._formElement=e._popup.querySelector(".popup__form"),e._submitFormButtonElement=e._formElement.querySelector(".popup__btn-form-submit"),e._submitFormButtonText=e._submitFormButtonElement.textContent,e}return e=u,r=[{key:"setEventListeners",value:function(){var t=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._renderLoading(!0),t._handleFormSubmit().then((function(){return t.close()})).catch((function(t){console.log(t)})).finally((function(){return t._renderLoading(!1)}))})),M(G(u.prototype),"setEventListeners",this).call(this)}},{key:"handleFormSubmit",value:function(t){this._handleFormSubmit=t}},{key:"_renderLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Удаление...";this._submitFormButtonElement.textContent=t?e:this._submitFormButtonText}}],r&&J(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(O);function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}function W(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Q(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==Q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===Q(o)?o:String(o)),n)}var o}var X=function(){function t(e){var r=e.profileNameSelector,n=e.profileAboutSelector,o=e.profileAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileNameElement=document.querySelector(r),this._profileAboutElement=document.querySelector(n),this._profileAvatarElement=document.querySelector(o)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._profileNameElement.textContent,about:this._profileAboutElement.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about,n=t.avatar,o=t._id;this._profileNameElement.textContent=e,this._profileAboutElement.textContent=r,this._profileAvatarElement.src=n,this._userId=o}},{key:"getUserId",value:function(){return this._userId}}])&&W(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Z(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}Promise.all([a.getUserInfo(),a.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return Z(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Z(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];tt.setUserInfo(o),at.renderItems(i.reverse())})).catch((function(t){console.log(t)}));var tt=new X({profileNameSelector:".profile__user-name",profileAboutSelector:".profile__user-about",profileAvatarSelector:".profile__avatar"}),et=new B(".popup_type_img");et.setEventListeners();var rt=new N({handleFormSubmit:function(t){return a.sendUserInfo(t).then((function(t){tt.setUserInfo(t)})).catch((function(t){console.log(t)}))}},".popup_type_edit-profile");rt.setEventListeners();var nt=new N({handleFormSubmit:function(t){return a.sendNewCardInfo(t).then((function(t){at.addItem(t)})).catch((function(t){console.log(t)}))}},".popup_type_add-card");nt.setEventListeners();var ot=new N({handleFormSubmit:function(t){return a.setUserAvatar(t).then((function(t){tt.setUserInfo(t)})).catch((function(t){console.log(t)}))}},".popup_type_avatar-edit");ot.setEventListeners();var it=new K(".popup_type_card-delete-confirmation");it.setEventListeners();var ut,at=new y({renderer:function(t){return new h(t,".card-template",l,c,s,{userId:tt.getUserId()}).generateCard()}},".cards__wrapper"),lt={};ut={formSelector:".popup__form",inputSelector:".popup__form-input",submitButtonSelector:".popup__btn-form-submit",inputErrorClass:"popup__form-input_type_error",errorClass:"popup__form-input-error_active"},document.querySelectorAll(ut.formSelector).forEach((function(t){var e=new S(ut,t),r=t.getAttribute("name");lt[r]=e,e.enableValidation()})),r.addEventListener("click",(function(){var t=tt.getUserInfo();rt.setInputValues(t),lt["edit-profile"].resetValidationsErrors(),rt.open()})),n.addEventListener("click",(function(){lt["add-card"].resetValidationsErrors(),nt.open()})),o.addEventListener("click",(function(){lt["avatar-edit"].resetValidationsErrors(),ot.open()}))})();