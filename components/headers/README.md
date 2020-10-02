## WordPress Integration

Use the following guide to add the *Header* module to your website:

- Ensure you have  "Primary Menu" set up in Appearance > Menus.
- - Make sure "Primary Menu" is linked to "Primary Menu Location" in the checkboxes of this page

- Ensure you have  "Secondary Menu" set up in Appearance > Menus.
- - Make sure "Secondary Menu" is linked to "Secondary Menu Location" in the checkboxes of this page

- From the View tab in Fractal, copy the code for the Header you'd like to use

- Paste the code into `_views/_components/header.twig`

- Look in `header.twig` for `@INTEGRATION` comments and follow the steps to remove Fractal code.


### Variant Three ###

Header-03 has an optional topNavUsps's array that can be passed into it. You can add topNavUsps by adding data to the header include.

- Open `_views/_layout/base.twig`

- Replace the existing header include with the header include below:
```
{% include "_components/header.twig" with {
    topNavUsps: ['USP ONE', 'USP TWO', 'USP THREE']
} %}
```