# GeniusMath Africa — Design System

> **Math for Life.** A warm, playful, gamified math-learning system for East-African
> learners aged 8–13, plus the educator tools behind them. Bright tri-color brand,
> chunky rounded type, illustrated landscapes, coins & stars everywhere.

This system was reverse-engineered from the GeniusMath Africa app UI mockups. It gives
you tokens, components, and screen patterns to build new learner and educator screens
that look and feel native to the product.

---

## Who this is for

Two audiences, one brand:

- **Learners (8–13)** — the game. Big tap targets, friendly characters, instant reward
  feedback (coins, stars, XP, streaks), minimal reading, COPPA-safe login (avatar + PIN,
  no email). Joyful and forgiving.
- **Educators / parents** — the dashboard. Calmer, denser, metric-driven (KPI tiles,
  progress bars, learner lists) but still on-brand and friendly.

When in doubt, design for the learner first.

---

## Brand foundations

**The wordmark trio** is the heart of the palette — use it literally and as a system:

| Word | Color | Token | Role |
|------|-------|-------|------|
| **Genius** | orange `#F2880E` | `--gm-orange` | energy, rewards, replay |
| **Math** | blue `#2E7BC4` | `--gm-blue` | primary actions, headers, navigation |
| **AFRICA** | green `#4D9736` | `--gm-green` | success, confirm, the main "Go" CTA |

Render the logo with the `.gm-wordmark` utility class (`.gm-genius` / `.gm-math` /
`.gm-africa` spans) — no font file was supplied, so it's set in the display face.
Tagline: *"Math for Life."*

**Gamification accents** carry the game feel: `--gm-gold` (coins), `--gm-star`,
`--gm-purple` (advanced tier / accuracy), `--gm-flame` (streaks), `--gm-red` (errors).

**Scene tones** (`--gm-earth`, `--gm-leaf`, `--gm-sky*`) ground the East-African
market/school/savanna illustrations. The default app background is the
`.gm-sky-bg` gradient.

> ⚠️ **Substituted assets.** No brand fonts or vector logo/illustration files were
> provided. Type uses **Fredoka** (display) + **Nunito** (body) as close Google-Font
> stand-ins; characters/landscapes/badge art should be supplied as real illustration
> assets and dropped into `assets/`. Swap these when the real brand kit arrives.

---

## Typography

- **Fredoka** — display, headings, the wordmark. Chunky, rounded, geometric.
  Tokens: `--text-display`, `--text-h1`, `--text-h2`, `--text-h3`.
- **Nunito** — body, UI, numerals. Rounded and highly legible for young readers.
  Tokens: `--text-lead`, `--text-base`, `--text-ui`, `--text-sm`, `--text-xs`,
  plus `--text-kpi` / `--text-numkey` for scores and keypad.

Sizing is generous on purpose — body text is 17px, never go below 14px in the learner
app. Use `--ls-label` + uppercase for small pill/tab labels.

---

## Spacing, shape & motion

- **4px grid** (`--space-*`). Tap targets are never below **48px** (`--tap-min`);
  keypad keys are 60px (`--tap-key`).
- **Very rounded**: cards `--radius-lg` (20px), pills/buttons `--radius-pill`.
- **Soft warm shadows** (`--shadow-card`, `--shadow-pop`). Buttons & keys have a solid
  colored **"lip"** (`--lip-*`) that collapses on press for a toy-like, tactile feel.
- **Playful motion**: `--ease-pop` (overshoot) for presses & entrances,
  `--ease-smooth` for everything else.

---

## Components

Mount from the compiled bundle: `const { Button } = window.GeniusMathAfricaDesignSystem_a3431c`.

**Core** — `Button` (pill CTA, tactile lip, tones go/primary/reward/soft/ghost),
`IconButton` (round header control), `Card` (tinted surfaces → the level-tier pattern),
`Badge` (status pills).

**Game** — `StatChip` (coin/star/XP/streak balance), `ProgressBar` (skill mastery),
`StarRating` (3-star level scores), `AchievementBadge` (trophy-case medallions),
`NumKey` (PIN / numeric keypad key).

**Navigation** — `SegmentedTabs` (login mode switch, time filters),
`BottomNav` (learner & educator tab bars).

**Data** — `KpiCard` (dashboard metric tile).

Each component has a `.prompt.md` next to it with usage details and a `.card.html` demo.

---

## Screen patterns (from the source app)

- **Splash** — sky backdrop, big wordmark + tagline, loading `ProgressBar`, characters.
- **Learner login** — `SegmentedTabs` (Learner / Teacher / Guest) → avatar select →
  `NumKey` PIN pad. COPPA-safe: no email for under-13s; teachers onboard via class code.
- **World map / level select** — illustrated landscape on one side, tinted level
  `Card`s with `StarRating` and lock `Badge`s on the other.
- **Activity** (e.g. market snack stall) — prompt `--text-lead`, draggable coins, a
  green confirm `Button`.
- **Well Done** — celebratory `--text-display`, `StarRating`, coins won via `StatChip`,
  Replay (reward) + Next Level (primary) buttons.
- **Rewards / Badges** — grid of `AchievementBadge`, earned vs locked.
- **Educator dashboard** — `KpiCard` grid, class `ProgressBar`s, learner list.

---

## File map

```
styles.css              → entry point (consumers link this); @imports all tokens
tokens/                 → fonts, colors, typography, spacing, effects, base utilities
components/
  core/                 → Button, IconButton, Card, Badge
  game/                 → StatChip, ProgressBar, StarRating, AchievementBadge, NumKey
  navigation/           → SegmentedTabs, BottomNav
  data/                 → KpiCard
guidelines/             → token & brand specimen cards (Colors, Type, Spacing, Brand)
assets/                 → brand crops & icons extracted from source mockups (reference)
```

Use `Button` for any tap action, `Card` for any container, and reach for the **game**
components whenever a screen rewards the learner — that reward loop is the product.
