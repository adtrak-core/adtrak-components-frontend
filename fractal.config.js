'use strict';

const path = require('path');
const twigAdapter = require('@frctl/twig')();
const mandelbrot = require('@frctl/mandelbrot');

const theme = mandelbrot({
    skin: 'black',
    highlightStyles: 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.1.2/build/styles/night-owl.min.css',
    panels: ['view', 'html', 'context', 'resources', 'notes']
});

const fractal = module.exports = require('@frctl/fractal').create();

fractal.components.engine(twigAdapter);
fractal.components.set('ext', '.twig');

fractal.set('project.title', 'Adtrak Components Library');
fractal.web.set('server.port', 4444);
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.docs.set('path', __dirname + '/docs');
fractal.web.set('static.path', path.join(__dirname, 'build'));
fractal.web.set('builder.dest', __dirname + '/build');
fractal.web.theme(theme);