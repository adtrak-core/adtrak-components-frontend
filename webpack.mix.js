let mix = require('laravel-mix');

mix.postCss('resources/css/main.css', 'build/css', [
  require('tailwindcss'),
])

mix.browserSync({
  proxy: 'localhost:4444',
  files: ["components/**/*.twig"]
});