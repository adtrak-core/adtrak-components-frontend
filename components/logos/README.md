## WordPress Integration

When integrating the logos component into the Adtrak WordPress boilerplate, use the following include to pass WP data into the component:

```
{% include "_components/logos.twig"
  with {
    logos: options.logos,
    header: options.logos_header
  }
%}
```

This will use the default logo items from site options.