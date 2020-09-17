let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

// mix.postCss('resources/css/main.css', 'public/css', [tailwindcss('./tailwind.config.js')]);
mix.postCss('resources/css/main.css', 'build/css', [tailwindcss('./tailwind.config.js')]);

mix.browserSync({ proxy: 'localhost:4444', files: ["components/**/*.twig"] });