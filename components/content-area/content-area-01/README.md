## WordPress Integration

To integrate the "content area":

- Grab the acf.json from the "assets" tab and import it in your WordPress backend

- This will create a bunch of "Content" fields on both your "pages" and "options page" which work as fallbacks

    - For variant one, there is a "Content USPs" repeater field - the code will prioritize the data on the specific page, however, will fallback to the data in the options page

    - For variant two, there is a "Content Image" gallery field - the code will priorize the data on the specific page, however will fallback to the data in the options page

    - For variant three, there is a "Content Why Choose Us" repeater field - the code will priorize the data on the specific page, however will fallback to the data in the options page

- Copy and Paste your preferred variant from Fractal and paste it into the `{% block content %}` of your page (eg: `page.twig`)