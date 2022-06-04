(()=>{"use strict";var e=document.querySelector("#popup-edit"),t=document.querySelector("#popup-new-cards"),n=document.querySelector("#popup-img"),o=document.querySelector("#popup-ava"),c=document.querySelector("#popup-del-cards"),r=document.querySelector("#profile-edit-button"),u=document.querySelector("#popup-form-cards-button"),i=document.querySelector("#profile-edit-ava-button"),a=(e.querySelector("#popup-close-edit"),t.querySelector("#popup-close-cards"),n.querySelector("#popup-close-img"),o.querySelector("#popup-close-ava"),e.querySelector("#profile-edit")),s=e.querySelector("#name-input-profile"),l=e.querySelector("#job-input-profile"),d=document.querySelector("#profile-name"),p=document.querySelector("#profile-hobby"),m=t.querySelector("#popup-form-cards"),f=t.querySelector("#name-input-cards"),v=t.querySelector("#link-input-cards"),h=document.querySelector("#elements-list"),_=c.querySelector("#popup-form-dellcards"),y=o.querySelector("#profile-edit-ava"),S=o.querySelector("#name-input-ava");function q(e){var t=e.querySelector(".popup__button");t.classList.add("button_inactive"),t.setAttribute("disabled","disabled")}function b(e){y.querySelector(".popup__button").value=e?"Сохранение...":"Сохранить"}function k(e){m.querySelector(".popup__button").value=e?"Создание...":"Создать"}var g={inputSelector:".popup__item",submitButtonSelector:".popup__submit",inputErrorClass:"popup__item_type_error",errorActiveClass:"popup__item-error_active",buttonInactive:"button_inactive"};function L(e){e.classList.add("popup_opened"),document.addEventListener("keydown",j),document.addEventListener("mousedown",C),document.addEventListener("click",P)}function E(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",j),document.removeEventListener("mousedown",C),document.removeEventListener("click",P)}function j(e){"Escape"===e.key&&E(document.querySelector(".popup_opened"))}function C(e){e.target.classList.contains("popup_opened")&&E(document.querySelector(".popup_opened"))}function P(e){e.target.classList.contains("popup__close")&&E(document.querySelector(".popup_opened"))}var x,T=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.buttonInactive),t.removeAttribute("disabled")):(t.classList.add(n.buttonInactive),t.setAttribute("disabled","disabled"))},A=function(e,t){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);T(n,o,t),n.forEach((function(c){c.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorActiveClass),o.textContent=""}(e,t,n):function(e,t,n,o){var c=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),c.classList.add(o.errorActiveClass),c.textContent=n}(e,t,t.validationMessage,n)}(e,c,t),T(n,o,t)}))}))}(e,t)},z=document.querySelector("#card-container").content,N=document.querySelector("#elements-list");function O(e){var t=e.target.closest(".elements__element").id,n=e.target.closest(".elements__element").querySelector(".elements__number-likes");"elements__like"===e.target.classList.value?M(t,n):G(t,n),e.target.classList.toggle("elements__like_active")}function w(e,t,o,r,u,i){N.prepend(function(e,t,o){var r=z.querySelector(".elements__element").cloneNode(!0);return r.querySelector(".elements__image").src=t,r.querySelector(".elements__image").alt=e,r.querySelector(".elements__title").textContent=e,r.querySelector(".elements__number-likes").textContent=o,r.querySelector(".button__delete").addEventListener("click",(function(e){x=e.target.closest(".elements__element").id,L(c)})),r.querySelector(".elements__like").addEventListener("click",O),r.querySelector(".elements__image").addEventListener("click",(function(){!function(e,t){var o=n.querySelector("#popup-img-title"),c=n.querySelector("#popup-image-link");o.textContent=e,c.src=t,c.alt=e,L(n)}(e,t)})),r}(e,t,o)),D(r),J(i),document.querySelector(".elements__element").id=u}var D=function(e){"a08e6a36aa420102251e6f12"===e&&document.querySelector(".button__delete").classList.add("button__delete_active")},J=function(e){e?document.querySelector(".elements__like").classList.add("elements__like_active"):document.querySelector(".elements__like").classList.remove("elements__like_active")},U="https://nomoreparties.co/v1/plus-cohort-10",F="8fc49208-79fe-42e6-b010-c3dc348d50d1",I=function(){var e=document.querySelector("#profile-name");return fetch("".concat(U,"/users/me"),{headers:{authorization:F}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(t){e.textContent=t.name})).catch((function(e){console.log(e)}))},B=function(){var e=document.querySelector("#profile-hobby");return fetch("".concat(U,"/users/me"),{headers:{authorization:F}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(t){e.textContent=t.about})).catch((function(e){console.log(e)}))},H=function(){var e=document.querySelector(".profile__avatar");return fetch("".concat(U,"/users/me"),{headers:{authorization:F}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(t){e.src=t.avatar})).catch((function(e){console.log(e)}))},M=function(e,t){fetch("".concat(U,"/cards/likes/").concat(e," "),{method:"PUT",headers:{authorization:F,"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){t.textContent=e.likes.length})).catch((function(e){console.log(e)}))},G=function(e,t){return fetch("".concat(U,"/cards/likes/").concat(e," "),{method:"DELETE",headers:{authorization:F,"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){t.textContent=e.likes.length})).catch((function(e){console.log(e)}))};A(e,g),A(t,g),A(o,g),r.addEventListener("click",(function(t){s.value=d.textContent,l.value=p.textContent,L(e)})),u.addEventListener("click",(function(e){m.reset(),L(t),q(t)})),i.addEventListener("click",(function(e){y.reset(),L(o),q(o)})),a.addEventListener("submit",(function(t){var n,o;t.preventDefault(),d.textContent=s.value,p.textContent=l.value,n=s.value,o=l.value,fetch("".concat(U,"/users/me"),{method:"PATCH",headers:{authorization:F,"Content-Type":"application/json"},body:JSON.stringify({name:n,about:o})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){I(),B()})).catch((function(e){console.log(e)})),I(),B(),E(e)})),m.addEventListener("submit",(function(e){var n,o;e.preventDefault(),k(!0),n=f.value,o=v.value,fetch("".concat(U,"/cards "),{method:"POST",headers:{authorization:F,"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({name:n,link:o})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){var t=JSON.stringify(e),n=JSON.parse(t),o=!1;o=!1,n.likes.forEach((function(e){"a08e6a36aa420102251e6f12"===e._id&&(o=!0)}));var c=n._id;w(n.name,n.link,n.likes.length,n.owner._id,c,o)})).then((function(){k(!1),E(t)})).catch((function(e){console.log(e)}))})),I(),B(),H(),fetch("".concat(U,"/cards"),{headers:{authorization:F}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){var t=JSON.stringify(e),n=JSON.parse(t);n.reverse();var o=!1;n.forEach((function(e){o=!1,e.likes.forEach((function(e){"a08e6a36aa420102251e6f12"===e._id&&(o=!0)}));var t=e._id;w(e.name,e.link,e.likes.length,e.owner._id,t,o)}))})).catch((function(e){console.log(e)})),_.addEventListener("submit",(function(e){var t;e.preventDefault(),t=x,fetch("".concat(U,"/cards/").concat(t," "),{method:"DELETE",headers:{authorization:F,"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){console.log(e),function(e){h.querySelectorAll(".elements__element").forEach((function(t){console.log(t.id),t.id===e&&t.remove()}))}(t),E(c)})).catch((function(e){console.log(e)}))})),y.addEventListener("submit",(function(e){var t;e.preventDefault(),b(!0),t=S.value,fetch("".concat(U,"/users/me/avatar"),{method:"PATCH",headers:{authorization:F,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){console.log(e),H(),b(!1),E(o)})).catch((function(e){console.log(e)}))}))})();