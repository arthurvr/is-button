# is-button

> Check if an element is a button (`<button>` or `input[type="button"]`)

*Supported in IE8+.*


## Install

```
$ npm install --save is-button
```


## Usage

```js
const isButton = require('is-button');

isButton(document.querySelector('#el')); // <button id="el">Button</button>
//=> true

isButton(document.querySelector('#el')); // <input type="button" id="el">
//=> true

isButton(document.querySelector('#el')); // <strong id="el">Not a button</strong>
//=> false

isButton(document.querySelector('#el')); // <input type="submit" id="el">
//=> false
```


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
