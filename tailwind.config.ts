import { type Config } from 'tailwindcss';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ['*'],
  theme: {
    extend: {
      boxShadow: {
        'colored-sm':
          '.25rem .25rem 0 var(--primary-500), -.25rem -.25rem 0 var(--secondary-200)',
        'colored-md':
          '.5rem .5rem 0 var(--primary-500), -.5rem -.5rem 0 var(--secondary-200)',
        'colored-lg':
          '.75rem .75rem 0 var(--primary-500), -.75rem -.75rem 0 var(--secondary-200)',
        'colored-xl':
          '1rem 1rem 0 var(--primary-500), -1rem -1rem 0 var(--secondary-200)',
      },
      colors: {
        fg: 'var(--fg)',
        bg: 'var(--bg)',
        neutral: {
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
        },
        primary: {
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
        },
        secondary: {
          100: 'var(--secondary-100)',
          200: 'var(--secondary-200)',
          300: 'var(--secondary-300)',
          400: 'var(--secondary-400)',
          500: 'var(--secondary-500)',
        },
        accent: {
          100: 'var(--accent-primary-100)',
          200: 'var(--accent-primary-200)',
          300: 'var(--accent-primary-300)',
          400: 'var(--accent-primary-400)',
          500: 'var(--accent-primary-500)',
        },
      },
    },
  },
  plugins: [],
};
