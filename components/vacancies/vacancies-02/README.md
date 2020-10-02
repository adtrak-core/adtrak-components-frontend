## WordPress Integration

Use the following guide to add the *Vacancies* module to your website:

- From the Fractal `Assets` tab - copy and paste the `cpt.php` drop it into your `_functions/cpt.php` file to create the "Vacancies" Post Type.

- From the Fractal `Assets` tab - Import the `acf.json` code from the assets tab to create the data model on the custom post type

- From the new "Vacancies" tab in the backend, add some vacancies

- In your php file (`page.php`, `page-vacancies.php` etc, depending on where you want the vacancies to appear) paste the below code to add Vacancies into context, before the `Timber::render()` line:

```
$vacancies = [
    'post_type' => 'vacancies',
    'posts_per_page' => -1, //Change this if you'd only like to show X amount of projects
];

$context['vacancies'] = new Timber\PostQuery($vacancies);
```

- Create a new file in your `_components/` directory called `_components/vacancies.twig`

- Copy and paste your preferred variants code from the Fractal `View` tab into this file.

- Check integration notes in your component by searching "@INTEGRATION" to ensure the "/contact" link is correct.

- Reference the include on your page template (`page.twig`, `page-vacancies.twig` etc, depending on where you want the vacancies to appear) with the following code:

```
{% include "_components/vacancies.twig" with {
  vacancies: vacancies
} only %}
```