# holiday_jp JavaScript fork with Rakuten Holiday [![test](https://github.com/holiday-jp/holiday_jp-js/workflows/test/badge.svg)](https://github.com/holiday-jp/holiday_jp-js/actions)

Get holidays in Japan with Rakuten Holiday's added as published

This fork is a modified, renamed and redistributed version of [holiday_jp-js](https://github.com/holiday-jp/holiday_jp-js) based on the MIT license and enforce the license's rule as of following

Currently include only 2023-2025 holidays, please create pull request for the rakuten_holidays_detailed.yml and this readme file to extend support before 2023.

1. Inclusion of the original copyright notice
2. Acknowledgment of the original author
3. Statement of No warranty

Tests are currently WIP

## Install

```sh
$ npm install rakuten_holiday_jp
```

## Usage
In Node

```javascript
var rakuten_holiday_jp = require('rakuten_holiday_jp');
var holidays = rakuten_holiday_jp.between(new Date('2023-12-01'), new Date('2023-12-31'));
console.log(holidays[0]['name']); // 楽天休暇
```

If you want to use specific years only

```javascript
var rakuten_holiday_jp = require('rakuten_holiday_jp/lib/no_autoload_holidays');
var holidays_2023 = require('rakuten_holiday_jp/lib/holidays_every_year/2023');
var holidays_2024 = require('rakuten_holiday_jp/lib/holidays_every_year/2024');
rakuten_holiday_jp.setHolidays([holidays_2023, holidays_2024]);

var holidays = rakuten_holiday_jp.between(new Date('2023-12-01'), new Date('2023-12-31'));
console.log(holidays[0]['name']); // 楽天休暇
```

In TypeScript

```typescript
import * as rakuten_holiday_jp from 'rakuten_holiday_jp';
const holidays = rakuten_holiday_jp.between(new Date('2023-12-01'), new Date('2023-12-31'));
console.log(holidays[0]['name']); // 楽天休暇
```
