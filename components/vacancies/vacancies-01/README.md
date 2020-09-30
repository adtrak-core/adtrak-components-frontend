## WordPress Integration

When integrating the Vacancies component into the Adtrak WordPress boilerplate, use the following include to pass WP data into the component:

- Grab the `cpt.php` code from the assets tab and drop it into your `_functions/cpt.php` file to create the "Vacancies" Post Type.

- Import the `acf.json` code from the assets tab to create the data model on the custom post type

- Add some vacancies to the backend

- In your php file (`page.php`, `page-vacancies.php` etc) paste the below code to add Vacancies into context:

```
$vacancies = [
    'post_type' => 'vacancies',
    'posts_per_page' => -1, //Change this if you'd only like to show X amount of projects
];

$context['vacancies'] = new Timber\PostQuery($vacancies);
```

- Create `_components/vacancies.twig`, then copy and paste the Fractal code in

- Check integration notes in your component by searching "@INTEGRATION" to ensure the "/contact" link is correct.

- Reference the include on your page template (`page.twig`, `page-vacancies.twig` etc) as so, passing in the context we created earlier:

```
{% include "_components/vacancies.twig" with {
  vacancies: vacancies
} only %}
```