every slide add must
1:
if (!this.globalTheme || !this.globalBackground) {
throw new Error('DeckBuilder: theme or background not set');
}
2:
 const background = cloneBackground(this.globalBackground);
  this.slides.push({ background, items: allItems, startTime, endTime });
  