var { describe, it } = require("node:test");
var { strictEqual } = require("node:assert");
var yaml = require('js-yaml');
var holidays = require('./../lib/holidays');

var HOLIDAYS_DETAIL_URL = 'https://raw.githubusercontent.com/holiday-jp/holiday_jp/master/holidays_detailed.yml';
var RAKUTEN_HOLIDAYS_DETAIL_URL = 'https://raw.githubusercontent.com/wasd0109/holiday_jp-rakuten-js/refs/heads/master/rakuten_holidays_detailed.yml';

describe('holidays', function () {
  it('holidays should be holiday all holidays_detailed.yml', function (_, done) {
    fetch(HOLIDAYS_DETAIL_URL)
      .then(res => res.text())
      .then(jpHolidaysBody => {
        fetch(RAKUTEN_HOLIDAYS_DETAIL_URL).then(res => res.text()).then(rakutenHolidaysBody => {
          var jpTestset = yaml.safeLoad(jpHolidaysBody);
          var rakutenTestset = yaml.safeLoad(rakutenHolidaysBody);
          function format(date) {
            var year = date.getFullYear();
            var month = ('0' + (date.getMonth() + 1)).slice(-2);
            var day = ('0' + (date.getDate())).slice(-2);
            return (year + '-' + month + '-' + day);
          }
          Object.keys(testset).forEach(function (key) {
            var d = format(new Date(key));
            strictEqual(holidays[d].name, testset[key].name);
          });
          done();
        });
      });
  });
});
