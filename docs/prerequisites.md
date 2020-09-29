---
title: Prerequisites
---

Usage of these components relies on a set of prerequisites within your project.

## Tailwind Config

### Colors
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

### Breakpoints
They also use a specific set of breakpoints which should be found in the default adtrak boilerplates

```
screens: {
  '2xs' : '375px',
  'xs' : '480px',
  'sm' : '600px',
  'md' : '768px',
  'lg' : '1024px',
  'xl' : '1280px',
  '2xl' : '1400px',
  '3xl' : '1600px',
  '4xl' : '1900px',
},
```

## Tailwind Plugins

### Tailwind Typography
Various components use the `prose` class from the official Typography plugin - installation instrucation be found here [https://tailwindcss.com/docs/typography-plugin](https://tailwindcss.com/docs/typography-plugin)