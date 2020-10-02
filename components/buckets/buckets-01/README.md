## WordPress Integration

Use the following guide to add the *Buckets* module to your website:

- Go to the Assets tab

- Download the `acf.json` file from the assets tab 

- Go to the Wordpress Admin panel

- Got to Custom Fields > Tools and import your acf file

- This will create a relationship field on the Front Page of your website

- Go to the Home page in your Wordpress Admin panel

- Select the buckets you require from the ACF field we just created

- In your theme, Create a `_views/components/buckets.twig` file

- Go to Fractal and copy the code you would like from the View tab

- Paste the code into `_views/components/buckets.twig`

- Open to `_views/front-page.twig` in your theme

- Copy the below include within the `{% block content %}` block

```
{% include '_components/buckets.twig' with {
    buckets: post.meta('buckets')
} only %}
```