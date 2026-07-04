Small uppercase status/label pill for states like AVAILABLE, LOCKED, NEW, or tier names.

```jsx
<Badge tone="green" variant="soft">Available</Badge>
<Badge tone="locked" icon={<Lock size={12}/>}>Locked</Badge>
```

Tones: neutral/green/blue/orange/gold/purple/red/locked. Variants: `soft` (tinted, default), `solid`, `outline`. Sizes `sm`/`md`. For collectible reward medals use **AchievementBadge**, not this.
