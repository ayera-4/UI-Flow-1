Fixed bottom tab bar; active item gets a soft pill highlight. Pass an icon node per item.

```jsx
<BottomNav value={tab} onChange={setTab} items={[
  {id:'world', label:'World', icon:<Globe size={22}/>},
  {id:'quests', label:'Quests', icon:<Compass size={22}/>},
  {id:'rewards', label:'Rewards', icon:<Star size={22}/>},
  {id:'profile', label:'Profile', icon:<User size={22}/>},
]} />
```

Learner bar: World/Quests/Rewards/Profile. Educator bar: Dashboard/Learners/Reports/Settings. Tones blue/green.
