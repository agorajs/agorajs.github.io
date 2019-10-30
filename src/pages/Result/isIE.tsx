export const isIE = (function() {
  var ua = window.navigator.userAgent;
  var isIE = /MSIE|Trident/.test(ua);
  return isIE;
})();
