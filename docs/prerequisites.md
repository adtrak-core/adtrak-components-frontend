---
title: Prerequisites
---

## WordPress Plugins

### Wordpress

The Timber plugin needs to be installed for any of these components to work.

### Plugins

Usage of these components relies on the following WordPress plugins being installed:

- ACF Pro
- Adtrak Location Dynamics
- Contact Form 7 (if you want copy & paste form integration)

Usage of these components relies on a set of prerequisites within your tailwind project:

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

## Tailwind Variants

### Group hover
Various components use the "group-hover" classes which need enabling by default, simply add the following to your Tailwind config file:

```
variants: {
  backgroundColor: ['responsive', 'group-hover', 'hover', 'focus', 'group-focus'],
  textColor: ['responsive', 'group-hover', 'hover', 'focus', 'group-focus'],
  padding: ['responsive', 'group-hover', 'hover', 'focus', 'group-focus'],
}
```