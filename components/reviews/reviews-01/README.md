## WordPress Integration

When integrating the reviews component into the Adtrak WordPress boilerplate, use the following steps to add the component:

1. Create a new file in your functions: `_functions/reviewsio.php`
2. Copy the code from `reviewsio.php` in the Assets tab and paste it into that file
3. Add the following code into the `addToContext` function within your `_functions/timber.php` file - this code should sit above the `return $context` line

```
$reviews =  new ReviewsIO();
$reviews->setStoreID(‘auto-exhaust-tyres’);
$context['reviews'] = json_decode($reviews->getReviews());
```

4. In the above code, be sure to change the store name for your client

5. In your theme folder, create a new folder called `reviews` and within this, create an empty `reviews.json` file

6. Create a new file in your `js` folder: `_resources/js/simple-carousel.js`

7. Copy the JS code from `simple-carousel.js` in the `assets` tab into this new file

8. Add the following CSS to the bottom of your `_resources/styles/main.scss` file

```
.carousel-container {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
}
.carousel-container::-webkit-scrollbar { /* WebKit */
  display: none;
}
```

9. Create a new twig file for your Reviews carousel component: `_components/reviewsio.twig`

10. Copy the code from the View tab into this new file

11. Include it wherever you want on your site: `{% include "_components/reviewsio.twig" %}`