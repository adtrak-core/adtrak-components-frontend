## WordPress Integration

Use the following guide to add the *Buckets* module to your website:

- Go to the Assets tab

- Download the `acf.json` file from the assets tab 

- Go to the Wordpress Admin panel

- Got to Custom Fields > Tools and import your acf file
- - This will create a group of "Content" fields on both your "pages" and "Site Options page" which work as fallbacks

- In Fractal, copy your preferred variant from the Views tab

- Paste the code into the `{% block content %}` of your page (eg: `page.twig`)

### Variant One

Variant One uses the 'Content USPs' repeater field

The code will prioritize the data on the specific page, however, it will fallback to the data in the Site Options page if a page doesn't have specific data.

### Variant Two

Variant Two uses the 'Content Image' gallery field.

The code will prioritize the data on the specific page, however, it will fallback to the data in the Site Options page if a page doesn't have specific data.

### Variant Three

Variant Three uses the 'Content Why Choose Us' repeater field

*The `Icon` field refers to an icon ID from `icon-sprite.svg`.* 
Some icons are included in the boilerplate as standard, or you can add your own.

For example, to use a star icon, you would input `star` into this field.

The code will prioritize the data on the specific page, however, it will fallback to the data in the Site Options page if a page doesn't have specific data.
