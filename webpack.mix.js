let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

// @TODO - Write some conditional here...
// This one for dev...
// mix.postCss('resources/css/main.css', 'public/css', [tailwindcss('./tailwind.config.js')]);
// This one for prod...
mix.postCss('resources/css/main.css', 'build/css', [tailwindcss('./tailwind.config.js')]);

mix.browserSync({ proxy: 'localhost:4444', files: ["components/**/*.twig"] });