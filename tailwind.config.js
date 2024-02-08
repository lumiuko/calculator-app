/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        primary: 'inset 0 -4px 0 0 hsl(var(--primary-shadow))',
        secondary: 'inset 0 -4px 0 0 hsl(var(--secondary-shadow))',
        tertiary: 'inset 0 -4px 0 0 hsl(var(--tertiary-shadow))'
      }
    },
    colors: {
      'main-background': 'hsl(var(--main-background) / <alpha-value>)',
      'toggle-background': 'hsl(var(--toggle-background) / <alpha-value>)',
      'screen-background': 'hsl(var(--screen-background) / <alpha-value>)',
      'keypad-background': 'hsl(var(--keypad-background) / <alpha-value>)',
      'primary-background': 'hsl(var(--primary-background) / <alpha-value>)',
      'primary-background-hover': 'hsl(var(--primary-background-hover) / <alpha-value>)',
      'primary-text': 'hsl(var(--primary-text) / <alpha-value>)',
      'primary-shadow': 'hsl(var(--primary-shadow) / <alpha-value>)',
      'secondary-background': 'hsl(var(--secondary-background) / <alpha-value>)',
      'secondary-background-hover': 'hsl(var(--secondary-background-hover) / <alpha-value>)',
      'secondary-text': 'hsl(var(--secondary-text) / <alpha-value>)',
      'secondary-shadow': 'hsl(var(--secondary-shadow) / <alpha-value>)',
      'tertiary-background': 'hsl(var(--tertiary-background) / <alpha-value>)',
      'tertiary-background-hover': 'hsl(var(--tertiary-background-hover) / <alpha-value>)',
      'tertiary-text': 'hsl(var(--tertiary-text) / <alpha-value>)',
      'tertiary-shadow': 'hsl(var(--tertiary-shadow) / <alpha-value>)',
      'main-text-color': 'hsl(var(--main-text-color) / <alpha-value>)'
    },
    fontSize: {
      sm: '0.75rem', // 12px
      md: '1.25rem', // 20px
      lg: '1.75rem', // 20px
      xl: '2rem', // 32px
      '2xl': '2.5rem', // 40px
      '3xl': '3.5rem' // 56px
    },
    fontFamily: {
      sans: ['League Spartan', 'sans-seri']
    }
  },
  plugins: []
}
