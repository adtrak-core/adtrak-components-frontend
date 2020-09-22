## WordPress Integration

When integrating the buckets component into the Adtrak WordPress boilerplate, import the ACF Json file from the assets tab, it will create "buckets" relationship field on the Front Page post by default. Create a `_views/components/buckets.twig` file, paste the Fractal markup in, then use the following include on `front-page.twig` to pass WP data into the component:

```
{% include '_components/buckets.twig with {
    buckets: post.meta('buckets')
} only %}
```