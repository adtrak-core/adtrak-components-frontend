## WordPress Integration

When integrating the gallery component into the Adtrak WordPress boilerplate, use the following steps:

1. Import the `acf.json` code from the assets tab to create the Gallery Carousel custom field - this will be available on each page with a fallback in the “site options” section

2. Add some images to the Gallery Carousel in Site Options

3. Create a new file in your `js` folder: `_resources/js/simple-carousel.js`

4. Copy the JS code from `simple-carousel.js` in the `assets` tab into this new file

5. Create a new twig file for your Gallery Carousel component: `_components/gallery-carousel.twig`

6. Copy the code from the View tab into this new file

7. Include it wherever you want on your site: `{% include "_components/gallery-carousel.twig" %}`