module.exports = {
  purge: {
    content: ['./components/**/*.twig'],
    options: {
      whitelist: ['whitelist'],
    }
  },
  theme: {
    screens: {
      '2xs' : '375px',
      'xs' : '480px',
      'sm' : '600px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1400px',
      '3xl' : '1600px',
      '4xl' : '1900px',
    },
    extend: {
      colors: {
        primary: {
          light: '#667EEA',
          default: '#162980',
          dark: '#17266A'
        },
        secondary: {
          default: '#1DB77F',
          dark: '#1D997D',
          light: '#78EFC4'
        }
      },
      fontFamily: {
				sans: [
					'Roboto',
					'Arial',
					'sans-serif'
				],
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'group-hover', 'hover', 'focus', 'group-focus'],
    textColor: ['responsive', 'group-hover', 'hover', 'focus', 'group-focus'],
    padding: ['responsive', 'group-hover', 'hover', 'focus', 'group-focus'],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  corePlugins: {
		container: false,
	},
};
