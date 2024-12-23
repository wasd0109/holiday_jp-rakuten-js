const fs = require('fs'),
  util = require('util'),
  yaml = require('js-yaml'),
  moment = require('moment');

const writeFile = (file_name, holidays) => {
  const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
  const jsfile = [util.format('// Generated from holidays.yml at %s;', timestamp)];
  jsfile.push('var holidays = {};');
  for (const date of Object.keys(holidays)) {
    jsfile.push(`holidays['${moment(new Date(date)).format('YYYY-MM-DD')}'] = {`);
    jsfile.push(`  'date': '${moment(new Date(date)).format('YYYY-MM-DD')}',`);
    jsfile.push(`  'week': '${holidays[date]['week']}',`);
    jsfile.push(`  'week_en': '${holidays[date]['week_en']}',`);
    jsfile.push(`  'name': '${holidays[date]['name']}',`);
    jsfile.push(`  'name_en': "${holidays[date]['name_en']}"`);
    jsfile.push('};');
  }
  jsfile.push('module.exports = holidays;');
  jsfile.push('');

  fs.writeFileSync(file_name, jsfile.join('\n'));
};
const rakutenHolidays = yaml.safeLoad(fs.readFileSync(__dirname + '/../rakuten_holidays_detailed.yml', 'utf8'));
const japanHolidays = yaml.safeLoad(fs.readFileSync(__dirname + '/../holiday_jp/holidays_detailed.yml', 'utf8'));
const holidays = { ...rakutenHolidays, ...japanHolidays };
writeFile(`${__dirname}/../lib/holidays.js`, holidays);

const holidays_every_year = Object.keys(holidays).reduce((holidays_every_year, date) => {
  const year = moment(new Date(date)).format('YYYY');
  const holidays_per_year = { ...holidays_every_year[year], [date]: holidays[date] };
  return { ...holidays_every_year, [year]: holidays_per_year };
}, {});

for (const year of Object.keys(holidays_every_year)) {
  writeFile(`${__dirname}/../lib/holidays_every_year/${year}.js`, holidays_every_year[year]);
}
