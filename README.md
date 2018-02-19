# censor.js
Censor those rude swearwords in your application, because we're a civilised people.

## Install
```bash
$ npm install --save censor-js
```


## How to use

This module contains 3 usable methods for filtering words: 
* vowel
* inner
* grawlix

### [vowel](index.js#L19)
This is the default method.
Takes a word as a `string` and an optional character to replace the vowels with. If no character is supplied, the default asterisk is used. 

Returns: `string`

Usage: 
```js
const censor = require('censor')

censor(word, optionalCharacter)
```
or
```js
const censor = require('censor')

censor.vowel(word, optionalCharacter)
```

### [inner](index.js#L23)
Replaces all characters between the first and last character with asterisks or an optional character. If no character is supplied, the default asterisk is used.
 
Returns: `string`

Usage:
```js
const censor = require('censor')

censor.inner('butt') // 'b**t'
```
or
```js
const censor = require('censor')

censor.inner('butt', '@') // 'b@@t'
```

### [grawlix](index.js#L35)
Replaces all characters in a string with a _grawlix_ pattern or a different word.
Supplying only a number will convert the string to a 6-character pattern.

Returns: `string`
```js
const censor = require('censor')

censor.grawlix('butt') // '@#$%'
// or
censor.grawlix('butt', 'nice') // 'nice'
// or
censor.grawlix(6) // '@#$%!&'
// or
censor.grawlix(7, 'verynice') // 'verynic'
```

## License
[MIT](LICENSE)