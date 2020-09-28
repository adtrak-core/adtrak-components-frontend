## WordPress Integration

When integrating the Meet The Team component into the Adtrak WordPress boilerplate, use the following include to pass WP data into the component:

- Grab the `cpt.php` code from the assets tab and drop it into your `_functions/cpt.php` file to create the "Team Members" Post Type, there's also an optional additional cpt file to create "Departments" within this CPT.

- Import the `acf.json` code from the assets tab to create the data model on the custom post type

- Add some team members to the backend

- In your php file (`page.php`, `front-page.php` etc) paste the below code to add Team Members into context:

```
$teamMembers = [
    'post_type' => 'team-members',
    'posts_per_page' => -1, //Change this if you'd only like to show X amount of projects
];

$context['teamMembers'] = new Timber\PostQuery($teamMembers);
```

- Create `_components/meet-the-team.twig`, then copy and paste the Fractal code in

- Reference the include on your page template as so, passing in the context we created earlier:

```
{% include "_components/meet-the-team.twig" with {
  teamMembers: teamMembers
} only %}
```