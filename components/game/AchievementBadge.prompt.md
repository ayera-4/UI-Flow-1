Collectible reward medallion for the trophy-case / Badges screen. Glossy ringed disc holding any glyph, with an earned vs locked state.

```jsx
<AchievementBadge glyph="🐷" name="Money Beginner" tone="gold" />
<AchievementBadge glyph="🛒" name="Smart Shopper" tone="green" locked />
```

`glyph` takes emoji, text, an icon, or an `<img>` of real badge art (preferred for production). Tones: gold/green/blue/purple/orange. `locked` greys it and adds a padlock.
