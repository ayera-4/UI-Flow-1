Round icon button for header/toolbar controls (gear, back arrow, help, sound toggle); always pass a `label`.

```jsx
<IconButton label="Settings" tone="plain"><Settings size={22} /></IconButton>
```

Tones: `plain` (white + blue glyph, the default), `blue`/`green`/`orange` (filled), `ghost`. Sizes `sm`/`md`/`lg` (36/44/52px). Scales down on press.
