## WordPress Integration

When integrating the header component into the Adtrak WordPress boilerplate, use the following include to pass WP data into the component:

@todo finish this include properly...
```
{% include 'components/header.twig' with {
    topNav: query-here,
    nav: query-here
} only %}
```