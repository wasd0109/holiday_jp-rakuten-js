# holiday_jp JavaScript fork with Rakuten Holiday [![test](https://github.com/holiday-jp/holiday_jp-js/workflows/test/badge.svg)](https://github.com/holiday-jp/holiday_jp-js/actions)

Get holidays in Japan with Rakuten Holiday's added as published

This fork is a modified, renamed and redistributed version of [holiday_jp-js](https://github.com/holiday-jp/holiday_jp-js) based on the MIT license and enforce the license's rule as of following

Currently include only 2023-2025 holidays, please create pull request for the rakuten_holidays_detailed.yml and this readme file to extend support before 2023.

1. Inclusion of the original copyright notice
2. Acknowledgment of the original author
3. Statement of No warranty


## Install

```sh
$ npm install @holiday-jp/holiday_jp
```

## Usage

In HTML

```html
<script src="./your/own/path/holiday_jp.js"></script>
<script>
var holidays = holiday_jp.between(new Date('2010-09-14'), new Date('2010-09-21'));
console.log(holidays[0]['name']); // 敬老の日
</script>
```

In Node

```javascript
var holiday_jp = require('@holiday-jp/holiday_jp');
var holidays = holiday_jp.between(new Date('2010-09-14'), new Date('2010-09-21'));
console.log(holidays[0]['name']); // 敬老の日
```

If you want to use specific years only

```javascript
var holiday_jp = require('@holiday-jp/holiday_jp/lib/no_autoload_holidays');
var holidays_2010 = require('@holiday-jp/holiday_jp/lib/holidays_every_year/2010');
var holidays_2011 = require('@holiday-jp/holiday_jp/lib/holidays_every_year/2011');
holiday_jp.setHolidays([holidays_2010, holidays_2011]);

var holidays = holiday_jp.between(new Date('2010-09-14'), new Date('2010-09-21'));
console.log(holidays[0]['name']); // 敬老の日
```

In TypeScript

```typescript
import * as holiday_jp from '@holiday-jp/holiday_jp';
const holidays = holiday_jp.between(new Date('2010-09-14'), new Date('2010-09-21'));
console.log(holidays[0]['name']); // 敬老の日
```
