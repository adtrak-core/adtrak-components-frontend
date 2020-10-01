## WordPress Integration

When integrating the logos component into the Adtrak WordPress boilerplate, use the following include to pass WP data into the component:

1. Create a new file in your `js` folder: `_resources/js/simple-carousel.js`

2. Copy the JS code from `simple-carousel.js` in the `assets` tab into this new file

3. Add the following CSS to the bottom of your `_resources/styles/main.scss` file

```
.carousel-container {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
}
.carousel-container::-webkit-scrollbar { /* WebKit */
  display: none;
}
```

```
{% include "_components/logos.twig"
  with {
    logos: options.logos,
    header: options.logos_header
  }
%}
```

This will use the default logo items from site options.