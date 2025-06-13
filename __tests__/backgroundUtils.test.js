// __tests__/backgroundUtils.test.js
import { test, expect } from "vitest";

import { cloneBackground } from "../src/deckBuilder/backgroundUtils";

test("cloneBackground returns a new object with overrides", () => {
  const base = { backgroundColor: "#000", pattern: null };
  const override = { backgroundColor: "#fff" };
  const result = cloneBackground(base, override);

  expect(result).not.toBe(base);
  expect(result.backgroundColor).toBe("#fff");
});
