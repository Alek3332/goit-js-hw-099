!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("6JpON");function u(e,t){var n=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}e(i).Notify.init({timeout:6e3}),document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();var n=t.currentTarget.elements,o=n.delay,r=n.step,a=n.amount,l=Number(o.value),f=Number(r.value),c=Number(a.value);if(c<=0||l<=0||f<0)return void e(i).Notify.failure("The entered value should be greater then 0");(function(t,n,o){for(var r=1;r<=t;r+=1)1===r&&(n-=o),u(r,n+=o).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))})(c,l,f),t.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.40daef98.js.map
