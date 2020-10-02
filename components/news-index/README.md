## WordPress Integration

Use the following guide to add the *News Index* module to your website:

- Go to the Wordpress Admin Panel and make sure you have News posts and Categories

- Go to Fractal and copy the code you would like from the View tab

- Paste the code into the `{% block content %}` of `_views/index.twig` 

- Double check your category permalinks are correct (search `@INTEGRATION` in the copied code)

- The social links are pulled from the "Site Options" page