## WordPress Integration

Use the following guide to add the *FAQs* module to your website:

- Go to the Assets tab

- Download the `acf.json` file from the assets tab 

- Go to the Wordpress Admin panel

- Go to Custom Fields > Tools and import your acf file
- - This will create the FAQs field group in your 'Site Options' page

- Add content to the FAQs in your site options

- From the Views tab in Fractal, copy the code for the variant you wish to use

- In your theme, create `_components/faqs.twig` and paste in the Fractal code

- On your page, include your new FAQs module using the include below:

```
{% include "_components/faqs.twig" with {
  faqs: options.faqs
} only %}
```

*Note that the `options` variable is global by default*