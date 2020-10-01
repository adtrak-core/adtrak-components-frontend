## WordPress Integration

When integrating the Branch Page component into the Adtrak WordPress boilerplate, use the following include to pass WP data into the component:

- Grab the `cpt.php` code from the assets tab and drop it into your `_functions/cpt.php` file to create the "Branches" Post Type.

- Import the `acf.json` code from the assets tab to create the data model on the custom post type

- Add some Branches to the backend

- Create a new php file in the root of your project called `single-branches.php` and paste the below code in, this will tell branch pages to render the `single-branches.twig` template:

```
<?php 

$context = Timber::context();
$timber_post = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( [ 'single-branches.twig' ], $context );

if (is_single()) { ?>
<script type="text/javascript">
  document.querySelector('.current_page_parent').classList.add('current-menu-item');
</script>
<?php }
```

- Create `_views/single-branches.twig`, then copy and paste the following code into it:

```
{% extends '_layout/base.twig' %}

{% block content %}
{% endblock %}
```

- Copy and paste the Fractal code into the `{% block content %}` block