## WordPress Integration

When integrating the news page component into the Adtrak WordPress boilerplate, use the following include to pass WP data into the component:

- Add some posts and categories to your backend
- Simply copy and paste the fractal code into your `{% block content %}` on `index.twig`
- Double check your category permalinks are correct (search `@INTEGRATION` in the copied code)
- The social links are pulled from the site options options page