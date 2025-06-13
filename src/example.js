import { DeckBuilder } from "./deckBuilder/deckBuilder.js";
import * as ItemBuilder from "./items/ItemBuilders.js";
import * as GlobalThemes  from "./theme/globalThemes.js";
import * as GlobalBackgrounds  from "./theme/globalBackgrounds.js";

const theme = GlobalThemes.pastel;
const background = GlobalBackgrounds.bricksBg(theme);

const deck = new DeckBuilder();
deck.setGlobalBackground(background);

// Slide using global background
const slide = deck.addSlide(6);
slide.addItem(ItemBuilder.text("Welcome to Taleem"));
slide.addItem(ItemBuilder.image("book"));

// Slide with background override
const second = deck.addSlide(12);
second.addItem(ItemBuilder.rect({ color: 0xffaa00 }));
second.overrideBg = { pattern: { type: "dots", props: { color: "#fff", opacity: 0.1, spacing: 20, radius: 3 } } };

console.log(JSON.stringify(deck.build(), null, 2));
