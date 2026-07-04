Pill segmented control — login mode switch and time-range filters.

```jsx
<SegmentedTabs tabs={[{id:'learner',label:'Learner Login'},{id:'teacher',label:'Teacher Login'},{id:'guest',label:'Guest Play'}]} value={mode} onChange={setMode} />
```

`tabs` = `{id,label}[]`, controlled via `value`/`onChange`. Tones blue/green, sizes sm/md.
