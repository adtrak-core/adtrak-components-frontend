## WordPress Integration

Use the following guide to add the *Gallery* module to your website:

- Go to the Assets tab

- Download the `acf.json` file from the assets tab 

- Go to the Wordpress Admin panel

- Go to Custom Fields > Tools and import your acf file
- - This will create a Gallery Carousel field on each "page" of your website with a fallback in the "Site Options" page

- Go to Site Options and add images to the Gallery Carousel

- In your theme, create a new file in your `_resources/js` folder called `simple-carousel.js`

- In Fractal, copy the JS code from `simple-carousel.js` in the `assets` tab 

- Paste this code into the `simple-carousel.js` file in your theme

- Add the following CSS to the bottom of your `_resources/styles/main.scss` file
```
.carousel-container {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
}
.carousel-container::-webkit-scrollbar { /* WebKit */
  display: none;
}
```

- Create a new twig file for your Gallery Carousel component: `_components/gallery-carousel.twig`

- In Fractal, copy the code from the View tab into this new file

- Include the Gallery Carousel component within your twig page templates using:
```
{% include "_components/gallery-carousel.twig" %}
```