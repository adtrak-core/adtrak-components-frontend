## WordPress Integration

Use the following guide to add the *Buckets* module to your website:

- Go to the Assets tab

- Download the `acf.json` file from the assets tab 

- Go to the Wordpress Admin panel

- Go to Custom Fields > Tools and import your acf file
- - This will create a relationship field on the Front Page of your website

- Go to the Home page in your Wordpress Admin panel

- Select the buckets you require from the ACF field we just created

- In your theme, create a `_views/_components/buckets.twig` file

- Go to Fractal and copy the code you would like from the View tab

- Paste the code into `_views/_components/buckets.twig`

- Open the `_views/front-page.twig` file in your theme

- Paste the below include within the `{% block content %}` block

```
{% include '_components/buckets.twig' with {
    buckets: post.meta('buckets')
} only %}
```