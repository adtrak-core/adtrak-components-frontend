## WordPress Integration

When integrating the hero component into the Adtrak WordPress boilerplate, use the following include to pass WP data into the component:

```
{% include 'components/hero.twig' with { 
  subHeading: post.meta('hero_subheading') | default(false),
  heading: post.meta('hero_heading') | default(false),
  blurb: post.meta('hero_blurb') | default(false),
  usps: post.meta('hero_usps') | default(false);
  btns: true / false;
  bgImage: post.meta('hero_image') | default(false);
} only %}
```