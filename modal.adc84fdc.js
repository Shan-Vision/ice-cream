parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RSqK":[function(require,module,exports) {
(()=>{const e={openOrderBtn:document.querySelector("[data-order-modal-open]"),openOrderMenuBtn:document.querySelector("[data-order-modal-open-menu]"),closeOrderBtn:document.querySelector("[data-order-modal-close]"),modalOrder:document.querySelector("[data-order-modal]"),openLocationBtn:document.querySelector("[data-location-modal-open]"),closeLocationBtn:document.querySelector("[data-location-modal-close]"),modalLocation:document.querySelector("[data-location-modal]"),openFranchiseBtn:document.querySelector("[data-franchise-modal-open]"),closeFranchiseBtn:document.querySelector("[data-franchise-modal-close]"),modalFranchise:document.querySelector("[data-franchise-modal]")};function o(){e.modalOrder.classList.toggle("is-hidden")}function n(){e.modalLocation.classList.toggle("is-hidden")}function t(){e.modalFranchise.classList.toggle("is-hidden")}e.openOrderBtn.addEventListener("click",o),e.openOrderMenuBtn.addEventListener("click",o),e.closeOrderBtn.addEventListener("click",o),e.openLocationBtn.addEventListener("click",n),e.closeLocationBtn.addEventListener("click",n),e.openFranchiseBtn.addEventListener("click",t),e.closeFranchiseBtn.addEventListener("click",t)})();
},{}]},{},["RSqK"], null)
//# sourceMappingURL=/ice-cream-study-project/modal.adc84fdc.js.map