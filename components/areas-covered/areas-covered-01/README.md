## WordPress Integration

When integrating the areas covered component into the Adtrak WordPress boilerplate, use the following include to pass WP data into the component:

- Grab the `cpt.php` code from the assets tab and drop it into your `_functions/cpt.php` file to create the "Locations" Post Type

- Add some locations to the backend

- Add the following to your `_functions/timber.php` file, just before the `return $context;` line - this will add a `locations` variable to your global context.
```
// Get the locations
$locationArgs = array(
'post_type' => 'locations',
'posts_per_page' => -1
);
$context['locations'] = Timber::get_posts($locationArgs);
```

- Create a "Areas We Cover" page in WordPress and a `page-areas-we-cover.twig` template file in your theme root

- Copy and Paste the Fractal code into your `{% block content %}` in this template.

- Follow the `@INTEGRATION` comments in the file to update the map