## WordPress Integration

Use the following guide to add the *Projects* module to your website:

- Create a new file in your `_resources/js` folder: `_resources/js/projects.js`

- Copy the JS code from `projects.js` in the `assets` tab into this new file

- Copy the PHP code from `cpt-projects.php` in the `assets` tab into `_functions/cpt.php` to create a new 'Project' custom post type

- In wp-admin go to Custom Fields -> Tools and import `acf-projects.json`

- Go to the new "Projects" pane in WP admin and add some projects

- In your php file (`page.php`, `front-page.php` etc) paste the below code to add Projects into context

```
$projects = [
    'post_type' => 'project',
    'posts_per_page' => -1, //Change this if you'd only like to show X amount of projects
];

$context['projects'] = new Timber\PostQuery($projects);
```

- Create a new file called `projects.twig` in `_views/_components/` and copy the code from Fractal into your new file

- Use the code below in your template file (eg: `page.twig`, `front-page.twig` etc) to include your projects in the page

```
{% include "_components/projects.twig" with {
    projects : projects,
} only %}
```

- Test your page
