## WordPress Integration

Use the following guide to add the *Meet The Team* module to your website:

- Go to the Assets tab

- Copy the contents of `cpt.php` code and paste it into your `_functions/cpt.php` file to create the "Team Members" Post Type

- Go to the Assets tab

- Download the `acf.json` file from the assets tab 

- Go to the Wordpress Admin panel

- Go to Custom Fields > Tools and import your acf file
- - This will add Custom Fields to the Team Members post type

- Add your Team Members

- In your theme, open your PHP file (`page.php`, `front-page.php` etc)

- Paste the below code to add Team Members to the context
```
$teamMembers = [
    'post_type' => 'team-members',
    'posts_per_page' => -1, //Change this if you'd only like to show X amount of projects
];

$context['teamMembers'] = new Timber\PostQuery($teamMembers);
```

- Create `_views/_components/meet-the-team.twig`

- Go to Fractal and copy the code you would like from the View tab

- Paste the code into `_views/_components/meet-the-team.twig`

- Open the twig file you would like to include Team Members on

- Paste the below include within the `{% block content %}` block
```
{% include "_components/meet-the-team.twig" with {
  teamMembers: teamMembers
} only %}
```

### Optional Department Taxonomy ###

In the Assets tab in Fractal there is an optional Taxonomy file for 'Departments'.
This will allow you to add a department category to each Team Member.

To add this to your website:

- Go to the Assets tab

- Copy the contents of `optional-department-tax.php` code and paste it into your `_functions/taxonomies.php` file to create the "Department" Taxonomy

- Go to the Wordpress Admin Panel

- From the Team Members menu, select Department

- Add Departments as required

- Go to a Team Member's profile

- Select a Department from the list on the right hand side