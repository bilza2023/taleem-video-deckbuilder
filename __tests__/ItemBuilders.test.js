// __tests__/ItemBuilders.test.js
import { test, expect } from "vitest";
import * as ItemBuilder from "../src/items/defaultItems";

test("createTextItem returns valid text item", () => {
  const item = ItemBuilder.createTextItem({ text: "Test" });
  expect(item.type).toBe("text");
  expect(item.text).toBe("Test");
});

test("createRectItem returns valid rect", () => {
  const item = ItemBuilder.createRectItem();
  expect(item.type).toBe("rect");
  expect(item.width).toBeGreaterThan(0);
  expect(item.height).toBeGreaterThan(0);
});

test("createRichTextItem includes lineHeight and text", () => {
  const item = ItemBuilder.createRichTextItem({ text: "RT" });
  expect(item.type).toBe("richText");
  expect(item.lineHeight).toBeGreaterThan(0);
  expect(item.text).toBe("RT");
});

test("createTableItem contains empty rows", () => {
  const item = ItemBuilder.createTableItem();
  expect(item.type).toBe("table");
  expect(item.rows).toBeDefined();
});
