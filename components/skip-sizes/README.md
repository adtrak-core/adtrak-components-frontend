## WordPress Integration

Use the following guide to add the *Skip Sizes* module to your website:

- Go to the Assets tab

- Download the `acf.json` file from the assets tab 

- Also in the Assets tab, there are several skip size SVG images for you to use

- Go to the Wordpress Admin panel

- Go to Custom Fields > Tools and import your acf file
- - This will create a Skip Sizes field group in your 'Site Options' page

- Add in your skip sizes data in your site options

- In your theme, create `_views/_components/skip-size-card.twig`

- In Fractal, go to the *Skip Size Card* module in the components menu on the left hand side

- Copy the code from View tab into your `skip-size-card.twig` file

- Now, in your theme, create `_views/_components/skip-sizes.twig`

- Back in the *Skip Sizes Module* in Fractal, go to the Views tab and copy the code into this file

- Include it wherever you want on your site: {% include "_components/skip-sizes.twig" %}