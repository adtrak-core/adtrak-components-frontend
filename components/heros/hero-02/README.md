## WordPress Integration

When integrating the hero component into the Adtrak WordPress boilerplate, import the ACF file from assets tab of this component and use the following include to pass WP data into the component:

```
{% include '_components/hero.twig' with { 
  subHeading: post.meta('hero_sub_heading') | default(false),
  heading: post.meta('hero_heading') | default(post.title),
  blurb: post.meta('hero_blurb') | default(false),
  usps: post.meta('hero_usps') | default(false),
  image: post.meta('hero_image') | default(false),
  btns: post.meta('hero_buttons') | default(false)
} only %}
```