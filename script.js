export function capitalize(string) {
  if (typeof string !== "string") throw TypeError("Parameter is not a string!");

  return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
}

export function reverseString() {}

export function calculator() {}

export function caesarCipher() {}

export function analyzeArray() {}
