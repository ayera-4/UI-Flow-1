Big, friendly pill button with a tactile press "lip" — the primary CTA across the learner app; use it for any tap action.

```jsx
<Button tone="go" size="lg" block>Let's Go!</Button>
```

Tones: `go` (green confirm/proceed — the default CTA), `primary` (blue navigation/action), `reward` (orange replay/energy), `soft` (tinted secondary), `ghost` (outline, low emphasis).
Sizes: `sm` `md` `lg`. Props: `block` (full width), `disabled`, `iconLeft`/`iconRight` (pass a 20px icon node).
The colored bottom edge collapses on `mousedown` for a toy-like press feel — don't override `boxShadow`/`transform`.
