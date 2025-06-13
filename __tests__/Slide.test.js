// __tests__/Slide.test.js
import { test, expect } from "vitest";
import Slide from "../src/deckBuilder/slide.js";

test("addItem() pushes an item with showAt", () => {
  const slide = new Slide(0, 5);
  slide.addItem({ type: "text", text: "Hello", showAt: 0 });

  const json = slide.toJSON();
  expect(json.items).toHaveLength(1);
  expect(json.items[0].text).toBe("Hello");
  expect(json.items[0].showAt).toBe(0);
});

test("toJSON() includes timing and background", () => {
  const slide = new Slide(0, 5);
  slide.background = { backgroundColor: "#fff" };

  const json = slide.toJSON();
  expect(json.startTime).toBe(0);
  expect(json.endTime).toBe(5);
  expect(json.background.backgroundColor).toBe("#fff");
});
