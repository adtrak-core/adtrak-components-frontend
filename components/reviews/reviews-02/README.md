## WordPress Integration

Use the following guide to add the *Reviews* module to your website:

- Create a new file in your themes' functions directory: `_functions/reviewsio.php`

- Go to the Assets tab

- Copy the code from `reviewsio.php`

- Paste the code into your new `_functions/reviewsio.php` file

- Add the following code into the `addToContext` function within your `_functions/timber.php` file - this code should sit above the `return $context` line
```
$reviews =  new ReviewsIO();
$reviews->setStoreID('auto-exhaust-tyres');
$context['reviews'] = json_decode($reviews->getReviews());
```

- In the above code, be sure to change the store name for your client

- In your theme's root folder, create a new folder called `reviews` 

- Within this folder, create an empty `reviews.json` file

- In `_resources/js` folder, create a new `simple-carousel.js` file

- Go to the Assets tab

- Copy the JS code from `simple-carousel.js`

- Paste the code into your new `_resources/js/simple-carousel.js` file

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

- Create a new twig file for your Reviews carousel component: `_views/_components/reviewsio.twig`

- Copy the code from Fractal's View tab

- Paste the code into your new `_views/_components/reviewio.twig` file

- Include it wherever you want on your site: `{% include "_components/reviewsio.twig" %}`