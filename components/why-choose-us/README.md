## WordPress Integration

When integrating the why choose us component into the Adtrak WordPress boilerplate, use the following include to pass WP data into the component:

```
{% include "_components/why-choose-us.twig" with {
  whyChooseUs: options.why_choose_us
} %}
```

This will use the default why choose us items from site specific.

`why-choose-us-02.twig` has a separate icon that is also pulled from site specific, using the standard icon sprite. This will need to be uncommented.