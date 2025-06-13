
import { DeckBuilder } from "./src/TwoTemplates/DeckBuilder.js";
import { GlobalThemes } from "./src/theme/globalThemes.js";
import { GlobalBackgrounds } from "./src/theme/globalBackgrounds.js";
import * as ItemBuilders from "./src/items/ItemBuilders.js";

export {
  DeckBuilder,
  GlobalThemes,        // read-only access; not injected into JSON
  GlobalBackgrounds,   // used in Player and DeckBuilder background fallback
  ItemBuilders         // atomic item constructors, used in slides
};
