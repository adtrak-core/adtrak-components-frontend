## WordPress Integration

Use the following guide to add the *Downloads* module to your website:

- Create a new file in your `_resources/js` folder: `_resources/js/simple-carousel.js`

- Copy the JS code from `simple-carousel.js` in the `assets` tab into this new file

- Go to the Wordpress Admin panel

- Go to the site options page in your Wordpress Admin panel and add some "logos" items

- In your theme, create a `_views/components/logos.twig` file

- Go to Fractal and copy the code you would like from the View tab

- Paste the code into `_views/components/logos.twig`

-. Add the following CSS to the bottom of your `_resources/styles/main.scss` file

```
.carousel-container {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
}
.carousel-container::-webkit-scrollbar { /* WebKit */
  display: none;
}
```

- Open the `_views/page.twig` (or respective file you'd like the logos to appear in) file in your theme

- Paste the below include with:

```
{% include "_components/logos.twig"
  with {
    logos: options.logos,
    header: options.logos_header
  }
%}
```