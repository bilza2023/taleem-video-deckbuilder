

export default function toPixiColor(input = "#000000") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.startsWith("#")) {
      return parseInt(input.replace("#", ""), 16);
    }
    // Handle named colors using canvas
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = input;
    return parseInt(ctx.fillStyle.slice(1), 16);
  }
  // Default fallback
  return 0x000000;
}
