!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var c={id:e,exports:{}};return n[e]=c,r.call(c.exports,c,c.exports),c.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r),r.register("eHvKh",(function(e,n){var t=document.querySelector(".js-characters-list"),r=document.querySelector(".js-load-more"),c=1;function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return fetch("https://rickandmortyapi.com/api/character?page=".concat(e)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function a(e){var n=e.map((function(e){var n=e.image,t=e.name,r=e.status;return'<li class="js-character-item">\n      <img src="'.concat(n,'" alt="').concat(t,'" class="js-character-img">\n      <p class="js-character-name">Name: <b>').concat(t,'</b></p>\n      <p class="js-character-status">Status: <b>').concat(r,"</b></p>\n    </li>")})).join();t.insertAdjacentHTML("beforeend",n)}r.addEventListener("click",(function(){o(c+=1).then((function(e){a(e.results),c===e.info.pages&&(r.hidden=!0)})).catch((function(e){return console.log(e)}))})),o().then((function(e){a(e.results),r.hidden=!1})).catch((function(e){return console.log(e)}))})),r("eHvKh")}();
//# sourceMappingURL=rickandmorty.b85166cf.js.map