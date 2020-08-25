'use strict';

const path = require('path');
const twigAdapter = require('@frctl/twig')();
const fractal = module.exports = require('@frctl/fractal').create();

fractal.components.engine(twigAdapter);
fractal.components.set('ext', '.twig');

fractal.set('project.title', 'Adtrak Components Fractal');
fractal.web.set('server.port', 4444);
fractal.components.set('path', path.join(__dirname, 'components'));
// fractal.web.set('static.path', path.join(__dirname, 'public'));
fractal.web.set('builder.dest', __dirname + '/build');