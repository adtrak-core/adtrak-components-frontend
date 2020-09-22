## WordPress Integration

When integrating the projects component into the Adtrak WordPress boilerplate, use the following steps to add Projects:

1. Copy the PHP code from `cpt-projects.php` into `_functions/cpt.php` to create a new 'Project' custom post type
2. Copy the JS code from `projects.js` on the `assets` panel into `_resources/js` to add the required JS
3. In wp-admin go to Custom Fields -> Tools and import `acf-projects.json`
4. Create your projects in wp-admin
5. In your php file (`page.php`, `front-page.php` etc) paste the below code to add Projects into context

```
$projects = [
    'post_type' => 'project',
    'posts_per_page' => -1, //Change this if you'd only like to show X amount of projects
];

$context['projects'] = new Timber\PostQuery($projects);
```

6. Create a new file called `projects.twig` in `_views/_components/` and copy the code from Fractal into your new file
7. Use the code below to include your projects in the page

```
{% include "_components/projects.twig" with {
    projects : projects,
} only %}
```

8. Test your page
