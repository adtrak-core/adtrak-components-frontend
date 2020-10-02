## WordPress Integration

Use the following guide to add the *Why Choose Us* module to your website:

The "Why Choose Us" module uses the Why Choose Us included in the boilerplate's "Site Options" page.

- Go to the Wordpress Admin Panel

- Ensure you have entered Why Choose Us information into the "Site Options" page in 

- Use the below include to include the Why Choose Us module on your page templates:
```
{% include "_components/why-choose-us.twig" with {
  whyChooseUs: options.why_choose_us
} %}
```

### Variant Two ###

`why-choose-us-02.twig` has a separate icon that is also pulled from "Site Options" repeater

- Ensure you have entered an icon ID, for example, enter `star` to output a star icon

- Search the `why-choose-us-02.twig` file for `@INTEGRATION` comments and follow the steps to integrate