## WordPress Integration

Use the following guide to add the *Areas Covered* module to your website:

- Go to the Assets tab

- Copy the contents of `cpt.php` code and paste it into your `_functions/cpt.php` file to create the "Locations" Post Type

- Go to your website's Wordpress Admin Panel

- In your new Location post type, add your website locations

- Add the following to your `_functions/timber.php` file, just before the `return $context;` line - this will add a `locations` variable to your global context.
```
// Get the locations
$locationArgs = array(
'post_type' => 'locations',
'posts_per_page' => -1
);
$context['locations'] = Timber::get_posts($locationArgs);
```

- Go back to the Wordpress admin panel

- Create a "Areas We Cover"

- In your theme, duplicate `_views/page.twig` and rename it to `page-areas-we-cover.twig`

- In `page-areas-we-cover.twig` replace the `{% block content %}` code with the code from the Views tab in Fractal

- Follow the `@INTEGRATION` comments in the file to update the map