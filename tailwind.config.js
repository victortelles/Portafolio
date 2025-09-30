/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-base-100)",
        foreground: "var(--color-base-content)",
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-content)",
          hover: "var(--color-primary-hover)",
          active: "var(--color-primary-active)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-content)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-content)",
          hover: "var(--color-accent-hover)",
          active: "var(--color-accent-active)",
        },
        neutral: {
          DEFAULT: "var(--color-neutral)",
          foreground: "var(--color-neutral-content)",
        },
        info: {
          DEFAULT: "var(--color-info)",
          foreground: "var(--color-info-content)",
        },
        success: {
          DEFAULT: "var(--color-success)",
          foreground: "var(--color-success-content)",
        },
        warning: {
          DEFAULT: "var(--color-warning)",
          foreground: "var(--color-warning-content)",
        },
        error: {
          DEFAULT: "var(--color-error)",
          foreground: "var(--color-error-content)",
        },
        border: "var(--color-base-300)",
        ring: "var(--color-primary)",
      },
      borderRadius: {
        lg: "var(--radius-box)",
        md: "var(--radius-selector)",
        sm: "var(--radius-field)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['Share Tech Mono', 'ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [],
}

