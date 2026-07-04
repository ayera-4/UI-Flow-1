/* @ds-bundle: {"format":3,"namespace":"GeniusMathAfricaDesignSystem_a3431c","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"KpiCard","sourcePath":"components/data/KpiCard.jsx"},{"name":"AchievementBadge","sourcePath":"components/game/AchievementBadge.jsx"},{"name":"NumKey","sourcePath":"components/game/NumKey.jsx"},{"name":"ProgressBar","sourcePath":"components/game/ProgressBar.jsx"},{"name":"StarRating","sourcePath":"components/game/StarRating.jsx"},{"name":"StatChip","sourcePath":"components/game/StatChip.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"SegmentedTabs","sourcePath":"components/navigation/SegmentedTabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"25be9a9efcf9","components/core/Button.jsx":"73970f47dd79","components/core/Card.jsx":"f29c5a4dc273","components/core/IconButton.jsx":"380a56dbf55b","components/data/KpiCard.jsx":"421dac3efc4c","components/game/AchievementBadge.jsx":"aaa0ac70e63c","components/game/NumKey.jsx":"a2e516d96c9a","components/game/ProgressBar.jsx":"ea739b07c253","components/game/StarRating.jsx":"fdbf0a188f9a","components/game/StatChip.jsx":"46c7eac08c14","components/navigation/BottomNav.jsx":"4ca50c51805e","components/navigation/SegmentedTabs.jsx":"1e8d7319820f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GeniusMathAfricaDesignSystem_a3431c = window.GeniusMathAfricaDesignSystem_a3431c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GeniusMath Africa — Badge
 * Small status/label pill. For achievement medals use AchievementBadge.
 */
function Badge({
  children,
  tone = 'neutral',
  // 'neutral' | 'green' | 'blue' | 'orange' | 'gold' | 'purple' | 'red' | 'locked'
  variant = 'soft',
  // 'soft' | 'solid' | 'outline'
  size = 'md',
  // 'sm' | 'md'
  icon = null,
  style = {},
  ...rest
}) {
  const palette = {
    neutral: ['var(--gm-slate)', 'var(--gm-line-soft)'],
    green: ['var(--gm-green-dark)', 'var(--gm-fill-green)'],
    blue: ['var(--gm-blue-dark)', 'var(--gm-fill-blue)'],
    orange: ['var(--gm-orange-dark)', '#FCE6CC'],
    gold: ['#8A6A00', '#FBEFC4'],
    purple: ['#6A4FA0', 'var(--gm-fill-purple)'],
    red: ['#A8321F', '#FAD9D2'],
    locked: ['var(--gm-mute)', 'var(--gm-line-soft)']
  }[tone];
  const [fg, soft] = palette;
  const variants = {
    soft: {
      background: soft,
      color: fg,
      border: 'none'
    },
    solid: {
      background: fg,
      color: '#fff',
      border: 'none'
    },
    outline: {
      background: 'transparent',
      color: fg,
      border: `2px solid ${fg}`
    }
  }[variant];
  const dims = size === 'sm' ? {
    fontSize: 11,
    padding: '3px 9px',
    gap: 4
  } : {
    fontSize: 13,
    padding: '5px 12px',
    gap: 5
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: dims.gap,
      font: 'var(--text-xs)',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: dims.fontSize,
      lineHeight: 1.1,
      padding: dims.padding,
      borderRadius: 'var(--radius-pill)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      whiteSpace: 'nowrap',
      ...variants,
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GeniusMath Africa — Button
 * Big, friendly pill button with a solid tactile "lip" (bottom edge that
 * collapses on press). Tone maps to the brand trio.
 */
function Button({
  children,
  tone = 'go',
  // 'go' (green) | 'primary' (blue) | 'reward' (orange) | 'soft' | 'ghost'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 14,
      padding: '8px 16px',
      minHeight: 40,
      gap: 6
    },
    md: {
      fontSize: 16,
      padding: '12px 22px',
      minHeight: 48,
      gap: 8
    },
    lg: {
      fontSize: 19,
      padding: '15px 30px',
      minHeight: 56,
      gap: 10
    }
  }[size];
  const tones = {
    go: {
      bg: 'var(--gm-green)',
      fg: '#fff',
      lip: 'var(--gm-green-dark)'
    },
    primary: {
      bg: 'var(--gm-blue)',
      fg: '#fff',
      lip: 'var(--gm-blue-dark)'
    },
    reward: {
      bg: 'var(--gm-orange)',
      fg: '#fff',
      lip: 'var(--gm-orange-dark)'
    },
    soft: {
      bg: 'var(--gm-fill-blue)',
      fg: 'var(--gm-blue-dark)',
      lip: 'var(--gm-sky-deep)'
    },
    ghost: {
      bg: 'transparent',
      fg: 'var(--gm-blue)',
      lip: 'transparent'
    }
  }[tone];
  const lip = tone === 'ghost' ? 'none' : `0 4px 0 ${tones.lip}`;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      appearance: 'none',
      border: tone === 'ghost' ? '2px solid var(--gm-line)' : 'none',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--text-ui)',
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: sizes.fontSize,
      lineHeight: 1.1,
      padding: sizes.padding,
      minHeight: sizes.minHeight,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: sizes.gap,
      whiteSpace: 'nowrap',
      width: block ? '100%' : 'auto',
      background: tones.bg,
      color: tones.fg,
      boxShadow: disabled ? 'none' : lip,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transform: 'translateY(0)',
      transition: 'transform var(--dur-fast) var(--ease-pop), box-shadow var(--dur-fast), filter var(--dur-fast)',
      ...style
    },
    onMouseDown: e => {
      if (disabled || tone === 'ghost') return;
      e.currentTarget.style.transform = 'translateY(4px)';
      e.currentTarget.style.boxShadow = '0 0 0 ' + tones.lip;
    },
    onMouseUp: e => {
      if (disabled || tone === 'ghost') return;
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = lip;
    },
    onMouseLeave: e => {
      if (disabled || tone === 'ghost') return;
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = lip;
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GeniusMath Africa — Card
 * Soft rounded surface. The workhorse container.
 * `tone` tints the fill for the level/tier card pattern.
 */
function Card({
  children,
  tone = 'paper',
  // 'paper' | 'white' | 'green' | 'yellow' | 'purple' | 'blue'
  pad = 'md',
  // 'none' | 'sm' | 'md' | 'lg'
  raised = true,
  interactive = false,
  style = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 14,
    md: 20,
    lg: 28
  }[pad];
  const tones = {
    paper: 'var(--gm-paper)',
    white: 'var(--gm-white)',
    green: 'var(--gm-fill-green)',
    yellow: 'var(--gm-fill-yellow)',
    purple: 'var(--gm-fill-purple)',
    blue: 'var(--gm-fill-blue)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: tones,
      borderRadius: 'var(--radius-lg)',
      padding: pads,
      boxShadow: raised ? 'var(--shadow-card)' : 'none',
      border: raised ? 'none' : '1.5px solid var(--gm-line)',
      transition: 'transform var(--dur-base) var(--ease-pop), box-shadow var(--dur-base)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-pop)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = raised ? 'var(--shadow-card)' : 'none';
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GeniusMath Africa — IconButton
 * Round, soft-shadowed button for header controls (gear, back, help, sound).
 */
function IconButton({
  children,
  label,
  tone = 'plain',
  // 'plain' | 'blue' | 'green' | 'orange' | 'ghost'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  style = {},
  ...rest
}) {
  const dims = {
    sm: 36,
    md: 44,
    lg: 52
  }[size];
  const tones = {
    plain: {
      bg: '#fff',
      fg: 'var(--gm-blue)',
      shadow: 'var(--shadow-sm)'
    },
    blue: {
      bg: 'var(--gm-blue)',
      fg: '#fff',
      shadow: 'var(--shadow-card)'
    },
    green: {
      bg: 'var(--gm-green)',
      fg: '#fff',
      shadow: 'var(--shadow-card)'
    },
    orange: {
      bg: 'var(--gm-orange)',
      fg: '#fff',
      shadow: 'var(--shadow-card)'
    },
    ghost: {
      bg: 'transparent',
      fg: 'var(--gm-slate)',
      shadow: 'none'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    style: {
      width: dims,
      height: dims,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      borderRadius: '50%',
      background: tones.bg,
      color: tones.fg,
      boxShadow: tones.shadow,
      cursor: 'pointer',
      transition: 'transform var(--dur-fast) var(--ease-pop), filter var(--dur-fast)',
      ...style
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.9)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/KpiCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GeniusMath Africa — KpiCard
 * Compact metric tile for dashboards (Levels Completed, Accuracy, Time Spent…).
 * Tinted top accent + big numeral.
 */
function KpiCard({
  label,
  value,
  tone = 'blue',
  // 'blue' | 'green' | 'gold' | 'purple' | 'orange'
  icon = null,
  style = {},
  ...rest
}) {
  const tints = {
    blue: 'var(--gm-fill-blue)',
    green: 'var(--gm-fill-green)',
    gold: 'var(--gm-fill-yellow)',
    purple: 'var(--gm-fill-purple)',
    orange: '#FCE6CC'
  }[tone];
  const inks = {
    blue: 'var(--gm-blue-dark)',
    green: 'var(--gm-green-dark)',
    gold: '#8A6A00',
    purple: '#6A4FA0',
    orange: 'var(--gm-orange-dark)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--gm-white)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      minWidth: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: tints
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      marginBottom: 8
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 8,
      background: tints,
      color: inks,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-xs)',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--gm-slate)',
      lineHeight: 1.2
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-kpi)',
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: 30,
      color: 'var(--gm-ink)',
      lineHeight: 1
    }
  }, value)));
}
Object.assign(__ds_scope, { KpiCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KpiCard.jsx", error: String((e && e.message) || e) }); }

// components/game/AchievementBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GeniusMath Africa — AchievementBadge
 * Collectible reward medallion (trophy-case style). Holds a glyph/icon/image
 * in a glossy ringed disc; supports a locked state.
 */
function AchievementBadge({
  glyph = '★',
  // emoji, short text, or an <img>/icon node
  name = '',
  tone = 'gold',
  // 'gold' | 'green' | 'blue' | 'purple' | 'orange'
  locked = false,
  size = 76,
  style = {},
  ...rest
}) {
  const ramps = {
    gold: ['#FBE08A', '#E9B128', '#C68A12'],
    green: ['#A9DD8E', '#5BA83C', '#3C7A2A'],
    blue: ['#8FC4EE', '#3E8AD0', '#1F5C99'],
    purple: ['#CBB6EA', '#9B7FC4', '#6A4FA0'],
    orange: ['#FBC07E', '#F2880E', '#C7670A']
  }[tone];
  const [hi, mid, lo] = locked ? ['#D7DCE6', '#AEB6C6', '#8C95AA'] : ramps;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      width: size + 24,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: `radial-gradient(circle at 36% 28%, ${hi}, ${mid} 58%, ${lo})`,
      border: '3px solid #fff',
      boxShadow: locked ? 'var(--shadow-sm)' : `var(--shadow-card), inset 0 3px 6px rgba(255,255,255,0.5)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size * 0.42,
      color: '#fff',
      position: 'relative',
      filter: locked ? 'grayscale(0.5)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: locked ? 0.35 : 1,
      lineHeight: 1
    }
  }, glyph), locked && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -2,
      bottom: -2,
      width: size * 0.34,
      height: size * 0.34,
      borderRadius: '50%',
      background: 'var(--gm-slate)',
      color: '#fff',
      border: '2.5px solid #fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size * 0.17,
      fontWeight: 800
    }
  }, "\uD83D\uDD12")), name && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-xs)',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 12,
      textAlign: 'center',
      lineHeight: 1.2,
      color: locked ? 'var(--gm-mute)' : 'var(--gm-ink)'
    }
  }, name));
}
Object.assign(__ds_scope, { AchievementBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/game/AchievementBadge.jsx", error: String((e && e.message) || e) }); }

// components/game/NumKey.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GeniusMath Africa — NumKey
 * Large round key for the PIN / numeric keypad. Tactile press.
 */
function NumKey({
  children,
  tone = 'green',
  // 'green' | 'blue' | 'light'
  size = 60,
  style = {},
  ...rest
}) {
  const tones = {
    green: {
      bg: 'var(--gm-green)',
      fg: '#fff',
      lip: 'var(--gm-green-dark)'
    },
    blue: {
      bg: 'var(--gm-blue)',
      fg: '#fff',
      lip: 'var(--gm-blue-dark)'
    },
    light: {
      bg: '#fff',
      fg: 'var(--gm-ink)',
      lip: 'var(--gm-line)'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: 'none',
      background: tones.bg,
      color: tones.fg,
      font: 'var(--text-numkey)',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: size * 0.42,
      boxShadow: `0 4px 0 ${tones.lip}`,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform var(--dur-fast) var(--ease-pop), box-shadow var(--dur-fast)',
      ...style
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'translateY(4px)';
      e.currentTarget.style.boxShadow = `0 0 0 ${tones.lip}`;
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = `0 4px 0 ${tones.lip}`;
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = `0 4px 0 ${tones.lip}`;
    }
  }, rest), children);
}
Object.assign(__ds_scope, { NumKey });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/game/NumKey.jsx", error: String((e && e.message) || e) }); }

// components/game/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GeniusMath Africa — ProgressBar
 * Rounded track + fill for skill mastery / loading. Optional value label.
 */
function ProgressBar({
  value = 0,
  // 0–100
  tone = 'green',
  // 'green' | 'blue' | 'orange' | 'gold' | 'purple' | 'red'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  showValue = false,
  label = null,
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  const h = {
    sm: 8,
    md: 14,
    lg: 20
  }[size];
  const fills = {
    green: 'var(--gm-green)',
    blue: 'var(--gm-blue)',
    orange: 'var(--gm-orange)',
    gold: 'var(--gm-gold)',
    purple: 'var(--gm-purple)',
    red: 'var(--gm-red)'
  };
  const fill = fills[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: '100%',
      ...style
    }
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 6,
      font: 'var(--text-sm)',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      color: 'var(--gm-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gm-slate)'
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": pct,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    style: {
      height: h,
      background: 'var(--gm-line-soft)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      boxShadow: 'inset 0 1px 3px rgba(40,53,88,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: `linear-gradient(180deg, color-mix(in srgb, ${fill} 78%, #fff), ${fill})`,
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--inset-gloss)',
      transition: 'width var(--dur-slow) var(--ease-smooth)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/game/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/game/StarRating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GeniusMath Africa — StarRating
 * Row of stars for level scores. Filled stars are gold; empty are muted.
 */
function StarRating({
  value = 0,
  // number of filled stars
  max = 3,
  size = 28,
  gap = 4,
  tone = 'star',
  // 'star' (gold) | 'purple'
  style = {},
  ...rest
}) {
  const fillColor = tone === 'purple' ? 'var(--gm-purple)' : 'var(--gm-star)';
  const emptyColor = 'var(--gm-line)';
  const strokeFilled = tone === 'purple' ? '#7A5FB0' : '#D9A400';
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": `${value} of ${max} stars`,
    style: {
      display: 'inline-flex',
      gap,
      alignItems: 'center',
      ...style
    }
  }, rest), Array.from({
    length: max
  }).map((_, i) => {
    const on = i < value;
    return /*#__PURE__*/React.createElement("svg", {
      key: i,
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      style: {
        filter: on ? 'drop-shadow(0 1px 1px rgba(0,0,0,0.18))' : 'none'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2.6l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 19.5l1-6.1L3.2 9.1l6.1-.9z",
      fill: on ? fillColor : emptyColor,
      stroke: on ? strokeFilled : 'transparent',
      strokeWidth: on ? 1 : 0,
      strokeLinejoin: "round"
    }));
  }));
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/game/StarRating.jsx", error: String((e && e.message) || e) }); }

// components/game/StatChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GeniusMath Africa — StatChip
 * Glossy pill showing a gamification balance: coins, stars, XP, streak.
 * Renders a small token glyph + value.
 */
function StatChip({
  kind = 'coin',
  // 'coin' | 'star' | 'xp' | 'streak' | 'custom'
  value,
  glyph = null,
  // override token for 'custom'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  style = {},
  ...rest
}) {
  const dims = {
    sm: {
      h: 28,
      font: 14,
      dot: 18,
      pad: '0 10px 0 4px',
      gap: 6
    },
    md: {
      h: 36,
      font: 17,
      dot: 24,
      pad: '0 14px 0 5px',
      gap: 8
    },
    lg: {
      h: 44,
      font: 21,
      dot: 30,
      pad: '0 18px 0 6px',
      gap: 10
    }
  }[size];
  const tokens = {
    coin: {
      bg: 'var(--gm-gold)',
      ring: 'var(--gm-gold-light)',
      mark: '¢',
      markColor: '#8A6A00'
    },
    star: {
      bg: 'var(--gm-star)',
      ring: '#FCE08A',
      mark: '★',
      markColor: '#B98900'
    },
    xp: {
      bg: 'var(--gm-green)',
      ring: 'var(--gm-green-light)',
      mark: 'XP',
      markColor: '#fff'
    },
    streak: {
      bg: 'var(--gm-flame)',
      ring: '#FFB066',
      mark: '🔥',
      markColor: '#fff'
    },
    custom: {
      bg: 'var(--gm-blue)',
      ring: 'var(--gm-blue-light)',
      mark: '',
      markColor: '#fff'
    }
  }[kind];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: dims.gap,
      height: dims.h,
      padding: dims.pad,
      background: 'var(--gm-white)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-sm)',
      font: 'var(--text-ui)',
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: dims.font,
      color: 'var(--gm-ink)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: dims.dot,
      height: dims.dot,
      borderRadius: '50%',
      background: `radial-gradient(circle at 35% 30%, ${tokens.ring}, ${tokens.bg})`,
      boxShadow: 'var(--inset-gloss)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: dims.dot * 0.55,
      fontWeight: 800,
      color: tokens.markColor,
      flex: 'none'
    }
  }, glyph || tokens.mark), value);
}
Object.assign(__ds_scope, { StatChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/game/StatChip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GeniusMath Africa — BottomNav
 * Fixed bottom tab bar. Active item gets a filled blue pill highlight.
 * Pass an icon node per item (e.g. a Lucide/Phosphor SVG).
 */
function BottomNav({
  items = [],
  // [{ id, label, icon }]
  value,
  onChange = () => {},
  tone = 'blue',
  // 'blue' | 'green'
  style = {},
  ...rest
}) {
  const active = value ?? (items[0] && items[0].id);
  const fill = tone === 'green' ? 'var(--gm-green)' : 'var(--gm-blue)';
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'stretch',
      gap: 4,
      background: 'var(--gm-white)',
      borderTop: '1.5px solid var(--gm-line-soft)',
      boxShadow: '0 -4px 16px rgba(40,53,88,0.06)',
      padding: '8px 10px',
      ...style
    }
  }, rest), items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onChange(it.id),
      "aria-current": on ? 'page' : undefined,
      style: {
        flex: 1,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        padding: '6px 4px',
        color: on ? fill : 'var(--gm-mute)',
        transition: 'color var(--dur-base)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 30,
        borderRadius: 'var(--radius-pill)',
        background: on ? `color-mix(in srgb, ${fill} 14%, transparent)` : 'transparent',
        transition: 'background var(--dur-base)'
      }
    }, it.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--text-xs)',
        fontFamily: 'var(--font-body)',
        fontWeight: on ? 800 : 700,
        fontSize: 11.5,
        lineHeight: 1
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentedTabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GeniusMath Africa — SegmentedTabs
 * Pill segmented control (Learner Login / Teacher Login / Guest Play;
 * also daily/weekly/monthly-style switches).
 */
function SegmentedTabs({
  tabs = [],
  // [{ id, label }]
  value,
  onChange = () => {},
  tone = 'blue',
  // 'blue' | 'green'
  size = 'md',
  // 'sm' | 'md'
  style = {},
  ...rest
}) {
  const active = value ?? (tabs[0] && tabs[0].id);
  const fill = tone === 'green' ? 'var(--gm-green)' : 'var(--gm-blue)';
  const pad = size === 'sm' ? '7px 12px' : '11px 16px';
  const fs = size === 'sm' ? 13 : 15;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      background: 'var(--gm-line-soft)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, rest), tabs.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange(t.id),
      style: {
        border: 'none',
        borderRadius: 'var(--radius-pill)',
        padding: pad,
        font: 'var(--text-ui)',
        fontFamily: 'var(--font-body)',
        fontWeight: 800,
        fontSize: fs,
        letterSpacing: 'var(--ls-tight)',
        cursor: 'pointer',
        background: on ? fill : 'transparent',
        color: on ? '#fff' : 'var(--gm-slate)',
        boxShadow: on ? 'var(--shadow-sm)' : 'none',
        transition: 'all var(--dur-base) var(--ease-smooth)',
        whiteSpace: 'nowrap'
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { SegmentedTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentedTabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.KpiCard = __ds_scope.KpiCard;

__ds_ns.AchievementBadge = __ds_scope.AchievementBadge;

__ds_ns.NumKey = __ds_scope.NumKey;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.StatChip = __ds_scope.StatChip;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.SegmentedTabs = __ds_scope.SegmentedTabs;

})();
