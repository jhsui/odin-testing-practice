import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./script";

test("capitalize(): invalid parameter type", () => {
  expect(() => capitalize(786).toThrow(TypeError));
});

test("capitalize(): return the expected value (1)", () => {
  expect(capitalize("toronto")).toBe("Toronto");
});

test("capitalize(): return the expected value (2)", () => {
  expect(capitalize("Toronto")).toBe("Toronto");
});

test("capitalize(): return the expected value (3)", () => {
  expect(capitalize("toronTo")).toBe("Toronto");
});

test("reverseString(): invalid parameter type", () => {
  expect(() => reverseString(786).toThrow(TypeError));
});

test("reverseString(): return the expected value (1)", () => {
  expect(reverseString("toronto")).toBe("otnorot");
});

test("reverseString(): return the expected value (2)", () => {
  expect(reverseString("China")).toBe("anihC");
});

test("reverseString(): return the expected value (3)", () => {
  expect(reverseString("iQuwFen")).toBe("neFwuQi");
});

test("calculator(): add test", () => {
  expect(calculator().add(13, 17)).toBe(30);
});

test("calculator(): subtract test", () => {
  expect(calculator().subtract(17, 13)).toBe(4);
});

test("calculator(): divide test", () => {
  expect(calculator().divide(5, 2)).toBe(2.5);
});

test("calculator(): multiply test", () => {
  expect(calculator().multiply(31, 3)).toBe(93);
});

test("caesarCipher(): from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher(): from a to z", () => {
  expect(caesarCipher("abc", 25)).toBe("zab");
});

test("caesarCipher(): case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesarCipher(): punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray():", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
