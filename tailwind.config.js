
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    } else {
      return `rgb(var(${variableName}))`;
    }
  };
}
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      

      animation: {
        scroll: 'scroll 10s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },

      screens: {
        '3xl': '1900px',
        'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        custom:['Poppins', 'sans-serif'],
        body: ['Open Sans', 'system-ui', 'sans-serif'],
        heading: ['Open Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        light: withOpacity('--color-light'),
        dark: withOpacity('--color-dark'),
        accent: withOpacity('--color-accent'),
        'accent-hover': withOpacity('--color-accent-hover'),
        'accent-300': withOpacity('--color-accent-300'),
        'accent-400': withOpacity('--color-accent-400'),
        'accent-500': withOpacity('--color-accent-500'),
        'accent-600': withOpacity('--color-accent-600'),
        'accent-700': withOpacity('--color-accent-700'),
        'border-50': withOpacity('--color-border-50'),
        'border-100': withOpacity('--color-border-100'),
        'border-200': withOpacity('--color-border-200'),
        'border-base': withOpacity('--color-border-base'),
        'border-400': withOpacity('--color-border-400'),
        'gray-50': withOpacity('--color-gray-50'),
        'gray-100': withOpacity('--color-gray-100'),
        'gray-200': withOpacity('--color-gray-200'),
        'gray-300': withOpacity('--color-gray-300'),
        'gray-400': withOpacity('--color-gray-400'),
        'gray-500': withOpacity('--color-gray-500'),
        'gray-600': withOpacity('--color-gray-600'),
        'gray-700': withOpacity('--color-gray-700'),
        'gray-800': withOpacity('--color-gray-800'),
        'gray-900': withOpacity('--color-gray-900'),
        'orange-50': withOpacity('--color-orange-50'),
        'orange-100': withOpacity('--color-orange-100'),
        'orange-200': withOpacity('--color-orange-200'),
        'orange-300': withOpacity('--color-orange-300'),
        'orange-400': withOpacity('--color-orange-400'),
        'orange-500': withOpacity('--color-orange-500'),
        'orange-600': withOpacity('--color-orange-600'),
        'orange-700': withOpacity('--color-orange-700'),
        'orange-800': withOpacity('--color-orange-800'),
        'orange-900': withOpacity('--color-orange-900'),
        
        social: {
          facebook: '#3b5998',
          'facebook-hover': '#35508a',
          twitter: '#1da1f2',
          instagram: '#e1306c',
          youtube: '#ff0000',
          google: '#4285f4',
          'google-hover': '#3574de',
        },
        status: {
          pending: withOpacity('--color-pending'),
          processing: withOpacity('--color-processing'),
          complete: withOpacity('--color-complete'),
          canceled: withOpacity('--color-canceled'),
          failed: withOpacity('--color-failed'),
          'out-for-delivery': withOpacity('--color-out-for-delivery'),
        },
      },
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      },
      textColor: {
        body: withOpacity('--text-base'),
        'body-dark': withOpacity('--text-base-dark'),
        muted: withOpacity('--text-muted'),
        'muted-light': withOpacity('--text-muted-light'),
        heading: withOpacity('--text-heading'),
        'sub-heading': withOpacity('--text-sub-heading'),
        bolder: withOpacity('--text-text-bolder'),
      },

      height: {
        13: '3.125rem',
        double: '200%',
      },
      maxWidth: {
        5: '1.25rem',
      },
      maxHeight: {
        5: '1.25rem',
      },
      spacing: {
        22: '5.5rem',
      },

      borderRadius: {
        DEFAULT: '5px',
      },

      boxShadow: {
        base: 'rgba(0, 0, 0, 0.16) 0px 4px 16px',
        translatePanel: '0px 15px 50px rgba(71, 92, 111, 0.15)',
        chatBox:
          '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
        cardAction:
          '0 0 0 1px #8898aa1a, 0 15px 35px #31315d1a, 0 5px 15px #00000014',
        chat: '0px 1px 2px rgba(0, 0, 0, 0.08)',
        promptSuggestion: '0px 2px 6px rgba(59, 74, 92, 0.1)',
      },
      gridTemplateColumns: {
        fit: 'repeat(auto-fit, minmax(0, 1fr))',
      },

    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [ 
    require('tailwindcss-animated')
  ],
});

