// __tests__/DeckBuilder.test.js
import { test, expect } from "vitest";
import { DeckBuilder } from "../src/deckBuilder/deckBuilder.js";

test("addSlide() assigns correct start/end and injects background", () => {
  const deck = new DeckBuilder();
  const bg = { backgroundColor: "#ccc", pattern: null };
  deck.setGlobalBackground(bg);

  const slide1 = deck.addSlide(5);
  const slide2 = deck.addSlide(10);

  const json = deck.build();
  expect(json.slidesData).toHaveLength(2);
  expect(json.totalDuration).toBe(10);
  expect(json.slidesData[0].startTime).toBe(0);
  expect(json.slidesData[1].startTime).toBe(5);
  expect(json.slidesData[1].background.backgroundColor).toBe("#ccc");
});

test("addSlide() throws if global background not set", () => {
  const deck = new DeckBuilder();
  expect(() => deck.addSlide(5)).toThrow("DeckBuilder: global background not set");

});
