# handlebars-helper-range

A [Handlebars][] helper for generating a range of integer values for block
context.

[![Build Status][build-badge]][build-status]
[![npm Version][npm-badge]][npm]
[![Dependency Status][dep-badge]][dep-status]

## Installation

Install using npm:

    $ npm install handlebars-helper-range

## Usage

**helpers.js**

Example helpers file that requires in Handlebars and registers the range
helper under the name "range".

```js
var Handlebars = require('handlebars');

Handlebars.registerHelper('range', require('handlebars-helper-range'));
```

Once registered, templates will have access to the "range" helper which
accepts up to three arguments: start (optional, defaults to 0, the start
of the range), stop (the end of the range), and step (optional, defaults
to 1, the value to increment or decrement by).

## Example Templates

**templates/example1.handlebars**

Example template file that generates the list 0 through 9.

```
<ul>
  {{#range 10}}
    <li>{{this}}</li>
  {{/range}}
</ul>
```

**templates/example2.handlebars**

Example template file that generates the list 1 through 10.

```
<ul>
  {{#range 1 11}}
    <li>{{this}}</li>
  {{/range}}
</ul>
```

**templates/example3.handlebars**

Example template file that generates the list 0, 5, 10, 15.

```
<ul>
  {{#range 0 20 5}}
    <li>{{this}}</li>
  {{/range}}
</ul>
```

## License

MIT

[Handlebars]: http://handlebarsjs.com/
[build-badge]: https://img.shields.io/travis/jimf/handlebars-helper-range/master.svg
[build-status]: https://travis-ci.org/jimf/handlebars-helper-range
[npm-badge]: https://img.shields.io/npm/v/handlebars-helper-range.svg
[npm]: https://www.npmjs.org/package/handlebars-helper-range
[dep-badge]: https://img.shields.io/david/jimf/handlebars-helper-range.svg
[dep-status]: https://david-dm.org/jimf/handlebars-helper-range
