## WordPress Integration

When integrating the header component into the Adtrak WordPress boilerplate, use the following include to pass WP data into the component, it will work with the base "primary" and "secondary" menu pulled in from WordPress

```
{% include "_components/header.twig" %}
```

There are a few areas with `@INTEGRATION` comments, for example, the contact link and the location dynamics, please do a file search for `@INTEGRATION` and follow the comments instructions to finalise the component.