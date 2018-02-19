'use strict';

const repeat = require('repeat-string');

/* Expose `vowel` as default function: vowel = require('this package'). */
module.exports = censor;

/* Add other functions on `vowel`: inner = require('this package').inner. */
censor.vowel = vowel;
censor.inner = inner;
censor.grawlix = grawlix;

const floor = Math.floor;
const defaultCharacter = '*';
const grawlixPattern = '@#$%!&?';
const vowels = /[aeiouy]/g;

/* `butt` > `b*tt` */
censor = (value, character) => value.replace(vowels, character || defaultCharacter)

/* `butt` > `b**t` */
inner = (value, character) => {
    if (value.length <= 2)
        return value;

    return value.charAt(0) +
        repeat(character || defaultCharacter, value.length - 2) +
        value.charAt(value.length - 1);
}

/* `butt` > `@#$%` */
grawlix = (value, pattern) => {
    const chars = pattern || grawlixPattern,
          length = typeof value === 'number' ? value : value.length,
          count = chars.length;
    
    return repeat(chars, floor(length / count)) + chars.slice(0, length % count);
}