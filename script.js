export function capitalize(string) {
  if (typeof string !== "string") throw TypeError("Parameter is not a string!");

  return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
}

export function reverseString(string) {
  if (typeof string !== "string") throw TypeError("Parameter is not a string!");

  return string.split("").reverse().join("");
}

export function calculator(a, b) {
  if (Number.isNaN(a) || Number.isNaN(b))
    throw TypeError("Parameters must be numbers!");

  return {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
    divide: function (a, b) {
      return a / b;
    },
    multiply: function (a, b) {
      return a * b;
    },
  };
}

export function caesarCipher(string, factor) {
  // Source - https://stackoverflow.com/a/31415820
  // Posted by WebFreak001, modified by community. See post 'Timeline' for change history
  // Retrieved 2026-02-01, License - CC BY-SA 4.0

  function isLowerCase(str) {
    return str === str.toLowerCase() && str !== str.toUpperCase();
  }

  const notLetter = /[^a-zA-Z]/;
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  if (typeof string !== "string" || !Number.isInteger(factor)) throw TypeError;
  if (factor > 26) factor %= 26;

  let newString = "";
  for (let i = 0; i < string.length; i++) {
    const character = string.charAt(i);

    if (notLetter.test(character)) {
      newString += character;
    } else {
      const originIndex = alphabet.indexOf(character.toLowerCase());
      if (originIndex === -1) throw Error;
      let cipherIndex = originIndex + factor;
      if (cipherIndex > 25) cipherIndex -= 26;

      if (isLowerCase(character)) {
        newString += alphabet[cipherIndex];
      } else {
        newString += alphabet[cipherIndex].toUpperCase();
      }
    }
  }

  return newString;
}

export function analyzeArray(arr) {
  //   function compareNumeric(a, b) {
  //     if (a > b) return 1;
  //     if (a === b) return 0;
  //     if (a < b) return -1;
  //   }

  //   const sorted = arr.sort(compareNumeric);
  return {
    average:
      arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
      arr.length,
    // min: sorted[0],
    // max: sorted[sorted.length - 1],
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
