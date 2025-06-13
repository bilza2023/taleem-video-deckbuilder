// __tests__/DeckBuilder.test.js

import { test, expect } from "vitest";
import { DeckBuilder } from "../src/deckBuilder/deckBuilder.js";
import * as GlobalBackgrounds from "../src/theme/globalBackgrounds.js";
import * as GlobalThemes from "../src/theme/globalThemes.js";

test("addSlide() creates multiple slides with correct timings", () => {
  const deck = new DeckBuilder();
  const bg = GlobalBackgrounds.bricksBg(GlobalThemes.darkTheme);
  deck.setGlobalBackground(bg);

  const slide1 = deck.addSlide(5);
  const slide2 = deck.addSlide(10);

  const built = deck.build();
  expect(built.slidesData).toHaveLength(2);
  expect(built.slidesData[0].startTime).toBe(0);
  expect(built.slidesData[0].endTime).toBe(5);
  expect(built.slidesData[1].startTime).toBe(5);
  expect(built.slidesData[1].endTime).toBe(10);
  expect(built.slidesData[0].background).toBeDefined();
  expect(built.slidesData[1].background).toBeDefined();
});
