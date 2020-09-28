## WordPress Integration

When integrating the FAQs component into the Adtrak WordPress boilerplate, use the following include to pass WP data into the component:

- Import the `acf.json` code from the assets tab to create the data model within the "site options" ACF options page

- Add some content in the back end

- Create `_components/faqs.twig`, then copy and paste the Fractal code in

- Reference the include on your page template as so, passing in the context we created earlier (the `options` variable is setup to be a global variable by default):

```
{% include "_components/faqs.twig" with {
  faqs: options.faqs
} only %}
```