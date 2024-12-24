
  // AMD / RequireJS
  if (typeof define !== 'undefined' && define.amd) {
    define('rakuten_holiday_jp', [], function () {
      return rakuten_holiday_jp;
    });
  }
  // Node.js
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = rakuten_holiday_jp;
  }
  // included directly via <script> tag
  else {
    root = Function('return this')();
    root.rakuten_holiday_jp = rakuten_holiday_jp;
  }
  
})();
