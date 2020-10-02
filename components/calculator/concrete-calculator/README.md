## WordPress Integration

Use the following guide to add the *Concrete Calculator* module to your website:

- In `_resources/js` folder, create a new `concrete-calculator.js` file

- Go to the Assets tab

- Copy the JS code from `concrete-calculator.js`

- Paste the code into your new `_resources/js/concrete-calculator.js` file

- Create a new twig file for your Concrete Calculator component: `_views/_components/reviewsio.twig`

- Copy the code from Fractal's View tab

- Paste the code into your new `_views/_components/concrete-calculator.twig` file

- Include it wherever you want on your site: `{% include "_components/concrete-calculator.twig" %}`