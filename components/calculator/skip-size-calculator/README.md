## WordPress Integration

Use the following guide to add the *Skip Size Calculator* module to your website:

- Firstly, you need to add the Skip Size Card component found in the *Skip Sizes* module

- Go to the *Skip Sizes* module, and follow the steps (import the acf.json file and add the `skip-size-card` component to your site)

- Once you have your skip sizes data in WordPress and the skip-size-card component in place at `_views/_components/skip-size-card.twig`, you can continue with the following steps

- In `_resources/js` folder, create a new `skip-size-calculator.js` file

- Go to the Assets tab

- Copy the JS code from `skip-size-calculator.js`

- Paste the code into your new `_resources/js/skip-size-calculator.js` file

- Create a new twig file for your Skip Size Calculator component: `_views/_components/skip-size-calculator.twig`

- Copy the code from Fractal's View tab

- Paste the code into your new `_views/_components/skip-size-calculator.twig` file

- Include it wherever you want on your site: `{% include "_components/skip-size-calculator.twig" %}`