# @rhgavriel/val-or-meow

[![npm (scoped)](https://img.shields.io/npm/v/@rhgavriel/val-or-meow.svg?style=flat)](https://www.npmjs.com/package/@rhgavriel/val-or-meow)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@rhgavriel/val-or-meow.svg?style=flat)](https://www.npmjs.com/package/@rhgavriel/val-or-meow)

Sometimes turns val into meow.

## Install

```
$ npm install @rhgavriel/val-or-meow
```

## Usage

```js
const valOrMeow = require("@rhgavriel/valOrMeow");

valOrMeow("wow much cat");
//=> "Mrrow"
//=> "wow much cat"

valOrMeow(1337);
//=> "Purr"

valOrMeow(() => console.log("why did you do this?"));
//=> "Meow"
```
