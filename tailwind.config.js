module.exports = {
  purge: {
    content: ['./components/**/*.twig'],
    options: {
      whitelist: ['whitelist'],
    }
  },
  theme: {
    screens: {
			sm: '520px',
      md: '768px',
      lg: '1024px',
			xl: '1280px',
			'2xl': '1600px'
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
          dark: '#1D997D'
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
  plugins: [],
  corePlugins: {
		container: false,
	},
};
