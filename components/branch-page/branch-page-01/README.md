## WordPress Integration

Use the following guide to add the *Branch Page* module to your website:

- Go to the Assets tab

- Copy the contents of `cpt.php` code and paste it into your `_functions/cpt.php` file to create the "Branches" Post Type

- Go to the Assets tab

- Download the `acf.json` file from the assets tab 

- Go to the Wordpress Admin panel

- Got to Custom Fields > Tools and import your acf file

- Go to Branches and add your branches

- Create a new php file in the root of your theme called `single-branches.php` 

- Paste the below code into `single-branches.php`, this will tell branch pages to render the `single-branches.twig` template:

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

- Copy and paste the Fractal from the Views tab into the `{% block content %}` block