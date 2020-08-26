---
title: Prerequisites
---

Usage of these components relies on a set of prerequisites within your project.

### Wordpress ACF Fields

@todo documentation...

### Tailwind Config

These components use specific colour naming conventions `primary` and `secondary` with `light` and `dark` modifiers, an example can be seen below.
```
colors: {
  primary: {
    light: '#667EEA',
    default: '#162980',
    dark: '#08224E'
  },
  secondary: {
    default: '#1DB77F',
    dark: '#1D997D'
  }
}
```

They also use a specific set of breakpoints which should be found in the default adtrak boilerplates

```
screens: {
  sm: '520px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1600px'
},
```

@todo documentation...