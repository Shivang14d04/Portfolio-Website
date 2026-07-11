/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // High-end dark theme palette (Linear/Vercel deep navy/slate)
        dark: {
          bg: '#0B0F19',      // Deep Navy Slate
          card: '#131A2A',    // Deep slate card
          border: '#1F293D',  // Subtle slate border
          text: '#F1F5F9',    // High-contrast off-white text
          muted: '#94A3B8'    // Cool slate grey for muted text
        },
        // Premium brand accents
        brand: {
          primary: '#6366F1',   // Indigo Accent
          secondary: '#7C3AED', // Violet Accent
          blue: '#3B82F6',      // Blue Highlight
          purple: '#8B5CF6',    // Soft Purple Glow
          bg: '#F8FAFC'         // Soft slate-50 background
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in': 'slideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(99, 102, 241, 0.25)',
        'glow-secondary': '0 0 20px rgba(124, 58, 237, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'premium-sm': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'premium-md': '0 12px 30px -10px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'premium-lg': '0 20px 40px -15px rgba(0, 0, 0, 0.12), 0 8px 20px -5px rgba(0, 0, 0, 0.04)',
        'premium-dark-md': '0 12px 30px -10px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(255, 255, 255, 0.03)',
        'premium-dark-lg': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 1px 3px rgba(255, 255, 255, 0.05)',
      }
    },
  },
  plugins: [],
}
