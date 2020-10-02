## WordPress Integration

Use the following guide to add the *Hero* module to your website:

- Go to the Assets tab

- Download the `acf.json` file from the assets tab 

- Go to the Wordpress Admin panel

- Got to Custom Fields > Tools and import your acf file
- - This will create a group of Hero fields on the "pages" of your website

- Add content to the ACF fields on each page

- Go to Fractal and copy the code you would like from the View tab

- Paste the code into `_views/components/hero.twig`

- Open `_views/_layout/base.twig`

- Replace the existing Hero include with the code below:
```
{% include '_components/hero.twig' with { 
  subHeading: post.meta('hero_sub_heading') | default(false),
  heading: post.meta('hero_heading') | default(post.title),
  blurb: post.meta('hero_blurb') | default(false),
  usps: post.meta('hero_usps') | default(false),
  image: post.thumbnail | default(false),
  btns: post.meta('hero_buttons') | default(false)
} only %}
```

- Search your Hero component for `@INTEGRATION` comments and follow the steps to remove them

